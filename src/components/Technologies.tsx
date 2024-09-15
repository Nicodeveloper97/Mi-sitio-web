import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaGithub } from "react-icons/fa"; // Agregamos FaGithub
import { SiTailwindcss, SiTypescript, SiJavascript, SiGit } from "react-icons/si";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Technologies = () => {
  const settings = {
    dots: false,
    arrows: false, // Sin flechas
    infinite: true, // Slider infinito
    speed: 2000, // Movimiento continuo suave
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0, // Movimiento continuo sin pausas
    cssEase: 'linear', // Movimiento constante
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="py-12 bg-gray-900 text-center" id="Tecnologia">
      {/* Título de la sección con subrayado */}
      <h2 className="text-3xl font-bold text-white mb-8 relative inline-block">
        Tecnologías
        <span className="absolute left-1/4 bottom-[-10px] w-1/2 h-1 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"></span>
      </h2>

      <p className="text-2xl text-white mb-8 max-w-3xl mx-auto pt-10">
        Mi área principal de especialización es el desarrollo Frontend, pero mi formación es FullStack.
        HTML, CSS, JS, creación de aplicaciones web pequeñas y medianas con React, complementos personalizados, funciones, animaciones y codificación de diseños interactivos.
      </p>
      <div className="max-w-6xl mx-auto pt-20">
        <Slider {...settings} className="w-4/5 mx-auto">
          <div className="flex flex-col items-center justify-center gap-1">
            <FaReact size={50} className="text-blue-500 " />
          </div>
          <div className="flex flex-col items-center justify-center">
            <SiTypescript size={50} className="text-blue-600 " />
          </div>
          <div className="flex flex-col items-center justify-center">
            <SiTailwindcss size={50} className="text-blue-400 " />
          </div>
          <div className="flex flex-col items-center justify-center">
            <FaHtml5 size={50} className="text-orange-500 " />
          </div>
          <div className="flex flex-col items-center justify-center">
            <FaCss3Alt size={50} className="text-blue-500 " />
          </div>
          <div className="flex flex-col items-center justify-center">
            <SiJavascript size={50} className="text-yellow-400 " />
          </div>
          <div className="flex flex-col items-center justify-center">
            <FaNodeJs size={50} className="text-green-500 " />
          </div>
          <div className="flex flex-col items-center justify-center">
            <SiGit size={50} className="text-orange-600 " />
          </div>
          {/* Nuevo ícono de GitHub */}
          <div className="flex flex-col items-center justify-center">
            <FaGithub size={50} className="text-gray-200 " />
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Technologies;
