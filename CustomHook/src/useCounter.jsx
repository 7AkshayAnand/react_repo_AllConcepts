import { useState } from "react";

const useCounter = (initialValue = 0, step = 1) => {
  const [count, setCount] = useState(initialValue);

  const increment = () => {
    const newcount = count + step;
    // setCount((prevCount) => prevCount + step);
    setCount(newcount);
  };

  const decrement = () => {
    setCount((prevCount) => prevCount - step);
  };

  const reset = () => {
    setCount(initialValue);
  };

  return { count, increment, decrement, reset };
};

export default useCounter;

// In this example:

/*The useCounter custom hook takes two optional parameters (initialValue and step) and initializes a state variable count using useState.
It provides three functions (increment, decrement, and reset) that update the count state based on the specified step value or reset it to the initial value.
The hook returns an object with the current count value and the three functions.
Now, you can use this custom hook in any component to manage a counter:

In this example, CounterComponent uses the useCounter hook to manage a counter with an initial value of 0 and a step of 2. The component renders the current count and three buttons for incrementing, decrementing, and resetting the counter.*/
