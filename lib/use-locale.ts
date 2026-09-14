"use client";

import { useEffect, useState } from "react";
import { readLocale, type Locale } from "./locale";

export function useLocale() {
  const [locale, setLocale] = useState<Locale>("en");

  useEffect(() => {
    const next = readLocale();
    setLocale(next);
    document.documentElement.lang = next;
  }, []);

  function switchLocale(next: Locale) {
    setLocale(next);
    window.localStorage.setItem("locale", next);
    document.documentElement.lang = next;
  }

  return { locale, switchLocale };
}
