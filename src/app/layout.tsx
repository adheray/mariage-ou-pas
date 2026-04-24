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
  title: "Mariage ou PACS : Simulateur Fiscal Gratuit | Calculez vos économies d'impôts",
  description: "Simulez gratuitement l'avantage fiscal du mariage ou du PACS pour votre couple. Calcul instantané de vos économies d'impôts selon vos revenus. 14 000+ simulations réalisées.",
  keywords: ["simulateur mariage", "simulateur PACS", "économie impôts couple", "mariage ou pacs", "avantage fiscal mariage", "calcul impôt couple"],
  authors: [{ name: "Bob le Développeur" }],
  metadataBase: new URL("https://mariage-ou-pas.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Mariage ou PACS : Simulateur Fiscal Gratuit",
    description: "Calculez vos économies d'impôts en 2 minutes. Simulation gratuite et instantanée.",
    url: "https://mariage-ou-pas.vercel.app",
    siteName: "Mariage ou Pas",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Simulateur fiscal mariage ou PACS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mariage ou PACS : Simulateur Fiscal Gratuit",
    description: "Calculez vos économies d'impôts en 2 minutes.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
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
