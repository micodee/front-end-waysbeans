import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Footer, Header } from "../components/Components";
import { Cart, Home, ListIncome, ListProduct, ProductAdd, ProductDetail, Transaction } from "../pages/Pages";

const MainApp = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail" element={<ProductDetail />} />
          <Route path="/add" element={<ProductAdd />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={<Transaction />} />
          <Route path="/list-product" element={<ListProduct />} />
          <Route path="/list-income" element={<ListIncome />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default MainApp;
