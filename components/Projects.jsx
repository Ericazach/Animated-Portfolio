"use client";

import React, { useRef } from "react";
import { WobbleCard } from "./ui/wobble-card";
import { projects } from "@/data/data";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

function Projects() {
  const projectRef = useRef();
  const isProjectRefInView = useInView(projectRef, { margin: "-100px" });

  return (
    <div
      ref={projectRef}
      id="projects"
      className="flex flex-col items-center justify-center md:my-24"
    >
      <div className="flex items-center justify-center gap-5">
        <hr className="w-1/2 border-primary-100 dark:border-secondary-100" />
        <motion.h1
          animate={isProjectRefInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="w-screen gap-2 md:gap-4 flex items-center justify-center font-extrabold font-ralewayLight uppercase mt-12 lg:text-5xl md:text-4xl text-2xl text-neutral-200"
        >
          Check <span className=" text-[#DD798F]">my work</span>
        </motion.h1>
        <hr className="w-1/2 border-primary-100 dark:border-secondary-100" />
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center p-4 gap-16 md:mx-16 mt-10">
        {projects.map((item) => (
          <div key={item.id}>
            <WobbleCard
              className="dark:bg-gradient-to-b dark:from-[#1d3651] dark:to-[#531422] bg-gradient-to-b from-[#6887a8] to-[#642d39]"
              containerClassName="max-w-3xl md:max-h-[80vh] lg:max-h-[80vh]"
            >
              <div className="flex flex-col items-center justify-center">
                <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] rounded-3xl mb-10">
                  <div
                    className="relative w-full h-full overflow-hidden rounded-3xl"
                    style={{ backgroundColor: "#13162D" }}
                  >
                    <img src="/bg.png" alt="bgimg" />
                  </div>
                  <img
                    src={item.img}
                    alt="cover"
                    className="z-10 absolute top-0 object-contain rounded-3xl"
                  />
                </div>

                <h1 className="font-extrabold lg:text-2xl md:text-xl text-base text-neutral-200 font-inter">
                  {item.title}
                </h1>

                <p
                  className="lg:text-xl lg:font-normal font-light text-sm text-center"
                  style={{
                    color: "#BEC1DD",
                    margin: "1vh 0",
                  }}
                >
                  {item.des}
                </p>

                <div className="flex items-center justify-between mt-7">
                  <div className="flex items-center gap-2">
                    {item.iconLists?.map((icon, index) => (
                      <div
                        key={index}
                        className="border border-white/[.2] rounded-full bg-gray-800 md:w-12 md:h-12 w-8 h-8 flex justify-center items-center"
                        style={{
                          transform: `translateX(-${5 * index + 2}px)`,
                        }}
                      >
                        <img src={icon} alt="icon5" className="p-2" />
                      </div>
                    ))}
                  </div>

                  {/* Wrap the "Check the page" text and icon in a Link */}
                  <Link href={item.link} target="_blank">
                    <div className="ms-4 flex justify-center items-center cursor-pointer gap-2">
                      <span className="lg:text-xl md:text-xs text-sm text-neutral-200 font-ralewayLight">
                        Visit the page
                      </span>
                      <NorthEastIcon
                        sx={{ color: "#BEC1DD" }}
                        fontSize="small"
                      />
                    </div>
                  </Link>
                </div>
              </div>
            </WobbleCard>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
