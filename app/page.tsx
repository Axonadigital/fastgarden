import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Process } from "@/components/process";
import { About } from "@/components/about";
import { Projects } from "@/components/projects";
import { Partners } from "@/components/partners";
import { QuoteSection } from "@/components/quote-section";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Process />
        <About />
        <Projects />
        <Partners />
        <QuoteSection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
