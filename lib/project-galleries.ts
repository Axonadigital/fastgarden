// Auto-genererad lista över alla bilder per projekt-mapp.
// Används av Lightbox-komponenten för att låta besökare bläddra
// igenom hela galleriet när de klickar på en projektbild.

export const PROJECT_GALLERIES: Record<string, string[]> = {
  "timmerhus-i-storhogna": [
    "/images/projects/timmerhus-i-storhogna/timmerhus-i-storhogna-hero.webp",
    "/images/projects/timmerhus-i-storhogna/timmerhus-i-storhogna-01.webp",
    "/images/projects/timmerhus-i-storhogna/timmerhus-i-storhogna-02.webp",
    "/images/projects/timmerhus-i-storhogna/timmerhus-i-storhogna-03.webp",
    "/images/projects/timmerhus-i-storhogna/timmerhus-i-storhogna-04.webp",
    "/images/projects/timmerhus-i-storhogna/timmerhus-i-storhogna-05.webp",
    "/images/projects/timmerhus-i-storhogna/timmerhus-i-storhogna-06.webp",
    "/images/projects/timmerhus-i-storhogna/timmerhus-i-storhogna-08.webp",
  ],
  "timmerhus-i-are": [
    "/images/projects/timmerhus-i-are/timmerhus-i-are-hero.webp",
    "/images/projects/timmerhus-i-are/timmerhus-i-are-02.webp",
    "/images/projects/timmerhus-i-are/timmerhus-i-are-03.webp",
    "/images/projects/timmerhus-i-are/timmerhus-i-are-04.webp",
    "/images/projects/timmerhus-i-are/timmerhus-i-are-05.webp",
    "/images/projects/timmerhus-i-are/timmerhus-i-are-06.webp",
    "/images/projects/timmerhus-i-are/timmerhus-i-are-07.webp",
    "/images/projects/timmerhus-i-are/timmerhus-i-are-08.webp",
    "/images/projects/timmerhus-i-are/timmerhus-i-are-09.webp",
    "/images/projects/timmerhus-i-are/timmerhus-i-are-10.webp",
    "/images/projects/timmerhus-i-are/timmerhus-i-are-11.webp",
    "/images/projects/timmerhus-i-are/timmerhus-i-are-12.webp",
    "/images/projects/timmerhus-i-are/timmerhus-i-are-13.webp",
    "/images/projects/timmerhus-i-are/timmerhus-i-are-14.webp",
  ],
  "timmerhus-i-sadeln-are": [
    "/images/projects/timmerhus-i-sadeln-are/timmerhus-i-sadeln-are-hero.webp",
    "/images/projects/timmerhus-i-sadeln-are/timmerhus-i-sadeln-are-01.webp",
    "/images/projects/timmerhus-i-sadeln-are/timmerhus-i-sadeln-are-02.webp",
    "/images/projects/timmerhus-i-sadeln-are/timmerhus-i-sadeln-are-03.webp",
    "/images/projects/timmerhus-i-sadeln-are/timmerhus-i-sadeln-are-04.webp",
    "/images/projects/timmerhus-i-sadeln-are/timmerhus-i-sadeln-are-05.webp",
    "/images/projects/timmerhus-i-sadeln-are/timmerhus-i-sadeln-are-06.webp",
    "/images/projects/timmerhus-i-sadeln-are/timmerhus-i-sadeln-are-07.webp",
    "/images/projects/timmerhus-i-sadeln-are/timmerhus-i-sadeln-are-08.webp",
    "/images/projects/timmerhus-i-sadeln-are/timmerhus-i-sadeln-are-09.webp",
    "/images/projects/timmerhus-i-sadeln-are/timmerhus-i-sadeln-are-10.webp",
  ],
  "stavlafthus-i-storhogna": [
    "/images/projects/stavlafthus-i-storhogna/stavlafthus-i-storhogna-hero.jpg",
    "/images/projects/stavlafthus-i-storhogna/stavlafthus-i-storhogna-01.webp",
    "/images/projects/stavlafthus-i-storhogna/stavlafthus-i-storhogna-02.webp",
    "/images/projects/stavlafthus-i-storhogna/stavlafthus-i-storhogna-03.webp",
    "/images/projects/stavlafthus-i-storhogna/stavlafthus-i-storhogna-04.webp",
    "/images/projects/stavlafthus-i-storhogna/stavlafthus-i-storhogna-05.webp",
    "/images/projects/stavlafthus-i-storhogna/stavlafthus-i-storhogna-06.webp",
    "/images/projects/stavlafthus-i-storhogna/stavlafthus-i-storhogna-07.webp",
    "/images/projects/stavlafthus-i-storhogna/stavlafthus-i-storhogna-08.webp",
    "/images/projects/stavlafthus-i-storhogna/stavlafthus-i-storhogna-09.webp",
    "/images/projects/stavlafthus-i-storhogna/stavlafthus-i-storhogna-10.jpg",
    "/images/projects/stavlafthus-i-storhogna/stavlafthus-i-storhogna-11.jpg",
    "/images/projects/stavlafthus-i-storhogna/stavlafthus-i-storhogna-12.jpg",
  ],
  "bathus-are": [
    "/images/projects/bathus-are/bathus-are-hero.jpg",
    "/images/projects/bathus-are/bathus-are-01.jpg",
    "/images/projects/bathus-are/bathus-are-02.jpg",
    "/images/projects/bathus-are/bathus-are-03.jpg",
    "/images/projects/bathus-are/bathus-are-04.jpg",
    "/images/projects/bathus-are/bathus-are-05.jpg",
    "/images/projects/bathus-are/bathus-are-06.jpg",
  ],
};

export function getGallery(slug: string): string[] {
  return PROJECT_GALLERIES[slug] ?? [];
}
