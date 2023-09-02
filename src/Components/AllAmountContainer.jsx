import React, { useEffect } from "react";
import SingleAmountContainer from "./SingleAmountContainer";
import { useDispatch, useSelector } from "react-redux";
import { getExpenses, getIncomes } from "../redux/apiCalls";
import IncomeComponent from "./IncomeComponent";
// import { getAmounts } from "../redux/apiCalls";

const AllAmountContainer = ({ type }) => {
  const { incomes } = useSelector((state) => state.amounts);
  const { expenses } = useSelector((state) => state.amounts);

  return (
    <>
      <div className="p-1 w-full min-h-max h-80 overflow-y-scroll lg:w-[64%] flex flex-col mt-5 gap-4 border ">
        {type === "incomes"
          ? incomes?.map((item) => (
              <SingleAmountContainer item={item} key={item._id} />
            ))
          : expenses?.map((item) => (
              <SingleAmountContainer item={item} key={item._id} />
            ))}

        {/* {incomes.map((item) => (
          <SingleAmountContainer item={item} />
        ))} */}
      </div>
    </>
  );
};

export default AllAmountContainer;
