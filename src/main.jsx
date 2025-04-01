import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./main.css";
import Template from "./template.jsx";
import { BrowserRouter, HashRouter } from "react-router-dom";

//Fil der bliver loadet på index.html, og den loader template componentet.
//Og er vores template, så og sige.
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter>
      <Template />
    </HashRouter>
  </StrictMode>
);
