"use client";

import { motion } from "framer-motion";
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

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`fixed top-0 w-full max-w-full z-50 backdrop-blur-3xl flex ${isArabic ? "flex-row-reverse" : "flex-row"} justify-between items-center px-12 py-6`}
      style={{ backgroundColor: "rgba(12, 19, 36, 0.7)" }}
    >
      <div
        className="text-2xl tracking-tighter text-white"
        style={{
          fontFamily: isArabic
            ? "var(--font-amiri), 'Amiri', serif"
            : "var(--font-newsreader), 'Newsreader', serif",
        }}
      >
        {dict.logo}
      </div>
      <div className="hidden md:flex gap-10 items-center">
        {dict.links.map((link, i) => (
          <a
            key={i}
            href="#"
            className={`${i === 0 ? "text-white" : "text-[#ccc6b8] hover:text-white"} text-lg tracking-tight transition-colors duration-300`}
            style={{
              fontFamily: isArabic
                ? "var(--font-amiri), 'Amiri', serif"
                : "var(--font-newsreader), 'Newsreader', serif",
            }}
          >
            {link}
          </a>
        ))}
      </div>
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
    </motion.nav>
  );
}
