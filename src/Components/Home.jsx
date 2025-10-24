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
  const images = [
    pic1, pic2, pic5, pic8, pic9, pic10, pic12, pic13
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
          {/* Explore button removed per request */}

          {/* slide controls: only previous/next (dots removed) */}
        </div>
      </div>
    </section>
  );
}