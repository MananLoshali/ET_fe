import React, { useState } from "react";
import { signIn } from "../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";

const SignIn = () => {
  const dispatch = useDispatch();
  const { error, isFetching } = useSelector((state) => state.users);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [warning, setWarning] = useState();

  const handleClick = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setWarning("All fields are necessary");
      return;
    }
    signIn(dispatch, { email, password });
  };

  return (
    <div className="w-full h-screen  bg-white flex justify-center items-center rounded-2xl shadow-lg shadow-black">
      <div className="w-11/12 h-3/4 bg-black lg:w-3/4 lg:h-3/4  bg-center bg-no-repeat bg-cover flex justify-center items-center rounded-2xl shadow-lg shadow-black">
        <form className="w-11/12 bg-amber-200 lg:w-2/5 h-auto rounded-md shadow-lg shadow-fuchsia-400 flex flex-col gap-3 p-5">
          <h1 className="text-center text-4xl font-mono">Sign In</h1>
          <input
            className="p-2 rounded-xl focus:outline-none"
            type="text"
            name="username"
            placeholder="Enter email"
            onChange={(e) => {
              setEmail(e.target.value);
              setWarning("");
            }}
          />

          <input
            className="p-2 rounded-xl focus:outline-none"
            type="password"
            name="password"
            placeholder="Enter password"
            onChange={(e) => {
              setPassword(e.target.value);
              setWarning("");
            }}
          />

          <button
            onClick={handleClick}
            disabled={isFetching}
            className="w-2/5 lg:w-[30%] p-2 rounded-lg m-auto text-white text-lg font-semibold font-mono border-transparent border border-blue-500 bg-violet-600 cursor-pointer disabled:cursor-not-allowed disabled:bg-green-500"
          >
            Sign In
          </button>
          {warning && (
            <p className="text-lg text-red-500 font-mono">{warning}</p>
          )}
          {error && (
            <p className="text-base text-red-500 font-mono">
              Something went wrong
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default SignIn;
