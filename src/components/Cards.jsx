import React from "react";
import Card from "./Card";

function Cards() {
  return (
    <div className="w-full">
      <div className="max-w-screen-xl mx-auto py-32 flex gap-2">
        <Card width={"basis-2/5"} first={true} start={false} para={true} />
        <Card width={"basis-3/5"} second={true} start={true} para={false} hover={"true"} />
      </div>
    </div>
  );
}

export default Cards;
