import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Technologies from "./components/Technologies"
import AboutMe from "./components/AboutMe"
import Experiencia from "./components/Experiencie"
import Proyecto from "./components/Proyectos"
import Contacto from "./components/Contact"
import Footer from "./components/Footer"



function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Experiencia />
      <Proyecto />
      <AboutMe/>
      <Technologies />
      <Contacto />
      <Footer />
    </div>
  );
}

export default App;
