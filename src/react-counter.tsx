// Implement a Counter component with two buttons:
// “Increase” and “Decrease”, which displays the current counter value.
import React, { useState } from "react";

function Counter() {
  // Your code goes here
  const [counter, setCounter] = useState<number>(0);
  return (
    <>
      <div className="counter-value">{counter}</div>
      <button
        className="increment-btn"
        onClick={() => setCounter((prev) => ++prev)}
      >
        Increase
      </button>
      <button
        className="decrement-btn"
        onClick={() => setCounter((prev) => --prev)}
      >
        Decrease
      </button>
    </>
  );
}

export default Counter;
