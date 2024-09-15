import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faBriefcase, faLaptopCode, faEnvelope, faProjectDiagram, faTimes } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full flex justify-center z-50 bg-black/90 backdrop-blur-lg py-4 shadow-lg transition-all duration-300">
      <div className="w-11/12 md:w-1/2 flex justify-between items-center rounded-lg">

        {/* Menú en pantallas grandes */}
        <div className="hidden md:flex space-x-10"> {/* Aumentado de space-x-8 a space-x-10 */}
          <a href="#inicio" className="text-white relative group flex items-center space-x-2 text-lg font-medium whitespace-nowrap">
            <FontAwesomeIcon icon={faHome} />
            <span>Inicio</span>
            <span className="absolute left-0 bottom-0 h-[2px] w-full bg-gradient-to-r from-purple-500 to-blue-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
          </a>
          <a href="#SobreMi" className="text-white relative group flex items-center space-x-2 text-lg font-medium whitespace-nowrap">
            <FontAwesomeIcon icon={faUser} />
            <span>Sobre Mí</span> {/* Asegurando que "Sobre Mí" no se divida */}
            <span className="absolute left-0 bottom-0 h-[2px] w-full bg-gradient-to-r from-purple-500 to-blue-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
          </a>
          <a href="#experiencia" className="text-white relative group flex items-center space-x-2 text-lg font-medium whitespace-nowrap">
            <FontAwesomeIcon icon={faBriefcase} />
            <span>Experiencia</span>
            <span className="absolute left-0 bottom-0 h-[2px] w-full bg-gradient-to-r from-purple-500 to-blue-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
          </a>
          <a href="#tecnologia" className="text-white relative group flex items-center space-x-2 text-lg font-medium whitespace-nowrap">
            <FontAwesomeIcon icon={faLaptopCode} />
            <span>Tecnologías</span>
            <span className="absolute left-0 bottom-0 h-[2px] w-full bg-gradient-to-r from-purple-500 to-blue-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
          </a>
          <a href="#proyectos" className="text-white relative group flex items-center space-x-2 text-lg font-medium whitespace-nowrap">
            <FontAwesomeIcon icon={faProjectDiagram} />
            <span>Proyectos</span>
            <span className="absolute left-0 bottom-0 h-[2px] w-full bg-gradient-to-r from-purple-500 to-blue-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
          </a>
          <a href="#contacto" className="text-white relative group flex items-center space-x-2 text-lg font-medium whitespace-nowrap">
            <FontAwesomeIcon icon={faEnvelope} />
            <span>Contacto</span>
            <span className="absolute left-0 bottom-0 h-[2px] w-full bg-gradient-to-r from-purple-500 to-blue-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
          </a>
        </div>

        {/* Botón del menú hamburguesa */}
        <div className="md:hidden">
          <button 
            onClick={() => setMenuOpen(!menuOpen)} 
            className="text-white focus:outline-none text-2xl transition-transform transform hover:scale-110">
            ☰
          </button>
        </div>
      </div>

      {/* Menú desplegable en móviles */}
      <div className={`fixed inset-y-0 left-0 bg-gray-800 w-3/4 max-w-xs p-6 flex flex-col space-y-8 z-50 transition-transform transform ${menuOpen ? 'translate-x-0' : '-translate-x-full'} duration-500 ease-in-out shadow-xl`}>
        {/* Botón de cierre del menú */}
        <div className="self-end">
          <button onClick={() => setMenuOpen(false)} className="text-white text-3xl hover:text-gray-300 transition-colors">
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
        
        <a href="#inicio" onClick={() => setMenuOpen(false)} className="block text-white text-lg flex items-center space-x-3 py-3 px-4 hover:bg-gray-700 rounded-lg transition-all duration-300">
          <FontAwesomeIcon icon={faHome} />
          <span>Inicio</span>
        </a>
        <a href="#sobre-mi" onClick={() => setMenuOpen(false)} className="block text-white text-lg flex items-center space-x-3 py-3 px-4 hover:bg-gray-700 rounded-lg transition-all duration-300">
          <FontAwesomeIcon icon={faUser} />
          <span>Sobre Mí</span>
        </a>
        <a href="#experiencia" onClick={() => setMenuOpen(false)} className="block text-white text-lg flex items-center space-x-3 py-3 px-4 hover:bg-gray-700 rounded-lg transition-all duration-300">
          <FontAwesomeIcon icon={faBriefcase} />
          <span>Experiencia</span>
        </a>
        <a href="#tecnologias" onClick={() => setMenuOpen(false)} className="block text-white text-lg flex items-center space-x-3 py-3 px-4 hover:bg-gray-700 rounded-lg transition-all duration-300">
          <FontAwesomeIcon icon={faLaptopCode} />
          <span>Tecnologías</span>
        </a>
        <a href="#proyectos" onClick={() => setMenuOpen(false)} className="block text-white text-lg flex items-center space-x-3 py-3 px-4 hover:bg-gray-700 rounded-lg transition-all duration-300">
          <FontAwesomeIcon icon={faProjectDiagram} />
          <span>Proyectos</span>
        </a>
        <a href="#contacto" onClick={() => setMenuOpen(false)} className="block text-white text-lg flex items-center space-x-3 py-3 px-4 hover:bg-gray-700 rounded-lg transition-all duration-300">
          <FontAwesomeIcon icon={faEnvelope} />
          <span>Contacto</span>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
