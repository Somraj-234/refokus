import React, { useState } from "react";
import Product from "./Product";
import { motion } from "motion/react";

function Products() {
  var prodcuts = [
    {
      title: "Bityboi",
      description:
      "A modern URL shortener built using Django REST, React, and Tailwind. Includes login, Google auth, click tracking, and multi-delete.",
      live: true,
      casestudy: false,
      url: "./bityboi2.png",
      link: "https://bityboi.vercel.app/",
     github: "https://github.com/Somraj-234/bityboi",
    },
    {
      title: "Communion",
      description:
      "A social platform to connect with people based on shared interests, hobbies, and location. Create groups, chat, organize or attend events, and build communities.",
      live: true,
      casestudy: false,
      url: "./communion.png",
      link: "https://communionhub.org/",
      info: "Note: Communion is a public project I worked on as a frontend developer during my internship at the company. I was responsible for designing and developing the user interface for both projects."
    },
    {
      title: "Vidgencraft",
      description:
      "An AI-based content generation tool that lets users create images, videos, and audio using text or media input, with a built-in media library and multi-model support.",
      live: true,
      casestudy: false,
      url: "./vidgencraft.png",
      link: "https://vidgencraft.com/",
       info: "Note: Vidgencraft is a public project I worked on as a frontend developer during my internship at the company. I was responsible for designing and developing the user interface for both projects."
    },
    {
      title: "Food Chain",
      description:
      "Landing page design for a vegan sandwich chain with delivery tracking, restaurant management, and order insights.",
      live: false,
      casestudy: true,
      url: "./ui2.png",
      link: "https://www.figma.com/proto/ozBFHWtNwLddfWylRZRlJa/Restaurant-Management-SaaS?node-id=9-2&t=FKXxf1lh3WWxZ1WM-1",
    },
  ];

  const [pos, setPos] = useState(0);
  const mover = (val) => {
    setPos(val * 23);
  };

  return (
    <div className="mt-28 relative">
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
          
        </motion.div>
      </div>
    </div>
  );
}

export default Products;
