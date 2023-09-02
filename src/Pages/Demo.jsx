import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../store_demo";

const Demo = () => {
  const dispatch = useDispatch();

  const count = useSelector((state) => state.counter);

  const increment = () => {
    dispatch(actions.inc());
  };
  const decrement = () => {
    dispatch(actions.dec());
  };
  const addby = () => {
    dispatch(actions.addBy(10));
  };

  return (
    <div>
      <p>{count}</p>
      <button onClick={increment}>INC</button>
      <br />
      <button onClick={decrement}>DEC</button>
      <br />

      <button onClick={addby}>Add by 10</button>
    </div>
  );
};

export default Demo;
