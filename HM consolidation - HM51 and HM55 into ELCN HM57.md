# Consolidating HM51 / HM55 into ELCN HM57

Question: HM57 is already an ELCN HM. Can we copy the contents of HM51 and HM55 into HM57 and then turn 51/55 off in the NCF?

Short answer: partly.

| What is on HM51/55 | Can it move to HM57? | How |
|---|---|---|
| User volumes, area DBs (&3np), CL objects (&4np/&9np), schematics, IDFs, logs | Yes | BACKUP PN:nn then RESTORE, or CPV volume by volume, after HM57 is rebuilt. |
| History group definitions (which points, which group) | Yes, but only as .EB or IDF files reloaded through HM History Groups | APL files from another HM will not restore into a reconfigured HM (ERM 7.7, caution). |
| Continuous history data (!0np/!1np) | No | Cannot be merged into another HM. Cannot be restored into any HM whose Continuous History config changed (ERM 7.7.1, Table 7-17). Expanding HM57's history config also destroys HM57's own history. |
| Journals (!2np) | No, if journal assignment changes | Print or archive what you need first. |
| Checkpoint volumes (&5np to &8np) | Reassign, do not copy | Reassign in Volume Configuration, then demand-checkpoint every affected node after HM57 is up. |
| Personality images / dump vols (&1np/&2np), &ASY/&0np | Only if 51 or 55 is the system HM | Then HM57 becomes the system HM: CP &ASY, LOC_VOLZ.EC, reinstall personalities from &Z1. Bigger job. |

Root cause of the "no": history groups and journals are keyed to the HM node pair in Volume Configuration. Adding units/groups to HM57 changes its Continuous History configuration, which requires a CTL-F6 initialize of HM57 (destroys everything on it), and continuous history cannot be restored after such a change.

ELCN does not change any of this. An ELCN HM still loads &HMO/&HMI, still lives in the NCF Volume Configuration, and still has the same NCF Checker limits. What ELCN gives you is (a) large emulated drives on the EST for backups instead of Zip/Bernoulli media and (b) the HM's disk is a file on the ELCN node, so a whole-disk copy of HM57 before the F6 is a byte-exact rollback. Verify the ELCN HM disk-file backup/restore steps and redundancy behaviour against the ELCN Planning & Implementation guide / CRG-690, they are not in the manuals in this repo.

---

## Decision 17 Sep 26: virtualize first, consolidate later

HM57 is the system HM. Rather than consolidate now, replace HM51 and HM55 one for one with ELCN HMs on the same node numbers and leave the NCF continuous history configuration unchanged. Reasons: continuous history can be saved and restored when its NCF items do not change (ERM 7.7.1); HM57 and NET stay up throughout, so each swap is an ordinary non-system HM rebuild; no Delete Node, so no station reload sweep. Not reversible: the coax HM hardware is being removed, so recovery is from backup media only. Before the old HM leaves the rack: two independent copies of every backup (BACKUP, history CPV, BACKUP NCF, LSV printout) on separate emulated disks plus a File Transfer copy to Windows; file counts verified with `LS -A` both sides and sample files read back with `P`; the ELCN HM at HMON OK with restored history visible on trends, new samples arriving, checkpoints re-saved, and one full shift and prearchive cycle behind it. Old HM stays powered off but racked until then. Do 51 first, then 55. The HMALLHIS IDF, the .EB and HM5157.XX stay as insurance and are ready for the later consolidation, which becomes an ELCN-to-ELCN move planned with real load data.

Per-HM sequence (ERM Table 7-18 applied to a node swap):

