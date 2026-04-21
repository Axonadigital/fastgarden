"use client";

import { motion } from "framer-motion";
import { Ruler } from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const } },
};

const STATS = [
  { value: "2015", label: "Verksam sedan" },
  { value: "KA", label: "Certifierad kontrollansvarig" },
  { value: "Jämtland", label: "Baserade i Oviken" },
];

export function About() {
  return (
    <section
      id="om-oss"
      className="bg-[var(--color-bg-warm)] py-24 md:py-32 lg:py-40"
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-start">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="md:col-span-5"
          >
            <div
              className="relative bg-[var(--color-accent-muted)] border border-[var(--color-accent)]/20 aspect-[3/4] flex flex-col items-center justify-center overflow-hidden"
            >
              <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: "repeating-linear-gradient(45deg, var(--color-accent) 0, var(--color-accent) 1px, transparent 1px, transparent 12px)" }} />
              <Ruler
                size={64}
                strokeWidth={1}
                className="relative text-[var(--color-accent)]"
              />
              <p className="relative mt-6 font-serif text-xl text-[var(--color-text)] text-center px-8 leading-tight">
                Freddy Martinsson
              </p>
              <p className="relative mt-2 text-[13px] text-[var(--color-accent)] uppercase tracking-[0.15em]">
                Byggingenjör
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="md:col-span-7"
          >
            <p className="overline !text-[var(--color-warm)]">Om Fastgården</p>
            <h2 className="h2-display mt-5 text-[var(--color-text)]">
              Byggingenjör med lokal förankring
            </h2>

            <div className="mt-8 space-y-5 text-[var(--color-text-muted)]">
              <p>
                Fastgården drivs av Freddy Martinsson, byggingenjör verksam i Oviken
                sedan 2015. Med bas i Jämtland erbjuder vi konsulttjänster inom
                projektering, byggledning och kontrollansvar — för privatpersoner,
                företag och organisationer.
              </p>
              <p>
                Vi jobbar i CAD-miljö och tar fram allt från tidiga skisser till
                färdiga bygghandlingar inom främst disciplin A. Som certifierad
                kontrollansvarig enligt PBL stöttar vi byggherrar genom hela
                processen — från första idé till slutbesiktning.
              </p>
              <p>
                Tradition, kvalitet och omtanke — det är inte bara ord. Det är hur
                vi jobbar. Varje projekt, oavsett storlek, förtjänar samma
                noggrannhet och engagemang.
              </p>
            </div>

            <dl className="mt-12 grid grid-cols-3 border-t border-[var(--color-border)]">
              {STATS.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`py-6 ${
                    i > 0 ? "border-l border-[var(--color-border)] pl-5" : "pr-5"
                  }`}
                >
                  <dt className="font-serif text-[clamp(1.5rem,3vw,2rem)] text-[var(--color-accent)] leading-none">
                    {stat.value}
                  </dt>
                  <dd className="mt-3 text-[11px] md:text-[12px] uppercase tracking-[0.12em] text-[var(--color-text-light)] leading-snug">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </dl>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
