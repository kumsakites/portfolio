import { useRef, useEffect } from 'react';

interface Skill {
  name: string;
  percentage: number;
  color: string;
}

const frontendSkills: Skill[] = [
  { name: 'React.js', percentage: 90, color: 'bg-blue-600' },
  { name: 'Next.js', percentage: 85, color: 'bg-black' },
  { name: 'TailwindCSS', percentage: 95, color: 'bg-teal-500' },
  { name: 'Redux', percentage: 80, color: 'bg-purple-600' },
];

const backendSkills: Skill[] = [
  { name: 'Node.js', percentage: 85, color: 'bg-green-600' },
  { name: 'Express.js', percentage: 90, color: 'bg-gray-700' },
  { name: 'MongoDB', percentage: 85, color: 'bg-green-700' },
  { name: 'REST APIs', percentage: 90, color: 'bg-blue-500' },
];

const mobileSkills: Skill[] = [
  { name: 'Flutter', percentage: 90, color: 'bg-blue-400' },
  { name: 'Dart', percentage: 85, color: 'bg-blue-800' },
  { name: 'Firebase', percentage: 80, color: 'bg-yellow-600' },
];

const devOpsSkills: Skill[] = [
  { name: 'Git', percentage: 85, color: 'bg-orange-600' },
  { name: 'Vercel', percentage: 80, color: 'bg-black' },
  { name: 'VS Code', percentage: 95, color: 'bg-blue-700' },
];

function SkillBar({ skill, delay }: { skill: Skill; delay: number }) {
  const skillRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            if (skillRef.current) {
              skillRef.current.style.width = `${skill.percentage}%`;
              skillRef.current.style.opacity = '1';
            }
          }, delay);
        }
      },
      {
        threshold: 0.1,
      }
    );
    
    if (skillRef.current) {
      observer.observe(skillRef.current.parentElement as HTMLElement);
    }
    
    return () => {
      if (skillRef.current?.parentElement) {
        observer.unobserve(skillRef.current.parentElement as HTMLElement);
      }
    };
  }, [delay, skill.percentage]);

  return (
    <div className="mb-6">
      <div className="flex justify-between mb-1">
        <span className="text-gray-800 dark:text-gray-200 font-medium">{skill.name}</span>
        <span className="text-gray-600 dark:text-gray-400">{skill.percentage}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
        <div
          ref={skillRef}
          className={`h-2.5 rounded-full ${skill.color} transition-all duration-1000 ease-out opacity-0`}
          style={{ width: '0%' }}
        ></div>
      </div>
    </div>
  );
}

function SkillCategory({ title, skills }: { title: string; skills: Skill[] }) {
  return (
    <div className="mb-10">
      <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">{title}</h3>
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <SkillBar key={skill.name} skill={skill} delay={index * 200} />
        ))}
      </div>
    </div>
  );
}

export function Skills() {
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
      id="skills" 
      ref={sectionRef}
      className="py-20 bg-gray-100 dark:bg-gray-800 opacity-0 transition-opacity duration-1000"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My expertise spans across various technologies in frontend, backend, and mobile development.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
            <SkillCategory title="Frontend" skills={frontendSkills} />
          </div>
          
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
            <SkillCategory title="Backend" skills={backendSkills} />
          </div>
          
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
            <SkillCategory title="Mobile" skills={mobileSkills} />
          </div>
          
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
            <SkillCategory title="DevOps & Tools" skills={devOpsSkills} />
          </div>
        </div>
      </div>
    </section>
  );
}