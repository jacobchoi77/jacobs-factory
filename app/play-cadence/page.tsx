import type { Metadata } from "next";
import { PlayCadencePage } from "./play-cadence-page";

export const metadata: Metadata = {
  title: "Play Cadence · Jacobs Factory",
  description:
    "A treadmill game you play by matching cadence. Phone mic for SPM, YouTube mixes, a DDR-style course, and an overlay for Netflix. Available on Google Play.",
};

export default function Page() {
  return <PlayCadencePage />;
}
