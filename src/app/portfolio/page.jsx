"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

// Add this at the top of your file or in a separate CSS file
const scrollbarHidingStyles = `
  /* Hide scrollbars for Chrome, Safari and Opera */
  ::-webkit-scrollbar {
    display: none;
  }
  
  /* Hide scrollbars for IE, Edge and Firefox */
  html, body {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }
`;

const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "Web Development Startup - dreamdvpr",
    desc: "developed the company websites and all the clients webiste and maintained and updated them",
    img: "/dreamdvpr.png",
    link: "https://dreamdvpr.com",
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "Full stack website for a client - NOTARC",
    desc: "developed the website withand content management and athentication for the client NOTARC and maintained and updated them",
    img: "/notarc.png",
    link: "https://notarc.in",
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "Landing Page and Blog - dyuthidentalcare.com",
    desc: "developed the website with blog and content management and athentication for the client dyuthidentalcare.com and maintained and updated them",
    img: "/dyuthidental.png",
    link: "https://www.dyuthidentalcare.com/",
  },
  {
    id: 4,
    color: "from-purple-300 to-red-300",
    title: "Product showcase and landing page for client -bigscreensbengaluru",
    desc: "developed product store and content management and athentication for the client bigscreensbengaluru.com and maintained and updated them",
    img: "/bigscreens.png",
    link: "https://www.bigscreensbengaluru.com/",
  },
];

const PortfolioPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <>
      {/* Add style tag to hide scrollbars */}
      <style jsx global>{scrollbarHidingStyles}</style>
      
      <motion.div
        className="h-full"
        initial={{ y: "-200vh" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1 }}
      >
        <div className="h-[600vh] relative" ref={ref}>
          <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
            My Works
          </div>
          <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
            <motion.div style={{ x }} className="flex">
              <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
              {items.map((item) => (
              <div
                className={`min-h-screen w-screen flex items-start justify-start px-6 py-10 bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col gap-6 text-white md:gap-8 lg:gap-10">
                  {/* Title (Smaller) */}
                  <h1 className="text-xl font-bold md:text-3xl lg:text-4xl xl:text-5xl">
                    {item.title}
                  </h1>

                  {/* Image */}
                  <div className="relative w-72 h-48 md:w-96 md:h-60 lg:w-[500px] lg:h-[320px] xl:w-[600px] xl:h-[380px]">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className="object-cover object-center rounded-lg shadow-lg"
                    />
                  </div>

                  {/* Description */}
                  <p className="w-full max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl text-sm md:text-base lg:text-lg leading-relaxed">
                    {item.desc}
                  </p>

                  {/* Button */}
                  <Link
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex"
                  >
                    <button className="px-5 py-3 md:px-6 md:py-3 lg:px-8 lg:py-4 text-sm md:text-base lg:text-lg bg-white text-gray-800 font-semibold rounded-lg shadow-md hover:bg-gray-200 transition-all duration-300">
                      See Demo
                    </button>
                  </Link>
                </div>
              </div>
              ))}
            </motion.div>
          </div>
        </div>
        <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
          <h1 className="text-6xl lg:text-8xl">Do you have a project?</h1>
          <div className="relative">
            <motion.svg
              animate={{ rotate: 360 }}
              transition={{ duration: 8, ease: "linear", repeat: Infinity }}
              viewBox="0 0 300 300"
              className="w-64 h-64 md:w-[500px] md:h-[500px] "
            >
              <defs>
                <path
                  id="circlePath"
                  d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
                />
              </defs>
              <text fill="#000">
                <textPath xlinkHref="#circlePath" className="text-xl">
                  Fullstack Developer and Engineer
                </textPath>
              </text>
            </motion.svg>
            <Link
              href="/contact"
              className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
            >
              Hire Me
            </Link>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default PortfolioPage;