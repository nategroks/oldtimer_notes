How to perform a [[HM initialization.]]

Answer / Solution

Help Answer / Solution

General info on HM init.:   
   
In Step AA further below, are calculations on figuring out the total collection frequency for all of the history groups combined, which for system HMs should not be over 40 parameters/second (PPS or PARSEC -120 history groups max. if all running at 60 sec. frequencies) and non-system HMs at 50 pps (max. of 150 history groups if all running at 60 sec. frequencies).   
   
Below are some notes that may help.   
   
Before running an HM Backup, can run a DO <$Fn pathname> and a PD ON, then run a LSV NET (capture the screen and save it to build the User directories after initialization). May need to page forward. If you have more than 1 HM, can do LSV PN:nn, where nn = HM node #, to view only the volumes and directories in this HM.  
   
To re-initialize the HM it has to be in the Offline (Init.) Personality.  Step 3E further below has similar procedures to the first method here, but you can try these 2 methods:   
   
1.While the HM is running, do a load on it for the Init. Program and get both the PGM and DATA from the Default of Net 2. If that doesn’t work, do this instead (will need the DVD for the TPN/LCN personality for the software you’re using in the LCN, like R688):  
a. Mount the emulated drive on the EST containing the &Z1.LCN from the LCN DVD  
b. Make sure that the Current Load State on the HM is Disable from the HM Node Status display > ENB AUTO LOAD/DMP  
c. Shutdown the HM once, will go to QUALIF, shut it down again, should go to Fail    
d. May need to put it in PWR_ON by powering the node off/on and pressing the Reset on the node power supply after 20 secs.  
e. For the PGM (Program) Source, select Load/Dump > Manual Load > Init. Program > Alternate Source > click on the drive number where you mounted &Z1 disk  
f. For the DATA (NCF) source, if this is your only HM or system HM, select Default Source of Net. Or you can mount a current NCF and pick the Alternate Source  
g. The HM should go to HMOF OK in a few minutes.    The procedures to initialize the HM are in Step 2 below in Network Data Entry manual for initializing the HM.   Please make sure that the Area Data Base is setup to get to zips with schematics and that the zips with the schematics are inserted in the proper drives so that the Operators can get to them if they are not memory resident since the HM is going to be down for some time (the stations retain the last 3 in memory too).  The rest of this e-mail is just background for history allocation and in case you ever needed, but should know about this info also.   
   
To Restore a HM drives, when replaced with the same or compatible Honeywell part number, and if you ran the Backup command (BACKUP PN:nn $Fn) earlier to zips or emulated drives,  on the Command Processor you would run for each zip disk you backed up to: RESTORE $Fn PN:nn, where $Fn = drive number where the zip or emulated drive is mounted, and nn = node number for the HM.   
  
 Below is other info that you may need (on backups, initializations, and restoring information to the drives), or not, depending on what you’re really trying to do.   
   
Please see below several items on HM history and initialization:    
   
1.  HM history collection rules & the overrun errors from the Engineering Reference Manual   
2.  Network Data Entry manual for initializing the HM (I did correct a couple of minor things in the instructions below from what appears in the manual, like the name of the current EC).  Note that there are other procedures to following when recovering the history groups point definition files or when saving history.  This procedure does not save any history for points or for the journals, would have to print anything out that you wish to keep before initializing the HM.     
==========================================================   
  
AA. HM history collection rules & the overrun errors from the Engineering Reference Manual   
  
Honeywell has extensively tested and verified the 50 pps (parameters-per-second) and 3000 point (150 history groups) on nonsystem HM configurations with 68040 K4LCN processor boards using WDA 445 MB, WDA 875 MB, and WDA 1.8GB drives. This 50 pps configuration is NOT recommended for any HMs with the 68020 processor or drives other than WDA 445 MB, WDA 875 MB, and WDA 1.8GB.   
   
Also, note that it may be necessary that data owners (NIMs, HGs, PLCGs, AMs, and CGs) that the non-system HMs are collecting history from, have 68040 processors for preventing further overload. On the system HM with a K4LCN processor, the recommendation is a maximum of 40 pps and 120 history groups with 445 MB/875 MB/1.8 GB WDA drives. A maximum of 40 pps history load has been reached with 68020 processors on non-system HMs. On system HMs, around 20 to 30 pps is more likely to be the maximum with 120 history groups (depending on drive types and other HM loads such as: checkpoints, requests for trends and pictures, logs, bursts of events, file access, etc.).   
   
If history overrun messages are received frequently, it may be necessary to reconfigure history in the HMs to cut the number of history groups and/or the frequency of the collection rate of the history groups (e.g., instead of 5 second collection rates, slow it to a   
10, 20, or 60 second collection rates).   
   
