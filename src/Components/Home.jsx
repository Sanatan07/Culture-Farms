// import { useState, useEffect, useRef } from 'react';
// import pic1 from '../../public/assets/pic1.jpg';
// import pic2 from '../../public/assets/pic2.jpg';
// import pic5 from '../../public/assets/pic5.jpg';
// import pic8 from '../../public/assets/pic8.jpg';
// import pic9 from '../../public/assets/pic9.jpg';
// import pic10 from '../../public/assets/pic10.jpg';
// import pic12 from '../../public/assets/pic12.jpg';
// import pic13 from '../../public/assets/pic13.jpg';

// export default function Home() {
//   const images = [
//     pic1, pic2, pic5, pic8, pic9, pic10, pic12, pic13
//   ];

//   // Start with sale slide, then insert after every image
//   const slides = [{ type: 'sale' }]; // Start with sale slide
//   for (let i = 0; i < images.length; i++) {
//     slides.push({ type: 'image', content: images[i] });
//     slides.push({ type: 'sale' }); // Add sale slide after each image
//   }

//   const [current, setCurrent] = useState(0);
//   const [isPaused, setIsPaused] = useState(false);
//   const [timeLeft, setTimeLeft] = useState({
//     days: 0,
//     hours: 0,
//     minutes: 0,
//     seconds: 0
//   });
//   const intervalRef = useRef(null);

//   // Countdown timer for sale slide
//   useEffect(() => {
//     const calculateTimeLeft = () => {
//       // Set end date to 3rd January 2026, 11:59 PM IST
//       // IST is UTC+5:30, so we need to adjust
//       const endDate = new Date('2026-01-03T23:59:59+05:30').getTime();
//       const now = new Date().getTime();
//       const difference = endDate - now;

//       if (difference > 0) {
//         setTimeLeft({
//           days: Math.floor(difference / (1000 * 60 * 60 * 24)),
//           hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
//           minutes: Math.floor((difference / 1000 / 60) % 60),
//           seconds: Math.floor((difference / 1000) % 60)
//         });
//       }
//     };

//     calculateTimeLeft();
//     const timer = setInterval(calculateTimeLeft, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   useEffect(() => {
//     if (!isPaused) {
//       intervalRef.current = setInterval(() => {
//         setCurrent((c) => {
//           const nextSlide = (c + 1) % slides.length;
//           return nextSlide;
//         });
//       }, slides[current]?.type === 'sale' ? 5000 : 3500); // 5 seconds for sale, 3.5 seconds for images
//     }
//     return () => clearInterval(intervalRef.current);
//   }, [isPaused, slides.length, current]);

//   const whatsappLink = "https://api.whatsapp.com/send/?phone=919021618182&text=I+want+to+buy+this+product.&type=phone_number&app_absent=0";

//   const SaleSlide = () => (
//     <div className="absolute inset-0 bg-gradient-to-br from-red-700 via-red-600 to-green-700 flex items-center justify-center p-4">
//       <div className="max-w-4xl w-full">
//         {/* Decorative elements - Multiple Christmas trees and gifts */}
//         <div className="absolute text-6xl md:text-8xl opacity-20 top-5 left-5 animate-bounce">🎄</div>
//         <div className="absolute text-5xl md:text-7xl opacity-20 top-20 left-32 animate-bounce" style={{animationDelay: '0.5s'}}>🎁</div>
//         <div className="absolute text-6xl md:text-8xl opacity-20 top-10 right-10 animate-bounce" style={{animationDelay: '1s'}}>🎄</div>
//         <div className="absolute text-5xl md:text-7xl opacity-20 bottom-20 left-20 animate-bounce" style={{animationDelay: '1.5s'}}>🎁</div>
//         <div className="absolute text-6xl md:text-8xl opacity-20 bottom-10 right-20 animate-bounce" style={{animationDelay: '2s'}}>🎄</div>
//         <div className="absolute text-5xl md:text-7xl opacity-20 bottom-32 right-5 animate-bounce" style={{animationDelay: '2.5s'}}>🎁</div>
//         <div className="absolute text-4xl md:text-6xl opacity-15 top-40 left-1/4 animate-bounce" style={{animationDelay: '0.8s'}}>🎄</div>
//         <div className="absolute text-4xl md:text-6xl opacity-15 bottom-40 right-1/4 animate-bounce" style={{animationDelay: '1.8s'}}>🎁</div>
        
