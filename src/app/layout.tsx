// /Users/oystein/nettsider/smootday-v2-feb-26/src/app/layout.tsx
import type { Metadata } from "next";
import { Inter, Sora, Zen_Dots } from "next/font/google";
import "./globals.css";

const fontInter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fontSora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

const fontZenDots = Zen_Dots({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-zen-dots",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SmoDay",
  description: "Essentials System – kosttilskudd og vitaminer for hver dag.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="no"
      className={`${fontInter.variable} ${fontSora.variable} ${fontZenDots.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}