import React from "react";
import Wallock from "../assets/wallock.png";
import Vete from "../assets/agenda.png";
import Gym from "../assets/gym.png";
import { FaGithub } from "react-icons/fa";

const ProjectSection: React.FC = () => {
  const projects = [
    {
      title: "Wallock",
      description:
        "Sitio web para agencia de Tecnologia, con varias secciones y formulario de contacto",
      image: Wallock,
      link: "https://wallock.netlify.app/",
    },
    {
      title: "Estructura gym",
      description:
        "Este es un proyecto de una estructura de web para un gimnasio",
      image: Gym,
      link: "https://gymproyect.netlify.app/",
    },
    {
      title: "Agenda Veterinaria",
      description:
        "Sistema de agendamiento de turnos para peluqueria o turno veterinario para tu mascota",
      image: Vete,
      link: "https://agendavete.netlify.app/",
    },
  ];

  return (
    <section className="w-full py-20 bg-gray-900 text-white" id="Proyecto">
      <div className="container mx-auto px-4">
        {/* Título centrado "Mis Proyectos" con subrayado y estilos */}
        <h2 className="text-3xl font-bold text-white mb-12 relative inline-block text-center w-full">
          Mis Proyectos
          <span className="absolute left-1/4 bottom-[-10px] w-2/4 h-1 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"></span>
        </h2>

        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2 duration-300"
            >
              <img
                src={project.image}
                alt={`Proyecto ${index + 1}`}
                className="rounded-lg mb-6 w-full object-cover h-60"
              />
              <h3 className="text-2xl text-center font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-400">
                {project.title}
              </h3>

              <p className="text-base mb-6 text-gray-400">
                {project.description}
              </p>

              {/* Enlace centrado */}
              <div className="text-center">
                <a
                  href={project.link}
                  className="inline-block bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-shadow duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver más
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Texto agrandado */}
        <p className="text-center text-gray-400 text-xl mt-12">
          Si querés seguir viendo más proyectos, te dejo mi GitHub a continuación:
        </p>

        {/* Ícono de GitHub centrado en pantalla */}
        <div className="flex justify-center items-center h-32 mt-6">
          <a
            href="https://github.com/Nicodeveloper97"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-6xl hover:text-gray-400 transition-colors duration-300"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
