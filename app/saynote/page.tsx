import type { Metadata } from "next";
import { SayNotePage } from "./saynote-page";

export const metadata: Metadata = {
  title: "SayNote · Jacobs Factory",
  description:
    "Speak and it becomes a note. Saved on this phone. No account. Available on Google Play.",
};

export default function Page() {
  return <SayNotePage />;
}
