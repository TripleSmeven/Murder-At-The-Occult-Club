import type { Metadata } from "next";
import {
  Caveat,
  Handlee,
  Patrick_Hand,
  Special_Elite,
  Gochi_Hand,
  Noto_Sans,
  Roboto,
} from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./gameLayout.module.css";

const caveat = Caveat({
  variable: "--font-caveat-sans",
  subsets: ["latin"],
});
const handlee = Handlee({
  variable: "--font-handlee",
  weight: "400",
  subsets: ["latin"],
});
const patrick = Patrick_Hand({
  variable: "--font-patrick",
  weight: "400",
  subsets: ["latin"],
});
const special = Special_Elite({
  variable: "--font-special",
  weight: "400",
  subsets: ["latin"],
});
const gochi = Gochi_Hand({
  variable: "--font-gochi",
  weight: "400",
  subsets: ["latin"],
});
const noto = Noto_Sans({
  variable: "--font-noto",
  weight: "400",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Murder At The Occult Club",
  description: "A detective puzzle game",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
