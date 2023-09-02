import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import IncomeComponent from "../Components/IncomeComponent";
import Footer from "../Components/Footer";
import { useSelector } from "react-redux";

const Incomes = () => {
  // const { allAmounts, incomes, expenses } = useSelector(
  //   (state) => state.amounts
  // );
  // console.log(allAmounts);
  // console.log(incomes);
  // console.log(expenses);
  var dates = new Date();
  var date = dates.toString().split(" ");
  var month = date[1];
  var day = date[0];
  var today = date[2];
  var year = date[3];

  var finalDate = `${day} ${today}-${month}-${year}`;
  const list = [
    {
      name: "Salary",
      amount: "$9450",
      date: finalDate,
      reference: "My first salary",
    },
    {
      name: "Salary",
      amount: "$9450",
      date: finalDate,
      reference: "My first salary",
    },
    {
      name: "Salary",
      amount: "$9845",
      date: finalDate,
      reference: "My first salary",
    },
    {
      name: "Salary",
      amount: "$9450",
      date: finalDate,
      reference: "My first salary",
    },
    {
      name: "Salary",
      amount: "$9450",
      date: finalDate,
      reference: "My first salary",
    },
    {
      name: "Salary",
      amount: "$9450",
      date: finalDate,
      reference: "My first salary",
    },
    {
      name: "Salary",
      amount: "$9450",
      date: finalDate,
      reference: "My first salary",
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="lg:w-full lg:h-full lg:flex lg:justify-between md:w-full">
        <Sidebar />
        {/* <IncomeComponent list={list} /> */}
        <IncomeComponent />
      </div>
      <Footer />
    </div>
  );
};

export default Incomes;
