import { FaHandshake, FaThumbsUp, FaDollarSign, FaUsers } from 'react-icons/fa';

const items = [
  {
    title: 'Experiencia',
    description:
      'Avalada por una exitosa trayectoria de más de diez años apoyando jefaturas y gerencias en importantes empresas del mercado.',
    icon: <FaHandshake className="text-[#f3993e] text-4xl mb-4" />,
  },
  {
    title: 'Calidad',
    description:
      'Servicio y ejecución en obra ágil y completo sistema de post-venta con certificaciones y estrictos controles de calidad.',
    icon: <FaThumbsUp className="text-[#f3993e] text-4xl mb-4" />,
  },
  {
    title: 'Precios Competitivos',
    description:
      'Cotizaciones rápidas que unifican todas nuestras ventajas, optimizando tiempo y condiciones.',
    icon: <FaDollarSign className="text-[#f3993e] text-4xl mb-4" />,
  },
  {
    title: 'Somos la solución en asfaltos',
    description:
      'Adaptamos nuestras soluciones a tus necesidades con compromiso y respaldo técnico.',
    icon: <FaUsers className="text-[#f3993e] text-4xl mb-4" />,
  },
];

const CalidadGrid = () => {
  return (
    <section className="bg-white py-16 px-6 lg:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300"
          >
            <div className="flex flex-col items-start text-left">
              {item.icon}
              <h3 className="text-2xl font-bold text-gray-800 mb-2 font-poppins">
                {item.title}
              </h3>
              <p className="text-gray-600 text-base leading-relaxed font-roboto">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CalidadGrid;
