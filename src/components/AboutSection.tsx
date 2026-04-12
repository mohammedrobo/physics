"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface AboutSectionProps {
  dict: {
    section_label: string;
    title_line1: string;
    title_line2: string;
    description: string;
    block1_title: string;
    block1_text: string;
    block2_title: string;
    block2_text: string;
  };
  locale: string;
}

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function AboutSection({ dict, locale }: AboutSectionProps) {
  const isArabic = locale === "ar";
  const headlineFont = isArabic
    ? "var(--font-amiri), 'Amiri', serif"
    : "var(--font-newsreader), 'Newsreader', serif";
  const bodyFont = isArabic
    ? "var(--font-ibm-plex-arabic), sans-serif"
    : "var(--font-space-grotesk), sans-serif";

  return (
    <section className="bg-surface-container-low py-32 px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 items-start">
        <div className="md:col-span-5">
          <motion.h2
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-xs uppercase tracking-[0.5em] text-surface-tint mb-12"
            style={{ fontFamily: bodyFont }}
          >
            {dict.section_label}
          </motion.h2>
          <motion.h3
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-white leading-tight mb-8"
            style={{
              fontFamily: headlineFont,
              fontSize: isArabic ? "3.75rem" : "3rem",
              lineHeight: "1.1",
            }}
          >
            {dict.title_line1} <br />
            {dict.title_line2}
          </motion.h3>
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-on-surface-variant leading-loose mb-12"
            style={{ fontFamily: bodyFont }}
          >
            {dict.description}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.3 }}
            className="border-ghost p-12 aspect-[4/5] relative bg-surface-container-lowest"
          >
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCL1NIjvWmNgKgGWUtT3k9KGTS97216_BY7wD_NROvfFLGnlYKPLpSYhfoMstGbKgK1lvkVFQ4y9WT2nr1p8ztT9Tqcp9ZIzCaETKLabe62MblwMNtlLjlbRz0jrNzshEqDo_8tUNcaR4Zew8MSFwsFkf1aHKdtH1HJ87wXZMQssdZ04MIgVhNrUrC-KmkCyyU6ihlmFGB5cos3RJJIdWgCj9ujqtEduTlikE6OyNnZ8jiBXhiZgG_NnTY6gTvgQrupS8RLCq_Mg4E"
              alt="modern Brutalist university laboratory"
              fill
              className="w-full h-full object-cover grayscale brightness-75 contrast-125"
            />
          </motion.div>
        </div>
        <div className="md:col-span-7 flex flex-col justify-center h-full pt-20">
          <div className="flex flex-col gap-24">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-md"
            >
              <h4
                className="text-white mb-4 italic"
                style={{
                  fontFamily: headlineFont,
                  fontSize: isArabic ? "1.875rem" : "1.5rem",
                }}
              >
                {dict.block1_title}
              </h4>
              <p
                className="text-on-surface-variant leading-relaxed"
                style={{
                  fontFamily: bodyFont,
                  fontSize: isArabic ? "1rem" : "0.875rem",
                }}
              >
                {dict.block1_text}
              </p>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className={`max-w-md ${isArabic ? "self-start" : "self-end"}`}
            >
              <h4
                className="text-white mb-4 italic"
                style={{
                  fontFamily: headlineFont,
                  fontSize: isArabic ? "1.875rem" : "1.5rem",
                }}
              >
                {dict.block2_title}
              </h4>
              <p
                className="text-on-surface-variant leading-relaxed"
                style={{
                  fontFamily: bodyFont,
                  fontSize: isArabic ? "1rem" : "0.875rem",
                }}
              >
                {dict.block2_text}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
