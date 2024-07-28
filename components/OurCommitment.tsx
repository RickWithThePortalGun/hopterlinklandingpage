"use client";

import React from "react";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import BlurFade from "./ui/blur-fade";
import { motion } from "framer-motion";
import { fadeIn } from "./HeroLamp";
type Props = {};

const OurCommitment = (props: Props) => {
  const words = [
    {
      text: "Our",
    },
    {
      text: "Commitment.",
      className: "text-[#c55e0c] dark:text-[#c55e0c]",
    },
  ];
  return (
    <div className="items-center flex flex-col">
      {" "}
      <TypewriterEffectSmooth words={words} />
      <BlurFade delay={1.25} inView>
        <p className="text-center px-16 text-xl max-md:text-md">
          HOPTERLINK is committed to continuous improvement and innovation. We
          listen to our users and constantly evolve our platform to better serve
          their needs. Our dedicated team works tirelessly to ensure that
          HOPTERLINK remains at the cutting edge of technology and user
          experience, providing you with the best possible service.
        </p>
      </BlurFade>
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
            document.getElementById("journey").scrollIntoView({
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
    </div>
  );
};

export default OurCommitment;
