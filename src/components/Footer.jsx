import { FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa';
import Logo from '/Logo_Footer.png'; // Ajusta la ruta según tu proyecto

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Marca */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold font-poppins mb-2">Asfaltos Kurmak</h2>
          <p className="text-gray-300 font-roboto">
            Pavimentación y obras civiles con calidad garantizada.
          </p>
        </div>

        {/* Contacto */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold font-poppins mb-2">Contacto</h3>
          <ul className="space-y-2 text-gray-300 font-roboto">
            <li className="flex items-center justify-center md:justify-start">
              <FaPhoneAlt className="text-[#f3993e] mr-3" />
              +56 9 6918 6224
            </li>
            <li className="flex items-center justify-center md:justify-start">
              <FaEnvelope className="text-[#f3993e] mr-3" />
              contacto@asfaltoskurmak.cl
            </li>
          </ul>
        </div>

        {/* Horarios */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold font-poppins mb-2">Horarios</h3>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <p className="flex items-center justify-center md:justify-start text-gray-300 font-roboto mb-4 md:mb-0">
              <FaClock className="text-[#f3993e] mr-3" />
              Lunes a Viernes de 08:00 a 18:00
            </p>
            <img
              src={Logo}
              alt="Logo"
              className="h-16 md:h-20 w-auto mx-auto md:mx-0 md:-mt-16"
            />
          </div>
        </div>
      </div>

      {/* Línea inferior */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-500 font-roboto">
        &copy; {new Date().getFullYear()} Asfaltos Kurmak. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
