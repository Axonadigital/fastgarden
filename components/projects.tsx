"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
      { src: "/images/projects/timmerhus-i-storhogna/timmerhus-i-storhogna-hero.webp", alt: "Timmerhus i Storhogna, exteriör i fjällmiljö" },
      { src: "/images/projects/timmerhus-i-storhogna/timmerhus-i-storhogna-08.webp", alt: "Timmerhus i Storhogna, detalj" },
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
    images: [
      { src: "/images/projects/timmerhus-i-sadeln-are/timmerhus-i-sadeln-are-hero.webp", alt: "Timmerhus i Sadeln, Åre" },
      { src: "/images/projects/timmerhus-i-sadeln-are/timmerhus-i-sadeln-are-01.webp", alt: "Timmerhus i Sadeln, Åre — detalj" },
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
      { src: "/images/projects/stavlafthus-i-storhogna/stavlafthus-i-storhogna-hero.jpg", alt: "Stavlafthus i Storhogna" },
      { src: "/images/projects/stavlafthus-i-storhogna/stavlafthus-i-storhogna-02.webp", alt: "Stavlafthus i Storhogna — detalj" },
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
      { src: "/images/projects/bathus-are/bathus-are-hero.jpg", alt: "Båthus i Åre, exteriör" },
      { src: "/images/projects/bathus-are/bathus-are-03.jpg", alt: "Båthus i Åre — detalj" },
    ],
    tags: ["Båthus", "Mindre projekt", "Åre"],
  },
];

const AUTOPLAY_MS = 7000;

export function Projects() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const slide = PROJECTS[index];
  const hasOverlay = slide.images.length > 1;

  const goTo = useCallback((next: number) => {
    setIndex(((next % PROJECTS.length) + PROJECTS.length) % PROJECTS.length);
  }, []);

  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  useEffect(() => {
    if (paused) return;
    const id = setTimeout(next, AUTOPLAY_MS);
    return () => clearTimeout(id);
  }, [index, paused, next]);

  return (
    <section
      id="projekt"
      className="relative bg-[var(--color-bg-dark)] text-white overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="Referensprojekt"
    >
      <div className="relative min-h-[640px] md:min-h-[760px] lg:min-h-[820px] flex items-center">
        {/* Bakgrundsbild — cross-fader mellan slides */}
        <AnimatePresence mode="sync">
          <motion.div
            key={`bg-${index}`}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={slide.images[0].src}
              alt={slide.images[0].alt}
              fill
              priority={index === 0}
              sizes="100vw"
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>

        {/* Mörk overlay för läsbarhet */}
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/45 to-black/25"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/20"
        />

        {/* Sektionsrubrik — diskret överst */}
        <div className="absolute top-8 md:top-12 left-0 right-0 z-10">
          <div className="max-w-6xl mx-auto px-5 md:px-8 lg:px-16">
            <p className="overline !text-[var(--color-warm-light)]">
              Referensprojekt {String(index + 1).padStart(2, "0")} / {String(PROJECTS.length).padStart(2, "0")}
            </p>
          </div>
        </div>

        {/* Huvudinnehåll */}
        <div className="relative z-10 w-full max-w-6xl mx-auto px-5 md:px-8 lg:px-16 py-24 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 items-center">
            {/* Text */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`text-${index}`}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="md:col-span-7 lg:col-span-6 max-w-2xl"
              >
                <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--color-warm-light)] font-medium">
                  {slide.location} · {slide.year}
                </p>
                <h2 className="font-serif text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.05] mt-5">
                  {slide.name}
                </h2>
                <p className="font-serif italic text-[clamp(1rem,1.6vw,1.2rem)] text-[var(--color-warm-light)] mt-5">
                  {slide.role}
                </p>
                <p className="mt-6 text-white/85 text-[15px] md:text-[16px] leading-relaxed max-w-xl">
                  {slide.description}
                </p>

                <ul className="mt-7 flex flex-wrap gap-2">
                  {slide.tags.map((tag) => (
                    <li
                      key={tag}
                      className="text-[11px] uppercase tracking-[0.12em] text-white/70 border border-white/25 px-2.5 py-1"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>

            {/* Polaroid-kort */}
            {hasOverlay && (
              <div className="md:col-span-5 lg:col-span-6 relative md:flex md:justify-end">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`overlay-${index}`}
                    initial={{ opacity: 0, scale: 0.94, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="relative w-full max-w-[420px] aspect-[3/4] mx-auto md:mx-0 overflow-hidden rounded-[24px] border-[6px] border-white/95 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)]"
                  >
                    <Image
                      src={slide.images[1].src}
                      alt={slide.images[1].alt}
                      fill
                      sizes="(max-width: 768px) 80vw, 40vw"
                      className="object-cover"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            )}
          </div>
        </div>

        {/* Prev / Next-knappar */}
        <button
          type="button"
          onClick={prev}
          aria-label="Föregående projekt"
          className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-white/10 border border-white/25 backdrop-blur-md text-white hover:bg-white/20 transition-colors"
        >
          <ChevronLeft size={22} strokeWidth={1.5} />
        </button>
        <button
          type="button"
          onClick={next}
          aria-label="Nästa projekt"
          className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-white/10 border border-white/25 backdrop-blur-md text-white hover:bg-white/20 transition-colors"
        >
          <ChevronRight size={22} strokeWidth={1.5} />
        </button>

        {/* Dots */}
        <div className="absolute bottom-7 md:bottom-10 left-0 right-0 z-20 flex justify-center gap-3">
          {PROJECTS.map((p, i) => (
            <button
              key={p.name}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Gå till projekt ${i + 1}: ${p.name}`}
              aria-current={i === index}
              className={`h-1.5 transition-all duration-500 ${
                i === index
                  ? "w-10 bg-[var(--color-warm)]"
                  : "w-5 bg-white/35 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
