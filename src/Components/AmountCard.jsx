import React from "react";

const AmountCard = ({ name, amount, classes }) => {
  return (
    <div
      className={`min-w-min lg:w-[45%] flex flex-col items-center rounded-2xl bg-white border-2 shadow-lg shadow-fuchsia-400 gap-2 min-h-min mt-6 p-3 absolute ${classes[0]} lg:static lg:gap-0 lg:h-24 lg:mt-0 `}
    >
      <p className="font-semibold text-xl text-gray-500">{name}</p>
      <p className={`text-base font-bold lg:text-2xl ${classes[1]}`}>
        $ {amount}
      </p>
    </div>
  );
};

export default AmountCard;
