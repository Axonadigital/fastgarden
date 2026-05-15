"use client";

import { motion } from "framer-motion";
import { Camera } from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const } },
};

const STATS = [
  { value: "2015", label: "Verksam sedan" },
  { value: "Hedegården", label: "Bas i Oviken" },
  { value: "Hela landet", label: "Verksamhetsområde" },
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
            <div className="relative bg-[var(--color-accent-muted)] border border-[var(--color-accent)]/20 aspect-[3/4] overflow-hidden flex flex-col items-center justify-center">
              <div
                aria-hidden
                className="absolute inset-0 opacity-[0.08]"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(45deg, var(--color-accent) 0, var(--color-accent) 1px, transparent 1px, transparent 12px)",
                }}
              />
              <Camera
                size={48}
                strokeWidth={1}
                className="relative text-[var(--color-accent)]"
              />
              <p className="relative mt-5 text-[11px] uppercase tracking-[0.18em] text-[var(--color-accent)] font-medium">
                Hedegården · Bild kommer
              </p>
              <p className="relative mt-4 font-serif text-2xl text-[var(--color-text)] text-center px-8 leading-tight">
                Matsalen där det började
              </p>
              <p className="relative mt-3 text-[12px] uppercase tracking-[0.15em] text-[var(--color-text-muted)] text-center px-6">
                Timmer · Generationer · Tradition
              </p>
            </div>
            <p className="mt-4 text-[12px] uppercase tracking-[0.15em] text-[var(--color-text-light)] text-center">
              Freddy Martinsson · Hedegården, Oviken
            </p>
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
              Med rötter i en släktgård och blick mot fjällen
            </h2>

            <div className="mt-8 space-y-5 text-[var(--color-text-muted)]">
              <p>
                Fastgården drivs av Freddy Martinsson, byggingenjör och fristående
                byggkonsult sedan 2015. Bas på <strong className="text-[var(--color-text)] font-medium">Hedegården i Oviken</strong> — en släktgård som
                gått i arv genom generationer. Härifrån ritar vi exklusiva
                fritids- och bostadshus med uppdrag i hela landet, ofta i samarbete
                med byggare som specialiserat sig på det exklusiva segmentet.
              </p>
              <p>
                Mycket av det vi ritar idag har sina rötter i gårdens egna
                snickerier — trappor, profiler, fast inredning och möbler som
                tagits fram av tidigare generationer. Det är därifrån intresset
                kommer, och det är där hantverket lever vidare. Tradition och
                omtanke är inte tomma ord — det är hur vi jobbar varje dag.
              </p>
              <p>
                Vi hjälper dig att ta dig från din idé till färdig byggnad med
                ritningsstöd — i tidiga skeden, genom bygglovsprocessen och i
                kontakten med kommun, konstruktörer och installatörer. Mycket
                handlar om att vara handen däremellan: mellan idén och
                verkligheten, mellan byggherren och byråkratin.
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
                  <dt className="font-serif text-[clamp(1.2rem,2.5vw,1.8rem)] text-[var(--color-accent)] leading-none">
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
