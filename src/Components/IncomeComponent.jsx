import React from "react";
import Total from "./Total";
import Form from "./Form";
import AllAmountContainer from "./AllAmountContainer";

const IncomeComponent = () => {
  const option = [
    "Select a option",
    "Youtube",
    "Freelancing",
    "Shopify",
    "Bitcoin",
    "Salary",
    "Stocks",
    "Others",
  ];
  return (
    <div className=" mt-4 lg:mt-0 w-full lg:w-3/4 lg:bg-green-300 lg:border-4 rounded-lg shadow-lg shadow-green-500 p-4">
      <h1 className="text-lg font-extrabold font-serif lg:text-2xl ">
        Incomes
      </h1>
      <Total type={`Incomes`} textColor={"green-600"} />
      <div className="lg:w-full lg:flex lg:justify-between ">
        <Form type={`Incomes`} options={option} />
        <AllAmountContainer type={"incomes"} />
      </div>
    </div>
  );
};

export default IncomeComponent;
