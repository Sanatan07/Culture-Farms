import { Leaf } from 'lucide-react';
import moringa1 from '../../public/assets/moringa1.jpg';
import moringa2 from '../../public/assets/moringa2.jpg';
import beetroot1 from '../../public/assets/beetroot1.jpg';
import beetroot2 from '../../public/assets/beetroot2.jpg';
import jamun1 from '../../public/assets/jamun1.jpg';
import jamun2 from '../../public/assets/jamun2.jpg';

export default function Shop() {
  const products = [
    {
      name: 'Moringa Powder',
      description: 'Premium natural moringa powder, rich in nutrients and available all year round.',
      availability: 'Available Year-Round',
      image1: moringa1,
      image2: moringa2
    },
    {
      name: 'Jamun & Karela Powder',
      description: 'A blended powder of jamun and karela—supports detox and healthy blood sugar levels. Convenient year-round powder.',
      availability: 'Available Year-Round',
      image1: jamun1,
      image2: jamun2
    },
    {
      name: 'Beetroot Powder',
      description: 'Nutrient-dense beetroot powder, perfect for smoothies and natural coloring, available year-round.',
      availability: 'Available Year-Round',
      image1: beetroot1,
      image2: beetroot2
    },
    {
      name: 'Amla Powder',
      description: 'Rich in vitamin C and antioxidants — premium natural amla powder, great for immunity and daily use.',
      availability: 'Coming Soon'
    },
    {
      name: 'Indrayani Rice',
      description: 'Traditional unpolished rice with natural nutrients intact, grown seasonally.',
      availability: 'Coming Soon'
    },
    {
      name: 'Natural Soyabean',
      description: 'Protein-rich natural soyabeans, naturally grown and harvested seasonally.',
      availability: 'Coming Soon'
    }
  ];

  return (
    <section id="shop" className="py-10 bg-muted">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-cf-dark text-center mb-4">Shop With Us</h2>
        <p className="text-cf-mid text-center mb-12">Discover our range of natural agricultural products</p>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => {
            const badgeClass =
              product.availability === 'Available Year-Round'
                ? 'badge-year'
                : product.availability === 'Coming Soon'
                ? 'bg-gray-300 text-gray-800'
                : 'badge-season';

            return (
              <div key={index} className="card-cf rounded-2xl p-6 hover:shadow-xl transition-all">
                {product.image1 ? (
                  <div className="relative w-full h-48 rounded-xl mb-6 overflow-hidden bg-white group">
                    <img
                      src={product.image1}
                      alt={`${product.name} 1`}
                      className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                    />
                    <img
                      src={product.image2}
                      alt={`${product.name} 2`}
                      className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    />
                  </div>
                ) : (
                  <div className={`w-14 h-14 rounded-lg flex items-center justify-center mb-6`} style={{background: 'linear-gradient(135deg,var(--cf-mid-green),var(--cf-light-green))'}}>
                    <Leaf className="w-7 h-7 text-white" />
                  </div>
                )}

                <h3 className="text-2xl font-bold text-cf-dark mb-3">{product.name}</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">{product.description}</p>

                <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium ${badgeClass}`}>
                  {product.availability}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}