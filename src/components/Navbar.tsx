"use client";

import { useState, useEffect } from "react";
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

  // Lock body scroll when menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

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
          {/* Language toggle — desktop only */}
          <Link href={isArabic ? "/en" : "/ar"} className="hidden md:block">
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

          {/* Hamburger — mobile only */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden relative flex flex-col justify-center items-center w-8 h-8 gap-[5px] cursor-pointer z-50"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={
                mobileOpen
                  ? { rotate: 45, y: 6.5, backgroundColor: "#d1c79d" }
                  : { rotate: 0, y: 0, backgroundColor: "#ffffff" }
              }
              transition={{ duration: 0.3 }}
              className="block w-6 h-[0.5px] origin-center"
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0, width: 0 } : { opacity: 1, width: 24 }}
              transition={{ duration: 0.2 }}
              className="block h-[0.5px] bg-white"
            />
            <motion.span
              animate={
                mobileOpen
                  ? { rotate: -45, y: -6.5, backgroundColor: "#d1c79d" }
                  : { rotate: 0, y: 0, backgroundColor: "#ffffff" }
              }
              transition={{ duration: 0.3 }}
              className="block w-6 h-[0.5px] origin-center"
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu — full screen premium overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed inset-0 z-40 md:hidden flex flex-col"
            style={{
              backgroundColor: "rgba(7, 13, 31, 0.97)",
              backdropFilter: "blur(32px)",
            }}
          >
            {/* Subtle radial glow */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at 50% 30%, rgba(209, 199, 157, 0.04) 0%, transparent 60%)",
              }}
            />

            {/* Top decorative line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              exit={{ scaleX: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
              className="absolute top-20 left-6 right-6 h-[0.5px] origin-left"
              style={{ backgroundColor: "rgba(74, 71, 60, 0.3)" }}
            />

            {/* Main content — centered */}
            <div className="flex-1 flex flex-col justify-center items-center px-8 relative">
              {/* Section label */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, delay: 0.15 }}
                className="text-[10px] uppercase tracking-[0.5em] text-surface-tint mb-12"
                style={{ fontFamily: bodyFont }}
              >
                {isArabic ? "القائمة" : "Navigation"}
              </motion.p>

              {/* Nav links */}
              <nav className="flex flex-col items-center gap-0">
                {dict.links.map((link, i) => (
                  <motion.a
                    key={i}
                    href="#"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.2 + i * 0.1,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                    onClick={() => setMobileOpen(false)}
                    className="group relative py-4"
                  >
                    {/* Number tag */}
                    <span
                      className="text-[9px] uppercase tracking-[0.3em] text-surface-tint/50 absolute -top-0.5"
                      style={{
                        fontFamily: bodyFont,
                        [isArabic ? "right" : "left"]: "-2rem",
                      }}
                    >
                      0{i + 1}
                    </span>
                    <span
                      className={`${i === 0 ? "text-white" : "text-[#ccc6b8]"} text-4xl tracking-tight transition-all duration-500 group-hover:text-surface-tint`}
                      style={{ fontFamily: headlineFont }}
                    >
                      {link}
                    </span>
                    {/* Hover line */}
                    <motion.span
                      className="absolute bottom-2 left-0 right-0 h-[0.5px] bg-surface-tint origin-left"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.a>
                ))}
              </nav>
            </div>

            {/* Bottom bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="px-8 pb-10 flex flex-col items-center gap-6"
            >
              {/* Decorative line */}
              <div
                className="w-12 h-[0.5px] mb-2"
                style={{ backgroundColor: "rgba(209, 199, 157, 0.3)" }}
              />

              {/* Language toggle */}
              <Link
                href={isArabic ? "/en" : "/ar"}
                onClick={() => setMobileOpen(false)}
              >
                <span
                  className="inline-block cursor-pointer text-xs uppercase tracking-[0.2em] px-8 py-3 text-[#ccc6b8] hover:text-white hover:border-[#d1c79d] transition-all duration-500"
                  style={{
                    fontFamily: bodyFont,
                    border: "0.5px solid rgba(74, 71, 60, 0.3)",
                  }}
                >
                  {isArabic ? "English" : "العربية"}
                </span>
              </Link>

              {/* Copyright micro-text */}
              <p
                className="text-[9px] uppercase tracking-[0.3em] text-[#ccc6b8]/30 mt-2"
                style={{ fontFamily: bodyFont }}
              >
                © 2026 — {dict.logo}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
