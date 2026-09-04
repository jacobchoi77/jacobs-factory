import type { Metadata } from "next";
import { LegalPage } from "../../legal-page";
import { freetimerPrivacy } from "../../../lib/freetimer-legal";

export const metadata: Metadata = {
  title: "Privacy Policy · FreeTimer",
  description:
    "How FreeTimer stores data on your device and uses optional Google Drive app-data sync.",
};

export default function FreeTimerPrivacyPage() {
  return (
    <LegalPage
      en={freetimerPrivacy.en}
      ko={freetimerPrivacy.ko}
      homeHref="/freetimer"
      homeLabel="FreeTimer"
      privacyHref="/freetimer/privacy"
      termsHref="/freetimer/terms"
    />
  );
}
