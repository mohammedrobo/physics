"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

interface NavbarProps {
  dict: {
    logo: string;
    links: string[];
  };
  locale: string;
}

export default function Navbar({ dict, locale }: NavbarProps) {
  const isArabic = locale === "ar";
  const [mobileOpen, setMobileOpen] = useState(false);

  const headlineFont = isArabic
    ? "var(--font-amiri), 'Amiri', serif"
    : "var(--font-newsreader), 'Newsreader', serif";
  const bodyFont = isArabic
    ? "var(--font-ibm-plex-arabic), sans-serif"
    : "var(--font-space-grotesk), sans-serif";

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 w-full max-w-full z-50 backdrop-blur-3xl flex ${isArabic ? "flex-row-reverse" : "flex-row"} justify-between items-center px-6 md:px-12 py-5 md:py-6`}
        style={{ backgroundColor: "rgba(12, 19, 36, 0.7)" }}
      >
        {/* Logo */}
        <div
          className="text-xl md:text-2xl tracking-tighter text-white"
          style={{ fontFamily: headlineFont }}
        >
          {dict.logo}
        </div>

        {/* Desktop nav links */}
        <div className="hidden md:flex gap-10 items-center">
          {dict.links.map((link, i) => (
            <a
              key={i}
              href="#"
              className={`${i === 0 ? "text-white" : "text-[#ccc6b8] hover:text-white"} text-lg tracking-tight transition-colors duration-300`}
              style={{ fontFamily: headlineFont }}
            >
              {link}
            </a>
          ))}
        </div>

        {/* Right side: lang toggle + hamburger */}
        <div className={`flex items-center gap-4 ${isArabic ? "flex-row-reverse" : "flex-row"}`}>
          {/* Language toggle */}
          <Link href={isArabic ? "/en" : "/ar"}>
            <span
              className="cursor-pointer text-xs uppercase tracking-[0.15em] px-3 py-1.5 text-[#ccc6b8] hover:text-white transition-all duration-300"
              style={{
                fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
                border: "0.5px solid rgba(74, 71, 60, 0.3)",
              }}
            >
              {isArabic ? "EN" : "AR"}
            </span>
          </Link>

          {/* Hamburger button — mobile only */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-[5px] cursor-pointer"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 6.5 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
              className="block w-6 h-[0.5px] bg-white origin-center"
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="block w-6 h-[0.5px] bg-white"
            />
            <motion.span
              animate={mobileOpen ? { rotate: -45, y: -6.5 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
              className="block w-6 h-[0.5px] bg-white origin-center"
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 md:hidden flex flex-col justify-center items-center"
            style={{ backgroundColor: "rgba(12, 19, 36, 0.95)", backdropFilter: "blur(24px)" }}
          >
            <nav className="flex flex-col items-center gap-10">
              {dict.links.map((link, i) => (
                <motion.a
                  key={i}
                  href="#"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  onClick={() => setMobileOpen(false)}
                  className={`${i === 0 ? "text-white" : "text-[#ccc6b8]"} text-3xl tracking-tight transition-colors duration-300`}
                  style={{ fontFamily: headlineFont }}
                >
                  {link}
                </motion.a>
              ))}

              {/* Mobile lang toggle */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, delay: dict.links.length * 0.08 }}
                className="mt-8"
              >
                <Link href={isArabic ? "/en" : "/ar"} onClick={() => setMobileOpen(false)}>
                  <span
                    className="cursor-pointer text-sm uppercase tracking-[0.2em] px-6 py-2.5 text-[#ccc6b8] hover:text-white transition-all duration-300"
                    style={{
                      fontFamily: bodyFont,
                      border: "0.5px solid rgba(74, 71, 60, 0.3)",
                    }}
                  >
                    {isArabic ? "English" : "العربية"}
                  </span>
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
