import { useState, useEffect } from "react";

const useCounter = (initScore, assignable, setAssignable) => {
  useEffect(() => {
    //re-init when profile is changed
    setCount(initScore);
    setAssignable(0);
  }, [initScore]);

  const [count, setCount] = useState(initScore);

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