1. BACKUP NCF disk. `BACKUP PN:nn $Fn`, auto-save disabled on every checkpointing node.
2. Load the old HM with &HMI. `CPV PN:nn>!0np> $Fx>Hnn A -A -D` (and `!1np` on 55). Verify with `LS -A` both sides. `LSV PN:nn` to printer or file.
3. SHUTDOWN, power off, bring up the ELCN HM as the same node number.
4. Only if the ELCN HM needs a different LCN Nodes entry: modify, CTL+F1, CTL+F2. Do not touch Continuous History pages.
5. New HM: manual load &HMI (&Z1, DATA from NET). CTL+F6. Two-pass &HMO then &HMI (Table 7-18 steps 8 and 10). `DL PN:nn>!0np>*.*`. `CPV $Fx>HnnA> PN:nn>!0np> -A -D`. `LOC_VOLZ.EC`. Autoboot. CD missing directories. `RESTORE $Fn PN:nn`. HIST COLLECT > ENABLE. Demand checkpoint nodes that checkpoint to it.
6. Repeat for the second HM.

Verify against ELCN documentation first (not in this repo): how the ELCN HM presents drive count to the NCF (HM51 is one drive, 55 and 57 are two), and whether the LCN Nodes entry changes for an ELCN HM.

The consolidation procedure below stays valid for later.

---

## Conventions used below

- **CTL+HELP** = Engineering Main Menu (Universal or Engineer personality, ENGR key lock). Targets referenced: SYSTEM STATUS, COMMAND PROCESSOR, SUPPORT UTILITIES, VOLUME CONFIGURATION, LCN NODES, HM HISTORY GROUPS, SYSTEM WIDE VALUES.
- **HM Status display** = SYSTEM STATUS > select the HM node box > NODE STATUS (or SYSTEM STATUS > HISTORY MODULES). Targets: SHUTDOWN, LOAD/DUMP, HIST COLLECT.
- **Function keys in the Configurator**: CTL+F1 = CHECK, CTL+F2 = INSTALL, F4 = PRINT, CTL+F6 = INITIALIZE HM, CTL+PAGE BACK = previous menu.
- **Command Processor** = CTL+HELP > COMMAND PROCESSOR. `nn` = HM node number (51, 55, 57). `np` = node pair number from the HM PAIR SELECTION MENU. `$Fn` = drive (Zip or EST emulated drive). `$Pn` = printer.
- Device ID rule: use `PN:nn>` (not `NET>`) whenever the HM is running &HMI. `NET>` only resolves against HMs running &HMO.
- `-D` on CP/CPV lists each file as copied. `-A` on CPV includes all directories. `=` on CP keeps the source file name and suffix.

---

## Phase 0 - Discovery (before touching anything)

### 0.1 Print the volume and directory maps

CTL+HELP > COMMAND PROCESSOR:

```
PD ON
DO $P1
LSV PN:51
LSV PN:55
LSV PN:57
STA NET -D
DO
```

`LSV` is the same as `LV`. `STA NET -D` gives drive status and virtual volume listing for every HM. The final bare `DO` turns printer output back off. Keep the printouts; you rebuild directories from them in Phase 3.

No printer? Send it to a text file on an emulated disk instead. `PD ON` only affects printers; use `PO` to capture the command lines and completion messages into a second file:

```
CR $F1>NOTE -F -MF 300 -BS 300        (only on a blank emulated disk; wipes it)
PO $F1>NOTE>HMLOG.XX
DO $F1>NOTE>HMMAP.XX
LSV PN:51
LSV PN:55
LSV PN:57
STA NET -D
DO
PO
```

Read it back with `P $F1>NOTE>HMMAP.XX` or `EDIT $F1>NOTE>HMMAP.XX`, or move it to Windows on the EST with TPS File Transfer (FT05). Suffixes starting with x, y or z are plain text. (Command Processor 8.2, 8.4, 8.5.)

### 0.2 Find the system HM

On the LSV printout, find which HM holds `&ASY` (in &0np), `&1np` personality images, `&2np` dump, `!4np`. If it is 51 or 55, this is a system HM move as well and HM57 must receive &ASY and the personality files (Phase 3, steps 3.4d and 3.4e).

**Confirmed 17 Sep 26: HM57 is the system HM.** Consequences:

