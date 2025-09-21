"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaLinkedin, FaFileDownload } from "react-icons/fa";

const Hero = () => {
  return (
    <section id="hero" className="h-screen flex flex-col justify-center items-center bg-gradient-to-b from-purple-900 to-indigo-800 text-white">
       {/* Headshot */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
        className="mb-6 rounded-full overflow-hidden w-40 h-40 border-4 border-white shadow-lg"
      >
        <Image
          src="/headshot.jpg"
          alt="Headshot of Shraddha"
          width={160}
          height={160}
          className="object-cover w-full h-full"
        />
      </motion.div>

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
        className="text-xl text-center max-w-xl mb-8"
      >
        I'm a Computer Science student passionate about creating interactive and immersive web applications.
      </motion.p>
      
      {/* Buttons */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="flex gap-4"
      >
        <a
          href="https://www.linkedin.com/in/shraddha-subash/"
          target="_blank"
          rel="noopener noreferrer"
          className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-colors duration-300 flex items-center gap-2"
        >
          <FaFileDownload size={20} />
          Resume
        </a>
        <a
          href="https://www.linkedin.com/in/shraddha-subash/"
          target="_blank"
          rel="noopener noreferrer"
          className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-colors duration-300 flex items-center gap-2"
        >
          <FaLinkedin size={20} />
          LinkedIn
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
