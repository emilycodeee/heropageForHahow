import { useState, useEffect } from "react";

const useCounter = (num, assignable, setAssignable) => {
  // console.log(num);
  useEffect(() => {
    setCount(num);
    setAssignable(0);
  }, [num]);

  const [count, setCount] = useState(num);
  const incrementCounter = () => {
    if (assignable > 0) {
      setCount((prev) => prev + 1);
      setAssignable((prev) => prev - 1);
    }
  };
  const decrementCounter = () => {
    if (count > 0) {
      setCount((prev) => prev - 1);
      setAssignable((prev) => prev + 1);
    }
  };

  return [count, incrementCounter, decrementCounter];
};

export default useCounter;
