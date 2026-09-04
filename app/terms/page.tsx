import type { Metadata } from "next";
import { LegalPage } from "../legal-page";
import { termsSections } from "../../lib/legal";

export const metadata: Metadata = {
  title: "Terms of Service · Jacobs Factory",
  description: "Terms for using Jacobs Factory apps, including FreeTimer.",
};

export default function TermsPage() {
  return <LegalPage en={termsSections.en} ko={termsSections.ko} />;
}
