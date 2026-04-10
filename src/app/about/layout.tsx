import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Environmental Underwriting, Reinvented",
  description:
    "TerraCube connects Google Earth Engine satellite data to real estate underwriting workflows. Learn how we turn petabytes of environmental imagery into property-level risk scores.",
  openGraph: {
    title: "About TerraCube — Environmental Underwriting, Reinvented",
    description:
      "We connect Google Earth Engine satellite data to real estate underwriting — turning petabytes of environmental imagery into property-level risk scores.",
    url: "/about",
  },
  twitter: {
    title: "About TerraCube — Environmental Underwriting, Reinvented",
    description:
      "We connect Google Earth Engine satellite data to real estate underwriting — turning petabytes of environmental imagery into property-level risk scores.",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
