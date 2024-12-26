import React, { useState } from "react";
import Product from "./Product";
import { motion } from "motion/react";

function Products() {
  var prodcuts = [
    {
      title: "SaaS WebApp",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore neque vero officia deleniti id quo aliquam quam ipsam porro. Dignissimos.",
      live: true,
      casestudy: false,
      url: "saas.png",
      link: "https://github.com/Somraj-234/sass-demo",
    },
    {
      title: "Blogging Blog",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore neque vero officia deleniti id quo aliquam quam ipsam porro. Dignissimos.",
      live: true,
      casestudy: false,
      url: "blog.png",
      link: "https://github.com/Somraj-234/Blogging-Blog",
    },
    {
      title: "Obys Agency",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore neque vero officia deleniti id quo aliquam quam ipsam porro. Dignissimos.",
      live: true,
      casestudy: false,
      url: "obys.png",
      link: "https://somraj-234.github.io/Obys-Agency/",
    },
    {
      title: "Job Apply Bot",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore neque vero officia deleniti id quo aliquam quam ipsam porro. Dignissimos.",
      live: true,
      casestudy: false,
      url: "jobapply.png",
      link: "https://github.com/Somraj-234/linkedin-easy-apply",
    },
    {
      title: "Food Chain",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore neque vero officia deleniti id quo aliquam quam ipsam porro. Dignissimos.",
      live: true,
      casestudy: true,
      url: "ui.png",
      link: "https://github.com/Somraj-234/",
    },
  ];

  const [pos, setPos] = useState(0);
  const mover = (val) => {
    setPos(val * 23);
  };

  return (
    <div className="mt-20 relative">
      {prodcuts.map((elem, index) => (
        <Product key={index} mover={mover} count={index} val={elem} />
      ))}
      <div className="w-full h-full absolute top-0 pointer-events-none rounded-md">
        <motion.div
          initial={{ y: pos, x: "-50%" }}
          animate={{ y: pos + `rem` }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
          className="window absolute w-[32rem] h-[23rem]  left-[43.5%] overflow-hidden rounded-md"
        >
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full"
          >
            <img className="rounded-md" src={prodcuts[0].url} alt="" />
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full "
          >
            <img className="rounded-md" src={prodcuts[1].url} alt="" />
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full "
          >
            <img className="rounded-md" src={prodcuts[2].url} alt="" />
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full "
          >
            <img className="rounded-md" src={prodcuts[3].url} alt="" />
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full object-cover"
          >
            <img className="rounded-md" src={prodcuts[4].url} alt="" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Products;
