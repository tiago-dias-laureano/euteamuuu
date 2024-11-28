import CardsSection from "./components/CardsSection";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import PricingSection from "./components/PricingSection";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-[#1E2637] via-[#232A42] to-[#1E2637] p-4 md:p-0 ">
      <Hero />
      <CardsSection />
      <PricingSection />
      <Footer />
    </div>
  );
}
