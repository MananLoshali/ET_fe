import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { useSelector } from "react-redux";

const MyProfile = () => {
  const { user } = useSelector((state) => state.users);
  const { totalIncome, totalExpense, totalBalance } = useSelector(
    (state) => state.amounts
  );
  const currUser = user.user;
  const username = currUser.username;
  const email = currUser.email;
  console.log(username, email, totalBalance, totalExpense, totalIncome);
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
        <p>{`${username}`}</p>
        <p>{`${email}`}</p>
        <p>{`$ ${totalIncome}`}</p>
        <p>{`$ ${totalExpense}`}</p>
        <p>{`$ ${totalBalance}`}</p>
      </div>
    </>
  );
};

export default MyProfile;
