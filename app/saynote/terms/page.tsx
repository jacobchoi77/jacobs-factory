import type { Metadata } from "next";
import { LegalPage } from "../../legal-page";
import { sayNoteLegalMeta, sayNoteTerms } from "../../../lib/saynote-legal";

export const metadata: Metadata = {
  title: "Terms of Service · SayNote",
  description: "Terms for using SayNote.",
};

export default function SayNoteTermsPage() {
  return (
    <LegalPage
      en={sayNoteTerms.en}
      ko={sayNoteTerms.ko}
      updated={sayNoteLegalMeta.updated}
      homeHref="/saynote"
      homeLabel="SayNote"
      privacyHref="/saynote/privacy"
      termsHref="/saynote/terms"
    />
  );
}
