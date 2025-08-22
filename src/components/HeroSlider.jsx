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
      modules={[Navigation, Pagination, Autoplay]} // Activación de módulos
      navigation={true}
      pagination={{ clickable: true }}
      loop={true}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      className="h-[80vh] w-full"
    >
      {slides.map((slide, idx) => (
        <SwiperSlide key={idx}>
          <div
            className="h-[80vh] w-full bg-cover bg-center flex items-center relative"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="relative z-10 max-w-3xl px-6 lg:px-20 text-white">
              <h1 className="text-3xl lg:text-5xl font-extrabold mb-4">
                {slide.title}
              </h1>
              <p className="text-lg lg:text-xl mb-6">{slide.description}</p>
              <a
                href={slide.link}
                className="inline-block bg-transparent border border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition"
              >
                {slide.button}
              </a>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroSlider;
