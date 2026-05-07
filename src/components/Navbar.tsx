import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-slate-950/20 backdrop-blur-sm border-b">
      <div className="max-w-9xl px-1 sm:px-2 lg:px-3 flex justify-between items-center mx-auto">
        <div className="flex items-center space-x-1 group cursor-pointer h-16 sm:h-16 md:h-20">
          <div>
            <img
              src="/Icon.jpeg"
              alt="codeFlow"
              className="h-6 w-6 sm:h-8 sm:w-8"
            />
          </div>
          <span className="font-medium text-lg sm:text-xl md:text-2xl">
            <span className="text-white">Code</span>
            <span className="text-blue-400">Flow</span>
          </span>
        </div>

        <div className="hidden md:flex items-center space-x-6 sm:space-x-8">
          <a
            href="#features"
            className="text-gray-300 hover:text-white text-sm sm:text-lg"
          >
            Features
          </a>
          <a
            href="#pricing"
            className="text-gray-300 hover:text-white text-sm sm:text-lg"
          >
            Pricing
          </a>
          <a
            href="#testimonials"
            className="text-gray-300 hover:text-white text-sm sm:text-lg"
          >
            Testimonials
          </a>
        </div>

        <div>
          <button
            className="md:hidden p-2 text-gray-300 hover:text-white"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            {isMenuOpen ? (
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            ) : (
              <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
            )}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-slate-900/95 blackdrop-blur-lg border-t border-slate-800 slide-in-from-top animate-in">
          <div className="px-4 py-4 sm:py-6 space-y-3 sm:space-y-4">
            <a
              href="#features"
              className="block text-gray-300 hover:text-white text-sm sm:text-lg"
              onClick={() => setIsMenuOpen((prev) => !prev)}
            >
              Features
            </a>
            <a
              href="#pricing"
              className="block text-gray-300 hover:text-white text-sm sm:text-lg"
              onClick={() => setIsMenuOpen((prev) => !prev)}
            >
              Pricing
            </a>
            <a
              href="#testimonials"
              className="block text-gray-300 hover:text-white text-sm sm:text-lg"
              onClick={() => setIsMenuOpen((prev) => !prev)}
            >
              Testimonials
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
