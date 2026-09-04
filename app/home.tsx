"use client";

import { useEffect, useState } from "react";
import { copy, type Locale } from "../lib/copy";

const apps = [
  {
    name: "Play Cadence",
    status: "developing",
    play: "https://play.google.com/store/apps/details?id=com.jacobsfactory.treadmillcadence",
    editor: "/treadmill-cadence/track-editor/",
    icon: "/apps/play-cadence.png",
  },
  {
    name: "SayNote",
    status: "released",
    play: "https://play.google.com/store/apps/details?id=com.jacobsfactory.saynote.android",
    icon: "/apps/saynote.png",
  },
  {
    name: "FreeTimer",
    status: "released",
    play: "https://play.google.com/store/apps/details?id=com.jacobsfactory.freetimer.android",
    windows: "https://apps.microsoft.com/detail/9NCR1DNFJCP6",
    icon: "/apps/freetimer.png",
  },
] as const;

function readLocale(): Locale {
  if (typeof window === "undefined") {
    return "en";
  }
  const saved = window.localStorage.getItem("locale");
  if (saved === "en" || saved === "ko") {
    return saved;
  }
  return navigator.language.toLowerCase().startsWith("ko") ? "ko" : "en";
}

export function Home() {
  const [locale, setLocale] = useState<Locale>("en");
  const t = copy[locale];

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

  return (
    <div className="flex flex-1 flex-col">
      <div className="mx-auto flex w-full max-w-xl flex-1 flex-col px-6 py-16 sm:py-24">
        <header>
          <div className="flex items-start justify-between gap-4">
            <p className="font-display text-3xl tracking-tight text-foreground italic sm:text-4xl">
              Jacobs Factory
            </p>
            <p className="shrink-0 pt-1 text-sm text-muted">
              <button
                type="button"
                className={locale === "en" ? "text-foreground" : "hover:text-foreground"}
                onClick={() => switchLocale("en")}
              >
                English
              </button>
              <span className="mx-1.5 text-line">/</span>
              <button
                type="button"
                className={locale === "ko" ? "text-foreground" : "hover:text-foreground"}
                onClick={() => switchLocale("ko")}
              >
                한국어
              </button>
            </p>
          </div>
          <p className="mt-4 text-[17px] leading-7 text-muted">{t.tagline}</p>
        </header>

        <main className="mt-12 flex flex-col gap-4">
          {apps.map((app) => (
            <article
              key={app.name}
              className="flex gap-4 rounded-2xl border border-line bg-card px-5 py-5"
            >
              <img
                src={app.icon}
                alt=""
                width={64}
                height={64}
                className="size-16 shrink-0 rounded-2xl"
              />
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <h2 className="text-lg font-medium tracking-tight">
                    {app.name === "FreeTimer" ? (
                      <a
                        href="/freetimer"
                        className="hover:text-accent"
                      >
                        {app.name}
                      </a>
                    ) : (
                      app.name
                    )}
                  </h2>
                  <span className="rounded-full border border-line px-2 py-0.5 text-xs text-muted">
                    {t.status[app.status]}
                  </span>
                </div>
                <p className="mt-2 text-[15px] leading-6 text-muted">
                  {t.apps[app.name]}
                </p>
                <p className="mt-3 text-sm">
                  {app.name === "FreeTimer" ? (
                    <>
                      <a
                        href="/freetimer"
                        className="text-accent underline-offset-4 hover:underline"
                      >
                        {locale === "ko" ? "소개" : "About"}
                      </a>
                      <span className="mx-1.5 text-line">·</span>
                    </>
                  ) : null}
                  <a
                    href={`${app.play}&hl=${locale}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent underline-offset-4 hover:underline"
                  >
                    Google Play
                  </a>
                  {"editor" in app ? (
                    <>
                      <span className="mx-1.5 text-line">·</span>
                      <a
                        href={app.editor}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent underline-offset-4 hover:underline"
                      >
                        {t.trackEditor}
                      </a>
                    </>
                  ) : null}
                  {"windows" in app ? (
                    <>
                      <span className="mx-1.5 text-line">·</span>
                      <a
                        href={`${app.windows}?hl=${locale === "ko" ? "ko-kr" : "en-us"}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent underline-offset-4 hover:underline"
                      >
                        Microsoft Store
                      </a>
                    </>
                  ) : null}
                </p>
              </div>
            </article>
          ))}
        </main>

        <footer className="mt-auto pt-16 text-sm text-muted">
          <p>
            {t.contact}{" "}
            <a
              href="mailto:contact@jacobs-factory.com"
              className="text-foreground underline-offset-4 hover:underline"
            >
              contact@jacobs-factory.com
            </a>
          </p>
          <p className="mt-3">
            <a
              href="/privacy"
              className="text-accent underline-offset-4 hover:underline"
            >
              {t.privacy}
            </a>
            <span className="mx-1.5 text-line">·</span>
            <a
              href="/terms"
              className="text-accent underline-offset-4 hover:underline"
            >
              {t.terms}
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}
