"use client";

import { LOCALES, localeLabels, type Locale } from "../lib/locale";

export function LocaleSwitch({
  locale,
  onChange,
  locales = LOCALES,
}: {
  locale: Locale;
  onChange: (next: Locale) => void;
  locales?: readonly Locale[];
}) {
  return (
    <p className="flex max-w-[11.5rem] flex-wrap justify-end gap-x-0 gap-y-1 pt-1 text-sm text-muted sm:max-w-none">
      {locales.map((code, index) => (
        <span key={code} className="inline-flex items-center">
          {index > 0 ? <span className="mx-1.5 text-line">/</span> : null}
          <button
            type="button"
            className={
              locale === code ? "text-foreground" : "hover:text-foreground"
            }
            onClick={() => onChange(code)}
          >
            {localeLabels[code]}
          </button>
        </span>
      ))}
    </p>
  );
}
