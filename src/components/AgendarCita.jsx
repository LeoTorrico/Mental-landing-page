import React from "react";
import { motion } from "framer-motion";

const opcionesCita = [
  {
    tipo: "Consulta Virtual",
    descripcion: "Atención personalizada desde la comodidad de tu hogar",
    icono: (
      <svg
        className="w-12 h-12 text-color6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    enlace: "https://calendly.com/drferconsulta/consulta-psiquiatria-clon",
  },
  {
    tipo: "Consulta Presencial",
    descripcion:
      "Atención directa en consultorio con todas las medidas de seguridad",
    icono: (
      <svg
        className="w-12 h-12 text-color6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        />
      </svg>
    ),
    enlace: "https://calendly.com/drferconsulta/atencion1",
  },
];

const AgendarCita = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="agendarCita" className="p-6 pt-16 bg-gray-50">
      <div className="container mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-2xl font-bold text-center text-color6"
        >
          Agendar Cita
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mt-4 text-center text-color5 max-w-2xl mx-auto"
        >
          Reserva tu cita y da el primer paso hacia tu bienestar. Elige la
          modalidad que mejor se adapte a tus necesidades.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {opcionesCita.map((opcion, index) => (
            <motion.a
              key={index}
              href={opcion.enlace}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.div
                className="bg-white p-8 rounded-lg shadow-md transition-all duration-300 transform border border-gray-100"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="flex flex-col items-center text-center">
                  <motion.div
                    className="mb-4"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {opcion.icono}
                  </motion.div>
                  <h3 className="text-xl font-semibold text-color5 mb-2">
                    {opcion.tipo}
                  </h3>
                  <p className="text-gray-600 mb-6">{opcion.descripcion}</p>
                  <motion.button
                    className="bg-color6 text-white px-6 py-2 rounded-full hover:bg-color8 transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Agendar ahora
                  </motion.button>
                </div>
              </motion.div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgendarCita;
