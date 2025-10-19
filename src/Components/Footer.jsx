export default function Footer() {
  return (
    <footer className="bg-green-800 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center">
          <p className="text-xl mb-2 font-semibold">Culture Farms</p>
          <p className="text-green-200 mb-4">Natural & Organic Products</p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-4">
            <div className="relative">

              {/* visible link */}
              <a
                href="mailto:culturefarmsindia@gmail.com"
                className="relative text-white hover:text-yellow-300 underline z-10"
                aria-label="Email Culture Farms"
              >
                Contact us
              </a>
            </div>

            <a
              href="https://instagram.com/culturefarmsindia"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-yellow-300 underline"
              aria-label="Open Culture Farms Instagram"
            >
              Culture farms
            </a>
          </div>

          <p className="text-green-300 text-sm">© 2025 Culture Farms. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}