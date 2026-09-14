# Consolidating HM51 / HM55 into ELCN HM57

Question: HM57 is already an ELCN HM. Can we copy the contents of HM51 and HM55 into HM57 and then turn 51/55 off in the NCF?

Short answer: partly.

| What is on HM51/55 | Can it move to HM57? | How |
|---|---|---|
| User volumes, area DBs (&3np), CL objects (&4np/&9np), schematics, IDFs, logs | Yes | BACKUP PN:nn then RESTORE, or CPV volume by volume, after HM57 is rebuilt. |
| History group definitions (which points, which group) | Yes, but only via IDF/.EB files reloaded through HM History Groups | APL files from another HM will not restore into a reconfigured HM (ERM 7.7, caution). |
| Continuous history data (!0np/!1np) | No | Cannot be merged into another HM. Cannot be restored into any HM whose Continuous History config changed (ERM 7.7.1, Table 7-17). Expanding HM57's history config also destroys HM57's own history. |
| Journals (!2np) | No, if journal assignment changes | Print or archive what you need first. |
| Checkpoint volumes (&5np to &8np) | Reassign, do not copy | Reassign in Volume Configuration, then demand-checkpoint every affected node after HM57 is up. |
| Personality images / dump vols (&1np/&2np), &ASY/&0np | Only if 51 or 55 is the system HM | Then HM57 becomes the system HM: CP &ASY, LOC_VOLZ.EC, reinstall personalities from &Z1. Bigger job. |

Root cause of the "no": history groups and journals are keyed to the HM node pair in Volume Configuration. Adding units/groups to HM57 changes its Continuous History configuration, which requires a CTL-F6 initialize of HM57 (destroys everything on it), and continuous history cannot be restored after such a change.

ELCN does not change any of this. An ELCN HM still loads &HMO/&HMI, still lives in the NCF Volume Configuration, and still has the same NCF Checker limits. What ELCN gives you is (a) large emulated drives on the EST for backups instead of Zip/Bernoulli media and (b) the HM's disk is a file on the ELCN node, so a whole-disk copy of HM57 before the F6 is a byte-exact rollback. Verify the ELCN HM disk-file backup/restore steps and redundancy behaviour against the ELCN Planning & Implementation guide / CRG-690, they are not in the manuals in this repo.

## Phase 0 - Discovery (before touching anything)

1. DO $Pn, PD ON, then LSV PN:51, LSV PN:55, LSV PN:57. Keep the printouts; you rebuild directories from them.
2. Find the system HM: which HM holds &ASY (&0np), &1np, &2np, !4np. If it is 51 or 55, this is a system HM move.
3. Print (F4) every Volume Configuration page for node pairs 51, 55, 57: Program Image, Areas, Checkpoint (3 pages), Continuous History units/groups and Group Options, Journals, User Volumes.
4. Load check on the combined HM57:
   - History groups: 51 + 55 + 57 total must stay within 150 groups / 3000 points (non-system HM) or 120 groups (system HM). Checker CTRL-F1 warns above 150.
   - pps by hand: (points per group / save rate seconds) summed over all groups. Target under 50 pps non-system, 40 pps system (ERM 7.2.2).
   - History for a unit cannot be split across HMs, so units move whole (ERM 7.2.3).
5. Space check: volume KB and volume count. 14 volumes per drive plus !9np (29 on dual drive).
6. Downstream: anything that reads history from 51/55 by node (logs, free-format logs, PHD/Experion collection, CL programs with NET>vol paths).

## Phase 1 - Preserve

1. Disable auto-checkpointing on HG/NIM/AM/CG and allow no demand checkpoints while backing up (Command Processor 5.2 caution).
2. Save history group definitions from HM51 and HM55 to IDF/.EB files (HM History Groups display). This is the only portable form.
3. BACKUP PN:51 $Fn, BACKUP PN:55 $Fn, BACKUP PN:57 $Fn to emulated drives on the EST. BACKUP skips continuous history, journals, and the system maintenance journal.
4. Continuous history you want to keep: load the source HM with &HMI first, then CPV PN:nn>!0np> $Fx>HSTn -A -D (ERM Table 7-18 steps 3 to 6). Never copy history with &HMO running. This copy can only ever be restored to an HM with the identical history config (i.e. a re-created HM51/55), so treat it as an archive, not a migration.
5. Print/export journals and logs for the retention period.
6. Copy NET>&ASY to a BACKUP NCF disk (CR $F1>&ASY -F -MF 3000 -BS 1700; CP NET>&ASY>*.* $F1>&ASY>= -D).
7. ELCN: shut HM57 down and take a Windows-level copy of its HM disk file(s). This is your rollback for HM57.

