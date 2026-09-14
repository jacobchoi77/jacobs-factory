import { copyFileSync, mkdirSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";

const locales = ["en", "ko", "ja", "zh-CN", "zh-TW", "es", "fr", "de", "pt-BR"];
const playCadenceLocale = {
  en: "en-US",
  ko: "ko-KR",
  ja: "ja-JP",
  "zh-CN": "zh-CN",
  "zh-TW": "zh-TW",
  es: "es-ES",
  fr: "fr-FR",
  de: "de-DE",
  "pt-BR": "pt-BR",
};

function copyShot(src, dest) {
  if (!existsSync(src)) {
    throw new Error(`Missing ${src}`);
  }
  mkdirSync(dirname(dest), { recursive: true });
  copyFileSync(src, dest);
}

const publicApps = join("D:", "jacobs-factory", "public", "apps");

for (const locale of locales) {
  copyShot(
    join("D:", "FreeTimer", "store", "play", "phone", locale, "01-home.png"),
    join(publicApps, "freetimer", locale, "home.png"),
  );
  copyShot(
    join("D:", "FreeTimer", "store", "play", "phone", locale, "04-timer.png"),
    join(publicApps, "freetimer", locale, "timer.png"),
  );
  copyShot(
    join("D:", "FreeTimer", "store", "play", "phone", locale, "06-stats.png"),
    join(publicApps, "freetimer", locale, "stats.png"),
  );
  copyShot(
    join("D:", "FreeTimer", "store", "play", "phone", locale, "07-history.png"),
    join(publicApps, "freetimer", locale, "history.png"),
  );

  copyShot(
    join("D:", "SayNote", "store", "play", locale, "01-home.png"),
    join(publicApps, "saynote", locale, "home.png"),
  );
  copyShot(
    join("D:", "SayNote", "store", "play", locale, "02-list.png"),
    join(publicApps, "saynote", locale, "list.png"),
  );
  copyShot(
    join("D:", "SayNote", "store", "play", locale, "03-calendar.png"),
    join(publicApps, "saynote", locale, "calendar.png"),
  );
  copyShot(
    join("D:", "SayNote", "store", "play", locale, "04-detail.png"),
    join(publicApps, "saynote", locale, "detail.png"),
  );

  const pc = playCadenceLocale[locale];
  copyShot(
    join("D:", "android", "TreadmillCadence", "store", "google", pc, "screenshots", "01_home.png"),
    join(publicApps, "play-cadence", locale, "home.png"),
  );
  copyShot(
    join("D:", "android", "TreadmillCadence", "store", "google", pc, "screenshots", "04_tracks.png"),
    join(publicApps, "play-cadence", locale, "tracks.png"),
  );
  copyShot(
    join("D:", "android", "TreadmillCadence", "store", "google", pc, "screenshots", "06_run_hud.png"),
    join(publicApps, "play-cadence", locale, "play.png"),
  );
  copyShot(
    join("D:", "android", "TreadmillCadence", "store", "google", pc, "screenshots", "02_history.png"),
    join(publicApps, "play-cadence", locale, "history.png"),
  );
}

console.log("copied locale screenshots for FreeTimer, SayNote, Play Cadence");