//         <div className="text-center relative z-10">
//           {/* Badge */}
//           <div className="inline-block bg-white text-red-600 px-6 py-2 rounded-full font-bold text-sm uppercase tracking-wide mb-6 shadow-lg">
//             🎉 Limited Time Offer
//           </div>
          
//           {/* Title */}
//           <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
//             Christmas & New Year Sale
//           </h1>
          
//           {/* Offer Box */}
//           <div className="bg-white bg-opacity-95 rounded-2xl p-6 md:p-8 max-w-2xl mx-auto mb-6 shadow-2xl">
//             <div className="text-5xl md:text-7xl font-bold text-red-600 leading-none mb-3">
//               ₹50 OFF
//             </div>
//             <div className="text-xl md:text-2xl text-green-800 font-semibold mb-2">
//               On Your First WhatsApp Order
//             </div>
//             <p className="text-gray-600 italic text-sm mb-4">
//               Valid for all customers
//             </p>
            
//             {/* Features */}
//             <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-4 text-sm md:text-base">
//               <div className="flex items-center gap-2">
//                 <span className="text-2xl">🌿</span>
//                 <span className="font-semibold text-green-800">100% Natural</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <span className="text-2xl">👨‍🌾</span>
//                 <span className="font-semibold text-green-800">Farmer Owned</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <span className="text-2xl">📦</span>
//                 <span className="font-semibold text-green-800">Freshly Packed</span>
//               </div>
//             </div>
//           </div>
          
//           {/* Countdown */}
//           <div className="bg-white bg-opacity-90 rounded-xl p-4 max-w-xl mx-auto mb-6 shadow-lg">
//             <p className="text-yellow-800 font-semibold mb-3">⏰ Offer Ends In</p>
//             <div className="flex justify-center gap-3">
//               <div className="text-center">
//                 <div className="bg-red-600 text-white text-xl md:text-2xl font-bold rounded-lg p-2 md:p-3 min-w-[50px] md:min-w-[60px]">
//                   {timeLeft.days}
//                 </div>
//                 <div className="text-xs text-gray-700 mt-1 font-medium">Days</div>
//               </div>
//               <div className="text-center">
//                 <div className="bg-red-600 text-white text-xl md:text-2xl font-bold rounded-lg p-2 md:p-3 min-w-[50px] md:min-w-[60px]">
//                   {timeLeft.hours}
//                 </div>
//                 <div className="text-xs text-gray-700 mt-1 font-medium">Hours</div>
//               </div>
//               <div className="text-center">
//                 <div className="bg-red-600 text-white text-xl md:text-2xl font-bold rounded-lg p-2 md:p-3 min-w-[50px] md:min-w-[60px]">
//                   {timeLeft.minutes}
//                 </div>
//                 <div className="text-xs text-gray-700 mt-1 font-medium">Mins</div>
//               </div>
//               <div className="text-center">
//                 <div className="bg-red-600 text-white text-xl md:text-2xl font-bold rounded-lg p-2 md:p-3 min-w-[50px] md:min-w-[60px]">
//                   {timeLeft.seconds}
//                 </div>
//                 <div className="text-xs text-gray-700 mt-1 font-medium">Secs</div>
//               </div>
//             </div>
//             <p className="text-red-600 font-bold mt-3">Valid till 3rd January 2026</p>
//           </div>
          
//           {/* CTA Button */}
//           <a 
//             href={whatsappLink}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-full text-base md:text-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
//           >
//             <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//               <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
//             </svg>
//             Order on WhatsApp
//           </a>
//         </div>
//       </div>
//     </div>
//   );

//   return (
//     <section id="home" className="min-h-screen relative pt-16">
//       <div className="absolute inset-0 z-0" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
//         {/* slides */}
//         {slides.map((slide, idx) => (
//           <div key={idx} className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${idx===current ? 'opacity-100' : 'opacity-0'}`}>
//             {slide.type === 'image' ? (
//               <>
//                 <img src={slide.content} alt={`Slide ${idx+1}`} className="absolute inset-0 w-full h-full object-cover" />
//                 <div className="absolute inset-0 bg-gradient-to-b from-[rgba(9,64,36,0.18)] via-[rgba(0,0,0,0.06)] to-[rgba(243,248,244,0.25)] pointer-events-none" />
//               </>
//             ) : (
//               <SaleSlide />
//             )}
//           </div>
//         ))}
//       </div>

