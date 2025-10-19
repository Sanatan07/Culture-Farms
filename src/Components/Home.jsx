import { useState, useEffect, useRef } from 'react';
import pic1 from '../assets/pic1.jpg';
import pic2 from '../assets/pic2.jpg';
import pic3 from '../assets/pic3.jpg';
import pic4 from '../assets/pic4.jpg';
import pic5 from '../assets/pic5.jpg';
import pic6 from '../assets/pic6.jpg';
import pic7 from '../assets/pic7.jpg';
import pic8 from '../assets/pic8.jpg';
import pic9 from '../assets/pic9.jpg';
import pic10 from '../assets/pic10.jpg';
import pic11 from '../assets/pic11.jpg';
import pic12 from '../assets/pic12.jpg';
import pic13 from '../assets/pic13.jpg';

export default function Home() {
  const images = [
    pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9, pic10, pic11, pic12, pic13
  ];

  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setCurrent((c) => (c + 1) % images.length);
      }, 3500);
    }
    return () => clearInterval(intervalRef.current);
  }, [isPaused, images.length]);

  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length);
  const next = () => setCurrent((c) => (c + 1) % images.length);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen relative pt-16"
    >
      <div
        className="absolute inset-0 z-0"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {images.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`Slide ${idx + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              idx === current ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-black/20 pointer-events-none" />
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="text-center">
          <button
            onClick={() => scrollToSection('shop')}
            className="bg-green-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-green-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Explore Our Products
          </button>

          {/* controls */}
          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              aria-label="Previous slide"
              className="bg-white/20 text-white px-3 py-2 rounded-full hover:bg-white/30 transition-colors"
            >
              ‹
            </button>

            <div className="flex gap-2 items-center">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`w-3 h-3 rounded-full transition-all ${
                    i === current ? 'bg-white' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Next slide"
              className="bg-white/20 text-white px-3 py-2 rounded-full hover:bg-white/30 transition-colors"
            >
              ›
            </button>
          </div>
        </div>
      </div>

      {/* WhatsApp floating button */}
      <a
        href="https://wa.me/919175027496?text=Hello%20I%20want%20to%20order%20your%20products"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Culture Farms on WhatsApp"
        className="fixed right-5 bottom-5 z-20"
      >
        <div className="bg-emerald-500 hover:bg-emerald-600 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg">
          {/* WhatsApp SVG */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-7 h-7" fill="currentColor" aria-hidden="true">
            <path d="M20.52 3.48A11.95 11.95 0 0 0 12.01.5C6.11.5 1.17 5.44 1.17 11.34c0 1.99.52 3.92 1.51 5.65L.5 23.5l6.76-2.18a11.77 11.77 0 0 0 4.76.98c5.9 0 10.84-4.94 10.84-10.84 0-3.03-1.18-5.86-3.35-7.98zM12 20.5c-1.3 0-2.56-.27-3.73-.8l-.27-.14-4.02 1.3 1.37-3.89-.18-.31A8.45 8.45 0 0 1 3.5 11.34c0-4.69 3.82-8.51 8.51-8.51 4.69 0 8.51 3.82 8.51 8.51 0 4.69-3.82 8.51-8.5 8.51z"/>
            <path d="M17.03 14.27c-.28-.14-1.66-.82-1.92-.91-.26-.09-.45-.14-.64.14-.18.27-.7.91-.86 1.09-.16.18-.32.2-.6.07-.28-.13-1.18-.43-2.25-1.38-.83-.73-1.39-1.63-1.55-1.91-.16-.27-.02-.42.12-.56.12-.12.28-.32.42-.48.14-.16.18-.27.28-.45.09-.18.05-.33-.02-.47-.07-.14-.64-1.55-.88-2.12-.23-.56-.47-.49-.64-.5-.17-.01-.36-.01-.55-.01-.18 0-.47.07-.72.33-.25.26-.96.94-.96 2.3 0 1.36.98 2.67 1.12 2.85.14.18 1.93 2.94 4.68 4.01 1.97.78 2.74.84 3.72.71.6-.08 1.66-.68 1.9-1.33.23-.65.23-1.21.16-1.33-.07-.13-.26-.18-.54-.32z"/>
          </svg>
        </div>
      </a>
    </section>
  );
}