import React from "react";
import Stripe from "./Stripe";

function Stripes() {
  var data = [
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d300a4cce143f24735d3_sevdesk-black.svg",
      number: "48",
    },
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/66979aab7dc661744003a210_logo-black.svg",
      number: "2",
    },
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b5306b05c2b704224d_65b2ca264ed8d89bad9b331c_Logo%2520Black%25201.svg",
      number: "11",
    },
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b597d53302df1b88f5_660191f0bd52de169c0dbc94_Logo-black.svg",
      number: "48",
    },
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b850995827afaa8db4_633c148b9b819badd7bbcde8_627a8d3e69e23713762e6b34_Vector.svg",
      number: "2",
    },
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b8724afca0a36e7e8d_633c148cf63c4467416f9bea_61ee848c05ba9c9caff5fd64_yahoo.svg",
      number: "11",
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
