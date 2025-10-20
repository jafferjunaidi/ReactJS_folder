import React from "react";
import "./App.css";
import Home from "./Home";
import About from "./About";
import Gallery from "./Gallery";
import {  Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </>
  );
}

export default App;
