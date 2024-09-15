import yo from "../assets/yop.jpeg";
import Cv from "../assets/Nico cv.pdf"
const AboutMe = () => {
  return (
    <section className="bg-gray-900 min-h-screen flex items-center justify-center font-poppins" id="SobreMi">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row w-full">
        {/* Imagen a la izquierda */}
        <div className="w-full lg:w-1/2 flex justify-center items-center p-4 lg:p-8">
          <div className="w-44 h-44 lg:w-64 lg:h-64">
            <img
              src={yo}
              alt="Nico"
              className="w-full h-full object-cover rounded-full" // Imagen fija sin animaciones ni bordes
            />
          </div>
        </div>

        {/* Texto a la derecha */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center p-4 lg:p-8">
          <h2 className="text-3xl lg:text-5xl font-bold mb-12 text-white text-center relative inline-block">
            Sobre mí
            <span className="absolute left-1/4 bottom-[-10px] w-1/2 h-1 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"></span>
          </h2>
          <p className="text-base lg:text-lg text-white leading-relaxed max-w-3xl mb-12">
            Hola, soy Nico, un desarrollador front-end especializado en crear
            soluciones eficientes y escalables. A lo largo de mi carrera, he
            perfeccionado mis habilidades técnicas y analíticas, lo que me
            permite abordar problemas complejos con un enfoque preciso y
            estructurado. Estoy en busca de nuevos desafíos que me permitan
            seguir creciendo profesionalmente y contribuir con mi experiencia.
          </p>

          {/* Botón de descarga de CV centrado */}
          <div className="flex justify-center">
            <a
              href= {Cv} // Ruta del CV
              download="Nico-CV.pdf"
              className="inline-block bg-gradient-to-r w-60 text-center from-pink-500 via-red-500 to-yellow-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-gradient-to-r hover:from-pink-600 hover:via-red-600 hover:to-yellow-600"
              >
              Descargar CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
