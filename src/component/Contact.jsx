"use client";
import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useState } from "react";

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
      ? "border-white/20 bg-[#4a4560]/50 text-white placeholder-white/50"
      : "border-gray-400 bg-white text-gray-800"
  }`;

  return (
    <div
      id="contact"
      className="w-full px-[12%] py-10 scroll-mt-20"
      style={{
        backgroundImage: isDarkMode ? "none" : "url('/footer-bg-color.png')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "90% auto",
      }}
    >
      <h4 className="text-center mb-2 text-lg font-Ovo">Connect with me</h4>
      <h2 className="text-center text-5xl font-Ovo">Get in touch</h2>

      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        I'd love to hear from you! If you have any questions, comments, or
        feedback, please use the form below.
      </p>

      <form onSubmit={onSubmit} className="max-w-2xl mx-auto">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6 mt-10 mb-8">
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
            className={inputClass}
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            className={inputClass}
          />
        </div>
        <textarea
          rows="6"
          name="message"
          placeholder="Enter your message"
          required
          className={`w-full p-4 outline-none border-[0.5px] rounded-md mb-6 ${
            isDarkMode
              ? "border-white/20 bg-[#4a4560]/50 text-white placeholder-white/50"
              : "border-gray-400 bg-white text-gray-800"
          }`}
        ></textarea>
        <button
          type="submit"
          className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 cursor-pointer"
        >
          Submit now{" "}
          <Image
            src={assets.right_arrow_white}
            alt="Right arrow white"
            className="w-4"
          />
        </button>
        <p className="mt-4">{result}</p>
      </form>
    </div>
  );
};

export default Contact;
