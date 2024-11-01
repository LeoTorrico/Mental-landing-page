import React from "react";
import { motion } from "framer-motion";

const SobreNosotros = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const valores = [
    {
      titulo: "Compromiso con el Paciente",
      descripcion:
        "Colocar el bienestar y la recuperación del paciente en el centro de cada decisión y acción, brindando una atención personalizada y respetuosa.",
    },
    {
      titulo: "Puntualidad",
      descripcion:
        "Valorar el tiempo de nuestros pacientes, asegurando un servicio organizado y eficiente.",
    },
    {
      titulo: "Responsabilidad",
      descripcion:
        "Asumir con seriedad cada aspecto de la atención y del compromiso de servicio, cumpliendo con altos estándares de calidad.",
    },
    {
      titulo: "Ética",
      descripcion:
        "Guiar cada acción con integridad y respeto, respetando la confidencialidad y dignidad de cada persona.",
    },
    {
      titulo: "Calidez Humana",
      descripcion:
        "Proporcionar una atención cercana y empática que genere confianza y seguridad.",
    },
    {
      titulo: "Innovación y Actualización",
      descripcion:
        "Estar en constante actualización para ofrecer tratamientos basados en los últimos avances científicos.",
    },
    {
      titulo: "Trabajo en Equipo",
      descripcion:
        "Fomentar la colaboración y el apoyo mutuo entre los profesionales para brindar una atención integral.",
    },
  ];

  return (
    <div className="bg-color1">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-6xl mx-auto px-4 py-16 bg-color1"
      >
        {/* Logo Section */}
        <motion.div
          variants={logoVariants}
          className="flex justify-center mb-16"
        >
          <img
            src="/logo2.png" // Reemplaza con la ruta real de tu logo
            alt="Logo de la Consultora"
            className="h-[460px] w-auto object-contain mb-[-120px] mt-[-100px]"
          />
        </motion.div>
        <motion.div variants={itemVariants} className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6 text-color6">
              ¿Quiénes Somos?
            </h2>
            <h3 className="text-2xl font-semibold mb-4 text-color5">
              Atención integral
            </h3>
          </div>
          <motion.p
            className="text-lg text-color5 leading-relaxed max-w-4xl mx-auto text-center"
            variants={itemVariants}
          >
            Somos un equipo de especialistas en la salud mental en Bolivia,
            conformada por profesionales en psiquiatría y terapias
            cognitivo-conductuales. Nos dedicamos a brindar atención integral,
            enfocada en el bienestar emocional y mental de cada persona. Creemos
            en un enfoque bio-psicosocial y en la importancia de crear un
            ambiente seguro y acogedor.
          </motion.p>
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="w-32 h-1 bg-gray-200 mx-auto mb-16"
        />

        {/* Misión */}
        <motion.div variants={itemVariants} className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-color6">Misión</h2>
          <motion.p
            className="text-lg text-gray-600 leading-relaxed"
            variants={itemVariants}
          >
            Brindar atención psiquiátrica integral y humanizada, basada en
            evidencia científica y con un enfoque bio-psicosocial, para promover
            el bienestar completo y la recuperación de personas con trastornos
            mentales. Nos comprometemos a ofrecer un servicio de calidad y
            calidez, accesible para todos, que impulse un impacto positivo en la
            salud mental y el bienestar de nuestra comunidad en Bolivia.
          </motion.p>
        </motion.div>

        {/* Visión */}
        <motion.div variants={itemVariants} className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-color6">Visión</h2>
          <motion.p
            className="text-lg text-gray-600 leading-relaxed"
            variants={itemVariants}
          >
            Convertirnos en el referente principal en atención psiquiátrica de
            Bolivia, destacándonos por brindar servicios de salud mental con
            excelencia, accesibilidad y un enfoque humanizado, promoviendo una
            mejora continua en el bienestar y la calidad de vida de nuestra
            comunidad.
          </motion.p>
        </motion.div>

        {/* Valores */}
        <motion.div variants={itemVariants}>
          <h2 className="text-3xl font-bold mb-8 text-color6">Valores</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {valores.map((valor, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="p-6 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-300"
              >
                <h3 className="text-xl font-semibold mb-3 text-color6">
                  {valor.titulo}
                </h3>
                <p className="text-gray-600">{valor.descripcion}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SobreNosotros;
