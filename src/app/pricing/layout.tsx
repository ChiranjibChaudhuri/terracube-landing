import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing | TerraCube — Simple, Transparent Plans",
  description:
    "Start free and scale as your portfolio grows. Compare pricing tiers for TerraCube's Earth intelligence services — risk monitoring, energy estimation, and more.",
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
