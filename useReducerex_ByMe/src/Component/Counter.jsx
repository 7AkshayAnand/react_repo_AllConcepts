import React, { useReducer } from "react";

const listReducer = (state, action) => {
  let lstmodified = state;
  if (action.type === "sqr") {
    lstmodified = [...action.newlist];
  } else if (action.type === "cube") {
    lstmodified = [...action.newlist];
  }
  return lstmodified;
};

const Counter = () => {
  const [listItems, dispatchList] = useReducer(listReducer, [1, 2, 3, 4]);

  function funDispatch1() {
    const newlist = listItems.map((item) => item * item);
    const newdisp = {
      type: "sqr",
      newlist: newlist,
    };
    dispatchList(newdisp);
  }

  function funDispatch2() {
    const newlist = listItems.map((item) => item * item * item);
    const newdisp = {
      type: "cube",
      newlist: newlist,
    };
    dispatchList(newdisp);
  }

  return (
    <div>
      <p>initial list items are {listItems}</p>
      <button onClick={() => funDispatch1()}> click for square</button>
      <button onClick={() => funDispatch2()}> click for cube</button>
    </div>
  );
};

export default Counter;
