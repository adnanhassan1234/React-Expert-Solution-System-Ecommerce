import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ContextProduct from "./Context/ContextProduct";
import FilterContext from "./Context/FilterContext";
import Cart_context from "./Context/Cart_context";

ReactDOM.render(
  <ContextProduct>
    <FilterContext>
      <Cart_context>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Cart_context>
    </FilterContext>
  </ContextProduct>,
  document.getElementById("root")
);
