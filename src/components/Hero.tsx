// import { useEffect, useRef } from 'react';
// import { ArrowDown, Github, Linkedin } from 'lucide-react';

// export function Hero() {
//   const canvasRef = useRef<HTMLCanvasElement>(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     const ctx = canvas.getContext('2d');
//     if (!ctx) return;

//     // Set canvas dimensions
//     const setCanvasDimensions = () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//     };
//     setCanvasDimensions();
//     window.addEventListener('resize', setCanvasDimensions);

//     // Particle effects
//     const particles: Particle[] = [];
//     const particleCount = Math.min(window.innerWidth / 10, 100);

//     class Particle {
//       x: number;
//       y: number;
//       size: number;
//       speedX: number;
//       speedY: number;
//       color: string;

//       constructor() {
//         this.x = Math.random() * canvas.width;
//         this.y = Math.random() * canvas.height;
//         this.size = Math.random() * 3 + 1;
//         this.speedX = (Math.random() - 0.5) * 0.5;
//         this.speedY = (Math.random() - 0.5) * 0.5;
//         this.color = `rgba(59, 130, 246, ${Math.random() * 0.3 + 0.2})`;
//       }

//       update() {
//         this.x += this.speedX;
//         this.y += this.speedY;

//         if (this.x > canvas.width || this.x < 0) {
//           this.speedX = -this.speedX;
//         }
//         if (this.y > canvas.height || this.y < 0) {
//           this.speedY = -this.speedY;
//         }
//       }

//       draw() {
//         if (!ctx) return;
//         ctx.fillStyle = this.color;
//         ctx.beginPath();
//         ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
//         ctx.fill();
//       }
//     }

//     // Initialize particles
//     for (let i = 0; i < particleCount; i++) {
//       particles.push(new Particle());
//     }

//     // Animation loop
//     const animate = () => {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);

//       // Draw and update particles
//       particles.forEach(particle => {
//         particle.update();
//         particle.draw();
//       });

//       // Connect particles with lines when they're close
//       for (let i = 0; i < particles.length; i++) {
//         for (let j = i + 1; j < particles.length; j++) {
//           const dx = particles[i].x - particles[j].x;
//           const dy = particles[i].y - particles[j].y;
//           const distance = Math.sqrt(dx * dx + dy * dy);

//           if (distance < 100) {
//             ctx.beginPath();
//             ctx.strokeStyle = `rgba(59, 130, 246, ${0.1 * (1 - distance / 100)})`;
//             ctx.lineWidth = 0.5;
//             ctx.moveTo(particles[i].x, particles[i].y);
//             ctx.lineTo(particles[j].x, particles[j].y);
//             ctx.stroke();
//           }
//         }
//       }

//       requestAnimationFrame(animate);
//     };

//     animate();

//     return () => {
//       window.removeEventListener('resize', setCanvasDimensions);
//     };
//   }, []);

//   return (
//     <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
//       <canvas 
//         ref={canvasRef} 
//         className="absolute inset-0 z-0"
//         aria-hidden="true"
//       />
      
//       <div className="container mx-auto px-4 md:px-6 z-10 mt-10 text-center">
//         <div className="max-w-4xl mx-auto">
//           <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
//             <span className="block transform transition-transform opacity-0 animate-fade-slide-down">Hello, I'm</span>
//             <span className="block text-5xl md:text-7xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent animate-gradient-x mt-2">
//               Kumsa Kitessa
//             </span>
//           </h1>
          
//           <p className="text-xl md:text-2xl mb-8 text-gray-700 dark:text-gray-300 max-w-2xl mx-auto opacity-0 animate-fade-slide-up animation-delay-200">
//             <span className="font-medium">Flutter & Full-Stack Developer</span> with expertise in building beautiful cross-platform applications and scalable web solutions.
//           </p>
          
