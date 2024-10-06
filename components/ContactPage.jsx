"use client";

import React, { useState, useEffect } from "react";
import animationData from "@/data/confetti.json";
import ContactForm from "./ContactForm";

function ContactPage() {
  const [copied, setCopied] = useState(false);
  const [Lottie, setLottie] = useState(null); // State to hold the dynamically imported Lottie component

  const defaultOptions = {
    loop: true, // Lottie should loop
    autoplay: copied, // Autoplay based on copied state
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleCopy = () => {
    if (navigator.clipboard) {
      const text = "ericazach@gmail.com";
      navigator.clipboard
        .writeText(text)
        .then(() => {
          setCopied(true); // Set copied to true when the text is successfully copied
        })
        .catch((err) => {
          console.error("Failed to copy: ", err);
        });
    } else {
      console.error("Clipboard API is not available.");
    }
  };

  // Reset copied state after 2 seconds
  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => {
        setCopied(false); // Reset copied state after 2 seconds
      }, 2000);

      return () => clearTimeout(timer); // Cleanup the timer on unmount
    }
  }, [copied]); // Only run this effect when `copied` changes

  // Dynamically import Lottie on client mount
  useEffect(() => {
    const loadLottie = async () => {
      const { default: LottieComponent } = await import("react-lottie");
      setLottie(() => LottieComponent);
    };

    loadLottie(); // Invoke the function to load Lottie
  }, []);

  return (
    <div
      className="mx-4 my-24 flex gap-12 md:gap-0 flex-col md:flex-row"
      id="contact"
    >
      <div className="w-full flex flex-col justify-center items-center gap-10">
        <h1 className="w-full md:px-8 text-center text-2xl md:text-4xl font-bold text-white">
          Drop me a message or copy my email
        </h1>
        <div className="relative">
          {copied &&
            Lottie && ( // Check if Lottie has been loaded
              <div className="absolute bottom-0 -left-24">
                <Lottie options={defaultOptions} height={200} width={400} />
              </div>
            )}
          <button
            type="button"
            onClick={handleCopy}
            className="mx-2 md:mx-20 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          >
            {copied ? "Email is Copied!" : "Copy my Email"}
          </button>
        </div>
      </div>
      <div className="w-full">
        <ContactForm />
      </div>
    </div>
  );
}

export default ContactPage;
