import React from "react";
import { motion } from "framer-motion";

const servicios = [
  {
    titulo: "Atención Médico-Psiquiatra",
    descripcion:
      "Consulta especializada para diagnóstico y tratamiento psiquiátrico.",
    descripcionDetallada:
      "La atención médico-psiquiátrica brinda un diagnóstico profesional y un plan de tratamiento adecuado para los trastornos mentales y emocionales. Nos enfocamos en proveer un tratamiento basado en evidencia para mejorar la salud mental de nuestros pacientes.",
    beneficios: [
      "Diagnóstico preciso y profesional",
      "Plan de tratamiento personalizado",
      "Apoyo psiquiátrico continuo",
      "Mejora significativa en la salud mental",
    ],
    imagen: "/img1.svg",
    duracion: "Sesiones según necesidad del paciente",
  },
  {
    titulo: "Terapias Individuales",
    descripcion:
      "Sesiones personalizadas enfocadas en el bienestar emocional y mental.",
    descripcionDetallada:
      "Las terapias individuales son espacios seguros donde los pacientes pueden explorar sus emociones, pensamientos y comportamientos. Ayudamos a nuestros pacientes a entenderse mejor y a desarrollar habilidades para enfrentar desafíos.",
    beneficios: [
      "Atención personalizada",
      "Desarrollo de habilidades emocionales",
      "Mayor autoconciencia",
      "Estrategias para enfrentar problemas personales",
    ],
    imagen: "/img5.svg",
    duracion: "8-12 sesiones",
  },
  {
    titulo: "Terapias Grupales",
    descripcion:
      "Espacios para compartir y superar juntos situaciones difíciles.",
    descripcionDetallada:
      "Las terapias grupales ofrecen un ambiente de apoyo y comprensión. En estos espacios, los participantes pueden compartir experiencias y aprender de los demás, ayudando a construir una red de apoyo emocional.",
    beneficios: [
      "Apoyo de otros en situaciones similares",
      "Desarrollo de habilidades sociales",
      "Reducción del aislamiento",
      "Fomento de la empatía y la comprensión",
    ],
    imagen: "/img4.svg",
    duracion: "4-6 sesiones grupales",
  },
  {
    titulo: "Talleres de Cuidados Mentales",
    descripcion:
      "Actividades para aprender técnicas de autocuidado y manejo emocional.",
    descripcionDetallada:
      "En estos talleres, los participantes adquieren herramientas y técnicas para cuidar su salud mental en el día a día. Exploramos temas como la gestión del estrés, la autorregulación emocional y el bienestar general.",
    beneficios: [
      "Aprendizaje de técnicas de autocuidado",
      "Manejo del estrés y la ansiedad",
      "Fortalecimiento de la resiliencia emocional",
      "Fomento de un estilo de vida saludable",
    ],
    imagen: "/img3.svg",
    duracion: "1-2 sesiones de taller",
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
    imagen: "/img2.svg",
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
