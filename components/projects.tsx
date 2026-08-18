"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { Lightbox } from "./lightbox";
import { PROJECT_GALLERIES } from "@/lib/project-galleries";

type ProjectImage = {
  src: string;
  alt: string;
};

type Project = {
  name: string;
  gallerySlug: string;
  images: ProjectImage[];
};

const PROJECTS: Project[] = [
  {
    name: "Timmerhus, Åre",
    gallerySlug: "timmerhus-i-sadeln-are",
    images: [
      { src: "/images/projects/timmerhus-i-sadeln-are/timmerhus-i-sadeln-are-hero.webp", alt: "Timmerhus, Åre" },
      { src: "/images/projects/timmerhus-i-sadeln-are/timmerhus-i-sadeln-are-02.webp", alt: "Timmerhus, Åre — detalj" },
    ],
  },
  {
    name: "Prisbelönt timmerhus, Åre",
    gallerySlug: "timmerhus-i-are",
    images: [
      { src: "/images/projects/timmerhus-i-are/timmerhus-i-are-hero.webp", alt: "Prisbelönt timmerhus i Åre, exteriör" },
      { src: "/images/projects/timmerhus-i-are/timmerhus-i-are-02.webp", alt: "Prisbelönt timmerhus i Åre, interiör med specialritade möbler" },
    ],
  },
  {
    name: "Stavlafthus, Storhogna",
    gallerySlug: "stavlafthus-i-storhogna",
    images: [
      { src: "/images/projects/stavlafthus-i-storhogna/stavlafthus-i-storhogna-hero.jpg", alt: "Stavlafthus i Storhogna" },
      { src: "/images/projects/stavlafthus-i-storhogna/stavlafthus-i-storhogna-01.webp", alt: "Stavlafthus i Storhogna — detalj" },
    ],
  },
  {
    name: "Båthus, Åre",
    gallerySlug: "bathus-are",
    images: [
      { src: "/images/projects/bathus-are/bathus-are-hero.jpg", alt: "Båthus i Åre, exteriör" },
      { src: "/images/projects/bathus-are/bathus-are-03.jpg", alt: "Båthus i Åre — detalj" },
    ],
  },
  {
    name: "Timmerhus, Storhogna",
    gallerySlug: "timmerhus-i-storhogna",
    images: [
      { src: "/images/projects/timmerhus-i-storhogna/timmerhus-i-storhogna-hero.webp", alt: "Timmerhus i Storhogna, exteriör i fjällmiljö" },
      { src: "/images/projects/timmerhus-i-storhogna/timmerhus-i-storhogna-08.webp", alt: "Timmerhus i Storhogna, detalj" },
    ],
  },
];

const AUTOPLAY_MS = 7000;

export function Projects() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [lightbox, setLightbox] = useState<{
    open: boolean;
    gallery: string[];
    alt: string;
    initialIndex: number;
  }>({ open: false, gallery: [], alt: "", initialIndex: 0 });

  const slide = PROJECTS[index];
  const hasOverlay = slide.images.length > 1;
  const fullGallery = PROJECT_GALLERIES[slide.gallerySlug] ?? slide.images.map((i) => i.src);

  const goTo = useCallback((next: number) => {
    setIndex(((next % PROJECTS.length) + PROJECTS.length) % PROJECTS.length);
  }, []);

  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  useEffect(() => {
    if (paused || lightbox.open) return;
    const id = setTimeout(next, AUTOPLAY_MS);
    return () => clearTimeout(id);
  }, [index, paused, lightbox.open, next]);

  const openLightboxAt = (src: string) => {
    const idx = Math.max(0, fullGallery.indexOf(src));
    setLightbox({
      open: true,
      gallery: fullGallery,
      alt: slide.name,
      initialIndex: idx,
    });
  };

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
        <AnimatePresence mode="sync">
          <motion.div
            key={`bg-${index}`}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <button
              type="button"
              onClick={() => openLightboxAt(slide.images[0].src)}
              aria-label={`Öppna galleri för ${slide.name}`}
              className="absolute inset-0 w-full h-full cursor-zoom-in"
            >
              <Image
                src={slide.images[0].src}
                alt={slide.images[0].alt}
                fill
                priority={index === 0}
                sizes="100vw"
                className="object-cover"
              />
            </button>
          </motion.div>
        </AnimatePresence>

        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/45 to-black/25 pointer-events-none"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/20 pointer-events-none"
        />

        <div className="absolute top-8 md:top-12 left-0 right-0 z-10 pointer-events-none">
          <div className="max-w-6xl mx-auto px-5 md:px-8 lg:px-16">
            <p className="overline !text-[var(--color-warm-light)]">
              Projekt {String(index + 1).padStart(2, "0")} / {String(PROJECTS.length).padStart(2, "0")}
            </p>
          </div>
        </div>

        <div className="relative z-10 w-full max-w-6xl mx-auto px-5 md:px-8 lg:px-16 py-24 md:py-32 pointer-events-none">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={`text-${index}`}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="md:col-span-7 lg:col-span-6 max-w-2xl pointer-events-auto"
              >
                <h2 className="font-serif text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.05]">
                  {slide.name}
                </h2>

                {fullGallery.length > 1 && (
                  <button
                    type="button"
                    onClick={() => openLightboxAt(slide.images[0].src)}
                    className="mt-7 inline-flex items-center gap-2 bg-white/10 border border-white/30 backdrop-blur-md text-white px-5 py-2.5 text-[13px] uppercase tracking-[0.12em] hover:bg-[var(--color-warm)] hover:border-[var(--color-warm)] transition-colors"
                  >
                    <Maximize2 size={14} strokeWidth={1.5} />
                    Se alla {fullGallery.length} bilder
                  </button>
                )}
              </motion.div>
            </AnimatePresence>

            {hasOverlay && (
              <div className="md:col-span-5 lg:col-span-6 relative md:flex md:justify-end pointer-events-auto">
                <AnimatePresence mode="wait">
                  <motion.button
                    type="button"
                    key={`overlay-${index}`}
                    initial={{ opacity: 0, scale: 0.94, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    onClick={() => openLightboxAt(slide.images[1].src)}
                    aria-label={`Öppna galleri för ${slide.name}`}
                    className="group relative w-full max-w-[420px] aspect-[3/4] mx-auto md:mx-0 overflow-hidden rounded-[24px] border-[6px] border-white/95 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)] cursor-zoom-in"
                  >
                    <Image
                      src={slide.images[1].src}
                      alt={slide.images[1].alt}
                      fill
                      sizes="(max-width: 768px) 80vw, 40vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    <div
                      aria-hidden
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/15"
                    />
                  </motion.button>
                </AnimatePresence>
              </div>
            )}
          </div>
        </div>

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

        <div className="absolute bottom-7 md:bottom-10 left-0 right-0 z-20 flex justify-center gap-3">
          {PROJECTS.map((p, i) => (
            <button
              key={p.name}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Gå till projekt ${i + 1}: ${p.name}`}
              aria-current={i === index}
              className={`h-1.5 transition-all duration-500 ${
                i === index ? "w-10 bg-[var(--color-warm)]" : "w-5 bg-white/35 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
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
