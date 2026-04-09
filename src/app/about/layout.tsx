import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | TerraCube — Our Mission & Technology",
  description:
    "Learn about TerraCube's mission to bring Earth intelligence to real estate. Powered by Google Earth Engine, AI, and satellite data fusion.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
