"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-4 left-1/2 z-50 w-[calc(100%-2rem)] max-w-5xl -translate-x-1/2"
    >
      <nav className="rounded-2xl border border-zinc-800/80 bg-zinc-900/60 backdrop-blur-xl px-5 py-3 flex items-center justify-between shadow-lg shadow-black/20">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm transition-transform group-hover:scale-110">
            N
          </div>
          <span className="text-lg font-semibold text-white tracking-tight">
            NovaHost
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="px-4 py-2 text-sm text-zinc-400 rounded-lg transition-colors hover:text-white hover:bg-zinc-800/60"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA + Mobile toggle */}
        <div className="flex items-center gap-3">
          <a
            href="https://billing.yourdomain.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 px-5 py-2 text-sm font-medium text-white transition-all hover:shadow-lg hover:shadow-indigo-500/25 hover:brightness-110"
          >
            Client Area
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-zinc-400 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="mt-2 rounded-2xl border border-zinc-800/80 bg-zinc-900/90 backdrop-blur-xl p-4 md:hidden"
          >
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-4 py-3 text-sm text-zinc-400 rounded-lg transition-colors hover:text-white hover:bg-zinc-800/60"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="https://billing.yourdomain.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 block text-center rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 px-5 py-3 text-sm font-medium text-white"
                >
                  Client Area
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

