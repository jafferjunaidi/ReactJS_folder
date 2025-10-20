import React from "react";
import "./App.css";
import Home from "./Home";
import Gallery from "./Gallery";
import About from "./About";
import { Route, Routes } from "react-router-dom";



function App() {
  return (
    <>
     <Routes>
      <Route path="/"  element={<Home />} />
      <Route path="/gallery" element={<Gallery /> } />
      <Route path="/about" element={<About />} />
     </Routes>
    </>
  );
}

export default App
