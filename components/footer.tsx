import { COMPANY } from "@/lib/company";

const LINKS = [
  { label: "Om oss", href: "#om-oss" },
  { label: "Projekt", href: "#projekt" },
  { label: "Kontakt", href: "#kontakt" },
];

export function Footer() {
  return (
    <footer className="bg-[#111111] text-white/70">
      <div className="max-w-6xl mx-auto px-5 md:px-8 lg:px-16 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          <div>
            <p className="font-serif text-2xl text-white">{COMPANY.displayName}</p>
            <p className="mt-2 text-[13px] uppercase tracking-[0.15em] text-white/50">
              {COMPANY.tagline}
            </p>
            <address className="not-italic mt-6 space-y-1 text-[15px]">
              <p>
                {COMPANY.address.street}, {COMPANY.address.zip} {COMPANY.address.city}
              </p>
              <p>
                <a
                  href={COMPANY.phone.href}
                  className="hover:text-white transition-colors"
                >
                  {COMPANY.phone.display}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="hover:text-white transition-colors break-all"
                >
                  {COMPANY.email}
                </a>
              </p>
            </address>
          </div>

          <div className="md:flex md:justify-end">
            <div>
              <p className="text-[12px] uppercase tracking-[0.15em] text-white/50">
                Navigation
              </p>
              <ul className="mt-5 space-y-3 text-[15px]">
                {LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between gap-3 text-[13px] text-white/50">
          <p>© {new Date().getFullYear()} {COMPANY.legalName}</p>
          <p>Hemsida av Axona Digital</p>
        </div>
      </div>
    </footer>
  );
}
