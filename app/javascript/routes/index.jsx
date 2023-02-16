import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../components/Home"
import EditProduct from "../components/products/edit-product";
import FormProduct from "../components/products/form-product";
import NewProduct from "../components/products/new-product";
import Product from "../components/products/product";

function Router(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<Product/>} />
        <Route path="/products/new" element={<FormProduct isNewForm={true} />} />
        <Route path="/products/:id/edit" element={<EditProduct/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router;
