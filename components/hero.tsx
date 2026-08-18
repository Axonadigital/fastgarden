"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, ArrowDown } from "lucide-react";
import { COMPANY } from "@/lib/company";

const stagger = {
  hidden: { opacity: 1 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const } },
};

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[92dvh] flex items-center justify-center pt-32 md:pt-36 pb-20 overflow-hidden"
    >
      <Image
        src="/images/oviksfjällen.jpg"
        alt="Vy över Oviksfjällen, Jämtland"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center -z-20"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[var(--color-bg)]/70 backdrop-blur-[1px]"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-b from-transparent to-[var(--color-bg)]"
      />
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="relative max-w-3xl mx-auto px-5 md:px-8 text-center"
      >
        <motion.p
          variants={item}
          className="text-[12px] uppercase tracking-[0.15em] font-medium text-[var(--color-warm)] flex items-center justify-center gap-3"
        >
          <span className="h-px w-6 bg-[var(--color-warm)]" />
          Tradition · Kvalitet · Omtanke
          <span className="h-px w-6 bg-[var(--color-warm)]" />
        </motion.p>

        <motion.h1 variants={item} className="h1-display mt-6 text-[var(--color-text)]">
          När tradition och omtanke är en del av framtiden
        </motion.h1>

        <motion.div
          variants={item}
          className="mx-auto my-10 h-px w-24 bg-[var(--color-accent)]"
        />

        <motion.p
          variants={item}
          className="text-[var(--color-text-muted)] max-w-xl mx-auto"
        >
          Vi hjälper dig att ta dig från din idé till färdig byggnad med ritningsstöd — genom skiss, bygglov och hela vägen fram.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <a
            href={COMPANY.phone.href}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[var(--color-accent)] hover:bg-[var(--color-accent-light)] text-white px-7 py-3.5 text-[15px] font-medium transition-colors min-h-[48px]"
          >
            <Phone size={16} strokeWidth={1.5} />
            Ring Freddy
          </a>
          <a
            href="#projekt"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-[var(--color-border-dark)] hover:border-[var(--color-text)] text-[var(--color-text)] px-7 py-3.5 text-[15px] font-medium transition-colors min-h-[48px]"
          >
            Se projekt
            <ArrowDown size={16} strokeWidth={1.5} />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
