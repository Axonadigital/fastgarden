"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const } },
};

export function Partners() {
  return (
    <section
      id="samarbeten"
      className="bg-[var(--color-bg-warm)] py-24 md:py-32"
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8 lg:px-16">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start"
        >
          <div className="md:col-span-5">
            <p className="overline !text-[var(--color-accent)]">Samarbeten</p>
            <h2 className="h2-display mt-5 text-[var(--color-text)]">
              Tillsammans med byggare som tar exklusiva projekt på allvar
            </h2>
          </div>

          <div className="md:col-span-7">
            <a
              href="https://residensbygg.se"
              target="_blank"
              rel="noopener"
              className="group block border-t border-[var(--color-border-dark)] pt-8 md:pt-10 transition-colors hover:border-[var(--color-accent)]"
            >
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="font-serif text-[clamp(1.5rem,3vw,2rem)] text-[var(--color-text)] leading-tight">
                    Residensbygg
                  </p>
                  <p className="mt-3 text-[13px] uppercase tracking-[0.12em] text-[var(--color-text-light)]">
                    Åre · Storhogna · Stockholm
                  </p>
                </div>
                <ArrowUpRight
                  size={28}
                  strokeWidth={1.25}
                  className="shrink-0 text-[var(--color-warm)] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </div>
              <p className="mt-6 text-[var(--color-text-muted)] max-w-xl">
                Vi har ett nära samarbete med Residensbygg sedan flera år tillbaka.
                Många av husen som syns i deras portfolio är ritade av oss — från
                första skiss till färdiga bygghandlingar.
              </p>
              <p className="mt-4 text-[13px] text-[var(--color-accent)] font-medium underline-offset-4 group-hover:underline">
                residensbygg.se
              </p>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
