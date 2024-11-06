import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
const servicios = [
  {
    titulo: "Atención Médico-Psiquiatra",
    descripcion:
      "Consulta especializada para diagnóstico y tratamiento psiquiátrico.",
    imagen: "/img1.svg",
  },
  {
    titulo: "Terapias Individuales",
    descripcion:
      "Sesiones personalizadas enfocadas en el bienestar emocional y mental.",
    imagen: "/img5.svg",
  },
  {
    titulo: "Terapias Grupales",
    descripcion:
      "Espacios para compartir y superar juntos situaciones difíciles.",
    imagen: "/img4.svg",
  },
  {
    titulo: "Talleres de Cuidados Mentales",
    descripcion:
      "Actividades para aprender técnicas de autocuidado y manejo emocional.",
    imagen: "/img3.svg",
  },
  {
    titulo: "Terapia para Ansiedad",
    descripcion:
      "Reducción de síntomas de ansiedad y manejo de ataques de pánico.",
    imagen: "/img2.svg",
  },
  {
    titulo: "Tratamiento de Trastornos Alimenticios",
    descripcion:
      "Intervenciones para mejorar la relación con la alimentación y la imagen corporal.",
    imagen: "/img7.svg",
  },
];
const textItemVariants = {
  hidden: {
    opacity: 0,
    x: 50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};
const Servicios = () => {
  const navigate = useNavigate();
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const titleVariants = {
    hidden: {
      opacity: 0,
      y: -20,
    },
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
    <section id="Servicios" className="p-6 pt-16 bg-color1">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={titleVariants}
      >
        <h2 className="text-2xl font-bold text-center text-color6">
          Servicios & Tratamientos
        </h2>
        <p className="text-center text-gray-600 mt-2">
          Psiquiatras especializados en el tratamiento medico y terapéutico de
          los distintos problemas mentales
        </p>
      </motion.div>

      <div className="container mx-auto px-4">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8 justify-items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {servicios.map((servicio, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-white rounded-lg shadow-md overflow-hidden w-full max-w-xs"
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="h-48 p-4 flex items-center justify-center bg-white"
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.2 },
                }}
              >
                <img
                  src={servicio.imagen}
                  alt={servicio.titulo}
                  className="w-32 h-32 object-contain"
                />
              </motion.div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-color5">
                  {servicio.titulo}
                </h3>
                <p className="text-color5 mt-2">{servicio.descripcion}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <motion.button
        className="mt-6 bg-color6 text-color1 px-6 py-3 rounded-full mx-auto block"
        variants={textItemVariants}
        whileHover={{
          scale: 1.05,
          boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)",
        }}
        whileTap={{ scale: 0.95 }}
        onClick={() => navigate("/servicios")}
      >
        Mas informacion
      </motion.button>
    </section>
  );
};

export default Servicios;
