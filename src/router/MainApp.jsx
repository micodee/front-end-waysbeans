import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Footer, Header } from "../components/Components";
import { Cart, Home, ListIncome, ListProduct, ProductAdd, ProductDetail, Transaction } from "../pages/Pages";
import PrivateRoute from "./PrivateRoute";

const MainApp = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<ProductDetail />} />

          <Route path="/" element={<PrivateRoute/>}>
            <Route path="/cart" element={<Cart />} />
            <Route path="/profile" element={<Transaction />} />
            <Route path="/add" element={<ProductAdd />} />
            <Route path="/list-product" element={<ListProduct />} />
            <Route path="/list-income" element={<ListIncome />} />
          </Route>

        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default MainApp;