- Load guideline is the system-HM one: 120 groups, 40 pps recommended, 20 to 30 pps realistic (ERM 7.2.2). Combined NCF count is 119; key Phase 2 group counts down to groups with points plus small headroom (about 105) and calculate pps from GROUP OPTIONS before Install.
- ERM 7.2.2 says keep continuous history off the system HM. Accepted risk on ELCN hardware. Review trigger: repeated `HISTORY COLLECTION CYCLE OVERRUN` after cutover means move the system function (&ASY, &1np, &2np, checkpoint volumes) to another ELCN HM, not cut history.
- The HM57 rebuild window is a system-wide window: no NET>&ASY, no personality loads, no checkpoint volumes until 3.4d and 3.4e complete. Step 3.3 is mandatory. Before Phase 3: &Z1 and BACKUP NCF mounted on the loading station, demand checkpoints of every NIM/AM/HG also saved to removable media, and a shift with no controller work planned. Do the 3.5 station reloads only after HM57 is HMON OK.

### 0.3 Print every Volume Configuration page

CTL+HELP > VOLUME CONFIGURATION > HM PAIR SELECTION MENU > select node pair for 51.
On the VOLUME CONFIGURATION menu display, open each target and press F4 (PRINT) on every page:

- PROGRAM IMAGE VOLUME
- AREA DATA VOLUME
- PHYSICAL NODE FOR CHECKPOINT (3 pages, PAGE FWD)
- CONTINUOUS HISTORY UNIT AND GROUPS (2 pages), then the GROUP OPTIONS target (up to 15 pages), then the HM/UNIT OPTIONS target
- JOURNALS
- USER VOLUMES

CTL+PAGE BACK to the pair menu and repeat for node pairs 55 and 57. Press F5 (ABORT) when finished so no work file is left open.

### 0.4 Load check for the combined HM57

- History groups: 51 + 55 + 57 must stay within 150 groups / 3000 points for a non-system HM, 120 groups for a system HM (ERM 7.2.2). CTL+F1 warns above 150 and above 140.
- pps by hand from the Group Options printouts: for each group, (points in group) / (save rate seconds). Sum all groups. Under 50 pps non-system, under 40 pps system HM.
- History for one unit cannot be split across HMs (ERM 7.2.3), so units move whole.
- Volume count: 14 volumes plus !9np per single/redundant drive, 29 on dual drive (ERM 7.2.1).
- Space: sum the KB of every volume moving, against HM57 free space from `STA PN:57 -D`.

### 0.5 Downstream references

Grep your own records for anything that names 51 or 55 explicitly: free-format logs, CL programs with `PN:51>` pathnames, EC files, Experion/PHD collection, button configuration.

---

## Phase 1 - Preserve

### 1.1 Freeze checkpointing

SYSTEM STATUS > select each NIM, HG, AM, CG node > AUTO SAVE > DISABLE SAVE. Do not run demand checkpoints while backups run (Command Processor 5.2 caution).

### 1.2 Save history group definitions from HM51 and HM55 to .EB files

.EB is the portable master copy (DEB 7.2.1 note). Use (a); (a2) is the fallback for a handful of groups.

History groups are reserved entities named `$CHuu(n)` (uu = unit id, n = group number, DEB Appendix B). They are keyed by unit and group, not by HM node, so you never type 51 or 55 anywhere. RECON pulls the group from whichever HM owns the unit, and the same names load straight onto HM57 once the units are reassigned there. The group list comes from the existing HISGRP IDF (below) plus the Volume Configuration printouts.

Pathname rules (DEB 7.1.5): the REFERENCE PATH NAME is device and volume, `NET>vol>` or `$Fn>vol>`; the IDF port is the bare file name with no `>` and no suffix. On this system the volume is `IDF` (the Command Processor USER PATH default `NET>HMV1>` points at a volume that no longer exists; fix it under SUPPORT UTILITIES > MODIFY VOLUME PATHS).

**(a) Reconstitute Multiple from an existing list (primary, one command for all groups)**

