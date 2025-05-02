import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kota Kimura",
  description: "ポートフォリオ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <style>{`html { scroll-behavior: smooth; }`}</style>
      </head>
      <body
        className={`
          ${geistSans.variable}
          ${geistMono.variable}
          antialiased
          relative
          bg-[#0a0a0a]
          text-[#e6e6e6]
          bg-hud-overlay
          bg-noise
        `}
      >
        <div className="line-overlay-diagonal" aria-hidden="true" />
        <div className="line-overlay-diagonal-right" aria-hidden="true" />

        {/*  
        <div className="slash_line_outer" />
        <SlashLines />*/}

        {children}
      </body>
    </html>
  );
}
