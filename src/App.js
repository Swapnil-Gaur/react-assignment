import React from "react";
import {Routes, Route } from "react-router-dom";
import Home from "./Home";
import MarqueAnimation from "./Marqued.js";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/marque" element={<Home/>}/>
        <Route path="/discover" element={<Home/>}/> 
        <Route path="/autoslider" element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
