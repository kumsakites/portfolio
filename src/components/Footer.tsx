import { ArrowUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold tracking-tight bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
                KKB
              </span>
              <span className="font-medium">Kumsa Kitessa</span>
            </div>
            <p className="mt-2 text-gray-400 text-sm">
              Flutter & Full-Stack Developer
            </p>
          </div>
          
          <div className="mb-6 md:mb-0">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Kumsa Kitessa. All rights reserved.
            </p>
          </div>
          
          <button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-blue-600 hover:bg-blue-700 transition-colors duration-300"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
}