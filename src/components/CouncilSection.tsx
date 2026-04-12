"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface CouncilProps {
  dict: {
    section_label: string;
    members: {
      name: string;
      role: string;
      image: string;
    }[];
  };
  locale: string;
}

export default function CouncilSection({ dict, locale }: CouncilProps) {
  const isArabic = locale === "ar";
  const headlineFont = isArabic
    ? "var(--font-amiri), 'Amiri', serif"
    : "var(--font-newsreader), 'Newsreader', serif";
  const bodyFont = isArabic
    ? "var(--font-ibm-plex-arabic), sans-serif"
    : "var(--font-space-grotesk), sans-serif";

  return (
    <section className="py-32 px-12 bg-surface-container-lowest">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-xs uppercase tracking-[0.5em] text-surface-tint mb-12 text-center"
          style={{ fontFamily: bodyFont }}
        >
          {dict.section_label}
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {dict.members.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className={`space-y-6 ${i % 2 === 1 ? "md:mt-16" : ""}`}
            >
              <div className="aspect-[3/4] bg-surface-container overflow-hidden relative">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="w-full h-full object-cover grayscale hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div>
                <h4
                  className="text-white"
                  style={{
                    fontFamily: headlineFont,
                    fontSize: isArabic ? "1.875rem" : "1.5rem",
                  }}
                >
                  {member.name}
                </h4>
                <p
                  className="text-xs uppercase tracking-widest text-surface-tint"
                  style={{ fontFamily: bodyFont }}
                >
                  {member.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
