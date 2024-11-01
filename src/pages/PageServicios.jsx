import React from "react";
import { motion } from "framer-motion";

const servicios = [
  {
    titulo: "Terapia Cognitivo-Conductual",
    descripcion:
      "Identificar y cambiar patrones de pensamiento que afectan el comportamiento.",
    descripcionDetallada:
      "La Terapia Cognitivo-Conductual (TCC) es un enfoque terapéutico basado en evidencia que ayuda a identificar y modificar patrones de pensamiento negativos. Trabajamos juntos para desarrollar estrategias prácticas que mejoren tu bienestar emocional.",
    beneficios: [
      "Reducción de síntomas de ansiedad y depresión",
      "Mejora en la resolución de problemas",
      "Desarrollo de habilidades de afrontamiento",
      "Mayor autoconciencia y control emocional",
    ],
    imagen: "/img1.svg",
    duracion: "8-12 sesiones",
  },
  {
    titulo: "Terapia Dialéctica-Conductual",
    descripcion: "Regulación emocional y habilidades de afrontamiento.",
    descripcionDetallada:
      "La Terapia Dialéctica-Conductual (TDC) combina estrategias de cambio conductual con principios de aceptación y mindfulness. Esta terapia es especialmente efectiva para personas que experimentan emociones intensas.",
    beneficios: [
      "Mejor regulación emocional",
      "Desarrollo de habilidades de mindfulness",
      "Mejora en relaciones interpersonales",
      "Mayor tolerancia al estrés",
    ],
    imagen: "/img2.svg",
    duracion: "6 meses - 1 año",
  },
  {
    titulo: "Tratamiento para Trastornos del Ánimo",
    descripcion:
      "Diagnóstico y manejo de trastornos como depresión y trastorno bipolar.",
    descripcionDetallada:
      "Ofrecemos un enfoque integral para el tratamiento de trastornos del ánimo, combinando terapia y, cuando es necesario, manejo farmacológico. Nuestro objetivo es ayudarte a recuperar tu estabilidad emocional y calidad de vida.",
    beneficios: [
      "Evaluación psiquiátrica completa",
      "Plan de tratamiento personalizado",
      "Seguimiento regular del progreso",
      "Estrategias de prevención de recaídas",
    ],
    imagen: "/img3.svg",
    duracion: "Tratamiento continuo",
  },
  {
    titulo: "Manejo de Desregulación Emocional",
    descripcion: "Técnicas para mejorar la regulación emocional.",
    descripcionDetallada:
      "Aprende a manejar emociones intensas y desarrolla habilidades para mantener el equilibrio emocional. Utilizamos técnicas probadas que te ayudarán a responder de manera más adaptativa a situaciones desafiantes.",
    beneficios: [
      "Control de impulsos mejorado",
      "Técnicas de autorregulación",
      "Manejo efectivo del estrés",
      "Mejora en relaciones personales",
    ],
    imagen: "/img4.svg",
    duracion: "12-16 sesiones",
  },
  {
    titulo: "Terapia para Ansiedad",
    descripcion:
      "Reducción de síntomas de ansiedad y manejo de ataques de pánico.",
    descripcionDetallada:
      "Nuestro programa de tratamiento para la ansiedad utiliza técnicas basadas en evidencia para ayudarte a manejar y reducir los síntomas de ansiedad. Aprenderás estrategias prácticas para enfrentar situaciones estresantes.",
    beneficios: [
      "Reducción de síntomas físicos de ansiedad",
      "Técnicas de relajación efectivas",
      "Herramientas para manejar preocupaciones",
      "Estrategias para prevenir ataques de pánico",
    ],
    imagen: "/img5.svg",
    duracion: "8-12 sesiones",
  },
  {
    titulo: "Tratamiento de Trastornos Alimenticios",
    descripcion:
      "Intervenciones para mejorar la relación con la alimentación y la imagen corporal.",
    descripcionDetallada:
      "Proporcionamos un abordaje multidisciplinario para el tratamiento de trastornos alimenticios, trabajando en colaboración con nutricionistas y otros especialistas cuando es necesario.",
    beneficios: [
      "Mejora en la relación con la comida",
      "Desarrollo de una imagen corporal positiva",
      "Estrategias de alimentación saludable",
      "Apoyo emocional continuo",
    ],
    imagen: "/img7.svg",
    duracion: "6 meses - 1 año",
  },
];

const PageServicios = () => {
  const [servicioSeleccionado, setServicioSeleccionado] = React.useState(null);

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
    <section className="min-h-screen bg-color1 pt-20 pb-16">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={titleVariants}
        className="container mx-auto px-4"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-center text-color6 mb-4 mt-8">
          Nuestros Servicios
        </h1>
        <p className="text-xl text-center text-color5/80 max-w-3xl mx-auto mb-12">
          Ofrecemos una amplia gama de servicios terapéuticos y tratamientos
          psiquiátricos personalizados para ayudarte en tu camino hacia el
          bienestar emocional y mental.
        </p>

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {servicios.map((servicio, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl"
              whileHover={{ y: -5 }}
            >
              <div className="relative h-48 bg-gray-50 flex items-center justify-center p-6">
                <motion.img
                  src={servicio.imagen}
                  alt={servicio.titulo}
                  className="w-32 h-32 object-contain"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-color5 mb-3">
                  {servicio.titulo}
                </h3>
                <p className="text-color5/80 mb-4">{servicio.descripcion}</p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-color5 mb-2">
                      Duración estimada:
                    </h4>
                    <p className="text-color5/80">{servicio.duracion}</p>
                  </div>
                  <button
                    onClick={() => setServicioSeleccionado(servicio)}
                    className="w-full bg-color6 text-white py-2 px-4 rounded-lg hover:bg-color6/90 transition-colors duration-300"
                  >
                    Ver más detalles
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Modal de detalles */}
      {servicioSeleccionado && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
          onClick={() => setServicioSeleccionado(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-2xl font-bold text-color6">
                {servicioSeleccionado.titulo}
              </h2>
              <button
                onClick={() => setServicioSeleccionado(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-color5 mb-2">
                  Descripción detallada
                </h3>
                <p className="text-color5/80">
                  {servicioSeleccionado.descripcionDetallada}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-color5 mb-2">
                  Beneficios
                </h3>
                <ul className="list-disc list-inside text-color5/80 space-y-2">
                  {servicioSeleccionado.beneficios.map((beneficio, index) => (
                    <li key={index}>{beneficio}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-color5 mb-2">
                  Duración del tratamiento
                </h3>
                <p className="text-color5/80">
                  {servicioSeleccionado.duracion}
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Sección de contacto rápido */}
    </section>
  );
};

export default PageServicios;
