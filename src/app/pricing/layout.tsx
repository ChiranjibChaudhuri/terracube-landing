import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing — Environmental Underwriting Plans",
  description:
    "Analyze 5 properties free. Scale to thousands with full environmental risk models, AI agents, workflow automation, and API access. No hidden fees, no long-term contracts.",
  openGraph: {
    title: "TerraCube Pricing — Environmental Underwriting Plans",
    description:
      "Start free with 5 properties. Scale to unlimited with 50+ risk models, parametric insurance triggers, and dedicated support.",
    url: "/pricing",
  },
  twitter: {
    title: "TerraCube Pricing — Environmental Underwriting Plans",
    description:
      "Start free with 5 properties. Scale to unlimited with 50+ risk models, parametric insurance triggers, and dedicated support.",
  },
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
