import { FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa';

const ContactoHome = () => {
  return (
    <section className="bg-white py-16 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Formulario */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4 font-poppins">Escríbenos aquí</h2>
          <p className="text-gray-600 mb-8 font-roboto">
            Envíanos un correo y te responderemos a la brevedad
          </p>
          <form className="space-y-6">
            <input
              type="text"
              placeholder="Nombres"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#f3993e]"
            />
            <input
              type="email"
              placeholder="Correo Electrónico"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#f3993e]"
            />
            <input
              type="tel"
              placeholder="Teléfono"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#f3993e]"
            />
            <textarea
              rows="5"
              placeholder="Mensaje"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#f3993e]"
            ></textarea>
            <button
              type="submit"
              className="bg-[#f3993e] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#d97f2d] transition"
            >
              Enviar Mensaje
            </button>
          </form>
        </div>

        {/* Información de contacto */}
        <div className="bg-gray-50 p-8 rounded-xl shadow-md">
          <h3 className="text-2xl font-bold text-gray-800 mb-4 font-poppins">Información de Contacto</h3>
          <p className="text-gray-600 mb-6 font-roboto">
            Para mayor información comuníquese con nosotros por nuestros distintos canales de atención al cliente.
          </p>
          <ul className="space-y-4 text-gray-700 font-roboto">
            <li className="flex items-center">
              <FaPhoneAlt className="text-[#f3993e] mr-3" />
              +56 9 XXXX XXXX
            </li>
            <li className="flex items-center">
              <FaEnvelope className="text-[#f3993e] mr-3" />
              contacto@stafiloskurmak.cl
            </li>
            <li className="flex items-center">
              <FaClock className="text-[#f3993e] mr-3" />
              Lunes a Viernes de 09:00 a 18:00
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ContactoHome;
