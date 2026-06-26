"use client";

import { assets } from "@/assets/assets";
import Image from "next/image";
import { motion } from "motion/react";

const Header = () => {
  return (
    <div className="mx-auto flex h-screen w-11/12 max-w-4xl flex-col items-center justify-center gap-4 text-center">
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        <Image
          src={assets.profile_img}
          alt="Abdullah Masum"
          className="w-36 rounded-full md:w-40"
        />
      </motion.div>

      <motion.h3
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mb-2 flex items-center gap-2 font-Ovo text-xl md:text-2xl"
      >
        Hi! I&apos;m Abdullah Al Masum
        <Image src={assets.hand_icon} alt="" className="w-6" />
      </motion.h3>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mb-2 rounded-full border border-pink-400/30 px-4 py-2 text-sm text-pink-500 dark:text-pink-400"
      >
        Available for Freelance & Contract Work
      </motion.div>

      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="font-Ovo text-4xl sm:text-6xl lg:text-[66px]"
      >
        Building Modern Web Applications
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="mx-auto max-w-2xl font-Ovo text-base leading-8 md:text-lg"
      >
        I build modern web applications, SaaS platforms, dashboards, and
        marketplaces using Next.js, React, MongoDB, Express.js, and scalable
        backend architecture.
      </motion.p>

      <div className="mt-4 flex flex-col items-center gap-4 sm:flex-row">
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          href="#contact"
          className="flex items-center gap-2 rounded-full border border-white bg-black px-10 py-3 text-white dark:bg-transparent"
        >
          Start a Project
          <Image src={assets.right_arrow_white} alt="" className="w-4" />
        </motion.a>

        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          href="/Abdullah-Al-Masum-Resume.pdf"
          download
          className="flex items-center gap-2 rounded-full border border-gray-500 bg-white px-10 py-3 dark:text-black"
        >
          Download Resume
          <Image src={assets.download_icon} alt="" className="w-4" />
        </motion.a>
      </div>
    </div>
  );
};

export default Header;
