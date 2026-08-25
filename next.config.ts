import type { NextConfig } from "next";
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

const nextConfig: NextConfig = {
  images: {
    // Varje unik bredd blir en transformation hos Cloudflare Images
    // (5 000/mån gratis). Färre bredder ger god marginal utan märkbar
    // kvalitetsskillnad på en one-pager.
    deviceSizes: [640, 828, 1080, 1920],
    imageSizes: [256, 384],
  },
};

// Gör Cloudflare-bindningar (IMAGES, ASSETS) tillgängliga i `next dev`.
initOpenNextCloudflareForDev();

export default nextConfig;
