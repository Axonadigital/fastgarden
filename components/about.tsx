"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const } },
};

const STATS = [
  { value: "2015", label: "Verksam sedan" },
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
            <div className="relative aspect-[3/4] overflow-hidden shadow-[0_20px_60px_-20px_rgba(74,93,76,0.25)]">
              <Image
                src="/images/fjällen-vinter.webp"
                alt="Vinterpanorama över Oviksfjällen"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
            <p className="mt-4 text-[12px] uppercase tracking-[0.15em] text-[var(--color-text-light)] text-center">
              Oviksfjällen, Jämtland
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
                Fastgården drivs av Freddy Martinsson, fristående byggkonsult
                sedan 2015 med bas i Oviken. Uppdrag i fjällvärlden kring Åre
                och Storhogna såväl som i övriga landet — från idé till färdig
                byggnad med ritningsstöd genom skiss, bygglov och
                bygghandlingar.
              </p>
              <p>
                Vi har ett nära samarbete med{" "}
                <a
                  href="https://residensbygg.se"
                  target="_blank"
                  rel="noopener"
                  className="text-[var(--color-accent)] font-medium underline-offset-4 hover:underline inline-flex items-center gap-1"
                >
                  Residensbygg
                  <ArrowUpRight size={15} strokeWidth={1.5} />
                </a>{" "}
                sedan flera år tillbaka.
              </p>
            </div>

            <dl className="mt-12 grid grid-cols-2 border-t border-[var(--color-border)]">
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
