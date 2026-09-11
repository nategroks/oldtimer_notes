# HM Consolidation Procedure — two History Modules into one

Companion to [[HM initialization.]]. This is the plan for retiring one HM ("HM-B") and moving everything it holds onto the HM that stays ("HM-A"). Sources are the March 2013 Engineer's Reference Manual (ERM, SW09-605), Network Data Entry (SW11-605), Network Form Instructions (SW12-605) and Command Processor Operation (SW11-607). Page numbers below are from those manuals.

---

## 0. Read this first — what you are really doing

1. **Any change to an HM's volume configuration in the NCF forces a full F6 re-initialization of that HM.** Initialization erases every volume on the disk (NDE p.19, NFI p.15). Adding HM-B's units, areas, checkpoint nodes or user volumes to HM-A changes HM-A's volume configuration. So HM-A gets wiped and rebuilt. Plan for it.
2. **Continuous history data cannot be restored to an HM whose continuous-history configuration changed** (ERM 7.7, p.138, Table 7-17). Adding HM-B's units to HM-A's Continuous History page is exactly that change. Expect to lose the trend history on both HMs at cutover unless you pick Option B in section 2. History **group definitions** survive via EB/IDF files. Journals for a unit that moves HMs are in the same boat.
3. **Checkpoint volumes are the same story.** "If you reconfigure checkpoint volumes on an HM that is on-line, you will have to copy all of the data on that HM to removable media or another HM. It must be initialized" (ERM 21.1, p.331).
4. **The system volume (&ASY) is special.** If HM-B holds the system volume, follow the Table 18-2 order (ERM p.291): both HMs in HMI, initialize the old holder first, then the new one. Never leave the LCN without a reachable &ASY, or you cannot load another node (ERM 3.1, p.50).
5. **Some volumes exist only once per LCN.** &0np system, &1np personalities (directories can be spread), !4np on-process analysis, !9np local. Others are per-unit or per-node and can be spread across HMs: &Dan areas, &5np–&8np checkpoint directories, !0np/!1np continuous history units, !2np journal units (ERM Table 7-1, p.72). Consolidation means all of them land in HM-A's node pair.
6. **Hard limits on the surviving HM** (ERM 7.2.1 p.71, 7.2.2 p.75, NFI p.90):
   - 14 volumes plus !9np on a single/redundant-pair drive, 29 plus !9np on dual drives. 63 directories per volume.
   - Continuous history: 120 groups recommended, 150 hard max on a non-system HM. **40 pps on a system HM, 50 pps on a non-system HM with K4LCN and WDA 445/875/1.8 GB drives.** Do the pps sum by hand; CTRL+F1 only warns.
   - Rules of thumb: if HM-A's CPUFREE is already under 40 percent or disk transfers exceed 800–900 per minute, it is full. Do not consolidate onto it (ERM 23.7.1, p.495).

If HM-A cannot absorb HM-B's history load within those numbers, the answer is "no", not "try it".

---

## 1. Decisions to lock before touching anything

| Decision | Options | Notes |
|---|---|---|
| Which HM survives | HM-A | Prefer the one with the bigger/newer drives and K4LCN. Prefer the one that already holds &ASY, so Table 18-2 does not apply. |
| History data | Option A: accept loss, rebuild groups from EB. Option B: keep HM-A's history untouched, drop HM-B's units from continuous history entirely. Option C: archive externally first (PHD/Experion/history archive to media) then Option A. | Option B only works if HM-A's Continuous History page is not edited at all. |
| Journals | Print or export what you need from HM-B's unit journals before cutover. | Moved-unit journal data does not come back. |
| Checkpoints | Copy old &Ihn/&Fun/&Hun directories over, then demand-checkpoint every node after cutover. | You need a valid checkpoint on HM-A before any node reload is safe. |
| Node number | Keep HM-A's node number and node pair number. | Changing them is a second, avoidable reconfiguration. |
| Window | Full outage of history collection and checkpointing for the duration, plus loss of trend call-ups while HM-A is down. | Operators keep the last 3 schematics in memory. Put schematics on zip/emulated disks in the Area DB paths for the outage. |

---

## 2. Inventory and feasibility (do this a week ahead)

From a US/ES-T in the Universal personality, Command Processor:

```
DO $Fn>WORK>INVENT.XX      (or DO $Pn to a printer)
PD ON
LSV NET
LSV PN:aa                   (aa = HM-A node)
LSV PN:bb                   (bb = HM-B node)
LS PN:bb>*>*.*              (file counts per volume, for sizing media)
LS PN:aa>*>*.*
PD OFF
```

Then in Network Configuration → Volume Configuration, select each node pair, F4 PRINT every page, and F8 DISPLAY FILE for the NCFxx.ER storage allocation report. From those, build one table:

