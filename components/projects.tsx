"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { Maximize2 } from "lucide-react";
import { Lightbox } from "./lightbox";
import { PROJECT_GALLERIES } from "@/lib/project-galleries";

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
  gallerySlug: string;
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
    gallerySlug: "timmerhus-i-storhogna",
    images: [
      { src: "/images/projects/timmerhus-i-storhogna/timmerhus-i-storhogna-hero.webp", alt: "Timmerhus i Storhogna, exteriör i fjällmiljö" },
      { src: "/images/projects/timmerhus-i-storhogna/timmerhus-i-storhogna-08.webp", alt: "Timmerhus i Storhogna, interiör" },
      { src: "/images/projects/timmerhus-i-storhogna/timmerhus-i-storhogna-03.webp", alt: "Timmerhus i Storhogna, detalj" },
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
    gallerySlug: "timmerhus-i-are",
    images: [
      { src: "/images/projects/timmerhus-i-are/timmerhus-i-are-hero.webp", alt: "Prisbelönt timmerhus i Åre, exteriör" },
      { src: "/images/projects/timmerhus-i-are/timmerhus-i-are-02.webp", alt: "Prisbelönt timmerhus i Åre, interiör med specialritade möbler" },
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
    gallerySlug: "timmerhus-i-sadeln-are",
    images: [
      { src: "/images/projects/timmerhus-i-sadeln-are/timmerhus-i-sadeln-are-hero.webp", alt: "Timmerhus i Sadeln, Åre" },
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
    gallerySlug: "stavlafthus-i-storhogna",
    images: [
      { src: "/images/projects/stavlafthus-i-storhogna/stavlafthus-i-storhogna-hero.jpg", alt: "Stavlafthus i Storhogna" },
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
    gallerySlug: "bathus-are",
    images: [
      { src: "/images/projects/bathus-are/bathus-are-hero.jpg", alt: "Båthus i Åre, exteriör" },
    ],
    tags: ["Båthus", "Mindre projekt", "Åre"],
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const } },
};

type OpenLightbox = (project: Project, src: string) => void;

function ImageButton({
  src,
  alt,
  sizes,
  onOpen,
  className,
  imageClassName,
  rounded,
  badge = false,
}: {
  src: string;
  alt: string;
  sizes: string;
  onOpen: () => void;
  className: string;
  imageClassName?: string;
  rounded: string;
  badge?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label={`Öppna galleri: ${alt}`}
      className={`group cursor-zoom-in block ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        className={`object-cover transition-transform duration-500 group-hover:scale-[1.02] ${imageClassName ?? ""}`}
      />
      <div
        aria-hidden
        className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/15 ${rounded}`}
      />
      {badge && (
        <div
          aria-hidden
          className="absolute bottom-3 right-3 md:bottom-4 md:right-4 flex items-center gap-2 bg-white/90 backdrop-blur-md text-[var(--color-text)] px-3 py-1.5 text-[11px] uppercase tracking-[0.15em] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <Maximize2 size={12} strokeWidth={1.5} />
          Visa galleri
        </div>
      )}
    </button>
  );
}

function ProjectComposition({
  project,
  flip,
  onOpen,
}: {
  project: Project;
  flip: boolean;
  onOpen: OpenLightbox;
}) {
  const [main, ...overlays] = project.images;

  if (project.images.length === 1) {
    return (
      <ImageButton
        src={main.src}
        alt={main.alt}
        sizes="(max-width: 768px) 100vw, 80vw"
        onOpen={() => onOpen(project, main.src)}
        className="relative aspect-[16/10] md:aspect-[16/9] overflow-hidden rounded-[18px] md:rounded-[24px] shadow-[0_20px_60px_-20px_rgba(74,93,76,0.25)] w-full"
        rounded="rounded-[18px] md:rounded-[24px]"
        badge
      />
    );
  }

  return (
    <div className={`relative ${flip ? "md:[direction:rtl]" : ""}`}>
      <ImageButton
        src={main.src}
        alt={main.alt}
        sizes="(max-width: 768px) 100vw, 75vw"
        onOpen={() => onOpen(project, main.src)}
        className="relative aspect-[4/3] md:aspect-[16/10] overflow-hidden rounded-[18px] md:rounded-[24px] md:[direction:ltr] shadow-[0_20px_60px_-20px_rgba(74,93,76,0.25)] w-full"
        rounded="rounded-[18px] md:rounded-[24px]"
        badge
      />

      {overlays[0] && (
        <ImageButton
          src={overlays[0].src}
          alt={overlays[0].alt}
          sizes="(max-width: 768px) 50vw, 30vw"
          onOpen={() => onOpen(project, overlays[0].src)}
          className={`absolute z-10 w-[48%] md:w-[34%] aspect-[3/4] overflow-hidden rounded-[16px] md:rounded-[20px] border-[3px] md:border-[6px] border-[var(--color-bg)] shadow-[0_24px_50px_-15px_rgba(0,0,0,0.35)] md:[direction:ltr]
            bottom-[-8%] md:bottom-[-12%]
            ${flip ? "left-[5%] md:left-[6%]" : "right-[5%] md:right-[6%]"}
          `}
          rounded="rounded-[16px] md:rounded-[20px]"
        />
      )}

      {overlays[1] && (
        <ImageButton
          src={overlays[1].src}
          alt={overlays[1].alt}
          sizes="25vw"
          onOpen={() => onOpen(project, overlays[1].src)}
          className={`hidden md:block absolute z-10 w-[26%] aspect-[4/5] overflow-hidden rounded-[20px] border-[6px] border-[var(--color-bg)] shadow-[0_24px_50px_-15px_rgba(0,0,0,0.35)] md:[direction:ltr]
            top-[-10%]
            ${flip ? "right-[8%]" : "left-[8%]"}
          `}
          rounded="rounded-[20px]"
        />
      )}
    </div>
  );
}

export function Projects() {
  const [lightbox, setLightbox] = useState<{
    open: boolean;
    gallery: string[];
    alt: string;
    initialIndex: number;
  }>({ open: false, gallery: [], alt: "", initialIndex: 0 });

  const openLightbox: OpenLightbox = (project, src) => {
    const gallery = PROJECT_GALLERIES[project.gallerySlug] ?? project.images.map((i) => i.src);
    const idx = Math.max(0, gallery.indexOf(src));
    setLightbox({
      open: true,
      gallery,
      alt: project.name,
      initialIndex: idx,
    });
  };

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
            <span className="block mt-3 text-[13px] text-[var(--color-text-light)] italic">
              Klicka på en bild för att bläddra genom hela projektgalleriet.
            </span>
          </p>
        </motion.div>

        <div className="mt-20 md:mt-28 space-y-32 md:space-y-44">
          {PROJECTS.map((project, idx) => {
            const flip = idx % 2 === 1;
            const hasOverlays = project.images.length > 1;
            const galleryCount = (PROJECT_GALLERIES[project.gallerySlug] ?? []).length;

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
                <div className={`md:col-span-8 ${flip ? "md:order-2" : "md:order-1"}`}>
                  <ProjectComposition project={project} flip={flip} onOpen={openLightbox} />
                </div>

                <div className={`md:col-span-4 ${flip ? "md:order-1 md:pr-4" : "md:order-2 md:pl-4"}`}>
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

                  {galleryCount > 1 && (
                    <button
                      type="button"
                      onClick={() => openLightbox(project, project.images[0].src)}
                      className="mt-6 inline-flex items-center gap-2 text-[13px] text-[var(--color-accent)] hover:text-[var(--color-warm)] transition-colors underline-offset-4 hover:underline"
                    >
                      Se alla {galleryCount} bilder
                      <Maximize2 size={13} strokeWidth={1.5} />
                    </button>
                  )}
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

      <Lightbox
        images={lightbox.gallery}
        alt={lightbox.alt}
        initialIndex={lightbox.initialIndex}
        open={lightbox.open}
        onClose={() => setLightbox((s) => ({ ...s, open: false }))}
      />
    </section>
  );
}
