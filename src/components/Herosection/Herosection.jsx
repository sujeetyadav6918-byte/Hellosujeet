import React, { useState, useEffect } from "react";

const images = [
  "/website.imge/image4.jpg","/website.imge/image1.jpg","/website.imge/image5.jpg"


];

const Herosection= () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Autoplay every 4s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  // Navigation handlers
  const prevSlide = () => {
    setCurrentIndex(prev =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };
  const nextSlide = () => {
    setCurrentIndex(prev =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };
  const goToSlide = idx => setCurrentIndex(idx);

  return (
    <div className="relative w-full overflow-hidden">
      {/* Slides */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100}vw)`,
          width: `${images.length * 100}vw`,
          height: "100%",
        }}
      >
        {images.map((src, i) => (
          <div
            key={i}
            className={`w-screen ${i === currentIndex ? '' : 'opacity-95'}`}
            style={{ height: "60vh", minHeight: 260, maxHeight: 480 }}
          >
            <img
              src={src}
              alt={`slide ${i}`}
              className="w-full h-full object-cover"
              style={{ minHeight: 260, maxHeight: 480 }}
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Navigation (arrows) */}
      <button
        onClick={prevSlide}
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 text-white text-xl md:text-3xl px-2 md:px-3 py-1 rounded-full hover:bg-black/75 transition z-10"
        aria-label="Prev"
      >
        &#8249;
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 text-white text-xl md:text-3xl px-2 md:px-3 py-1 rounded-full hover:bg-black/75 transition z-10"
        aria-label="Next"
      >
        &#8250;
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 md:bottom-6 w-full flex justify-center gap-2 md:gap-3 z-20">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            className={`w-2.5 h-2.5 md:w-3.5 md:h-3.5 rounded-full border border-white shadow-sm transition-all duration-150 ${
              i === currentIndex ? "bg-blue-500 scale-110" : "bg-white/60"
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Herosection;