| Item | HM-A today | HM-B today | HM-A after |
|---|---|---|---|
| Disk type/size, number of Winchesters, redundant | | | |
| System volume (&ASY)? | | | must be YES on exactly one |
| Personality images (&1np directories) | | | union |
| Dump volume size | | | keep on same HM as personality dirs |
| Areas (&Dan) volume sizes / files | | | union |
| Checkpoint nodes (page "Physical Node for Checkpoint") | | | union, re-do file counts per NFI p.88 |
| Continuous history units + groups | | | union; sum pps |
| Journal units (process + system) | | | union |
| CL storage (&4np, &9np) | | | union |
| User volumes (names, size, files, fast-search?) | | | union; first user volume is the fast-search one |
| Total KB used vs drive capacity | | | must fit with headroom |

pps calculation per unit: `(points in group ÷ save rate seconds) summed over all groups`. Example: 150 groups × 20 points at 60 s = 50 pps. Compare against 40 (system HM) or 50 (non-system).

Also collect:
- Current NCF revision and a fresh backup &ASY: `EC $F1>&EC>ASY_BKUP.EC` from the &Z1 disk (ERM 3.2, p.52).
- Area DB Pathname Catalogs: check for any explicit `PN:bb>` paths. Anything pointing at HM-B by node number breaks. `NET>` paths are fine.
- EB/IDF files for every history group on both HMs. If they do not exist, generate them now (Data Entity Builder). This is your only way back for group definitions.
- Which nodes checkpoint to HM-B (AM, NIM, HG, CG). These are the nodes that will run without automatic checkpointing during the window.
- Fast-load disks / emulated disks in use. They will need the new &ASY (*.SE/*.SP, NCF.CF) afterwards.
- Enough formatted media. Zip/emulated disk: `CR $F1>BU01 -F -MF 10000 -BS 1000 -X` with the file count from `LS PN:nn>*>*.*` plus about 100 (Command Processor p.52). On an ES-T, emulated disks live in `C:\HWIAC\Databases\EmulatedDisks\*.lcn` and are mounted from Native Window → Access → Mount/Dismount Emulated Disks.

Go/no-go: fits on disk, within volume/directory counts, within pps and group limits, CPUFREE headroom on HM-A, all EB files exist, a reachable copy of &ASY exists off both HMs.

---

## 3. Build the new NCF (offline, no impact yet)

Engineering Main Menu → NETWORK CONFIGURATION. Work on NCF.WF; nothing is live until F2 INSTALL.

1. **Volume Configuration → HM-A node pair.** On each sub-display add HM-B's entries:
   - Program Image: tick every personality that lived on HM-B. Keep the dump volume here if personalities are here.
   - Area Data Volume: add HM-B's areas with their sizes and file counts.
   - Physical Node for Checkpoint: add HM-B's node numbers, sizes and file counts (redundant partners entered consecutively; HG size 0).
   - Continuous History Units and Groups: add HM-B's units and group counts (entries consecutive, no blanks). Then Group Options / HM-Unit Options to match HM-B's save rates, snapshots, user averages, prearchive hours. **Option B: do not touch this page at all.**
   - Journals: add HM-B's process units; if HM-B had system unit journals, move SYSTEM UNIT JOURNALS = YES and the burst buffer/journal sizes here.
   - CL Storage and User File Storage: recreate HM-B's user volumes by the same names and sizes (names must be unique on the LCN, so they cannot exist on both HMs at once; that is fine because HM-B will be gone).
   - If HM-B held the system volume: SYSTEM VOLUME = YES here, NO on HM-B. HM INIT PERSONALITY = YES here.
2. **Volume Configuration → HM-B node pair.** Either strip it to nothing, or skip and delete the node in the next step. Do not leave duplicate unit/area/checkpoint assignments on both pairs.
3. **LCN Nodes → History Module Node → HM-B → DELETE NODE.** Then F9 PACK NCF. (If you prefer to keep HM-B in the NCF as a cold spare until verification is done, delete it in a second NCF change later. That costs one more install but keeps the rollback simpler.)
4. **F1 CHECK (CTRL+F1).** Fix every error. Read the HM checker warnings; the 40/50 pps and 120/150 group warnings are real limits for you.
5. **F4 PRINT** all changed pages and **F8** the storage allocation report. Keep them with the cutover pack.
6. **Do not F2 INSTALL yet.** Install happens inside the cutover window because it forces the HM initialization.

Note on offline vs online mode: deleting an HM node and changing volume configuration are normally done as an on-line network reconfiguration; only unit name deletion/swaps force full offline mode (NDE 2.2, p.18). You are not renaming units, so this stays an online change with the HM(s) as the nodes that reload.

---

## 4. Cutover — the order matters

Assume HM-A keeps &ASY (the common case). Skip to 4.7 for the variant where HM-B held it.

### 4.1 Freeze the system
1. Notify operations. Trend/history unavailable for the window; schematics from removable media only if HM-A holds them.
2. On every AM, NIM, HG, CG: disable automatic checkpointing and take one final demand checkpoint (to the HM they use now). No demand checkpoints after this point until 4.6.
3. HM Status display → HM-A and HM-B → HIST COLLECT → DISABLE. Stop scheduled logs and any computer/CG history pulls.
4. Support Utilities → Modify Volume Paths: make sure no station path you will need during the outage points at NET. Set device paths to removable media, &Z1 in the lower drive, BACKUP NCF (&ASY copy) in the upper drive (ERM 7.7.2 step 7).

### 4.2 Save HM-A (it is about to be wiped)
```
CR $F1>&ASY -F -MF 3000 -BS 1700
CP NET>&ASY>*.* $F1>&ASY>= -D           BACKUP NCF disk, the current live one
BACKUP PN:aa $F2                        everything except history; creates BKUPaa.EC
```
If HM-B has free space it is a legal, faster staging target (ERM p.73 "copy volumes to/from the other HM instead of to disks"):
```
CPV PN:aa>VOLM> PN:bb>STAGE_VOLM> -A -D     one per user/area/CL/checkpoint volume
```
But keep the media backup too. HM-B is the rollback, not just a scratch disk.

Option B only (keeping HM-A's history): load HM-A with &HMI first, then `CPV PN:aa>!0np> $Fn>HST1 -A -D` and `!1np` per ERM 7.7.2 steps 3–6, and verify file counts with `LS -A`. Continuous history copied while HMO is running is corrupt and will crash the HM later.

### 4.3 Save HM-B (it is the source for everything moving)
HM-B stays **online in HMO** for now; you copy from it after HM-A is rebuilt. But take a media backup anyway, now:
```
BACKUP PN:bb $F3
```
Print HM-B's unit journals you must keep. Confirm EB files for HM-B's history groups exist on media.

### 4.4 Install the NCF and initialize HM-A
1. Network Configuration → F2 INSTALL. Accept the impact display; HM-A is listed as needing reinitialization.
2. Refresh BACKUP NCF: `CP NET>&ASY>*.* $F1>&ASY>= -D` again so the disk has the installed NCF.CF.
3. HM Status → HM-A → SHUTDOWN → wait for QUALIF → LOAD/DUMP → MANUAL LOAD → INIT PROGRAM. Program from &Z1 (alternate source, drive 1), data (NCF) from BACKUP NCF (drive 2). Wait for HMOF OK.
4. Volume Configuration → HM-A node pair → **CTRL+F6 INITIALIZE**. Wait for HM INITIALIZATION COMPLETE. HM-A is now empty with the new volume map.
5. Restore the local volume and system files (from the &Z1 and BACKUP NCF disks; use `PN:` paths, `NET` does not work on an HMI HM):
```
CP $F1>&ASY>*.* PN:aa>&ASY>= -D
EC $F2>&EC>LOC_VOLZ.EC $F2 aa np          loads &HMO/&HMI into !9np
```
6. Shutdown → QUALIF → power off 5 s → power on. HM-A autoboots to HMON OK (up to an hour). Redundant drives may show SEVERE until SYNCH later.
7. Option A: no history-file dance needed. Option B: follow ERM 7.7.2 steps 8–11 exactly (run HMO 5 minutes, back to HMI, delete !0np/!1np files, reload HMI again, then `CPV $Fn>HST1> PN:aa>!0np> -A -D` or `EC $F1>&EC>RSCONTHS.EC`).

### 4.5 Repopulate HM-A
1. `LSV PN:aa` and compare with the pre-change printout plus HM-B's list. Create every missing directory with `CD`. Personality directories, area directories and checkpoint directories must exist before you copy into them.
2. HM-A's own data back: `RESTORE $F2 PN:aa` (or `EC $F2>BKUP>BKUPaa.EC $F2`; edit the .EC to skip volumes you do not want back).
3. HM-B's data across the LCN, both HMs online:
```
CPV PN:bb>&1np>  PN:aa>&1np>  -A -D      personality dirs (or reload from &Z1)
CPV PN:bb>&Dxx>  PN:aa>&Dxx>  -A -D      each area
CPV PN:bb>&Ihh>  PN:aa>&Ihh>  -A -D      each checkpoint directory (NIM/HG/UCN)
CPV PN:bb>&Fuu>  PN:aa>&Fuu>  -A -D      AM checkpoints
CPV PN:bb>&Ehh>  PN:aa>&Ehh>  -A -D      CL objects
CPV PN:bb>USERV> PN:aa>USERV> -A -D      each user volume
```
   Do not copy !0np/!1np (history) or !2np (journals) from HM-B. Their configuration changed.
4. `SYNCH PN:aa` once all restores are finished (never during a restore).
5. Set Support Utilities → Modify Volume Paths back to NET (`NET>&ASY>`), and area DB paths back to the HM.

### 4.6 Bring functions back
1. HM Status → HM-A → HIST COLLECT → ENABLE. Wait a few minutes.
2. Engineering Main Menu → HM HISTORY GROUPS: reload every group from EB/IDF for both HM-A's and HM-B's units. Check a trend from each unit.
3. Demand checkpoint from every AM/NIM/HG/CG that used to point at HM-B, then re-enable automatic checkpointing everywhere. Confirm the files landed in `PN:aa>&Ihh>` / `&Fuu>`.
4. Journals: raise a test alarm/operator change in a moved unit and confirm it shows in the journal display.
5. Call up schematics, logs and reports from each area. Any Pathname Catalog that named HM-B by node number gets fixed now.
6. Verify system date/time. Verify NCF Status display shows one NCF revision on every node.

### 4.7 Variant: HM-B held the system volume (&ASY)
Order from ERM Table 18-2, p.291:
1. Install the new NCF (SYSTEM VOLUME moves to HM-A).
2. Load **both** HMs with the HMI personality (from &Z1 + BACKUP NCF disks; nothing on the LCN can serve &ASY now, so every station you use must have its paths set to removable media).
3. Initialize HM-B (the old holder) first.
4. Initialize HM-A (the new holder).
5. Copy &ASY and the personality images to HM-A's local volume with `PN:` paths (LOC_VOLZ.EC, `CP $F1>&ASY>*.* PN:aa>&ASY>= -D`).
6. Reboot HM-B, then reboot HM-A.
Because HM-B is initialized in step 3, everything you want from it must already be on media (4.3 is mandatory, not optional, in this variant).

---

## 5. Retire HM-B
Only after 4.6 has been clean for at least one shift and one full history collection cycle at every save rate:
1. If HM-B is still in the NCF: LCN Nodes → History Module Node → DELETE NODE, F9 PACK NCF, F1 CHECK, F2 INSTALL. This is a small online change.
2. HM Status → HM-B → SHUTDOWN. Power it down. Leave it cabled but off for one more week as the cold rollback.
3. Rebuild every fast-load and emulated disk from the new &ASY: `EC $F1>&EC>ASY_BKUP.EC` and copy the new *.SE/*.SP/NCF.CF onto them (ERM 20.2.3, p.313). A station reloaded from an old fast-load disk will not match the running nodes.
4. Take a fresh full backup: `BACKUP PN:aa $Fn`, and a fresh BACKUP NCF disk. Label with date and NCF revision.
5. Update drawings, the node list and this note.

---

## 6. Rollback
Trigger: HM-A will not initialize, will not autoboot, fails the pps/CPUFREE check under load, or checkpoints/history do not verify.

1. Abort or reinstall the previous NCF from the pre-change BACKUP NCF disk (Network Configuration on that &ASY, F2 INSTALL).
2. HM-B is untouched (main path) and still online. Nodes that checkpointed to HM-B still can.
3. HM-A: HMI, initialize with the old NCF, restore from the 4.2 media backup, reload history groups from EB.
4. In the 4.7 variant HM-B was initialized, so rollback is "rebuild HM-B from the 4.3 media backup". That is why that variant gets the mandatory media backup and a longer window.

---

## 7. One-page cutover checklist

- [ ] Inventory table filled, fits capacity, pps ≤ 40/50, groups ≤ 120/150, volumes ≤ 14/29, CPUFREE > 40 percent on HM-A
- [ ] EB/IDF for every history group on both HMs, on media, verified readable
- [ ] Pre-change BACKUP NCF disk, plus a second copy
- [ ] &Z1 disk for the running release (emulated on the ES-T is fine)
- [ ] Formatted media with enough file slots (`-X`), one set per HM
- [ ] New NCF built, CHECK clean, printed, storage report printed, NOT installed
- [ ] Ops notified; schematics reachable from removable media during outage
- [ ] Auto checkpointing disabled, final demand checkpoints taken
- [ ] History collection disabled on both HMs
- [ ] HM-A backed up (BACKUP + &ASY); HM-B backed up (BACKUP)
- [ ] NCF installed; BACKUP NCF refreshed
- [ ] HM-A → HMI → F6 → LOC_VOLZ.EC → autoboot → HMON OK
- [ ] Directories recreated from printouts; HM-A restored; HM-B volumes copied via CPV
- [ ] SYNCH complete
- [ ] History groups reloaded, trends verified per unit
- [ ] Demand checkpoints from every node, auto checkpoint re-enabled
- [ ] Journals, logs, schematics, reports verified per area
- [ ] Soak one shift → delete HM-B node → PACK → INSTALL → power down HM-B
- [ ] Fast-load/emulated disks rebuilt from new &ASY; fresh full backup taken
