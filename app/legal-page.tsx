import Link from "next/link";
import { legalMeta } from "../lib/legal";

type Block = { heading: string; body: string };
type Section = { title: string; intro: string; blocks: readonly Block[] };

export function LegalPage({
  en,
  ko,
  homeHref = "/",
  homeLabel = "Home",
  privacyHref = "/privacy",
  termsHref = "/terms",
}: {
  en: Section;
  ko: Section;
  homeHref?: string;
  homeLabel?: string;
  privacyHref?: string;
  termsHref?: string;
}) {
  return (
    <div className="mx-auto flex w-full max-w-xl flex-1 flex-col px-6 py-16 sm:py-24">
      <p className="font-display text-2xl tracking-tight italic">
        <Link href="/" className="text-foreground hover:text-accent">
          Jacobs Factory
        </Link>
      </p>
      <p className="mt-6 text-sm text-muted">
        Last updated: {legalMeta.updated}
        <br />
        Operator: {legalMeta.operator}
        <br />
        Contact:{" "}
        <a
          href={legalMeta.contactHref}
          className="text-foreground underline-offset-4 hover:underline"
        >
          {legalMeta.contact}
        </a>
      </p>

      <LangBlock locale="English" section={en} />
      <LangBlock locale="한국어" section={ko} />

      <p className="mt-12 text-sm text-muted">
        <Link
          href={homeHref}
          className="text-accent underline-offset-4 hover:underline"
        >
          {homeLabel}
        </Link>
        <span className="mx-1.5 text-line">·</span>
        <Link
          href={privacyHref}
          className="text-accent underline-offset-4 hover:underline"
        >
          Privacy
        </Link>
        <span className="mx-1.5 text-line">·</span>
        <Link
          href={termsHref}
          className="text-accent underline-offset-4 hover:underline"
        >
          Terms
        </Link>
      </p>
    </div>
  );
}

function LangBlock({ locale, section }: { locale: string; section: Section }) {
  return (
    <section className="mt-10">
      <h1 className="text-xl font-medium tracking-tight">{section.title}</h1>
      <p className="mt-1 text-xs uppercase tracking-wide text-muted">{locale}</p>
      <p className="mt-4 text-[15px] leading-7 text-muted">{section.intro}</p>
      {section.blocks.map((block) => (
        <div key={block.heading} className="mt-6">
          <h2 className="text-[15px] font-medium">{block.heading}</h2>
          <p className="mt-2 text-[15px] leading-7 text-muted">{block.body}</p>
        </div>
      ))}
    </section>
  );
}
