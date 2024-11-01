import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuVariants = {
    closed: {
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.2,
      },
    },
    open: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.2,
      },
    },
  };

  const letterVariants = {
    initial: { y: 20, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <nav className="bg-color5 text-color1 fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo MENTAL */}
          <motion.div
            initial="initial"
            animate="animate"
            className="flex space-x-1 md:ml-0 ml-0 absolute md:relative left-1/2 md:left-0 transform -translate-x-1/2 md:translate-x-0"
          >
            {["M", "E", "N", "T", "A", "L"].map((letter, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                transition={{ delay: index * 0.1 }}
                className="text-2xl font-bold tracking-wider"
              >
                {letter}
              </motion.span>
            ))}
          </motion.div>

          {/* Hamburger Button */}
          <button
            className="md:hidden relative z-50 p-2 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="w-6 flex flex-col items-end space-y-1.5">
              <motion.span
                animate={{
                  rotate: isOpen ? 45 : 0,
                  y: isOpen ? 8 : 0,
                }}
                className="w-full h-0.5 bg-color1 block transform origin-center"
              />
              <motion.span
                animate={{
                  opacity: isOpen ? 0 : 1,
                }}
                className="w-4/5 h-0.5 bg-color1 block"
              />
              <motion.span
                animate={{
                  rotate: isOpen ? -45 : 0,
                  y: isOpen ? -8 : 0,
                }}
                className="w-full h-0.5 bg-color1 block transform origin-center"
              />
            </div>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex justify-center flex-1">
            <ul className="flex space-x-8">
              <li>
                <Link
                  to="/"
                  className="hover:text-gray-300 transition-colors duration-200"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  to="/sobre-nosotros"
                  className="hover:text-gray-300 transition-colors duration-200"
                >
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link
                  to="/servicios"
                  className="hover:text-gray-300 transition-colors duration-200"
                >
                  Servicios
                </Link>
              </li>
              <li>
                <Link
                  to="/conoceme-mas"
                  className="hover:text-gray-300 transition-colors duration-200"
                >
                  Conóceme Más
                </Link>
              </li>
              <li>
                <Link
                  to="/agendar-cita"
                  className="hover:text-gray-300 transition-colors duration-200"
                >
                  Agendar Cita
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="fixed inset-0 bg-color5 z-40 flex items-center justify-center md:hidden"
            >
              <ul className="flex flex-col items-center space-y-8 text-xl">
                <motion.li
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to="/"
                    className="hover:text-gray-300 transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    Inicio
                  </Link>
                </motion.li>
                <motion.li
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to="/sobre-nosotros"
                    className="hover:text-gray-300 transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    Sobre Nosotros
                  </Link>
                </motion.li>
                <motion.li
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to="/servicios"
                    className="hover:text-gray-300 transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    Servicios
                  </Link>
                </motion.li>
                <motion.li
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to="/conoceme-mas"
                    className="hover:text-gray-300 transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    Conóceme Más
                  </Link>
                </motion.li>
                <motion.li
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to="/agendar-cita"
                    className="hover:text-gray-300 transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    Agendar Cita
                  </Link>
                </motion.li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
