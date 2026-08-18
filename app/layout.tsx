import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { COMPANY } from "@/lib/company";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400"],
});

const title = "Fastgården – Byggkonsult & ritningsstöd | Freddy Martinsson";
const description =
  "Byggkonsult med bas i Oviken, Jämtland — verksam över hela Sverige. Projektering, ritningar, bygglov och projektledningsstöd. Ring Freddy på 070-292 11 05.";

export const metadata: Metadata = {
  metadataBase: new URL(`https://${COMPANY.domain}`),
  title,
  description,
  openGraph: {
    title,
    description,
    url: `https://${COMPANY.domain}`,
    siteName: COMPANY.displayName,
    locale: "sv_SE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: COMPANY.legalName,
  description:
    "Byggkonsult med bas i Oviken, Jämtland — verksam över hela Sverige. Projektering, ritningar, bygglov och projektledningsstöd.",
  url: `https://${COMPANY.domain}`,
  telephone: COMPANY.phone.display,
  email: COMPANY.email,
  founder: COMPANY.owner,
  foundingDate: String(COMPANY.founded),
  address: {
    "@type": "PostalAddress",
    streetAddress: COMPANY.address.street,
    postalCode: COMPANY.address.zip,
    addressLocality: COMPANY.address.city,
    addressRegion: COMPANY.address.region,
    addressCountry: COMPANY.address.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: COMPANY.geo.lat,
    longitude: COMPANY.geo.lng,
  },
  areaServed: COMPANY.serviceArea,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="sv" className={`${inter.variable} ${instrumentSerif.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
