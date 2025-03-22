"use client";

import { AnimatePresence } from "framer-motion";
import Navbar from "./navbar";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
// import Whatsup from "./whatsup"
const TransitionProvider = ({ children }) => {
  const pathName = usePathname();

  return (
    <AnimatePresence mode="wait">
      <div
        key={pathName}
        className="w-screen h-screen bg-gradient-to-b from-blue-100 to-red-100"
      >
        <motion.div
          className="transition-top h-screen w-screen fixed bg-black rounded-b-[100px]"
          style={{ zIndex: 9998, position: "fixed" }}
          animate={{ height: "0vh" }}
          exit={{ height: "140vh" }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          onAnimationComplete={() => {
            const element = document.querySelector(".transition-top");
            if (element) {
              element.style.zIndex = "-1";
              element.style.pointerEvents = "none";
              // Important: don't modify other styles
            }
          }}
        />
        <motion.div
          className="transition-text fixed m-auto top-0 bottom-0 left-0 right-0 text-white text-8xl cursor-default w-fit h-fit"
          style={{ zIndex: 9999, position: "fixed" }}
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          onAnimationComplete={() => {
            const element = document.querySelector(".transition-text");
            if (element) {
              element.style.zIndex = "-1";
              element.style.pointerEvents = "none";
              // Important: don't modify other styles
            }
          }}
        >
          {pathName.substring(1)}
        </motion.div>
        <motion.div
          className="transition-bottom h-screen w-screen fixed bg-black rounded-t-[100px] bottom-0"
          style={{ zIndex: 9997, position: "fixed" }}
          initial={{ height: "140vh" }}
          animate={{ height: "0vh", transition: { delay: 0.25 } }}
          onAnimationComplete={() => {
            const element = document.querySelector(".transition-bottom");
            if (element) {
              element.style.zIndex = "-1";
              element.style.pointerEvents = "none";
              // Important: don't modify other styles
            }
          }}
        />
        <div className="h-24">
          <Navbar />
        </div>
        <div className="h-[calc(100vh-6rem)]">{children}</div>
      </div>
      {/* <Whatsup/> */}
    </AnimatePresence>
  );
};

export default TransitionProvider;