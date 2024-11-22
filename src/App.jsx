import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="h-screen w-screen p-5">
      <BrowserRouter>
        <Navbar />
        <div className="w-full h-full">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
