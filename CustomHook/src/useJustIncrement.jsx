import { useState } from "react";

const useJustIncrement = () => {
  const [countnew, setCount] = useState(0);

  const incrementCount = () => {
    setCount(countnew + 1);
  };
  return { countnew, incrementCount };
};

export default useJustIncrement;
