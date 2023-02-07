import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../components/Home"
import NewProduct from "../components/products/new-product";
import Product from "../components/products/product";

function Router(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<Product/>} />
        <Route path="/products/new" element={<NewProduct/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router;
