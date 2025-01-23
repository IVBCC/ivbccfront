import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './componentes/ScrollToTop'; // Importa el componente
import Header from './componentes/header';
import HeroSection from './componentes/heroSection';
import Events from './componentes/Events';
import Announcements from './componentes/Announcements';
import News from './componentes/News';
import Footer from './componentes/footer';
import Partners from './componentes/partners';
import AboutUs from './componentes/abouts';
import DeclarationOfFaith from './componentes/DeclarationOfFaith';
import '../src/componentes/styles.css';

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* Componente para desplazarse al inicio */}
      <div className="App">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <Announcements />
                <Events />
                <News />
                <Partners />
              </>
            }
          />
          <Route
            path="/nosotros"
            element={
              <>
                <AboutUs />
                <DeclarationOfFaith />
                <Partners />
              </>
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;