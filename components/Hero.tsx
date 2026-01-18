
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-[#39FF14]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#39FF14] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#39FF14]"></span>
            </span>
            <span className="text-xs font-semibold tracking-wider text-gray-400 uppercase">Growth Systems Ecosystem</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-[1.1] tracking-tight">
            Digital Tools That Help <br />
            <span className="text-[#39FF14] drop-shadow-[0_0_15px_rgba(57,255,20,0.3)]">Grow Your Business</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Systems, audiobooks, and productivity tools designed for real people who want fast, measurable growth.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a 
              href="#shop"
              className="w-full sm:w-auto px-8 py-5 bg-[#39FF14] text-black font-bold text-lg rounded-xl hover:scale-105 transition-transform flex items-center justify-center group"
            >
              Shop Business Tools
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <p className="text-sm font-medium text-gray-500 max-w-[200px] text-left sm:text-center italic">
              Tools that simplify your workflow and strengthen your habits.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
