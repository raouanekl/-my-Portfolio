
import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="relative pt-40 pb-20 md:pt-56 md:pb-48 px-8 overflow-hidden">
      {/* Defined Rose Gradients */}
      <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#B5838D]/20 rounded-full blur-[100px] -z-10"></div>
      <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-[#E5989B]/10 rounded-full blur-[80px] -z-10"></div>
      
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-16">
        <div className="flex-1 space-y-10 text-center md:text-left z-10">
          <div className="inline-flex items-center gap-3 px-6 py-2 bg-[#B5838D]/10 border border-[#B5838D]/30 text-[#B5838D] rounded-full text-[9px] font-bold uppercase tracking-[0.4em]">
            Software Engineer Portfolio
          </div>
          
          <h1 className="text-6xl md:text-8xl font-medium leading-[1.1] text-[#4A3E3E]">
            Hi, I'm <br />
            <span className="serif italic text-[#B5838D] font-normal">Raouane.</span>
          </h1>

          <p className="text-lg md:text-xl text-[#7D6B6B] max-w-lg leading-relaxed font-light">
            Crafting beautiful digital experiences with precision and grace. Specialized in <span className="text-[#B5838D] font-semibold italic underline decoration-1 underline-offset-8">React, Spring Boot, and MySQL.</span>
          </p>

          <div className="flex flex-wrap gap-6 pt-4 justify-center md:justify-start">
            <a href="#projects" className="group px-12 py-5 bg-[#B5838D] text-white rounded-full font-bold text-[10px] tracking-[0.3em] uppercase hover:bg-[#E5989B] transition-all shadow-xl shadow-[#B5838D]/30 flex items-center gap-4">
              Explore Projects
              <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </a>
            <a href="#contact" className="px-12 py-5 bg-white border border-[#E8D1D1] text-[#4A3E3E] rounded-full font-bold text-[10px] tracking-[0.3em] uppercase hover:border-[#B5838D] transition-all">
              Contact Me
            </a>
          </div>
        </div>
        
        <div className="flex-1 flex justify-center relative">
          <div className="relative group">
            <div className="absolute inset-0 bg-[#B5838D]/40 rounded-[60px] rotate-3 -z-10 group-hover:rotate-0 transition-transform duration-1000"></div>
            <div className="w-72 h-[420px] md:w-[420px] md:h-[550px] overflow-hidden rounded-[50px] border-[12px] border-white shadow-2xl relative bg-white">
              <img //hahi photo de profile
                src="components/profile pic.jpg" 
                alt="raouane-dev" 
                className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
              />
              <div className="absolute bottom-8 left-8 bg-[#4A3E3E]/90 backdrop-blur-md px-6 py-2 rounded-full text-[8px] font-bold tracking-[0.4em] text-white uppercase shadow-md">
                Full Stack Developer
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
