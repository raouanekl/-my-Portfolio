
import React from 'react';

const projects = [
  {
    title: "The Clothes Store",
    description: "A luxury boutique e-commerce application with a powerful Spring Boot core and a smooth React interface.",
    tech: ["Spring Boot", "React", "MySQL"],
    github: "https://github.com/raouane-dev/clothes-store",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Text Analyzer App",
    description: "Deep text processing tool for sentiment analysis and linguistic structure, built for speed and precision.",
    tech: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/raouane-dev/text-analyzer",
    image: "https://images.unsplash.com/photo-1455391727215-33a51cb16453?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Weather Pulse",
    description: "Beautifully animated weather dashboard providing real-time data across the globe via external APIs.",
    tech: ["React", "Weather API"],
    github: "https://github.com/raouane-dev/weather-app",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Aura Calculator",
    description: "Modern mathematical utility featuring a glass-morphism UI and complex operation support.",
    tech: ["React", "UI/UX"],
    github: "https://github.com/raouane-dev/calculator",
    image: "https://images.unsplash.com/photo-1587145820266-a5951ee6f670?auto=format&fit=crop&q=80&w=800"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-32 px-8">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center mb-28 space-y-4">
          <span className="text-[#B5838D] font-bold uppercase tracking-[0.5em] text-[10px]">Case Studies</span>
          <h2 className="text-4xl md:text-5xl font-medium text-[#4A3E3E] serif italic">Featured Projects</h2>
          <div className="w-12 h-[2px] bg-[#B5838D] mt-2 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
          {projects.map((project, idx) => (
            <a 
              key={idx} 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group block space-y-8"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-[40px] shadow-2xl border-4 border-white group-hover:border-[#B5838D]/20 transition-all duration-500">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[#4A3E3E]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-[2px] flex items-center justify-center">
                    <div className="bg-white px-10 py-4 rounded-full text-[#B5838D] text-[10px] font-bold uppercase tracking-[0.4em] shadow-lg transform -translate-y-4 group-hover:translate-y-0 transition-transform">
                        Github Link
                    </div>
                </div>
              </div>

              <div className="px-4 space-y-4 text-center md:text-left">
                <div className="flex flex-wrap justify-center md:justify-start gap-4">
                  {project.tech.map(t => (
                    <span key={t} className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#B5838D]">
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="text-3xl font-medium text-[#4A3E3E] serif italic group-hover:text-[#B5838D] transition-colors">{project.title}</h3>
                <p className="text-[#7D6B6B] text-lg leading-relaxed font-light">{project.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
