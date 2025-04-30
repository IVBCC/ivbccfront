import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from "./componentes/ScrollToTop";
import Header from './componentes/header';
import HeroSection from './componentes/heroSection';
import Events from './componentes/Events';
import Announcements from './componentes/Announcements';
import News from './componentes/News';
import Footer from './componentes/footer';
import Partners from './componentes/partners';
import AboutUs from './componentes/abouts';
import DeclarationOfFaith from './componentes/DeclarationOfFaith';
import CEFI from './componentes/formacion/cefi';
import IBPS from './componentes/formacion/ibps';
import Inscripciones from './componentes/formacion/inscripciones';
import Noticias from './componentes/noticias/noticias';
import Publicaciones from './componentes/publicaciones/publicaciones';
import Contactenos from './componentes/contactenos/contacto';
import IglesiasccColombia from './componentes/iglesias/iglesiaccColombia';
import IglesiasccVpar from './componentes/iglesias/iglesiasccValledupar';
import './componentes/styles.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <HeroSection />
              <Announcements />
              <Events />
              <News />
              <Partners />
            </>
          } />
          <Route path="/nosotros" element={
            <>
              <AboutUs />
              <DeclarationOfFaith />
              <Partners />
            </>
          } />
          <Route path="/formacion/cefi" element={<CEFI />} />
          <Route path="/formacion/ibps" element={<IBPS />} />
          <Route path="/formacion/inscripciones" element={<Inscripciones />} />
          <Route path="/noticias" element={<Noticias />} />
          <Route path="/publicaciones" element={<Publicaciones />} />
          <Route path="/contacto" element={<Contactenos />} />
          <Route path="/ccencolombia" element={<><IglesiasccColombia /> <Partners /></>} />
          <Route path="/ccenvpar" element={<IglesiasccVpar />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
