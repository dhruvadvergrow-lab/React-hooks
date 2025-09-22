import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Parent } from "./components/Parent.jsx";
import { Dependencies } from "./components/Dependencies.jsx";
import { LevelThree } from "./context/LevelThree.jsx";
import { MessageProvider } from "./context/MessageContext.jsx";
import { Demo } from "./ractMemo/Demo.jsx";
import { Cart } from "./ractMemo/Cart.jsx";
import { Custom } from "./ractMemo/Custom.jsx";
import { ParentCompo } from "./usecallback/ParentCompo.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Cart /> */}
    {/* <Parent /> */}
    {/* <Dependencies /> */}
    {/* <MessageProvider>
      <LevelThree />
    </MessageProvider> */}
    {/* <Demo /> */}
    {/* <Custom /> */}
    <ParentCompo />
  </StrictMode>
);
