import React from "react";

export const Counter = React.memo(({ count }) => {
  console.log("Counter com is rendered");
  return (
    <div>
      <h1>{count}</h1>
    </div>
  );
});
