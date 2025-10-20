export default function ProductBenefits() {
  return (
    <section id="benefits" className="py-10 bg-muted">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--cf-dark-green)] mb-8 text-center">
          Product Benefits
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {/* Moringa */}
          <article className="card-cf p-6 rounded-2xl">
            <h3 className="text-2xl font-semibold text-[var(--cf-mid-green)] mb-3">
              MORINGA POWDER — THE NATURAL MULTIVITAMIN FROM OUR FARMS
            </h3>
            <p className="text-[var(--cf-dark-green)] mb-3">
              Overview: Our Moringa Powder is made from hand-harvested leaves grown in the rich soil of the Sahyadri Mountains. Every leaf is naturally dried and finely powdered to retain its full nutritional profile — ensuring you get the most potent and pure form of this ancient superfood.
            </p>

            <ul className="list-disc pl-5 space-y-2 text-[var(--cf-dark-green)]">
              <li>Strengthens immunity and boosts natural energy</li>
              <li>Supports bone health and muscle strength with plant-based protein and calcium</li>
              <li>Enhances focus and reduces tiredness</li>
              <li>Promotes glowing skin and nourished hair</li>
              <li>Helps balance hormones and improve metabolism</li>
              <li>Ideal for daily wellness, especially for vegetarians and athletes</li>
            </ul>
          </article>

          {/* Beetroot */}
          <article className="card-cf p-6 rounded-2xl">
            <h3 className="text-2xl font-semibold text-[var(--cf-mid-green)] mb-3">
              BEETROOT POWDER — THE NATURAL ENERGY & ENDURANCE BOOSTER
            </h3>
            <p className="text-[var(--cf-dark-green)] mb-3">
              Overview: Culture Farms’ Beetroot Powder is made from naturally grown, chemical-free beets — carefully processed to preserve their natural sweetness, color, and nutrition. Perfect for smoothies, detox drinks, or as a natural colorant in food.
            </p>

            <ul className="list-disc pl-5 space-y-2 text-[var(--cf-dark-green)]">
              <li>Promotes healthy blood circulation and stamina</li>
              <li>Supports heart health and helps maintain normal blood pressure</li>
              <li>Enhances post-workout recovery and physical performance</li>
              <li>Helps purify blood and improve skin glow from within</li>
              <li>Aids in natural detoxification and liver function</li>
              <li>Perfect for those looking to stay active, vibrant, and energized</li>
            </ul>
          </article>

          {/* Jamun & Karela */}
          <article className="card-cf p-6 rounded-2xl">
            <h3 className="text-2xl font-semibold text-[var(--cf-mid-green)] mb-3">
              JAMUN SEEDS & KARELA POWDER (MIX) — THE DIABETIC WELLNESS BLEND
            </h3>
            <p className="text-[var(--cf-dark-green)] mb-3">
              Overview: A thoughtfully balanced mix of Jamun Seeds and Bitter Gourd (Karela) — crafted to support blood sugar management and digestive health. Every batch is slow-dried and stone-milled to preserve the natural potency of these powerful Ayurvedic ingredients.
            </p>

            <ul className="list-disc pl-5 space-y-2 text-[var(--cf-dark-green)]">
              <li>Helps regulate blood sugar levels naturally</li>
              <li>Supports insulin function and pancreas health</li>
              <li>Promotes better digestion and gut cleansing</li>
              <li>Helps reduce sugar cravings and improves metabolism</li>
              <li>Beneficial for managing weight and energy levels</li>
              <li>Recommended for holistic blood sugar and digestive care</li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}