"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { LampContainer } from "./ui/lamp";
import { PlaceholdersAndVanishInput } from "./ui/placeholders-and-vanish-input";
import toast from "react-hot-toast";
import axios from "axios";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import { AuroraBackground } from "./ui/aurora-background";

export const fadeIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export function LampDemo() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    try {
      const res = await axios.post(
        "/api/waitlist",
        { email },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (res.status === 201) {
        toast.success(res.data.success, {
          icon: "✅",
          style: {
            borderRadius: "5px",
            background: "#333",
            color: "#c55e0c",
          },
        });
      } else if (res.status === 409) {
        toast.error("Email already exists in the wishlist", {
          icon: "👏",
          style: {
            borderRadius: "5px",
            background: "#333",
            color: "#c55e0c",
          },
        });
      } else {
        toast.error("An error occurred, please try again later.", {
          icon: "❌",
          style: {
            borderRadius: "5px",
            background: "#333",
            color: "#c55e0c",
          },
        });
      }

      setEmail("");
    } catch (error: any) {
      if (error.response && error.response.status === 409) {
        toast.error("Email already exists in the wishlist", {
          icon: "👏",
          style: {
            borderRadius: "5px",
            background: "#333",
            color: "#c55e0c",
          },
        });
      } else {
        toast.error("An error occurred, please try again.", {
          icon: "❌",
          style: {
            borderRadius: "5px",
            background: "#333",
            color: "#c55e0c",
          },
        });
      }
    }
  };

  const placeholders = [
    "jasonbourne@gmail.com",
    "bolatinubu@yahoo.com",
    "franklinsaint@outlook.com",
    "ragnarlothbrok@valhallamail.com",
  ];

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };
  const words = [
    {
      text: "Join",
    },
    {
      text: "our",
    },
    {
      text: "exclusive",
    },
    {
      text: "waitlist.",
      className: "text-[#c55e0c] dark:text-[#c55e0c]",
    },
  ];

  return (
    <>
  
      <div>
        <LampContainer>
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="mt-8  text-center text-4xl font-medium tracking-tight dark:text-white text-black md:text-7xl"
          >
            Hopterlink <br /> is coming soon
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.6,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="mt-8 text-center text-md font-medium tracking-tight dark:text-white max-w-full text-black md:text-xl"
          >
            <TypewriterEffectSmooth words={words} />
          </motion.div>
          <div className="flex flex-col items-center justify-between">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.9,
                duration: 0.8,
                ease: "easeInOut",
              }}
              className="mt-8 text-center text-md font-medium tracking-tight text-white md:text-xl"
            >
              <PlaceholdersAndVanishInput
                placeholders={placeholders}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                onSubmit={handleSubmit}
              />
            </motion.div>
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
                  document.getElementById("about").scrollIntoView({
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
        </LampContainer>
      </div>
    </>
  );
}
