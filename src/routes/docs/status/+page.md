### Surface Duo 1

##### Important information

- Sometimes the displays might show some "garbage"/"noise". This is expected. This is the beginning, so bear with us for now :) Your displays aren't broken, and won't get damaged.

- AT&T devices that are _Unlocked_ will be simlocked in Windows but not in Android™ again. In order to make Windows _Unlocked_ like Android™, dumping ```modem_fs1``` and ```modem_fs2``` is currently required, and the dumped partitions need to be placed under ```\Windows\System32\DriverStore\FileRepository\qcremotefs8150_<random data here>\boot_modemfs1``` and ```\Windows\System32\DriverStore\FileRepository\qcremotefs8150_<random data here>\boot_modemfs2```

##### Keep up with the development in real time

Most updates are given first and foremost via our dedicated Announcement Telegram Channel. We try our best to also announce things elsewhere, but telegram remains our primary way of interfacing with the community at the moment. You can find the channel at https://t.me/DuoWOA_Announcements

##### Notes about the Development Schedule

__Note: This note is provided for informational purposes only, it does not in any way represent any commitment from any entity working towards the development of the Windows port on Surface Duo and does not mean that all functionality will be available or the development will ever finish, you should not buy the device for the sole purpose of using Windows on it with hopes of it eventually being fully functional or having XYZ hardware feature working in the supposed future. What is available today is what should be considered as the most you can get. Purchase with this in mind, and don't assume we will get everything working. We may, but don't impulse buy with this thought. In either case, we cannot be taken responsible nor accountable for functionality we never promised to you. The device is sold as a fully working Android™ Device, not fully working Windows device from Microsoft.__

The development for the Windows Port is currently scheduled as follows:

- ~~Milestone #0: Early UEFI/OS bring up, proof of concept~~ Completed!
- Milestone #1: SoC hardware bringup in Windows OS, end goal is to have all hardware blocks/components of the SoC in a functional or communicating state by the end of the milestone, but not have it interface with the OS if it isn't already done. **In progress!**
- Milestone #2: Bug fixes, this is where we will fix major issues like crashes, etc
- Milestone #3: Calibration/Tuning, calibrate everything to work as it should be.
- Milestone #4: To be defined?

_No ETA will be provided for **any** of these development phases_

---

Global progress: 76.47%

