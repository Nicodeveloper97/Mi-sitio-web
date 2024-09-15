import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Technologies from "./components/Technologies";
import AboutMe from "./components/AboutMe";
import Experiencia from "./components/Experiencie";
import Proyecto from "./components/Proyectos";
import Contacto from "./components/Contact";
import Footer from "./components/Footer";
import ThankYou from './components/ThankYou'; 

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Experiencia />
              <Proyecto />
              <AboutMe />
              <Technologies />
              <Contacto />
              <Footer />
            </>
          } />

          <Route path="/thank-you" element={<ThankYou />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
