import React, { useEffect } from "react";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import AllTransaction from "../Components/AllTransaction";
import Footer from "../Components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { getExpenses, getIncomes } from "../redux/apiCalls";

const Home = () => {
  const { incomes } = useSelector((state) => state.amounts);
  const { expenses } = useSelector((state) => state.amounts);

  const { user } = useSelector((state) => state.users);
  const currentUser = user.user;

  const dispatch = useDispatch();

  useEffect(() => {
    if (incomes.length === 0) {
      getIncomes(dispatch, currentUser._id);
    }
  }, []);

  useEffect(() => {
    if (expenses.length == 0) {
      getExpenses(dispatch, currentUser._id);
    }
  }, []);
  return (
    <div>
      <Navbar />
      <div className="lg:w-full lg:h-full lg:flex lg:justify-between">
        <Sidebar />
        <AllTransaction />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
