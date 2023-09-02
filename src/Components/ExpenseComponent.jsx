import React from "react";
import Total from "./Total";
import AllAmountContainer from "./AllAmountContainer";
import Form from "./Form";

const ExpenseComponent = ({ list, type }) => {
  const option = [
    "Select a option",
    "Shopping",
    "Travelling",
    "Parties",
    "ShareMarket",
    "Donation",
    "Rent",
    "Others",
  ];

  return (
    <div className=" mt-4 lg:mt-0 w-full lg:w-3/4 lg:bg-red-300 lg:border-4 rounded-lg shadow-lg shadow-red-500 p-4">
      <h1 className="text-lg font-extrabold font-serif lg:text-2xl ">
        Expenses
      </h1>
      <Total type={`Expenses`} textColor={"red-500"} />
      <div className="lg:w-full lg:flex lg:justify-between ">
        <Form type={`Expenses`} options={option} />
        {/* <AllAmountContainer list={list} /> */}
        <AllAmountContainer type={"expenses"} />
      </div>
    </div>
  );
};

export default ExpenseComponent;
