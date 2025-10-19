export default function About() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center bg-white py-20">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-12 text-center">
          About Us
        </h2>
        <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
          <p className="text-center md:text-left">
            At Culture Farms, we are dedicated to bringing you the finest natural and organic products, 
            grown with care and respect for the environment. Our commitment to sustainable farming 
            practices ensures that every product we offer is not only good for you but also good for the planet.
          </p>
          <p className="text-center md:text-left">
            We specialize in premium quality organic products including our signature Moringa Powder, 
            traditional Unpolished Indrayani Rice, and nutrient-rich Organic Soyabean. Each product is 
            carefully cultivated and processed to maintain its natural goodness and nutritional value.
          </p>
          <p className="text-center md:text-left">
            Our mission is to promote healthy living through access to pure, unadulterated organic products 
            that support your wellness journey while supporting local farming communities.
          </p>
        </div>
      </div>
    </section>
  );
}