import { screenshotSrc, type Locale } from "./locale";

export const playCadenceStores = {
  play: "https://play.google.com/store/apps/details?id=com.jacobsfactory.treadmillcadence",
} as const;

type Shot = { src: string; alt: string };

function shots(locale: Locale, alts: Record<string, string>): Shot[] {
  return [
    { src: screenshotSrc("play-cadence", locale, "home.png"), alt: alts.home },
    { src: screenshotSrc("play-cadence", locale, "tracks.png"), alt: alts.tracks },
    { src: screenshotSrc("play-cadence", locale, "play.png"), alt: alts.play },
    { src: screenshotSrc("play-cadence", locale, "history.png"), alt: alts.history },
  ];
}

type PageCopy = {
  tagline: string;
  intro: string[];
  featuresTitle: string;
  features: string[];
  screenshotsTitle: string;
  screenshots: Shot[];
  getTitle: string;
  play: string;
  privacy: string;
  terms: string;
  back: string;
  contact: string;
};

export const playCadenceCopy: Record<Locale, PageCopy> = {
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
    screenshots: shots("ko", {
      home: "홈 화면의 러닝 요약",
      tracks: "트랙 목록",
      play: "실행 중인 리듬 레인",
      history: "기록과 점수",
    }),
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
    screenshots: shots("en", {
      home: "Home screen with recent runs",
      tracks: "Track list",
      play: "Rhythm lane during a run",
      history: "History and scores",
    }),
    getTitle: "Get the app",
    play: "Google Play",
    privacy: "Privacy",
    terms: "Terms",
    back: "Jacobs Factory",
    contact: "Contact",
  },
  ja: {
    tagline: "ケイデンスを合わせて遊ぶルームランナーゲーム。",
    intro: [
      "Play Cadenceは、ルームランナーの上で目標ケイデンス（SPM）に合わせて走るアプリです。時計やフットポッドは不要で、スマホのマイクだけで足音を測ります。",
      "コースを選んでStartを押すだけです。ウォームアップのあと、目標ケイデンスに合わせたYouTubeミックスがアプリ内で流れます。イヤホンならマイクは足音だけを拾います。",
      "リズムレーンにノートが降り、目標SPMにどれだけ近いかでPerfect・Great・Missが出ます。コンボがつながり、スコアは100万点まで。公式トラックを終えると、Googleログインで世界ランキングに載せられます。",
      "NetflixやYouTubeを見ながら走りたいときは、オーバーレイでケイデンスだけ出せます。数字と色で見えるので、音に頼らなくても使えます。医療機器ではなく、フィットネス用です。",
    ],
    featuresTitle: "機能",
    features: [
      "マイクだけでSPM計測（時計・フットポッド不要）",
      "目標ケイデンスに合わせたYouTubeミックス",
      "DDR風リズムレーンとスコア",
      "Netflix・YouTube上のケイデンスオーバーレイ",
      "コース記録と世界ランキング",
      "任意の広告削除",
    ],
    screenshotsTitle: "画面",
    screenshots: shots("ja", {
      home: "ホーム画面のランニング要約",
      tracks: "トラック一覧",
      play: "走行中のリズムレーン",
      history: "記録とスコア",
    }),
    getTitle: "入手",
    play: "Google Play",
    privacy: "プライバシー",
    terms: "利用規約",
    back: "Jacobs Factory",
    contact: "お問い合わせ",
  },
  "zh-CN": {
    tagline: "靠步频来玩的跑步机游戏。",
    intro: [
      "Play Cadence 是在跑步机上按目标步频（SPM）来跑的应用。不用手表或脚踏传感器，只靠手机麦克风听脚步。",
      "选好课程点 Start。热身结束后，按目标步频选的 YouTube 混音会在应用内播放。请用耳机，这样麦克风只听脚步。",
      "节奏轨道落下音符，离目标 SPM 多近决定 Perfect、Great 还是 Miss。连击会叠上去，分数最高 100 万。跑完官方赛道后，可用 Google 登录把分数上到世界榜。",
      "想边看 Netflix 或 YouTube 边跑时，可以用悬浮窗只显示步频。靠数字和颜色，不依赖听力也能用。非医疗器械，仅供健身。",
    ],
    featuresTitle: "功能",
    features: [
      "只用麦克风测 SPM（无需手表或传感器）",
      "按目标步频选的 YouTube 混音",
      "DDR 式节奏轨道和分数",
      "Netflix、YouTube 上的步频悬浮窗",
      "课程记录与世界排名",
      "可选去广告",
    ],
    screenshotsTitle: "截图",
    screenshots: shots("zh-CN", {
      home: "首页的跑步摘要",
      tracks: "赛道列表",
      play: "跑步中的节奏轨道",
      history: "记录和分数",
    }),
    getTitle: "获取",
    play: "Google Play",
    privacy: "隐私政策",
    terms: "使用条款",
    back: "Jacobs Factory",
    contact: "联系",
  },
  "zh-TW": {
    tagline: "靠步頻來玩的跑步機遊戲。",
    intro: [
      "Play Cadence 是在跑步機上按目標步頻（SPM）來跑的應用程式。不用手錶或踏頻感測器，只靠手機麥克風聽腳步。",
      "選好課程點 Start。熱身結束後，依目標步頻選的 YouTube 混音會在應用程式內播放。請用耳機，這樣麥克風只聽腳步。",
      "節奏軌道落下音符，離目標 SPM 多近決定 Perfect、Great 還是 Miss。連擊會疊上去，分數最高 100 萬。跑完官方賽道後，可用 Google 登入把分數上到世界榜。",
      "想邊看 Netflix 或 YouTube 邊跑時，可以用懸浮窗只顯示步頻。靠數字和顏色，不依賴聽力也能用。非醫療器材，僅供健身。",
    ],
    featuresTitle: "功能",
    features: [
      "只用麥克風測 SPM（無需手錶或感測器）",
      "依目標步頻選的 YouTube 混音",
      "DDR 式節奏軌道和分數",
      "Netflix、YouTube 上的步頻懸浮窗",
      "課程紀錄與世界排名",
      "可選去廣告",
    ],
    screenshotsTitle: "截圖",
    screenshots: shots("zh-TW", {
      home: "首頁的跑步摘要",
      tracks: "賽道列表",
      play: "跑步中的節奏軌道",
      history: "紀錄和分數",
    }),
    getTitle: "取得",
    play: "Google Play",
    privacy: "隱私權政策",
    terms: "使用條款",
    back: "Jacobs Factory",
    contact: "聯絡",
  },
  es: {
    tagline: "Un juego de cinta en el que sigues la cadencia.",
    intro: [
      "Play Cadence es un juego de cinta. Corres a una cadencia objetivo (SPM). Sin reloj ni sensor: el micrófono del teléfono escucha las pisadas.",
      "Elige un curso y pulsa Start. Tras el calentamiento, un mix de YouTube para tu cadencia suena en la app. Usa auriculares para que el mic oiga tus pasos, no los altavoces.",
      "Las notas bajan por un carril rítmico. Perfect, Great o Miss según lo cerca que estés del SPM objetivo. El combo suma; la puntuación llega a un millón. Termina una pista oficial y, si inicias sesión con Google, la puntuación puede ir al ranking mundial.",
      "Si prefieres ver Netflix o YouTube, un overlay deja la cadencia a la vista sin tapar el vídeo. La cadencia es visual —números y color— así que sirve también sin depender del oído. No es un dispositivo médico. Solo fitness.",
    ],
    featuresTitle: "Funciones",
    features: [
      "SPM con el mic del teléfono — sin reloj ni sensor",
      "Mixes de YouTube para tu cadencia objetivo",
      "Carril rítmico estilo DDR y puntuación",
      "Overlay de cadencia sobre Netflix o YouTube",
      "Historial de cursos y ranking mundial",
      "Compra opcional para quitar anuncios",
    ],
    screenshotsTitle: "Capturas",
    screenshots: shots("es", {
      home: "Inicio con resúmenes de carreras",
      tracks: "Lista de pistas",
      play: "Carril rítmico durante la carrera",
      history: "Historial y puntuaciones",
    }),
    getTitle: "Descargar",
    play: "Google Play",
    privacy: "Privacidad",
    terms: "Términos",
    back: "Jacobs Factory",
    contact: "Contacto",
  },
  fr: {
    tagline: "Un jeu de tapis où l’on suit la cadence.",
    intro: [
      "Play Cadence est un jeu de tapis. Vous courez à une cadence cible (SPM). Pas de montre ni de capteur : le micro du téléphone écoute les appuis.",
      "Choisissez un parcours et appuyez sur Start. Après l’échauffement, un mix YouTube pour votre cadence se lance dans l’appli. Utilisez des écouteurs pour que le micro entende vos pas, pas les haut-parleurs.",
      "Les notes descendent sur une lane. Perfect, Great ou Miss selon l’écart au SPM cible. Le combo grimpe ; le score va jusqu’à un million. Terminez un parcours officiel et, si vous vous connectez avec Google, le score peut aller au classement mondial.",
      "Si vous préférez Netflix ou YouTube, un overlay garde la cadence visible sans cacher la vidéo. La cadence est visuelle — chiffres et couleurs — donc utilisable même sans s’appuyer sur l’ouïe. Pas un dispositif médical. Fitness uniquement.",
    ],
    featuresTitle: "Fonctions",
    features: [
      "SPM avec le micro du téléphone — sans montre ni capteur",
      "Mixes YouTube choisis pour votre cadence cible",
      "Lane rythmique façon DDR et score",
      "Overlay de cadence sur Netflix ou YouTube",
      "Historique des parcours et classement mondial",
      "Achat optionnel pour retirer les pubs",
    ],
    screenshotsTitle: "Captures",
    screenshots: shots("fr", {
      home: "Accueil avec le résumé des courses",
      tracks: "Liste des parcours",
      play: "Lane rythmique pendant la course",
      history: "Historique et scores",
    }),
    getTitle: "Obtenir",
    play: "Google Play",
    privacy: "Confidentialité",
    terms: "Conditions",
    back: "Jacobs Factory",
    contact: "Contact",
  },
  de: {
    tagline: "Ein Laufbandspiel, bei dem du die Kadenz triffst.",
    intro: [
      "Play Cadence ist ein Laufbandspiel. Du läufst auf eine Zielkadenz (SPM). Keine Uhr, kein Footpod — das Handy-Mikro hört die Schritte.",
      "Kurs wählen und Start tippen. Nach dem Warm-up läuft in der App ein YouTube-Mix zur Zielkadenz. Kopfhörer, damit das Mikro deine Schritte hört, nicht die Lautsprecher.",
      "Noten fallen auf einer Rhythm-Lane. Perfect, Great oder Miss — je näher du am Ziel-SPM bist. Combos stapeln sich; die Punktzahl geht bis eine Million. Nach einer offiziellen Strecke kannst du dich mit Google anmelden und den Score auf das Welt-Board setzen.",
      "Lieber Netflix oder YouTube? Ein Overlay hält die Kadenz im Blick, ohne das Video zu verdecken. Kadenz ist visuell — Zahlen und Farbe — also auch ohne Hörsinn nutzbar. Kein Medizinprodukt. Nur Fitness.",
    ],
    featuresTitle: "Funktionen",
    features: [
      "SPM vom Handy-Mikro — keine Uhr, kein Footpod",
      "YouTube-Mixes passend zur Zielkadenz",
      "DDR-artige Rhythm-Lane und Punktzahl",
      "Kadenz-Overlay über Netflix oder YouTube",
      "Kursverlauf und Weltrangliste",
      "Optional Werbung entfernen",
    ],
    screenshotsTitle: "Screenshots",
    screenshots: shots("de", {
      home: "Startbildschirm mit Lauf-Zusammenfassung",
      tracks: "Streckenliste",
      play: "Rhythm-Lane während des Laufs",
      history: "Verlauf und Punktzahlen",
    }),
    getTitle: "Holen",
    play: "Google Play",
    privacy: "Datenschutz",
    terms: "Nutzungsbedingungen",
    back: "Jacobs Factory",
    contact: "Kontakt",
  },
  "pt-BR": {
    tagline: "Um jogo de esteira em que você segue a cadência.",
    intro: [
      "Play Cadence é um jogo de esteira. Você corre numa cadência-alvo (SPM). Sem relógio ou sensor — o microfone do celular ouve as passadas.",
      "Escolha o percurso e toque em Start. Depois do aquecimento, um mix do YouTube para a sua cadência toca no app. Use fones para o microfone ouvir seus passos, não as caixas.",
      "Notas descem numa faixa de ritmo. Perfect, Great ou Miss conforme a distância do SPM-alvo. O combo sobe; a pontuação vai a um milhão. Termine uma pista oficial e, se entrar com o Google, a pontuação pode ir para o ranking mundial.",
      "Se preferir Netflix ou YouTube, um overlay mantém a cadência à vista sem tapar o vídeo. A cadência é visual — números e cor — então dá para usar sem depender da audição. Não é dispositivo médico. Só fitness.",
    ],
    featuresTitle: "Recursos",
    features: [
      "SPM pelo microfone do celular — sem relógio ou sensor",
      "Mixes do YouTube para a cadência-alvo",
      "Faixa de ritmo estilo DDR e pontuação",
      "Overlay de cadência no Netflix ou YouTube",
      "Histórico dos percursos e ranking mundial",
      "Compra opcional para remover anúncios",
    ],
    screenshotsTitle: "Capturas",
    screenshots: shots("pt-BR", {
      home: "Início com o resumo das corridas",
      tracks: "Lista de pistas",
      play: "Faixa de ritmo durante a corrida",
      history: "Histórico e pontuações",
    }),
    getTitle: "Baixar",
    play: "Google Play",
    privacy: "Privacidade",
    terms: "Termos",
    back: "Jacobs Factory",
    contact: "Contato",
  },
};
