import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signUp } from "../redux/apiCalls";

const SignUp = () => {
  const dispatch = useDispatch();
  let { error, isFetching } = useSelector((state) => state.users);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [warning, setWarning] = useState();

  const handleClick = async (e) => {
    console.log("sign up clicked");
    e.preventDefault();
    if (!username || !email || !password || !confirmPassword) {
      setWarning("All fields are necessary");
      return;
    }
    if (password !== confirmPassword) {
      setWarning("Password Shold be same");
      return;
    }
    signUp(dispatch, { username, email, password });
  };

  return (
    <div className="w-full h-screen bg-white flex justify-center items-center rounded-2xl shadow-lg shadow-black">
      <div className="w-11/12 h-3/4 bg-black lg:w-3/4 lg:h-3/4 bg-center bg-no-repeat bg-cover flex justify-center items-center rounded-2xl shadow-lg shadow-black">
        <form
          className="w-11/12 bg-amber-200 lg:w-[45%] h-auto lg:h-[90%] rounded-md shadow-lg shadow-fuchsia-400 flex flex-col gap-3 p-5 pb-0"
          encType="multipart/form-data"
        >
          <h1 className="text-center text-4xl font-mono">Sign Up</h1>
          <input
            className="p-2 rounded-xl focus:outline-none"
            type="text"
            name="username"
            placeholder="Enter username"
            onChange={(e) => {
              setUsername(e.target.value);
              setWarning("");
            }}
          />
          <input
            className="p-2 rounded-xl focus:outline-none"
            type="email"
            name="email"
            placeholder="Enter email"
            onChange={(e) => {
              setEmail(e.target.value);
              setWarning("");
            }}
          />
          <input
            className="p-2 rounded-xl focus:outline-none cursor-pointer"
            type="file"
            name="userimage"
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
          <input
            className="p-2 rounded-xl focus:outline-none"
            type="password"
            name="confirmpassword"
            placeholder="Confirm password"
            onChange={(e) => {
              setConfirmPassword(e.target.value);
              setWarning("");
            }}
          />
          <button
            disabled={isFetching}
            onClick={handleClick}
            className="w-2/5 lg:w-[30%] p-2 rounded-lg mx-auto text-white text-lg font-semibold font-mono border-transparent border border-blue-500 bg-violet-600 cursor-pointer disabled:cursor-not-allowed disabled:bg-green-500"
          >
            Sign Up
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

export default SignUp;
// bg-[url('https://png.pngtree.com/thumb_back/fh260/background/20221119/pngtree-inr-500-rupees-notes-background-image-image_1486684.jpg')]
