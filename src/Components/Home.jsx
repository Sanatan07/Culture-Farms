import { useState, useEffect, useRef } from 'react';
import pic1 from '../../public/assets/pic1.jpg';
import pic2 from '../../public/assets/pic2.jpg';
import pic5 from '../../public/assets/pic5.jpg';
import pic8 from '../../public/assets/pic8.jpg';
import pic9 from '../../public/assets/pic9.jpg';
import pic10 from '../../public/assets/pic10.jpg';
import pic12 from '../../public/assets/pic12.jpg';
import pic13 from '../../public/assets/pic13.jpg';

export default function Home() {
  const images = [pic1, pic2, pic5, pic8, pic9, pic10, pic12, pic13];

  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

  // Slide rotation
  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setCurrent(c => (c + 1) % images.length);
      }, 3500);
    }
    return () => clearInterval(intervalRef.current);
  }, [isPaused, images.length]);

  const whatsappLink = 'https://api.whatsapp.com/send/?phone=919021618182&text=I+want+to+buy+this+product.&type=phone_number&app_absent=0';

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-green-50 to-emerald-100">
      <div 
        className="relative w-full h-full"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {images.map((img, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              idx === current ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={img}
              alt={`Slide ${idx + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        <button
          onClick={() => setCurrent(c => (c - 1 + images.length) % images.length)}
          className="w-12 h-12 rounded-full bg-white/80 hover:bg-white shadow-lg flex items-center justify-center transition-all"
        >
          ←
        </button>
        <button
          onClick={() => setCurrent(c => (c + 1) % images.length)}
          className="w-12 h-12 rounded-full bg-white/80 hover:bg-white shadow-lg flex items-center justify-center transition-all"
        >
          →
        </button>
      </div>
    </div>
  );
}