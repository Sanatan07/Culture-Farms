import { Leaf } from 'lucide-react';

export default function Shop() {
  const products = [
    {
      name: 'Moringa Powder',
      description: 'Premium organic moringa powder, rich in nutrients and available all year round.',
      availability: 'Available Year-Round',
      bgColor: 'bg-green-100',
      iconColor: 'text-green-600',
      badgeColor: 'bg-green-600'
    },
    {
      name: 'Amla Powder',
      description: 'Rich in vitamin C and antioxidants — premium organic amla powder, great for immunity and daily use.',
      availability: 'Available Year-Round',
      bgColor: 'bg-emerald-100',
      iconColor: 'text-emerald-600',
      badgeColor: 'bg-emerald-600'
    },
    {
      name: 'Beetroot Powder',
      description: 'Nutrient-dense beetroot powder, perfect for smoothies and natural coloring, available year-round.',
      availability: 'Available Year-Round',
      bgColor: 'bg-rose-100',
      iconColor: 'text-rose-600',
      badgeColor: 'bg-rose-600'
    },
    {
      name: 'Unpolished Indrayani Rice',
      description: 'Traditional unpolished rice with natural nutrients intact, grown seasonally.',
      availability: 'Seasonal Product',
      bgColor: 'bg-amber-100',
      iconColor: 'text-amber-600',
      badgeColor: 'bg-orange-600'
    },
    {
      name: 'Organic Soyabean',
      description: 'Protein-rich organic soyabeans, naturally grown and harvested seasonally.',
      availability: 'Seasonal Product',
      bgColor: 'bg-yellow-100',
      iconColor: 'text-yellow-600',
      badgeColor: 'bg-orange-600'
    }
  ];

  return (
    <section id="shop" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-emerald-50 py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-4 text-center">
          Shop With Us
        </h2>
        <p className="text-gray-600 text-center mb-12 text-lg">
          Discover our range of natural and organic products
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className={`w-14 h-14 rounded-lg flex items-center justify-center mb-6 ${product.bgColor}`}>
                <Leaf className={`w-7 h-7 ${product.iconColor}`} />
              </div>

              <h3 className="text-2xl font-bold text-green-800 mb-3">{product.name}</h3>

              <p className="text-gray-600 mb-4 leading-relaxed">
                {product.description}
              </p>

              <span
                className={`inline-block text-white px-4 py-2 rounded-full text-sm font-medium ${product.badgeColor}`}
              >
                {product.availability}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}