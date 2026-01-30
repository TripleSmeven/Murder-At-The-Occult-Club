import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Space_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const space_mono = Space_Mono({
  variable: "--font-space_mono",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Murder At The Occult Club",
  description: "A detective puzzle game",
};

export const viewport: Viewport = {
  width: 1100,
  height: 500,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head></head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  );
}
