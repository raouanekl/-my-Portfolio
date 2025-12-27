
import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Contact from ${formData.name}`);
    const body = encodeURIComponent(`Hello Raouane,\n\n${formData.message}\n\nFrom,\n${formData.name} (${formData.email})`);
    window.location.href = `mailto:raouane.kihal@univ-constantine2.dz?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-32 px-8 bg-[#B5838D]/5">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="space-y-12">
            <div className="space-y-6">
              <span className="text-[#B5838D] font-bold uppercase tracking-[0.5em] text-[10px]">Contact</span>
              <h2 className="text-5xl md:text-7xl font-medium text-[#4A3E3E] serif italic leading-tight">Let's build <br />something.</h2>
              <div className="w-16 h-[2px] bg-[#B5838D] mt-2 rounded-full"></div>
            </div>
            
            <p className="text-xl text-[#7D6B6B] leading-relaxed font-light max-w-sm">
              Whether you have a question or just want to say hi, my inbox is always open.
            </p>

            <div className="pt-8">
              <a href="mailto:raouane.kihal@univ-constantine2.dz" className="group inline-flex flex-col gap-3">
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#B5838D]">Drop an Email</span>
                <span className="text-2xl font-light text-[#4A3E3E] group-hover:text-[#B5838D] transition-colors underline underline-offset-[16px] decoration-[#B5838D]/30 decoration-2">raouane.kihal@univ-constantine2.dz</span>
              </a>
            </div>
          </div>

          <div className="bg-white p-10 md:p-16 rounded-[40px] shadow-2xl border border-[#B5838D]/10">
            <form onSubmit={handleSubmit} className="space-y-10">
              <div className="space-y-3">
                <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#B5838D]">Name</label>
                <input 
                  type="text" required
                  className="w-full bg-[#FCF6F6] rounded-xl border border-transparent p-5 focus:border-[#B5838D]/30 focus:bg-white transition-all outline-none text-[#4A3E3E] placeholder:text-[#4A3E3E]/30"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#B5838D]">Email</label>
                <input 
                  type="email" required
                  className="w-full bg-[#FCF6F6] rounded-xl border border-transparent p-5 focus:border-[#B5838D]/30 focus:bg-white transition-all outline-none text-[#4A3E3E] placeholder:text-[#4A3E3E]/30"
                  placeholder="hello@domain.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#B5838D]">Message</label>
                <textarea 
                  rows={3} required
                  className="w-full bg-[#FCF6F6] rounded-2xl border border-transparent p-5 focus:border-[#B5838D]/30 focus:bg-white transition-all outline-none resize-none text-[#4A3E3E] placeholder:text-[#4A3E3E]/30"
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-[#B5838D] text-white font-bold uppercase tracking-[0.5em] text-[10px] py-6 rounded-xl shadow-lg hover:bg-[#E5989B] hover:-translate-y-1 transition-all"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
