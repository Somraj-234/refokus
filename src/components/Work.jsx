import React, { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "motion/react";

function Work() {
  const [images, setImages] = useState([
    { url: "src/assets/obys.png", top: "50%", left: "50%", isActive: false },
    { url: "src/assets/fend.png", top: "56%", left: "44%", isActive: false },
    { url: "src/assets/saas.png", top: "45%", left: "56%", isActive: false },
    { url: "src/assets/obys2.png", top: "60%", left: "53%", isActive: false },
    { url: "src/assets/blog.png", top: "43%", left: "40%", isActive: false },
    { url: "src/assets/ui.png", top: "65%", left: "55%", isActive: false },
  ]);

  //  TO GET THE SCROLL PROGRESS ON Y AXIS IN 0 TO 1 VALUES FOR TOP 0 AND FOR BOTTOM 1
  const { scrollYProgress } = useScroll();

  // IF scrollYProgress VALUE CHNAGES GET THAT DATA
  scrollYProgress.on("change", (data) => {
    // GOT IMAGE INDEX ARRAY AS arr
    function imagesShow(arr) {
      // GET previous STATE OF setImages
      setImages((prev) =>
        // USING MAP FUNCTION WILL GET EACH ITEM AND INDEX OF IT
        prev.map((item, index) =>
          // WILL FIND INDEX OF PASSED arr VALUES
          arr.indexOf(index) === -1
            ? // IF IT DOESN'T GET INDEX IT WILL NOT SHOW THE IMAGE
              { ...item, isActive: false }
            : // BUT IF IT GET INDEX IT WILL  SHOW THE IMAGE
              { ...item, isActive: true }
        )
      );
    }

    // SWITCH CASE WHERE CASE VALUE IS SCOLL PERCENTAGE FOR 0% NO IMAGE WILL SHOW AS THE PERCENTAGE INCREASES IMAGES WILL BE DISPLAYED
    switch (Math.floor(data * 100)) {
      case 0:
        imagesShow([]);
        break;
      case 1:
        imagesShow([0]); // 0 MEANS FIRST IMAGE'S INDEX WHICH WE WANT TO SHOW,IT IS PASSED THROUGH AN ARRAY THAT VALUE WILL BE GET PASSED TO imagesShow
        break;
      case 2:
        imagesShow([0, 1]);
        break;
      case 3:
        imagesShow([0, 1, 2]);
        break;
      case 4:
        imagesShow([0, 1, 2, 3]);
        break;
      case 6:
        imagesShow([0, 1, 2, 3, 4]);
        break;
      case 8:
        imagesShow([0, 1, 2, 3, 4, 5]);
        break;
    }
  });

  return (
    <div className="w-full">
      <div className="relative max-w-screen-xl mx-auto">
        <h1 className="text-[38vw] font-medium text-center select-none leading-none pt-10">
          work
        </h1>
        <div className="absolute top-0 w-full h-full">
          {images.map(
            (elem, index) =>
              elem.isActive && (
                <img
                  key={index}
                  className="absolute w-52 h-52 object-cover rounded-lg -translate-x-[50%] -translate-y-[50%]"
                  src={elem.url}
                  style={{ top: elem.top, left: elem.left }}
                ></img>
              )
          )}
        </div>
      </div>
    </div>
  );
}

export default Work;