On this system the IDFs live in volume `NET>IDF>` and an IDF named `HISGRP` (06/12/25) already holds `$CHuu(n)` for every unit. Reference path for every DEB command below is `NET>IDF>`.

1. CTL+HELP > HM HISTORY GROUPS > COMND > LIST ENTITIES IN IDF > pathname for IDF `HISGRP` > pathname for SELECTION LIST `HISGRP.XL` > BUILD TYPES ALL > ENTER. Page through and note the units. The output list must have an X, Y or Z suffix (DEB Table 7-1); a `.EL` name is treated as an input list and comes out empty. Leaving the port blank only writes `$MEMORY>MR31>RESULTS.EL`, which is lost on exit. Confirm with `P NET>IDF>HISGRP.XL`.
2. Create the destination IDF first; RECONSTITUTE MULTIPLE does not create one (FILE NOT FOUND (19) if you skip this). On the CH HEADER PED key UNIT `01`, group `1`, ENTER, F7=RECON, then COMND > WRITE TO IDF > IDF `HMALLHIS` > ENTER. Then COMND > RECONSTITUTE MULTIPLE > pathname for IDF `HMALLHIS` > pathname for SELECTION LIST `HISGRP.XL` > select `with OVERWRITE` > ENTER. Verify with `LS NET>IDF>HMALLHIS.*`: the DB time stamp must update and the record count should match HISGRP (hundreds, not 4). Fallback if it does not: `DL NET>IDF>HMALLHIS.DB`, `CP NET>IDF>HISGRP.DB NET>IDF>HMALLHIS -D`, then RECONSTITUTE MULTIPLE with the selection list blank and OVERWRITE on (reconstitutes every entity already named in the IDF, DEB 7.2.6). Every group is read live from whichever HM owns its unit (DEB 7.2.6). Check the .SL and .UL files it writes; a .UL entry is a group that no longer exists or an HM that did not answer.
3. Groups that fail with `CHENTPAR(nnnn) CANNOT TRANSLATE INTERNAL ENTITY ID TO EXTERNAL - ENTITY NOT ESTABLISHED ON NET` (see `HMALLHIS.EF`) hold references to points that were deleted from the NIM/AM/HG without being removed from the group. Reconstitute rejects the whole group. For each such group on a unit that belongs to 51, 55 or 57: COMND > READ TO PED > IDF `HISGRP` > entity `$CHuu(n)`; clear any slot whose tag no longer exists (check with a Detail display); ENTER; COMND > WRITE TO IDF > `HMALLHIS` with OVERWRITE. If nothing usable is left, drop the group from the reload list; HM57 creates it empty. Groups on units that stay on other HMs need no action. (17 Sep 26 run: 13 of 104 failed this way; only `$CH01(6)`, `$CH20(6)`, `$CH20(7)`, `$CH20(8)` were on HM51, and all four are decommissioned. Dropped from the reload list. In Phase 2, unit 01 can go to HM57 with 5 groups and unit 20 with 5 instead of 6 and 8, unless a log, trend set or CL program refers to the dead group names.)
4. Freshness check: LIST ENTITIES IN IDF on `HMALLHIS` and on `HISGRP`; a count difference means groups changed since June. Add any new units found on the Volume Configuration printouts to the list by hand and rerun step 2.
5. Master copy: COMND > PRINT ENTITIES > PRINT IDF entities > pathname for IDF `HMALLHIS` > destination `NET>IDF>HMALLHIS.EB` > ENTER. `EDIT NET>IDF>HMALLHIS.EB` in the Command Processor to confirm `&T` at the top, one `&N $CHuu(n)` block per group, `&E` at the end.
6. Reload list: `HM5157.XX` in this repo is the finished list (102 groups, built 17 Sep 26 from HISGRP.XL and the Volume Configuration pages). Copy it to the LCN with File Transfer (`ftcopy c:\path\HM5157.XX !\IDF`) and confirm with `P NET>IDF>HM5157.XX`. Any X/Y/Z suffix is a valid input list (DEB 7.1.8.1). This is the selection list for LOAD MULTIPLE in 3.4j, so nothing on HM53 or HM59 is touched.

   HM pair map (HM PAIR SELECTION MENU, 17 Sep 26): pair 1 = HM51 (1 drive), pair 2 = HM53, pair 3 = HM55, pair 4 = HM57, pair 5 = HM59, all 2 drives.

   | HM | Units (Continuous History page 1; page 2 empty) | NCF groups | Groups with points |
   |---|---|---|---|
   | 51 | 01(5) 02(5) 03(1) 04(1) 05(2) 06(8) 07(6) 08(2) 21(2) 22(5) 23(2) 55(2) | 41 | 37 |
   | 55 | 09(5) 10(2) 11(2) 12(2) 13(4) 14(4) 15(6) 16(4) 17(2) 20(5) 30(1) 38(1) 60(2) 61(2) | 42 | 37 |
   | 57 | 56(2) 18(4) 19(2) 28(4) 29(6) 31(6) 33(2) 34(5) 35(4) 53(1) | 36 | 28 |
   | combined | | 119 | 102 |

   Dropped: `$CH01(6)`, `$CH20(6-8)`, `$CH22(6)` (stale, above the NCF group count); `$CH55(1)`, `$CH55(2)`, `$CH29(4)` (dead point references). 119 configured groups is under the 150 non-system limit but at the 120 system-HM guideline: confirm HM57 is not the system HM, or trim unused slots in Phase 2.

