import React, { useState } from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LoginIcon from "@mui/icons-material/Login";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNavClick = () => {
    setNav((preValue) => !preValue);
  };

  return (
    <div className="min-h-max w-full border-2 bg-purple-300 border-white rounded-2xl pt-1 pb-1 mb-6 transition-all duration-1000 ease-in-out">
      <div className="w-full flex h-full items-center ">
        <div className=" hidden  w-1/3 items-center lg:flex lg:justify-around md:flex md:justify-around">
          <Link to="/signin">
            <div className="block text-lg text-purple-800 cursor-pointer font-semibold">
              <LoginIcon />
              SignIn
            </div>
          </Link>
          <Link to="/signup">
            <div className="block text-lg text-purple-800 cursor-pointer font-semibold">
              <AppRegistrationIcon />
              SignUp
            </div>
          </Link>
        </div>
        {/* <div className="w-2/3 flex justify-end font-bold text-2xl text-purple-800 lg:w-1/3 lg:justify-center md:justify-center">
          expenseTracker
        </div> */}

        <div className="w-2/3 flex justify-end font-bold text-2xl text-purple-800 lg:w-1/3 lg:justify-center md:justify-center">
          <Link to="/">expenseTracker</Link>
        </div>

        <div className=" hidden  w-1/3 items-center lg:flex lg:justify-around md:flex md:justify-around">
          <Link to="/profile">
            <div className="block text-lg text-purple-800 cursor-pointer font-semibold">
              <AccountCircleIcon />
              Profile
            </div>
          </Link>
          <div className="block text-lg text-purple-800 cursor-pointer font-semibold">
            <LogoutIcon />
            Sign Out
          </div>
        </div>
        <div
          className=" w-1/3 flex justify-end pr-9 font-bold text-2xl text-slate-700 cursor-pointer lg:hidden md:hidden"
          onClick={handleNavClick}
        >
          {nav ? <p>-</p> : <p>+</p>}
        </div>
      </div>
      {nav && (
        <div className="w-full flex flex-col gap-2 items-center pt-3 pb-3 border-t-2 mt-3 border-white">
          <Link to="/signin">
            <span className="text-lg text-purple-800 cursor-pointer font-semibold active:text-xl">
              Sign In
            </span>
          </Link>
          <Link to="/signup">
            <span className="text-lg text-purple-800 cursor-pointer font-semibold active:text-xl">
              Sign Up
            </span>
          </Link>
          <Link to="/profile">
            <div className="  text-lg text-purple-800 cursor-pointer font-semibold active:text-xl">
              Profile
            </div>
          </Link>
          <div className="  text-lg text-purple-800 cursor-pointer font-semibold active:text-xl">
            Sign Out
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
