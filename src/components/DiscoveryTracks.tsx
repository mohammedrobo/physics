"use client";

import { motion } from "framer-motion";

interface TracksProps {
  dict: {
    section_label: string;
    title: string;
    subtitle: string;
    modules: {
      icon: string;
      title: string;
      description: string;
      tag: string;
    }[];
  };
  locale: string;
}

export default function DiscoveryTracks({ dict, locale }: TracksProps) {
  const isArabic = locale === "ar";
  const headlineFont = isArabic
    ? "var(--font-amiri), 'Amiri', serif"
    : "var(--font-newsreader), 'Newsreader', serif";
  const bodyFont = isArabic
    ? "var(--font-ibm-plex-arabic), sans-serif"
    : "var(--font-space-grotesk), sans-serif";

  return (
    <section className="py-32 px-12 bg-surface">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex justify-between items-end mb-24"
        >
          <div>
            <h2
              className="text-xs uppercase tracking-[0.5em] text-surface-tint mb-6"
              style={{ fontFamily: bodyFont }}
            >
              {dict.section_label}
            </h2>
            <h3
              className="text-white"
              style={{
                fontFamily: headlineFont,
                fontSize: isArabic ? "4.5rem" : "3.75rem",
              }}
            >
              {dict.title}
            </h3>
          </div>
          <p
            className="text-xs text-outline uppercase tracking-widest max-w-[200px]"
            style={{ fontFamily: bodyFont }}
          >
            {dict.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[0.5px] bg-outline-variant/20 border-ghost">
          {dict.modules.map((mod, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className={`bg-surface p-12 group hover:bg-surface-container-low transition-colors duration-500 ${i > 0 ? (isArabic ? "border-r" : "border-l") + " border-outline-variant/30" : ""}`}
            >
              <span
                className="material-symbols-outlined text-surface-tint text-4xl mb-12 block group-hover:scale-110 transition-transform"
                style={{
                  fontVariationSettings:
                    "'FILL' 0, 'wght' 200, 'GRAD' 0, 'opsz' 24",
                }}
              >
                {mod.icon}
              </span>
              <h4
                className="text-white mb-6"
                style={{
                  fontFamily: headlineFont,
                  fontSize: isArabic ? "2.25rem" : "1.875rem",
                }}
              >
                {mod.title}
              </h4>
              <p
                className="text-on-surface-variant leading-relaxed mb-10"
                style={{
                  fontFamily: bodyFont,
                  fontSize: isArabic ? "1rem" : "0.875rem",
                }}
              >
                {mod.description}
              </p>
              <div className="flex items-center gap-4">
                <span className="w-12 h-[0.5px] bg-surface-tint" />
                <span
                  className="text-[10px] uppercase tracking-widest text-surface-tint"
                  style={{ fontFamily: bodyFont }}
                >
                  {mod.tag}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