**(a2) Single group by hand (fallback)**

On the CH HEADER PED key the UNIT id and HISTORIZATION GROUP, ENTER, F7=RECON fills the PED, then COMND > WRITE TO IDF (first time) or F10=WRITE (after that) into `HMALLHIS`.

**Native Window keys (EST/ESVT)**: LCN F1 to F12 = Ctrl + top-row 1 to 0, minus, equals (F7=RECON is Ctrl+7, F10=WRITE is Ctrl+0). COMND = Engineering > CMD_MENU, or Shift + keypad Minus. Delete key = LOAD, so avoid it while saving. Status bar must show ENG.

### 1.3 Back up the non-history contents of 51, 55 and 57

Prepare one destination volume per HM on EST emulated drives (Zip syntax shown; use `-MF` about 100 above the file count from `LS PN:nn>*>*.* -D`):

```
CR $F1>BU51 -F -MF 3000 -BS 1700
BACKUP PN:51 $F1
CR $F2>BU55 -F -MF 3000 -BS 1700
BACKUP PN:55 $F2
CR $F3>BU57 -F -MF 3000 -BS 1700
BACKUP PN:57 $F3
```

BACKUP writes `BKUPnn.EC` on the medium and runs it. It skips continuous history, journals and the system maintenance journal, and saves the APL history group files (which you will not reuse, see 1.2). Works with &HMO or &HMI running. Verify each with `LS $Fn -A` and compare file counts to `LS PN:nn>*>*.* -D`.

### 1.4 Archive continuous history (optional, archive only)

Only if someone needs the raw history on a rebuilt HM later. Per HM, load &HMI first (never copy history under &HMO, ERM 7.3.5):

HM Status display > node 51 > LOAD/DUMP > MANUAL LOAD > INIT PROGRAM > DEFAULT SOURCE > EXECUTE COMMAND > DEFAULT SOURCE > EXECUTE COMMAND > ENTER. Wait for HMOFF OK.

```
CR $F4>H51A -F -MF 3000 -BS 1700
CPV PN:51>!0np> $F4>H51A -A -D
CPV PN:51>!1np> $F4>H51B -A -D      (only if a second history volume exists)
LS $F4 -A
```

This copy restores only to an HM with identical Continuous History configuration (ERM 7.7.1). It is not a migration path to HM57.

### 1.5 Journals, logs, reports

Print or export whatever the retention policy needs from 51/55 journals now. Journal volumes are not backed up and cannot be restored after reassignment.

