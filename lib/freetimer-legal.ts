export const freetimerLegalMeta = {
  updated: "2026-09-14",
  operator: "Jacob Choi (jacobsfactory)",
  contact: "contact@jacobs-factory.com",
  contactHref: "mailto:contact@jacobs-factory.com",
} as const;

export const freetimerPrivacy = {
  en: {
    title: "Privacy Policy",
    intro:
      "This is the FreeTimer privacy policy for Google Play, the App Store, and desktop builds.",
    blocks: [
      {
        heading: "What FreeTimer is",
        body: "FreeTimer is a focus timer. It has no ads and no analytics or tracking SDKs.",
      },
      {
        heading: "Data stored on your device",
        body: "Tasks, groups, completed sessions, and settings such as theme and alerts stay on this device. Nothing about your tasks is sent off the device unless you turn on an optional feature below. If you export a backup, that file stays wherever you save it. On mobile, the app may also keep a local auto-backup copy.",
      },
      {
        heading: "Optional Google sync",
        body: "If you sign in with Google, a copy of your tasks and history is stored only in this app’s hidden Google Drive app-data folder, not in your regular Drive files. Disconnecting in the app or revoking access in your Google Account stops further sync.",
      },
      {
        heading: "Today’s quote",
        body: "If the home-screen quote is on, the app may fetch the day’s quote from our Cloudflare R2 cache, and if that is missing, from ZenQuotes.io. Those requests do not include your tasks or account. The hosts can see a network address. Turning the quote off in Settings stops further requests.",
      },
      {
        heading: "Focus sounds",
        body: "A few sounds are bundled on the device. Extra catalog entries and audio files download from Cloudflare R2 when you use them. Those requests do not include your tasks or account.",
      },
      {
        heading: "Feedback and tips",
        body: "Feedback you send goes through FormSubmit to contact@jacobs-factory.com. We keep messages only as needed to reply. On Android, Google Play Billing handles tips; the app never receives your card number. If you tip via Ko-fi, Ko-fi’s policy applies.",
      },
      {
        heading: "Notifications",
        body: "Timer-complete alerts are local device notifications. They are not sent through a server.",
      },
      {
        heading: "Retention, children, and changes",
        body: "Device data remains until you delete the app or clear data in Settings. If you used Google sync, revoke access in your Google Account to stop further sync. FreeTimer is not directed at children under 13, or under 14 in Korea. If this policy changes, the date at the top is updated.",
      },
    ],
  },
  ko: {
    title: "개인정보처리방침",
    intro:
      "이 문서는 Google Play, App Store, 데스크톱 빌드에 적용되는 FreeTimer 개인정보처리방침입니다.",
    blocks: [
      {
        heading: "앱 소개",
        body: "FreeTimer는 집중 타이머 앱입니다. 광고를 넣지 않고, 사용 분석·추적 도구도 넣지 않습니다.",
      },
      {
        heading: "기기에 저장되는 정보",
        body: "작업, 그룹, 완료 기록, 테마·알림 같은 설정은 이 기기 안에 저장됩니다. 아래 선택 기능을 켜지 않으면 작업 내용은 밖으로 나가지 않습니다. 백업을 직접 내보내면 그 파일은 사용자가 저장한 위치에 남습니다. 모바일에서는 기기에 자동 백업 사본이 만들어질 수 있습니다.",
      },
      {
        heading: "선택 Google 동기화",
        body: "Google 계정으로 로그인하면 작업·기록 사본이 이 앱 전용 Google Drive 숨은 폴더(app data)에만 저장되며, 일반 Drive 파일 목록에는 보이지 않습니다. 앱에서 연결을 끊거나 Google 계정에서 접근을 해제하면 이후 동기화는 멈춥니다.",
      },
      {
        heading: "오늘의 한 줄",
        body: "홈 화면 격언이 켜져 있으면 Cloudflare R2 캐시에서 오늘의 명언을 가져오고, 없으면 ZenQuotes.io에 요청할 수 있습니다. 요청에 작업이나 계정 정보는 들어가지 않습니다. 해당 호스트는 네트워크 주소를 볼 수 있습니다. 설정에서 끄면 이후 요청은 멈춥니다.",
      },
      {
        heading: "집중 사운드",
        body: "일부 사운드는 앱에 포함되어 있습니다. 추가 목록과 오디오 파일은 사용할 때 Cloudflare R2에서 내려받습니다. 이 요청에 작업이나 계정 정보는 들어가지 않습니다.",
      },
      {
        heading: "의견과 응원",
        body: "의견은 FormSubmit을 거쳐 contact@jacobs-factory.com으로 전달됩니다. 답장에 필요할 때만 보관합니다. Android 응원은 Google Play 결제가 처리하며 카드 번호는 앱이 받지 않습니다. Ko-fi로 응원하면 해당 서비스 정책이 적용됩니다.",
      },
      {
        heading: "알림",
        body: "타이머가 끝나면 기기 로컬 알림을 쓸 수 있습니다. 알림을 위해 서버로 개인정보를 보내지 않습니다.",
      },
      {
        heading: "보관, 아동, 변경",
        body: "기기 데이터는 앱을 삭제하거나 설정에서 지울 때까지 남습니다. Google 동기화를 쓰다면 Google 계정에서 접근을 해제해 이후 동기화를 멈출 수 있습니다. FreeTimer는 만 13세 미만, 한국에서는 만 14세 미만을 대상으로 하지 않습니다. 방침이 바뀌면 이 문서의 날짜를 갱신합니다.",
      },
    ],
  },
} as const;

export const freetimerTerms = {
  en: {
    title: "Terms of Service",
    intro: "By using FreeTimer you agree to these terms.",
    blocks: [
      {
        heading: "The app",
        body: "FreeTimer is a focus timer. Tasks and settings stay on your device. Google sign-in is optional. If you sign in, a copy is stored only in FreeTimer’s hidden Google Drive app-data folder.",
      },
      {
        heading: "As-is",
        body: "The app is provided as-is, without warranties. We are not liable for lost data or inability to use the app. You may stop using it at any time and delete the app or its local data.",
      },
      {
        heading: "Contact",
        body: "Questions: contact@jacobs-factory.com. These terms may change; the date at the top will be updated.",
      },
    ],
  },
  ko: {
    title: "이용약관",
    intro: "FreeTimer를 사용하면 이 약관에 동의한 것으로 봅니다.",
    blocks: [
      {
        heading: "앱",
        body: "FreeTimer는 집중 타이머입니다. 작업과 설정은 기기에 저장됩니다. Google 로그인은 선택이며, 로그인하면 사본이 FreeTimer 전용 Drive 숨은 폴더에만 저장됩니다.",
      },
      {
        heading: "있는 그대로",
        body: "앱은 있는 그대로 제공되며 명시적 보증은 없습니다. 데이터 손실이나 사용 불가에 대해 책임을 지지 않습니다. 언제든지 사용을 중단하고 앱 또는 기기 데이터를 삭제할 수 있습니다.",
      },
      {
        heading: "문의",
        body: "문의: contact@jacobs-factory.com. 약관이 바뀌면 이 문서의 날짜를 갱신합니다.",
      },
    ],
  },
} as const;
