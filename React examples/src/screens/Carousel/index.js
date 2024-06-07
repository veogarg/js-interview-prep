import React, { useState } from "react";
import "./style.css"

const slides = [
  new URL("/src/assets/images/1.png", import.meta.url),
  new URL("/src/assets/images/2.png", import.meta.url),
  new URL("/src/assets/images/3.png", import.meta.url),
  new URL("/src/assets/images/4.png", import.meta.url),
  new URL("/src/assets/images/5.png", import.meta.url)
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSlideChange = (changeSlideByNum) => {
    switch (changeSlideByNum) {
      case -1:
        setCurrentIndex((prev) => (slides.length + prev - 1) % slides.length);
        break;

      case 1:
        setCurrentIndex((prev) => (slides.length + prev + 1) % slides.length);
        break;

      default:
        return;
    }
  };

  return (
    <>
      <h1>Carousel</h1>
      <div className="carousel-section">
        <div className="carousel-slides">
        <span className="prev" onClick={() => handleSlideChange(-1)}>
          Prev
        </span>
          {slides.map((slide, index) => {
            return (
              <>
                <div
                  key={`carousel${index}`}
                  className={`carousel-img ${
                    index === currentIndex ? "active" : "inactive"
                  }`}
                >
                  <img src={slide} alt={`image ${index + 1}`} />
                  <caption style={{display: "flex"}}>{index+1} of {slides.length}</caption>
                </div>
              </>
            );
          })}
        <span className="next" onClick={() => handleSlideChange(1)}>
          Next
        </span>
        </div>
      </div>
    </>
  );
};

export default Carousel;