### 1.6 BACKUP NCF disk

```
CR $F1>&ASY -F -MF 3000 -BS 1700
CP NET>&ASY>*.* $F1>&ASY>= -D
```

Label it BACKUP NCF. It is the rollback for the NCF and the DATA source when loading HM57 in Phase 3.

### 1.7 ELCN whole-disk copy of HM57

HM Status display > node 57 > SHUTDOWN > ENTER, wait for QUALIF. On the ELCN node hosting HM57, copy the HM disk file(s) at the Windows level to a safe location. Restart HM57 afterwards (LOAD/DUMP > AUTOLOAD NET, or power-cycle the node per your ELCN procedure) and wait for HMON OK before continuing.

---

## Phase 2 - One NCF edit

Order matters: CTL+F1 will not let you delete an HM node that still owns volumes.

### 2.1 Set the NCF backup path

CTL+HELP > SUPPORT UTILITIES > MODIFY VOLUME PATHS > NCF BACKUP PATH = `$F1>&ASY>` (the BACKUP NCF disk from 1.6, mounted) > ENTER > MAIN MENU.

### 2.2 Grow node pair 57

CTL+HELP > VOLUME CONFIGURATION > HM PAIR SELECTION MENU > node pair 57:

- CONTINUOUS HISTORY: add every unit id and group count from the 51 and 55 printouts. Entries must be consecutive, no blank rows. Then GROUP OPTIONS: enter save rate, prearchive hours, snapshots, user avg, archive for every added group exactly as printed. Then HM/UNIT OPTIONS if used.
- JOURNALS: add the units journaled on 51/55.
- PHYSICAL NODE FOR CHECKPOINT: add the node numbers, volume size and file counts that pointed at 51/55.
- AREA DATA VOLUME: add areas whose &3np was on 51/55, with sizes.
- USER VOLUMES: add the user volumes from the 51/55 LSV printouts, with sizes and file counts.
- PROGRAM IMAGE and DUMP: only if 51 or 55 was the system HM.
- ENTER after each page.

### 2.3 Clear node pairs 51 and 55

Same menu, node pair 51: open each page and clear the entries (clear the port, ENTER). Repeat for 55.

### 2.4 Delete the nodes

CTL+HELP > LCN NODES > select node 51 > DELETE NODE > CTL+F1. Print the installation instructions (F4). Repeat for node 55.

Rollback-window variant: skip 2.4 now, do it as a second NCF edit at the next station-reload window. 51/55 stay in the NCF, shut down.

### 2.5 Check

CTL+F1 on the Volume Configuration and LCN Nodes displays. Fix every message. Do not press CTL+F2 yet; Install happens in 3.2 after 51 and 55 are shut down.

Rollback for either variant: SUPPORT UTILITIES > MODIFY VOLUME PATHS > NETWORK CONFIG PATH back to the BACKUP NCF disk, reinstall it, restore HM57 from the disk-file copy (1.7), power 51/55 back on. They still match the old NCF.

---

## Phase 3 - Cutover

### 3.1 Shut down HM51 and HM55

HM Status display > node 51 > SHUTDOWN > ENTER. Wait for QUALIF. Repeat for 55. Status must be OFF, PWR_ON or QUALIF before Install (NDE Table 7-27 step 2).

### 3.2 Install the NCF

CTL+HELP > LCN NODES (or VOLUME CONFIGURATION) > CTL+F2. Wait for "installation complete". The NCF Status Display now lists every node that needs a reload.

### 3.3 Point the loading station at removable media (system HM case only)

If HM57 is, or is becoming, the system HM: CTL+HELP > SUPPORT UTILITIES > MODIFY VOLUME PATHS > SET DEVICE PATH TO REM. MEDIA. Mount &Z1 in the lower drive ($F1) and BACKUP NCF in the higher drive ($F2). Nothing may point at NET while the system HM is down.

### 3.4 Rebuild HM57 (NDE Table 7-36, ERM Table 7-18)

