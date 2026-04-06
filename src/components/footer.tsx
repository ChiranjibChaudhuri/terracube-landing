import Link from "next/link";
import { BRAND_NAME } from "@/lib/constants";

const footerLinks = [
  { label: "Marketplace", href: "/marketplace" },
  { label: "About", href: "/about" },
  { label: "Pricing", href: "/pricing" },
  { label: "Docs", href: "#" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-navy-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Link href="/" className="text-xl font-bold gradient-text">
            {BRAND_NAME}
          </Link>
          <div className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-navy-400 hover:text-brand-400 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-navy-500">
          &copy; 2026 {BRAND_NAME}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
