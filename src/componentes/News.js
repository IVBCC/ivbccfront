import React from 'react';
import ImagenIglesia from '../image/iglesia.jpeg';
import ImagenCanasta from '../image/canastadeamor.jpeg';
import ImagenMinisterio from '../image/ministerio.jpeg';
import './styles.css';


const News = () => {
  const articles = [
    {
      title: '¡Nueva iglesia!',
      description: 'Celebrarémos muy pronto la inauguración de nuestra nueva iglesia en la ciudad de Valledupar.',
      image: ImagenIglesia,
    },
    {
      title: 'Tu granito de arena',
      description: '¡Dios ama al dador alegre!',
      image: ImagenCanasta,
    },
    {
      title: '¡Nuestro ministerio!',
      description: 'Haz parte de nuestro ministerio, ven y pon a prueba el Don que Dios te ha dado.',
      image: ImagenMinisterio,
    },
  ];

  return (
    <section className="news-section">
      <h4>Últimas Noticias</h4>
      <h2>Entérate de lo nuevo</h2>
      <div className="news-container">
        {articles.map((article, index) => (
          <div key={index} className="news-card">
            <img src={article.image} alt={article.title} />
            <h4>{article.title}</h4>
            <p>{article.description}</p>
            <a href="#">Leer más</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default News;