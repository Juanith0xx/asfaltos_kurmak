// src/components/HeroSlider.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    image: "/Slider/slider1.jpg",
    title: "Pavimentos garantizados contra el levantamiento y desgaste por 3 años.",
    description: "Realizamos un análisis del problema por parte del equipo técnico comercial de Pavimentos PIAR.",
    button: "NUESTROS SERVICIOS",
    link: "/servicios",
  },
  {
    image: "/Slider/slider2.jpg",
    title: "Asesoría técnica especializada para proyectos de alto estándar.",
    description: "Soluciones adaptadas a tus necesidades con soporte integral.",
    button: "CONTÁCTANOS",
    link: "/contacto",
  },
  {
    image: "/Slider/slider3.jpg",
    title: "Calidad y compromiso en cada proyecto de pavimentación.",
    description: "Más de 10 años entregando resultados garantizados.",
    button: "VER PROYECTOS",
    link: "/proyectos",
  },
];

const HeroSlider = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation={true}
      pagination={{ clickable: true }}
      loop={true}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      className="w-full"
    >
      {slides.map((slide, idx) => (
        <SwiperSlide key={idx}>
          <div
            className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[90vh] bg-cover bg-center flex items-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Contenido */}
            <div className="relative z-10 max-w-3xl px-4 sm:px-6 lg:px-20 text-center md:text-left text-white">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4">
                {slide.title}
              </h1>
              <p className="text-base sm:text-lg md:text-xl mb-6">
                {slide.description}
              </p>
              <a
                href={slide.link}
                className="inline-block bg-transparent border border-white text-white px-5 py-2 sm:px-6 sm:py-3 rounded-full font-semibold hover:bg-white hover:text-black transition"
              >
                {slide.button}
              </a>
            </div>
          </div>
        </SwiperSlide>
      ))}

      {/* Flechas blancas */}
      <style>
        {`
          .swiper-button-next,
          .swiper-button-prev {
            color: #ffffff;
          }
          .swiper-pagination-bullet {
            background: white;
            opacity: 0.7;
          }
          .swiper-pagination-bullet-active {
            opacity: 1;
          }
        `}
      </style>
    </Swiper>
  );
};

export default HeroSlider;
