// src/components/Home.jsx
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const imageSlides = [
  "/SliderHome/slider1.jpg",
  "/SliderHome/slider2.jpg",
  "/SliderHome/slider3.jpg",
  "/SliderHome/slider4.jpg",
  "/SliderHome/slider5.jpg",
  "/SliderHome/slider6.jpg",
  "/SliderHome/slider7.jpg",
  "/SliderHome/slider8.jpg",
  "/SliderHome/slider9.jpg",
  "/SliderHome/slider10.jpg",
];

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    beforeChange: (_, next) => setActiveIndex(next),
  };

  return (
    <section className="w-full min-h-screen flex flex-col lg:flex-row items-center justify-center px-6 lg:px-20 py-12 bg-gray-50">
      
      
      {/* Slider de imágenes */}
      <div className="w-full lg:w-1/2 flex justify-center items-start">
        <div className="w-full max-w-xl">
          <Slider {...settings}>
            {imageSlides.map((src, idx) => (
              <div key={idx} className="px-2">
                <img
                  src={src}
                  alt={`Slide ${idx + 1}`}
                  className="h-full max-h-[600px] w-full rounded-lg shadow-lg object-cover"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* Texto */}
      <div className="w-full lg:w-1/2 flex flex-col justify-start lg:pl-12 text-left mt-10 lg:mt-0">
        <h1 className="text-4xl lg:text-5xl font-extrabold mb-4 font-roboto underline decoration-[#F59816] text-gray-900 slide-in-left">
          Asfaltos Kurmak
        </h1>
        <h3 className="text-xl lg:text-2xl font-semibold mb-4 font-roboto text-gray-700 slide-in-left ">
          Especialistas en servicios de ingeniería y Obras Civiles
        </h3>
        <p className="text-base lg:text-lg text-gray-600 leading-relaxed slide-in-left">
        Empresa líder en obras civiles en Chile, con más de una década de experiencia en pavimentación, urbanización y construcción vial. En Asfaltos Kurmak, combinamos ingeniería de precisión con tecnología avanzada para entregar soluciones sostenibles, eficientes y de alto impacto. Nuestro equipo multidisciplinario está comprometido con la excelencia, la seguridad y el cumplimiento riguroso de estándares internacionales.

Bajo la dirección de un liderazgo visionario, impulsamos proyectos que transforman ciudades, conectan comunidades y elevan la infraestructura nacional a nuevos niveles de calidad.
        </p>
      </div>
    </section>
  );
};

export default Home;
