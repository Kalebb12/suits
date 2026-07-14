import FloatingCard from "./floatingCard";
import HeroBG from "./heroBG";
import HeroContent from "./heroContent";
import Navbar from "./navbar";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-secondary text-foreground">
      {/* Background Layers */}
      <HeroBG />

      <Navbar />

      {/* Hero Content */}
      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-80px)] container items-center px-8">
        <HeroContent />

        <div className="absolute right-0 bottom-0 w-2xl">
          <div className="absolute top-1/2 -z-1 h-175 w-175 -translate-y-1/2 rounded-full blur-[150px] bg-secondary-foreground/20" />
          <div className="absolute right-[25%] z-0 top-[25%] h-55 w-55 rounded-full bg-white/10 blur-[90px]" />

          <Image
            src="/images/model2.png"
            alt="Model wearing a tailored green suit"
            draggable={false}
            width={450}
            height={100}
            className="object-contain"
          />

          <p className="absolute text-secondary-foreground top-1/4 right-1/2 translate-1/2 font-bodoni opacity-[0.08] select-none -z-1 leading-0 text-[120px] tracking-[0.35em]">
            VELLMONT
          </p>

          <FloatingCard
            title="Italian Wool"
            subtitle="Premium Merino Fabric"
            line="right"
            className="-left-10 top-80"
          />

          <FloatingCard
            title="Hand Finished"
            subtitle="Precision Stitching"
            line="left"
            className="right-10 top-110"
          />

          <FloatingCard
            title="Tailored Fit"
            subtitle="Designed Around You"
            line="right"
            className="-left-10 bottom-40"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
