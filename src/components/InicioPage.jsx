import React from "react";
import { motion } from "framer-motion";

const InicioPage = () => (
  <section className="flex items-center justify-center bg-color1 p-6 min-h-screen overflow-hidden">
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center max-w-xl p-4 mt-10"
    >
      <motion.h2
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-color6 font-semibold text-lg"
      >
        Atención PRESENCIAL y VIRTUAL
      </motion.h2>

      <motion.h1
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.4,
          type: "spring",
          stiffness: 100,
        }}
        className="text-[78px] font-extrabold text-color5 mt-2"
      >
        MENTAL
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="text-color5 mt-4"
      >
        Cuidamos de tu bienestar mental con un enfoque personalizado y
        profesional, ayudándote a encontrar el equilibrio y la tranquilidad en
        cada etapa de tu vida.
      </motion.p>

      <motion.button
        className="mt-6 bg-color6 text-color1 px-10 py-3 rounded-full"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Agendar cita
      </motion.button>
    </motion.div>
  </section>
);

export default InicioPage;
