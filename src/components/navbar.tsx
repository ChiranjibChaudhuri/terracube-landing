"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { BRAND_NAME, NAV_LINKS } from "@/lib/constants";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-strong">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-xl font-bold gradient-text">
            {BRAND_NAME}
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-navy-300 hover:text-brand-400 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/marketplace"
              className="rounded-lg bg-brand-500 px-4 py-2 text-sm font-medium text-white hover:bg-brand-600 transition-colors"
            >
              Launch App
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-navy-300 hover:text-white"
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden glass-strong border-t border-white/5">
          <div className="px-4 py-4 space-y-3">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block text-sm text-navy-300 hover:text-brand-400 transition-colors py-2"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/marketplace"
              onClick={() => setOpen(false)}
              className="block rounded-lg bg-brand-500 px-4 py-2 text-sm font-medium text-white text-center hover:bg-brand-600 transition-colors"
            >
              Launch App
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
