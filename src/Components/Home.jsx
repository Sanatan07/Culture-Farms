import { useState, useEffect, useRef } from 'react';
import pic1 from '../../public/assets/pic1';
import pic2 from '../../public/assets/pic2';
import pic3 from '../../public/assets/pic3';
import pic4 from '../../public/assets/pic4';
import pic5 from '../../public/assets/pic5';
import pic6 from '../../public/assets/pic6';
import pic7 from '../../public/assets/pic7';
import pic8 from '../../public/assets/pic8';
import pic9 from '../../public/assets/pic9';
import pic10 from '../../public/assets/pic10';
import pic11 from '../../public/assets/pic11';
import pic12 from '../../public/assets/pic12';
import pic13 from '../../public/assets/pic13';

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
    <section id="home" className="min-h-screen relative pt-16">
      <div className="absolute inset-0 z-0" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
        {/* slides */}
        {images.map((src, idx) => (
          <img key={idx} src={src} alt={`Slide ${idx+1}`} className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${idx===current ? 'opacity-100' : 'opacity-0'}`} />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(9,64,36,0.18)] via-[rgba(0,0,0,0.06)] to-[rgba(243,248,244,0.25)] pointer-events-none" />
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="text-center">
          {/* removed 'Welcome...' per request, only button */}
          <button onClick={() => scrollToSection('shop')} className="btn-cf px-8 py-4 rounded-full text-lg font-medium shadow-lg">
            Explore Our Products
          </button>

          {/* slide controls (small, green/soft) */}
          <div className="mt-6 flex items-center justify-center gap-4">
            <button onClick={prev} aria-label="Previous" className="bg-white/10 text-white px-3 py-2 rounded-full hover:bg-white/20">‹</button>
            <div className="flex gap-2">
              {images.map((_, i) => (
                <button key={i} onClick={() => setCurrent(i)} className={`w-3 h-3 rounded-full ${i===current? 'bg-white':'bg-white/50'}`} />
              ))}
            </div>
            <button onClick={next} aria-label="Next" className="bg-white/10 text-white px-3 py-2 rounded-full hover:bg-white/20">›</button>
          </div>
        </div>
      </div>
    </section>
  );
}