| Feature             | Description | Working state |
|---------------------|-------------|---------------|
| 👆 Left Multi Touch    |             | ✅             |
| 👆 Right Multi Touch   |             | ✅             |
| ✏️ Left Pen Digitizer  | Precision needs to be refined, otherwise works fine | ✅             |
| ✏️ Right Pen Digitizer | Precision needs to be refined, otherwise works fine | ✅             |
| 🔵 Bluetooth           |             | ✅             |
| 📦 UFS                 |             | ✅             |
| ⌨️ Side buttons        |             | ✅             |
| 💻 Lid Hall sensor     | Closing the device will put it into sleep, opening it will wake it up | ✅             |
| 🌡️ Thermal sensors     |             | ✅             |
| 📳 Vibration motor     |             | ✅             |
| 🔋 Battery 1           | Reading manufacturing date is coming soon | ✅             |
| 🔋 Battery 2           | Reading manufacturing date is coming soon | ✅             |
| 📲 Left Display Panel  | Color calibration is missing | ✅            |
| 📲 Right Display Panel | Color calibration is missing | ✅            |
| 📌 GPS                 |             | ✅             |
| 📽️ Miracast            |             | ✅             |
| ♋ WiFi                |             | ✅             |
| ♋ Cellular Data       |             | ✅             |
| ♋ Cellular Texts      |             | ✅             |
| ♋ Cellular eSIM       |             | ✅             |
| ♋ Cellular Calls      | Call provisioning is work in progress, if calls do not work for you at the moment, you may need to provision the call functionality manually. (Same as on Lumia 950s: https://woa-project.github.io/LumiaWOA/guides/ican0/, value is not different between 950s and Surface Duo either, so if you already have such value, you're good to go, this is temporary!) | ✅             |
| 📸 [Camera Flash](https://gist.github.com/gus33000/8720db998a7ab9c164bd6a96e00dac32)              |  | ✅             |
| 🎆 GPU                 | Initial boot may leave the right display with artifacts, locking and unlocking the device will fix this issue | ✅             |
| 💤 Modern Standby      |  | ✅              |
| 🧮 SoC Cores           | Prime core frequency isn't scaled up | ⚠️             |
| 🪵 USB C               | Some of the features are work in progress (USB Powerless Dongles) | ⚠️             |
| 🧭 Sensors     | Calibration isn't being automatically copied over. Pedometers and Motion sensors are not currently functional. | ⚠️             |
| ♋ Cellular VoLTE      | Untested due to lack of App / Software currently | ⚠️             |
| 🔌 Charger             | Incubating (not available but work is being made) | ⚠️             |
| 🔊 Audio               |             | ❌             |
| 📺 HDMI / DP out       | Incubating (not available but work is being made) | ⚠️             |
| 📸 Camera Sensor       | Requires CDSP Secure Camera/NPU to work | ❌             |
| 🧑‍💼 Hyper-V             | Requires Microsoft Corporation Signed device configuration binary | ❌             |
| 🧬 Fingerprint scanner |             | ❌             |

### Surface Duo 2

##### Keep up with the development in real time

Most updates are given first and foremost via our dedicated Announcement Telegram Channel. We try our best to also announce things elsewhere, but telegram remains our primary way of interfacing with the community at the moment. You can find the channel at https://t.me/DuoWOA_Announcements

##### Notes about the Development Schedule

__Note: This note is provided for informational purposes only, it does not in any way represent any commitment from any entity working towards the development of the Windows port on Surface Duo and does not mean that all functionality will be available or the development will ever finish, you should not buy the device for the sole purpose of using Windows on it with hopes of it eventually being fully functional or having XYZ hardware feature working in the supposed future. What is available today is what should be considered as the most you can get. Purchase with this in mind, and don't assume we will get everything working. We may, but don't impulse buy with this thought. In either case, we cannot be taken responsible nor accountable for functionality we never promised to you. The device is sold as a fully working Android™ Device, not fully working Windows device from Microsoft.__

The development for the Windows Port is currently scheduled as follows:

- ~~Milestone #0: Early UEFI/OS bring up, proof of concept~~ Completed!
- Milestone #1: SoC hardware bringup in Windows OS, end goal is to have all hardware blocks/components of the SoC in a functional or communicating state by the end of the milestone, but not have it interface with the OS if it isn't already done. **In progress!**
- Milestone #2: Bug fixes, this is where we will fix major issues like crashes, etc
- Milestone #3: Calibration/Tuning, calibrate everything to work as it should be.
- Milestone #4: To be defined?

_No ETA will be provided for **any** of these development phases_

---

| Feature             | Description | Working state |
|---------------------|-------------|---------------|
| 📦 UFS                 |             | ✅             |
| 📲 Left Display Panel  |             | ✅             |
| ⌨️ Side buttons        |             | ✅             |
| 💻 Lid Hall sensor     |             | ✅             |
| 🌡️ Thermal sensors     |             | ✅             |
| 🔋 Battery 1           |             | ✅             |
| 🔋 Battery 2           |             | ✅             |
| 💤 Modern Standby      |             | ✅             |
| 🪵 USB C               |             | ✅             |
| 🔌 Charger             |             | ✅             |
| 🧮 SoC Cores           | Only one core working | ⚠️             |
| 👆 Left Multi Touch    | Requires disabling one of the Touch Pen processors for now because the GPU driver is unavailable (requires Windows vNext) | ⚠️             |
| 👆 Right Multi Touch   | Requires disabling one of the Touch Pen processors for now because the GPU driver is unavailable (requires Windows vNext) | ⚠️             |
| ✏️ Left Pen Digitizer  | Requires disabling one of the Touch Pen processors for now because the GPU driver is unavailable (requires Windows vNext) | ⚠️             |
| ✏️ Right Pen Digitizer | Requires disabling one of the Touch Pen processors for now because the GPU driver is unavailable (requires Windows vNext) | ⚠️             |
| 🧭 Sensors             | Not all sensors are available | ⚠️             |
| 🔵 Bluetooth           | Requires Clock Controller fixes | ❌             |
| 📳 Vibration motor     | Requires PMIC Driver for Haptics | ❌             |
| 📲 Right Display Panel | Requires GPU | ❌             |
| 📌 GPS                 | Requires Modem Processor Subsystem | ❌             |
| 📽️ Miracast            | Requires GPU and requires WiFi | ❌             |
| ♋ WiFi                | Requires PCIe | ❌             |
| ♋ Cellular Data       | Requires Modem Processor Subsystem | ❌             |
| ♋ Cellular Texts      | Requires Modem Processor Subsystem | ❌             |
| ♋ Cellular eSIM       | Requires Modem Processor Subsystem | ❌             |
| ♋ Cellular Calls      | Requires Modem Processor Subsystem | ❌             |
| 🎆 GPU                 | Requires Clock Controller fixes | ❌             |
| ♋ Cellular VoLTE      | Requires Modem Processor Subsystem | ❌             |
| 🔊 Audio               | Requires Board Database file and Speaker Ic driver | ❌             |
| 📺 HDMI / DP out       | Requires GPU | ❌             |
| 📸 Camera Sensors      | Requires Camera Subsystem | ❌             |
| 📸 ToF Sensor          | Requires Camera Subsystem | ❌             |
| 📸 Camera Flash        | Requires Camera Subsystem | ❌             |
| 🏷️ NFC                 | Requires Secure NFC Applet Interface | ❌             |
| 🧬 Fingerprint scanner | Requires Secure FPC Applet Interface | ❌             |
