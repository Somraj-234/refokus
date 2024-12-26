import React from "react";

function Stripe({val}) {
  return (
    <div className="w-[16.66%] px-6 py-4 border-t-[1.2px] border-b-[1.2px] border-r-[1.2px] border-zinc-600 flex justify-between items-center">
        <img className="w-28 h-6 invert" src={val.url} alt="" />
        <span className="font-semibold">{val.number}</span>
    </div>
  );
}

export default Stripe;
