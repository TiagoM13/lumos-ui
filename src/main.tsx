import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { PButton } from "./components/button/button";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <h1>Hello World</h1>

    <PButton>Click Me</PButton>
  </StrictMode>,
);
