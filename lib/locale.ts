export const LOCALES = [
  "en",
  "ko",
  "ja",
  "zh-CN",
  "zh-TW",
  "es",
  "fr",
  "de",
  "pt-BR",
] as const;

export type Locale = (typeof LOCALES)[number];

export const localeLabels: Record<Locale, string> = {
  en: "English",
  ko: "한국어",
  ja: "日本語",
  "zh-CN": "简体中文",
  "zh-TW": "繁體中文",
  es: "Español",
  fr: "Français",
  de: "Deutsch",
  "pt-BR": "Português",
};

const localeSet = new Set<string>(LOCALES);

export function isLocale(value: string | null | undefined): value is Locale {
  return value != null && localeSet.has(value);
}

export function resolveDeviceLocale(tag: string | undefined | null): Locale {
  const raw = (tag ?? "en").replace("_", "-");
  const lower = raw.toLowerCase();

  if (lower.startsWith("ko")) return "ko";
  if (lower.startsWith("ja")) return "ja";
  if (lower === "zh-tw" || lower.startsWith("zh-hant") || lower === "zh-hk") {
    return "zh-TW";
  }
  if (lower.startsWith("zh")) return "zh-CN";
  if (lower.startsWith("es")) return "es";
  if (lower.startsWith("fr")) return "fr";
  if (lower.startsWith("de")) return "de";
  if (lower.startsWith("pt")) return "pt-BR";
  return "en";
}

export function readLocale(): Locale {
  if (typeof window === "undefined") {
    return "en";
  }
  const saved = window.localStorage.getItem("locale");
  if (isLocale(saved)) {
    return saved;
  }
  return resolveDeviceLocale(navigator.language);
}

export function playHl(locale: Locale): string {
  return locale;
}

export function windowsHl(locale: Locale): string {
  switch (locale) {
    case "ko":
      return "ko-kr";
    case "ja":
      return "ja-jp";
    case "zh-CN":
      return "zh-cn";
    case "zh-TW":
      return "zh-tw";
    case "es":
      return "es-es";
    case "fr":
      return "fr-fr";
    case "de":
      return "de-de";
    case "pt-BR":
      return "pt-br";
    default:
      return "en-us";
  }
}

export function screenshotSrc(
  app: "freetimer" | "saynote" | "play-cadence",
  locale: Locale,
  file: string,
): string {
  return `/apps/${app}/${locale}/${file}`;
}
