import type { Locale } from "./locale";

export type { Locale };

type HomeCopy = {
  tagline: string;
  status: {
    developing: string;
    testing: string;
    released: string;
  };
  about: string;
  contact: string;
  privacy: string;
  terms: string;
  apps: {
    "Play Cadence": string;
    SayNote: string;
    FreeTimer: string;
  };
  koreaApp: {
    name: string;
    blurb: string;
  };
};

export const copy: Record<Locale, HomeCopy> = {
  ko: {
    tagline: "바이브 코딩으로 1인 개발 중입니다.",
    status: {
      developing: "개발중",
      testing: "공개 테스트",
      released: "정식 출시",
    },
    about: "소개",
    contact: "문의",
    privacy: "개인정보처리방침",
    terms: "이용약관",
    apps: {
      "Play Cadence": "케이던스를 맞추는 러닝머신 게임입니다.",
      SayNote: "말하기와 메모를 한곳에서 적습니다.",
      FreeTimer:
        "광고 없는 집중 타이머입니다. Google 로그인은 선택이며, 켜면 이 앱 전용 Drive 폴더에만 동기화됩니다.",
    },
    koreaApp: {
      name: "내 건강 일기",
      blurb:
        "병원 가기 전, 증상을 날짜별로 남기는 개인 건강 일기입니다. 기록은 휴대폰에 둡니다.",
    },
  },
  en: {
    tagline: "A one-person studio, building with vibe coding.",
    status: {
      developing: "In development",
      testing: "Public testing",
      released: "Released",
    },
    about: "About",
    contact: "Contact",
    privacy: "Privacy",
    terms: "Terms",
    apps: {
      "Play Cadence": "A treadmill game you play by matching cadence.",
      SayNote: "Speak and write notes in one place.",
      FreeTimer:
        "A focus timer with no ads. Google sign-in is optional and syncs only to this app’s Drive folder.",
    },
    koreaApp: {
      name: "내 건강 일기",
      blurb:
        "병원 가기 전, 증상을 날짜별로 남기는 개인 건강 일기입니다. 기록은 휴대폰에 둡니다.",
    },
  },
  ja: {
    tagline: "バイブコーディングで一人開発しています。",
    status: {
      developing: "開発中",
      testing: "公開テスト",
      released: "正式リリース",
    },
    about: "紹介",
    contact: "お問い合わせ",
    privacy: "プライバシー",
    terms: "利用規約",
    apps: {
      "Play Cadence": "ケイデンスを合わせて遊ぶルームランナーゲームです。",
      SayNote: "話すだけでメモになるノートです。",
      FreeTimer:
        "広告なしの集中タイマーです。Googleログインは任意で、オンにするとこのアプリ専用のDriveフォルダにだけ同期します。",
    },
    koreaApp: {
      name: "내 건강 일기",
      blurb:
        "병원 가기 전, 증상을 날짜별로 남기는 개인 건강 일기입니다. 기록은 휴대폰에 둡니다.",
    },
  },
  "zh-CN": {
    tagline: "一个人用 vibe coding 做应用。",
    status: {
      developing: "开发中",
      testing: "公开测试",
      released: "正式上线",
    },
    about: "介绍",
    contact: "联系",
    privacy: "隐私政策",
    terms: "使用条款",
    apps: {
      "Play Cadence": "靠步频来玩的跑步机游戏。",
      SayNote: "开口即成笔记。",
      FreeTimer:
        "无广告的专注计时器。Google 登录可选，开启后只同步到本应用的 Drive 文件夹。",
    },
    koreaApp: {
      name: "내 건강 일기",
      blurb:
        "병원 가기 전, 증상을 날짜별로 남기는 개인 건강 일기입니다. 기록은 휴대폰에 둡니다.",
    },
  },
  "zh-TW": {
    tagline: "一個人用 vibe coding 做應用。",
    status: {
      developing: "開發中",
      testing: "公開測試",
      released: "正式上線",
    },
    about: "介紹",
    contact: "聯絡",
    privacy: "隱私權政策",
    terms: "使用條款",
    apps: {
      "Play Cadence": "靠步頻來玩的跑步機遊戲。",
      SayNote: "開口即成筆記。",
      FreeTimer:
        "無廣告的專注計時器。Google 登入可選，開啟後只同步到本應用的 Drive 資料夾。",
    },
    koreaApp: {
      name: "내 건강 일기",
      blurb:
        "병원 가기 전, 증상을 날짜별로 남기는 개인 건강 일기입니다. 기록은 휴대폰에 둡니다.",
    },
  },
  es: {
    tagline: "Un estudio de una persona, construyendo con vibe coding.",
    status: {
      developing: "En desarrollo",
      testing: "Prueba pública",
      released: "Lanzado",
    },
    about: "Acerca de",
    contact: "Contacto",
    privacy: "Privacidad",
    terms: "Términos",
    apps: {
      "Play Cadence": "Un juego de cinta en el que sigues la cadencia.",
      SayNote: "Habla y escribe notas en un solo lugar.",
      FreeTimer:
        "Un temporizador de enfoque sin anuncios. El inicio de sesión de Google es opcional y solo sincroniza con la carpeta de Drive de esta app.",
    },
    koreaApp: {
      name: "내 건강 일기",
      blurb:
        "병원 가기 전, 증상을 날짜별로 남기는 개인 건강 일기입니다. 기록은 휴대폰에 둡니다.",
    },
  },
  fr: {
    tagline: "Un studio solo, qui construit en vibe coding.",
    status: {
      developing: "En développement",
      testing: "Test public",
      released: "Publié",
    },
    about: "À propos",
    contact: "Contact",
    privacy: "Confidentialité",
    terms: "Conditions",
    apps: {
      "Play Cadence": "Un jeu de tapis où l’on suit la cadence.",
      SayNote: "Parlez et notez au même endroit.",
      FreeTimer:
        "Un minuteur de focus sans pub. La connexion Google est optionnelle et synchronise uniquement le dossier Drive de cette appli.",
    },
    koreaApp: {
      name: "내 건강 일기",
      blurb:
        "병원 가기 전, 증상을 날짜별로 남기는 개인 건강 일기입니다. 기록은 휴대폰에 둡니다.",
    },
  },
  de: {
    tagline: "Ein Ein-Personen-Studio, gebaut mit Vibe Coding.",
    status: {
      developing: "In Entwicklung",
      testing: "Öffentlicher Test",
      released: "Veröffentlicht",
    },
    about: "Über",
    contact: "Kontakt",
    privacy: "Datenschutz",
    terms: "Nutzungsbedingungen",
    apps: {
      "Play Cadence": "Ein Laufbandspiel, bei dem du die Kadenz triffst.",
      SayNote: "Sprechen und Notizen an einem Ort.",
      FreeTimer:
        "Ein Fokus-Timer ohne Werbung. Google-Anmeldung ist optional und synchronisiert nur den Drive-Ordner dieser App.",
    },
    koreaApp: {
      name: "내 건강 일기",
      blurb:
        "병원 가기 전, 증상을 날짜별로 남기는 개인 건강 일기입니다. 기록은 휴대폰에 둡니다.",
    },
  },
  "pt-BR": {
    tagline: "Um estúdio de uma pessoa, construindo com vibe coding.",
    status: {
      developing: "Em desenvolvimento",
      testing: "Teste público",
      released: "Lançado",
    },
    about: "Sobre",
    contact: "Contato",
    privacy: "Privacidade",
    terms: "Termos",
    apps: {
      "Play Cadence": "Um jogo de esteira em que você segue a cadência.",
      SayNote: "Fale e anote no mesmo lugar.",
      FreeTimer:
        "Um timer de foco sem anúncios. O login do Google é opcional e sincroniza só a pasta do Drive deste app.",
    },
    koreaApp: {
      name: "내 건강 일기",
      blurb:
        "병원 가기 전, 증상을 날짜별로 남기는 개인 건강 일기입니다. 기록은 휴대폰에 둡니다.",
    },
  },
};
