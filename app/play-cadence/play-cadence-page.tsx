"use client";

import Link from "next/link";
import { playHl } from "../../lib/locale";
import { playCadenceCopy, playCadenceStores } from "../../lib/play-cadence";
import { useLocale } from "../../lib/use-locale";
import { LocaleSwitch } from "../locale-switch";

export function PlayCadencePage() {
  const { locale, switchLocale } = useLocale();
  const t = playCadenceCopy[locale];
  const playHref = `${playCadenceStores.play}&hl=${playHl(locale)}`;

  return (
    <div className="mx-auto flex w-full max-w-xl flex-1 flex-col px-6 py-16 sm:py-24">
      <header>
        <div className="flex items-start justify-between gap-4">
          <p className="font-display text-2xl tracking-tight italic">
            <Link href="/" className="text-foreground hover:text-accent">
              {t.back}
            </Link>
          </p>
          <LocaleSwitch locale={locale} onChange={switchLocale} />
        </div>
      </header>

      <main className="mt-10">
        <div className="flex items-center gap-4">
          <img
            src="/apps/play-cadence.png"
            alt=""
            width={72}
            height={72}
            className="size-[72px] shrink-0 rounded-[22px]"
          />
          <div>
            <h1 className="font-display text-3xl tracking-tight italic sm:text-4xl">
              Play Cadence
            </h1>
            <p className="mt-1 text-[17px] text-muted">{t.tagline}</p>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4">
          {t.intro.map((paragraph) => (
            <p key={paragraph} className="text-[15px] leading-7 text-muted">
              {paragraph}
            </p>
          ))}
        </div>

        <section className="mt-10">
          <h2 className="text-sm font-medium tracking-tight">{t.getTitle}</h2>
          <p className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm">
            <a
              href={playHref}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent underline-offset-4 hover:underline"
            >
              {t.play}
            </a>
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-sm font-medium tracking-tight">{t.featuresTitle}</h2>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 text-[15px] leading-7 text-muted">
            {t.features.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-sm font-medium tracking-tight">
            {t.screenshotsTitle}
          </h2>
          <div className="-mx-6 mt-4 flex gap-3 overflow-x-auto px-6 pb-2">
            {t.screenshots.map((shot) => (
              <img
                key={shot.src}
                src={shot.src}
                alt={shot.alt}
                width={180}
                height={390}
                className="h-[390px] w-[180px] shrink-0 rounded-2xl border border-line bg-card object-cover"
              />
            ))}
          </div>
        </section>
      </main>

      <footer className="mt-16 text-sm text-muted">
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
            href="/play-cadence/privacy"
            className="text-accent underline-offset-4 hover:underline"
          >
            {t.privacy}
          </Link>
          <span className="mx-1.5 text-line">·</span>
          <Link
            href="/play-cadence/terms"
            className="text-accent underline-offset-4 hover:underline"
          >
            {t.terms}
          </Link>
        </p>
      </footer>
    </div>
  );
}
