import { motion } from "motion/react";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

function Card({ width, first, second, start, para, hover = "false" }) {
  return (
    <motion.div
      whileHover={{
        backgroundColor: hover === "true" && "#7443ff",
        padding: "25px",
      }}
      className={`bg-zinc-800 p-5 rounded-lg ${width} min-h-[30rem] flex flex-col justify-between`}
    >
      <div className="relative w-full ">
        {first && (
          <>
            <div className="w-ful flex justify-between items-center">
              <h3>Personal Information</h3>
              <IoIosArrowRoundForward />
            </div>

            <h1 className="w-56 text-3xl font-medium mt-5">Who I am?</h1>
            <p className="text-zinc-500">I'm <span className="text-white">Somraj Jadhav</span>,  software engineer with a passion for building scalable and efficient systems with beautiful user interfaces and experiences. I'm currently <span className="text-white">open for work</span> and have a strong skillset in <span className="text-white">frontend development, python, and UI/UX design.</span></p>
          </>
        )}
        {second && (
          <>
            <div className="w-ful flex justify-between items-center">
              <h3>Get in touch.</h3>
              <IoIosArrowRoundForward />
            </div>

            <h1 className="w-56 text-3xl font-medium mt-5">
              Let's get it to it, together.
            </h1>
          </>
        )}
      </div>

      <div className="down w-full mt-30">
        {start && (
          <>
            <h1 className="text-8xl font-medium tracking-tight leading-none">
              Start a Project
            </h1>
            <a href="mailto:jadhavsomraj234@gmail.com">
              <button className="rounded-full px-5 py-2 border-[1px] border-zinc-50 mt-5">
                Contact Us
              </button>
            </a>
          </>
        )}
        {para && (
          <p className="text-md text-zinc-500">Explore what drives me more.</p>
        )}
      </div>
    </motion.div>
  );
}

export default Card;
