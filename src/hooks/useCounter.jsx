import { useState, useEffect } from "react";

const useCounter = (initScore, assignable, setAssignable) => {
  useEffect(() => {
    setCount(initScore);
    setAssignable(0);
  }, [initScore]);

  const [count, setCount] = useState(initScore);

  const incrementCounter = () => {
    if (assignable === 0) {
      alert("要先有多餘的能力值點數，才可以分配呦");
    }
    if (assignable > 0) {
      setCount((prev) => prev + 1);
      setAssignable((prev) => prev - 1);
    }
  };

  const decrementCounter = () => {
    if (count === 0) {
      alert("不要再減了，已經歸零啦");
    }
    if (count > 0) {
      setCount((prev) => prev - 1);
      setAssignable((prev) => prev + 1);
    }
  };

  return [count, incrementCounter, decrementCounter];
};

export default useCounter;
