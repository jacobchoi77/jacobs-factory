export const playCadenceLegalMeta = {
  updated: "2026-09-14",
} as const;

export const playCadencePrivacy = {
  en: {
    title: "Privacy Policy — Play Cadence",
    intro:
      "This policy describes how the Play Cadence app (“the App”) handles information. It is the Play Cadence policy for Google Play.",
    blocks: [
      {
        heading: "Summary",
        body: "Microphone audio is processed on your device to estimate treadmill cadence (steps per minute) and is not uploaded to our servers. The App may show ads via Google AdMob, which may collect device and advertising identifiers under Google’s policies. World ranking uses Google Sign-In (not Play Games). After you sign in and finish an official track, the App sends a short-lived Google ID token so our host can verify the score, plus your display name, account id, score, and board id. Microphone audio is still not uploaded.",
      },
      {
        heading: "Data processed on the device",
        body: "Microphone audio is used only to detect footfall and cadence while a session is running, and it does not leave the device. Cadence session history (SPM samples, duration, target), app settings (target SPM, sensitivity, overlay preference), and your Google account email stay on the device. You can clear local data by clearing the App’s storage in Android Settings or uninstalling the App. Android Backup may restore run history and settings. Google Sign-In is kept out of backup and device transfer; you sign in again on a new phone.",
      },
      {
        heading: "Data that can leave the device",
        body: "After Google Sign-In, when you finish an official track the App sends a short-lived Google ID token, your play score, board id, Google account name, and Google account id so this-phone bests and the world board can be shown. The token can include your email address. We use it to verify that the score belongs to that account. The world board stores the account id, display name, and score — not the token itself. Microphone audio is not included. To remove a world-board row, email contact@jacobs-factory.com. We keep a posted score until you ask us to delete it.",
      },
      {
        heading: "Other network use",
        body: "The App may fetch a public music catalog (mix URLs and tempos) from our host. That request does not include your account. Opening a mix uses YouTube’s player, which Google operates under Google’s Privacy Policy (https://policies.google.com/privacy). If you buy Remove ads, Google Play Billing processes the purchase. We store a local “ads removed” flag; Google ties the purchase to your Play account.",
      },
      {
        heading: "Permissions",
        body: "Microphone is required to measure cadence from treadmill noise. Display over other apps is optional and used only if you enable the floating overlay. Notifications are used for the foreground-service notification while measuring cadence.",
      },
      {
        heading: "Advertising (AdMob)",
        body: "The App uses Google Mobile Ads (AdMob). During development or internal testing we may use Google’s test ad units. When production ad units are enabled, Google may collect and process data as described in Google’s Privacy Policy (https://policies.google.com/privacy) and AdMob documentation (https://support.google.com/admob/). We do not sell your personal information.",
      },
      {
        heading: "Overlay and other apps",
        body: "If you enable the floating overlay, the App draws a small cadence bar above other apps. That feature does not read the content of other apps.",
      },
      {
        heading: "Children, changes, and contact",
        body: "The App is not directed at children under 13, or under 14 in Korea. We do not knowingly collect personal information from children. If this policy changes, the date at the top is updated. Continued use after changes means you accept the updated policy. Questions: contact@jacobs-factory.com.",
      },
    ],
  },
  ko: {
    title: "개인정보처리방침 — Play Cadence",
    intro:
      "본 방침은 Play Cadence 앱(“본 앱”)이 정보를 어떻게 다루는지 설명합니다. Google Play에 제출하는 Play Cadence 방침입니다.",
    blocks: [
      {
        heading: "요약",
        body: "마이크 오디오는 케이던스(분당 걸음 수) 측정을 위해 기기 안에서만 처리되며 저희 서버로 전송되지 않습니다. 본 앱은 Google AdMob 광고를 표시할 수 있으며, AdMob은 Google 정책에 따라 기기·광고 식별자를 처리할 수 있습니다. 월드 랭킹은 Google 로그인입니다(Play 게임 아님). 로그인 뒤 공식 트랙을 끝내면, 점수 검증을 위한 단기 Google ID 토큰과 표시 이름·계정 id·점수·보드 id가 서버로 갑니다. 마이크 오디오는 여전히 올라가지 않습니다.",
      },
      {
        heading: "기기에서 처리하는 데이터",
        body: "마이크 오디오는 세션 중 케이던스 추정에만 쓰이며 기기 밖으로 나가지 않습니다. 러닝 기록(SPM 샘플, 시간, 목표), 앱 설정(목표 SPM, 감도, 오버레이), Google 계정 이메일은 기기에만 저장됩니다. Android 설정의 앱 저장공간 삭제 또는 앱 삭제로 로컬 데이터를 지울 수 있습니다. Android 백업은 러닝 기록과 설정을 복원할 수 있습니다. Google 로그인은 백업·기기 전송에 포함되지 않으며, 새 폰에서는 다시 로그인합니다.",
      },
      {
        heading: "기기 밖으로 나갈 수 있는 데이터",
        body: "Google 로그인 뒤 공식 트랙을 끝내면 단기 Google ID 토큰, 플레이 점수, 보드 id, Google 계정 이름, Google 계정 id가 이 폰 최고점과 월드 보드 표시를 위해 서버로 갑니다. 토큰에는 이메일이 포함될 수 있습니다. 점수가 그 계정 것인지 확인하는 데만 쓰고, 월드 보드에는 계정 id·표시 이름·점수를 저장하며 토큰 자체는 보관하지 않습니다. 마이크 오디오는 포함되지 않습니다. 월드 보드 행을 지우려면 contact@jacobs-factory.com으로 요청하면 됩니다. 올린 점수는 삭제 요청 전까지 유지됩니다.",
      },
      {
        heading: "그 밖의 네트워크 사용",
        body: "본 앱은 공개 음악 카탈로그(믹스 URL과 템포)를 호스트에서 받을 수 있습니다. 이 요청에는 계정이 포함되지 않습니다. 믹스를 열면 YouTube 플레이어를 쓰며, 이는 Google 개인정보처리방침(https://policies.google.com/privacy)이 적용됩니다. 광고 제거를 구매하면 Google Play 결제기가 결제를 처리합니다. 기기에는 “광고 제거됨” 플래그만 저장되고, 구매는 Play 계정에 묶입니다.",
      },
      {
        heading: "권한",
        body: "마이크는 러닝머신 소음으로 케이던스를 측정하기 위해 필요합니다. 다른 앱 위에 표시는 선택 사항이며 플로팅 오버레이를 켤 때만 사용합니다. 알림은 측정 중 포그라운드 서비스 알림에 사용합니다.",
      },
      {
        heading: "광고 (AdMob)",
        body: "본 앱은 Google Mobile Ads(AdMob)를 사용합니다. 개발/내부 테스트 중에는 Google 테스트 광고 단위를 사용할 수 있습니다. 운영 광고 단위가 켜지면 Google이 Google 개인정보처리방침(https://policies.google.com/privacy)과 AdMob 고객센터(https://support.google.com/admob/)에 따라 데이터를 처리할 수 있습니다. 저희는 개인정보를 판매하지 않습니다.",
      },
      {
        heading: "오버레이",
        body: "플로팅 오버레이를 켜면 다른 앱 위에 작은 케이던스 바가 표시됩니다. 다른 앱의 화면 내용을 읽지 않습니다.",
      },
      {
        heading: "아동, 변경, 문의",
        body: "본 앱은 만 13세 미만, 한국에서는 만 14세 미만 아동을 대상으로 하지 않으며, 아동의 개인정보를 고의로 수집하지 않습니다. 방침이 바뀌면 상단 날짜가 갱신됩니다. 변경 후 앱을 계속 사용하면 변경된 방침에 동의한 것으로 봅니다. 문의: contact@jacobs-factory.com.",
      },
    ],
  },
} as const;
