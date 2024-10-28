import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-color5 text-color1 p-4 fixed w-full z-10">
      <div className="flex justify-between items-center">
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>
      <ul
        className={`${
          isOpen ? "block" : "hidden"
        } md:flex justify-center space-x-8 mt-4 md:mt-0`}
      >
        <li>
          <a href="#inicio" className="cursor-pointer hover:underline">
            Inicio
          </a>
        </li>
        <li>
          <a href="#quienesSomos" className="cursor-pointer hover:underline">
            Quienes Somos
          </a>
        </li>
        <li>
          <a href="#servicios" className="cursor-pointer hover:underline">
            Servicios
          </a>
        </li>
        <li>
          <a href="#equipo" className="cursor-pointer hover:underline">
            Equipo
          </a>
        </li>
        <li>
          <a href="#agendarCita" className="cursor-pointer hover:underline">
            Agendar Cita
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
