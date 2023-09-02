import React, { useEffect, useState } from "react";
import { request } from "../requestMethods";
import { useSelector } from "react-redux";

const LatestExpense = () => {
  const { user } = useSelector((state) => state.users);
  const currentUser = user.user;
  const id = currentUser._id;
  const [latest, setLatest] = useState([]);

  const getAmounts = async () => {
    const res = await request.get(`/amounts/get/${id}?new=true`);
    setLatest(res.data);
    console.log(res.data);
    console.log(latest.amounts);
  };

  useEffect(() => {
    getAmounts();
    //react-hooks/exhaustive-deps
  }, []);

  // const list = [
  //   {
  //     name: "Travelling",
  //     amount: "$500",
  //   },
  //   {
  //     name: "Shopping",
  //     amount: "$300",
  //   },
  //   {
  //     name: "Donation",
  //     amount: "$800",
  //   },
  // ];

  return (
    // <div>
    //   {list.map((item) => (
    //     <div
    //       className="flex justify-between p-4 border-2 border-white
    //      rounded-xl mt-4 shadow-inner shadow-red-400"
    //     >
    //       <p>{item.name}</p>
    //       <p>{item.amount}</p>
    //     </div>
    //   ))}
    // </div>

    <div>
      {latest.amounts?.map((item) => (
        <div
          key={item._id}
          className={`flex justify-between p-4 border-2 border-white
         rounded-xl mt-4 shadow-inner text-lg font-semibold font-mono ${
           item.amount_type === "incomes"
             ? "shadow-green-600"
             : "shadow-red-600"
         }  ${
           item.amount_type === "incomes" ? "text-green-500" : "text-red-500"
         }  `}
        >
          <p>{item.title}</p>
          <p>$ {item.amount}</p>
        </div>
      ))}
    </div>
  );
};

export default LatestExpense;
