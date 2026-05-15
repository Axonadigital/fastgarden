"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type ProjectImage = {
  src: string;
  alt: string;
};

type Project = {
  name: string;
  location: string;
  year: string;
  role: string;
  description: string;
  images: ProjectImage[];
  tags: string[];
};

const PROJECTS: Project[] = [
  {
    name: "Timmerhus, Storhogna",
    location: "Vemdalen",
    year: "2024",
    role: "Projektering, ritningar & utemiljö",
    description:
      "Komplett ritningspaket för exklusivt fritidshus i timmer. Garage, entré och utemiljön ritades i nära samarbete med byggaren.",
    images: [
      { src: "/images/projects/storhogna-timmerhus-1-exterior.webp", alt: "Timmerhus i Storhogna, exteriör i fjällmiljö" },
      { src: "/images/projects/storhogna-timmerhus-2-interior.webp", alt: "Timmerhus i Storhogna, interiör" },
      { src: "/images/projects/storhogna-timmerhus-3-utemiljo.webp", alt: "Timmerhus i Storhogna, utemiljö och entré" },
    ],
    tags: ["Fritidshus", "Timmer", "Nybyggnation"],
  },
  {
    name: "Prisbelönt timmerhus, Åre",
    location: "Åre",
    year: "2023",
    role: "Hus, fönster & fast inredning",
    description:
      "Hus, fönster och fast inredning i ett internationellt prisbelönt inredningsprojekt. Möbler och detaljer ritade på millimetern.",
    images: [
      { src: "/images/projects/are-timmerhus-1-exterior.webp", alt: "Prisbelönt timmerhus i Åre, exteriör" },
      { src: "/images/projects/are-timmerhus-2-interior.webp", alt: "Prisbelönt timmerhus i Åre, interiör med specialritade möbler" },
    ],
    tags: ["Fritidshus", "Inredning", "Prisbelönt"],
  },
  {
    name: "Timmerhus i Sadeln",
    location: "Åre",
    year: "2025",
    role: "Projektering & bygglov",
    description:
      "Ett av de senaste projekten — fritidshus i timmer med utsikt över fjällvärlden. Från första skiss till färdiga bygghandlingar.",
    images: [
      { src: "/images/projects/are-sadeln-1-exterior.webp", alt: "Timmerhus i Sadeln, Åre" },
    ],
    tags: ["Fritidshus", "Timmer", "Åre"],
  },
  {
    name: "Stavlafthus, Storhogna",
    location: "Vemdalen",
    year: "2024",
    role: "Projektering & detaljritningar",
    description:
      "Stavlaftat fritidshus med traditionellt formspråk och modern komfort. Detaljritningar för snickerier, profiler och utförande.",
    images: [
      { src: "/images/projects/storhogna-stavlafthus-1-exterior.jpg", alt: "Stavlafthus i Storhogna" },
    ],
    tags: ["Fritidshus", "Stavlaft", "Tradition"],
  },
  {
    name: "Båthus, Åre",
    location: "Åre",
    year: "2024",
    role: "Projektering",
    description:
      "Mindre projekt med stort karaktärsanslag — båthus ritat i samklang med omgivande fjäll- och vattenmiljö.",
    images: [
      { src: "/images/projects/are-bathus-1-exterior.jpg", alt: "Båthus i Åre, exteriör" },
    ],
    tags: ["Båthus", "Mindre projekt", "Åre"],
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const } },
};

