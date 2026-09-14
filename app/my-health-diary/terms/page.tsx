import type { Metadata } from "next";
import { LegalPage } from "../../legal-page";
import { myHealthDiaryTerms } from "../../../lib/my-health-diary-legal";

export const metadata: Metadata = {
  title: "Terms of Service · My Health Diary",
  description: "Terms for the My Health Diary (내 건강 일기) mobile app.",
};

export default function MyHealthDiaryTermsPage() {
  return (
    <LegalPage
      en={myHealthDiaryTerms.en}
      ko={myHealthDiaryTerms.ko}
      updated="2026-09-14"
      homeHref="/my-health-diary"
      homeLabel="내 건강 일기"
      privacyHref="/my-health-diary/privacy"
      termsHref="/my-health-diary/terms"
    />
  );
}
