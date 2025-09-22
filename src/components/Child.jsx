import React from "react";
import { useEffect } from "react";

export const Child = () => {
  let count = 0;
  useEffect(() => {
    let time = setInterval(() => {
      count++;
      // console.log("count", count);
    }, 1000);

    return () => {
      console.log("destroy");
      if (time) {
        clearInterval(time);
      }
    };
  }, []);

  return (
    <div>
      <h1>CHild</h1>
    </div>
  );
};
