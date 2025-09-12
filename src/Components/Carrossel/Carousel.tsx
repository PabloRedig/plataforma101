import React, { useState, useEffect } from "react";
import "./Carousel.css";

interface CarouselItem {
  src: string;
  title: string;
}

interface CarouselProps {
  items: CarouselItem[];
}

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const showPrev = () => {
    setCurrentIndex((prev) =>
      prev > 0 ? prev - 1 : items.length - 1
    );
  };

  const showNext = () => {
    setCurrentIndex((prev) =>
      prev < items.length - 1 ? prev + 1 : 0
    );
  };

  // Auto-play a cada 30 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      showNext();
    }, 30000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="carousel">
      <div
        className="carousel-track"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {items.map((item, index) => (
          <div className="carousel-item" key={index}>
            <img src={item.src} alt={item.title} />
            <div className="carousel-caption">
              <h2>{item.title}</h2>
            </div>
          </div>
        ))}
      </div>

      <button className="carousel-btn prev" onClick={showPrev}>❮</button>
      <button className="carousel-btn next" onClick={showNext}>❯</button>

      {/* Indicadores (bolinhas) */}
      <div className="carousel-indicators">
        {items.map((_, index) => (
          <span
            key={index}
            className={`dot ${currentIndex === index ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
