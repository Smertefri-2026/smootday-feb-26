// /Users/oystein/nettsider/smootday-v2-feb-26/src/app/layout.tsx
import type { Metadata } from "next";
import { Inter, Sora, Ranchers } from "next/font/google";
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

const fontRanchers = Ranchers({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-ranchers",
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
    <html lang="no">
      <body className={`${fontInter.variable} ${fontSora.variable} ${fontRanchers.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}