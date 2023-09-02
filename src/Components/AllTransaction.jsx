import React from "react";
import Amounts from "./Amounts";
import Graph from "./Graph";
import RecentHistory from "./RecentHistory";
import MinmaxWrapper from "./MinmaxWrapper";

const AllTransaction = () => {
  return (
    <div className="lg:w-3/4 lg:h-[520px] lg:shadow-lg lg:shadow-fuchsia-400 lg:bg-slate-300 lg:border-4 lg:border-white lg:rounded-2xl lg:p-3 lg:flex lg:justify-between">
      <div className=" lg:w-[48%]">
        <Graph />
        <Amounts />
      </div>
      <div className="lg:w-[48%] md:w-[48%]">
        <RecentHistory />
        <MinmaxWrapper />
      </div>
    </div>
  );
};

export default AllTransaction;
