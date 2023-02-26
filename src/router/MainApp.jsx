import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Footer, Header } from "../components/Components";
import { Cart, Home, ListIncome, ListProduct, ProductAdd, ProductDetail, ProductUpdate, Transaction } from "../pages/Pages";
import PrivateRoute from "./PrivateRoute";
import dataProducts from "../assets/json/products.json"

const MainApp = () => {
  const [Products, SetProducts] = useState(dataProducts);

  const [formUpdateProduct, setformUpdateProduct] = useState({
    id:0,
    title: "",
    stock: "",
    price: "",
    description: "",
    image: "/img/product4.png",
  });
  
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home Products={Products} />} />
          <Route path="/detail/:id" element={<ProductDetail Products={Products} />} />

          <Route path="/" element={<PrivateRoute/>}>
            <Route path="/cart" element={<Cart />} />
            <Route path="/profile" element={<Transaction />} />
            <Route path="/add" element={<ProductAdd Products={Products} SetProducts={SetProducts} />} />
            <Route path="/product-update/:id" element={<ProductUpdate Products={Products} SetProducts={SetProducts} formUpdateProduct={formUpdateProduct} setformUpdateProduct={setformUpdateProduct} />} />
            <Route path="/list-product" element={<ListProduct Products={Products} SetProducts={SetProducts} formUpdateProduct={formUpdateProduct} setformUpdateProduct={setformUpdateProduct}/>} />
            <Route path="/list-income" element={<ListIncome />} />
          </Route>

        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default MainApp;