a. **Load &HMI.** HM Status display > node 57 > SHUTDOWN > ENTER > wait QUALIF > LOAD/DUMP > MANUAL LOAD > INIT PROGRAM.
   PGM source: DEFAULT SOURCE if HMOF files are in !9np and the system HM is up, else ALTERNATE SOURCE > drive holding &Z1 > EXECUTE COMMAND.
   DATA source: DEFAULT SOURCE (NET) or ALTERNATE SOURCE > drive holding BACKUP NCF > EXECUTE COMMAND > ENTER.
   Wait for HMOFF OK.

b. **Initialize.** CTL+HELP > VOLUME CONFIGURATION > node pair 57 > CTL+F6. Wait for "HM INITIALIZATION COMPLETE" (several minutes). Everything on HM57 is gone at this point.

c. **Two-pass history file build (mandatory, prevents fragmentation).** Manual load &HMO from &Z1 + BACKUP NCF (LOAD/DUMP > MANUAL LOAD > OPERATOR PROGRAM > sources as in a). Wait HMON OK, let it run 5 minutes, then SHUTDOWN, wait QUALIF, manual load INIT PROGRAM again. Wait HMOFF OK. (ERM Table 7-18 steps 8 and 10.)

d. **System HM only.** COMMAND PROCESSOR:
   ```
   CP $F2>&ASY>*.* PN:57>&ASY>= -D
   ```

e. **Personalities to the local volume.** With &Z1 in $F1:
   ```
   PD ON
   DO $P1
   EC $F1>&EC>LOC_VOLZ.EC $F1 57 np
   ```
   Answer the Y/N prompts. Copy &HMO (required) and &HMI (recommended). Wait for "Write Boot ... EC Complete". Confirm on the printout that &LDR, &HMI and &HMO files transferred.

f. **Autoboot.** HM Status display > node 57 > SHUTDOWN > ENTER > wait QUALIF. Restart the HM node (on a classic HM: power off 5 seconds, power on; on the ELCN HM: restart the node from the ELCN tooling). Status goes LOC LOAD > READY > HMON OK. Allow up to an hour. Redundant WDA drives may show SEVERE until 3.4m.

g. **Recreate directories.** `LSV PN:57` and compare to the 57, 51 and 55 printouts from 0.1. For every missing directory:
   ```
   CD NET>VOL DIR
   ```
   One command per directory, four-character names. Put them in an EC file if there are many.

h. **Restore volumes.** Mount each backup medium in turn:
   ```
   RESTORE $F3 PN:57
   RESTORE $F1 PN:57
   RESTORE $F2 PN:57
   ```
   RESTORE needs the volume and directory to already exist on the HM (2.2 created the volumes, g created the directories). If a backup spans media, edit RESTVOLM.EC on the medium to add a CPV and PAUSE per extra medium (Command Processor 5.3). Watch for "Restore Complete" each time and `LS NET>VOL -A` spot checks.

i. **NCF path back to NET.** CTL+HELP > SUPPORT UTILITIES > MODIFY VOLUME PATHS > NETWORK CONFIG PATH `NET>&ASY>` > ENTER.

j. **Reload history groups.** HM57 must be HMON OK. CTL+HELP > HM HISTORY GROUPS > COMND > LOAD MULTIPLE > reference path `NET>IDF>` > pathname for IDF `HMALLHIS` > pathname for SELECTION LIST `HM5157.XL` > ENTER. Only the 51/55/57 units in that list are loaded. .EB alternative: COMND > EXCEPTION BUILD > source `NET>IDF>HMALLHIS.EB` with the same selection list and the load option > ENTER. If a group reports "HISTORY WILL BE LOST", that is expected on a fresh HM; F5 OVERWRITE.
   Verify by spot check: key a unit and group from each old HM on the CH HEADER PED, F7=RECON, confirm the points come back from HM57. Then call up a trend on one of them after collection is enabled in k.

   k. **Enable collection.** HM Status display > node 57 > HIST COLLECT > ENABLE COLLECT. After a few minutes call up a trend on a point from each old HM.

