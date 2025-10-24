export default function About() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center bg-muted py-[10px]">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-[var(--cf-dark-green)] mb-8 text-center">
          About Culture Farms
        </h2>

        <div className="space-y-6 text-lg text-[var(--cf-dark-green)] leading-relaxed">
          <p className="font-semibold">
            <em>At Culture Farms</em>, we believe that true wellness begins in the soil.
          </p>

          <p>
            Every packet you open carries the effort of Indian farmers who cultivate with love, not chemicals.
            We work directly with local growers from the Sahyadri region, ensuring fair prices, sustainable
            practices, and pure quality from seed to shelf.
          </p>

          <p>
            When you choose Culture Farms, you don’t just buy a health product — you support a movement that
            empowers farmers, revives traditional agriculture, and brings India’s natural goodness to every home.
          </p>

          <p className="mt-6 italic font-semibold text-[var(--cf-mid-green)]">
            From our farms to your kitchen — we grow wellness, together.
          </p>
        </div>
      </div>
    </section>
  );
}