import { motion } from "motion/react";
import React from "react";

function Marquee({ imageurls, direction }) {
  return (
    <div className="flex w-full overflow-hidden">
      <motion.div
        initial={{ x: direction === "left" ? "0" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "0" }}
        transition={{ ease: "linear", duration: 20, repeat: Infinity }}
        className="flex invert flex-shrink-0 py-10 gap-40 pr-40"
      >
        {imageurls.map((url, index) => (
          <img className="w-[8vw]" key={index} src={url} />
        ))}
      </motion.div>
      <motion.div
        initial={{ x: direction === "left" ? "0" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "0" }}
        transition={{ ease: "linear", duration: 20, repeat: Infinity }}
        className="flex invert flex-shrink-0 py-10 gap-40 pr-40"
      >
        {imageurls.map((url, index) => (
          <img className="w-[8vw]" key={index} src={url} />
        ))}
      </motion.div>
    </div>
  );
}

export default Marquee;
