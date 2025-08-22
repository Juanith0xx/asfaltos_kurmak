// src/components/Home.jsx
import React from 'react';

const Home = () => {
  return (
    <section className="w-full min-h-screen flex flex-col lg:flex-row items-center justify-center px-6 lg:px-20 py-12 bg-gray-50">
      
      {/* Contenedor flex para alinear imagen y texto */}
      <div className="w-full lg:w-1/2 flex justify-center items-start">
        <img
          src="/Slider/slider1.jpg"
          alt="Imagen principal"
          className="h-full max-h-[600px] w-auto rounded-lg shadow-lg object-cover"
        />
      </div>

      {/* Texto */}
      <div className="w-full lg:w-1/2 flex flex-col justify-start lg:pl-12 text-left">
        <h1 className="text-4xl lg:text-5xl font-extrabold mb-4 font-roboto underline decoration-[#F59816] text-gray-900">
          Asfaltos Kurmak
        </h1>
        <h3 className="text-xl lg:text-2xl font-semibold mb-4 font-roboto text-gray-700">
          Especialistas en servicios de ingenieria y Obras Civiles
        </h3>
        <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
          En Asfaltos Kurmak, somos especialistas en servicios de ingeniería y obras civiles en Chile, ofreciendo soluciones integrales en pavimentación, urbanización, movimiento de tierras y construcción vial. 
          Contamos con un equipo técnico altamente capacitado, maquinaria de última generación y más de [X] años de experiencia ejecutando proyectos públicos y privados con altos estándares de calidad, seguridad y cumplimiento. 
          Si buscas una empresa confiable para tus obras civiles, te ayudamos a construir con precisión, eficiencia y compromiso.
        </p>
      </div>
    </section>
  );
};

export default Home;
