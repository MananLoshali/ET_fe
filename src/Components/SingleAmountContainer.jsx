import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import NoteRoundedIcon from "@mui/icons-material/NoteRounded";
import SavingsRoundedIcon from "@mui/icons-material/SavingsRounded";
import { useSelector, useDispatch } from "react-redux";
import { deleteAmounts } from "../redux/apiCalls";

const SingleAmountContainer = ({ item }) => {
  const dispatch = useDispatch();
  const handleDelete = (id, type) => {
    deleteAmounts(dispatch, id, type);
  };
  return (
    <div className="w-full p-2 flex h-[4.5rem] border-2 border-fuchsia-700 rounded-lg">
      <div className="w-[10%] flex justify-center items-center ">
        <SavingsRoundedIcon />
      </div>
      <div className="w-[80%] flex flex-col gap-1  pl-4 justify-start">
        {/* <div className="w-full font-bold text-lg">{item.name}</div> */}
        <div className="w-full font-bold text-lg">{item.title}</div>

        <div className="w-full flex flex-row gap-1">
          {/* <p>{`${item.amount}`}</p> */}
          <p>${`${item.amount}`}</p>

          <div className="min-w-max flex items-center ml-4">
            <p className="pr-1">
              <CalendarMonthIcon />
            </p>
            {/* <p>{item.date}</p> */}
            <p>{item.date}</p>
          </div>
          <div className=" hidden lg:min-w-max lg:flex lg:items-center ml-4">
            <p className="pr-1">
              <NoteRoundedIcon />
            </p>
            {/* <p>{item.reference}</p> */}
            <p>{item.reference}</p>
          </div>
        </div>
      </div>
      <button
        className="w-[8%] flex justify-center items-center border-l-2 border-red-700 cursor-pointer"
        onClick={() => handleDelete(item._id, item.amount_type)}
      >
        <DeleteIcon sx={{ color: "red", fontSize: "2.4rem" }} />
      </button>
    </div>
  );
};

export default SingleAmountContainer;
