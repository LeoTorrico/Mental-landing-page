import React from "react";
import { motion } from "framer-motion";

const QuienesSomos = () => {
  const fadeIn = {
    initial: {
      opacity: 0,
      y: 30,
    },
    whileInView: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const slideIn = {
    initial: {
      x: -100,
      opacity: 0,
    },
    whileInView: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="quienesSomos"
      className="py-12 bg-color3 flex flex-col md:flex-row items-center md:items-start px-8 md:px-16 gap-8"
    >
      <motion.div
        className="flex-1 flex justify-center"
        variants={slideIn}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true, margin: "-100px" }}
      >
        <img
          src="/mental.png"
          alt="Logo de la consultora"
          className="w-[300px] h-[300px] md:w-[450px] md:h-[450px] object-contain"
        />
      </motion.div>
      <motion.div
        className="flex-1 text-center md:text-left md:w-1/2 mt-14"
        variants={fadeIn}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true, margin: "-100px" }}
      >
        <h2 className="text-color6 font-semibold text-lg">¿Quiénes Somos?</h2>
        <h3 className="text-3xl font-bold text-color5 mt-2">
          Atención integral
        </h3>
        <p className="text-color5 mt-4 leading-relaxed">
          Somos una consultora especializada en salud mental en Bolivia,
          conformada por profesionales en psiquiatría y terapias
          cognitivo-conductuales. Nos dedicamos a brindar atención integral,
          enfocada en el bienestar emocional y mental de cada persona. Creemos
          en un enfoque bio-psicosocial y en la importancia de crear un ambiente
          seguro y acogedor.
        </p>
        <motion.button
          className="mt-6 bg-color6 text-color1 px-6 py-3 rounded-full"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Sobre nosotros
        </motion.button>
      </motion.div>
    </section>
  );
};

export default QuienesSomos;
