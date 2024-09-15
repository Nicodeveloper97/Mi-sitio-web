import React, { useEffect, useRef } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { gsap } from "gsap";

const Footer: React.FC = () => {
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animación de GSAP para los elementos del footer
      gsap.timeline()
        .from(".footer-name", { opacity: 0, y: 50, duration: 1, ease: "power3.out" })
        .from(".footer-icons a", { opacity: 0, y: 50, duration: 1, stagger: 0.3, ease: "power3.out" }, "-=0.5");
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} className="relative py-10 bg-gray-900 text-white">
      {/* Fondo animado con GSAP */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full bg-[rgba(255,255,255,0.05)] mix-blend-overlay"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        {/* Sección del nombre */}
        <div className="text-center md:text-left">
          <h3 className="footer-name text-3xl font-bold tracking-wide">
            Nicolas Iglesias
          </h3>
          <p className="text-gray-400 mt-2 text-sm">Full Stack Developer | Innovator</p>
        </div>

        {/* Sección de iconos de LinkedIn y GitHub */}
        <div className="footer-icons flex space-x-6">
          <a
            href="https://www.linkedin.com/in/nicolasiglesias97"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-3xl hover:text-gray-300 transition-colors duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/Nicodeveloper97"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-3xl hover:text-gray-300 transition-colors duration-300"
          >
            <FaGithub />
          </a>
        </div>
      </div>

      {/* Línea divisoria */}
      <div className="border-t border-gray-700 mt-8"></div>

      {/* Sección de copyright */}
      <div className="container mx-auto px-4 py-6 text-center text-gray-400">
        <p className="text-sm">© 2024 Nicolas Iglesias. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
