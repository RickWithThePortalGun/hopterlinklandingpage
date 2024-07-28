"use client";
import React from "react";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import BlurFade from "./ui/blur-fade";
import { motion } from "framer-motion";
import { fadeIn } from "./HeroLamp";
type Props = {};

const AboutUs = (props: Props) => {
  const words = [
    {
      text: "About",
    },
    {
      text: "Us.",
      className: "text-[#c55e0c] dark:text-[#c55e0c]",
    },
  ];
  return (
    <div className="items-center flex flex-col">
      {" "}
      <TypewriterEffectSmooth words={words} />
      <BlurFade delay={1.25} inView>
        <p className="text-center px-16 text-xl max-md:text-md">
          Welcome to HOPTERLINK, your premier platform for connecting service
          providers and consumers in a seamless and efficient manner. At
          HOPTERLINK, we believe in the power of connection and the
          opportunities it creates for individuals and businesses alike. Our
          mission is to bridge the gap between supply and demand, providing a
          space where services and products are easily accessible to everyone.
        </p>
      </BlurFade>
      <>
        {" "}
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
              document.getElementById("vision").scrollIntoView({
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
      </>
    </div>
  );
};

export default AboutUs;
