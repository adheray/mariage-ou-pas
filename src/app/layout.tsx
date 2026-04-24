import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { Providers } from "@/lib/providers";
import { CookieBanner } from "@/components/CookieBanner";

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Mariage ou Pas — Simulateur Fiscal",
  "url": "https://mariage-ou-pas.fr",
  "description": "Simulateur fiscal gratuit comparant mariage et PACS pour l'impôt sur le revenu en France.",
  "applicationCategory": "FinanceApplication",
  "operatingSystem": "Web",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "EUR"
  },
  "inLanguage": "fr-FR",
  "author": {
    "@type": "Organization",
    "name": "Bob le Développeur",
    "url": "https://bob-le-developpeur.com"
  }
};

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mariage ou PACS : Simulateur Fiscal Gratuit | Calculez vos économies d'impôts",
  description: "Simulez gratuitement l'avantage fiscal du mariage ou du PACS pour votre couple. Calcul instantané de vos économies d'impôts selon vos revenus. 14 000+ simulations réalisées.",
  keywords: ["simulateur mariage", "simulateur PACS", "économie impôts couple", "mariage ou pacs", "avantage fiscal mariage", "calcul impôt couple"],
  authors: [{ name: "Bob le Développeur" }],
  metadataBase: new URL("https://mariage-ou-pas.fr"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Mariage ou PACS : Simulateur Fiscal Gratuit",
    description: "Calculez vos économies d'impôts en 2 minutes. Simulation gratuite et instantanée.",
    url: "https://mariage-ou-pas.fr",
    siteName: "Mariage ou Pas",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mariage ou PACS : Simulateur Fiscal Gratuit",
    description: "Calculez vos économies d'impôts en 2 minutes.",
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
      <body className="min-h-screen bg-[#F8F9FA]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
        />
        <CookieBanner />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
