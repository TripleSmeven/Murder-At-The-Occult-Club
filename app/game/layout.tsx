import type { Metadata } from "next";
import {
  Space_Mono,
  Patrick_Hand,
  Special_Elite,
  Gochi_Hand,
  Noto_Sans,
  Roboto,
  Newsreader,
  Permanent_Marker,
  Pangolin,
  Crafty_Girls,
  Domine,
  Rouge_Script,
  Inter,
  Indie_Flower,
  Fondamento,
  Julee,
} from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./gameLayout.module.css";

// FONTS HERE

// notes (player)
const pangolin = Pangolin({
  variable: "--font-pangolin",
  weight: "400",
  subsets: ["latin"],
});

// letter from x
const patrick = Patrick_Hand({
  variable: "--font-patrick",
  weight: "400",
  subsets: ["latin"],
});

// letter from walter
const rouge_script = Rouge_Script({
  variable: "--font-rouge_script",
  weight: "400",
  subsets: ["latin"],
});

// police notes (handwritten)
const indie_flower = Indie_Flower({
  variable: "--font-indie_flower",
  weight: "400",
  subsets: ["latin"],
});

// police report (typewriter)
const special = Special_Elite({
  variable: "--font-special",
  weight: "400",
  subsets: ["latin"],
});

// recipe (creepy old font)
const gochi = Gochi_Hand({
  variable: "--font-gochi",
  weight: "400",
  subsets: ["latin"],
});

// mantles of inheritance (old looking book)
const fondamento = Fondamento({
  variable: "--font-fondamento",
  weight: "400",
  subsets: ["latin"],
});

// rituals of tiaccabode (old handwriting)
const julee = Julee({
  variable: "--font-julee",
  weight: "400",
  subsets: ["latin"],
});

// texts
const noto = Noto_Sans({
  variable: "--font-noto",
  weight: "400",
  subsets: ["latin"],
});

// email inbox
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

// iphone like font
const inter = Inter({
  variable: "--font-inter",
  weight: "400",
  subsets: ["latin"],
});

// newspaper
const newsreader = Newsreader({
  variable: "--font-newsreader",
  weight: "400",
  subsets: ["latin"],
});

// notepad's completeness state
const permanent_marker = Permanent_Marker({
  variable: "--font-permanent_marker",
  weight: "400",
  subsets: ["latin"],
});

// girl diary
const crafty_girls = Crafty_Girls({
  variable: "--font-crafty_girls",
  weight: "400",
  subsets: ["latin"],
});

// email content
const domine = Domine({
  variable: "--font-domine",
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
