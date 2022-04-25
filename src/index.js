import React from "react";
import ReactDOM from "react-dom/client";

import { MyStore } from "./ulti/store";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./page/Home";
import Cart from "./page/Cart";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <MyStore>
      <BrowserRouter>
        <Link to="/home">Trang chủ</Link>
        <Link to="/cart">Giỏ hàng</Link>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </MyStore>
  </>
);