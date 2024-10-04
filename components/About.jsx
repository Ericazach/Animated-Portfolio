"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { Timeline } from "./ui/timeline";
import { jobs } from "../data/data";
import { motion, useInView, useScroll } from "framer-motion";

function About() {
  const skillRef = useRef();
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

  const aboutRef = useRef();
  const isAboutRefInView = useInView(aboutRef, { margin: "-100px" });

  return (
    <div className="flex flex-col md:flex-row h-full">
      <div
        className="text-white w-full md:w-1/2 md:pt-60 flex flex-col "
        id="about"
      >
        <div
          ref={aboutRef}
          className="flex gap-4 justify-center self-start pb-8 md:py-16 px-6 md:px-16"
        >
          <motion.h1
            animate={isAboutRefInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="font-bold text-xl md:text-3xl lg:text-4xl uppercase text-neutral-200"
          >
            About me
          </motion.h1>
        </div>

        {/* IMAGE */}
        <div className="relative rounded-full mx-4 md:mx-14 w-40 h-40">
          <Image
            src="/perfil.jpg"
            alt="perfil"
            fill
            className="rounded-full object-cover"
          />
        </div>
        <div className="mt-3 md:mt-8 px-4 md:px-14">
          <p className="text-sm md:text-base lg:text-lg text-white mt-8">
            Welcome to my portfolio! I’m a software developer with a passion for
            crafting efficient, creative solutions. My mission is to turn
            complex ideas into user-friendly apps that make an impact. Let’s
            build something amazing together!
          </p>
        </div>
        {/* SKILL TITLE */}
        <div
          className="flex flex-col gap-4 justify-center self-start py-10 md:py-24 px-4 md:px-16"
          ref={skillRef}
        >
          <motion.h1
            initial={{ x: "-600px" }}
            animate={isSkillRefInView ? { x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="font-bold text-xl md:text-3xl lg:text-4xl uppercase text-neutral-200"
          >
            Skills
          </motion.h1>

          {/* SKILL */}
          <motion.div
            initial={{ x: "-950px" }}
            animate={isSkillRefInView ? { x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex gap-2 flex-wrap "
          >
            <div className="rounded  p-2 text-sm cursor-pointer dark:bg-gray-800 bg-secondary-100 text-white hover:bg-white hover:text-black">
              JavaScript
            </div>
            <div className="rounded  p-2 text-sm cursor-pointer dark:bg-gray-800 bg-secondary-100 text-white hover:bg-white hover:text-black">
              TypeScript
            </div>
            <div className="rounded  p-2 text-sm cursor-pointer dark:bg-gray-800 bg-secondary-100 text-white hover:bg-white hover:text-black">
              React.js
            </div>
            <div className="rounded  p-2 text-sm cursor-pointer dark:bg-gray-800 bg-secondary-100 text-white hover:bg-white hover:text-black">
              Next.js
            </div>
            <div className="rounded  p-2 text-sm cursor-pointer dark:bg-gray-800 bg-secondary-100 text-white hover:bg-white hover:text-black">
              Tailwind CSS
            </div>
            <div className="rounded  p-2 text-sm cursor-pointer dark:bg-gray-800 bg-secondary-100 text-white hover:bg-white hover:text-black">
              JAVA
            </div>
            <div className="rounded  p-2 text-sm cursor-pointer dark:bg-gray-800 bg-secondary-100 text-white hover:bg-white hover:text-black">
              MongoDB
            </div>
            <div className="rounded  p-2 text-sm cursor-pointer dark:bg-gray-800 bg-secondary-100 text-white hover:bg-white hover:text-black">
              Node.js
            </div>
            <div className="rounded  p-2 text-sm cursor-pointer dark:bg-gray-800 bg-secondary-100 text-white hover:bg-white hover:text-black">
              Express.js
            </div>
            <div className="rounded  p-2 text-sm cursor-pointer dark:bg-gray-800 bg-secondary-100 text-white hover:bg-white hover:text-black">
              Framer Motion
            </div>
            <div className="rounded  p-2 text-sm cursor-pointer dark:bg-gray-800 bg-secondary-100 text-white hover:bg-white hover:text-black">
              Git
            </div>
          </motion.div>
        </div>
      </div>
      <div className="w-full md:w-1/2">
        <Timeline data={jobs} />
      </div>
    </div>
  );
}

export default About;
