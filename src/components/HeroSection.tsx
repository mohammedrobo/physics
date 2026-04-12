"use client";

import { motion } from "framer-motion";

interface HeroSectionProps {
  dict: {
    label: string;
    title_line1: string;
    title_line2: string;
    title_year: string;
    description: string;
    date_label: string;
    date: string;
    location: string;
  };
  locale: string;
}

export default function HeroSection({ dict, locale }: HeroSectionProps) {
  const isArabic = locale === "ar";

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-12 pt-32 pb-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full opacity-40"
          style={{
            background:
              "radial-gradient(circle at center, #23293c 0%, #0c1324 50%, #0c1324 100%)",
          }}
        />
        {/* Hero image as CSS background */}
        <div
          className="absolute inset-0 mix-blend-screen opacity-20"
          style={{
            backgroundImage: "url('/hero_section.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-sm uppercase tracking-[0.4em] text-surface-tint mb-8"
          style={{
            fontFamily: isArabic
              ? "var(--font-ibm-plex-arabic), sans-serif"
              : "var(--font-space-grotesk), sans-serif",
          }}
        >
          {dict.label}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-[clamp(4rem,10vw,12rem)] font-light tracking-tighter text-white mb-12"
          style={{
            fontFamily: isArabic
              ? "var(--font-amiri), 'Amiri', serif"
              : "var(--font-newsreader), 'Newsreader', serif",
            lineHeight: isArabic ? "0.9" : "0.85",
          }}
        >
          {dict.title_line1} <br />{" "}
          <span className="italic text-surface-tint">{dict.title_line2}</span>{" "}
          {dict.title_year}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-12"
        >
          <p
            className="text-xl max-w-xl text-on-surface-variant leading-relaxed"
            style={{
              fontFamily: isArabic
                ? "var(--font-ibm-plex-arabic), sans-serif"
                : "var(--font-space-grotesk), sans-serif",
            }}
          >
            {dict.description}
          </p>
          <div
            className="flex flex-col items-start gap-2"
            style={{
              [isArabic ? "borderRight" : "borderLeft"]:
                "1px solid #4a473c",
              [isArabic ? "paddingRight" : "paddingLeft"]: "2rem",
            }}
          >
            <span
              className="text-xs uppercase tracking-widest text-outline"
              style={{
                fontFamily: isArabic
                  ? "var(--font-ibm-plex-arabic), sans-serif"
                  : "var(--font-space-grotesk), sans-serif",
              }}
            >
              {dict.date_label}
            </span>
            <span
              className="text-white"
              style={{
                fontFamily: isArabic
                  ? "var(--font-amiri), 'Amiri', serif"
                  : "var(--font-newsreader), 'Newsreader', serif",
                fontSize: isArabic ? "1.875rem" : "1.5rem",
              }}
            >
              {dict.date}
            </span>
            <span
              className="text-sm text-on-surface-variant"
              style={{
                fontFamily: isArabic
                  ? "var(--font-ibm-plex-arabic), sans-serif"
                  : "var(--font-space-grotesk), sans-serif",
              }}
            >
              {dict.location}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
