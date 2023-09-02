import React from "react";
import AmountCard from "./AmountCard";
import { useSelector } from "react-redux";

const Amounts = () => {
  const { totalBalance, totalExpense, totalIncome } = useSelector(
    (state) => state.amounts
  );

  const list = [
    {
      name: "Total Income",
      amount: `${totalIncome}`,
      classes: ["-left-9 -top-11", "text-green-400"],
    },
    {
      name: "Total Expense",
      amount: `${totalExpense}`,
      classes: ["left-9 bottom-28", "text-red-500"],
    },
    {
      name: "Balance",
      amount: `${totalBalance}`,
      classes: ["-right-9 -bottom-11", "text-yellow-500"],
    },
  ];
  return (
    <div className="mt-16 w-4/5 mx-auto h-[22rem] relative bg-emerald-200 border-2 rounded-2xl border-white shadow-lg shadow-cyan-600 lg:w-full lg:h-56 lg:mt-5 lg:bg-slate-300 lg:mx-0 lg:static lg:border-0 lg:rounded-none lg:shadow-none lg:flex lg:justify-around lg:flex-wrap">
      {list.map((item) => (
        <AmountCard
          key={item.name}
          name={item.name}
          amount={item.amount}
          classes={item.classes}
        />
      ))}
    </div>
  );
};

export default Amounts;
