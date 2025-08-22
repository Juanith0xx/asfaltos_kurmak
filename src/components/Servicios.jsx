import React from "react";

const servicios = [
  {
    id: 1,
    titulo: "Servicio 1",
    descripcion: "Descripción breve del servicio 1.",
    imagen: "/img/servicio1.webp",
  },
  {
    id: 2,
    titulo: "Servicio 2",
    descripcion: "Descripción breve del servicio 2.",
    imagen: "/img/servicio2.webp",
  },
  {
    id: 3,
    titulo: "Servicio 3",
    descripcion: "Descripción breve del servicio 3.",
    imagen: "/img/servicio3.webp",
  },
  {
    id: 4,
    titulo: "Servicio 4",
    descripcion: "Descripción breve del servicio 4.",
    imagen: "/img/servicio4.webp",
  },
  {
    id: 5,
    titulo: "Servicio 5",
    descripcion: "Descripción breve del servicio 5.",
    imagen: "/img/servicio5.webp",
  },
  {
    id: 6,
    titulo: "Servicio 6",
    descripcion: "Descripción breve del servicio 6.",
    imagen: "/img/servicio6.webp",
  },
];

const Servicios = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 text-left">
        {/* Título */}
        <h2 className="text-4xl font-bold text-gray-800 mb-12">
          Nuestros Servicios
        </h2>

        {/* Grid de servicios */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {servicios.map((servicio) => (
            <div
              key={servicio.id}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition"
            >
              <img
                src={servicio.imagen}
                alt={servicio.titulo}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-700">
                {servicio.titulo}
              </h3>
              <p className="text-gray-500 mt-2">{servicio.descripcion}</p>
            </div>
          ))}
        </div>

        {/* Botón */}
        <div className="mt-12">
          <button className="px-6 py-3 bg-orange-500 text-white rounded-xl shadow-md hover:bg-orange-600 transition">
            Cotiza con Nosotros
          </button>
        </div>
      </div>
    </section>
  );
};

export default Servicios;
