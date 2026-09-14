import type { Metadata } from "next";
import { LegalPage } from "../../legal-page";
import { sayNoteLegalMeta, sayNotePrivacy } from "../../../lib/saynote-legal";

export const metadata: Metadata = {
  title: "Privacy Policy · SayNote",
  description:
    "How SayNote keeps notes on this phone and uses optional speech, photos, reminders, and tips.",
};

export default function SayNotePrivacyPage() {
  return (
    <LegalPage
      en={sayNotePrivacy.en}
      ko={sayNotePrivacy.ko}
      updated={sayNoteLegalMeta.updated}
      homeHref="/saynote"
      homeLabel="SayNote"
      privacyHref="/saynote/privacy"
      termsHref="/saynote/terms"
    />
  );
}
