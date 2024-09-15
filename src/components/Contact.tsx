import React from "react";
import { FaUser, FaPhoneAlt, FaEnvelope, FaCommentDots } from "react-icons/fa";

const ContactSection: React.FC = () => {
  return (
    <section className="w-full py-20 bg-gray-900 text-white" id="Contacto">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-12 relative inline-block text-center w-full">
          Contacto
          <span className="absolute left-1/4 bottom-[-10px] w-1/2 h-1 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"></span>
        </h2>

        {/* Formulario con atributos de Netlify */}
        <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" className="max-w-2xl mx-auto bg-gray-800 p-8 rounded-xl shadow-lg">

          {/* Campo oculto para Netlify */}
          <input type="hidden" name="form-name" value="contact" />
          <div className="hidden">
            <label>
              Don’t fill this out: <input name="bot-field" />
            </label>
          </div>

          {/* Nombre y apellido */}
          <div className="mb-6">
            <label className="block text-lg font-semibold mb-2" htmlFor="name">
              Nombre y Apellido
            </label>
            <div className="relative">
              <FaUser className="absolute top-3 left-3 text-gray-400" />
              <input
                type="text"
                id="name"
                name="name"
                className="w-full pl-10 p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Ingresa tu nombre completo"
              />
            </div>
          </div>

          {/* Número de celular */}
          <div className="mb-6">
            <label className="block text-lg font-semibold mb-2" htmlFor="phone">
              Número de Celular
            </label>
            <div className="relative">
              <FaPhoneAlt className="absolute top-3 left-3 text-gray-400" />
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full pl-10 p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Ingresa tu número de celular"
              />
            </div>
          </div>

          {/* Email */}
          <div className="mb-6">
            <label className="block text-lg font-semibold mb-2" htmlFor="email">
              Email
            </label>
            <div className="relative">
              <FaEnvelope className="absolute top-3 left-3 text-gray-400" />
              <input
                type="email"
                id="email"
                name="email"
                className="w-full pl-10 p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Ingresa tu correo electrónico"
              />
            </div>
          </div>

          {/* Consulta */}
          <div className="mb-6">
            <label className="block text-lg font-semibold mb-2" htmlFor="message">
              Consulta
            </label>
            <div className="relative">
              <FaCommentDots className="absolute top-3 left-3 text-gray-400" />
              <textarea
                id="message"
                name="message"
                className="w-full pl-10 p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Escribe tu consulta"
                rows={4}
              ></textarea>
            </div>
          </div>

          {/* Botón de enviar */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-shadow duration-300"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
