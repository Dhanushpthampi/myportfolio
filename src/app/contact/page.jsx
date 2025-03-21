"use client";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser"; 

const ContactPage = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const text = "Say Hello";

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setSuccess(true);
          form.current.reset();
        },
        (err) => {
          console.error("EmailJS Error:", err);
          setError(true);
        }
      );
  };

  return (
    <div className="h-full w-full overflow-hidden">
      <motion.div
        className="h-full w-full"
        initial={{ x: 0, y: "-100vh" }}
        animate={{ x: 0, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="h-full flex flex-col lg:flex-row items-center justify-center px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32">
          {/* TEXT CONTAINER */}
          <div className="h-1/4 lg:h-full lg:w-1/2 flex items-center justify-center text-5xl sm:text-6xl text-center">
            <div>
              {text.split("").map((letter, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 0 }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.1,
                  }}
                >
                  {letter}
                </motion.span>
              ))}
              😊
            </div>
          </div>

          {/* FORM CONTAINER */}
          <form
            onSubmit={sendEmail}
            ref={form}
            className="w-full max-w-lg bg-red-50 rounded-xl text-lg flex flex-col gap-6 p-6 sm:p-8 md:p-10 lg:p-12 shadow-lg"
          >
            <label className="flex flex-col gap-1">
              <span className="font-medium">Name:</span>
              <input
                name="name"
                type="text"
                className="w-full bg-transparent border-b-2 border-black outline-none px-2 py-1 text-base sm:text-lg"
                required
              />
            </label>

            <label className="flex flex-col gap-1">
              <span className="font-medium">Title:</span>
              <input
                name="title"
                type="text"
                className="w-full bg-transparent border-b-2 border-black outline-none px-2 py-1 text-base sm:text-lg"
                required
              />
            </label>

            <label className="flex flex-col gap-1">
              <span className="font-medium">Dear Dhanush,</span>
              <textarea
                rows={5}
                name="user_message"
                className="w-full bg-transparent border-b-2 border-black outline-none px-2 py-1 resize-none text-base sm:text-lg"
                required
              />
            </label>

            <label className="flex flex-col gap-1">
              <span className="font-medium">My mail address is:</span>
              <input
                name="user_email"
                type="email"
                className="w-full bg-transparent border-b-2 border-black outline-none px-2 py-1 text-base sm:text-lg"
                required
              />
            </label>

            <span className="font-medium">Regards</span>
            <button className="w-full bg-purple-200 rounded font-semibold text-gray-700 py-3 hover:bg-purple-300 transition">
              Send
            </button>

            {success && (
              <span className="text-green-600 font-semibold text-center">
                Your message has been sent successfully!
              </span>
            )}
            {error && (
              <span className="text-red-600 font-semibold text-center">
                Something went wrong!
              </span>
            )}
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactPage;