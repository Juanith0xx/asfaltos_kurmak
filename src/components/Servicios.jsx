import React from "react";

const servicios = [
  {
    id: 1,
    titulo: "Bacheo y reparacion de Asfalto",
    descripcion: "Descripción breve del servicio 1.",
    imagen: "/Servicios/Servicio_Bacheo_de_Asfalto_Asfalto_Kurmak.jpeg",
  },
  {
    id: 2,
    titulo: "Asfalto de Color y Abrasivo",
    descripcion: "Descripción breve del servicio 2.",
    imagen: "/Servicios/Asfalto_Color_Servicio_Asfalto_Kurmak.jpeg",
  },
  {
    id: 3,
    titulo: "Asfalto para lugares Deportivos",
    descripcion: "Descripción breve del servicio 3.",
    imagen: "/Servicios/Asfalto_Deportivo_Servicio_Asfalto_Kurmak.png",
  },
  {
    id: 4,
    titulo: "Demarcaciop de Asfalto",
    descripcion: "Descripción breve del servicio 4.",
    imagen: "/Servicios/Servicio_Demarcacion_de_Asfalto_Asfalto_Kurmak.jpeg",
  },
  {
    id: 5,
    titulo: "Sellos de Asfalto",
    descripcion: "Descripción breve del servicio 5.",
    imagen: "/Servicios/Servicio_Sello_de_Asfalto_Asfalto_Kurmak.jpeg",
  },
  {
    id: 6,
    titulo: "Fresado de Asfalto",
    descripcion: "Descripción breve del servicio 6.",
    imagen: "/Servicios/Servicio_Fresado_de_Asfalto_Asfalto_Kurmak.jpeg",
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
                className="w-full h-100 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-700">
                {servicio.titulo}
              </h3>
              <p className="text-gray-500 mt-2">{servicio.descripcion}</p>
            </div>
          ))}
        </div>

        {/* Botón */}
        <div className="mt-12 flex justify-end">
          <button className="px-6 py-3 bg-orange-500 text-white rounded-xl shadow-md hover:bg-orange-600 transition">
            Cotiza con Nosotros
          </button>
        </div>
      </div>
    </section>
  );
};

export default Servicios;
