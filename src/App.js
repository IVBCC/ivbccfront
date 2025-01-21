import React, { useState } from 'react';
import Header from './componentes/header';
import HeroSection from './componentes/heroSection';
import Events from './componentes/Events';
import Announcements from './componentes/Announcements';
import News from './componentes/News';
import Footer from './componentes/footer';
import Partners from './componentes/partners';
import AboutUs from './componentes/abouts';
import '../src/componentes/styles.css';

function App() {
  const [currentSection, setCurrentSection] = useState('inicio'); // Estado para manejar la sección activa

  const handleNavigation = (section) => {
    setCurrentSection(section); // Cambia la sección actual
  };
  return (
    <div className="App">
      <Header onNavigate={handleNavigation}/>
      {currentSection === 'inicio' && (
        <>
          <HeroSection />
          <Announcements />
          <Events />
          <News />
          <Partners />
        </>
      )}
      {currentSection === 'nosotros' && (
        <>
          <AboutUs />
          <Partners />
        </>
      )}
      <Footer />
    </div>
  );
}

export default App;
