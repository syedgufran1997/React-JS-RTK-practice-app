import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "./iceCreamSlice";

export const IceCreamView = () => {
  const [value, setValue] = useState(1);
  const numberOfIceCream = useSelector((state) => state.iceCream.numOfIceCream);
  const dispatch = useDispatch();
  console.log("numberOfIceCream", numberOfIceCream);

  return (
    <div>
      <h2>Number of Ice Creams - {numberOfIceCream}</h2>
      <button onClick={() => dispatch(ordered())}>Order Ice Creams</button>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(parseInt(e.target.value))}
      />
      <button onClick={() => dispatch(restocked(value))}>
        Restocked Ice Creams
      </button>
    </div>
  );
};
