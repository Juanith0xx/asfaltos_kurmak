import { FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Marca */}
        <div>
          <h2 className="text-2xl font-bold font-poppins mb-2">Asfaltos Kurmak</h2>
          <p className="text-gray-300 font-roboto">
            Pavimentación y obras civiles con calidad garantizada.
          </p>
        </div>

        {/* Contacto */}
        <div>
          <h3 className="text-xl font-semibold font-poppins mb-2">Contacto</h3>
          <ul className="space-y-2 text-gray-300 font-roboto">
            <li className="flex items-center">
              <FaPhoneAlt className="text-[#f3993e] mr-3" />
              +56 9 XXXX XXXX
            </li>
            <li className="flex items-center">
              <FaEnvelope className="text-[#f3993e] mr-3" />
              contacto@asfaltoskurmak.cl
            </li>
          </ul>
        </div>

        {/* Horarios */}
        <div>
          <h3 className="text-xl font-semibold font-poppins mb-2">Horarios</h3>
          <p className="flex items-center text-gray-300 font-roboto">
            <FaClock className="text-[#f3993e] mr-3" />
            Lunes a Viernes de 08:00 a 18:00
          </p>
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