NOTE:— The parameters-per-second (pps) calculations should be done by hand. The NCF HM Checker, CTRL+F1, doesn’t give the results, although it will give a warning if the 50 pps or the 150 history group limits are exceeded. This warning will also appear if the 40 pps or the 140-history group limit is exceeded, but the warning can be disregarded if the above recommendations are followed.   
   
An example for 60-second history groups: 20 pps per history group ÷ 60 seconds = 0.333 pps per history group x 150 history groups = 50 pps   
  
If an HM is overloaded, or nearly so, this auxiliary node status message is presented:   
         CHECK SYSTEM LOAD xx SEC. HISTORY COLLECTION CYCLE OVERRUN   
This can be caused by two different situations: • HM disk or processor use is heavy and the HM cannot unload its temporary files as fast as it is filling them up. The HM can’t finish its entire collection cycle in the time allowed.   
   
Temporary files are full The first situation occurs when HM disk or processor use is heavy and the HM cannot unload its temporary files as fast as it is filling them up. If the HM's requests to the file manager are blocked too often, the HM has to stop collecting data while it clears out its temporary files.   
   
HM can’t complete cycle when the second situation occurs, the cycle is always completed, but if it overruns, the HM sends the maintenance message and 1 or 2 samples of data are lost. This appears as an outage in the history files on the HM. This can occur because the HM load is too heavy or because the load on the data owners (the nodes that collect history data—AMs, NIMs, and HGs) prevents a prompt response to the HM's requests for process data.   
  
==========================================================   
  
The below has additional notes besides what's in the manual.  
  
1. Network Data Entry manual for initializing the HM  Table 7-36 — EDIT VOLUME CONFIGURATION On-Line Network Reconfiguration Procedure EDIT VOLUME CONFIGURATION—Installation Instructions   
  
These are the 7 general steps, specific steps for each follows:   
  
2. FOR The HM pair being configured - nodes: (node numbers) a. SHUTDOWN the on-process HM b. LOAD the HMI personality  
3. INSTALL CHANGES IN NCF (F2) THE FOLLOWING STEPS OUTLINE THE PROCEDURE FOR LOADING THE CHANGES INTO THE NETWORK. YOU MAY INSTALL OTHER CHANGES TO THE NCF BEFORE PERFORMING THESE STEPS.  
4. COPY any volumes from this HM which need to be saved to another media: Identify the volumes via the LSV PN:xx in the Command Processor. Use the Command Processor (BACKUP or CPV with -A) to copy the volumes. WARNING: IF CONTINUOUS HISTORY CHANGED, ITS VOLUME CANNOT BE SAVED AND RESTORED. DOING SO WILL DESTROY THE NEW CONFIGURATION. IF THE JOURNALS CHANGED, THEIR VOLUME CANNOT BE SAVED AND RESTORED. DOING SO WILL DESTROY THE NEW CONFIGURATION. THE NEXT STEP WILL DESTROY ALL INFORMATION ON THE HM.  
5. INITIALIZE (F6).  
6. COPY all saved volumes back.  
7. LOAD the on-process HM personality.  
8. IF continuous history changed, RELOAD history groups.   
  
Detailed Procedure—If the HM does not contain the network configuration volume (&ASY), you can skip steps B1, B2, and C3 of the procedure. The procedure to reconfigure a History Module that contains the &ASY volume follows. This method presumes you want to save data on removable media. If space is available on another HM, skip section A and, in parts D and K, copy volumes to/from the other HM instead of to disks. Before starting the procedure, enable output to the printer (DO $Pn where n = the printer number), then execute the LSV NET command to make a printed record of all the directories on the HM.  
   
A. Prepare cartridge disks (refer to the Create and Backup Commands in the Command Processor manual).  
1. From the Engineering Menu, select COMMAND PROCESSOR.  
2. The exact quantity of data stored varies with the system, but you should format one cartridge disk per n megabytes of HM storage plus one extra (where n = the size of your cartridge disk). The same volume name can be used for all disks or you may want to select sequential volume names like BU01, BU02, etc.   
  
B. Copy backup &ASY cartridge  
3. Copy the &ASY directory from Net to a cartridge. Make a backup copy of the cartridge.  
4. Leave the &ASY copy in one drive  
5. Ensure the &ASY backup cartridge is in the other drive.   
  
C. Set up &ASY Path(s)  
6. From the Engineering Menu, select SUPPORT UTILITIES  
7. Select MODIFY VOLUME PATHS  
8. Enter the NETWORK CONFIG PATH to one removable media drive (e.g., $F1>&ASY>)  
9. Enter the NCF BACKUP PATH to the other removable media drive (e.g., $F2>&ASY>)  
10. Press ENTER   
  