function ProjectComposition({
  project,
  flip,
}: {
  project: Project;
  flip: boolean;
}) {
  const [main, ...overlays] = project.images;

  if (project.images.length === 1) {
    return (
      <div className="relative aspect-[16/10] md:aspect-[16/9] overflow-hidden rounded-[18px] md:rounded-[24px] shadow-[0_20px_60px_-20px_rgba(74,93,76,0.25)]">
        <Image
          src={main.src}
          alt={main.alt}
          fill
          sizes="(max-width: 768px) 100vw, 80vw"
          className="object-cover"
        />
      </div>
    );
  }

  return (
    <div className={`relative ${flip ? "md:[direction:rtl]" : ""}`}>
      {/* Huvudbild — stor bakgrund */}
      <div className="relative aspect-[4/3] md:aspect-[16/10] overflow-hidden rounded-[18px] md:rounded-[24px] md:[direction:ltr] shadow-[0_20px_60px_-20px_rgba(74,93,76,0.25)]">
        <Image
          src={main.src}
          alt={main.alt}
          fill
          sizes="(max-width: 768px) 100vw, 75vw"
          className="object-cover"
          priority={false}
        />
      </div>

      {/* Polaroid 1 — flyter ovanpå nedre högra hörnet */}
      {overlays[0] && (
        <div
          className={`absolute z-10 w-[48%] md:w-[34%] aspect-[3/4] overflow-hidden rounded-[16px] md:rounded-[20px] border-[3px] md:border-[6px] border-[var(--color-bg)] shadow-[0_24px_50px_-15px_rgba(0,0,0,0.35)] md:[direction:ltr]
            bottom-[-8%] md:bottom-[-12%]
            ${flip ? "left-[5%] md:left-[6%]" : "right-[5%] md:right-[6%]"}
          `}
        >
          <Image
            src={overlays[0].src}
            alt={overlays[0].alt}
            fill
            sizes="(max-width: 768px) 50vw, 30vw"
            className="object-cover"
          />
        </div>
      )}

      {/* Polaroid 2 — flyter ovanpå övre kanten på motsatt sida */}
      {overlays[1] && (
        <div
          className={`hidden md:block absolute z-10 w-[26%] aspect-[4/5] overflow-hidden rounded-[20px] border-[6px] border-[var(--color-bg)] shadow-[0_24px_50px_-15px_rgba(0,0,0,0.35)] md:[direction:ltr]
            top-[-10%]
            ${flip ? "right-[8%]" : "left-[8%]"}
          `}
        >
          <Image
            src={overlays[1].src}
            alt={overlays[1].alt}
            fill
            sizes="25vw"
            className="object-cover"
          />
        </div>
      )}
    </div>
  );
}

export function Projects() {
  return (
    <section
      id="projekt"
      className="bg-[var(--color-bg)] py-24 md:py-32 lg:py-40 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8 lg:px-16">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="max-w-2xl"
        >
          <p className="overline !text-[var(--color-accent)]">Referensprojekt</p>
          <h2 className="h2-display mt-5 text-[var(--color-text)]">
            Hus som talar för sig själva
          </h2>
          <p className="mt-6 text-[var(--color-text-muted)]">
            Ett urval av projekt vi ritat — fritidshus i fjällmiljö, exklusiva
            bostäder och detaljarbeten för inredningar i högsta klass. Många
            är gjorda i nära samarbete med Residensbygg.
          </p>
        </motion.div>

        <div className="mt-20 md:mt-28 space-y-32 md:space-y-44">
          {PROJECTS.map((project, idx) => {
            const flip = idx % 2 === 1;
            const hasOverlays = project.images.length > 1;

            return (
              <motion.article
                key={project.name}
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                className={`grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14 items-center ${
                  hasOverlays ? "pb-16 md:pb-24" : ""
                }`}
              >
                <div
                  className={`md:col-span-8 ${
                    flip ? "md:order-2" : "md:order-1"
                  }`}
                >
                  <ProjectComposition project={project} flip={flip} />
                </div>

                <div
                  className={`md:col-span-4 ${
                    flip ? "md:order-1 md:pr-4" : "md:order-2 md:pl-4"
                  }`}
                >
                  <p className="overline">
                    Projekt {String(idx + 1).padStart(2, "0")}
                  </p>
                  <h3 className="font-serif text-[clamp(1.6rem,3vw,2.25rem)] text-[var(--color-text)] mt-3 leading-tight">
                    {project.name}
                  </h3>
                  <p className="mt-3 text-[13px] text-[var(--color-text-light)] uppercase tracking-[0.1em]">
                    {project.location} · {project.year}
                  </p>

                  <p className="mt-6 font-serif italic text-[15px] text-[var(--color-warm)] leading-relaxed">
                    {project.role}
                  </p>
                  <p className="mt-4 text-[15px] text-[var(--color-text-muted)] leading-relaxed">
                    {project.description}
                  </p>

                  <ul className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="text-[11px] uppercase tracking-[0.12em] text-[var(--color-text-light)] border border-[var(--color-border)] px-2.5 py-1"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            );
          })}
        </div>

        <motion.p
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="mt-24 md:mt-32 text-[13px] text-[var(--color-text-light)] italic max-w-2xl"
        >
          Fler projekt på begäran. Vissa uppdrag delas inte publikt av hänsyn
          till kund och samarbetspartner.
        </motion.p>
      </div>
    </section>
  );
}
