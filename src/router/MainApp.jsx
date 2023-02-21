import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Footer, Header } from "../components/Components";
import { Home, Detail } from "../pages/Pages";

const MainApp = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail" element={<Detail />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default MainApp;
