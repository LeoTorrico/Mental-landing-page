// src/App.jsx
import React from "react";
import Navbar from "./components/Navbar";
import Inicio from "./pages/Inicio";
import Footer from "./components/Footer";
const App = () => {
  return (
    <div className="font-title">
      <Navbar />
      <Inicio />
      <Footer />
    </div>
  );
};

export default App;
