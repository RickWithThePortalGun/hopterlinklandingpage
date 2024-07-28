import AboutUs from "@/components/AboutUs";
import { LampDemo } from "@/components/HeroLamp";
import { HopterlinkCarousel } from "@/components/HopterlinkCarousel";
import OurCommitment from "@/components/OurCommitment";
import OurJourney from "@/components/OurJourney";
import OurVision from "@/components/OurVision";
import BlurFade from "@/components/ui/blur-fade";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import Image from "next/image";
import { Toaster } from "react-hot-toast";

export default function Home() {
  const words = `where your needs meet endless
        possibilities.`;

  return (
    <main className="h-full">
      <LampDemo />
      <div
        className="bg-black w-full h-screen flex flex-col items-center justify-center"
        id="about"
      >
        <AboutUs />
      </div>
      <div
        className="bg-black w-full h-screen flex flex-col items-center justify-center"
        id="vision"
      >
        <OurVision />
      </div>
      <div id="carousel">
        <HopterlinkCarousel />
      </div>
      <div
        className="bg-black w-full h-screen flex flex-col items-center justify-center"
        id="commitment"
      >
        <OurCommitment />
      </div>
      <div
        className="bg-black w-full h-screen flex flex-col items-center justify-center"
        id="journey"
      >
        <OurJourney />
      </div>
      <div
        className="bg-black w-full h-screen flex flex-col items-center justify-center"
        id="logo"
      >
        <BlurFade delay={1.25} inView>
          <Image
            alt="Hopterlnk"
            width={300}
            height={300}
            src={"/Hopterlink png.png"}
          />
          <p className="text-md mt-6">
            where your needs meet endless possibilities
          </p>
        </BlurFade>
      </div>
    </main>
  );
}
