"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface LightboxProps {
  images: string[];
  alt: string;
  initialIndex: number;
  open: boolean;
  onClose: () => void;
}

export function Lightbox({ images, alt, initialIndex, open, onClose }: LightboxProps) {
  const [index, setIndex] = useState(initialIndex);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    if (open) setIndex(initialIndex);
  }, [open, initialIndex]);

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % images.length);
  }, [images.length]);

  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, next, prev, onClose]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 50) {
      if (dx > 0) prev();
      else next();
    }
    touchStartX.current = null;
  };

  if (images.length === 0) return null;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Bildvisning"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[120] bg-black/95 flex items-center justify-center"
          onClick={onClose}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Stäng-knapp */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            aria-label="Stäng bildvisning"
            className="absolute top-4 right-4 md:top-6 md:right-6 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-white hover:bg-white/20 transition-colors"
          >
            <X size={20} strokeWidth={1.5} />
          </button>

          {/* Föregående */}
          {images.length > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              aria-label="Föregående bild"
              className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-white hover:bg-white/20 transition-colors"
            >
              <ChevronLeft size={22} strokeWidth={1.5} />
            </button>
          )}

          {/* Nästa */}
          {images.length > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              aria-label="Nästa bild"
              className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-white hover:bg-white/20 transition-colors"
            >
              <ChevronRight size={22} strokeWidth={1.5} />
            </button>
          )}

          {/* Bildyta */}
          <div
            className="relative w-full h-full p-4 md:p-16 flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="relative w-full h-full max-w-6xl max-h-[85vh]"
              >
                <Image
                  src={images[index]}
                  alt={`${alt} — bild ${index + 1} av ${images.length}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 85vw"
                  className="object-contain"
                  priority
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Räknare */}
          <div className="absolute bottom-5 md:bottom-7 left-0 right-0 z-10 flex justify-center">
            <div className="bg-white/10 border border-white/15 backdrop-blur-md px-4 py-2 text-[12px] uppercase tracking-[0.18em] text-white/90">
              {index + 1} / {images.length}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
