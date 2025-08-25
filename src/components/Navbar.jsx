// src/components/Navbar.jsx
import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { FiHome, FiUsers, FiBriefcase, FiMail } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { name: 'Inicio', href: '/', icon: <FiHome /> },
    { name: 'Nosotros', href: '/nosotros', icon: <FiUsers /> },
    { name: 'Servicios', href: '#servicios', icon: <FiBriefcase /> },
    { name: 'Contacto', href: '#contactohome', icon: <FiMail />, isButton: true }, // 👈 ahora apunta al id
  ];

  // 👇 Función para manejar el scroll suave
  const handleScroll = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        const yOffset = -90; // 👈 ajusta para que no quede tapado por el navbar fijo
        const y = target.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
      setOpen(false); // cerrar el menú en móvil
    }
  };

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-24">
        {/* Logo */}
        <div className="w-50 h-auto pt-6 pb-4">
          <img src="/Logo.png" alt="Logo Asfaltos_Kurmak" className="w-full h-auto" />
        </div>

        {/* Desktop Links */}
        <nav className="hidden md:flex space-x-6 items-center">
          {links.map((link) =>
            link.isButton ? (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="bg-[#f3993e] text-white px-10 py-2 rounded-lg shadow-md font-bold transform transition duration-300 hover:bg-orange-500 hover:-translate-y-1"
              >
                {link.name}
              </a>
            ) : (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="text-gray-700 sm:text-xl font-[Poppins] hover:text-[#f3993e] hover:text-lg hover:font-bold transition font-medium"
              >
                {link.name}
              </a>
            )
          )}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setOpen(!open)}
        >
          {open ? <HiX size={28} /> : <HiMenu size={28} />}
        </button>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen w-64 bg-white shadow-lg z-50 transform transition-transform duration-800 ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Header del sidebar */}
        <div className="flex items-center justify-between p-4 border-b">
          <img src="/Logo.png" alt="Logo Asfalto_Kurmak" className="h-30" />
          <button onClick={() => setOpen(false)}>
            <HiX size={26} />
          </button>
        </div>

        {/* Links */}
        <ul className="flex flex-col p-4 space-y-4">
          {links.map((link) =>
            link.isButton ? (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => handleScroll(e, link.href)}
                  className="flex items-center justify-center bg-[#F59816] text-white px-4 py-2 rounded-lg shadow-md font-bold transition hover:bg-[#e68932]"
                >
                  {link.icon && <span className="mr-3">{link.icon}</span>}
                  {link.name}
                </a>
              </li>
            ) : (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => handleScroll(e, link.href)}
                  className="flex items-center text-gray-700 hover:text-[#f3993e] font-medium"
                >
                  {link.icon && <span className="mr-3">{link.icon}</span>}
                  {link.name}
                </a>
              </li>
            )
          )}

          {/* ✅ Botón WhatsApp */}
          <li>
            <a
              href="https://wa.me/56969186224"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-green-500 text-white px-4 py-2 rounded-lg shadow-md font-bold transition hover:bg-green-600"
              onClick={() => setOpen(false)}
            >
              <FaWhatsapp className="mr-3" size={20} />
              WhatsApp
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
