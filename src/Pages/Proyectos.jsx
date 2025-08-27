import React, { useState, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import LightGallery from "lightgallery/react";

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-zoom.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

const secciones = [
    {
    titulo: "Proyecto Bodagas San Francisco",
    descripcion: `Proyecto de Asfaltos Kurmak para Bodegas San Francisco: pavimentación de 10.000 m² con asfalto de alta calidad y aplicación de sello protector, garantizando durabilidad, seguridad y resistencia al desgaste en superficies industriales y comerciales.`,
     imagenes: [
      { src: "/Bodegas/Inicio_asfaltos_Kurmak.webp", descripcion: "" },
      { src: "/Bodegas/Maestro_rastrillando_Asfaltos_Kurmak.webp", descripcion: "" },
      { src: "/Bodegas/Carga_maquina_finicher_Asfaltos_Kurmak.webp", descripcion: "" },
      { src: "/Bodegas/Proceso_rodillado_Asfaltos_Kurmak.webp", descripcion: "" }, 
      { src: "/Bodegas/Maestro_restificando_Asfaltos_Kurmak.webp", descripcion: "" },      
     ], 
  },
  {
    titulo: "Proyecto Multicanchas Municipalidad de La Florida",
    descripcion: `Proyecto de Asfaltos Kurmak para la Municipalidad de La Florida: pavimentación y acondicionamiento de multicanchas con asfaltos de alta calidad, garantizando durabilidad, seguridad y superficies óptimas para actividades deportivas.`,
    imagenes: [
      { src: "/Multicancha/Inicio_de_Sello.webp", descripcion: "" },
      { src: "/Multicancha/Sello_Terminado.webp", descripcion: "" },
      { src: "/Multicancha/Preparacion_para_pintura.webp", descripcion: "" },
      { src: "/Multicancha/Inicio_de_pintado.webp", descripcion: "" },
      { src: "/Multicancha/Termino_de_pintado.webp", descripcion: "" },
      { src: "/Multicancha/Demarcacion_de_cancha_deportiva.webp", descripcion: "" },
    ],
  },
  {
    titulo: "Proyecto Pista de Karting Pirque",
    descripcion: `Proyecto de Asfaltos Kurmak en Pirque: construcción y pavimentación de pista de karting con asfaltos de alta resistencia, garantizando seguridad, durabilidad y un óptimo desempeño para actividades deportivas y recreativas.`,
    imagenes: [
      { src: "/Karting/Karting1.webp", descripcion: "" },
      { src: "/Karting/Karting2.webp", descripcion: "" },
      { src: "Karting/Karting3.webp", descripcion: "" },
      { src: "Karting/Karting4.webp", descripcion: "" },
    ],
  },

];

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

const Proyectos = () => {
  const galleryRef = useRef({});

  const handleVerMas = (titulo) => {
    setTimeout(() => {
      if (galleryRef.current[titulo]) {
        galleryRef.current[titulo].openGallery(4);
      }
    }, 100);
  };

  return (
    <div className="px-6 pt-14 sm:px-10 lg:px-28 py-10 bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
   <Helmet>
  <title>Proyectos de Asfaltos Kurmak | Pavimentación y Mantención de Caminos</title>
  <meta
    name="description"
    content="Proyectos de Asfaltos Kurmak: Pavimentación y mantención de caminos, estacionamientos y vías urbanas e industriales con asfaltos de alta calidad. Soluciones duraderas, seguras y resistentes a desgaste y condiciones climáticas extremas."
  />
  <meta
    name="keywords"
    content="asfaltos, pavimentación, mantención de caminos, vías urbanas, estacionamientos, asfaltos Kurmak, pavimentos duraderos, proyectos de asfaltos, vías industriales, seguridad vial, pavimentación de alta calidad"
  />
  <meta name="robots" content="index, follow" />
  <meta property="og:title" content="Proyectos de Asfaltos Kurmak | Pavimentación y Mantención de Caminos" />
  <meta property="og:description" content="Ejecutamos proyectos de pavimentación y mantención de caminos, estacionamientos y vías industriales con asfaltos de alta calidad, garantizando durabilidad, seguridad y eficiencia." />
  <meta property="og:image" content="https://asfaltoskurmak.cl/img/proyectos-asfaltos.jpg" />
  <meta property="og:url" content="https://asfaltoskurmak.cl/proyectos" />
  <meta name="twitter:card" content="summary_large_image" />
</Helmet>



      <motion.h1
        className="text-3xl sm:text-5xl font-bold font-poppins text-center text-[#011E31] dark:text-white mt-10 mb-6 pt-8 underline decoration-[#F59816]"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        Proyectos de Asfaltos Kurmak
      </motion.h1>

      <motion.p
        className="text-lg font-barlow text-center text-gray-600 dark:text-gray-300 mb-12 max-w-4xl mx-auto"
        initial="hidden"
        animate="visible"
        custom={1}
        variants={fadeIn}
      >
        Proyectos de Asfaltos Kurmar Pavimentación y mantención de caminos, estacionamientos y vías urbanas e industriales con asfaltos de alta calidad. Soluciones duraderas, seguras y resistentes a desgaste y condiciones climáticas extremas, garantizando eficiencia y estética en cada obra.
      </motion.p>

      {secciones.map((seccion, index) => {
        const mostrarBotonVerMas =
          seccion.titulo === "Proyecto Bodagas San Francisco" ||
          seccion.titulo === "Proyecto Multicanchas Municipalidad de La Florida" ||
          seccion.titulo === "Proyectos Especiales" || 
          seccion.titulo === "Recepciones";

        const imagenesVisibles = mostrarBotonVerMas
          ? seccion.imagenes.slice(0, 4)
          : seccion.imagenes;

        const imagenesOcultas = mostrarBotonVerMas
          ? seccion.imagenes.slice(4)
          : [];

        const esCentrada =
          (seccion.titulo === "Estaciones de Enfermería" ||
            seccion.titulo === "Estantes y Lockers") &&
                    imagenesVisibles.length === 3;

        return (
          <motion.section
            key={index}
            className={`mb-20 flex flex-col ${
              index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            } items-center gap-10`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            custom={index + 1}
          >
            <div className="w-full lg:w-1/2">
              <h2 className="text-2xl sm:text-3xl font-semibold text-[#011E31] underline decoration-[#F59816] font-[Poppins] dark:text-sky-400 mb-4">
                {seccion.titulo}
              </h2>
              <p className="text-sm sm:text-base font-barlow text-gray-700 dark:text-gray-300 leading-relaxed">
                {seccion.descripcion}
              </p>
            </div>

            <div className="w-full lg:w-1/2">
              <LightGallery
                speed={500}
                plugins={[lgThumbnail, lgZoom]}
                download={false}
                elementClassNames={
                  esCentrada
                    ? "grid grid-cols-2 grid-rows-2 gap-5"
                    : `grid gap-5 ${
                        imagenesVisibles.length === 3
                          ? "grid-cols-2"
                          : "grid-cols-1 sm:grid-cols-2"
                      }`
                }
                onInit={(ref) => {
                  galleryRef.current[seccion.titulo] = ref.instance;
                }}
              >
                {esCentrada ? (
                  <>
                    {imagenesVisibles.slice(0, 2).map((img, i) => (
                      <a
                        key={i}
                        href={img.src}
                        data-sub-html={`<p>${img.descripcion}</p>`}
                        className="block rounded-xl overflow-hidden shadow-md"
                      >
                        <img
                          src={img.src}
                          alt={`${seccion.titulo} - Foto ${i + 1}`}
                          loading="lazy"
                          className="w-full h-64 object-cover brightness-105 hover:scale-105 transition-transform duration-300"
                        />
                      </a>
                    ))}
                    <a
                      href={imagenesVisibles[2].src}
                      data-sub-html={`<p>${imagenesVisibles[2].descripcion}</p>`}
                      className="col-span-2 flex justify-center"
                    >
                      <img
                        src={imagenesVisibles[2].src}
                        alt={`${seccion.titulo} - Foto 3`}
                        loading="lazy"
                        className="w-1/2 h-64 object-cover rounded-xl shadow-md brightness-105 hover:scale-105 transition-transform duration-300"
                      />
                    </a>
                  </>
                ) : (
                  <>
                    {imagenesVisibles.map((img, i) => (
                      <a
                        key={i}
                        href={img.src}
                        data-sub-html={`<p>${img.descripcion}</p>`}
                        className="block rounded-xl overflow-hidden shadow-md"
                      >
                        <img
                          src={img.src}
                          alt={`${seccion.titulo} - Foto ${i + 1}`}
                          loading="lazy"
                          className="w-full h-64 object-cover brightness-105 hover:scale-105 transition-transform duration-300"
                        />
                      </a>
                    ))}
                  </>
                )}

                {imagenesOcultas.map((img, i) => (
                  <a
                    key={`hidden-${i}`}
                    href={img.src}
                    data-sub-html={`<p>${img.descripcion}</p>`}
                    className="hidden"
                  >
                    <img src={img.src} alt={`Oculta - ${i + 5}`} loading="lazy" />
                  </a>
                ))}
              </LightGallery>

              {mostrarBotonVerMas && imagenesOcultas.length > 0 && (
                <div className="text-center mt-4">
                  <button
                    onClick={() => handleVerMas(seccion.titulo)}
                    className="bg-[#f3993e] text-white px-5 py-2 rounded-full hover:bg-orange-500 hover:!font-bold transition"
                  >
                    Ver más
                  </button>
                </div>
              )}
            </div>
          </motion.section>
        );
      })}

      <motion.div
        className="bg-black text-white rounded-2xl p-10 text-center mt-20 shadow-xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        custom={secciones.length + 1}
      >
        <h3 className="text-2xl sm:text-3xl font-bold mb-3">
          ¿Quieres pavimentar o mejorar tus caminos, estacionamientos o multicanchas?
        </h3>
        <p className="text-base sm:text-lg mb-5">
          Cuéntanos tus requerimientos y recibe una propuesta personalizada sin costo.
        </p>
        <a
          href="/contacto"
          className="inline-block bg-[#F59816] text-white font-semibold px-6 py-3 rounded-full  transition-colors hover:-translate-y-1 hover:bg-orange-500 hover:!font-bolt"
        >
          Solicitar Cotización
        </a>
      </motion.div>
    </div>
  );
};

export default Proyectos