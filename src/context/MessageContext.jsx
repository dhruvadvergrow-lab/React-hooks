import { useState } from "react";

import { createContext } from "react";

export const MessageContext = createContext();

export const MessageProvider = ({ children }) => {
  const [message, setMessage] = useState("Hello");
  const changeText = () => {
    setMessage("Byeeee");
  };
  return (
    <>
      <MessageContext.Provider value={{ message, setMessage, changeText }}>
        {children}
      </MessageContext.Provider>
    </>
  );
};
