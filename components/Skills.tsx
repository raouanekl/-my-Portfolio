
import React from 'react';

const skills = [
  { name: 'React', category: 'Frontend', bg: '#FFECEF' },
  { name: 'JavaScript', category: 'Frontend', bg: '#EBF1FF' },
  { name: 'HTML / CSS', category: 'Frontend', bg: '#FFF9EB' },
  { name: 'Spring Boot', category: 'Backend', bg: '#EBFFF1' },
  { name: 'Java', category: 'Backend', bg: '#F6EBFF' },
  { name: 'MySQL', category: 'Database', bg: '#EBFFFF' },
];

const Skills = () => {
  return (
    <section className="py-32 bg-white/40 px-8 border-y border-[#B5838D]/20">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center mb-24 space-y-4">
          <span className="text-[#B5838D] font-bold uppercase tracking-[0.5em] text-[10px]">Expertise</span>
          <h2 className="text-4xl md:text-5xl font-medium text-[#4A3E3E] serif italic">Tech Stack</h2>
          <div className="w-12 h-[2px] bg-[#B5838D] mt-2 rounded-full"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {skills.map((skill) => (
            <div 
              key={skill.name} 
              style={{ backgroundColor: skill.bg }}
              className="group p-10 rounded-[40px] text-center border border-white hover:border-[#B5838D]/30 transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="w-2 h-2 bg-[#B5838D] mx-auto mb-5 rounded-full"></div>
              <h3 className="font-bold text-[#4A3E3E] text-[11px] tracking-[0.1em] mb-2 uppercase">{skill.name}</h3>
              <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-[#7D6B6B] opacity-60">{skill.category}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
