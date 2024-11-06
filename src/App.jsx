import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Inicio from "./pages/Inicio";
import SobreNosotros from "./pages/SobreNosotros";
import AgendarCita from "./pages/AgendarCita";
import ConocemeMas from "./pages/ConocemeMas";
import PageServicios from "./pages/PageServicios";
import ScrollToTop from "./ScrollToTop";
import BlogAdmin from "./BlogAdmin";

const App = () => {
  return (
    <Router>
      <div className="font-title">
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/sobre-nosotros" element={<SobreNosotros />} />
          <Route path="/agendar-cita" element={<AgendarCita />} />
          <Route path="/conoceme-mas" element={<ConocemeMas />} />
          <Route path="/servicios" element={<PageServicios />} />
          <Route path="/admin" element={<BlogAdmin />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
