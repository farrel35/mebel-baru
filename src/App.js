import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import Body from "./components/Body";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Carousel />
      <Body />
      <Footer />
    </div>
  );
};

export default App;
