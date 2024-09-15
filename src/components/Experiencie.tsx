

const Experience = () => {
  return (
    <section id="experiencia" className="py-16 bg-gray-900 text-white text-center">
      <div className="container mx-auto px-4">
        {/* Título de la sección con subrayado */}
        <h2 className="text-4xl font-bold text-center mb-8 relative inline-block">
          Experiencia
          <span className="absolute left-1/4 bottom-[-10px] w-1/2 h-1 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"></span>
        </h2>

        {/* Descripción de la experiencia */}
        <div className="max-w-3xl mx-auto text-center bg-gray-900 p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-2">Freelancer en plataformas</h3>
          <p className="text-sm text-gray-400 italic mb-4">Abril 2019 - Actualidad</p>
          <p className="mb-6 text-lg leading-relaxed">
            Ofrezco servicios de desarrollo de componentes personalizados, integración eficiente de APIs, creación de interfaces responsivas, 
            y optimización de código para maximizar el rendimiento. Además, me especializo en el desarrollo de aplicaciones de una sola página 
            (SPAs) con React, migraciones a React, y otras soluciones avanzadas para mejorar la experiencia y funcionalidad de tus proyectos web.
          </p>

          {/* Botón para ver proyectos */}
          <a href="https://tu-portfolio.com" target="_blank" rel="noopener noreferrer">
            <button className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white py-2 px-6 rounded-md hover:scale-105 transition-transform duration-300">
              Ver proyectos
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Experience;
