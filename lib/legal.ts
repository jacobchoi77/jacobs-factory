export const legalMeta = {
  updated: "2026-09-14",
  operator: "Jacob Choi (jacobsfactory)",
  contact: "contact@jacobs-factory.com",
  contactHref: "mailto:contact@jacobs-factory.com",
} as const;

export const privacySections = {
  en: {
    title: "Privacy Policy",
    intro:
      "This policy covers Jacobs Factory apps, including My Health Diary, FreeTimer, SayNote, and Play Cadence.",
    blocks: [
      {
        heading: "What the apps are",
        body: "FreeTimer is a focus timer with no ads and no analytics or tracking SDKs. My Health Diary, SayNote, and Play Cadence are also built by Jacobs Factory. My Health Diary has its own policy at /my-health-diary/privacy. SayNote has its own policy at /saynote/privacy. Play Cadence has its own policy at /play-cadence/privacy.",
      },
      {
        heading: "My Health Diary",
        body: "My Health Diary (내 건강 일기) stores symptom and clinic notes on the phone. It has no account and no ads. Optional speech and tapping AI organize may send that day’s text to a system recognizer or a language-model API. The full policy is at /my-health-diary/privacy.",
      },
      {
        heading: "SayNote",
        body: "SayNote stores spoken notes on the phone. It has no account and no ads. Speech recognition may use Google or Apple. The full policy is at /saynote/privacy.",
      },
      {
        heading: "Play Cadence",
        body: "Play Cadence processes microphone audio on the device to estimate treadmill cadence and does not upload that audio. It may show Google AdMob ads. After optional Google Sign-In, a world-board score can include your Google account name. See the Play Cadence privacy page for the full policy.",
      },
      {
        heading: "Data stored on your device",
        body: "Tasks, groups, completed sessions, notes, and settings such as theme and alerts stay on this device. Nothing about your tasks is sent off the device unless you turn on an optional feature below.",
      },
      {
        heading: "Optional Google sync (FreeTimer)",
        body: "If you sign in with Google in FreeTimer, a copy of your tasks and history is stored only in this app’s hidden Google Drive app-data folder, not in your regular Drive files. Disconnecting in the app or revoking access in your Google Account stops further sync.",
      },
      {
        heading: "Other optional data that leaves the device",
        body: "FreeTimer may fetch today’s quote from our Cloudflare R2 cache or ZenQuotes.io, and extra focus sounds from Cloudflare R2, without your tasks or account. Feedback goes through FormSubmit to contact@jacobs-factory.com. Android tips use Google Play Billing; the app never receives your card number. See /freetimer/privacy for the full FreeTimer policy.",
      },
      {
        heading: "Retention and children",
        body: "Device data remains until you delete the app or clear data in Settings. FreeTimer is not directed at children under 13, or under 14 in Korea. If this policy changes, the date at the top is updated.",
      },
    ],
  },
  ko: {
    title: "개인정보처리방침",
    intro:
      "이 방침은 내 건강 일기, FreeTimer, SayNote, Play Cadence를 포함한 Jacobs Factory 앱에 적용됩니다.",
    blocks: [
      {
        heading: "앱 소개",
        body: "FreeTimer는 광고와 분석·추적 도구가 없는 집중 타이머입니다. 내 건강 일기, SayNote, Play Cadence도 Jacobs Factory에서 만듭니다. 내 건강 일기 전용 방침은 /my-health-diary/privacy 에, SayNote 전용 방침은 /saynote/privacy 에, Play Cadence 전용 방침은 /play-cadence/privacy 에 있습니다.",
      },
      {
        heading: "내 건강 일기",
        body: "내 건강 일기는 증상·병원 기록을 휴대폰에 둡니다. 계정과 광고가 없습니다. 말하기나 AI 정리를 쓰면 그날 글이 기기 음성 인식 또는 언어 모델로 갈 수 있습니다. 전용 방침은 /my-health-diary/privacy 입니다.",
      },
      {
        heading: "SayNote",
        body: "SayNote는 말한 노트를 휴대폰에 둡니다. 계정과 광고가 없습니다. 음성 인식은 Google 또는 Apple을 쓤 수 있습니다. 전용 방침은 /saynote/privacy 입니다.",
      },
      {
        heading: "Play Cadence",
        body: "Play Cadence는 마이크 오디오를 기기 안에서만 처리해 케이던스를 추정하며 그 오디오는 올리지 않습니다. Google AdMob 광고를 표시할 수 있습니다. 선택 Google 로그인 뒤 월드 보드 점수에 Google 계정 이름이 포함될 수 있습니다. 자세한 내용은 Play Cadence 개인정보처리방침을 보세요.",
      },
      {
        heading: "기기에 저장되는 정보",
        body: "작업, 그룹, 완료 기록, 메모, 테마·알림 같은 설정은 이 기기 안에 저장됩니다. 아래 선택 기능을 켜지 않으면 작업 내용은 밖으로 나가지 않습니다.",
      },
      {
        heading: "선택 Google 동기화 (FreeTimer)",
        body: "FreeTimer에서 Google로 로그인하면 작업·기록 사본이 이 앱 전용 Google Drive 숨은 폴더(app data)에만 저장되며, 일반 Drive 파일 목록에는 보이지 않습니다. 앱에서 연결을 끊거나 Google 계정에서 접근을 해제하면 이후 동기화는 멈춥니다.",
      },
      {
        heading: "그 밖에 선택적으로 나가는 정보",
        body: "FreeTimer는 작업·계정 없이 Cloudflare R2 캐시 또는 ZenQuotes.io에서 오늘의 한 줄을, Cloudflare R2에서 추가 집중 사운드를 가져올 수 있습니다. 의견은 FormSubmit을 거쳐 contact@jacobs-factory.com으로 전달됩니다. Android 응원은 Google Play 결제가 처리하며 카드 번호는 앱이 받지 않습니다. 전체 방침은 /freetimer/privacy 를 보세요.",
      },
      {
        heading: "보관과 아동",
        body: "기기 데이터는 앱을 삭제하거나 설정에서 지울 때까지 남습니다. FreeTimer는 만 13세 미만, 한국에서는 만 14세 미만을 대상으로 하지 않습니다. 방침이 바뀌면 이 문서의 날짜를 갱신합니다.",
      },
    ],
  },
} as const;

export const termsSections = {
  en: {
    title: "Terms of Service",
    intro: "By using Jacobs Factory apps, including FreeTimer, you agree to these terms.",
    blocks: [
      {
        heading: "The apps",
        body: "FreeTimer is a focus timer. Tasks and settings stay on your device. Google sign-in is optional. If you sign in, a copy is stored only in FreeTimer’s hidden Google Drive app-data folder.",
      },
      {
        heading: "As-is",
        body: "The apps are provided as-is, without warranties. We are not liable for lost data or inability to use the apps. You may stop using them at any time and delete the app or its local data.",
      },
      {
        heading: "Contact",
        body: "Questions: contact@jacobs-factory.com. These terms may change; the date at the top will be updated.",
      },
    ],
  },
  ko: {
    title: "이용약관",
    intro: "FreeTimer를 포함한 Jacobs Factory 앱을 사용하면 이 약관에 동의한 것으로 봅니다.",
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
