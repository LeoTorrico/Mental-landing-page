import React from "react";

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

const AgendarCita = () => (
  <section id="agendarCita" className="p-6 pt-16 bg-gray-50">
    <div className="container mx-auto max-w-4xl">
      <h2 className="text-2xl font-bold text-center text-color6">
        Agendar Cita
      </h2>
      <p className="mt-4 text-center text-color5 max-w-2xl mx-auto">
        Reserva tu cita y da el primer paso hacia tu bienestar. Elige la
        modalidad que mejor se adapte a tus necesidades.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
        {opcionesCita.map((opcion, index) => (
          <a
            key={index}
            href={opcion.enlace}
            target="_blank"
            rel="noopener noreferrer"
            className="block group"
          >
            <div className="bg-white p-8 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 hover:shadow-xl border border-gray-100">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 transition-transform duration-300 group-hover:scale-110">
                  {opcion.icono}
                </div>
                <h3 className="text-xl font-semibold text-color5 mb-2">
                  {opcion.tipo}
                </h3>
                <p className="text-gray-600 mb-6">{opcion.descripcion}</p>
                <button className="bg-color6 text-white px-6 py-2 rounded-full hover:bg-color8 transition-colors duration-300">
                  Agendar ahora
                </button>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default AgendarCita;
