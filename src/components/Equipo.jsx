import React from "react";
import { motion } from "framer-motion";

const Equipo = () => {
  // Variantes para la animación de la imagen
  const imageVariants = {
    hidden: {
      scale: 0.8,
      opacity: 0,
      rotate: -10,
    },
    visible: {
      scale: 1,
      opacity: 1,
      rotate: 0,
      transition: {
        type: "spring",
        duration: 1,
        bounce: 0.3,
      },
    },
  };

  // Variantes para el contenedor del texto
  const textContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  // Variantes para los elementos de texto individuales
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

  return (
    <section
      id="team"
      className="py-12 bg-color3 flex flex-col items-center md:flex-row md:justify-center px-8 md:px-16 gap-8"
    >
      <motion.div
        className="flex-1 flex justify-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={imageVariants}
      >
        <motion.div
          className="w-[320px] h-[320px] md:w-[470px] md:h-[470px] bg-white rounded-full flex items-center justify-center"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <motion.img
            src="/imgDr.png"
            alt="Dr. Fernando A. Alvarez Gonzales"
            className="w-[300px] h-[300px] md:w-[450px] md:h-[450px] object-cover rounded-full"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
        </motion.div>
      </motion.div>

      <motion.div
        className="flex-1 text-center md:text-left md:w-1/2"
        variants={textContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.h2
          className="text-color6 font-semibold text-lg"
          variants={textItemVariants}
        >
          Dr. Fernando A. Alvarez Gonzales
        </motion.h2>

        <motion.h3
          className="text-xl font-bold text-color5 mt-2"
          variants={textItemVariants}
        >
          Psiquiatra-Terapeuta
        </motion.h3>

        <motion.p
          className="text-color5 mt-4 leading-relaxed"
          variants={textItemVariants}
        >
          Psiquiatra especializado en el diagnóstico y tratamiento de trastornos
          mentales y emocionales. Combina conocimientos en neurobiología y
          terapias cognitivo-conductuales para ofrecer un enfoque personalizado
          que mejora significativamente la calidad de vida de sus pacientes.
        </motion.p>

        <motion.button
          className="mt-6 bg-color6 text-color1 px-6 py-3 rounded-full"
          variants={textItemVariants}
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)",
          }}
          whileTap={{ scale: 0.95 }}
        >
          Conoceme más
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Equipo;
