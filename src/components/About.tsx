import { useRef, useEffect } from 'react';
import { Users, Code, Server, Smartphone } from 'lucide-react';

export function About() {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-20 opacity-0 transition-opacity duration-1000"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 relative">
              About Me
              <span className="absolute bottom-0 left-0 w-20 h-1 bg-blue-600 rounded-full"></span>
            </h2>
            
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              I'm a Flutter and Full-Stack Developer with over one year of experience, specializing in 
              cross-platform mobile applications and web development. My journey in software development 
              has been driven by a passion for creating elegant solutions to complex problems.
            </p>
            
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              I excel at building scalable systems with modern architectures, as demonstrated by my work 
              on the Haramaya University Internal Academic Position Management System (HU-IAPMS). This full-stack 
              solution streamlines academic position management with advanced features like user authentication, 
              real-time data processing, and automated reporting.
            </p>
            
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              My goal is to continue growing as a developer, exploring new technologies, and contributing 
              to meaningful projects that make a difference.
            </p>
          </div>
          
          <div className="md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
              <div className="p-3 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full inline-flex mb-4">
                <Code size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Frontend Development</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Creating responsive and intuitive user interfaces with React.js, Next.js, and TailwindCSS.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
              <div className="p-3 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 rounded-full inline-flex mb-4">
                <Server size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Backend Development</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Building robust API services with Node.js, Express.js, and MongoDB for efficient data management.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
              <div className="p-3 bg-teal-100 dark:bg-teal-900 text-teal-600 dark:text-teal-300 rounded-full inline-flex mb-4">
                <Smartphone size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Mobile Development</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Developing cross-platform mobile applications with Flutter and Dart, integrated with Firebase.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
              <div className="p-3 bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-300 rounded-full inline-flex mb-4">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Collaborative Approach</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Working effectively in teams using version control systems and modern development workflows.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}