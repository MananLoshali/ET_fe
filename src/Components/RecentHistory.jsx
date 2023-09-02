import React from "react";
import LatestExpense from "./LatestExpense";

const RecentHistory = () => {
  return (
    <div className="w-full">
      <p className="w-full text-center mt-12 lg:mt-0 md:mt-0 text-2xl font-mono font-bold ">
        Recent History
      </p>
      <LatestExpense />
    </div>
  );
};

export default RecentHistory;
