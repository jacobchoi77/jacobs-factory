export const sayNoteLegalMeta = {
  updated: "2026-09-14",
} as const;

export const sayNotePrivacy = {
  en: {
    title: "Privacy Policy — SayNote",
    intro:
      "This policy describes how the SayNote app (\u201cthe App\u201d) handles information. It is the SayNote policy for Google Play and the App Store.",
    blocks: [
      {
        heading: "Summary",
        body: "Notes stay on this phone. Jacobs Factory does not run a server that receives your notes, voice, or photos. There is no account and no ads. Speech recognition may use the internet, depending on the device, language, and platform (Google on Android, Apple on iOS). Photos, local reminders, optional tips, and feedback are optional and do not change the App.",
      },
      {
        heading: "Data stored on the device",
        body: "Jacobs Factory does not collect personal information. Card numbers, names, emails, and payment accounts do not come to us. Stored on the device: note text, title, created time, important flag, reminder time, photos you attach, search history, theme and text-size settings, backups you export, an on-device auto-backup, and temporary Play-tip confirmation used only on this phone. We do not keep an unlock record.",
      },
      {
        heading: "Speech, photos, and reminders",
        body: "The App uses the microphone when you speak a new note. It does not keep an audio file. Only the transcribed text is saved. On Android the App uses SpeechRecognizer; on some devices and languages audio may go to Google speech services. On iOS the App uses Apple speech recognition, which may send audio to Apple. Jacobs Factory does not receive or store that audio. Read-aloud uses the on-device text-to-speech engine. Photos you attach from the library or camera stay on this phone unless you export a backup or tap Share. Reminders are local notifications. There is no push server.",
      },
      {
        heading: "Backup, sharing, and optional network use",
        body: "Export and import in Settings send the file, including attached photos, only where you choose. The on-device auto-backup stays on the phone. If Android backup is on, note data may be included in your Google account backup. If iCloud Backup is on, note data may be included in your Apple account backup. Note text or a backup file is sent to another app only when you tap Share. On Android, optional tips use Google Play Billing; card numbers go to Google, not to Jacobs Factory. On iOS there is no in-app purchase. The optional Ko-fi / PayPal link opens in the browser and that site\u2019s policy applies. If you send feedback, the draft can include app version, OS version, and device model and goes to contact@jacobs-factory.com only if you send it.",
      },
      {
        heading: "Permissions",
        body: "Microphone is used for voice notes. Speech recognition on iOS turns speech into text. Camera is used only if you take a photo. Choosing a photo uses the system picker; the App does not keep standing access to your library. Notifications and exact alarms are used only for optional local reminders, which are restored after reboot on this phone. Internet is used for speech recognition as implemented on the device, for Google Play Billing on Android, and for optional links you tap.",
      },
      {
        heading: "Third parties",
        body: "There are no ads, analytics, or account SDKs. Speech recognition is handled by the device, Google (Android), or Apple (iOS). On Android, optional tips are processed by Google Play Billing. The optional Ko-fi / PayPal link opens only if you tap it. If installed from Play, Android may send crash information to Google Play (Android Vitals). We use that only to check stability. Note text is not collected.",
      },
      {
        heading: "Children, changes, and contact",
        body: "Notes stay on the device until you delete them, reset in Settings, or uninstall the App. The App is not directed at children under 13, or under 14 in Korea. We do not knowingly collect personal information from children. If this policy changes, the date at the top is updated. Questions: contact@jacobs-factory.com.",
      },
    ],
  },
  ko: {
    title: "\uac1c\uc778\uc815\ubcf4\ucc98\ub9ac\ubc29\uce68 \u2014 SayNote",
    intro:
      "\ubcf8 \ubc29\uce68\uc740 SayNote \uc571(\u201c\ubcf8 \uc571\u201d)\uc774 \uc815\ubcf4\ub97c \uc5b4\ub5bb\uac8c \ub2e4\ub8e8\ub294\uc9c0 \uc124\uba85\ud569\ub2c8\ub2e4. Google Play\uc640 App Store\uc5d0 \uc81c\ucd9c\ud558\ub294 SayNote \ubc29\uce68\uc785\ub2c8\ub2e4.",
    blocks: [
      {
        heading: "\uc694\uc57d",
        body: "\ub178\ud2b8\ub294 \uc774 \uae30\uae30\uc5d0 \uc800\uc7a5\ub429\ub2c8\ub2e4. Jacobs Factory\ub294 \ub178\ud2b8, \uc74c\uc131, \uc0ac\uc9c4\uc744 \ubc1b\ub294 \uc11c\ubc84\ub97c \ub450\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \uacc4\uc815\uc774 \uc5c6\uace0 \uad11\uace0\ub3c4 \uc5c6\uc2b5\ub2c8\ub2e4. \uc74c\uc131 \uc778\uc2dd\uc740 \uae30\uae30\u00b7\uc5b8\uc5b4\u00b7\ud50c\ub7ab\ud3fc\uc5d0 \ub530\ub77c \uc778\ud130\ub137\uc774 \ud544\uc694\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4(Android\ub294 Google, iOS\ub294 Apple). \uc0ac\uc9c4 \ucca8\ubd80, \ub85c\uceec \uc54c\ub9bc, \uc120\ud0dd \uc751\uc6d0, \uc758\uacac \ubcf4\ub0b4\uae30\ub294 \uc120\ud0dd\uc774\uba70 \uc571 \uae30\ub2a5\uc740 \ubc14\ub00c\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.",
      },
      {
        heading: "\uae30\uae30\uc5d0 \uc800\uc7a5\ub418\ub294 \uc815\ubcf4",
        body: "\uc6b4\uc601\uc790\uac00 \uc9c1\uc811 \uc218\uc9d1\ud558\ub294 \uac1c\uc778\uc815\ubcf4\ub294 \uc5c6\uc2b5\ub2c8\ub2e4. \uce74\ub4dc \ubc88\ud638, \uc774\ub984, \uc774\uba54\uc77c, \uacb0\uc81c \uacc4\uc815\ub3c4 Jacobs Factory\ub85c \uc624\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \uae30\uae30\uc5d0 \ub0a8\ub294 \uac83: \ub178\ud2b8 \uae00\uc790, \uc81c\ubaa9, \uc791\uc131 \uc2dc\uac01, \uc911\uc694 \ud45c\uc2dc, \uc54c\ub9bc \uc2dc\uac01, \ub178\ud2b8\uc5d0 \ubd99\uc778 \uc0ac\uc9c4, \uac80\uc0c9\uc5b4 \uae30\ub85d, \ud14c\ub9c8\u00b7\uae00\uc790 \ud06c\uae30 \uc124\uc815, \uc0ac\uc6a9\uc790\uac00 \ub9cc\ub4e0 \ubc31\uc5c5, \uae30\uae30 \uc548 \uc790\ub3d9 \ubc31\uc5c5, Play \uc751\uc6d0 \ud655\uc778\uc6a9 \uc77c\uc2dc \uc0c1\ud0dc. \uae30\ub2a5\uc744 \uc5ec\ub294 \uae30\ub85d\uc740 \ub0a8\uae30\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.",
      },
      {
        heading: "\uc74c\uc131, \uc0ac\uc9c4, \uc54c\ub9bc",
        body: "\uc0c8 \ub178\ud2b8\ub97c \ub9d0\ud560 \ub54c \ub9c8\uc774\ud06c\ub97c \uc4f0\ub2c8\ub2e4. \uc74c\uc131 \ud30c\uc77c\uc740 \uc571\uc774 \uc800\uc7a5\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \uae00\uc790\ub85c \ubc14\uafbc \uacb0\uacfc\ub9cc \ub0a8\uc2b5\ub2c8\ub2e4. Android\ub294 SpeechRecognizer\ub97c \uc4f0\uba70, \uae30\uae30\uc640 \uc5b8\uc5b4\uc5d0 \ub530\ub77c \uc74c\uc131\uc774 Google\ub85c \uac08 \uc218 \uc788\uc2b5\ub2c8\ub2e4. iOS\ub294 Apple \uc74c\uc131 \uc778\uc2dd\uc744 \uc4f0\uba70 \uc74c\uc131\uc774 Apple\ub85c \uac08 \uc218 \uc788\uc2b5\ub2c8\ub2e4. Jacobs Factory\ub294 \uadf8 \uc74c\uc131\uc744 \ubc1b\uac70\ub098 \ubcf4\uad00\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \uc77d\uc5b4\uc8fc\uae30\ub294 \uae30\uae30 TTS\ub97c \uc4f0\ub2c8\ub2e4. \uc0ac\uc9c4 \ubcf4\uad00\ud568\uc774\ub098 \uce74\uba54\ub77c\ub85c \ubd99\uc778 \uc0ac\uc9c4\uc740 \uc774 \uae30\uae30\uc5d0 \ub0a8\uace0, \ubc31\uc5c5\uc744 \ubcf4\ub0b4\uac70\ub098 \uacf5\uc720\ub97c \ub204\ub97c \ub54c\ub9cc \ubc16\uc73c\ub85c \ub098\uac11\ub2c8\ub2e4. \uc54c\ub9bc\uc740 \uc774 \uae30\uae30\uc758 \ub85c\uceec \uc54c\ub9bc\uc785\ub2c8\ub2e4. \ud478\uc2dc \uc11c\ubc84\ub294 \uc5c6\uc2b5\ub2c8\ub2e4.",
      },
      {
        heading: "\ubc31\uc5c5, \uacf5\uc720, \uc120\ud0dd \ub124\ud2b8\uc6cc\ud06c",
        body: "\uc124\uc815\uc5d0\uc11c \ubcf4\ub0b4\uae30/\uac00\uc838\uc624\uae30\ub294 \uc0ac\uc9c4\uc774 \ud3ec\ud568\ub41c \ud30c\uc77c\uc744 \uc0ac\uc6a9\uc790\uac00 \uace0\ub978 \uacf3\uc73c\ub85c\ub9cc \ubcf4\ub0c5\ub2c8\ub2e4. \uae30\uae30 \uc548 \uc790\ub3d9 \ubc31\uc5c5\uc740 \uc804\ud654 \uc548\uc5d0\ub9cc \ub461\ub2c8\ub2e4. Android \uc790\ub3d9 \ubc31\uc5c5\uc774 \ucf1c\uc838 \uc788\uc73c\uba74 \ub178\ud2b8 \ub370\uc774\ud130\uac00 Google \uacc4\uc815 \ubc31\uc5c5\uc5d0 \ud3ec\ud568\ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4. iCloud \ubc31\uc5c5\uc774 \ucf1c\uc838 \uc788\uc73c\uba74 Apple \uacc4\uc815 \ubc31\uc5c5\uc5d0 \ud3ec\ud568\ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uacf5\uc720\ub97c \ub204\ub97c \ub54c\ub9cc \uc120\ud0dd\ud55c \uc571\uc73c\ub85c \ub178\ud2b8\ub098 \ubc31\uc5c5\uc774 \uc804\ub2ec\ub429\ub2c8\ub2e4. Android\uc758 \uc120\ud0dd \uc751\uc6d0\uc740 Google Play \uacb0\uc81c\ub97c \uc4f0\uba70, \uce74\ub4dc \ubc88\ud638\ub294 Google\uc774 \ubc1b\uace0 Jacobs Factory\ub85c\ub294 \uc624\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. iOS\uc5d0\ub294 \uc778\uc571 \uacb0\uc81c\uac00 \uc5c6\uc2b5\ub2c8\ub2e4. \uc120\ud0dd Ko-fi / PayPal \ub9c1\ud06c\ub294 \ube0c\ub77c\uc6b0\uc800\uc5d0\uc11c \uc5f4\ub9ac\uba70 \ud574\ub2f9 \uc11c\ube44\uc2a4 \uc815\ucc45\uc774 \uc801\uc6a9\ub429\ub2c8\ub2e4. \uc758\uacac\uc744 \ubcf4\ub0b4\uba74 \ucd08\uc548\uc5d0 \uc571 \ubc84\uc804, OS \ubc84\uc804, \uae30\uae30 \ubaa8\ub378\uc774 \ub4e4\uc5b4\uac08 \uc218 \uc788\uc73c\uba70, \uba54\uc77c\uc744 \ubcfc \ub54c\ub9cc contact@jacobs-factory.com\uc73c\ub85c \uac11\ub2c8\ub2e4.",
      },
      {
        heading: "\uad8c\ud55c",
        body: "\ub9c8\uc774\ud06c\ub294 \ub9d0\ud558\uae30 \ub178\ud2b8\uc5d0 \uc4f0\ub2c8\ub2e4. iOS \uc74c\uc131 \uc778\uc2dd\uc740 \ub9d0\uc744 \uae00\uc790\ub85c \ubc14\uafc9\ub2c8\ub2e4. \uce74\uba54\ub77c\ub294 \uc0ac\uc9c4\uc744 \ucc0d\uc744 \ub54c\ub9cc \uc4f0\ub2c8\ub2e4. \ubcf4\uad00\ud568\uc5d0\uc11c \uace0\ub97c \ub54c\ub294 \uc2dc\uc2a4\ud15c \uc120\ud0dd\uae30\ub97c \uc4f0\uba70, \uc571\uc774 \uc0ac\uc9c4 \ubcf4\uad00\ud568\uc5d0 \uacc4\uc18d \uc811\uadfc\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \uc54c\ub9bc\uacfc \uc815\ud655\ud55c \uc54c\ub78c\uc740 \uc120\ud0dd \ub85c\uceec \uc54c\ub9bc\uc5d0\ub9cc \uc4f0\uace0, \uc7ac\ubd80\ud305 \ub4a4\uc5d0\ub3c4 \uc774 \uae30\uae30\uc5d0\uc11c \ub2e4\uc2dc \ub9de\ucda5\ub2c8\ub2e4. \uc778\ud130\ub137\uc740 \uae30\uae30 \uad6c\ud604\uc5d0 \ub530\ub978 \uc74c\uc131 \uc778\uc2dd, Android\uc758 Google Play \uacb0\uc81c, \uadf8\ub9ac\uace0 \uc0ac\uc6a9\uc790\uac00 \uc5ec\ub294 \uc120\ud0dd \ub9c1\ud06c\uc5d0 \uc4f0\ub2c8\ub2e4.",
      },
      {
        heading: "\uc81c3\uc790",
        body: "\uad11\uace0, \ubd84\uc11d, \uacc4\uc815 SDK\ub294 \uc5c6\uc2b5\ub2c8\ub2e4. \uc74c\uc131 \uc778\uc2dd\uc740 \uae30\uae30, Google(Android), \ub610\ub294 Apple(iOS)\uc774 \ucc98\ub9ac\ud569\ub2c8\ub2e4. Android\uc758 \uc120\ud0dd \uc751\uc6d0\uc740 Google Play \uacb0\uc81c\uac00 \ucc98\ub9ac\ud569\ub2c8\ub2e4. Ko-fi / PayPal \ub9c1\ud06c\ub294 \ub204\ub97c \ub54c\ub9cc \uc5f4\ub9bd\ub2c8\ub2e4. Play\uc5d0\uc11c \uc124\uce58\ud55c \uacbd\uc6b0 Android\uac00 \ud06c\ub798\uc2dc \uc815\ubcf4\ub97c Google Play(Android Vitals)\uc5d0 \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc548\uc815\uc131 \ud655\uc778\uc5d0\ub9cc \uc4f0\uba70 \ub178\ud2b8 \ub0b4\uc6a9\uc740 \uc218\uc9d1\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.",
      },
      {
        heading: "\uc544\ub3d9, \ubcc0\uacbd, \ubb38\uc758",
        body: "\ub178\ud2b8\ub294 \uc0ad\uc81c, \uc124\uc815 \ucd08\uae30\ud654, \ub610\ub294 \uc571 \uc0ad\uc81c\uae4c\uc9c0 \uae30\uae30\uc5d0 \uc788\uc2b5\ub2c8\ub2e4. \ubcf8 \uc571\uc740 \ub9cc 13\uc138 \ubbf8\ub9cc, \ud55c\uad6d\uc5d0\uc11c\ub294 \ub9cc 14\uc138 \ubbf8\ub9cc \uc544\ub3d9\uc744 \ub300\uc0c1\uc73c\ub85c \ud558\uc9c0 \uc54a\uc73c\uba70, \uc544\ub3d9\uc758 \uac1c\uc778\uc815\ubcf4\ub97c \uace0\uc758\ub85c \uc218\uc9d1\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \ubc29\uce68\uc774 \ubc14\ub00c\uba74 \uc0c1\ub2e8 \ub0a0\uc9dc\uac00 \uac31\uc2e0\ub429\ub2c8\ub2e4. \ubb38\uc758: contact@jacobs-factory.com.",
      },
    ],
  },
} as const;

