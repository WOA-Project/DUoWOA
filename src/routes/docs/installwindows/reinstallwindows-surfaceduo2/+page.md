<script lang="ts">
    import { InfoBar } from "fluent-svelte";
</script>

# Files/Tools Needed 📃

- TWRP image: [surfaceduo2-twrp.img](https://github.com/WOA-Project/SurfaceDuo-Guides/raw/main/installwindows/Files/surfaceduo2-twrp.img)
- Mass Storage Shell Script: [msc.tar](https://github.com/WOA-Project/SurfaceDuo-Guides/raw/main/installwindows/Files/msc.tar)
- Windows UEFI: [Surface.Duo.2.UEFI.Fast.Boot.zip/uefi.img](https://github.com/WOA-Project/SurfaceDuo-Releases/releases/latest)
- [Platform Tools from Google (ADB and Fastboot)](https://developer.android.com/studio/releases/platform-tools)
- An ARM64 Windows build of your choice that meets the minimum system requirements (specifically the install.wim file). You can use [UUPMediaCreator](https://github.com/gus33000/UUPMediaCreator) for this. [Here's a guide on how to use it.](https://woa-project.github.io/DuoWOA/docs/installwindows/ISO/GetWindows)
- The driver set: [SurfaceDuo-Drivers-2XXX.XX-Desktop-Zeta.zip](https://github.com/WOA-Project/SurfaceDuo-Releases/releases/latest)
- A Windows PC to build the Windows ISO, apply it onto the phone from mass storage, add drivers to the installation, configure ESP

<InfoBar title="Warnings" severity="caution" closable="false">
  <li>- Don't create partitions from Mass Storage Mode on Windows (because ABL will break with blank/spaces in names), your phone may be irrecoverable otherwise</li>
  <li>- If you see a warning and/or error during the process, it is not normal. Contact us on telegram if you see anything odd, but do not continue or proceed on your own, you will break things further.</li>
  <li>- Don't rerun the commands if you interrupt the process. You may break your partition table.</li>
  <li>- Do not run all commands at once.</li>
  <li>- Do not commit *any* typo with *any* commands.</li>
  <li>- Be familiar with command line interfaces.</li>
  <li>- When using TWRP, it is normal and expected for the phone to be detected as an Asus phone and for touch to not work.</li>
</InfoBar>

<InfoBar title="Important" severity="caution" closable="false">
  <li>**THIS WILL WIPE ALL YOUR WINDOWS DATA**</li>
  <li>We don't take any responsibility for any damage done to your phone. By following this guide, you agree to take full responsibility of your actions. We have done some testing,</li>
  <li>but this is **STILL IN PREVIEW** and things can go wrong.</li>
</InfoBar>

**PLEASE READ AND BE SURE TO UNDERSTAND THE ENTIRE GUIDE BEFORE STARTING**

# Steps 🛠️

# Getting to Mass Storage Mode

- Reboot into the Bootloader mode by running this command while inside Android™:

```batch
adb reboot bootloader
```

![Surface Duo in Bootloader mode](https://github.com/WOA-Project/SurfaceDuo-Guides/assets/3755345/eb19d500-4849-4ded-bd0c-894e4ac56486)
_Image of what you should see right now: Surface Duo in Bootloader mode_

Now let's boot TWRP:

## Booting to TWRP

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

Once inside TWRP, touch will not be working and the device will say it is locked. This is completely normal.

- Let's load the mass storage shell script in order to boot into Mass Storage from TWRP

```batch
adb shell "setenforce 0"
adb push <path to downloaded msc.tar> /sdcard/
adb shell "tar -xf /sdcard/msc.tar -C /sdcard --no-same-owner"
adb shell "sh /sdcard/msc.sh"
```

Surface Duo should now be in USB 3 SuperSpeed (or what the USB-IF currently calls it) Mass Storage Mode.

# Formatting the existing Windows partition

- Mount the partitions you made when you first installed Windows and assign them some letters:

```batch
⚠️ THESE ARE NOT ALL COMMANDS. DISKPART COMMANDS VARY A LOT, SO THESE ARE SOME ROUGH INSTRUCTIONS.
ACTUAL COMMANDS START WITH AN HASHTAG (which you will need to remove)
YOU DO NOT HAVE TO USE THE LETTERS WE USE AT ALL!!!, THEY ONLY NEED TO BE FREE LETTERS. IF LETTERS DON'T ASSIGN FINE, USE ANOTHER ONE.
IF ONE PARTITION IS ALREADY ASSIGNED, YOU ALSO DO NOT NEED TO ASSIGN IT AGAIN IF YOU DONT WANT TO.

# list disk
Find the Surface Duo Disk, and take note of the number.
# select disk <number>
# list partition
You will be able to recognize the partitions you made the first time you installed Windows by their size.
Take note of the ESP and WIN partition numbers.
# select partition <esp-partition-number>
# assign letter=<THE LETTER YOU WANT AS LONG AS IT IS NOT CURRENTLY IN USE IN FILE EXPLORER FOR ANOTHER DRIVE! (Example: X)>:
# select partition <win-partition-number>
# assign letter=<ANOTHER LETTER YOU WANT AS LONG AS IT IS NOT CURRENTLY IN USE IN FILE EXPLORER FOR ANOTHER DRIVE! (Example: Y)>:
```

- You will have two partitions loaded, one is the ESP partition, and the other is the Win partition. Take note of the letters you've used.

<InfoBar title="Warnings" severity="caution" closable="false">
  <li>From now on we will assume X: is the Win partition and that Y: is the ESP partition for all the commands. You very very likely used other letters, or have to use other letters. Replace them correctly with what you previously picked or you will lose data on your PC.</li>
</InfoBar>

- Now open the file explorer, find the just-mounted Windows drive. BE CAREFUL! If you choose the wrong device, you WILL LOSE IMPORTANT DATA ON YOUR PC! Check that the letter is the same one you've assigned before. In our case, it's X:\.
- Once you have made sure you have found the right partition, right click on it and select "Format".
- Make sure the selected file system is NTFS, that "Quick Format" is checked, and leave the rest as it is, and press "Start".

Now the Windows Partition on your Surface Duo should be empty. Let's go ahead and reinstall everything.

# Installing Windows

- We will need our install.wim file now. If you haven't it already, you can [use this guide](https://woa-project.github.io/DuoWOA/docs/installwindows/ISO/GetWindows). When you are ready, run these commands:

```batch
dism /apply-image /ImageFile:"<path to install.wim>" /index:1 /ApplyDir:X:\
```

This will take a bit of time. Go make some coffee ☕ or some tea 🍵.

- Once that is done:

```batch
rmdir /Q /S Y:\EFI
bcdboot X:\Windows /s Y: /f UEFI
```

Windows is now installed but has no drivers.

# Installing the drivers

- Download the latest driver package from https://github.com/WOA-Project/SurfaceDuo-Releases/releases/latest

Note: Here's a table of what to download if you're a bit lost:

| File Name                                      | Target Device         |
|------------------------------------------------|-----------------------|
| SurfaceDuo-Drivers-XXXX.XX-Desktop-Epsilon.zip | Surface Duo (1st Gen) |
| SurfaceDuo-Drivers-XXXX.XX-Desktop-Zeta.zip    | Surface Duo 2         |

- Extract the driver package, and go to the folder where you extracted it.

- Double click the ```OfflineUpdater.cmd``` file.

- Accept the User Account Control warning when prompted

- Enter the drive letter of the connected phone in mass storage, as we previously mentioned, for us it's currently ```X:```, but it may very well be different for you. In our example, we enter ```X:``` and then press enter.

- The process may take a while, once it is done, you will be prompted to press any key, press enter when that's the case.

Congratulations, you just installed your drivers!

- You can now reboot your phone using ```adb reboot bootloader```.

# Boot Windows 🚀

We are ready to boot!

You'll have two methods of booting Windows.

- Manual booting with a PC
    - Pros: You can freely update Android™
    - Cons: You will need a PC to boot to Windows

- Enabling Dual Boot
    - Pros: You'll be able to boot Windows directly from the device
    - Cons: Every time you update Android™, you'll have to follow [this guide](https://woa-project.github.io/DuoWOA/docs/installwindows/DualBoot-SurfaceDuo)

In case you want the dual boot option, then follow [this guide](https://woa-project.github.io/DuoWOA/docs/installwindows/DualBoot-SurfaceDuo)

---
  <summary>In case you want to manually boot each time: (Click to expand)</summary>
  
Reboot your device to the Bootloader mode, using adb or from the recovery.

![Surface Duo in Bootloader mode](https://github.com/WOA-Project/SurfaceDuo-Guides/assets/3755345/eb19d500-4849-4ded-bd0c-894e4ac56486)
_Image of what you should see right now: Surface Duo in Bootloader mode_

Let's boot the UEFI, from a command prompt:

```batch
fastboot boot uefi.img
```

This step above will be needed every time you will want to boot Windows and needs to be done from the Bootloader mode.

If you did everything right, Windows will now boot! Enjoy!

**Note:** If the Touch keyboard won't show up in OOBE, touch somewhere else (to let the text box loose focus) and then touch into the text box again. As an alternative, you can use the On-Screen Keyboard.
  
---

_**© 2020-2024 The Duo WOA Authors**_

_Snapdragon is a registered trademark of Qualcomm Incorporated. Microsoft, the Microsoft Corporate Logo, Windows, Surface, Surface Duo, Windows Hello, Continuum, Hyper-V, and DirectX are registered trademarks of Microsoft Corporation in the United States. Android is a registered trademark of Google LLC. Miracast is a registered trademark of the Wi-Fi Alliance. Other binaries may be copyright Qualcomm Incorporated and Microsoft Surface._

_**Limited emergency calling**_

_Running Windows on your Surface Duo is not a replacement for a proper phone operating system and does not have emergency calling capabilities._

_**Hello from Seattle (US), France, Italy.**_