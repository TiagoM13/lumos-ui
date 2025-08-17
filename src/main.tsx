import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { LButton } from "./components/button/button";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <h1>Hello World</h1>

    <LButton>Click Me</LButton>
  </StrictMode>,
);
