import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marketplace — Environmental Underwriting Services",
  description:
    "12 satellite-powered underwriting modules: flood and wind risk, wildfire scoring, ESG ratings, solar potential, carbon credit verification, parametric insurance triggers — all powered by live Google Earth Engine data.",
  openGraph: {
    title: "Vault Neo Marketplace — Environmental Underwriting Services",
    description:
      "12 satellite-powered underwriting modules: flood risk, wildfire scoring, ESG ratings, parametric insurance, carbon verification, and more.",
    url: "/marketplace",
  },
  twitter: {
    title: "Vault Neo Marketplace — Environmental Underwriting Services",
    description:
      "12 satellite-powered underwriting modules: flood risk, wildfire scoring, ESG ratings, parametric insurance, carbon verification, and more.",
  },
};

export default function MarketplaceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
