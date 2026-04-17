"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTypewriter } from "@/hooks/use-typewriter";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const HeroContent = () => {
  const displayText = useTypewriter({
    words: [
      "AI/ML Engineer",
      "Web Developer",
      "Generative AI Engineer",
    ],
    typingSpeed: 100,
    deletingSpeed: 50,
    delayBetweenWords: 2000,
  });

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            AI/ML Engineer & Web Developer
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Hi, I&apos;m{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              Biswajeet Ray
            </span>
          </span>
          <span className="text-4xl block h-12"> {/* Added fixed height to prevent layout shift */}
            I am a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {displayText}
            </span>
            <span className="animate-blink text-purple-500">|</span>
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          I&apos;m a passionate AI/ML Engineer and Web Developer with a strong focus on building
          intelligent backends and creative frontend experiences.
        </motion.p>

        <motion.div
          variants={slideInFromLeft(1)}
          className="flex flex-row gap-4 flex-wrap"
        >
          <a
            href="#contact"
            className="py-2 px-6 button-primary text-center text-white cursor-pointer rounded-lg"
          >
            Contact Us
          </a>

          <a
            href="/Specialised%20CV-AI.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="py-2 px-6 bg-transparent border-2 border-purple-500 text-center text-white cursor-pointer rounded-lg hover:bg-purple-500/10 transition-all flex items-center gap-2"
          >
            View Resume
          </a>
        </motion.div>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/hero-bg.svg"
          alt="work icons"
          height={650}
          width={650}
          draggable={false}
          className="select-none"
        />
      </motion.div>
    </motion.div>
  );
};
