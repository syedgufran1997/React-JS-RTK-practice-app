import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "./cakeSlice";

export const CakeView = () => {
  const numberOfCakes = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Number of Cake View - {numberOfCakes}</h2>
      <button onClick={() => dispatch(ordered())}>Order cakes </button>
      <button onClick={() => dispatch(restocked(1))}>Restocked cakes</button>
    </div>
  );
};
