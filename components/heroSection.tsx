import HeroBG from "./heroBG";
import HeroContent from "./heroContent";
import Navbar from "./navbar";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-secondary text-secondary-foreground">
      {/* Background Layers */}
      <HeroBG />

      {/* Navbar + Hero */}
      <Navbar />

      {/* Hero Content */}
      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-80px)] container items-center px-8">
        <HeroContent />

        <div className="absolute right-0 bottom-0 w-2xl">
          <div className="absolute top-1/2 -z-1 h-175 w-175 -translate-y-1/2 rounded-full blur-[150px] bg-secondary-foreground/20" />
          <Image
            src="/images/model1.png"
            alt="Model wearing a tailored green suit"
            draggable={false}
            width={550}
            height={1000}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
