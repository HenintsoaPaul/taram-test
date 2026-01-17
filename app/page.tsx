import { HeroSection } from "./components/sections/hero-section";
import { AboutSection } from "./components/sections/about-section";
import { FaqSection } from "./components/sections/faq-section";
import { ServiceSection } from "./components/sections/service-section";

export default function Home() {


  return (
    <main className="min-h-screen bg-background flex flex-col">
      <HeroSection />
      <hr className="border-gray-200 w-1/2 mx-auto" />
      <ServiceSection />
      <AboutSection />
      <FaqSection />
    </main>
  );
}
