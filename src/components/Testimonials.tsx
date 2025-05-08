import { useRef, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  name: string;
  position: string;
  company: string;
  image: string;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Elias Bekele Wirtu",
    position: "Software Developer",
    company: "Commercial Bank of Ethiopia",
    image: "https://avatars.githubusercontent.com/u/106310513?v=4",
    text: "Kumsa's attention to detail in API design ensured seamless integration with our legacy systems. His ability to anticipate edge cases saved us countless hours of debugging and rework."
  },
  {
    name: "Leul Solomon Aseffa",
    position: "Mobile App Developer | ui/ux designer",
    company: "Ethio_click",
    image: "https://avatars.githubusercontent.com/u/100445440?v=4",
    text: "Kumsa's attention to detail in API design ensured seamless integration with our legacy systems. His ability to anticipate edge cases saved us countless hours of debugging and rework."
  },
  {
    name: "Kaytros Gecho Arks",
    position: "Senior Full-Stack developer",
    company: "ETHIO_CLICK",
    image: "https://avatars.githubusercontent.com/u/106536610?v=4",
    text: "Kumsa's attention to detail in API design ensured seamless integration with our legacy systems. His ability to anticipate edge cases saved us countless hours of debugging and rework."
  },
  
  {
    name: "Usmael Adurahaman Ahamad",
    position: "Senior Full-Stack Developer",
    company: "INSA",
    image: "https://avatars.githubusercontent.com/u/95717548?v=4",
    text: "His React components are reusable and well-documented—a rare find in junior developers. Kumsa consistently delivers clean, maintainable code that follows best practices."
  }, 
  {
    name: "Fufa Wakgari Birhanu",
    position: "Senior Full-Stack Developer and Software Engineering Lecturer at Haramaya University",
    company: "Haramaya University Lecturer",
    image: "https://avatars.githubusercontent.com/u/119033939?v=4",
    text: "His React components are reusable and well-documented—a rare find in junior developers. Kumsa consistently delivers clean, maintainable code that follows best practices."
  }
  
];

export function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const goToNext = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };
  
  const goToPrev = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };
  
  useEffect(() => {
    const sectionNode = sectionRef.current; // Capture the reference
  
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in");
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );
  
    if (sectionNode) {
      observer.observe(sectionNode);
    }
  
    const interval = setInterval(() => {
      goToNext();
    }, 8000);
  
    return () => {
      if (sectionNode) {
        observer.unobserve(sectionNode); // Use captured reference
      }
      clearInterval(interval);
    };
  }, );
  

  return (
    <section 
      id="testimonials" 
      ref={sectionRef}
      className="py-20 bg-gray-100 dark:bg-gray-800 opacity-0 transition-opacity duration-1000"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Testimonials</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            What industry professionals are saying about my work.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className={`flex transition-transform duration-500 ease-in-out ${isAnimating ? 'opacity-50' : 'opacity-100'}`}
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 md:p-10 relative">
                    <div className="absolute top-8 left-8 text-blue-500 opacity-30">
                      <Quote size={48} />
                    </div>
                    
                    <div className="relative z-10">
                      <p className="text-gray-700 dark:text-gray-300 text-lg md:text-xl italic mb-8 relative z-10">
                        "{testimonial.text}"
                      </p>
                      
                      <div className="flex items-center">
                        <div className="flex-shrink-0 mr-4">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name} 
                            className="w-16 h-16 rounded-full object-cover border-2 border-blue-500"
                          />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{testimonial.name}</h4>
                          <p className="text-gray-600 dark:text-gray-400">{testimonial.position}, {testimonial.company}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {testimonials.length > 1 && (
            <>
              <button 
                onClick={goToPrev}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 md:-translate-x-6 bg-white dark:bg-gray-700 p-3 rounded-full shadow-lg text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors focus:outline-none"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} />
              </button>
              
              <button 
                onClick={goToNext}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 md:translate-x-6 bg-white dark:bg-gray-700 p-3 rounded-full shadow-lg text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors focus:outline-none"
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} />
              </button>
            </>
          )}
          
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (!isAnimating) {
                    setIsAnimating(true);
                    setCurrentIndex(index);
                    setTimeout(() => setIsAnimating(false), 500);
                  }
                }}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentIndex ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-600'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}