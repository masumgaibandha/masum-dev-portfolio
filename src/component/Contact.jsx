"use client";
import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "motion/react";

const Contact = ({ isDarkMode }) => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "318f2695-32f1-47be-9678-e45687a9bd23");
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  const inputClass = `flex-1 p-3 outline-none border-[0.5px] rounded-md ${
    isDarkMode
      ? "border-white/20 bg-white text-gray-800 placeholder-gray-400 dark:bg-darkHover/30 dark:border-white/90"
      : "border-gray-400 bg-white text-gray-800"
  }`;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="contact"
      className="w-full px-[12%] py-10 scroll-mt-20 container mx-auto "
      style={{
        backgroundImage: isDarkMode ? "none" : "url('/footer-bg-color.png')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "90% auto",
        backgroundColor: isDarkMode ? "" : "transparent",
      }}
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        Connect with me
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-center text-5xl font-Ovo"
      >
        Get in touch
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
      >
        I'd love to hear from you! If you have any questions, comments, or
        feedback, please use the form below.
      </motion.p>

      <motion.form
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.5 }}
        onSubmit={onSubmit}
        className="max-w-2xl mx-auto"
      >
        <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6 mt-10 mb-8">
          <motion.input
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            type="text"
            name="name"
            placeholder="Enter your name"
            required
            className={inputClass}
          />
          <motion.input
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            className={inputClass}
          />
        </div>
        <motion.textarea
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          rows="6"
          name="message"
          placeholder="Enter your message"
          required
          className={`w-full p-4 outline-none border-[0.5px] rounded-md mb-6 ${
            isDarkMode
              ? "dark:bg-darkHover/30 dark:border-white/90"
              : "border-gray-400 bg-white text-gray-800"
          }`}
        ></motion.textarea>
        <motion.button
          initial={{ scale: 1.05}}
          transition={{duration: 0.3 }}

          type="submit"
          className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 cursor-pointer dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkHover"
        >
          Submit now{" "}
          <Image
            src={assets.right_arrow_white}
            alt="Right arrow white"
            className="w-4"
          />
        </motion.button>
        <p className="mt-4">{result}</p>
      </motion.form>
    </motion.div>
  );
};

export default Contact;
