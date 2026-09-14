"use client";

import { useEffect, useRef, useState } from "react";
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
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) {
      return;
    }

    function onPointerDown(event: PointerEvent) {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div ref={rootRef} className="relative shrink-0 pt-1 text-sm">
      <button
        type="button"
        className="inline-flex items-center gap-1 text-muted hover:text-foreground"
        aria-expanded={open}
        aria-haspopup="listbox"
        onClick={() => setOpen((value) => !value)}
      >
        {localeLabels[locale]}
        <span aria-hidden className="text-line">
          {open ? "▴" : "▾"}
        </span>
      </button>
      {open ? (
        <ul
          role="listbox"
          className="absolute right-0 z-10 mt-2 min-w-[9rem] rounded-xl border border-line bg-card py-1 shadow-[0_8px_24px_rgba(28,25,21,0.08)]"
        >
          {locales.map((code) => (
            <li key={code}>
              <button
                type="button"
                role="option"
                aria-selected={locale === code}
                className={
                  locale === code
                    ? "block w-full px-3 py-1.5 text-left text-foreground"
                    : "block w-full px-3 py-1.5 text-left text-muted hover:bg-background hover:text-foreground"
                }
                onClick={() => {
                  onChange(code);
                  setOpen(false);
                }}
              >
                {localeLabels[code]}
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
