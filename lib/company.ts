export const COMPANY = {
  legalName: "Fastgården - Tradition, Kvalitet, Omtanke",
  displayName: "Fastgården",
  tagline: "Tradition, kvalitet, omtanke",
  owner: "Freddy Martinsson",
  ownerTitle: "Byggingenjör & byggkonsult",
  founded: 2015,
  businessForm: "Enskild näringsidkare",

  phone: {
    display: "070-292 11 05",
    href: "tel:+46702921105",
  },
  email: "freddy.martinsson@fastgarden.se",

  address: {
    street: "Skolvägen 36",
    zip: "845 73",
    city: "Oviken",
    municipality: "Berg",
    region: "Jämtland",
    country: "SE",
  },
  geo: {
    lat: 63.1667,
    lng: 14.9333,
  },

  domain: "fastgarden.se",
  social: {
    linkedin: "",
  },

  serviceArea: "Jämtland, Härjedalen och Stockholm",
  services: [
    "Projektering och bygghandlingar",
    "Bygglovsprocess och myndighetskontakt",
    "Projektledningsstöd och tekniska utredningar",
  ],

  partners: [
    {
      name: "Residensbygg",
      url: "https://residensbygg.se",
      description: "Nära samarbete sedan flera år på exklusiva fritids- och bostadsprojekt.",
    },
  ],
} as const;
