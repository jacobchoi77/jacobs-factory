export type Locale = "ko" | "en";

export const copy = {
  ko: {
    tagline: "바이브 코딩으로 1인 개발 중입니다.",
    status: {
      developing: "개발중",
      testing: "공개 테스트",
      released: "정식 출시",
    },
    contact: "문의",
    trackEditor: "트랙에디터",
    apps: {
      "Play Cadence": "케이던스를 맞추는 러닝머신 게임입니다.",
      SayNote: "말하기와 메모를 한곳에서 적습니다.",
      FreeTimer: "광고 없는 집중 타이머입니다.",
    },
  },
  en: {
    tagline: "A one-person studio, building with vibe coding.",
    status: {
      developing: "In development",
      testing: "Public testing",
      released: "Released",
    },
    contact: "Contact",
    trackEditor: "트랙에디터",
    apps: {
      "Play Cadence": "A treadmill game you play by matching cadence.",
      SayNote: "Speak and write notes in one place.",
      FreeTimer: "A focus timer with no ads.",
    },
  },
} as const;
