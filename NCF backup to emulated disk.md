How to [[backup the NCF to an emulated disk]]

Answer / Solution

General info:

The NCF (Network Configuration File) lives in the **&ASY volume**, normally on the system HM — `NET>&ASY>NCF.CF`. `NCF.WF` is the working file that only exists while a configuration is in progress; `NCF.CF` is the installed file that actually gets loaded into the nodes. What you are backing up is the &ASY volume.

There is nothing special about an emulated disk here. Once it is mounted on a drive number, the LCN sees `$Fn` exactly like a Zip or cartridge, and every command and every path port that used to say "cartridge" now says "emulated disk." The whole job is three parts: get a `$Fn` drive to exist, put a `&ASY` volume on it, then either copy the NCF over or point the **NCF BACKUP PATH** at it so the system does it for you on every install.

Always do this before you touch the NCF. If a new NCF causes trouble loading nodes or the HM won't autoboot after a power bump, the backup &ASY is what gets you back without restarting the whole system.

==========================================================

**A. Create and mount the emulated disk**

Two ways — GUI or Command Processor. Pick either.

*From Native Window / Configuration Utility (TP20):*

1. `Start > All Programs > Honeywell TPS > Configuration Utility` (on a GUS or APP node), or `Start > All Programs > Honeywell Experion PKS > System Management > Configuration Utility` for LCN-connected Experion nodes. You can also right-click the node on the System Management display.
2. `Configure > [LCNP board name]` (default is "Board 0"), then the **Emulated Disks** tab.
3. **Create** > pick drive/directory > new filename > OK.
4. In the Emulated Disk Information dialog: **Size** in MB (max 500, default 20 — give the &ASY disk 100 MB and stop worrying about it), **Allocation** = Reserved or Dynamic, **Access** = **Read/Write**. Read Only is useless for a new file; the TPN can't initialize it.
5. Select the disk in the *Available (Dismounted) Emulated Disks* list, click **Mount** and pick a drive — or just drag it onto the Left Drive or Right Drive field.

Left Drive = the lower-numbered drive, Right Drive = the higher-numbered one, as shown for that node on the Native Window **Console Status** display. Emulated disks use the `$Fnn` drive numbers assigned to the station's LCN address **in the NCF** — if the station has no cartridge drives configured, you have no drives to mount into.

*From the TPN Command Processor (R670+; R671+ for Experion Station-TPS):*

```
EDCREATE SN:8 NCFBK -FS 100 -R
EDMOUNT   $F5 NCFBK
```

- `SN:n` = configured station number of the target node in the console (Console Status display).
- `-FS` = size, 1–500 MB, default 20. `-R` reserved (default), `-D` dynamic.
- Short forms: `EDCR`/`EDC`, `EDMNT`/`MNT`, `EDDMNT`/`DMT`.
- Source and target nodes **must be on the same console**. Target has to be GUS R360+ running the UxS personality R670 or later.
- The file lands in the emulated disk path, default `C:\Program Files\Honeywell\TPS\Emulators\EmulatedDisks`, set with the **Set Path** button on the Emulated Disks page.

**B. Put a &ASY volume on it**

A fresh emulated disk is raw. Initialize it from the Command Processor. The volume has to be named `&ASY` if you intend to use it as the NCF backup path:

```
CR $F5>&ASY -MF 3000 -BS 1700
```

`-MF` = max files (keep it ~100 more than you need — big directories slow every transfer), `-BS 1700` = block size (1700 is the max without `-FD`). `-F`/`-FMT` is the format option; it was for floppies and is not needed on removable media. Don't use `-X` on media you'll also use for checkpointing or translations.

Create Volume **destroys everything on the media** — with or without the format option.

**C. Get the NCF onto it — three ways**

*1. The EC file Honeywell ships (this is the canonical one):*

```
EC $Fx>&EC>ASY_BKUP.EC $Fy Pn
```

where x = drive holding the EC-file media (e.g. &C2), y = drive holding your blank &ASY disk, n = printer number. This copies the &ASY directory from the HM to the media in drive y and prints as it goes.

*2. Straight copy from the Command Processor:*

```
CP NET>&ASY>*.* $F5>&ASY>= -D
```

or copy the whole volume:

```
CPV NET>&ASY $F5>&ASY -D
```

