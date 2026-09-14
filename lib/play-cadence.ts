export const playCadenceStores = {
  play: "https://play.google.com/store/apps/details?id=com.jacobsfactory.treadmillcadence",
} as const;

export const playCadenceCopy = {
  ko: {
    tagline: "러닝머신에서 케이던스를 맞추는 게임.",
    intro: [
      "Play Cadence는 러닝머신 위에서 목표 케이던스(SPM)를 맞추며 뛰는 앱입니다. 시계나 풋팟 없이 폰 마이크만으로 발소리를 잽니다.",
      "코스를 고르고 Start를 누르면 됩니다. 워밍업이 끝나면 목표 케이던스에 맞춘 유튜브 믹스가 앱 안에서 켜집니다. 이어폰으로 들으면 마이크가 발소리만 듣습니다.",
      "리듬 레인에 노트가 내려오고, 목표 SPM에 얼마나 가까운지로 Perfect·Great·Miss가 뜹니다. 콤보가 쌓이고 점수는 100만 점까지입니다. 공식 트랙을 끝내면 Google 로그인으로 월드 랭킹에 올릴 수 있습니다.",
      "넷플릭스나 유튜브를 보면서 뛰고 싶을 때는 오버레이로 케이던스만 띄울 수 있습니다. 숫자와 색으로 보여 줘서 소리에 기대지 않아도 됩니다. 의료기기가 아니며, 피트니스용입니다.",
    ],
    featuresTitle: "기능",
    features: [
      "마이크만으로 SPM 측정 (시계·풋팟 없음)",
      "목표 케이던스에 맞춘 유튜브 믹스",
      "DDR 스타일 리듬 레인과 점수",
      "넷플릭스·유튜브 위 케이던스 오버레이",
      "코스별 기록과 월드 랭킹",
      "선택 광고 제거",
    ],
    screenshotsTitle: "화면",
    screenshots: [
      { src: "/apps/play-cadence/home.png", alt: "홈 화면의 러닝 요약" },
      { src: "/apps/play-cadence/tracks.png", alt: "트랙 목록" },
      { src: "/apps/play-cadence/play.png", alt: "실행 중인 리듬 레인" },
      { src: "/apps/play-cadence/history.png", alt: "기록과 점수" },
    ],
    getTitle: "받기",
    play: "Google Play",
    privacy: "개인정보처리방침",
    terms: "이용약관",
    back: "Jacobs Factory",
    contact: "문의",
  },
  en: {
    tagline: "A treadmill game you play by matching cadence.",
    intro: [
      "Play Cadence is a treadmill game. You run to a target cadence (SPM). No watch or footpod — the phone mic listens for footstrikes.",
      "Pick a course and tap Start. After warmup, a YouTube mix for your goal cadence plays in the app. Use headphones so the mic hears your steps, not the speakers.",
      "Notes drop on a rhythm lane. Perfect, Great, or Miss is how close you are to the target SPM. Combos stack; the score goes to a million. Finish an official track and, if you sign in with Google, the score can go on the world board.",
      "If you would rather watch Netflix or YouTube, an overlay keeps cadence in view without covering the video. Cadence is visual — numbers and color — so it works even when you cannot rely on sound. Not a medical device. For fitness only.",
    ],
    featuresTitle: "Features",
    features: [
      "SPM from the phone mic — no watch or footpod",
      "YouTube mixes picked for your goal cadence",
      "DDR-style rhythm lane and score",
      "Cadence overlay over Netflix or YouTube",
      "Course history and world ranking",
      "Optional remove-ads purchase",
    ],
    screenshotsTitle: "Screenshots",
    screenshots: [
      { src: "/apps/play-cadence/home.png", alt: "Home screen with recent runs" },
      { src: "/apps/play-cadence/tracks.png", alt: "Track list" },
      { src: "/apps/play-cadence/play.png", alt: "Rhythm lane during a run" },
      { src: "/apps/play-cadence/history.png", alt: "History and scores" },
    ],
    getTitle: "Get the app",
    play: "Google Play",
    privacy: "Privacy",
    terms: "Terms",
    back: "Jacobs Factory",
    contact: "Contact",
  },
} as const;
