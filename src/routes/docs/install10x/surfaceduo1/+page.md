<script lang="ts">
    import { InfoBar } from "fluent-svelte";
</script>

# Table of Contents

1. [Files/Tools Needed](#filestools-needed-)
3. [What you will get 🛒](#what-you-will-get-)
4. [Steps 🛠️](#steps-%EF%B8%8F)
    1. [Unlocking the bootloader](#unlocking-the-bootloader)
    2. [Making the partitions](#making-the-partitions)
    3. [Installing Windows 10X](#installing-windows-10x)
    4. [Completing the installation](#completing-the-installation)
    5. [Boot Windows 10X](#boot-windows-10x)

# Files/Tools Needed 📃

- TWRP image: [surfaceduo1-twrp.img](https://github.com/WOA-Project/SurfaceDuo-Guides/raw/main/installwindows/Files/surfaceduo1-twrp.img)
- Parted: [parted](https://github.com/WOA-Project/SurfaceDuo-Guides/raw/main/installwindows/Files/parted)
- Mass Storage Shell Script: [msc.tar](https://github.com/WOA-Project/SurfaceDuo-Guides/raw/main/installwindows/Files/msc.tar)
- Windows UEFI (Without Secure Boot): [SM8150.UEFI.Surface.Duo.1.No.SecureBoot.zip/uefi_nosb.img](https://github.com/WOA-Project/SurfaceDuo-Releases/releases/latest)
- [Platform Tools from Google (ADB and Fastboot)](https://developer.android.com/studio/releases/platform-tools)
- The 10X Image Files (`BS_EFIESP.img` and `OSPool.img`). You can find them [here](https://t.me/DuoWOA_Announcements/379)
- A Windows PC to execute most of the commands in this guide

<InfoBar title="Warnings" severity="caution" closable="false">
  <li>- Don't create partitions from Mass Storage Mode on Windows (because ABL will break with blank/spaces in names), your phone may be irrecoverable otherwise</li>
  <li>- If you see a warning and/or error during the process, it is not normal. Contact us on telegram if you see anything odd, but do not continue or proceed on your own, you will break things further.</li>
  <li>- Don't rerun the commands if you interrupt the process. You may break your partition table. Parted is a very *delicate* tool, anything you do may cause permanent damage to your device.</li>
  <li>- Do not run all commands at once. Parted is a very *delicate* tool, anything you do may cause permanent damage to your device.</li>
  <li>- Do not commit *any* typo with *any* commands. Parted is a very *delicate* tool, anything you do may cause permanent damage to your device.</li>
  <li>- Be familiar with command line interfaces. Parted is a very *delicate* tool, anything you do may cause permanent damage to your device.</li>
  <li>- When using TWRP, it is normal and expected for the phone to be detected as a Xiaomi phone and for touch to not work.</li>
</InfoBar>

<InfoBar title="Important" severity="caution" closable="false">
  <li>**THIS WILL WIPE ALL YOUR ANDROID™ DATA**</li>
  <li>We don't take any responsibility for any damage done to your phone. By following this guide, you agree to take full responsibility of your actions. We have done some testing,</li>
  <li>but this is **STILL IN PREVIEW** and things can go wrong.</li>
</InfoBar>

**PLEASE READ AND BE SURE TO UNDERSTAND THE ENTIRE GUIDE BEFORE STARTING**

❓ If you're already running Windows 10/11 on your device, you can start from [this step: Installing Windows 10X](#installing-windows-10x). Please note that you'll remove your Windows Installation if you do it.

❓ If you're running an old release of 10X and want to update it or want to reinstall, start from [this step: Installing Windows 10X](#installing-windows-10x). You'll lose your 10X data if you follow this guide.

# What you will get 🛒

You will end up with both Android™ and Windows 10X on your Surface Duo. Android™ and Windows 10X will both split the internal storage (64GB and 64GB or 128GB and 128GB).

Android™ will boot normally, and you will have to use a PC to boot Windows when needed, unless you create a dual boot image (explained later).

# Steps 🛠️

# Unlocking the bootloader

- Backup all your data. **_You will lose everything you have on Android™ and will start from scratch_**.

- In Android™ settings, enable the Developer Settings menu (7 consecutive taps on Build Number), and turn on "OEM Unlock" and "USB Debugging" inside it.

Assuming your Surface Duo is booted to Android™, plugged to your PC:

- Open a command prompt on your PC and run this command:
```batch
adb reboot bootloader
```
- You will be rebooted to Surface Duo's bootloader.

![Surface Duo in Bootloader mode](https://github.com/WOA-Project/SurfaceDuo-Guides/assets/3755345/eb19d500-4849-4ded-bd0c-894e4ac56486)
_Image of what you should see right now: Surface Duo in Bootloader mode_

From there:
```batch
fastboot flashing unlock
```

- You should now be seeing the Android™ Out of Box Experience (OOBE). Setup your phone to confirm it works correctly.

![Android™ - OOBE](https://github.com/WOA-Project/SurfaceDuo-Guides/assets/3755345/5f86cbbe-df08-4ba6-92aa-b7fd2a7f72b3)

Congratulations, you successfully unlocked your bootloader.

- Assuming your Surface Duo is booted to Android™, plugged to your PC

- Using the Microsoft Launcher, find the settings app

![A1 Android™ - Open Settings](https://github.com/WOA-Project/SurfaceDuo-Guides/assets/3755345/36ef925c-fe98-4ec6-9861-c1037d8ced19)

- Open the Android™ Settings app

![A2 Android™ - Settings Opened](https://github.com/WOA-Project/SurfaceDuo-Guides/assets/3755345/02b78630-d2b2-4211-abe1-c89255fe9bc6)

- Scroll down to the about section, and open it

![A3 Android™ - Settings About](https://github.com/WOA-Project/SurfaceDuo-Guides/assets/3755345/0dad0ac3-21f3-42fd-a02c-78e9eb399118)

- Scroll all the way down til you see the Build Number field

![A4 Android™ - Settings About Down](https://github.com/WOA-Project/SurfaceDuo-Guides/assets/3755345/afac2404-9624-4298-9785-b6a21bc31699)

- Press the Build number field 7 times consecutively, you should first start to see a popup after 3 taps

![A5 Android™ - Settings About Down Tap Dev](https://github.com/WOA-Project/SurfaceDuo-Guides/assets/3755345/b850bef7-2938-47a0-b781-c54178e3cf7d)

- Once done tapping 7 times, you should be seeing this popup instead

![A6 Android™ - Settings About Down Tap Dev Done](https://github.com/WOA-Project/SurfaceDuo-Guides/assets/3755345/8afef456-00a4-41e7-9653-c91a901e16c1)

- Now go to the System section, you should see a new Developer options section like shown below

![A7 Android™ - Settings System with Dev](https://github.com/WOA-Project/SurfaceDuo-Guides/assets/3755345/a2de44f2-b492-450a-830a-5e7141e232b7)

- Go to the Developer options section

![Android™ Settings System Dev Options](https://github.com/WOA-Project/SurfaceDuo-Guides/assets/3755345/ffbbcee9-98ab-4b83-8eaa-57487c1c1cf0)

- Scroll all the way down til you see the "USB debugging" option

![Android™ Settings - Dev - Debugging Option](https://github.com/WOA-Project/SurfaceDuo-Guides/assets/3755345/3847fdcb-c19c-4c5d-aa4c-00a60e85c2b0)

- And turn on the "USB debugging" option

![Android™ Settings - Dev - Debugging Option Confirmation](https://github.com/WOA-Project/SurfaceDuo-Guides/assets/3755345/60b52b98-8c6a-4845-833d-470378206fb2)

- Reboot back into the Bootloader mode by running this command:

```batch
adb reboot bootloader
```

![Surface Duo in Bootloader mode](https://github.com/WOA-Project/SurfaceDuo-Guides/assets/3755345/eb19d500-4849-4ded-bd0c-894e4ac56486)
_Image of what you should see right now: Surface Duo in Bootloader mode_

# Making the partitions

## Booting to TWRP

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

- Once inside TWRP, touch will not be working and the device will say it is locked. This is completely normal. Keep the phone plugged to your PC and do these commands ONE BY ONE WITH NO TYPO!:

```batch
adb shell "setenforce 0"
adb push <path to parted that was downloaded earlier> /sdcard/
adb shell "mv /sdcard/parted /sbin/parted && chmod 755 /sbin/parted"
adb shell
```

- Now we are issuing commands directly from inside Surface Duo using the PC.

## Dangerous section

Anything in this section is DANGEROUS and may PERMANENTLY damage your phone if you do any step wrong. Please carefully read all warnings and all instructions and make NO MISTAKE. Do not proceed if late at night or tired.

<InfoBar title="Warnings" severity="caution" closable="false">
  <li>!!!! Warning reminder !!!!</li>
  <li>⚠️ Do not run all commands at once, instead run them one by one</li>
  <li>⚠️ DO NOT MAKE ANY TYPO! Parted is a *very* delicate tool, you MAY BREAK YOUR DEVICE PERMANENTLY WITH BELOW COMMANDS IF YOU DO THEM WRONG!</li>
  <li>⚠️ If you see any warning, or error, it is not normal. Contact us on telegram</li>
  <li>⚠️ You can kill things if you do below's steps wrong</li>
</InfoBar>

---

  <summary>If you want a different allocation split between Windows and Android™, you can do so. Just be aware of the following:</summary>
  
```bash
notmkpart win ntfs REDACTED_FOR_EXAMPLE_PURPOSES 57344MB
notmkpart userdata ext4 57344MB REDACTED_FOR_EXAMPLE_PURPOSES
```

The commands above work like this:

[tool name] [partition name in gpt] [file system] [starting offset in disk] [ending offset in disk]

So if you want to change the split, all you have to do is to change the "57344MB" in above's example in both commands.

  
---

- Let's run parted and make the partitions (ONE BY ONE WITH NO TYPO!):

```bash
setenforce 0
parted /dev/block/sda
print
```

**Make sure that the last partition listed is numbered 6. If it is not, below's commands may DESTROY your phone in a permanent manner**

Take note of original sizing, here it was 51.9MB -> 112GB (256GB variant: 51.9MB -> 240GB) and replace every occurence of 51.9MB and 112GB with your original sizing that *you noted down* (these may not differ, but if they do, replace them)

---

  <summary>Run these commands one by one for 128GB devices (Click to expand)</summary>
  
__This command removes the userdata partition__

```bash
rm 6
```

__This command creates the EFI system partition for Windows. It is possible parted shows a warning message at this step saying the partition is not properly aligned for best performance. It is safe to ignore such warning__

```bash
mkpart esp fat32 51.9MB 564MB
```

__This command creates the Windows partition.__

```bash
mkpart win ntfs 564MB 57344MB
```

__This command creates the Android™ data partition back.__

```bash
mkpart userdata ext4 57344MB 112GB
```

__This command sets the ESP partition created earlier as an EFI system partition type.__

```bash
set 6 esp on
```

__This command leaves parted.__

```bash
quit
```

  
---

  <summary>Run these commands one by one for 256GB devices (Click to expand)</summary>
  
__This command removes the userdata partition__

```bash
rm 6
```

__This command creates the EFI system partition for Windows. It is possible parted shows a warning message at this step saying the partition is not properly aligned for best performance. It is safe to ignore such warning. (Note: to ignore in parted, just type 'i' (without the quotes))__

```bash
mkpart esp fat32 51.9MB 564MB
```

__This command creates the Windows partition.__

```bash
mkpart win ntfs 564MB 114688MB
```

__This command creates the Android™ data partition back.__

```bash
mkpart userdata ext4 114688MB 240GB
```

__This command sets the ESP partition created earlier as an EFI system partition type.__

```bash
set 6 esp on
```

__This command leaves parted.__

```bash
quit
```

  
---

This will get you out of parted.

We have deleted partition 6, which was the Android™ userdata partition, and created 3 partitions: an esp partition which will contain the Windows boot files,
a win partition that will have Windows, and the last one is the new userdata partition for Android™, just smaller.

Now let's make these partitions actually usable:

```bash
setenforce 0
mkfs.fat -F32 -s1 /dev/block/sda6
mkfs.ntfs -f /dev/block/sda7
mke2fs -t ext4 /dev/block/sda8
exit
```

## End of the Dangerous section

# Installing Windows 10X

Reboot your phone to the Bootloader mode:

```batch
adb reboot bootloader
```

![Surface Duo in Bootloader mode](https://github.com/WOA-Project/SurfaceDuo-Guides/assets/3755345/eb19d500-4849-4ded-bd0c-894e4ac56486)
_Image of what you should see right now: Surface Duo in Bootloader mode_

<img width="265" alt="image" src="https://user-images.githubusercontent.com/29689637/229379406-f86ecc5a-1252-47bb-8a75-27b1ae540357.png">

Now let's clean the partitions we've just created with fastboot:

```batch
fastboot erase win
fastboot erase esp
```
<img width="475" alt="image" src="https://user-images.githubusercontent.com/29689637/229379441-759bf96f-6b79-448d-b1d4-b7ef42b427ba.png">

And install the 10X images:

```batch
fastboot flash esp BS_EFIESP.img
fastboot flash win OSPool.img
```
<img width="510" alt="image" src="https://user-images.githubusercontent.com/29689637/229379746-9b620153-e70e-4f56-b097-7339aef08fe4.png">

This is going to take a while, especially on the second command. As you can see it took me almost 6 minutes. Take a little walk in the meantime.

❓ If you're *updating* or *reinstalling* from 10X, you can stop here and reboot! You're done! ✅

# Completing the Installation

Start by booting TWRP (you might need to manually reboot your device into the Bootloader mode if this gets stuck):

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

- Let's load the mass storage shell script in order to boot into Mass Storage from TWRP

```batch
adb shell "setenforce 0"
adb push <path to downloaded msc.tar> /sdcard/
adb shell "tar -xf /sdcard/msc.tar -C /sdcard --no-same-owner"
adb shell "sh /sdcard/msc.sh"
```
<img width="605" alt="image" src="https://user-images.githubusercontent.com/29689637/229380153-355063fb-4cf4-468b-9780-875b2667b79a.png">

Surface Duo should now be in USB 3 SuperSpeed (or what the USB-IF currently calls it) Mass Storage Mode.

- Open diskpart:

```batch
diskpart
```
<img width="247" alt="image" src="https://user-images.githubusercontent.com/29689637/229380180-607e859e-4153-4c55-b94b-57352ba6e55f.png">

- Run these commands one by one, replacing the IDs with yours:

```batch
list disk
sel dis <id of the disk, in my case it is 5>
list partition
sel par <id of the part for the pool showing currently as "Primary", in my case it is 7>
set id=E75CAF8F-F680-4CEE-AFA3-B001E56EFC2D
```
<img width="306" alt="image" src="https://user-images.githubusercontent.com/29689637/229380406-4f23a6c5-3223-42f0-b84c-7ff24a7443a8.png">
<img width="323" alt="image" src="https://user-images.githubusercontent.com/29689637/229380438-97ce534f-bf8e-4a38-b928-7f5d30fdb0a7.png">

We're done!

- Let's exit diskpart:

```batch
exit
```

We'll need a UEFI to boot to Windows 10X.

# Boot Windows 10X

- Reboot your device to the Bootloader mode

```batch
adb reboot bootloader
```

![Surface Duo in Bootloader mode](https://github.com/WOA-Project/SurfaceDuo-Guides/assets/3755345/eb19d500-4849-4ded-bd0c-894e4ac56486)
_Image of what you should see right now: Surface Duo in Bootloader mode_

- Once into the Bootloader mode, let's run the UEFI, which will boot to 10X:

```batch
fastboot boot uefi_nosb.img
```

Done! You'll now be booted into Windows 10X. ⚠️ First boot will take a bunch of minutes, so WAIT AND DON'T REBOOT!

---

_**© 2020-2024 The Duo WOA Authors**_

_Snapdragon is a registered trademark of Qualcomm Incorporated. Microsoft, the Microsoft Corporate Logo, Windows, Surface, Surface Duo, Windows Hello, Continuum, Hyper-V, and DirectX are registered trademarks of Microsoft Corporation in the United States. Android is a registered trademark of Google LLC. Miracast is a registered trademark of the Wi-Fi Alliance. Other binaries may be copyright Qualcomm Incorporated and Microsoft Surface._

_**Limited emergency calling**_

_Running Windows on your Surface Duo is not a replacement for a proper phone operating system and does not have emergency calling capabilities._

_**Hello from Seattle (US), France, Italy.**_