export const sayNoteTerms = {
  en: {
    title: "Terms of Service — SayNote",
    intro: "By using SayNote you agree to these terms.",
    blocks: [
      {
        heading: "The app",
        body: "SayNote turns speech into notes on this device. There is no account. Notes, photos, and settings stay on your phone unless you export a backup or tap Share.",
      },
      {
        heading: "As-is",
        body: "The app is provided as-is, without warranties. We are not liable for lost notes or inability to use the app. You may stop using it at any time and delete the app or its local data.",
      },
      {
        heading: "Contact",
        body: "Questions: contact@jacobs-factory.com. These terms may change; the date at the top will be updated.",
      },
    ],
  },
  ko: {
    title: "\uc774\uc6a9\uc57d\uad00 \u2014 SayNote",
    intro: "SayNote\ub97c \uc0ac\uc6a9\ud558\uba74 \uc774 \uc57d\uad00\uc5d0 \ub3d9\uc758\ud55c \uac83\uc73c\ub85c \ubd05\ub2c8\ub2e4.",
    blocks: [
      {
        heading: "\uc571",
        body: "SayNote\ub294 \ub9d0\ud55c \uac83\uc744 \uc774 \uae30\uae30\uc758 \ub178\ud2b8\ub85c \ub0a8\uae41\ub2c8\ub2e4. \uacc4\uc815\uc740 \uc5c6\uc2b5\ub2c8\ub2e4. \ub178\ud2b8, \uc0ac\uc9c4, \uc124\uc815\uc740 \ubc31\uc5c5\uc744 \ubcf4\ub0b4\uac70\ub098 \uacf5\uc720\ub97c \ub204\ub974\uc9c0 \uc54a\uc73c\uba74 \ud734\ub300\ud3f0\uc5d0 \ub0a8\uc2b5\ub2c8\ub2e4.",
      },
      {
        heading: "\uc788\ub294 \uadf8\ub300\ub85c",
        body: "\uc571\uc740 \uc788\ub294 \uadf8\ub300\ub85c \uc81c\uacf5\ub418\uba70 \uba85\uc2dc\uc801 \ubcf4\uc99d\uc740 \uc5c6\uc2b5\ub2c8\ub2e4. \ub178\ud2b8 \uc190\uc2e4\uc774\ub098 \uc0ac\uc6a9 \ubd88\uac00\uc5d0 \ub300\ud574 \ucc45\uc784\uc744 \uc9c0\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \uc5b8\uc81c\ub4e0\uc9c0 \uc0ac\uc6a9\uc744 \uc911\ub2e8\ud558\uace0 \uc571 \ub610\ub294 \uae30\uae30 \ub370\uc774\ud130\ub97c \uc0ad\uc81c\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
      },
      {
        heading: "\ubb38\uc758",
        body: "\ubb38\uc758: contact@jacobs-factory.com. \uc57d\uad00\uc774 \ubc14\ub00c\uba74 \uc774 \ubb38\uc11c\uc758 \ub0a0\uc9dc\ub97c \uac31\uc2e0\ud569\ub2c8\ub2e4.",
      },
    ],
  },
} as const;
