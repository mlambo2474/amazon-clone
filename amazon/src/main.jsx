import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { ShoppingState } from "./context/shopping/ShoppingState.jsx";
import {SearchContextProvider} from "./context/SearchContext" ;

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
 < SearchContextProvider>
      <ShoppingState>
        <App />
      </ShoppingState>
       </ SearchContextProvider>
  </BrowserRouter>
);
