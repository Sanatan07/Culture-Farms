import React from 'react';
import logo from '../../public/assets/logo.png';

export default function Footer() {
  return (
    <footer className="bg-white py-12 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          {/* Left Side - Logo */}
          <div className="flex-shrink-0">
            <img 
              src={logo}
              alt="Culture Farms Logo" 
              style={{ height: '150px', width: 'auto' }}
            />
          </div>

          {/* Right Side - Content */}
          <div className="flex-1 md:text-right">
            <h3 className="text-2xl mt-6 italic font-semibold text-[var(--cf-mid-green)]">
            Rooted in soil, Grown with purpose
          </h3>
            
            <div className="flex flex-col md:flex-row md:justify-end items-start md:items-center gap-4 mb-4">
              <div className="relative">
                <span aria-hidden="true" className="absolute inset-0 flex items-center justify-center text-[rgba(0,0,0,0.0)] text-xs select-none pointer-events-none">
                  culturefarmsindia@gmail.com
                </span>
                <a 
                  href="mailto:culturefarmsindia@gmail.com" 
                  className="relative text-gray-800 hover:text-green-700 underline z-10 transition-colors"
                >
                  📧 Contact us
                </a>
              </div>

              <a 
                href="https://instagram.com/culturefarmsindia" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-800 hover:text-green-700 underline transition-colors"
              >
                📷 Culture farms
              </a>
            </div>

            <p className="text-gray-600 text-sm">
              © {new Date().getFullYear()} Culture Farms. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}