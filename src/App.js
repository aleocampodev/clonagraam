import React, { useState, useEffect } from "react";
import Footer from "./components/Footer";
import Home from "./components/Home";
import "./styles/_main.scss";

function App() {
  return (
    <div className="bg-first vh-100  d-flex flex-column justify-content-center pt-3">
      <Home />
      <Footer />
    </div>
  );
}

export default App;