//           <div className="flex justify-center space-x-4 mb-10 opacity-0 animate-fade-in animation-delay-400">
//             <a 
//               href="https://github.com/kumsakites" 
//               target="_blank" 
//               rel="noopener noreferrer"
//               className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors duration-300"
//               aria-label="GitHub"
//             >
//               <Github size={24} />
//             </a>
//             <a 
//               href="https://linkedin.com/in/kumsa-bayissa" 
//               target="_blank" 
//               rel="noopener noreferrer"
//               className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors duration-300"
//               aria-label="LinkedIn"
//             >
//               <Linkedin size={24} />
//             </a>
//           </div>
          
//           <div className="flex justify-center space-x-4 mt-8 opacity-0 animate-fade-in animation-delay-600">
//             <a 
//               href="#projects" 
//               className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors duration-300"
//             >
//               View My Work
//             </a>
//             <a 
//               href="#contact" 
//               className="px-6 py-3 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 text-gray-900 dark:text-gray-100 font-medium transition-colors duration-300"
//             >
//               Contact Me
//             </a>
//           </div>
//         </div>
//       </div>
      
//       <a 
//         href="#about" 
//         className="absolute bottom-8 left-1/2 transform -translate-x-1/2 p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors duration-300 animate-bounce"
//         aria-label="Scroll to About section"
//       >
//         <ArrowDown size={20} />
//       </a>
//     </section>
//   );
// }
import { useEffect, useRef } from 'react';
import { ArrowDown, Github, Linkedin } from 'lucide-react';

class Particle {
  constructor(
    private canvas: HTMLCanvasElement,
    private ctx: CanvasRenderingContext2D,
    public x: number,
    public y: number,
    public size: number,
    public speedX: number,
    public speedY: number,
    public color: string
  ) {}

  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    if (this.x > this.canvas.width || this.x < 0) {
      this.speedX = -this.speedX;
    }
    if (this.y > this.canvas.height || this.y < 0) {
      this.speedY = -this.speedY;
    }
  }

  draw() {
    this.ctx.fillStyle = this.color;
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    this.ctx.fill();
  }
}

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasDimensions();
    window.addEventListener('resize', setCanvasDimensions);

    // Particle effects
    const particles: Particle[] = [];
    const particleCount = Math.min(window.innerWidth / 10, 100);

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(
        new Particle(
          canvas,
          ctx,
          Math.random() * canvas.width,
          Math.random() * canvas.height,
          Math.random() * 3 + 1,
          (Math.random() - 0.5) * 0.5,
          (Math.random() - 0.5) * 0.5,
          `rgba(59, 130, 246, ${Math.random() * 0.3 + 0.2})`
        )
      );
    }

    let animationFrameId: number;

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw and update particles
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      // Connect particles with lines when they're close
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(59, 130, 246, ${0.1 * (1 - distance / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', setCanvasDimensions);
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 z-0"
        aria-hidden="true"
      />
      
      <div className="container mx-auto px-4 md:px-6 z-10 mt-10 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="block transform transition-transform opacity-0 animate-fade-slide-down">Hello, I'm</span>
            <span className="block text-5xl md:text-7xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent animate-gradient-x mt-2">
              Kumsa Kitessa
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-700 dark:text-gray-300 max-w-2xl mx-auto opacity-0 animate-fade-slide-up animation-delay-200">
            <span className="font-medium">Flutter & Full-Stack Developer</span> with expertise in building beautiful cross-platform applications and scalable web solutions.
          </p>
          
          <div className="flex justify-center space-x-4 mb-10 opacity-0 animate-fade-in animation-delay-400">
            <a 
              href="https://github.com/kumsakites" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://linkedin.com/in/kumsa-bayissa" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
          </div>
          
          <div className="flex justify-center space-x-4 mt-8 opacity-0 animate-fade-in animation-delay-600">
            <a 
              href="#projects" 
              className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors duration-300"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="px-6 py-3 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 text-gray-900 dark:text-gray-100 font-medium transition-colors duration-300"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
      
      <a 
        href="#about" 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors duration-300 animate-bounce"
        aria-label="Scroll to About section"
      >
        <ArrowDown size={20} />
      </a>
    </section>
  );
}