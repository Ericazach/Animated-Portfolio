import Image from "next/image";
import Link from "next/link";
import React from "react";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const Hero = () => {
  return (
    <div className="flex flex-col h-screen md:flex-row justify-center items-center md:mx-8 lg:mx-16">
      {/* IMAGE CONTAINER */}
      <div className="h-1/2 w-full md:w-full md:h-full relative ">
        <Image
          src="/girl.png"
          alt="Erica's Profile"
          fill
          className="object-contain"
        />
      </div>
      {/* TEXT CONTAINER */}
      <div className="h-1/2 w-full md:w-full md:h-full flex-col flex justify-center px-8">
        {/* <h1 className="text-4xl mb-4 md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white">
          Turning Ideas into Code Magic
        </h1> */}
        <TextGenerateEffect
          className=""
          words="Turning Ideas into Code Magic"
        />
        <p className="md:text-lg lg:text-2xl text-white mt-4">
          Welcome to my portfolio! I’m a software developer with a passion for
          crafting efficient, creative solutions. My mission is to turn complex
          ideas into user-friendly apps that make an impact. Let’s build
          something amazing together!
        </p>
        <div className="flex gap-4 mt-6">
          <Link href="#contact">
            <button className="text-neutral-200 bg-[#29727C] hover:bg-[#DD798F] rounded-md px-4 py-2">
              Contact me!
            </button>
          </Link>
          <Link href="#projects">
            <button className="text-neutral-200 bg-[#DD798F] hover:bg-secondary-100 rounded-md px-4 py-2 ">
              My Work
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
