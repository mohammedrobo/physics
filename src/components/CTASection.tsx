"use client";

import { motion } from "framer-motion";

interface CTAProps {
  dict: {
    title: string;
    description: string;
  };
  locale: string;
}

export default function CTASection({ dict, locale }: CTAProps) {
  const isArabic = locale === "ar";
  const headlineFont = isArabic
    ? "var(--font-amiri), 'Amiri', serif"
    : "var(--font-newsreader), 'Newsreader', serif";
  const bodyFont = isArabic
    ? "var(--font-ibm-plex-arabic), sans-serif"
    : "var(--font-space-grotesk), sans-serif";

  return (
    <section className="py-40 px-12 bg-surface-container-low border-t border-outline-variant/30 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="text-white mb-12 tracking-tighter"
        style={{
          fontFamily: headlineFont,
          fontSize: isArabic ? "6rem" : "4.5rem",
        }}
      >
        {dict.title}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-on-surface-variant mx-auto leading-relaxed"
        style={{
          fontFamily: bodyFont,
          maxWidth: isArabic ? "42rem" : "36rem",
          fontSize: isArabic ? "1.125rem" : "1rem",
        }}
      >
        {dict.description}
      </motion.p>
    </section>
  );
}
