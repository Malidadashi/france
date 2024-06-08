// src/components/InspirationItem.js
import React from 'react';
import './InspirationItem.css';

const InspirationItem = ({ title, description, imageUrl }) => {
  return (
    <div className="inspiration-item">
      <img src={imageUrl} alt={title} className="inspiration-image" />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default InspirationItem;
