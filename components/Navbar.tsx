
import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${scrolled ? 'bg-white/90 backdrop-blur-md py-4 shadow-lg shadow-[#B5838D]/10' : 'bg-transparent py-8'}`}>
      <div className="container mx-auto px-8 md:px-12 flex justify-between items-center">
        <a href="#home" className="text-2xl font-semibold text-[#4A3E3E] serif italic hover:text-[#B5838D] transition-colors flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#B5838D]"></span>
          raouane-dev
        </a>
        
        <div className="hidden md:flex items-center space-x-10 text-[10px] font-bold uppercase tracking-[0.3em] text-[#4A3E3E]">
          <a href="#home" className="hover:text-[#B5838D] transition-colors">Home</a>
          <a href="#projects" className="hover:text-[#B5838D] transition-colors">Projects</a>
          <a href="#contact" className="hover:text-[#B5838D] transition-colors">Contact</a>
          <a 
            href="/cv.pdf" 
            download 
            className="bg-[#B5838D] text-white px-8 py-3 rounded-full hover:bg-[#E5989B] transition-all shadow-md"
          >
            Download CV
          </a>
        </div>

        <div className="md:hidden">
            <a href="/cv.pdf" download className="text-[#B5838D] p-2 bg-white rounded-full shadow-sm">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
            </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
