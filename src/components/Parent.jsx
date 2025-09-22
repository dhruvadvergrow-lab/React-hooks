import React from "react";
import { useState } from "react";
import { Child } from "./Child";

export const Parent = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div>
        <h1>Parent</h1>
        <button onClick={() => setShow(!show)}>Toggle</button>
        {show ? <Child /> : null}
      </div>
    </>
  );
};
