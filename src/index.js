import React from "react";
import ReactDOM from "react-dom/client";

import store from "./ulti/store";
import { Provider } from "react-redux";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./page/Home";
import Cart from "./page/Cart";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Provider store={store}>
      123456
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </>
);
