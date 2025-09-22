import React from "react";

export const Person = React.memo(
  ({ name, age }) => {
    console.log("Component re-render");

    return (
      <div>
        <h1>
          {name} ,{age}
        </h1>
      </div>
    );
  },
  (prevProp, nextProp) => {
    return prevProp.name === nextProp.name;
  }
);
