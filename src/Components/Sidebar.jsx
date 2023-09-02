import React from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import DashboardIcon from "@mui/icons-material/Dashboard";
import RedeemIcon from "@mui/icons-material/Redeem";
import PaymentIcon from "@mui/icons-material/Payment";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Sidebar = () => {
  const { user } = useSelector((state) => state.users);
  const { totalBalance } = useSelector((state) => state.amounts);
  const currentUser = user.user;
  const name = currentUser.username;

  const path = window.location.pathname;
  const list = [
    {
      name: "Dashboard",
      link: "/",
      image: <DashboardIcon />,
    },
    {
      name: "Income",
      link: "/incomes",
      image: <RedeemIcon />,
    },
    {
      name: "Expenses",
      link: "/expenses",
      image: <PaymentIcon />,
    },
    {
      name: "Transactions",
      link: "/",
      image: <CreditScoreIcon />,
    },
  ];

  return (
    <div
      className={` lg:relative min-h-max w-full border-2 border-white rounded-xl bg-purple-200 flex lg:w-1/5 lg:h-[520px] lg:flex-col md:w-1/4 md:h-full md:flex-col`}
    >
      <div className=" w-1/4 pt-2 pb-2 pl-2 border-r-rose-200 border-r-2 lg:w-full lg:flex lg:border-b-rose-200 lg:border-b-2 lg:border-r-0 lg:justify-around md:w-full md:flex md:border-b-rose-200 md:border-b-2 md:border-r-0 md:justify-around">
        <div className="hidden lg:block md:hidden">
          <div className="w-14 h-14 border-2 rounded-full border-purple-700"></div>
        </div>
        <div className="w-2/3">
          <h3 className="font-bold text-purple-600 text-xl font-mono lg:font-semibold md:font-semibold md:text-2xl">
            {name}
          </h3>
          <p className="hidden lg:block md:hidden">$ {totalBalance} Balance</p>
        </div>
      </div>

      <div className="w-3/4 flex justify-around lg:w-full lg:flex-col lg:mt-5 lg:mb-5 lg:gap-4 md:w-full md:flex-col md:mt-5 md:mb-5 md:gap-4 ">
        {list.map((item) => (
          <div
            key={item.name}
            className="w-3/4 flex items-center flex-col gap-2 pt-1 lg:w-full lg:flex-row lg:pl-1 lg:gap-0 lg:pt-0 md:w-full md:flex-row md:pl-1 md:gap-0 md:pt-0 "
          >
            {path === item.link && (
              <div className="w-8 h-2 bg-blue-500 rounded-b-lg lg:h-8 lg:w-2 lg:rounded-r-md lg:rounded-b-none  md:h-8 md:w-2 md:rounded-r-md md:rounded-b-none"></div>
            )}

            <Link to={item.link}>
              <div className="w-full lg:flex md:flex md:ml-4 cursor-pointer active:bg-slate-500 lg:p-3 md:p-3 rounded-lg transition-colors duration-200 delay-75">
                <div className="w-full flex justify-center items-center active:bg-orange-500 lg:w-1/4">
                  {item.image}
                </div>
                <div className="hidden lg:w-2/3 lg:block md:block md:text-lg md:text-purple-800 font-mono">
                  {item.name}
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <div className="hidden lg:absolute lg:bottom-4 lg:left-2 lg:flex lg:bg-red-400 lg:p-2 lg:rounded-lg lg:border-2 lg:border-red-500 shadow-lg shadow-red-900 active:shadow-none transition-shadow">
        <button className="ml-3 text-md font-semibold font-sans">
          <LogoutIcon />
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
