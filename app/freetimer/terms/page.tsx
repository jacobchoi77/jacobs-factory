import type { Metadata } from "next";
import { LegalPage } from "../../legal-page";
import { freetimerTerms } from "../../../lib/freetimer-legal";

export const metadata: Metadata = {
  title: "Terms of Service · FreeTimer",
  description: "Terms for using FreeTimer.",
};

export default function FreeTimerTermsPage() {
  return (
    <LegalPage
      en={freetimerTerms.en}
      ko={freetimerTerms.ko}
      homeHref="/freetimer"
      homeLabel="FreeTimer"
      privacyHref="/freetimer/privacy"
      termsHref="/freetimer/terms"
    />
  );
}
