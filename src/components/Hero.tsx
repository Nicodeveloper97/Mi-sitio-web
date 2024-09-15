import backgroundImage from "../assets/fondo5.jpg";

function Hero() {
  return (
    <section
      id="inicio"
      className="h-screen bg-cover bg-center flex flex-col justify-center items-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Texto adaptado para diferentes tamaños de dispositivos */}
      <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white text-center px-4">
        Hola, soy Nicolas Iglesias
      </p>

      {/* Título principal con gradiente y tamaños de texto ajustables */}
      <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-400 mb-4 text-center px-4">
        FrontEnd Developer
      </h1>
    </section>
  );
}

export default Hero;
