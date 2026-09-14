"use client";

import Link from "next/link";
import { copy } from "../lib/copy";
import { playHl, screenshotSrc, windowsHl, type Locale } from "../lib/locale";
import { useLocale } from "../lib/use-locale";
import { LocaleSwitch } from "./locale-switch";

const koreaApp = {
  name: "My Health Diary",
  status: "testing",
  about: "/my-health-diary",
  play: "https://play.google.com/store/apps/details?id=com.jacobsfactory.myhealthdiary.android",
  privacy: "/my-health-diary/privacy",
  screenshot: "/apps/my-health-diary/today.png",
} as const;

const apps = [
  {
    name: "Play Cadence",
    status: "released",
    about: "/play-cadence",
    play: "https://play.google.com/store/apps/details?id=com.jacobsfactory.treadmillcadence",
    privacy: "/play-cadence/privacy",
    screenshot: "/apps/play-cadence/play-hero.png",
  },
  {
    name: "SayNote",
    status: "released",
    about: "/saynote",
    play: "https://play.google.com/store/apps/details?id=com.jacobsfactory.saynote.android",
    privacy: "/saynote/privacy",
    shot: "saynote",
  },
  {
    name: "FreeTimer",
    status: "released",
    about: "/freetimer",
    play: "https://play.google.com/store/apps/details?id=com.jacobsfactory.freetimer.android",
    windows: "https://apps.microsoft.com/detail/9NCR1DNFJCP6",
    shot: "freetimer",
  },
] as const;

type HomeApp = (typeof apps)[number] | typeof koreaApp;

function appScreenshot(app: HomeApp, locale: Locale): string {
  if ("screenshot" in app) {
    return app.screenshot;
  }
  return screenshotSrc(app.shot, locale, "home.png");
}

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

        <main className="mt-16">
          {visibleApps.map((app) => {
            const title =
              app.name === "My Health Diary" ? t.koreaApp.name : app.name;
            const copyForApp =
              app.name === "My Health Diary"
                ? t.koreaApp
                : t.apps[app.name];
            const shot = appScreenshot(app, locale);
            const links: { href: string; label: string; external?: boolean }[] =
              [
                { href: app.about, label: t.about },
                ...("play" in app
                  ? [
                      {
                        href: `${app.play}&hl=${playHl(locale)}`,
                        label: "Google Play",
                        external: true,
                      },
                    ]
                  : []),
                ...("privacy" in app
                  ? [{ href: app.privacy, label: t.privacy }]
                  : []),
                ...("windows" in app
                  ? [
                      {
                        href: `${app.windows}?hl=${windowsHl(locale)}`,
                        label: "Microsoft Store",
                        external: true,
                      },
                    ]
                  : []),
              ];

            return (
              <article
                key={app.name}
                className="border-t border-line py-14 first:border-t-0 first:pt-0 last:pb-0 sm:py-16 sm:first:pt-0 sm:last:pb-0"
              >
                <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-8">
                  <Link
                    href={app.about}
                    className="mx-auto shrink-0 sm:mx-0"
                  >
                    <img
                      src={shot}
                      alt=""
                      width={180}
                      height={390}
                      className="h-[390px] w-[180px] rounded-2xl border border-line bg-card object-cover"
                    />
                  </Link>
                  <div className="min-w-0">
                    <h2 className="font-display text-2xl tracking-tight italic sm:text-3xl">
                      <Link href={app.about} className="hover:text-accent">
                        {copyForApp.headline}
                      </Link>
                    </h2>
                    <p className="mt-3 text-[15px] leading-7 text-muted">
                      {copyForApp.blurb}
                    </p>
                    <p className="mt-4 flex flex-wrap items-center gap-2 text-sm">
                      <span className="font-medium tracking-tight">{title}</span>
                      <span className="rounded-full border border-line px-2 py-0.5 text-xs text-muted">
                        {t.status[app.status]}
                      </span>
                    </p>
                    <p className="mt-3 text-sm">
                      {links.map((link, index) => (
                        <span key={link.href}>
                          {index > 0 ? (
                            <span className="mx-1.5 text-line">·</span>
                          ) : null}
                          {link.external ? (
                            <a
                              href={link.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-accent underline-offset-4 hover:underline"
                            >
                              {link.label}
                            </a>
                          ) : (
                            <Link
                              href={link.href}
                              className="text-accent underline-offset-4 hover:underline"
                            >
                              {link.label}
                            </Link>
                          )}
                        </span>
                      ))}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </main>

        <footer className="mt-auto border-t border-line pt-10 text-sm text-muted">
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
            <Link
              href="/privacy"
              className="text-accent underline-offset-4 hover:underline"
            >
              {t.privacy}
            </Link>
            <span className="mx-1.5 text-line">·</span>
            <Link
              href="/terms"
              className="text-accent underline-offset-4 hover:underline"
            >
              {t.terms}
            </Link>
          </p>
        </footer>
      </div>
    </div>
  );
}
