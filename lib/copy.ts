import type { Locale } from "./locale";

export type { Locale };

type AppCopy = {
  headline: string;
  blurb: string;
};

type HomeCopy = {
  aboutBody: string;
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
    "Play Cadence": AppCopy;
    SayNote: AppCopy;
    FreeTimer: AppCopy;
  };
  koreaApp: {
    name: string;
    headline: string;
    blurb: string;
  };
};

export const copy: Record<Locale, HomeCopy> = {
  ko: {
    aboutBody:
      "Jacobs Factory는 1인 스튜디오입니다. 직접 쓰고 싶은 작은 앱을 만듭니다.",
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
      "Play Cadence": {
        headline: "러닝머신에서 케이던스를 맞추는 게임.",
        blurb: "시계나 풋팟 없이, 폰 마이크만으로 발소리를 잽니다.",
      },
      SayNote: {
        headline: "말하면 바로 글로 남는 노트.",
        blurb: "말하기와 메모를 한곳에서 적습니다.",
      },
      FreeTimer: {
        headline: "탭 한 번에 집중. 광고 없음.",
        blurb:
          "광고 없는 집중 타이머입니다. Google 로그인은 선택이며, 켜면 이 앱 전용 Drive 폴더에만 동기화됩니다.",
      },
    },
    koreaApp: {
      name: "내 건강 일기",
      headline: "병원 가기 전, 말한 것을 한 장으로.",
      blurb:
        "병원 가기 전, 증상을 날짜별로 남기는 개인 건강 일기입니다. 기록은 휴대폰에 둡니다.",
    },
  },
  en: {
    aboutBody:
      "Jacobs Factory is a one-person studio. I make small apps I want to use.",
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
      "Play Cadence": {
        headline: "A treadmill game you play by matching cadence.",
        blurb: "No watch or footpod — the phone mic listens for footstrikes.",
      },
      SayNote: {
        headline: "Speak and it becomes a note.",
        blurb: "Speak and write notes in one place.",
      },
      FreeTimer: {
        headline: "One-tap focus timer. No ads.",
        blurb:
          "A focus timer with no ads. Google sign-in is optional and syncs only to this app’s Drive folder.",
      },
    },
    koreaApp: {
      name: "내 건강 일기",
      headline: "병원 가기 전, 말한 것을 한 장으로.",
      blurb:
        "병원 가기 전, 증상을 날짜별로 남기는 개인 건강 일기입니다. 기록은 휴대폰에 둡니다.",
    },
  },
  ja: {
    aboutBody:
      "Jacobs Factoryは一人スタジオです。自分が使いたい小さなアプリを作っています。",
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
      "Play Cadence": {
        headline: "ケイデンスを合わせて遊ぶルームランナーゲーム。",
        blurb: "時計もフットポッドもなし。スマホのマイクだけで歩数を測ります。",
      },
      SayNote: {
        headline: "話すだけでメモになる。",
        blurb: "話すだけでメモになるノートです。",
      },
      FreeTimer: {
        headline: "タップ一つで集中。広告なし。",
        blurb:
          "広告なしの集中タイマーです。Googleログインは任意で、オンにするとこのアプリ専用のDriveフォルダにだけ同期します。",
      },
    },
    koreaApp: {
      name: "내 건강 일기",
      headline: "병원 가기 전, 말한 것을 한 장으로.",
      blurb:
        "병원 가기 전, 증상을 날짜별로 남기는 개인 건강 일기입니다. 기록은 휴대폰에 둡니다.",
    },
  },
  "zh-CN": {
    aboutBody: "Jacobs Factory 是一人工作室。我做自己想用的小应用。",
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
      "Play Cadence": {
        headline: "靠步频来玩的跑步机游戏。",
        blurb: "不用手表或足部传感器，手机麦克风听脚步。",
      },
      SayNote: {
        headline: "说话即成笔记。",
        blurb: "开口即成笔记。",
      },
      FreeTimer: {
        headline: "点一下就开始专注。无广告。",
        blurb:
          "无广告的专注计时器。Google 登录可选，开启后只同步到本应用的 Drive 文件夹。",
      },
    },
    koreaApp: {
      name: "내 건강 일기",
      headline: "병원 가기 전, 말한 것을 한 장으로.",
      blurb:
        "병원 가기 전, 증상을 날짜별로 남기는 개인 건강 일기입니다. 기록은 휴대폰에 둡니다.",
    },
  },
  "zh-TW": {
    aboutBody: "Jacobs Factory 是一人工作室。我做自己想用的小應用。",
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
      "Play Cadence": {
        headline: "靠步頻來玩的跑步機遊戲。",
        blurb: "不用手錶或足部感測器，手機麥克風聽腳步。",
      },
      SayNote: {
        headline: "說話即成筆記。",
        blurb: "開口即成筆記。",
      },
      FreeTimer: {
        headline: "點一下就開始專注。無廣告。",
        blurb:
          "無廣告的專注計時器。Google 登入可選，開啟後只同步到本應用的 Drive 資料夾。",
      },
    },
    koreaApp: {
      name: "내 건강 일기",
      headline: "병원 가기 전, 말한 것을 한 장으로.",
      blurb:
        "병원 가기 전, 증상을 날짜별로 남기는 개인 건강 일기입니다. 기록은 휴대폰에 둡니다.",
    },
  },
  es: {
    aboutBody:
      "Jacobs Factory es un estudio de una persona. Hago apps pequeñas que quiero usar.",
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
      "Play Cadence": {
        headline: "Un juego de cinta en el que sigues la cadencia.",
        blurb: "Sin reloj ni footpod: el micrófono del teléfono escucha tus pasos.",
      },
      SayNote: {
        headline: "Habla y se convierte en nota.",
        blurb: "Habla y escribe notas en un solo lugar.",
      },
      FreeTimer: {
        headline: "Enfoque de un toque. Sin anuncios.",
        blurb:
          "Un temporizador de enfoque sin anuncios. El inicio de sesión de Google es opcional y solo sincroniza con la carpeta de Drive de esta app.",
      },
    },
    koreaApp: {
      name: "내 건강 일기",
      headline: "병원 가기 전, 말한 것을 한 장으로.",
      blurb:
        "병원 가기 전, 증상을 날짜별로 남기는 개인 건강 일기입니다. 기록은 휴대폰에 둡니다.",
    },
  },
  fr: {
    aboutBody:
      "Jacobs Factory est un studio solo. Je fais de petites applis que je veux utiliser.",
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
      "Play Cadence": {
        headline: "Un jeu de tapis où l’on suit la cadence.",
        blurb: "Sans montre ni footpod — le micro du téléphone écoute les pas.",
      },
      SayNote: {
        headline: "Parlez, et cela devient une note.",
        blurb: "Parlez et notez au même endroit.",
      },
      FreeTimer: {
        headline: "Minuteur de focus en un toucher. Sans pub.",
        blurb:
          "Un minuteur de focus sans pub. La connexion Google est optionnelle et synchronise uniquement le dossier Drive de cette appli.",
      },
    },
    koreaApp: {
      name: "내 건강 일기",
      headline: "병원 가기 전, 말한 것을 한 장으로.",
      blurb:
        "병원 가기 전, 증상을 날짜별로 남기는 개인 건강 일기입니다. 기록은 휴대폰에 둡니다.",
    },
  },
  de: {
    aboutBody:
      "Jacobs Factory ist ein Ein-Personen-Studio. Ich mache kleine Apps, die ich selbst nutzen will.",
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
      "Play Cadence": {
        headline: "Ein Laufbandspiel, bei dem du die Kadenz triffst.",
        blurb: "Ohne Uhr oder Footpod — das Handy-Mikro hört die Schritte.",
      },
      SayNote: {
        headline: "Sprechen, und es wird eine Notiz.",
        blurb: "Sprechen und Notizen an einem Ort.",
      },
      FreeTimer: {
        headline: "Fokus-Timer mit einem Tipp. Keine Werbung.",
        blurb:
          "Ein Fokus-Timer ohne Werbung. Google-Anmeldung ist optional und synchronisiert nur den Drive-Ordner dieser App.",
      },
    },
    koreaApp: {
      name: "내 건강 일기",
      headline: "병원 가기 전, 말한 것을 한 장으로.",
      blurb:
        "병원 가기 전, 증상을 날짜별로 남기는 개인 건강 일기입니다. 기록은 휴대폰에 둡니다.",
    },
  },
  "pt-BR": {
    aboutBody:
      "Jacobs Factory é um estúdio de uma pessoa. Faço apps pequenos que quero usar.",
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
      "Play Cadence": {
        headline: "Um jogo de esteira em que você segue a cadência.",
        blurb: "Sem relógio ou footpod — o microfone do celular escuta os passos.",
      },
      SayNote: {
        headline: "Fale e vira nota.",
        blurb: "Fale e anote no mesmo lugar.",
      },
      FreeTimer: {
        headline: "Timer de foco num toque. Sem anúncios.",
        blurb:
          "Um timer de foco sem anúncios. O login do Google é opcional e sincroniza só a pasta do Drive deste app.",
      },
    },
    koreaApp: {
      name: "내 건강 일기",
      headline: "병원 가기 전, 말한 것을 한 장으로.",
      blurb:
        "병원 가기 전, 증상을 날짜별로 남기는 개인 건강 일기입니다. 기록은 휴대폰에 둡니다.",
    },
  },
};