*3. Let the configurator do it automatically on every install (do this one regardless):*

Engineering Main Menu (keylock in ENGR) > **SUPPORT UTILITIES** > **MODIFY VOLUME PATHS** — or just type `SP` in the Command Processor.

- Key `$Fn>&ASY>` into the **NCF BACKUP PATH** port, where n is the drive with your mounted emulated disk (e.g. `$F5>&ASY>`).
- The backup path **must be removable media — NET is not allowed.**
- Make sure the **NETWORK CONFIG** port (the live NCF) is a *different* device, normally `NET>&ASY>`.
- Verify **EXT LOAD MODULE** = `NET>&CUS>`, then press ENTER.
- If you're installing a Key File software option, also set **KEY FILE VOLUME** to `$Fn>&KFO>`.

From then on, when you make an On-Line change and press F1 (check) then F2 + ENTER (install), the system updates the working copy, the system NCF, **and** the backup NCF on your emulated disk. You cannot make on-line changes at all without a valid backup path and a backup copy in place.

Note that `SET DEVICE PATH TO "NET"` changes every path to NET **except** the NCF Backup Path — it's left alone on purpose.

**D. Dismount when you're done**

```
EDDISMOUNT $F5
```

or the Dismount button / drag it back to the Available list. **Dismount it.** If you don't, the file stays flagged as in use and you'll fight it later. Then copy the `.dsk` file off the node — an NCF backup sitting on the same workstation's hard drive is not a backup, it's a second copy of your single point of failure. Get it onto a server share, a real Zip, or a CD.

==========================================================

Gotchas worth remembering:

- **Locked drives.** `EDLOCK $Fn` prevents dismounting, which is handy for a backup disk you want to stay put. But a locked drive **cannot be unlocked from the Emulated Disks page** — you have to run `EDUNLOCK $Fn` from the Command Processor. The GUI dismount button is just greyed out and people waste an hour on it.
- Don't leave the NCF BACKUP PATH pointing at a drive whose disk got dismounted. The install will fail and you'll be staring at "make sure the backup &ASY cartridge is in place" in the manual.
- 500 MB is the hard ceiling per emulated disk. Fine for &ASY, not fine if you're thinking about HM volume backups on one disk.
- As of GUS 330, floppies are not allowed as emulated disks (policy files block them — virus protection).
- Emulated disk files on a CD-R can get the machine name baked in permanently and then won't remount anywhere, including the machine that made them. Create on local hard disk, dismount, *then* copy to CD.
- Same trick works for HM backups: `BACKUP PN:nn $Fn` to a mounted emulated disk, and `RESTORE $Fn PN:nn` to put it back.

**Scripted version** (drop it in an EC file and schedule it):

```
EDCREATE SN:8 NCFBK -FS 100 -D -Q10
&IF ^Q10 &THEN EDMOUNT $F5 NCFBK -Q11
&IF ^Q11 &THEN CR $F5>&ASY -MF 3000 -BS 1700 -Q12
&IF ^Q12 &THEN CPV NET>&ASY $F5>&ASY -D -Q13
&IF ^Q13 &THEN EDDISMOUNT $F5
```

`-Qn` (n = 1 to 32) is how you test success of the previous step in an EC file. Same pattern Honeywell documents for backing up any volume to an emulated disk.

==========================================================

References:

- Command Processor Operation, SW11607 — sec. 7 Emulated Disk Commands (EDCREATE/EDMOUNT/EDDISMOUNT/EDLOCK/EDUNLOCK), sec. 7.8 Using Emulated Disk Commands for Backup, sec. 6.4 Create Volume, sec. 2 Modifying Default Volume Pathnames
- Network Data Entry, SW11605 — sec. 7.4.2.1 Backup Network Configuration, sec. 7.4.2.2 Set Up Pathnames
- System Components Configuration Utility User's Guide, TP20 — sec. 2.5 Emulated Disks Page
- Engineer's Reference Manual, SW09605 — BACKUP NCF disk creation
- CLM Planning, Installation and Service, LK02100 — sec. 5.4.2 Setup to Back Up Existing NCF to Removable Media
- Customer Release Guide, CRG684 — NCF backup path during R5xx→R6xx translation with emulated disks
- System Startup Guide – Zip Drive, SW11614 — Task 4/5 CNCF media layout
