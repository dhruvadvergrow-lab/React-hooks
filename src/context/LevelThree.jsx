import React from "react";
import { useContext } from "react";
import { MessageContext } from "./MessageContext";

export const LevelThree = () => {
  const { message, changeText } = useContext(MessageContext);
  return (
    <div>
      <h1>{message}</h1>
      <button onClick={changeText}>Change The Text</button>
    </div>
  );
};
