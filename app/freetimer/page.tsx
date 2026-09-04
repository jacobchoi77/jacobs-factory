import type { Metadata } from "next";
import { FreeTimerPage } from "./freetimer-page";

export const metadata: Metadata = {
  title: "FreeTimer · Jacobs Factory",
  description:
    "One-tap focus timer. No ads. Optional Google sign-in syncs only to this app’s Drive folder. Available on Google Play and the Microsoft Store.",
};

export default function Page() {
  return <FreeTimerPage />;
}
