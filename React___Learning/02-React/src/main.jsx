import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { mainStore } from "./store/index";
createRoot(document.getElementById("root")).render(
  <Provider store={mainStore}>
    <App />
  </Provider>
);
