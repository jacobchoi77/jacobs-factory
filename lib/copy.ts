export type Locale = "ko" | "en";

export const copy = {
  ko: {
    tagline: "바이브 코딩으로 1인 개발 중입니다.",
    status: {
      testing: "공개 테스트",
      released: "정식 출시",
    },
    contact: "문의",
    apps: {
      "Treadmill Cadence": "폰 마이크로 러닝머신 케이던스를 잽니다.",
      SayNote: "말하기와 메모를 한곳에서 적습니다.",
      FreeTimer: "광고 없는 집중 타이머입니다.",
    },
  },
  en: {
    tagline: "A one-person studio, building with vibe coding.",
    status: {
      testing: "Public testing",
      released: "Released",
    },
    contact: "Contact",
    apps: {
      "Treadmill Cadence":
        "Measure treadmill cadence with your phone mic.",
      SayNote: "Speak and write notes in one place.",
      FreeTimer: "A focus timer with no ads.",
    },
  },
} as const;
