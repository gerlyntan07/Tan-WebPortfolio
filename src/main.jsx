import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Header from "/src/Header.jsx";
import PopupMenu from "/src//PopupMenu";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <>
      <Header />
    </>
  </StrictMode>
);
