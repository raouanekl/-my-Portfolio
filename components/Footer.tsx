
import React from 'react';

const Footer = () => {
  return (
    <footer className="pt-32 pb-12 px-8">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-16 text-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold tracking-[0.2em] text-[#4A3E3E] uppercase serif italic">raouane-dev</h2>
            <div className="w-12 h-[2px] bg-[#B5838D] mx-auto rounded-full"></div>
            <p className="text-[#B5838D] text-[10px] tracking-[0.5em] uppercase font-bold italic">Building the Future with Grace</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-12 text-[10px] font-bold uppercase tracking-[0.3em] text-[#4A3E3E]">
            <a href="#home" className="hover:text-[#B5838D] transition-colors">Home</a>
            <a href="#projects" className="hover:text-[#B5838D] transition-colors">Projects</a>
            <a href="#contact" className="hover:text-[#B5838D] transition-colors">Contact</a>
            <a href="/cv.pdf" download className="text-[#B5838D] hover:opacity-60 transition-all">My Resume</a>
          </div>

          <div className="w-full h-[1px] bg-[#B5838D]/10 max-w-4xl"></div>

          <div className="flex flex-col md:flex-row justify-between items-center w-full gap-8 text-[9px] font-bold uppercase tracking-[0.2em] text-[#7D6B6B]">
            <p>© {new Date().getFullYear()} RAOUANE-DEV STUDIO. ALL RIGHTS RESERVED.</p>
            <div className="flex gap-10">
               <a href="#" className="hover:text-[#B5838D] transition-colors">GITHUB</a>
               <a href="#" className="hover:text-[#B5838D] transition-colors">LINKEDIN</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
