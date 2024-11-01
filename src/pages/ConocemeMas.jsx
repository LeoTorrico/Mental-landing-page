import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Brain, Heart, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
const AboutMe = () => {
  const navigate = useNavigate();
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="min-h-screen bg-color1 py-16">
      <motion.div
        className="max-w-6xl mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Hero Section con imagen y texto */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-16">
          {/* Imagen */}
          <motion.div className="relative mt-8" variants={itemVariants}>
            <motion.div
              className="absolute inset-0 bg-color6 rounded-full opacity-10"
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
            <motion.img
              src="/imgDr.png"
              alt="Dr. Fernando A. Alvarez Gonzales"
              className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] object-cover rounded-full relative z-10"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          </motion.div>

          {/* Texto de introducción */}
          <motion.div
            className="text-center md:text-left max-w-xl"
            variants={itemVariants}
          >
            <h2 className="text-4xl font-bold text-color6 mb-4">
              Dr. Fernando A. Alvarez Gonzales
            </h2>
            <p className="text-xl text-color5 mb-6">
              Médico Psiquiatra-Terapeuta
            </p>
            <p className="text-color5 leading-relaxed">
              Especializado en el diagnóstico y tratamiento de trastornos
              mentales y emocionales, combinando conocimientos neurobiológicos
              con terapias avanzadas para un tratamiento integral.
            </p>
          </motion.div>
        </div>

        {/* Tarjetas de especialidades */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <motion.div
            className="bg-white p-6 rounded-lg shadow-md"
            variants={cardVariants}
            whileHover={{ scale: 1.02 }}
          >
            <Brain className="w-12 h-12 text-color6 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Especialización</h3>
            <p className="text-color5">
              Diagnóstico y tratamiento especializado de trastornos mentales y
              emocionales
            </p>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-lg shadow-md"
            variants={cardVariants}
            whileHover={{ scale: 1.02 }}
          >
            <Star className="w-12 h-12 text-color6 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Enfoque</h3>
            <p className="text-color5">
              Terapias cognitivo conductual y dialéctica conductual con base
              científica
            </p>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-lg shadow-md"
            variants={cardVariants}
            whileHover={{ scale: 1.02 }}
          >
            <Heart className="w-12 h-12 text-color6 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Compromiso</h3>
            <p className="text-color5">
              Tratamiento integral personalizado para mejorar la calidad de vida
            </p>
          </motion.div>
        </div>

        {/* Descripción detallada */}
        <motion.div
          className="bg-white p-8 rounded-lg shadow-lg"
          variants={itemVariants}
        >
          <p className="text-gray-700 leading-relaxed mb-6">
            Como médico psiquiatra, enfoco mi práctica en la comprensión de los
            mecanismos cerebrales y neuroquímicos subyacentes a diversas
            patologías psiquiátricas. Mi formación integral combina un profundo
            conocimiento de las bases neurobiológicas de la salud mental con
            terapias cognitivo conductual y dialéctica conductual.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Este enfoque médico-científico me permite ofrecer un abordaje
            personalizado, basado en la evidencia y orientado a resultados
            concretos en la mejora del bienestar de cada paciente.
          </p>

          <motion.button
            className="inline-flex items-center gap-2 bg-color6 text-white px-6 py-3 rounded-full font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/agendar-cita")}
          >
            Agenda una consulta
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutMe;
