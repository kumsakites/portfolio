import { useRef, useEffect, useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoLink: string;
  githubLink?: string;
  features: string[];
}

const projects: Project[] = [
  {
    title: "HU-IAPMS",
    description: "Haramaya University Internal Academic Position Management System - A digital platform for managing academic positions.",
    image: "https://images.pexels.com/photos/7375/startup-photos.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    technologies: ["React.js", "Node.js", "MongoDB", "Vercel"],
    demoLink: "#",
    githubLink: "https://github.com/kumsakites/hu-iapms",
    features: [
      "Role-based access control (admin/faculty)",
      "Dynamic form submissions and status tracking",
      "Automated notifications and reporting",
      "Real-time data processing"
    ]
  }
];

export function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  
  useEffect(() => {
    if (projects.length > 0) {
      setActiveProject(projects[0]);
    }
    
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
      id="projects" 
      ref={sectionRef}
      className="py-20 opacity-0 transition-opacity duration-1000"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Projects</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Showcasing my expertise in developing robust, user-friendly applications.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/2">
            <div className="relative group overflow-hidden rounded-xl shadow-xl">
              {activeProject && (
                <>
                  <img 
                    src={activeProject.image} 
                    alt={activeProject.title} 
                    className="w-full h-[400px] object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-80"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">{activeProject.title}</h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {activeProject.technologies.map((tech) => (
                        <span 
                          key={tech} 
                          className="px-3 py-1 text-xs font-medium bg-blue-600/80 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex space-x-4">
                      <a 
                        href={activeProject.demoLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center space-x-1 text-sm text-white hover:text-blue-300 transition-colors"
                      >
                        <ExternalLink size={16} />
                        <span>Live Demo</span>
                      </a>
                      {activeProject.githubLink && (
                        <a 
                          href={activeProject.githubLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center space-x-1 text-sm text-white hover:text-blue-300 transition-colors"
                        >
                          <Github size={16} />
                          <span>Source Code</span>
                        </a>
                      )}
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
          
          <div className="lg:w-1/2">
            {activeProject && (
              <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg h-full flex flex-col">
                <h3 className="text-2xl font-bold mb-4">{activeProject.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6 flex-grow">
                  {activeProject.description}
                </p>
                
                <div>
                  <h4 className="text-lg font-semibold mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {activeProject.features.map((feature) => (
                      <li 
                        key={feature} 
                        className="flex items-start"
                      >
                        <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-1.5 mr-2"></span>
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-8 flex space-x-4">
                  <a 
                    href={activeProject.demoLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
                  >
                    View Live Demo
                  </a>
                  {activeProject.githubLink && (
                    <a 
                      href={activeProject.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="px-6 py-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 font-medium rounded-lg transition-colors"
                    >
                      GitHub Repository
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            I'm working on adding more projects to my portfolio. In the meantime, you can check out my GitHub for more of my work.
          </p>
          <a 
            href="https://github.com/kumsakites" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-gray-800 dark:bg-gray-700 hover:bg-gray-900 dark:hover:bg-gray-600 text-white font-medium rounded-lg transition-colors"
          >
            <Github size={20} className="mr-2" />
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}