l. **Checkpoints.** For every node whose checkpoint volume moved (from the 0.3 checkpoint pages):
   - NIM: SYSTEM STATUS > NIM node > LOAD/SAVE RESTORE > SAVE DATA > EXECUTE COMMAND.
   - AM/CM: SYSTEM STATUS > AM node > SAVE DATA > EXECUTE COMMAND.
   - HG: SYSTEM STATUS > HG node > SAVE DATA > ALL BOXES > ENTER.
   Confirm "SAVED" on each, then SYSTEM STATUS > node > AUTO SAVE > ENABLE SAVE on every node you disabled in 1.1. Do not reload any of these nodes until their checkpoint on HM57 shows SAVED.

m. **Sync (redundant WDA drives only).** After every RESTORE has finished and with auto-save still disabled:
   ```
   SYNC PN:57
   ```
   Can take hours; status goes from SEVERE to OK. Confirm what redundancy means on the ELCN HM before running this; it may not apply.

### 3.5 Reload every station

The install instructions list them. For each US, GUS and EST/ESVT (Native Window) node, one at a time so the operators always have a console:

SYSTEM STATUS > select the station > NODE STATUS > SHUTDOWN > ENTER > LOAD/DUMP > AUTOLOAD NET (or MANUAL LOAD > OPERATOR PROGRAM > DEFAULT SOURCE). Reload the station you are working from first; the NCF is passed from the loading station to the loaded node (NDE 7.4.3.3). Until this is done the deleted HMs still appear on status displays.

### 3.6 Watch

For a week, watch the Real-Time Journal for `CHECK SYSTEM LOAD xx SEC. HISTORY COLLECTION CYCLE OVERRUN` and the HM node status for `HM HISTORY IS OVERLOADED`. If it repeats: slow save rates from 5 s to 10/20/60 s in GROUP OPTIONS, or renumber groups so three consecutive groups do not all hit the same NIM/AM (the HM collects three groups at a time, ERM 7.2.4).

---

## Turning 51/55 "off" without deleting them

Powering them off and leaving them in the NCF works only if nothing in Volume Configuration still points at them (2.3 done, 2.4 skipped). It costs you standing node-status alarms and an NCF that lies to the next person. Acceptable for a few weeks as a rollback window. Not acceptable as an end state. When you come back to delete them: 2.4, 2.5, 3.2, 3.5.

---

## Sources

- Engineer's Reference Manual SW09-605: 7.2.1 Table 7-1 HM data types, 7.2.2 HM limits, 7.2.3 units to HMs, 7.2.4 group layout, 7.3.5 copying history only under &HMI, 7.7.1 Table 7-17, 7.7.2 Table 7-18, 7.7.3 Table 7-19.
- Network Data Entry SW11-605: 2.1.6 Volume Configuration, Tables 7-8 to 7-12, Table 7-27 Delete History Module, Table 7-36 Edit Volume Configuration, 7.4.3.3 reload notes.
- Command Processor Operation SW11-607: 4.2 CP, 5.2 BACKUP, 5.3 RESTORE, 5.5 SYNC, 6.2 CPV, 6.3 CD, 6.4 CR, 8.2 DO, 9.3 STA, 9.4 LS, 9.5 LSV/LV, 11.7 EC.
- Data Entity Builder SW11-611: 7.2.1 Write to IDF, 7.2.4 Load Multiple, 7.2.5/7.2.6 Reconstitute, 7.2.7 Exception Build, 7.2.10 List Entities, 7.2.11 Print Entities to .EB.
- System Startup Guide SW11-614: Tasks 13, 14, 15, 27.
- Operator's Digest SW11-615: Load/Dump targets, HIST COLLECT, AUTO SAVE, SAVE DATA procedures.
- Customer Release Guide R684: 10.1 Migrate HMs.
- "HM initialization" note in this repo.
