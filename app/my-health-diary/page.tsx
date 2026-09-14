import type { Metadata } from "next";
import { MyHealthDiaryPage } from "./my-health-diary-page";

export const metadata: Metadata = {
  title: "내 건강 일기 · Jacobs Factory",
  description:
    "병원 가기 전, 증상을 날짜별로 남기는 개인 건강 일기. 기록은 휴대폰에 둡니다. 계정·광고 없음.",
};

export default function Page() {
  return <MyHealthDiaryPage />;
}
