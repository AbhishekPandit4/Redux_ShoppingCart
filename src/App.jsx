import React from "react";
import "./App.css";
import CartsPage from "./components/CartsPage";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    
    <BrowserRouter>
    <Navbar />
        <Routes>
          <Route path="/" element={<ProductCard />} />
          <Route path="/cart" element={<CartsPage />} />
        </Routes>
      </BrowserRouter>
    
  );
}

export default App;
