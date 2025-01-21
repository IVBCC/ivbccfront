import React from 'react';
import Header from './componentes/header';
import HeroSection from './componentes/heroSection';
import Events from './componentes/Events';
import Announcements from './componentes/Announcements';
import News from './componentes/News';
import Footer from './componentes/footer';
import Partners from './componentes/partners';
import '../src/componentes/styles.css';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <Announcements />
      <Events />      
      <News />
      <Partners/>
      <Footer />
    </div>
  );
}

export default App;
