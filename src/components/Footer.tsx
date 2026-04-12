"use client";

import { motion } from "framer-motion";

interface FooterProps {
  dict: {
    logo: string;
    links: string[];
    copyright: string;
  };
  locale: string;
}

export default function Footer({ dict, locale }: FooterProps) {
  const isArabic = locale === "ar";
  const headlineFont = isArabic
    ? "var(--font-amiri), 'Amiri', serif"
    : "var(--font-newsreader), 'Newsreader', serif";
  const bodyFont = isArabic
    ? "var(--font-ibm-plex-arabic), sans-serif"
    : "var(--font-space-grotesk), sans-serif";

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="bg-[#0c1324] flex flex-col items-center gap-8 py-16 px-12 w-full border-t-[0.5px] border-[#4a473c]/30"
    >
      <div
        className="text-xl italic text-white"
        style={{ fontFamily: headlineFont }}
      >
        {dict.logo}
      </div>
      <div className="flex flex-wrap justify-center gap-10">
        {dict.links.map((link, i) => (
          <a
            key={i}
            href="#"
            className="text-[#ccc6b8] hover:text-white transition-all text-[10px] uppercase tracking-[0.2em]"
            style={{ fontFamily: bodyFont }}
          >
            {link}
          </a>
        ))}
      </div>
      <p
        className="text-[#ccc6b8] text-[10px] uppercase tracking-[0.2em] opacity-80 mt-8"
        style={{ fontFamily: bodyFont }}
      >
        {dict.copyright}
      </p>
    </motion.footer>
  );
}
