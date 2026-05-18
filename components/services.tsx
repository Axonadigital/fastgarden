"use client";

import { motion } from "framer-motion";

const SERVICES = [
  {
    name: "Projektering och bygghandlingar",
    description:
      "Skisser, ritningar och kompletta bygghandlingar i CAD — från första idé till underlag redo för produktion. Mycket av inspirationen kommer från snickerier och detaljer på Hedegården.",
  },
  {
    name: "Bygglovsprocess och myndighetskontakt",
    description:
      "Vi tar fram underlag, lämnar in och sköter dialogen med kommunen — handen däremellan dig som byggherre och myndigheterna.",
  },
  {
    name: "Projektledningsstöd och tekniska utredningar",
    description:
      "Stöd genom byggets gång och utredningar i samarbete med konstruktörer och installatörer — så att helheten håller hela vägen.",
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const } },
};

export function Services() {
  return (
    <section
      id="tjanster"
      className="bg-[var(--color-bg-warm)] py-24 md:py-32 lg:py-40"
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8 lg:px-16">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="max-w-2xl"
        >
          <p className="overline !text-[var(--color-accent)]">Tjänster</p>
          <h2 className="h2-display mt-5 text-[var(--color-text)]">
            Från idé till färdig byggnad
          </h2>
          <p className="mt-6 text-[var(--color-text-muted)]">
            Vi hjälper dig att ta dig från din idé till färdig byggnad med
            ritningsstöd — genom tidiga skeden, bygglov och hela vägen fram till
            produktion.
          </p>
        </motion.div>

        <ul className="mt-16 md:mt-20 border-t border-[var(--color-border)]">
          {SERVICES.map((service, idx) => (
            <motion.li
              key={service.name}
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              className="group border-b border-[var(--color-border)] transition-colors hover:bg-[var(--color-bg)]/50"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-8 md:py-10 px-1">
                <div className="md:col-span-4 flex items-baseline gap-5">
                  <span className="font-serif text-[22px] text-[var(--color-warm)] leading-none">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-[18px] md:text-[20px] font-medium text-[var(--color-text)] leading-snug">
                    {service.name}
                  </h3>
                </div>
                <p className="md:col-span-8 text-[var(--color-text-muted)] md:pl-4">
                  {service.description}
                </p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
