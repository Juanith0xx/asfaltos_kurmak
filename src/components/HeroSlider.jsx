import Slider from "react-slick";
import { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slides = [
  {
    image: "/Slider/slider1.webp",
    title: "Pavimentos garantizados contra el levantamiento y desgaste por 3 años.",
    description: "Realizamos un análisis del problema por parte del equipo técnico comercial de Asfaltos Kurmak.",
    button: "NUESTROS SERVICIOS",
    link: "/servicios",
  },
  {
    image: "/Slider/slider4.webp",
    title: "Asesoría técnica especializada para proyectos de alto estándar.",
    description: "Soluciones adaptadas a tus necesidades con soporte integral.",
    button: "CONTÁCTANOS",
    link: "/contacto",
  },
  {
    image: "/Slider/slider3.webp",
    title: "Calidad y compromiso en cada proyecto de pavimentación.",
    description: "Más de 10 años entregando resultados garantizados.",
    button: "VER PROYECTOS",
    link: "/proyectos",
  },
];

const HeroSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
    beforeChange: (_, next) => setActiveIndex(next),
    arrows: true,
  };

  return (
    <>
      <Slider {...settings}>
        {slides.map((slide, idx) => (
          <div key={idx} className="relative w-full">
            <div
              className="relative flex items-center justify-left w-full h-[75vh] sm:h-[70vh] md:h-[65vh] lg:h-[75vh] mt-10"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-black/40"></div>

              {activeIndex === idx ? (
                <div className="relative z-10 max-w-full sm:max-w-2xl md:max-w-3xl px-4 sm:px-6 lg:px-20 text-left text-white">
                  <h1 className="text-2xl sm:text-2xl md:text-4xl lg:text-5xl font-extrabold mb-4 animate-slide-in-left animate-delay-200">
                    {slide.title}
                  </h1>
                  <p className="text-sm sm:text-base md:text-lg mb-6 animate-slide-in-left animate-delay-400">
                    {slide.description}
                  </p>
                  <a
                    href={slide.link}
                    className="inline-block bg-transparent border border-white text-white text-sm sm:text-base px-4 py-2 sm:px-6 sm:py-3 rounded-full font-semibold hover:bg-white hover:text-black transition animate-slide-in-left animate-delay-600"
                  >
                    {slide.button}
                  </a>
                </div>
              ) : (
                <div className="opacity-0 pointer-events-none h-0"></div>
              )}
            </div>
          </div>
        ))}
      </Slider>

      <style>{`
        @keyframes slideInLeft {
          0% { opacity: 0; transform: translateX(-100px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        .animate-slide-in-left { animation: slideInLeft 2.0s ease-out forwards; }
        .animate-delay-200 { animation-delay: 0.2s; }
        .animate-delay-400 { animation-delay: 0.4s; }
        .animate-delay-600 { animation-delay: 0.6s; }
      `}</style>
    </>
  );
};

export default HeroSlider;
