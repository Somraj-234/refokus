import { motion } from "motion/react";
import { div } from "motion/react-client";
import React from "react";

function Marquee({ iconname, stackicons, direction }) {
  return (
    <div className="flex w-full overflow-hidden">
      <motion.div
        initial={{ x: direction === "left" ? "0" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "0" }}
        transition={{ ease: "linear", duration: 80, repeat: Infinity }}
        className="flex flex-shrink-0 py-10 gap-32 pr-40"
      >
        {stackicons.map((icon, index) => (
          <div key={index} className="flex justify-center items-center gap-4">
            <div className="w-8 h-8">
              {icon}
            </div>
            <p className="text-2xl font-medium">{iconname[index]}</p>
          </div>
        ))}
      </motion.div>
      <motion.div
       initial={{ x: direction === "left" ? "0" : "-100%" }}
       animate={{ x: direction === "left" ? "-100%" : "0" }}
        transition={{ ease: "linear", duration: 80, repeat: Infinity }}
        className="flex flex-shrink-0 py-10 gap-32 pr-40"
      >
        {stackicons.map((icon, index) => (
          <div key={index} className="flex justify-center items-center gap-4">
          <div className="w-8 h-8">
            {icon}
          </div>
          <p className="text-2xl font-medium">{iconname[index]}</p>
        </div>
        ))}
      </motion.div>
    </div>
  );
}

export default Marquee;
