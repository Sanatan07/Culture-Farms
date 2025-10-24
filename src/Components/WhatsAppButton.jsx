// import React from 'react';

// export default function WhatsAppButton() {
//   const phone = '919175027496';
//   const text = encodeURIComponent('I want to buy this product.');
//   const href = `https://wa.me/${phone}?text=${text}`;

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   return (
//     <div className="fixed right-5 bottom-5 z-50 flex flex-col items-center gap-3">
//       {/* Up / Scroll-to-top button (above WhatsApp button) */}
//       <button
//         onClick={scrollToTop}
//         aria-label="Scroll to top"
//         title="Back to top"
//         className="bg-white/95 hover:bg-white rounded-full w-10 h-10 flex items-center justify-center text-[var(--cf-dark-green)] shadow-md"
//       >
//         <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
//           <path fillRule="evenodd" d="M3.707 10.707a1 1 0 01-1.414-1.414l7-7a1 1 0 011.414 0l7 7a1 1 0 01-1.414 1.414L11 5.414V18a1 1 0 11-2 0V5.414L3.707 10.707z" clipRule="evenodd" />
//         </svg>
//       </button>

//       {/* WhatsApp floating button */}
//       <a
//         href={href}
//         target="_blank"
//         rel="noopener noreferrer"
//         aria-label="Chat with Culture Farms on WhatsApp"
//         className="block"
//       >
//         <div className="bg-[var(--cf-mid-green)] hover:bg-[var(--cf-dark-green)] text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg">
//           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-7 h-7" fill="currentColor" aria-hidden="true">
//             <path d="M20.52 3.48A11.95 11.95 0 0 0 12.01.5C6.11.5 1.17 5.44 1.17 11.34c0 1.99.52 3.92 1.51 5.65L.5 23.5l6.76-2.18a11.77 11.77 0 0 0 4.76.98c5.9 0 10.84-4.94 10.84-10.84 0-3.03-1.18-5.86-3.35-7.98zM12 20.5c-1.3 0-2.56-.27-3.73-.8l-.27-.14-4.02 1.3 1.37-3.89-.18-.31A8.45 8.45 0 0 1 3.5 11.34c0-4.69 3.82-8.51 8.51-8.51 4.69 0 8.51 3.82 8.51 8.51 0 4.69-3.82 8.51-8.5 8.51z"/>
//             <path d="M17.03 14.27c-.28-.14-1.66-.82-1.92-.91-.26-.09-.45-.14-.64.14-.18.27-.7.91-.86 1.09-.16.18-.32.2-.6.07-.28-.13-1.18-.43-2.25-1.38-.83-.73-1.39-1.63-1.55-1.91-.16-.27-.02-.42.12-.56.12-.12.28-.32.42-.48.14-.16.18-.27.28-.45.09-.18.05-.33-.02-.47-.07-.14-.64-1.55-.88-2.12-.23-.56-.47-.49-.64-.5-.17-.01-.36-.01-.55-.01-.18 0-.47.07-.72.33-.25.26-.96.94-.96 2.3 0 1.36.98 2.67 1.12 2.85.14.18 1.93 2.94 4.68 4.01 1.97.78 2.74.84 3.72.71.6-.08 1.66-.68 1.9-1.33.23-.65.23-1.21.16-1.33-.07-.13-.26-.18-.54-.32z"/>
//           </svg>
//         </div>
//       </a>
//     </div>
//   );
// }



import React from 'react';

export default function WhatsAppButton() {
  const phone = '919175027496';
  const text = encodeURIComponent('I want to buy this product.');
  const href = `https://wa.me/${phone}?text=${text}`;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed right-5 bottom-5 z-50 flex flex-col items-end gap-3">
      {/* Up / Scroll-to-top button (above WhatsApp button) */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        title="Back to top"
        className="bg-white/95 hover:bg-white rounded-full w-10 h-10 flex items-center justify-center text-[var(--cf-dark-green)] shadow-md"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fillRule="evenodd" d="M3.707 10.707a1 1 0 01-1.414-1.414l7-7a1 1 0 011.414 0l7 7a1 1 0 01-1.414 1.414L11 5.414V18a1 1 0 11-2 0V5.414L3.707 10.707z" clipRule="evenodd" />
        </svg>
      </button>

      {/* WhatsApp button with label */}
      <div className="flex items-center gap-2">
        {/* Label with arrow */}
        <div className="bg-white/95 px-3 py-2 rounded-lg shadow-md flex items-center gap-2">
          <span className="text-[var(--cf-dark-green)] font-medium text-sm whitespace-nowrap">
            Order from here
          </span>
          <span className="text-[var(--cf-dark-green)]">→</span>
        </div>

        {/* WhatsApp floating button */}
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with Culture Farms on WhatsApp"
          className="block"
        >
          <div className="bg-[var(--cf-mid-green)] hover:bg-[var(--cf-dark-green)] text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-7 h-7" fill="currentColor" aria-hidden="true">
              <path d="M20.52 3.48A11.95 11.95 0 0 0 12.01.5C6.11.5 1.17 5.44 1.17 11.34c0 1.99.52 3.92 1.51 5.65L.5 23.5l6.76-2.18a11.77 11.77 0 0 0 4.76.98c5.9 0 10.84-4.94 10.84-10.84 0-3.03-1.18-5.86-3.35-7.98zM12 20.5c-1.3 0-2.56-.27-3.73-.8l-.27-.14-4.02 1.3 1.37-3.89-.18-.31A8.45 8.45 0 0 1 3.5 11.34c0-4.69 3.82-8.51 8.51-8.51 4.69 0 8.51 3.82 8.51 8.51 0 4.69-3.82 8.51-8.5 8.51z"/>
              <path d="M17.03 14.27c-.28-.14-1.66-.82-1.92-.91-.26-.09-.45-.14-.64.14-.18.27-.7.91-.86 1.09-.16.18-.32.2-.6.07-.28-.13-1.18-.43-2.25-1.38-.83-.73-1.39-1.63-1.55-1.91-.16-.27-.02-.42.12-.56.12-.12.28-.32.42-.48.14-.16.18-.27.28-.45.09-.18.05-.33-.02-.47-.07-.14-.64-1.55-.88-2.12-.23-.56-.47-.49-.64-.5-.17-.01-.36-.01-.55-.01-.18 0-.47.07-.72.33-.25.26-.96.94-.96 2.3 0 1.36.98 2.67 1.12 2.85.14.18 1.93 2.94 4.68 4.01 1.97.78 2.74.84 3.72.71.6-.08 1.66-.68 1.9-1.33.23-.65.23-1.21.16-1.33-.07-.13-.26-.18-.54-.32z"/>
            </svg>
          </div>
        </a>
      </div>
    </div>
  );
}