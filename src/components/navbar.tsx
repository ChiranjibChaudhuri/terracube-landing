"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { NAV_LINKS } from "@/lib/constants";
import { BrandLogo } from "./brand-logo";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpandedDropdown, setMobileExpandedDropdown] = useState<string | null>(null);

  const navItems = [
    NAV_LINKS.product,
    NAV_LINKS.useCases,
    NAV_LINKS.pricing,
    NAV_LINKS.about,
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-strong">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/">
            <BrandLogo />
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => {
              if ("children" in item && item.children) {
                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setOpenDropdown(item.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <button className="flex items-center gap-1 text-sm text-navy-300 hover:text-white transition-colors">
                      {item.label}
                      <ChevronDown size={16} className={`transition-transform ${openDropdown === item.label ? 'rotate-180' : ''}`} />
                    </button>

                    <AnimatePresence>
                      {openDropdown === item.label && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 min-w-[180px] glass-strong border border-white/10 rounded-lg shadow-lg overflow-hidden"
                        >
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="block px-4 py-2.5 text-sm text-navy-300 hover:text-white hover:bg-white/5 transition-colors"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              if ("href" in item) {
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="text-sm text-navy-300 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                );
              }

              return null;
            })}

            <div className="flex items-center gap-3 ml-2">
              <Link
                href="/auth/login"
                className="text-sm text-navy-300 hover:text-white transition-colors"
              >
                Log In
              </Link>
              <Link
                href="/auth/register"
                className="rounded-lg bg-brand-500 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-600 transition-colors"
              >
                Start Free
              </Link>
              <Link
                href="mailto:sales@terracube.io"
                className="rounded-lg border border-white/20 px-4 py-2 text-sm font-semibold text-white hover:bg-white/5 transition-colors"
              >
                Book Demo
              </Link>
            </div>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-navy-300 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden glass-strong border-t border-white/5"
          >
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => {
                if ("children" in item && item.children) {
                  return (
                    <div key={item.label}>
                      <button
                        onClick={() =>
                          setMobileExpandedDropdown(
                            mobileExpandedDropdown === item.label ? null : item.label
                          )
                        }
                        className="flex items-center justify-between w-full text-sm text-navy-300 hover:text-white transition-colors py-2"
                      >
                        {item.label}
                        <ChevronDown
                          size={16}
                          className={`transition-transform ${
                            mobileExpandedDropdown === item.label ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {mobileExpandedDropdown === item.label && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.15 }}
                            className="pl-4 space-y-1 overflow-hidden"
                          >
                            {item.children.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                onClick={() => setMobileOpen(false)}
                                className="block text-sm text-navy-300 hover:text-brand-400 transition-colors py-2"
                              >
                                {child.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                if ("href" in item) {
                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="block text-sm text-navy-300 hover:text-brand-400 transition-colors py-2"
                    >
                      {item.label}
                    </Link>
                  );
                }

                return null;
              })}

              <div className="pt-4 space-y-2 border-t border-white/5 mt-4">
                <Link
                  href="/auth/login"
                  onClick={() => setMobileOpen(false)}
                  className="block text-sm text-navy-300 hover:text-brand-400 transition-colors py-2 text-center"
                >
                  Log In
                </Link>
                <Link
                  href="/auth/register"
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-lg bg-brand-500 px-4 py-2 text-sm font-semibold text-white text-center hover:bg-brand-600 transition-colors"
                >
                  Start Free
                </Link>
                <Link
                  href="mailto:sales@terracube.io"
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-lg border border-white/20 px-4 py-2 text-sm font-semibold text-white text-center hover:bg-white/5 transition-colors"
                >
                  Book Demo
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
