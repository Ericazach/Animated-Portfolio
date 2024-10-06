"use client";

import React, { useState } from "react";
import animationData from "../public/confeti.json";
import Lottie from "react-lottie";
import ContactForm from "./ContactForm";

function ContactPage() {
  const [copied, setCopied] = useState(false);

  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleCopy = () => {
    if (navigator.clipboard) {
      const text = "ericazach@gmail.com";
      navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } else {
      console.error("Clipboard API is not available.");
    }
  };

  return (
    <div
      className="mx-4 my-24 flex gap-12 md:gap-0 flex-col md:flex-row"
      id="contact"
    >
      <div>
        <h1 className="w-full md:px-10 text-xl md:text-2xl lg:text-6xl font-bold text-white">
          Drop me a message or copy my email
        </h1>
        <div className="relative">
          {copied && (
            <div className="absolute -bottom-5 right-0">
              <Lottie
                options={{ ...defaultOptions, autoplay: true }}
                height={200}
                width={400}
              />
            </div>
          )}
          <button
            type="button"
            onClick={handleCopy}
            className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
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
