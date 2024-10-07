import Image from "next/image";
import Link from "next/link";
import React from "react";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const Hero = () => {
  return (
    <div className="flex flex-col md:h-screen md:flex-row md:justify-center md:items-center md:mx-8 lg:mx-16 my-12 md:my-0">
      {/* IMAGE CONTAINER */}
      <div className="hidden md:f md:block md:h1/2  md:w-full md:h-full relative ">
        <Image
          src="/girl.png"
          alt="Erica's Profile"
          fill
          className="object-contain"
        />
      </div>
      {/* TEXT CONTAINER */}
      <div className="h-1/2 w-full md:w-full md:h-full flex-col flex justify-center px-4 md:px-8">
        <div className="flex flex-col relative">
          <h1 className="text-[7rem] uppercase md:text-[10rem] lg:text-[12rem] font-extrabold text-neutral-100 opacity-30">
            Erica
          </h1>
          <TextGenerateEffect
            className="md:text-3xl absolute lg:text-4xl bottom-4 md:bottom-6 left-3 font-bold text-neutral-200"
            words="Full Stack Web Developer"
          />
        </div>
        {/* <p className="text-2xl md:text-3xl lg:text-4xl text-white mt-4">
          Full Stack Web Developer
        </p> */}
        <div className="flex gap-4 mt-6 mb-12 mx-2">
          <Link href="#contact">
            <button className="text-neutral-200 font-bold bg-[#29727C] hover:bg-[#DD798F] rounded-md px-4 py-2">
              Contact me!
            </button>
          </Link>
          <Link href="#projects">
            <button className="text-neutral-200 font-bold bg-[#DD798F] hover:bg-secondary-100 rounded-md px-4 py-2 ">
              My Work
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
