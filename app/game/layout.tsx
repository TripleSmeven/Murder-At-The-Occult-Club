import type { Metadata } from "next";
import {
  Space_Mono,
  Handlee,
  Patrick_Hand,
  Special_Elite,
  Gochi_Hand,
  Noto_Sans,
  Roboto,
  Newsreader,
} from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./gameLayout.module.css";

// notes
const handlee = Handlee({
  variable: "--font-handlee",
  weight: "400",
  subsets: ["latin"],
});

// letter from x
const patrick = Patrick_Hand({
  variable: "--font-patrick",
  weight: "400",
  subsets: ["latin"],
});

// police report
const special = Special_Elite({
  variable: "--font-special",
  weight: "400",
  subsets: ["latin"],
});

// recipe
const gochi = Gochi_Hand({
  variable: "--font-gochi",
  weight: "400",
  subsets: ["latin"],
});

// texts
const noto = Noto_Sans({
  variable: "--font-noto",
  weight: "400",
  subsets: ["latin"],
});

// email
const roboto = Roboto({
  variable: "--font-roboto",
  weight: "400",
  subsets: ["latin"],
});

// default text
const space_mono = Space_Mono({
  variable: "--font-space_mono",
  weight: "400",
  subsets: ["latin"],
});

// newspaper
const newsreader = Newsreader({
  variable: "--font-newsreader",
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