## Phase 2 - One NCF edit

Order matters: the checker will not let you delete an HM node that still owns volumes.

1. Volume Configuration, node pair 57: add the units/groups from 51 and 55 with the exact same Group Options (save rate, prearchive hours, snapshots, user avg, archive), journal units, checkpoint node assignments, area volumes, user volumes. Entries must be consecutive, no blank rows.
2. Volume Configuration, node pairs 51 and 55: clear them.
3. LCN Nodes: Delete Node 51, Delete Node 55 (NDE Table 7-27).
4. F1 Check. Fix everything it flags. Then F2 Install only after step 3 below is done.

Variant with a rollback window: leave out the Delete Node step now, shut 51/55 down after cutover and delete them in a second NCF edit at the next station-reload window. Rollback in either variant is: reinstall BACKUP NCF, restore HM57 from its disk-file copy, power 51/55 back on (they still match the old NCF).

## Phase 3 - Cutover

1. SHUTDOWN HM51 and HM55 (status OFF / PWR_ON / QUALIF). Required before Install.
2. F2 Install the NCF.
3. HM57 rebuild (NDE Table 7-36 / ERM Table 7-18):
   a. If 57 is the system HM: Support Utilities > Modify Volume Paths > set device paths to removable media, &Z1 in the lower drive, BACKUP NCF in the higher.
   b. Shutdown HM57, wait QUALIF, Manual Load > Init Program (&HMI). Status HMOFF OK.
   c. Volume Configuration > node pair 57 > CTL-F6. Wait for HM INITIALIZATION COMPLETE.
   d. System HM only: CP $Fs>&ASY>*.* PN:57>&ASY>= -D.
   e. EC $Fs>&EC>LOC_VOLZ.EC $Fs 57 np. Wait for EC Complete.
   f. Autoboot: Shutdown, QUALIF, then restart the node (on ELCN this is a node restart from the ELCN tooling, not a power plug). Wait for HMON OK, up to an hour.
   g. CD any directories missing versus the LSV printouts.
   h. RESTORE $Fn PN:57 for the 57 backup, then for the 51 and 55 backups (volume and directory must already exist on the HM).
   i. Modify Volume Paths back to NET>&ASY>.
   j. HM History Groups: reload all groups from the IDF/.EB files (57's own plus 51's and 55's).
   k. History Module Status > HIST COLLECT > ENABLE. Check trends after a few minutes.
   l. Demand checkpoint every NIM/AM/HG/CG whose checkpoint volume moved, then re-enable auto-checkpointing.
   m. Redundant WDA drives only: SYNC PN:57 after RESTORE finishes, auto-checkpoint off during sync. Confirm what redundancy means on the ELCN HM before running this.
4. Shutdown and reload every Universal-Station-class node named in the install instructions: US, GUS, and the EST/ESVT Native Window nodes. One at a time so operators keep a console. Until this is done the deleted HMs still show on status displays.
5. Watch the RTJ for "CHECK SYSTEM LOAD xx SEC. HISTORY COLLECTION CYCLE OVERRUN" for a week. If it repeats, slow save rates (5 s to 10/20/60 s) or spread groups so consecutive groups do not hit the same data owner (HM collects 3 groups at a time, ERM 7.2.4).

## Turning 51/55 "off" without deleting them

Powering them off and leaving them in the NCF works only if nothing in Volume Configuration still points at them, and it costs you standing node-status alarms and an NCF that lies to the next person. Acceptable for a few weeks as a rollback window. Not acceptable as an end state.

## Sources

- Engineer's Reference Manual SW09-605: 7.2.1 Table 7-1 HM data types, 7.2.2 HM limits, 7.2.3 units to HMs, 7.3.5 copying history only under &HMI, 7.7.1 Table 7-17, 7.7.2 Table 7-18, 7.7.3 Table 7-19.
- Network Data Entry SW11-605: 2.1.6 Volume Configuration, Tables 7-8 to 7-12, Table 7-27 Delete History Module, Table 7-36 Edit Volume Configuration.
- Command Processor Operation SW11-607: 5.2 BACKUP (exclusions and checkpoint caution), 5.3 RESTORE, 5.5 SYNC.
- Customer Release Guide R684: 10.1 Migrate HMs (manual restore of history and APL files).
- "HM initialization" note in this repo.