D. Save HM Data  
11. From the Engineering Menu, select COMMAND PROCESSOR.  
12. Use the Backup command to copy the HM volumes to removable media. (e.g., BACK PN:43 $F1). Insert an additional cartridge disk when prompted. Label each cartridge carefully. The backup command does not save all files. Refer to Section 7 in the Engineer’s Reference Manual for the procedure to save Continuous History. If you changed configuration for Continuous History or Journals, don't copy those volumes.  
13. Make sure that the points in History Groups are saved in IDF (or .EB) files. If not, do it now.   
  
E. Shut down HM; Load &HMI (offline personality)  
14. If this is the system HM (where the personalities reside), use the Support Utilities to set device paths to Removable Media  
15. Call up the System Status Display  
16. Select HISTORY MODULES  
17. Select the applicable HM node number  
18. Select the SHUTDOWN target, then press the ENTER key (status goes to QUALIF)  
19. Select the LOAD DUMP target and then the MANUAL LOAD target  
20. Select the INIT PROGRAM target 8. Load the INIT personality from either HM or removable media.  
   
F. Change Volume Configuration  
21. If this is the System HM, insert &Z1 cartridge into $F1.  
22. From the Engineering Menu, select VOLUME CONFIGURATION  
23. After the overlay is read, insert the &ASY cartridge in $F1 (if it was replaced).  
24. Select the appropriate node number on the HM PAIR SELECTION MENU  
25. Type in Volume Configuration changes as desired; press the ENTER key after each page is changed  
26. Press F1 (hold the CTL key down and press 1)  
27. Print the installation instructions if you want.  
28. Press F2 (hold the CTL key down and press 2)  
   
G. Initialize the HM  
(For System HMs only: Make sure that in Support Utilities > Modify Volume Paths that none of the paths are set to Net.  If they are, select SET DEVICE PATH TO REM. Media.  The &Z1 should be mounted in the Left/lower drive number  - like in drive 1 - and the current NCF in the Right/higher drive number - like in drive 2.)  
29. From the Engineering Menu, select VOLUME CONFIGURATION.  
30. Select the appropriate node number on the HM PAIR SELECTION MENU  
31. Press F6 (hold the CTL key down and press 6).  
32. All information stored on the HM is erased. 5. From the Engineering Menu, select COMMAND PROCESSOR. (Continued on next page)   
   
H. Reload the Local Volume  
33. Copy the &ASY directory from removable media to the HM (for System HM only): CP $Fn>&ASY>*.* PN:nn>&ASY>= -D where n is the cartridge number and nn is the HM physical node number.  
34. Load the HMO/HMI/Writeboot files. Insert the &Z1 cartridge appropriate for your system in FD2. Invoke the EC: EC $F2>&EC>LOC_VOLZ.EC $F2 nn np where nn is the HM physical node and np is the HM node pair number. Follow the screen instructions. Loading &HMI is optional but recommended (if HMI is selected on the first page of the Volume Configuration menu). Wait for “EC Complete.”   
  
I. Reboot the HM  
35. Call up the System Status Display  
36. Select HISTORY MODULES  
37. Select SHUT DOWN; then press ENTER.  
38. Interrupt power to the HM for about 5 seconds. Wait for status = HMON OK. Dual redundant HM drives may have a status = Severe until synchronized.   
  
J. Recreate missing directories  
39. Use the LSV Net command to determine which directories are on the HM. Compare them to the printout you obtained earlier. If any directory is not present, use the CD command to create them.   
  
K. Restore Saved data to the HM  
40. Use the Restore command to reload volumes saved with the Backup command. If you saved Continuous History, refer to Section 7 in the Engineer’s Reference Manual.   
  
L. Set the NCF Path  
41. From the Engineering Menu, select SUPPORT UTILITIES  
42. Select MODIFY VOLUME PATHS  
43. Set the default path to the HM (e.g., NET>&ASY>)   
  
M. Reload HM History Groups  
44. If Continuous History Configuration was changed, select HM HISTORY GROUPS on the Engineering Menu. Reload the HM history groups from your IDFs or .EB files.    
45. Enable History Collection at the HM Node Status Display.   
  
N. Synchronize redundant drives from the Command Processor with SYNC PN:nn, where nn = HM node number. No other file copies should be run at the same time.  Autocheckpointing should be turned off during synchronization. After synchronization is finished, which can take several hours, the HM should end up in HMON OK, if not,  call your local TAC, in North America: 800-822-7673.   
  
This completes Volume Reconfiguration.  

Cause (Optional)

Disk drive replacement, upgrade or HM Volume Configuration changes.