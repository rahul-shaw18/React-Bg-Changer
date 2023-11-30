import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(15);
  console.log("count");
  const handleInc = () => {
    
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
  };
  const handleDec = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <p>Counter {count}</p>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>Inc</button>
      <button onClick={handleDec}>Dec</button>
    </div>
  );
};

export default Counter;
