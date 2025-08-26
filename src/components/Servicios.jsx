import { Link } from "react-router-dom";

const servicios = [
  {
    id: 1,
    titulo: "Bacheo y reparación de Asfalto",
    descripcion: "Reparación rápida, duradera y eficiente para calles, caminos y superficies dañadas.",
    imagen: "/Servicios/Servicio_Bacheo_de_Asfalto_Asfalto_Kurmak.jpeg",
  },
  {
    id: 2,
    titulo: "Asfalto de Color y Abrasivo",
    descripcion: "Asfalto de color y abrasivo para señalización vial, seguridad peatonal y diseño urbano.",
    imagen: "/Servicios/Asfalto_Color_Servicio_Asfalto_Kurmak.jpeg",
  },
  {
    id: 3,
    titulo: "Asfalto para lugares Deportivos",
    descripcion: "Alta resistencia, excelente drenaje y acabado uniforme para fútbol, tenis y multicanchas.",
    imagen: "/Servicios/Asfalto_Deportivo_Servicio_Asfalto_Kurmak.png",
  },
  {
    id: 4,
    titulo: "Demarcación de Asfalto",
    descripcion: "Demarcación de asfalto con pintura vial de alta durabilidad.",
    imagen: "/Servicios/Servicio_Demarcacion_de_Asfalto_Asfalto_Kurmak.jpeg",
  },
  {
    id: 5,
    titulo: "Sellos de Asfalto",
    descripcion: "Sello asfáltico para protección y mantenimiento de pavimentos.",
    imagen: "/Servicios/Servicio_Sello_de_Asfalto_Asfalto_Kurmak.jpeg",
  },
  {
    id: 6,
    titulo: "Fresado de Asfalto",
    descripcion: "Remoción precisa de capas deterioradas, reciclaje eficiente y preparación ideal para nuevas superficies.",
    imagen: "/Servicios/Servicio_Fresado_de_Asfalto_Asfalto_Kurmak.jpeg",
  },
];

const Servicios = () => {
  return (
    <section id="servicios" className="py-12 bg-gray-50">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        {/* Título */}
        <h2 className="text-4xl font-bold text-gray-800 underline decoration-[#F59816] mb-10 sm:mb-12">
          Nuestros Servicios
        </h2>

        {/* Grid de servicios */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {servicios.map((servicio, index) => (
            <div
              key={servicio.id}
              className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 transform transition duration-500 hover:scale-[1.03] hover:shadow-2xl opacity-0 animate-fade-up animation-delay"
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: "forwards" }}
            >
              <div className="relative group">
                <img
                  src={servicio.imagen}
                  alt={servicio.titulo}
                  className="w-full h-48 sm:h-56 object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-20 transition rounded-lg" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-700 mt-4">
                {servicio.titulo}
              </h3>
              <p className="text-sm sm:text-base text-gray-500 mt-2">
                {servicio.descripcion}
              </p>
            </div>
          ))}
        </div>

        {/* Botón */}
        <div className="mt-10 sm:mt-12 flex justify-center sm:justify-end">
          <Link
  to="/contacto"
  className="bg-[#f3993e] text-white px-8 sm:px-10 py-2 rounded-lg shadow-md !font-bold transform transition duration-300 hover:bg-orange-500 hover:-translate-y-1 hover:shadow-lg text-center"
>
  Cotiza con Nosotros
</Link>
        </div>
      </div>
    </section>
  );
};

export default Servicios;
