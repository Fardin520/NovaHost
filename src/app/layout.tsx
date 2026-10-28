import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

export const metadata: Metadata = {
  title: "NovaHost — High-Performance VPS Hosting",
  description:
    "Blazing-fast NVMe VPS hosting with instant cPanel provisioning. Automated UddoktaPay checkout. Deploy in seconds.",
  keywords: [
    "VPS hosting",
    "cPanel hosting",
    "NVMe VPS",
    "NovaHost",
    "UddoktaPay",
    "affordable hosting",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geist.variable} dark scroll-smooth`}>
      <body className="min-h-screen bg-zinc-950 text-zinc-100 font-sans antialiased selection:bg-indigo-500/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
