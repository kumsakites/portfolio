import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';
import { AnimatePresence } from './components/ui/AnimatePresence';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (remove in production)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-gradient-to-r from-blue-600 to-indigo-700 flex items-center justify-center">
        <div className="text-white text-4xl font-bold">
          <div className="flex items-center space-x-2">
            <span className="animate-pulse">K</span>
            <span className="animate-pulse delay-75">B</span>
            <span className="w-2 h-8 bg-white animate-blink"></span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <Header />
        <main>
          <AnimatePresence>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Testimonials />
            <Contact />
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;