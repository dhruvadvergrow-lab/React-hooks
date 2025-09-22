import React from "react";
import { useState } from "react";
import { Counter } from "./Counter";

export const Demo = () => {
  const [count, setCount] = useState(0);
  const [secondCount, setSecondCount] = useState(0);
  //   const [msg, setMsg] = useState("");

  //   const Increment = () => {
  //     setCount(count + 1);
  //   };
  const person = { id: 1, name: "lol" };
  return (
    <div>
      <Counter count={count} person={person} />
      <h1>{secondCount}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setSecondCount(secondCount + 1)}>
        secondIncrement
      </button>
      {/* <input
        type="text"
        placeholder="Enter something"
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
      /> */}
    </div>
  );
};
