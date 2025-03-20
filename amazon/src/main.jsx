import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { ShoppingState } from "./context/shopping/ShoppingState.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
      <ShoppingState>
        <App />
      </ShoppingState>
  </BrowserRouter>
);
