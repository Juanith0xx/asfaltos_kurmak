import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const logos = [
  { src: "/img/Alianzas/Logo_Hafele.png", alt: "Hafele" },
  { src: "/img/Alianzas/Logo_Porcelanosa.png", alt: "Porcelanosa" },
  { src: "/img/Alianzas/Logo_Abet_Laminati.png", alt: "Abet Laminati" },
  { src: "/img/Alianzas/Logo_Robfu.png", alt: "Robfu" },
  { src: "/img/Alianzas/Logo_merino.png", alt: "Merino" },
];

const sliderSettings = {
  dots: false,
  arrows: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2000,
  speed: 1200,
  slidesToShow: 5,
  slidesToScroll: 1,
  cssEase: "ease-in-out",
  responsive: [
    { breakpoint: 1280, settings: { slidesToShow: 5 } },
    { breakpoint: 1024, settings: { slidesToShow: 4 } },
    { breakpoint: 768, settings: { slidesToShow: 3 } },
    { breakpoint: 640, settings: { slidesToShow: 2 } },
  ],
};

export default function ClientCarousel() {
  return (
    <section className="py-12 bg-white">
      <h2 className="text-center text-2xl font-semibold text-gray-800 mb-8">
        Clientes que confían en nosotros
      </h2>
      <Slider {...sliderSettings}>
        {logos.map((logo, index) => (
          <div key={index} className="flex justify-center items-center px-4">
            <div className="w-32 h-20 sm:w-36 sm:h-24 md:w-40 md:h-28 flex items-center justify-center">
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition duration-300 ease-out"
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}
