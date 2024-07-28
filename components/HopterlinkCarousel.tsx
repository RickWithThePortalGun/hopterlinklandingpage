"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import { motion } from "framer-motion";
import { fadeIn } from "./HeroLamp";
import BlurFade from "./ui/blur-fade";
export function HopterlinkCarousel() {
  const words = [
    {
      text: "What",
    },
    {
      text: "we",
    },
    {
      text: "Offer.",
      className: "text-[#c55e0c] dark:text-[#c55e0c]",
    },
  ];
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full flex flex-col justify-center items-center py-20">
      <TypewriterEffectSmooth words={words} />
      <Carousel items={cards} />
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
            document.getElementById("commitment").scrollIntoView({
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
}

const DummyContent1 = () => {
  return (
    <>
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
            Connecting Consumers and producers seamlessly and efficiently.
            <br />
          </span>{" "}
          <br />
          From everyday essentials to specialized services, HOPTERLINK offers a
          vast array of options to cater to all your needs. Whether you’re a
          consumer seeking reliable services or a provider looking to reach a
          broader audience, our platform is designed to support you.
        </p>
      </div>
    </>
  );
};
const DummyContent2 = () => {
  return (
    <>
      <div
        key={"dummy-content"}
        className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
      >
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
            Connecting Consumers and producers seamlessly and efficiently.
            <br />
          </span>{" "}
          <br />
          Our intuitive interface makes it easy for users to navigate the
          platform, find what they need, and interact with service providers.
          With features like instant messaging, detailed reviews, and star
          rankings, we ensure that every interaction on HOPTERLINK is smooth and
          satisfying.
        </p>
      </div>
    </>
  );
};
const DummyContent3 = () => {
  return (
    <>
      <div
        key={"dummy-content"}
        className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
      >
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
            Connecting Consumers and producers seamlessly and efficiently.
            <br />
          </span>{" "}
          <br />
          We prioritize the safety and security of our users. HOPTERLINK employs
          advanced encryption and secure payment gateways to protect your data
          and transactions.
        </p>
      </div>
    </>
  );
};
const DummyContent4 = () => {
  return (
    <>
      <div
        key={"dummy-content"}
        className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
      >
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
            Connecting Consumers and producers seamlessly and efficiently.
            <br />
          </span>{" "}
          <br />
          We also have a robust reporting system to ensure that all users adhere
          to our community guidelines, fostering a trustworthy environment for
          everyone.
        </p>
      </div>
    </>
  );
};
const DummyContent5 = () => {
  return (
    <>
      <div
        key={"dummy-content"}
        className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
      >
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
            Connecting Consumers and producers seamlessly and efficiently.
            <br />
          </span>{" "}
          <br />
          Be among the first to try out our platform!
        </p>
      </div>
    </>
  );
};
const data = [
  {
    category: "Diverse Services",
    title: "All you need on a single platform.",
    src: "/IMG_0936.JPG",
    content: <DummyContent1 />,
  },
  {
    category: "Seamless User Experience",
    title: "Intuitive user interface",
    src: "/WhatsApp Image 2024-07-28 at 16.43.17_176c4c35.jpg",
    content: <DummyContent2 />,
  },
  {
    category: "Security",
    title: "Advanced data encryption",
    src: "/philipp-katzenberger-iIJrUoeRoCQ-unsplash.jpg",
    content: <DummyContent3 />,
  },

  {
    category: "Trust",
    title: "Robust reporting system",
    src: "/oluwakemi-solaja-ZN52ZBFkw4Y-unsplash.jpg",
    content: <DummyContent4 />,
  },
  {
    category: "Coming Soon",
    title: "Join the waitlist",
    src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent5 />,
  },
];
