export default function Home() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 pt-16"
    >
      <div className="text-center px-4 py-20">
        <h1 className="text-5xl md:text-7xl font-bold text-green-800 mb-6 animate-fade-in">
          Welcome to Culture Farms
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto">
          Natural & Organic Products for a Healthier Life
        </p>
        <button
          onClick={() => scrollToSection('shop')}
          className="bg-green-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-green-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
        >
          Explore Our Products
        </button>
      </div>
    </section>
  );
}