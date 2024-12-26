import React from "react";
import { IoIosReturnRight } from "react-icons/io";

function Button({ title = "Get started", onClick }) {
  return (
    <div 
      onClick={onClick}
      className="w-fit px-4 py-2 bg-zinc-100 rounded-full text-black flex items-center justify-between gap-2 cursor-pointer hover:bg-zinc-200 transition-colors"
    >
      <span className="text-sm">{title}</span>
      <IoIosReturnRight />
    </div>
  );
}

export default Button;