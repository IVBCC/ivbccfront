import React from 'react';
import './styles.css';

const Section = ({ id, title, content, image }) => {
  return (
    <section className="section" id={id}>
      <div className="section-content">
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
      {image && <img src={image} alt={title} className="section-image" />}
    </section>
  );
};

export default Section;
