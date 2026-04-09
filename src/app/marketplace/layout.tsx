import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marketplace | TerraCube — Earth Intelligence Services",
  description:
    "Browse the full catalog of TerraCube Earth intelligence services. Risk monitoring, energy estimation, wildfire assessment, ESG scoring, and more — all powered by satellite data.",
};

export default function MarketplaceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
