"use client";

import { motion } from "framer-motion";
import { CheckCircle, FileText, MessageSquare, PenTool } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Step = { title: string; description: string; Icon: LucideIcon };

const STEPS: Step[] = [
  {
    title: "Samtal",
    description: "Vi lyssnar på dina behov och diskuterar projektets förutsättningar.",
    Icon: MessageSquare,
  },
  {
    title: "Skiss",
    description: "Tidiga skisser och illustrationer som visualiserar idén.",
    Icon: PenTool,
  },
  {
    title: "Handlingar",
    description: "Kompletta bygghandlingar, ritningar och beskrivningar i CAD.",
    Icon: FileText,
  },
  {
    title: "Uppföljning",
    description:
      "Projektledning, kontrollansvar och kvalitetssäkring genom hela bygget.",
    Icon: CheckCircle,
  },
];

const header = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const } },
};

export function Process() {
  return (
    <section className="bg-[var(--color-bg)] py-24 md:py-32 lg:py-40">
      <div className="max-w-6xl mx-auto px-5 md:px-8 lg:px-16">
        <motion.div
          variants={header}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="max-w-2xl"
        >
          <p className="overline !text-[var(--color-accent)]">Så jobbar vi</p>
          <h2 className="h2-display mt-5 text-[var(--color-text)]">
            Från idé till inflyttning
          </h2>
        </motion.div>

        <motion.ol
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ visible: { transition: { staggerChildren: 0.18, delayChildren: 0.15 } } }}
          className="mt-20 hidden md:grid grid-cols-4 gap-6 relative"
        >
          {STEPS.map((step, idx) => (
            <motion.li
              key={step.title}
              variants={{
                hidden: { opacity: 0, y: 12 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
              }}
              className="relative flex flex-col items-start"
            >
              {idx < STEPS.length - 1 && (
                <motion.span
                  variants={{
                    hidden: { scaleX: 0 },
                    visible: { scaleX: 1, transition: { duration: 0.9, ease: "easeInOut" } },
                  }}
                  style={{ transformOrigin: "left" }}
                  className="absolute left-14 top-6 h-px bg-[var(--color-border-dark)]"
                  // width covers gap between circles
                  // 48px circle + gap
                  // We position from right of circle to next circle start
                  // Use calc inside a inline-block with width 100%
                  // Actually simpler: set right:-24px to extend into gap
                  // But we want the line between circles only.
                />
              )}
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[var(--color-accent)] text-white shadow-[0_0_0_4px_var(--color-accent-muted)]">
                <step.Icon size={20} strokeWidth={1.5} />
              </div>
              <div className="mt-6">
                <p className="overline">Steg {String(idx + 1).padStart(2, "0")}</p>
                <h3 className="text-[18px] font-medium text-[var(--color-text)] mt-2">
                  {step.title}
                </h3>
                <p className="mt-3 text-[15px] text-[var(--color-text-muted)] leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.li>
          ))}

          {/* Horizontal connecting line behind circles */}
          <motion.span
            aria-hidden
            variants={{
              hidden: { scaleX: 0 },
              visible: { scaleX: 1, transition: { duration: 1.2, ease: "easeInOut" } },
            }}
            style={{ transformOrigin: "left" }}
            className="absolute top-6 left-12 right-12 h-px bg-[var(--color-border)] -z-0"
          />
        </motion.ol>

        {/* Mobile */}
        <ol className="mt-16 md:hidden flex flex-col gap-10 relative">
          {STEPS.map((step, idx) => (
            <motion.li
              key={step.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex gap-5"
            >
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center w-12 h-12 rounded-full border border-[var(--color-border-dark)] bg-[var(--color-bg)] text-[var(--color-accent)]">
                  <step.Icon size={20} strokeWidth={1.5} />
                </div>
                {idx < STEPS.length - 1 && (
                  <span className="flex-1 w-px bg-[var(--color-border-dark)] mt-3" />
                )}
              </div>
              <div className="pb-2 flex-1">
                <p className="overline">Steg {String(idx + 1).padStart(2, "0")}</p>
                <h3 className="text-[18px] font-medium text-[var(--color-text)] mt-1.5">
                  {step.title}
                </h3>
                <p className="mt-2 text-[15px] text-[var(--color-text-muted)] leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
