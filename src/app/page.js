'use client'
import About from "@/component/About";
import Contact from "@/component/Contacts";
// import Contact from "@/component/Contact";
import Footer from "@/component/Footer";
import Header from "@/component/Header";
import Navbar from "@/component/Navbar";
import Services from "@/component/Services";
import Work from "@/component/Work";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(()=>{
    if(localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)){
      setIsDarkMode(true)
    }
    else{
      setIsDarkMode(false)
    }
  }, [])
  useEffect(()=>{
    if(isDarkMode){
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    }
    else{
      document.documentElement.classList.remove('dark');
      localStorage.theme = '';
    }

    
  }, [isDarkMode])
  return (
    <>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
      <Header isDarkMode={isDarkMode} />
      <About isDarkMode={isDarkMode}/>
      <Services isDarkMode={isDarkMode}/>
      <Work isDarkMode={isDarkMode}/>
         {/* <Contact isDarkMode={isDarkMode} /> */}
      <Contact isDarkMode={isDarkMode}/>
      <Footer isDarkMode={isDarkMode}/>
    </>
  );
}
