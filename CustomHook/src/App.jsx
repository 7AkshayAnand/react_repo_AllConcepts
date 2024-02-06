import React, { useState } from "react";
import useCounter from "./useCounter";
import useJustIncrement from "./useJustIncrement";

const App = () => {
  const { count, increment, decrement, reset } = useCounter(0, 2);

  const { countnew, incrementCount } = useJustIncrement();
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
      <p>now we are fetching count from useJustIncrement</p>
      <h1>cout new value is {countnew}</h1>
      <button onClick={incrementCount}>countnew</button>
    </div>
  );
};

export default App;

/* we have created two hooks useCounter and useJustInrement where useJustIncrement just increase count value by 1 every time */
