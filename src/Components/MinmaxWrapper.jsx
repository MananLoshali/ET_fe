import React from "react";
import MinMax from "./MinMax";
import { useSelector } from "react-redux";

const MinmaxWrapper = () => {
  const { minIncome, maxIncome, minExpense, maxExpense } = useSelector(
    (state) => state.amounts
  );

  const list = [
    {
      name: "Income",
      min: `$ ${minIncome}`,
      max: `$ ${maxIncome}`,
    },
    {
      name: "Expense",
      min: `$ ${minExpense}`,
      max: `$ ${maxExpense}`,
    },
  ];
  return (
    <>
      <div className="w-3/4 h-[1px] bg-emerald-400 mt-4 mb-1 mx-auto lg:hidden md:hidden"></div>
      <div className="w-full h-[1px] bg-emerald-400 mb-1 lg:hidden md:hidden"></div>
      <div className="w-3/4 h-[1px] bg-emerald-400 mx-auto lg:hidden md:hidden"></div>

      <div className="w-full mt-3 ">
        {list.map((item) => (
          <MinMax item={item} key={item.name} />
        ))}
      </div>
    </>
  );
};

export default MinmaxWrapper;
