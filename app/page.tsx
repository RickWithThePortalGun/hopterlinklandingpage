"use client";
import AboutUs from "@/components/AboutUs";
import { fadeIn, LampDemo } from "@/components/HeroLamp";
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
import { Swiper, SwiperSlide } from "swiper/react";
import {motion} from "framer-motion"
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Navigation, Pagination } from "swiper/modules";
export default function Home() {
  const words = `where your needs meet endless
        possibilities.`;

  return (
    <main className="h-full">
      <Swiper
        pagination={{
          // dynamicBullets: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + +"</span>";
          },
        }}
        modules={[Pagination, Navigation]}
        className="h-screen"
      >
        <SwiperSlide>
          <div className="bg-black h-screen w-dvw flex items-center justify-center">
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
              <motion.div
              viewport={{ once: true }}
              variants={fadeIn("up", "spring", 0.5, 2)}
              initial={`hidden`}
              whileInView={`show`}
              className=" cursor-pointer z-40 max-sm:pt-[20%] pt-10  w-full flex justify-center items-center"
            >
              <div
                className="w-[25px] cursor-pointer h-[74px] rounded-3xl border-[1px] border-grey flex justify-center z-40 items-start p-2"
                onClick={() => {
                  document.getElementById("join").scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                <motion.svg
                  viewport={{ once: true }}
                  animate={{
                    y: [0, 24, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "loop",
                  }}
                  xmlns="http://www.w3.org/2000/svg"
                  width="6"
                  height="39"
                  viewBox="0 0 6 39"
                  fill="none"
                >
                  <path
                    d="M0 0C0 0 0 2.5 3 2.5C6 2.5 6 0 6 0L3 39L0 0Z"
                    fill="#D9D9D9"
                  />
                </motion.svg>
              </div>
            </motion.div>
            </BlurFade>
           
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-black h-screen w-dvw flex items-center justify-center">
            <BlurFade delay={1.25} inView>
              {" "}
              <p className="text-lg mt-6">
                Your Trusted Bridge to a World of Services
              </p>
            </BlurFade>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-black h-screen w-dvw flex items-center justify-center">
            <BlurFade delay={1.25} inView>
              {" "}
              <p className="text-lg mt-6">
                Discover. Connect. Succeed with HOPTERLINK
              </p>
            </BlurFade>
          </div>
        </SwiperSlide>
      </Swiper>
<div id="join">
      <LampDemo />
      </div>
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
