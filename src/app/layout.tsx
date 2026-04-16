import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://terracube.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "TerraCube | Environmental Underwriting for Real Estate",
    template: "%s | TerraCube",
  },
  description:
    "Satellite-powered environmental underwriting for real estate. Quantify flood, wildfire, heat, and wind exposure across your portfolio with AI-driven risk models and live Google Earth Engine data.",
  keywords: [
    "earth intelligence",
    "real estate risk",
    "climate risk analytics",
    "satellite property analysis",
    "environmental underwriting",
    "wildfire risk assessment",
    "ESG scoring",
    "energy estimation",
    "parametric insurance",
    "carbon credit verification",
    "Google Earth Engine",
    "property portfolio analytics",
    "use cases",
    "case studies",
    "data sources",
    "security",
    "compliance",
    "SOC2",
  ],
  authors: [{ name: "TerraCube" }],
  creator: "TerraCube",
  publisher: "TerraCube",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "TerraCube",
    title: "TerraCube | Environmental Underwriting for Real Estate",
    description:
      "Satellite-powered environmental underwriting for real estate. Quantify flood, wildfire, heat, and wind risk across your portfolio with AI-driven models.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "TerraCube — Earth Intelligence for Smarter Real Estate Decisions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TerraCube | Environmental Underwriting for Real Estate",
    description:
      "Satellite-powered environmental underwriting. Quantify flood, wildfire, heat, and wind risk for any property with AI-driven models and live satellite data.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "TerraCube Vault Neo",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "Satellite-powered environmental underwriting platform for real estate — quantify flood, wildfire, heat, and wind risk with AI-driven models and live Google Earth Engine data.",
  url: siteUrl,
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "USD",
    lowPrice: "0",
    highPrice: "49",
    offerCount: "3",
  },
  featureList: [
    "Climate risk monitoring",
    "Wildfire risk scoring",
    "Energy estimation",
    "ESG property scoring",
    "Parametric insurance triggers",
    "Carbon credit verification",
    "AI-powered portfolio analytics",
    "Satellite data integration via Google Earth Engine",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-navy-950 text-navy-100">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:top-4 focus:left-4 focus:rounded-lg focus:bg-brand-500 focus:px-4 focus:py-2 focus:text-white focus:outline-none"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
