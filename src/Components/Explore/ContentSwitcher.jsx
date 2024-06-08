import React, { useState } from "react";
import "./ContentSwitcher.css";
import contentData from "./contentData ";
import { FaLessThan } from "react-icons/fa";
import { PiGreaterThanBold } from "react-icons/pi";




const ContentSwitcher = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const toggleContent = () => {
    setCurrentIndex((currentIndex + 1) % contentData.length);
  };

  function switchSlider(action) {
    if (action === "back") {
      currentIndex === 0
        ? setCurrentIndex(contentData.length-1)
        : currentIndex === contentData.length-1
        ? setCurrentIndex(currentIndex - 1)
        : setCurrentIndex(currentIndex - 1);
    }
    if (action === "next") {
      currentIndex === 0
        ? setCurrentIndex(currentIndex +1)
        : currentIndex === contentData.length-1
        ? setCurrentIndex(0)
        : setCurrentIndex(currentIndex + 1);
    }
  }

  const { image, title, description } = contentData[currentIndex];

  return (
    <div className="content-switcher">
      <button
        className="slider-button back-slide"
        onClick={() => switchSlider("back")}
      >
       <FaLessThan/>
      </button>
      <div className="content" style={{ backgroundImage: `url(${image})` }}>
        <div className="content-overlay">
          <h2>{title}</h2>
          <p>{description}</p>
          <button onClick={toggleContent}>Discover</button>
        </div>
        <div className="dynamic-description">
          <span className="large-content">
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without relying on meaningful content. Lorem ipsum may be
            used as a placeholder before the final copy is available.
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without relying on meaningful content. Lorem ipsum may be
            used as a placeholder before the final copy is available.
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without relying on meaningful content. Lorem ipsum may be
            used as a placeholder before the final copy is available.
          </span>
        </div>
      </div>
      <button
        className="slider-button forward-slide"
        onClick={() => switchSlider("next")}
      >
        <PiGreaterThanBold/>
      </button>
    </div>
  );
};

export default ContentSwitcher;
