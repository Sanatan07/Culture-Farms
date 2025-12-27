import React, { useState, useEffect } from 'react';

const CultureFarmsSale = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const endDate = new Date('2025-01-03T23:59:59');
      const now = new Date();
      const difference = endDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const whatsappLink = "https://api.whatsapp.com/send/?phone=919021618182&text=I+want+to+buy+this+product.&type=phone_number&app_absent=0";

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 to-green-700 flex items-center justify-center p-4 md:p-8">
      <div className="max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl">
        {/* Header Section */}
        <div className="relative bg-gradient-to-br from-red-600 to-yellow-600 p-8 md:p-12 text-center overflow-hidden">
          <div className="absolute text-8xl opacity-10 top-0 left-4 animate-bounce">🎄</div>
          <div className="absolute text-8xl opacity-10 bottom-0 right-4 animate-bounce" style={{animationDelay: '1.5s'}}>🎁</div>
          
          <div className="relative z-10">
            <div className="inline-block bg-white text-red-600 px-6 py-2 rounded-full font-bold text-sm uppercase tracking-wide mb-4 shadow-lg">
              🎉 Limited Time Offer
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-3 drop-shadow-lg">
              Christmas & New Year Sale
            </h1>
            <p className="text-xl text-red-50 font-light">
              Celebrate with Fresh, Natural Products
            </p>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6 md:p-12">
          {/* Offer Box */}
          <div className="bg-gradient-to-br from-yellow-50 to-red-50 border-4 border-dashed border-red-600 rounded-2xl p-8 text-center mb-10 relative">
            <div className="text-6xl md:text-7xl font-bold text-red-600 leading-none mb-3">
              ₹50 OFF
            </div>
            <div className="text-xl md:text-2xl text-green-800 font-semibold mb-2">
              On Your First WhatsApp Order
            </div>
            <p className="text-gray-600 italic text-sm">
              Valid for all customers
            </p>
          </div>

          {/* Countdown Timer */}
          <div className="bg-yellow-50 border-l-4 border-yellow-600 rounded-lg p-6 mb-10">
            <div className="text-center mb-4">
              <p className="text-yellow-800 font-semibold text-lg mb-2">⏰ Offer Ends In</p>
            </div>
            <div className="flex justify-center gap-4">
              <div className="text-center">
                <div className="bg-red-600 text-white text-2xl md:text-3xl font-bold rounded-lg p-3 md:p-4 min-w-[70px]">
                  {timeLeft.days}
                </div>
                <div className="text-xs md:text-sm text-gray-600 mt-2 font-medium">Days</div>
              </div>
              <div className="text-center">
                <div className="bg-red-600 text-white text-2xl md:text-3xl font-bold rounded-lg p-3 md:p-4 min-w-[70px]">
                  {timeLeft.hours}
                </div>
                <div className="text-xs md:text-sm text-gray-600 mt-2 font-medium">Hours</div>
              </div>
              <div className="text-center">
                <div className="bg-red-600 text-white text-2xl md:text-3xl font-bold rounded-lg p-3 md:p-4 min-w-[70px]">
                  {timeLeft.minutes}
                </div>
                <div className="text-xs md:text-sm text-gray-600 mt-2 font-medium">Minutes</div>
              </div>
              <div className="text-center">
                <div className="bg-red-600 text-white text-2xl md:text-3xl font-bold rounded-lg p-3 md:p-4 min-w-[70px]">
                  {timeLeft.seconds}
                </div>
                <div className="text-xs md:text-sm text-gray-600 mt-2 font-medium">Seconds</div>
              </div>
            </div>
            <div className="text-center mt-4">
              <p className="text-red-600 font-bold text-lg">Valid till 3rd January 2025</p>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="text-center p-6">
              <div className="text-5xl mb-3">🌿</div>
              <h3 className="font-bold text-green-800 text-lg mb-2">100% Natural</h3>
              <p className="text-gray-600 text-sm">No artificial additives or preservatives</p>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl mb-3">👨‍🌾</div>
              <h3 className="font-bold text-green-800 text-lg mb-2">Farmer Owned Brand</h3>
              <p className="text-gray-600 text-sm">Supporting local farming communities</p>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl mb-3">📦</div>
              <h3 className="font-bold text-green-800 text-lg mb-2">Freshly Packed</h3>
              <p className="text-gray-600 text-sm">Farm-to-table freshness guaranteed</p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gray-50 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-semibold text-green-800 mb-6">
              Ready to Order?
            </h3>
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Open WhatsApp Catalogue
            </a>
            <p className="text-gray-500 text-sm mt-4">
              Send us your order and get instant ₹50 discount
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-200 p-6 text-center">
          <div className="font-bold text-green-800 text-lg mb-1">CULTURE FARMS</div>
          <p className="text-gray-600 text-sm">Farm Fresh. Naturally Yours.</p>
        </div>
      </div>
    </div>
  );
};

export default CultureFarmsSale;