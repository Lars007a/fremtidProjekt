import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./main.css";
import App from "./template.jsx";

//Fil der bliver loadet på index.html, og den loader template componentet.
//Og er vores template, så og sige.
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
