import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { Providers } from "@/lib/providers";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mariage ou Pas ? | Simulateur fiscal couple",
  description: "Découvrez si le mariage ou le PACS est financièrement intéressant pour votre couple. Simulation gratuite et instantanée.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${geist.variable} antialiased`}>
      <body className="min-h-screen bg-[#FDF2F8]">
        <GoogleAnalytics />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
