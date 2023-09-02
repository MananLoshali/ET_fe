import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Sidebar from "../Components/Sidebar";
import ExpenseComponent from "../Components/ExpenseComponent";

const Expenses = () => {
  var dates = new Date();
  var date = dates.toString().split(" ");
  var month = date[1];
  var day = date[0];
  var today = date[2];
  var year = date[3];

  var finalDate = `${day} ${today}-${month}-${year}`;
  const list = [
    {
      name: "Shoping",
      amount: "$98",
      date: finalDate,
      reference: "My first shopping",
    },
    {
      name: "Shoping",
      amount: "$98",
      date: finalDate,
      reference: "My first shopping",
    },
    {
      name: "Shoping",
      amount: "$98",
      date: finalDate,
      reference: "My first shopping",
    },
    {
      name: "Shoping",
      amount: "$98",
      date: finalDate,
      reference: "My first shopping",
    },
    {
      name: "Shoping",
      amount: "$98",
      date: finalDate,
      reference: "My first shopping",
    },
    {
      name: "Shoping",
      amount: "$98",
      date: finalDate,
      reference: "My first shopping",
    },
    {
      name: "Shoping",
      amount: "$98",
      date: finalDate,
      reference: "My first shopping",
    },
  ];
  return (
    <div>
      <Navbar />
      <div className="lg:w-full lg:h-full lg:flex lg:justify-between md:w-full">
        <Sidebar />
        {/* <ExpenseComponent list={list} /> */}
        <ExpenseComponent />
      </div>
      <Footer />
    </div>
  );
};

export default Expenses;
