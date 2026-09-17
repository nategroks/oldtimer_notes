# HM backups to emulated disks (HM57 system HM, HM51, HM55)

Goal: one complete, verified, non-history backup of each HM on its own emulated disk files, plus a BACKUP NCF disk, before HM51 or HM55 hardware is touched. Continuous history is saved separately on swap day (ERM Table 7-18), because it can only be copied with &HMI running on the source HM.

Sources: Command Processor Operation SW11-607 sections 5.2 (BACKUP), 5.3 (RESTORE), 6.2 (CPV), 6.4 (CR), 7.2 to 7.8 (emulated disk commands), 9.4 (LS), 9.5 (LSV); Native Window User's Guide GU20 section 4 (emulated disk dialog); ERM 7.7.

## What an emulated disk is

A `.lcn` file on the EST, default folder `C:\Program Files\Honeywell\TPS\Emulators\EmulatedDisks`. Mounted into one of the two emulated drives of the station, it behaves exactly like a Zip cartridge to the Command Processor. Size 1 to 500 MB per disk (EDCREATE). BACKUP spans disks by prompting for the next medium.

Two ways to create and mount: Command Processor commands (`EDCREATE`, `EDMOUNT`, `EDDISMOUNT`) from any station on the same console, or the Native Window dialog Access > Mount/Dismount Emulated Disks. Use the commands for creating and the dialog for swapping disks while a BACKUP is waiting on a prompter.

Drive and station numbers: Displays > System > Console Status shows the station number (`SN:n`) and the two drive numbers (`$Fn`) of the EST you are on.

## 0. Before any backup

1. Quiet period. No DEB loads, no CL compiles, no area installs, no picture compiles.
2. Disable auto checkpointing on every NIM, HG, AM and CG: SYSTEM STATUS > select node > AUTO SAVE > DISABLE SAVE. No demand checkpoints until the backups are done (Command Processor 5.2 caution).
3. Inventory, to a file on an emulated disk so you can keep it:
   ```
   EDCREATE SN:n INV0917 -FS 20
   EDMOUNT $F2 INV0917
   CR $F2>INV -F -MF 300 -BS 300
   DO $F2>INV>HMINV.XX
   LSV NET
   STA NET -D
   LS PN:57>*>*.* -D
   LS PN:51>*>*.* -D
   LS PN:55>*>*.* -D
   DO
   ```
   `LS ... -D` gives one line per volume and directory with sector and file counts. Add up files per HM. That number plus 100 is the `-MF` value below. Count directories too: more than 63 needs `-X` on the CR.

## 1. Create the emulated disks

One family of names per HM, lettered so you can add media if BACKUP asks for more. Reserved allocation so the space is really there.

```
EDCREATE SN:n BU57A -FS 500 -R
EDCREATE SN:n BU57B -FS 500 -R
EDCREATE SN:n BU51A -FS 500 -R
EDCREATE SN:n BU55A -FS 500 -R
EDCREATE SN:n NCF0917 -FS 20 -R
```

Each appears in the Available Emulated Disks list of the dialog. Create more letters if the sector totals from the inventory say an HM will not fit in 500 MB. Do not put two HMs on one disk.

## 2. System HM (HM57): BACKUP NCF disk first

This is the copy of the network configuration that every restore and every reload during an outage depends on.

```
EDMOUNT $F2 NCF0917
CR $F2>&ASY -F -MF 3000 -BS 1700
CP NET>&ASY>*.* $F2>&ASY>= -D
LS NET>&ASY -A
LS $F2>&ASY -A
EDDISMOUNT $F2
```

File counts must match. Label the disk in your notes with the date and the NCF version.

## 3. BACKUP each HM

Same sequence three times. HM57 shown.

```
EDMOUNT $F1 BU57A
CR $F1>BU57 -F -MF 9000 -BS 1700 -X
BACKUP PN:57 $F1
```

`-MF` from the inventory (files plus 100, up to 32767). `-X` allows up to 2046 directories; the system HM will have more than 63. BACKUP writes `BKUP57.EC` on the disk and runs it, one CPV per HM volume. It skips continuous history, journals and the system maintenance journal, and it includes the APL history group files.

When the screen says `Please mount next removable media on $F1`:

1. Native Window menu Access > Mount/Dismount Emulated Disks. Dismount BU57A from the left drive, mount BU57B.
2. Press ENTER at the prompter. If it asks to format, answer ENTER to accept the volume name it proposes.
3. Note which HM volumes went to which disk. The EC file on the first disk lists the order.

Wait for `Backup complete`.

Verify before dismounting:

```
LS $F1 -A
P $F1>BU57>BKUP57.EC
```

Compare the file count with the inventory total for that HM. Read one or two data files back with `P` to prove the disk is readable. Then:

```
EDDISMOUNT $F1
```

Repeat with `BU51A` / `PN:51` and `BU55A` / `PN:55`. HM51 has one drive and fewer volumes; it will probably fit on one disk.

## 4. Second copy, off the LCN

The `.lcn` files are ordinary Windows files. With the disks dismounted, copy the whole `EmulatedDisks` folder (BU57*, BU51*, BU55*, NCF0917, INV0917) to a second EST and to a file server or removable USB drive. That is the independent copy the ERM asks for; File Transfer is not needed for this, plain Windows copy is fine. Record the file sizes and dates.

## 5. Re-enable checkpointing

SYSTEM STATUS > each NIM, HG, AM, CG > AUTO SAVE > ENABLE SAVE. Then a demand SAVE DATA on each so there is a checkpoint newer than the backup.

## 6. Extra insurance for the system HM (planned window only)

The ELCN HM57 disk is a file on its ELCN node. A whole-disk copy is byte-exact rollback for HM57, but the HM must be shut down first, and shutting down the system HM takes NET away from the whole LCN while it is down. Only do this in a planned window with &Z1 and NCF0917 mounted on a station and device paths set to removable media. Not required for the HM51/HM55 swap.

## 7. Swap day additions for HM51 and HM55 (continuous history)

Only with &HMI running on the source HM (ERM 7.3.5). Per HM:

```
EDCREATE SN:n H51A -FS 500 -R
EDMOUNT $F1 H51A
CR $F1>H51A -F -MF 3000 -BS 1700
CPV PN:51>!001> $F1>H51A -A -D
LS PN:51>!001> -A
LS $F1>H51A -A
EDDISMOUNT $F1
```

HM55 has two drives; if `!103` exists, repeat into `H55B`. Node pair numbers: 51 is pair 1 (`!001`), 55 is pair 3 (`!003`). File counts must match, and copy the `.lcn` files off the EST before the old HM is powered off.

## Restore, for reference

```
EDMOUNT $F1 BU57A
RESTORE $F1 PN:57
```

RESTORE needs the volumes and directories to already exist on the HM (Volume Configuration and `CD`). If a backup spans disks, edit `RESTVOLM.EC` on the medium to add a CPV and PAUSE per extra disk (Command Processor 5.3). Continuous history goes back with `CPV $F1>H51A> PN:51>!001> -A -D` per ERM Table 7-18 step 11, only into an HM whose continuous history configuration is unchanged.
