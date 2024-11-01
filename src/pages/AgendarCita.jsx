import React from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  Video,
  Building,
  Check,
  Star,
  Phone,
  Mail,
} from "lucide-react";

const opcionesCita = [
  {
    tipo: "Consulta Virtual",
    descripcion: "Atención personalizada desde la comodidad de tu hogar",
    icono: <Video className="w-12 h-12 text-color6" />,
    enlace: "https://calendly.com/drferconsulta/consulta-psiquiatria-clon",
    beneficios: [
      "Ahorro de tiempo en traslados",
      "Flexibilidad de horarios",
      "Acceso desde cualquier lugar",
      "Misma calidad de atención",
    ],
    precio: "$x BS",
  },
  {
    tipo: "Consulta Presencial",
    descripcion:
      "Atención directa en consultorio con todas las medidas de seguridad",
    icono: <Building className="w-12 h-12 text-color6" />,
    enlace: "https://calendly.com/drferconsulta/atencion1",
    beneficios: [
      "Atención personalizada directa",
      "Ambiente profesional y privado",
      "Evaluación física completa",
      "Mayor conexión terapeuta-paciente",
    ],
    precio: "$x Bs",
  },
];

const AgendarCitaExtended = () => {
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

  return (
    <div className="min-h-screen bg-color1">
      {/* Hero Section */}
      <motion.section
        className="bg-color6 text-white py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-center mb-6 mt-6"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Agenda tu Consulta
          </motion.h1>
          <motion.p
            className="text-xl text-center max-w-3xl mx-auto"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Da el primer paso hacia tu bienestar mental. Ofrezco diferentes
            modalidades de consulta para adaptarme a tus necesidades.
          </motion.p>
        </div>
      </motion.section>

      {/* Información General */}
      <motion.section
        className="py-16 container mx-auto px-4 max-w-6xl"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-16"
          variants={itemVariants}
        >
          <div className="text-center">
            <Clock className="w-12 h-12 text-color6 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Duración</h3>
            <p className="text-gray-600">40-60 minutos por sesión</p>
          </div>
          <div className="text-center">
            <Calendar className="w-12 h-12 text-color6 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Disponibilidad</h3>
            <p className="text-gray-600">
              Lunes a Viernes
              <br />
              9:00 AM - 6:00 PM
            </p>
          </div>
          <div className="text-center">
            <Star className="w-12 h-12 text-color6 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Experiencia</h3>
            <p className="text-gray-600">+5 años de práctica profesional</p>
          </div>
        </motion.div>

        {/* Opciones de Consulta */}
        <div className="grid md:grid-cols-2 gap-8">
          {opcionesCita.map((opcion, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              variants={itemVariants}
            >
              <div className="p-8">
                <div className="flex items-center justify-center mb-6">
                  {opcion.icono}
                </div>
                <h3 className="text-2xl font-bold text-center text-color6 mb-4">
                  {opcion.tipo}
                </h3>
                <p className="text-gray-600 text-center mb-6">
                  {opcion.descripcion}
                </p>
                <div className="space-y-4 mb-8">
                  {opcion.beneficios.map((beneficio, idx) => (
                    <div key={idx} className="flex items-center">
                      <Check className="w-5 h-5 text-color6 mr-2" />
                      <span className="text-gray-600">{beneficio}</span>
                    </div>
                  ))}
                </div>
                <div className="text-center mb-8">
                  <div className="text-xl font-semibold text-color6 mb-2">
                    {opcion.precio}
                  </div>
                </div>
                <motion.a
                  href={opcion.enlace}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-color6 text-white text-center py-3 px-6 rounded-full font-medium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Agendar ahora
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Información de Contacto */}
      <motion.section
        className="bg-white py-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.h2
            className="text-3xl font-bold text-center text-color6 mb-12"
            variants={itemVariants}
          >
            Información de Contacto
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <motion.div
              className="flex items-center justify-center gap-4"
              variants={itemVariants}
            >
              <Phone className="w-6 h-6 text-color6" />
              <span className="text-gray-600">+591 72007804</span>
            </motion.div>
            <motion.div
              className="flex items-center justify-center gap-4"
              variants={itemVariants}
            >
              <Mail className="w-6 h-6 text-color6" />
              <span className="text-gray-600">alvarezg2208@gmail.com</span>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default AgendarCitaExtended;
