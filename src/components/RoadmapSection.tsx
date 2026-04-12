"use client";

import { motion } from "framer-motion";

interface RoadmapProps {
  dict: {
    section_label: string;
    title: string;
    events: {
      date: string;
      title: string;
      description: string;
    }[];
  };
  locale: string;
}

export default function RoadmapSection({ dict, locale }: RoadmapProps) {
  const isArabic = locale === "ar";
  const headlineFont = isArabic
    ? "var(--font-amiri), 'Amiri', serif"
    : "var(--font-newsreader), 'Newsreader', serif";
  const bodyFont = isArabic
    ? "var(--font-ibm-plex-arabic), sans-serif"
    : "var(--font-space-grotesk), sans-serif";

  // Timeline layout: alternating which side has date/title vs description
  // In English: even items have date on left, odd items have date on right
  // In Arabic: reversed
  const timelineItems = dict.events.map((event, i) => {
    const isEven = i % 2 === 0;
    return { ...event, isEven };
  });

  return (
    <section className="py-32 px-12 bg-surface">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
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
        </motion.div>

        <div className="relative py-12">
          {/* Center line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className={`absolute ${isArabic ? "right-1/2 translate-x-1/2" : "left-1/2 -translate-x-1/2"} top-0 bottom-0 w-[0.5px] bg-outline-variant/30 origin-top`}
          />

          {timelineItems.map((event, i) => {
            const isLast = i === timelineItems.length - 1;
            const dotColor =
              i % 2 === 0 ? "bg-white" : "bg-surface-tint";

            // For English:
            // Even: left=date+title, right=description
            // Odd:  left=description, right=date+title
            // For Arabic: the visual sides swap due to RTL, so we mirror
            const dateOnLeft = isArabic ? !event.isEven : event.isEven;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                className={`relative ${isLast ? "" : "mb-32"} flex justify-between items-center w-full`}
              >
                {/* Left side */}
                <div className={`w-5/12 ${dateOnLeft ? (isArabic ? "text-left" : "text-right") : (isArabic ? "text-right" : "text-left")}`}>
                  {dateOnLeft ? (
                    <>
                      <p
                        className="text-xs text-surface-tint uppercase tracking-widest"
                        style={{ fontFamily: bodyFont }}
                      >
                        {event.date}
                      </p>
                      <h5
                        className="text-white mt-2"
                        style={{
                          fontFamily: headlineFont,
                          fontSize: isArabic ? "1.875rem" : "1.5rem",
                        }}
                      >
                        {event.title}
                      </h5>
                    </>
                  ) : (
                    <p
                      className="text-on-surface-variant leading-relaxed"
                      style={{
                        fontFamily: bodyFont,
                        fontSize: isArabic ? "0.875rem" : "0.75rem",
                      }}
                    >
                      {event.description}
                    </p>
                  )}
                </div>

                {/* Dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.15 + 0.3 }}
                  className={`w-2 h-2 ${dotColor} rounded-full z-10 border-4 border-surface outline outline-1 outline-outline-variant`}
                />

                {/* Right side */}
                <div className={`w-5/12 ${dateOnLeft ? (isArabic ? "text-right" : "text-left") : (isArabic ? "text-left" : "text-right")}`}>
                  {dateOnLeft ? (
                    <p
                      className="text-on-surface-variant leading-relaxed"
                      style={{
                        fontFamily: bodyFont,
                        fontSize: isArabic ? "0.875rem" : "0.75rem",
                      }}
                    >
                      {event.description}
                    </p>
                  ) : (
                    <>
                      <p
                        className="text-xs text-surface-tint uppercase tracking-widest"
                        style={{ fontFamily: bodyFont }}
                      >
                        {event.date}
                      </p>
                      <h5
                        className="text-white mt-2"
                        style={{
                          fontFamily: headlineFont,
                          fontSize: isArabic ? "1.875rem" : "1.5rem",
                        }}
                      >
                        {event.title}
                      </h5>
                    </>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
