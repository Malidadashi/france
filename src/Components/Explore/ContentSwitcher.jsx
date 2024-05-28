import React, { useState } from 'react';
import './ContentSwitcher.css';
import contentData from './contentData ';

const ContentSwitcher = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const toggleContent = () => {
    setCurrentIndex((currentIndex + 1) % contentData.length);
  };

  const { image, title, description } = contentData[currentIndex];

  return (
    <div className="content-switcher">
      <div className="content" style={{ backgroundImage: `url(${image})` }}>
        <div className="content-overlay">
          <h2>{title}</h2>
          <p>{description}</p>
          <button onClick={toggleContent}>Switch Content</button>
        </div>
      </div>
    </div>
  );
};

export default ContentSwitcher;
