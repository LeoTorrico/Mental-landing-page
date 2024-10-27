import React from "react";
import InicioPage from "../components/InicioPage";
import QuienesSomos from "../components/QuienesSomos";
import Servicios from "../components/Servicios";
import AgendarCita from "../components/AgendarCita";
import Equipo from "../components/Equipo";
function Inicio() {
  return (
    <main>
      <InicioPage />
      <QuienesSomos />
      <Servicios />
      <Equipo />
      <AgendarCita />
    </main>
  );
}

export default Inicio;
