<script lang="ts">
    import { InfoBar } from "fluent-svelte";
</script>

This guide will help you switch back to Windows Desktop after having installed and used Windows Core OS on your device without needing to follow the uninstall procedure.

# Files/Tools Needed 📃

- Parted: [parted](https://github.com/WOA-Project/SurfaceDuo-Guides/raw/main/installwindows/Files/parted)
- [Platform Tools from Google (ADB and Fastboot)](https://developer.android.com/studio/releases/platform-tools)
- A Windows PC

## For Surface Duo (1st Gen)

- TWRP image for Surface Duo (1st Gen): [surfaceduo1-twrp.img](https://github.com/WOA-Project/SurfaceDuo-Guides/raw/main/installwindows/Files/surfaceduo1-twrp.img)

## For Surface Duo 2

- TWRP image for Surface Duo 2: [surfaceduo2-twrp.img](https://github.com/WOA-Project/SurfaceDuo-Guides/raw/main/installwindows/Files/surfaceduo2-twrp.img)
- File System Support Package for TWRP image: [surfaceduo2-twrp-fssupport.tar](https://github.com/WOA-Project/SurfaceDuo-Guides/raw/main/installwindows/Files/surfaceduo2-twrp-fssupport.tar)

<InfoBar title="Warnings" severity="caution" closable="false">
  <li>- Don't create partitions from Mass Storage Mode on Windows (because ABL will break with blank/spaces in names), your phone may be irrecoverable otherwise</li>
  <li>- Read the entire guide before starting. Make sure you understand all of what you're going to do!</li>
  <li>- If you see a warning and/or error during the process, it is not normal. Contact us on telegram if you see anything odd, but do not continue or proceed on your own, you will break things further.</li>
  <li>- Don't rerun the commands if you interrupt the process. You may break your partition table.</li>
  <li>- Do not run all commands at once.</li>
  <li>- Do not commit *any* typo with *any* commands.</li>
  <li>- Be familiar with command line interfaces.</li>
  <li>- When using TWRP, it is normal and expected for the phone to be detected as a Xiaomi phone or an Asus phone and for touch to not work.</li>
</InfoBar>

# Steps 🛠️

# Making the partitions

- Reboot into the Bootloader mode by running this command while inside Android™:

```batch
adb reboot bootloader
```

![Surface Duo in Bootloader mode](https://github.com/WOA-Project/SurfaceDuo-Guides/assets/3755345/eb19d500-4849-4ded-bd0c-894e4ac56486)
_Image of what you should see right now: Surface Duo in Bootloader mode_

# Making the partitions

- Start by booting TWRP:

## For Surface Duo (1st Gen)

- Plug your phone to your PC, open a command prompt and start by typing the following text, but do not press enter just yet

```batch
fastboot boot
```

![image](https://github.com/WOA-Project/SurfaceDuo-Guides/assets/3755345/24c5ed51-4710-449d-a5dc-686f8da8ea47)

- Go find the surfaceduo1-twrp.img file you downloaded earlier, right click it, click "Copy as path"

![image](https://github.com/WOA-Project/SurfaceDuo-Guides/assets/3755345/3e8db3d5-44d0-4e6c-a7ef-674f86e82650)

- Then go back to the Command Prompt window we started writing text in previously, and simply, right click on it with your mouse (or long press if you're on a touch device), you should now see this:

![image](https://github.com/WOA-Project/SurfaceDuo-Guides/assets/3755345/e97d514b-a314-4faf-9622-75bdab066985)

- Now you can press enter

![image](https://github.com/WOA-Project/SurfaceDuo-Guides/assets/3755345/2e27f24c-5b12-476d-99d8-f11de5baa807)

You will now boot to TWRP. Reminder that touch doesn't work on TWRP for now, so you'll have to work through your PC.

## For Surface Duo 2

- Plug your phone to your PC, open a command prompt and start by typing the following text, but do not press enter just yet

```batch
fastboot boot
```

![image](https://github.com/WOA-Project/SurfaceDuo-Guides/assets/3755345/24c5ed51-4710-449d-a5dc-686f8da8ea47)

- Go find the surfaceduo2-twrp.img file you downloaded earlier, right click it, click "Copy as path"

![image](https://github.com/WOA-Project/SurfaceDuo-Guides/assets/3755345/3e8db3d5-44d0-4e6c-a7ef-674f86e82650)

- Then go back to the Command Prompt window we started writing text in previously, and simply, right click on it with your mouse (or long press if you're on a touch device), you should now see this:

![image](https://github.com/WOA-Project/SurfaceDuo-Guides/assets/3755345/e97d514b-a314-4faf-9622-75bdab066985)

- Now you can press enter

![image](https://github.com/WOA-Project/SurfaceDuo-Guides/assets/3755345/2e27f24c-5b12-476d-99d8-f11de5baa807)

You will now boot to TWRP. Reminder that touch doesn't work on TWRP for now, so you'll have to work through your PC.

- Once inside TWRP, touch will not be working and the device will say it is locked. This is completely normal. Keep the phone plugged to your PC and do these commands ONE BY ONE WITH NO TYPO!:

```batch
adb shell "setenforce 0"
adb push <path to parted that was downloaded earlier> /sdcard/
adb shell "mv /sdcard/parted /sbin/parted && chmod 755 /sbin/parted"
adb shell
```

- Now we are issuing commands directly from inside Surface Duo using the PC.

## Dangerous section

Anything in this section is DANGEROUS and may PERMANENTLY damage your phone if you do any step wrong. Please carefully read all warnings and all instructions and make NO MISTAKE. Do not proceed if late at night or tired or drunk (yes, we're serious).

<InfoBar title="Warnings" severity="caution" closable="false">
  <li>!!!! Warning reminder !!!!</li>
  <li>⚠️ Do not run all commands at once, instead run them one by one</li>
  <li>⚠️ DO NOT MAKE ANY TYPO! Parted is a *very* delicate tool, you MAY BREAK YOUR DEVICE PERMANENTLY WITH BELOW COMMANDS IF YOU DO THEM WRONG!</li>
  <li>⚠️ If you see any warning, or error, it is not normal. Contact us on telegram</li>
  <li>⚠️ You can kill your phone permanently if you do below's steps wrong, for real.</li>
  <li>⚠️ DO NOT, UNDER ANY CIRCUMSTANCES, RERUN, ANY, OF BELOW'S COMMANDS, EVEN IF A SINGLE ONE. DOING THIS WILL PERMANENTLY CAUSE HAVOC TO YOUR DEVICE. DO. NOT. RERUN. ANY. OF. THESE. COMMANDS. AFTER. RUNNING. ANY. SINGLE. ONE. OF. THEM. ONCE. You can rerun them __only__ if you completed the installation, and followed the uninstall guide, never if you messed up anything, or didn't proceed with the uninstall guide yet.</li>
  <li>⚠️ If you end up messing up, or "forgetting" to run a command, DO NOT RERUN ANYTHING. CONTACT US IMMEDIATELY ON TELEGRAM. EXPLAIN WHAT YOU DID. POST A SCREENSHOT OF THE "print" PARTED COMMAND OUTPUT DONE LAST TO KNOW THE CURRENT STATUS AND NOT THE ONE PRIOR TO 20 OTHER COMMANDS.</li>
</InfoBar>

- Let's run parted and make the partition type changes (ONE BY ONE WITH NO TYPO!):

## For Surface Duo (1st Gen)

```bash
setenforce 0
parted /dev/block/sda
set 7 msftdata on
quit
```

## For Surface Duo 2

```bash
setenforce 0
parted /dev/block/sda
set 9 msftdata on
quit
```

This will get you out of parted.

Now let's make these partitions actually usable:

## For Surface Duo (1st Gen)

```bash
setenforce 0
mkfs.fat -F32 -s1 /dev/block/sda6
mkfs.ntfs -f /dev/block/sda7
exit
```

## For Surface Duo 2

```bash
adb shell "setenforce 0"
adb push <path to downloaded surfaceduo2-twrp-fssupport.tar> /sdcard/
adb shell "tar -xf /sdcard/surfaceduo2-twrp-fssupport.tar -C /sdcard/fssupport --no-same-owner"
adb shell "chmod 755 /sdcard/fssupport/*"
adb shell "mv /sdcard/fssupport/* /sbin/"
mkfs.fat -F32 -s1 /dev/block/sda8
mkfs.ntfs -f /dev/block/sda9
exit
```

## End of the Dangerous section

# Rebooting into Android

Now, reboot into Android again:

```batch
adb reboot
```

We're done!

Now proceed to follow the Reinstall Windows Desktop guide for your device.

---

_**© 2020-2024 The Duo WOA Authors**_

_Snapdragon is a registered trademark of Qualcomm Incorporated. Microsoft, the Microsoft Corporate Logo, Windows, Surface, Surface Duo, Windows Hello, Continuum, Hyper-V, and DirectX are registered trademarks of Microsoft Corporation in the United States. Android is a registered trademark of Google LLC. Miracast is a registered trademark of the Wi-Fi Alliance. Other binaries may be copyright Qualcomm Incorporated and Microsoft Surface._

_**Limited emergency calling**_

_Running Windows on your Surface Duo is not a replacement for a proper phone operating system and does not have emergency calling capabilities._

_**Hello from Seattle (US), France, Italy.**_