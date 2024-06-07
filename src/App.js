import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import Body from "./components/Body";
import Footer from "./components/Footer";
import WhatsAppWidget from "./components/WhatsAppWidget";
import Login from "./components/Login";
import Register from "./components/Register";
import Cart from "./components/Cart";
import ProductDetail from "./components/ProductDetail";
import ProductsByCategory from "./components/ProductByCategory";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/category/:category" element={<ProductsByCategory />} />
        </Routes>
      </div>
    </Router>
  );
};

const Home = () => (
  <>
    <Navbar />
    <Carousel />
    <Body />
    <WhatsAppWidget />
    <Footer />
  </>
);

export default App;
