import React, { useCallback, useState } from "react";

export const ParentCompo = () => {
  const [count, setCount] = useState(0);

  //   const handleClick = () => {
  //     console.log("button was clicked");
  //   };
  //   const handleClick = useCallback(() => {
  //     // setCount(count + 1);
  //     console.log("button was clicked");
  //   }, []);
  const handleClick = useCallback(() => {
    // setCount(count + 1);
    console.log("button was clicked");
  }, []);

  return (
    <div>
      <h1>Parent</h1>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <ChildCompo onClick={handleClick} />
    </div>
  );
};

export const ChildCompo = React.memo(({ onClick }) => {
  console.log("Chile re-render");
  return (
    <>
      <div>
        <h1>Child Compo</h1>
        <button onCanPlay={onClick}>Click me</button>
      </div>
    </>
  );
});
