import React from 'react';
import { useNavigate } from 'react-router-dom';
import ImagenIglesia from '../image/iglesia.jpeg';
import ImagenCanasta from '../image/canastadeamor.jpeg';
import ImagenMinisterio from '../image/ministerio.jpeg';
import './styles.css';


const News = () => {

  const navigate = useNavigate();

  const handleNavigation = (e) => {
    e.preventDefault();
    navigate('/noticias#todas');
    setTimeout(() => {
      const element = document.querySelector("#todas");
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100); // Espera un poco para asegurarse de que la página ha cargado
  };

  const articles = [
    {
      title: '¡Nueva iglesia!',
      description: 'Celebrarémos muy pronto la inauguración de nuestra nueva iglesia en la ciudad de Valledupar.',
      image: ImagenIglesia,
    },
    {
      title: 'Tu granito de arena',
      description: '"Porque tuve hambre, y me disteis de comer; tuve sed, y me disteis de beber; fui forastero, y me recogisteis; estuve desnudo, y me cubristeis; enfermo, y me visitasteis; en la cárcel, y vinisteis a mí." Mateo 25:35-36',
      image: ImagenCanasta,
    },
    {
      title: '¡Ministerios!',
      description: 'Contribuye con el crecimiento de la iglesia, poniendo a su servicio los dones y talentos que Dios te ha dado.',
      image: ImagenMinisterio,      
    },
  ];

  return (
    <section className="news-section">
      <h2>Últimas Noticias</h2>
      <div className="news-container">
        {articles.map((article, index) => (
          <div key={index} className="news-card">
            <img src={article.image} alt={article.title} />
            <h4>{article.title}</h4>
            <p>{article.description}</p>
            <a href="/noticias#todas" onClick={handleNavigation}>Leer más</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default News;