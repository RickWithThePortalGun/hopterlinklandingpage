"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { LampContainer } from "./ui/lamp";
import { PlaceholdersAndVanishInput } from "./ui/placeholders-and-vanish-input";
import toast from "react-hot-toast";
import axios from "axios";

export function LampDemo() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();
  
    try {
      const res = await axios.post('/api/waitlist', { email }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (res.status === 201) {
        toast.success(res.data.success, {
          icon: '✅',
          style: {
            borderRadius: '5px',
            background: '#333',
            color: '#c55e0c',
          },
        });
      } else if (res.status === 409) {
        toast.error('Email already exists in the wishlist', {
          icon: '👏',
          style: {
            borderRadius: '5px',
            background: '#333',
            color: '#c55e0c',
          },
        });
      } else {
        toast.error('An error occurred, please try again later.', {
          icon: '❌',
          style: {
            borderRadius: '5px',
            background: '#333',
            color: '#c55e0c',
          },
        });
      }
  
      setEmail('');
    } catch (error) {
      if (error.response && error.response.status === 409) {
        toast.error('Email already exists in the wishlist', {
          icon: '👏',
          style: {
            borderRadius: '5px',
            background: '#333',
            color: '#c55e0c',
          },
        });
      } else {
        toast.error('An error occurred, please try again.', {
          icon: '❌',
          style: {
            borderRadius: '5px',
            background: '#333',
            color: '#c55e0c',
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
  return (
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
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        Hopterlink <br /> is coming soon
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.6,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 text-center text-md font-medium tracking-tight text-white md:text-xl"
      >
        Join the waitlist
      </motion.p>
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
    </LampContainer>
    </div>
  );
}
