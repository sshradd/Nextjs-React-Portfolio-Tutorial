"use client";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="hero" className="h-screen flex flex-col justify-center items-center bg-gradient-to-b from-purple-900 to-indigo-800 text-white">
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-5xl font-bold mb-4"
      >
        Hi, I'm Shraddha
      </motion.h1>
      <motion.p
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-xl text-center max-w-xl"
      >
        I'm a Computer Science student passionate about creating interactive and immersive web applications.
      </motion.p>
    </section>
  );
};

export default Hero;
