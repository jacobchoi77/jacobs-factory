import type { Metadata } from "next";
import { LegalPage } from "../legal-page";
import { privacySections } from "../../lib/legal";

export const metadata: Metadata = {
  title: "Privacy Policy · Jacobs Factory",
  description:
    "How Jacobs Factory apps, including FreeTimer, store data and use optional Google sync.",
};

export default function PrivacyPage() {
  return <LegalPage en={privacySections.en} ko={privacySections.ko} />;
}
