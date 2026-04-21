"use client";

import { motion } from "framer-motion";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { COMPANY } from "@/lib/company";

const fadeIn = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const } },
};

export function Contact() {
  const mapsSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    `${COMPANY.address.street}, ${COMPANY.address.zip} ${COMPANY.address.city}`,
  )}&output=embed`;

  return (
    <section
      id="kontakt"
      className="bg-[var(--color-bg-dark)] text-white py-24 md:py-32 lg:py-40"
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8 lg:px-16">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="max-w-2xl"
        >
          <p className="text-[12px] uppercase tracking-[0.15em] font-medium text-[var(--color-warm-light)] flex items-center gap-3">
            <span className="h-px w-6 bg-[var(--color-warm-light)]" />
            Kontakt
          </p>
          <h2 className="h2-display mt-5 text-white">Berätta om ditt projekt</h2>
          <p className="mt-6 text-white/70">
            Planerar du att bygga, renovera eller behöver du en kontrollansvarig?
            Hör av dig till Freddy så diskuterar vi ditt projekt.
          </p>
        </motion.div>

        <div className="mt-16 md:mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="space-y-10"
          >
            <a
              href={COMPANY.phone.href}
              className="group block border-t border-white/10 pt-6"
            >
              <p className="text-[11px] uppercase tracking-[0.15em] text-[var(--color-warm-light)] flex items-center gap-2">
                <Phone size={13} strokeWidth={1.5} />
                Telefon
              </p>
              <p className="font-serif text-[clamp(2rem,5vw,2.75rem)] mt-3 text-white group-hover:text-[var(--color-warm-light)] transition-colors leading-none">
                {COMPANY.phone.display}
              </p>
            </a>

            <div className="space-y-5 pt-2">
              <a
                href={`mailto:${COMPANY.email}`}
                className="flex items-start gap-4 text-white/90 hover:text-[var(--color-accent-light)] transition-colors"
              >
                <Mail
                  size={18}
                  strokeWidth={1.5}
                  className="mt-1 text-[var(--color-accent-light)] shrink-0"
                />
                <span className="break-all">{COMPANY.email}</span>
              </a>
              <div className="flex items-start gap-4 text-white/90">
                <MapPin
                  size={18}
                  strokeWidth={1.5}
                  className="mt-1 text-[var(--color-accent-light)] shrink-0"
                />
                <span>
                  {COMPANY.address.street}
                  <br />
                  {COMPANY.address.zip} {COMPANY.address.city}
                </span>
              </div>
              <div className="flex items-start gap-4 text-white/90">
                <Clock
                  size={18}
                  strokeWidth={1.5}
                  className="mt-1 text-[var(--color-accent-light)] shrink-0"
                />
                <span>Vardagar 08:00–17:00</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="w-full"
          >
            <div className="relative w-full aspect-[4/3] border border-white/10 overflow-hidden bg-white/5">
              <iframe
                title={`Karta — ${COMPANY.address.street}, ${COMPANY.address.city}`}
                src={mapsSrc}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full border-0 grayscale contrast-[0.95]"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
