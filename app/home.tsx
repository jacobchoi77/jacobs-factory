"use client";

import { copy } from "../lib/copy";
import { playHl, windowsHl } from "../lib/locale";
import { useLocale } from "../lib/use-locale";
import { LocaleSwitch } from "./locale-switch";

const koreaApp = {
  name: "My Health Diary",
  status: "testing",
  about: "/my-health-diary",
  play: "https://play.google.com/store/apps/details?id=com.jacobsfactory.myhealthdiary.android",
  privacy: "/my-health-diary/privacy",
  icon: "/apps/my-health-diary.png",
} as const;

const apps = [
  {
    name: "Play Cadence",
    status: "released",
    about: "/play-cadence",
    play: "https://play.google.com/store/apps/details?id=com.jacobsfactory.treadmillcadence",
    privacy: "/play-cadence/privacy",
    icon: "/apps/play-cadence.png",
  },
  {
    name: "SayNote",
    status: "released",
    about: "/saynote",
    play: "https://play.google.com/store/apps/details?id=com.jacobsfactory.saynote.android",
    privacy: "/saynote/privacy",
    icon: "/apps/saynote.png",
  },
  {
    name: "FreeTimer",
    status: "released",
    about: "/freetimer",
    play: "https://play.google.com/store/apps/details?id=com.jacobsfactory.freetimer.android",
    windows: "https://apps.microsoft.com/detail/9NCR1DNFJCP6",
    icon: "/apps/freetimer.png",
  },
] as const;

export function Home() {
  const { locale, switchLocale } = useLocale();
  const t = copy[locale];
  const visibleApps = locale === "ko" ? [koreaApp, ...apps] : apps;

  return (
    <div className="flex flex-1 flex-col">
      <div className="mx-auto flex w-full max-w-xl flex-1 flex-col px-6 py-16 sm:py-24">
        <header>
          <div className="flex items-start justify-between gap-4">
            <p className="font-display text-3xl tracking-tight text-foreground italic sm:text-4xl">
              Jacobs Factory
            </p>
            <LocaleSwitch locale={locale} onChange={switchLocale} />
          </div>
          <p className="mt-4 text-[17px] leading-7 text-muted">{t.tagline}</p>
        </header>

        <main className="mt-12 flex flex-col gap-4">
          {visibleApps.map((app) => {
            const title =
              app.name === "My Health Diary" ? t.koreaApp.name : app.name;
            const blurb =
              app.name === "My Health Diary"
                ? t.koreaApp.blurb
                : t.apps[app.name];

            return (
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
                      <a href={app.about} className="hover:text-accent">
                        {title}
                      </a>
                    </h2>
                    <span className="rounded-full border border-line px-2 py-0.5 text-xs text-muted">
                      {t.status[app.status]}
                    </span>
                  </div>
                  <p className="mt-2 text-[15px] leading-6 text-muted">{blurb}</p>
                  <p className="mt-3 text-sm">
                    <a
                      href={app.about}
                      className="text-accent underline-offset-4 hover:underline"
                    >
                      {t.about}
                    </a>
                    <span className="mx-1.5 text-line">·</span>
                    {"play" in app ? (
                      <a
                        href={`${app.play}&hl=${playHl(locale)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent underline-offset-4 hover:underline"
                      >
                        Google Play
                      </a>
                    ) : null}
                    {"privacy" in app ? (
                      <>
                        {"play" in app ? (
                          <span className="mx-1.5 text-line">·</span>
                        ) : null}
                        <a
                          href={app.privacy}
                          className="text-accent underline-offset-4 hover:underline"
                        >
                          {t.privacy}
                        </a>
                      </>
                    ) : null}
                    {"windows" in app ? (
                      <>
                        <span className="mx-1.5 text-line">·</span>
                        <a
                          href={`${app.windows}?hl=${windowsHl(locale)}`}
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
            );
          })}
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
