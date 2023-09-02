import React from "react";

import { useSelector } from "react-redux";

const Total = ({ type, textColor }) => {
  const income = useSelector((state) => state.amounts.totalIncome);
  const expense = useSelector((state) => state.amounts.totalExpense);
  console.log(income, expense);
  return (
    <div className="w-full min-h-max flex justify-center bg-slate-400 items-center border-2 border-white rounded-lg shadow-lg shadow-blue-400 py-3">
      <span className="font-bold font-mono text-lg text-black lg:text-xl">
        {`Total ${type} : `}
      </span>
      <span
        className={`font-extrabold font-mono text-lg lg:text-xl text-${textColor} ml-1`}
      >
        $ {type === "Incomes" ? `${income}` : `${expense}`}
      </span>
      {/* change the textcolor for income and expenses using peer class property */}
    </div>
  );
};

export default Total;