//       <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
//         <div className="text-center">
//           {/* Explore button removed per request */}
//           {/* slide controls: only previous/next (dots removed) */}
//         </div>
//       </div>
//     </section>
//   );
// }



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

  // Slides: sale → image → sale → image ...
  const slides = [{ type: 'sale' }];
  images.forEach(img => {
    slides.push({ type: 'image', content: img });
    slides.push({ type: 'sale' });
  });

  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const intervalRef = useRef(null);

  // Countdown timer
  useEffect(() => {
    const calculateTimeLeft = () => {
      const endDate = new Date('2026-01-03T23:59:59+05:30').getTime();
      const now = Date.now();
      const diff = endDate - now;

      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / 1000 / 60) % 60),
          seconds: Math.floor((diff / 1000) % 60)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  // Slide rotation
  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setCurrent(c => (c + 1) % slides.length);
      }, slides[current]?.type === 'sale' ? 5000 : 3500);
    }
    return () => clearInterval(intervalRef.current);
  }, [isPaused, current, slides.length]);

  const whatsappLink =
    'https://api.whatsapp.com/send/?phone=919021618182&text=I+want+to+buy+this+product.&type=phone_number&app_absent=0';

  const SaleSlide = () => (
    <div
      className="
        absolute inset-0
        bg-red-700
        bg-gradient-to-br from-red-700 via-red-600 to-green-700
        flex items-center justify-center p-4
      "
    >
      <div className="max-w-4xl w-full relative">
        {/* Decorative emojis */}
        <div className="absolute text-6xl opacity-20 top-5 left-5 animate-bounce">🎄</div>
        <div className="absolute text-6xl opacity-20 top-10 right-10 animate-bounce delay-200">🎁</div>
        <div className="absolute text-6xl opacity-20 bottom-10 left-10 animate-bounce delay-500">🎄</div>
        <div className="absolute text-6xl opacity-20 bottom-10 right-10 animate-bounce delay-700">🎁</div>

        <div className="text-center relative z-10">
          <div className="inline-block bg-white text-red-600 px-6 py-2 rounded-full font-bold text-sm mb-6 shadow-lg">
            🎉 Limited Time Offer
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
            Christmas & New Year Sale
          </h1>

          <div className="bg-white bg-opacity-95 rounded-2xl p-6 md:p-8 max-w-2xl mx-auto mb-6 shadow-2xl">
            <div className="text-5xl md:text-7xl font-bold text-red-600 mb-3">
              ₹50 OFF
            </div>
            <div className="text-xl md:text-2xl text-green-800 font-semibold mb-2">
              On Your First WhatsApp Order
            </div>
            <p className="text-gray-600 italic text-sm mb-4">
              Valid for all customers
            </p>

            <div className="flex justify-center gap-6 text-sm md:text-base">
              <span className="flex items-center gap-2 text-green-800 font-semibold">
                🌿 100% Natural
              </span>
              <span className="flex items-center gap-2 text-green-800 font-semibold">
                👨‍🌾 Farmer Owned
              </span>
              <span className="flex items-center gap-2 text-green-800 font-semibold">
                📦 Freshly Packed
              </span>
            </div>
          </div>

          <div className="bg-white bg-opacity-90 rounded-xl p-4 max-w-xl mx-auto mb-6 shadow-lg">
            <p className="text-yellow-800 font-semibold mb-3">⏰ Offer Ends In</p>
            <div className="flex justify-center gap-3">
              {Object.entries(timeLeft).map(([label, value]) => (
                <div key={label} className="text-center">
                  <div className="bg-red-600 text-white text-xl font-bold rounded-lg p-3 min-w-[60px]">
                    {value}
                  </div>
                  <div className="text-xs text-gray-700 mt-1 font-medium capitalize">
                    {label}
                  </div>
                </div>
              ))}
            </div>
            <p className="text-red-600 font-bold mt-3">
              Valid till 3rd January 2026
            </p>
          </div>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center gap-3
              bg-green-500 hover:bg-green-600
              text-white px-8 py-4
              rounded-full text-lg font-bold
              transition-all duration-300
              shadow-lg hover:-translate-y-1
            "
          >
            🟢 Order on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <section
      id="home"
      className="min-h-screen relative pt-16 bg-red-700"
    >
      <div
        className="absolute inset-0 z-0"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              idx === current ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {slide.type === 'image' ? (
              <>
                <img
                  src={slide.content}
                  alt={`Slide ${idx}`}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div
                  className="
                    absolute inset-0
                    bg-black/10
                    bg-gradient-to-b
                    from-[rgba(9,64,36,0.18)]
                    via-[rgba(0,0,0,0.06)]
                    to-[rgba(243,248,244,0.25)]
                  "
                />
              </>
            ) : (
              <SaleSlide />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

