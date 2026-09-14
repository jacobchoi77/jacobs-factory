import type { Metadata } from "next";
import { LegalPage } from "../../legal-page";
import {
  playCadenceLegalMeta,
  playCadenceTerms,
} from "../../../lib/play-cadence-legal";

export const metadata: Metadata = {
  title: "Terms of Service · Play Cadence",
  description: "Terms for using Play Cadence.",
};

export default function PlayCadenceTermsPage() {
  return (
    <LegalPage
      en={playCadenceTerms.en}
      ko={playCadenceTerms.ko}
      updated={playCadenceLegalMeta.updated}
      homeHref="/play-cadence"
      homeLabel="Play Cadence"
      privacyHref="/play-cadence/privacy"
      termsHref="/play-cadence/terms"
    />
  );
}
