"use client";

import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const } },
};

export function QuoteSection() {
  return (
    <section className="bg-[var(--color-bg)] py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-5 md:px-8">
        <div className="border-t border-[var(--color-border)]" />
        <motion.blockquote
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="py-16 md:py-20 text-center"
        >
          <span aria-hidden className="block font-serif text-[5rem] leading-none text-[var(--color-warm)] mb-2 select-none">&ldquo;</span>
          <p className="font-serif italic text-[clamp(1.5rem,3.2vw,2.25rem)] leading-[1.3] text-[var(--color-text)] max-w-3xl mx-auto">
            Varje byggprojekt börjar med en idé — vår uppgift är att förvandla
            den till verklighet, med precision och omsorg i varje detalj.
          </p>
          <footer className="mt-10 text-[13px] uppercase tracking-[0.15em] text-[var(--color-text-light)]">
            — Freddy Martinsson
          </footer>
        </motion.blockquote>
        <div className="border-t border-[var(--color-border)]" />
      </div>
    </section>
  );
}
