import type { Metadata } from "next";
import { LegalPage } from "../../legal-page";
import { myHealthDiaryPrivacy } from "../../../lib/my-health-diary-legal";

export const metadata: Metadata = {
  title: "Privacy Policy · My Health Diary",
  description:
    "How 내 건강 일기 stores diaries on the phone and when speech or AI organize may leave the device.",
};

export default function MyHealthDiaryPrivacyPage() {
  return (
    <LegalPage
      en={myHealthDiaryPrivacy.en}
      ko={myHealthDiaryPrivacy.ko}
      updated="2026-09-14"
      homeHref="/my-health-diary"
      homeLabel="내 건강 일기"
      privacyHref="/my-health-diary/privacy"
      termsHref="/my-health-diary/terms"
    />
  );
}
