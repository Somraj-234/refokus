import React from "react";
import Stripe from "./Stripe";

function Stripes() {
  var data = [
    {
      url: "./django.svg",
    },
    {
      url: "./react.svg",
    },
    {
      url: "./tailwind.svg",
    },
    {
      url: "./flask.svg",
    },
    {
      url: "./figma.svg",
    },
    {
      url: "./selenium.svg",
    },
  ];

  return (
    <div className="flex items-center mt-20">
      {data.map((elem, index) => (
        <Stripe key={index} val={elem} />
      ))}
    </div>
  );
}

export default Stripes;
