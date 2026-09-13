import type { Metadata } from "next";
import { LegalPage } from "../../legal-page";
import { playCadencePrivacy } from "../../../lib/play-cadence-legal";

export const metadata: Metadata = {
  title: "Privacy Policy · Play Cadence",
  description:
    "How Play Cadence measures treadmill cadence on-device, shows ads, and stores optional world-board scores.",
};

export default function PlayCadencePrivacyPage() {
  return (
    <LegalPage
      en={playCadencePrivacy.en}
      ko={playCadencePrivacy.ko}
      homeHref="/"
      homeLabel="Jacobs Factory"
      privacyHref="/play-cadence/privacy"
      termsHref="/terms"
    />
  );
}
