"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function ContactForm() {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        {
          publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          setSuccess(true);
          form.current.reset();
        },
        (error) => {
          setError(true);
          console.log(error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="max-w-md mx-auto">
      <div className="relative z-0 w-full mb-5 group">
        <textarea
          rows={6}
          name="user_message"
          id="user_message"
          className="block py-4 px-0 w-full text-sm text-neutral-200 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-neutral-200 dark:border-gray-200 dark:focus:neutral-200 focus:outline-none focus:ring-0 focus:border-neutral-200 peer resize-none"
          required
        />
        <label
          htmlFor="user_message"
          className="mb-4 peer-focus:font-medium absolute text-xl md:text-2xl text-neutral-200 dark:text-neutral-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-neutral-200 peer-focus:dark:text-neutral-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Dear Erica,
        </label>
      </div>
      <div className="relative z-0 w-full mb-5 group">
        <input
          type="email"
          name="user_email"
          id="user_email"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-200 dark:focus:border-gray-200 focus:outline-none focus:ring-0 focus:border-neutral-200 peer"
          placeholder=" "
          required
        />
        <label
          htmlFor="user_email"
          className="peer-focus:font-medium absolute text-sm text-neutral-200 dark:text-neutral-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-neutral-200 peer-focus:dark:text-neutral-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          My email address is
        </label>
      </div>
      <p className="text-neutral-200 dark:text-neutral-200 text-sm md:text-lg py-4">
        Regards,
      </p>

      <button
        type="submit"
        className="text-white bg-secondary-100 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-800 dark:hover:border-gray-600 border-gray-300 border dark:border-gray-600"
      >
        Submit
      </button>

      {success && (
        <p className="text-green-300 text-center font-medium mt-6">
          Thank you for your message!
        </p>
      )}

      {error && (
        <p className="text-red-300 text-center font-medium mt-6">
          Something went wrong. Please try again later.
        </p>
      )}
    </form>
  );
}

export default ContactForm;
