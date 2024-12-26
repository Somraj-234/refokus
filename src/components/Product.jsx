import React from "react";
import Button from "./Button";

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
          <div className="flex gap-10">
            <a href={val.link}>{val.live && <Button title="live" />}</a>
            {val.casestudy && <Button title="case study" />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
