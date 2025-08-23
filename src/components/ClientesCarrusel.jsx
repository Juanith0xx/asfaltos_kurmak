import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const logos = [
  { src: "/Clientes/Burgen_King.png", alt: "Burgen_Kings" },
  { src: "/Clientes/Municipalidad_Puente_Alto.png", alt: "Municipalidad_Puente_Alto" },
  { src: "/Clientes/Municipalidad_Santiago.png", alt: "Municipalidad_Santiago" },
  { src: "/Clientes/Oval.png", alt: "Constructora_Oval" },
  { src: "/Clientes/Parque_del_Recuerdo.png", alt: "Parque_del_Recuerdo" },
  { src: "/Clientes/Salfa.png", alt: "Salfa" },
  { src: "/Clientes/Servicio_de_Salud_Metropolitano_Oriente.png", alt: "Servicio de Salud Oriente" },
];

export default function ClientCarousel() {
  return (
    <section className="py-12 bg-white">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center font-poppins">
        Clientes que confían en nosotros
      </h2>
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        slidesPerView={2} // 👈 base: siempre 2 logos en móvil
        spaceBetween={16} // 👈 espacio prudente en móvil
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 16 },  // móviles medianos
          768: { slidesPerView: 3, spaceBetween: 20 },  // tablet
          1024: { slidesPerView: 4, spaceBetween: 24 }, // desktop
        }}
        className="px-4 sm:px-6"
      >
        {logos.map((logo, index) => (
          <SwiperSlide
            key={index}
            className="flex items-center justify-center h-24 sm:h-28  ml-2 sm:ml-4"
          >
            <div className="flex items-center justify-center w-[110px] h-[70px] sm:w-[130px] sm:h-[80px] md:w-[150px] md:h-[90px] bg-white rounded-xl shadow-md p-2 sm:p-4 hover:shadow-lg transition">
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-h-full max-w-full object-contain grayscale hover:grayscale-0 transition duration-300 ease-out"
                loading="lazy"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
