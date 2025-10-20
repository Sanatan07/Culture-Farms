export default function Footer() {
  return (
    <footer className="bg-[var(--cf-dark-green)] text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center">
          <p className="text-xl mb-2 font-semibold">Culture Farms</p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-4">
            <div className="relative">
              <span aria-hidden="true" className="absolute inset-0 flex items-center justify-center text-[rgba(255,255,255,0.06)] text-xs select-none pointer-events-none">
                culturefarmsindia@gmail.com
              </span>
              <a href="mailto:culturefarmsindia@gmail.com" className="relative text-white hover:text-[var(--cf-light-green)] underline z-10">Contact us</a>
            </div>

            <a href="https://instagram.com/culturefarmsindia" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[var(--cf-light-green)] underline">
              Culture farms
            </a>
          </div>

          <p className="text-[rgba(255,255,255,0.85)] text-sm">© {new Date().getFullYear()} Culture Farms. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}