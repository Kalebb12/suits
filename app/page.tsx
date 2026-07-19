import Craftsmanship from "@/components/craftsmanship";
import HeroSection from "@/components/heroSection";
import Collections from "@/components/collections";
import Process from "@/components/process";
import Cta from "@/components/cta";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Craftsmanship />
      <Collections />
      <Process />
      <Cta />
      <Footer />
    </main>
  );
}
