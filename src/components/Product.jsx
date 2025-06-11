import React from "react";
import Button from "./Button";
import { BiInfoCircle } from "react-icons/bi";
import { a } from "motion/react-client";

function Product({ val, mover, count }) {
  return (
    <div className="w-full py-20 h-[23rem] text-white">
      <div
        onMouseEnter={() => {
          mover(count);
        }}
        className="max-w-screen-xl mx-auto flex justify-between items-center gap-10"
      >
        <h1 className="w-60 text-4xl font-medium">{val.title}</h1>
        {/* <img
          className="w-[40vw] h-[18vw] object-cover object-top rounded-lg"
          src="src/assets/ui.png"
          alt=""
        /> */}
        <div className="dets w-1/3">
          <p className="mb-10">{val.description}</p>
          <div className="flex gap-4">
            <a href={val.link}>{val.live && <Button title="live" />}</a>
            {val.info &&
            <div className="flex items-center gap-2 cursor-pointer group">
            <BiInfoCircle size={20} />
            <div className="hidden group-hover:block absolute bg-zinc-800 p-4 rounded-lg max-w-xs">
              <p className="text-sm">{val.info}</p>
            </div>
            </div>}
            {val.casestudy && <a target="_blank" href={val.link}><Button title="Prototype" /></a>}
            {val.github && <a target="_blank" href={val.github}><Button title="github" /></a>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
