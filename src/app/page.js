"use client";

import About from "@/component/About";
import Footer from "@/component/Footer";
import Header from "@/component/Header";
import Navbar from "@/component/Navbar";
import Services from "@/component/Services";
import Work from "@/component/Work";
import ContactForm from "@/component/contact/ContactForm";
import { useEffect, useState } from "react";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const systemDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (savedTheme === "dark" || (!savedTheme && systemDark)) {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  return (
    <>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Header isDarkMode={isDarkMode} />
      <About isDarkMode={isDarkMode} />
      <Services isDarkMode={isDarkMode} />
      <Work isDarkMode={isDarkMode} />

      <section id="contact" className="w-full px-[12%] py-20 scroll-mt-20">
        <div className="mx-auto max-w-3xl text-center">
          <h4 className="mb-2 text-lg font-Ovo">Connect with me</h4>
          <h2 className="text-5xl font-Ovo">Get in touch</h2>
          <p className="mx-auto mt-5 mb-12 max-w-2xl font-Ovo">
            Have a project in mind, need a full-stack web app, or want to
            discuss a cold email campaign? I am available and ready to help.
          </p>
        </div>

        <div className="mx-auto max-w-2xl">
          <ContactForm />
        </div>
      </section>

      <Footer isDarkMode={isDarkMode} />
    </>
  );
}