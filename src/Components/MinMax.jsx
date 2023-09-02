import React from "react";

const MinMax = ({ item }) => {
  console.log(item);
  return (
    <div className="w-full flex flex-col gap-1">
      <div className=" w-full flex justify-around border border-slate-400 rounded-xl border-b-0">
        <p className="font-semibold text-lg font-serif">Min</p>
        <p className="font-extrabold text-2xl font-serif">{item.name}</p>
        <p className="font-semibold text-lg font-serif">Max</p>
      </div>
      <div className="w-full flex justify-between border-2 rounded-2xl px-8 pt-1 pb-1 mb-5 border-t-0">
        <p className="font-bold text-lg text-yellow-600">{item.min}</p>
        <p className="font-bold text-lg text-green-600">{item.max}</p>
      </div>
    </div>
  );
};

export default MinMax;
