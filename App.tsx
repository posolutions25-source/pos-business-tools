
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import AIAssistant from './components/AIAssistant';
import Footer from './components/Footer';
import { PRODUCTS, VALUE_PROPS } from './constants';
import { Sparkles, ArrowRight } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-[#39FF14] selection:text-black">
      <Header />
      
      <main>
        <Hero />

        {/* Value Propositions Section */}
        <section className="py-24 bg-[#0d0d0d]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
                Why These <span className="text-[#39FF14]">Tools Work</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                Because they’re designed for real life — simple, accessible, and built to help you grow without overwhelm.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {VALUE_PROPS.map((prop, idx) => (
                <div key={idx} className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-[#39FF14]/50 transition-colors group">
                  <div className="mb-6 group-hover:scale-110 transition-transform origin-left">
                    {prop.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{prop.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{prop.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products Grid */}
        <section id="shop" className="py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 space-y-4 md:space-y-0">
              <div className="max-w-xl">
                <div className="flex items-center space-x-2 text-[#39FF14] mb-4">
                  <Sparkles className="w-5 h-5" />
                  <span className="text-xs font-bold uppercase tracking-[0.2em]">Curated Solutions</span>
                </div>
                <h2 className="text-5xl font-black leading-tight">Featured Products</h2>
              </div>
              <button className="flex items-center space-x-2 text-gray-400 hover:text-[#39FF14] transition-colors font-bold group">
                <span>View Entire Collection</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {PRODUCTS.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>

        {/* AI Growth Advisor */}
        <AIAssistant />

        {/* About Section */}
        <section id="about" className="py-32 relative overflow-hidden">
           <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="relative">
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#39FF14]/10 rounded-full blur-3xl" />
                <div className="aspect-square rounded-3xl overflow-hidden border border-white/10 p-2">
                  <img 
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80" 
                    alt="POS Culture" 
                    className="w-full h-full object-cover rounded-2xl opacity-70"
                  />
                </div>
              </div>
              
              <div>
                <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
                  About <span className="text-[#39FF14]">POS Business Tools</span>
                </h2>
                <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                  <p>
                    POS Business Tools is part of the Point On Solutions ecosystem — a collection of divisions built to help people <span className="text-white font-bold italic">reset, organize, and rise.</span>
                  </p>
                  <p>
                    Our digital tools are designed for entrepreneurs, creators, and everyday people who want to stay organized and move forward with confidence. 
                  </p>
                  <p>
                    Every tool we create is simple, accessible, and built to help you operate like a pro without the overwhelm that often comes with growth.
                  </p>
                </div>
                
                <div className="mt-12 grid grid-cols-3 gap-8 border-t border-white/5 pt-12">
                   <div>
                    <div className="text-3xl font-black text-white mb-1">10k+</div>
                    <div className="text-xs uppercase tracking-widest text-[#39FF14] font-bold">Tools Sold</div>
                   </div>
                   <div>
                    <div className="text-3xl font-black text-white mb-1">4.9/5</div>
                    <div className="text-xs uppercase tracking-widest text-[#39FF14] font-bold">User Rating</div>
                   </div>
                   <div>
                    <div className="text-3xl font-black text-white mb-1">24/7</div>
                    <div className="text-xs uppercase tracking-widest text-[#39FF14] font-bold">Global Access</div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter / CTA */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-[#39FF14] rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/20 blur-[100px] -translate-y-1/2 translate-x-1/2 rounded-full pointer-events-none transition-transform group-hover:scale-110 duration-700" />
              
              <h2 className="text-4xl md:text-6xl font-black text-black mb-8 relative z-10 leading-none">
                Ready to scale <br /> with confidence?
              </h2>
              <p className="text-black/70 text-lg md:text-xl max-w-2xl mx-auto mb-12 relative z-10 font-medium">
                Join 5,000+ entrepreneurs who use POS Tools to streamline their workflow and hit their targets faster.
              </p>
              
              <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full sm:w-80 px-8 py-5 bg-white rounded-2xl text-black font-medium focus:outline-none"
                />
                <button className="w-full sm:w-auto px-10 py-5 bg-black text-[#39FF14] font-black rounded-2xl hover:scale-105 transition-transform">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
