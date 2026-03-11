import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./main.css";
import StoreContextWrapper from "./store/StoreContext.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <StoreContextWrapper>
      <App />
    </StoreContextWrapper>
  </StrictMode>
);
