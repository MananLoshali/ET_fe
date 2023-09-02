import React, { useState } from "react";
import { addAmounts } from "../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";

const Form = ({ type, options }) => {
  const { user } = useSelector((state) => state.users);
  const currentUser = user.user;

  const { error, isFetching } = useSelector((state) => state.amounts);

  const dispatch = useDispatch();
  const amount_type = type.toLowerCase();
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState();
  const [date, setDate] = useState();
  const [option, setOption] = useState("");
  const [reference, setReference] = useState("");
  const [warning, setWarning] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    if (!title || !amount || !date || !option || !reference) {
      setWarning("All fields are necessary");
      return;
    }

    console.log(title, amount, date, reference, option, amount_type);
    addAmounts(
      dispatch,
      { title, amount, date, option, reference, amount_type },
      currentUser._id,
      amount_type
    );
  };

  return (
    <div className="lg:w-1/3 md:w-full lg:relative">
      <h1
        className={`text-center mt-4 font-extrabold text-xl font-serif ${
          type === "Expense" ? "text-red-500" : "text-green-500"
        } lg:text-left uppercase`}
      >
        {`ADD ${type}`}
      </h1>

      <form
        className="w-full min-h-max  p-2
  flex flex-col gap-4 pb-0 "
      >
        <input
          className="pl-2 py-1 rounded-md bg-violet-100 border-dashed border-2 border-green-500 focus:outline-none"
          type="text"
          name="source"
          placeholder={`Enter title`}
          onChange={(e) => {
            setTitle(e.target.value);
            setWarning("");
          }}
        />
        <input
          className="pl-2 py-1 rounded-md bg-violet-100 border-dashed border-2 border-green-500 focus:outline-none"
          type="number"
          name="amount"
          placeholder={`Enter Amount`}
          onChange={(e) => {
            setAmount(e.target.value);
            setWarning("");
          }}
        />
        <input
          className="pl-2 py-1 rounded-md bg-violet-100 border-dashed border-2 border-green-500 focus:outline-none cursor-pointer"
          type="date"
          name="date"
          placeholder="Enter a date"
          onChange={(e) => {
            setDate(e.target.value);
            setWarning("");
          }}
        />
        <select
          className="w-1/2 ml-auto pl-2 py-1 rounded-md bg-violet-100 border-dashed border-2 border-green-500 focus:outline-none"
          name="source_type"
          onChange={(e) => {
            setOption(e.target.value);
            setWarning("");
          }}
        >
          {options.map((item) => (
            <option key={item} value={`${item}`}>
              {item}
            </option>
          ))}
        </select>
        <input
          className="pl-2 py-1 rounded-md bg-violet-100 border-dashed border-2 border-green-500 focus:outline-none"
          type="text"
          name="reference"
          placeholder={`Add a reference`}
          onChange={(e) => {
            setReference(e.target.value);
            setWarning("");
          }}
        />
        <button
          onClick={handleClick}
          disabled={isFetching}
          className="w-1/2 bg-pink-400 text-white mx-auto lg:w-1/3 p-1 rounded-3xl shadow-lg shadow-pink-800 border-2 border-pink-500 active:shadow-none transition-shadow duration-100 disabled:cursor-not-allowed disabled:bg-green-500"
        >{`+ Add ${type}`}</button>
      </form>
      {warning && (
        <p className="text-lg text-red-500 font-mono lg:absolute lg:-bottom-7">
          {warning}
        </p>
      )}
      {error && (
        <p className="text-base text-red-500 font-mono">Something went wrong</p>
      )}
    </div>
  );
};

export default Form;
