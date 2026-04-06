import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "TerraCube | Earth Intelligence for Real Estate",
  description:
    "Satellite data and AI-powered property analysis. Assess environmental risk, energy performance, and portfolio health with real-time Earth intelligence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="min-h-screen bg-navy-950 text-navy-100">
        {children}
      </body>
    </html>
  );
}
