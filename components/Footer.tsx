
import React from 'react';
import { Mail, Github, Twitter, Instagram } from 'lucide-react';
import { NAV_LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-black mb-6 tracking-tighter">
              POS<span className="text-[#39FF14]">TOOLS</span>
            </h3>
            <p className="text-gray-400 max-w-sm mb-8">
              Part of the Point On Solutions ecosystem. We build digital tools designed to support fast growth, clear thinking, and real-world results.
            </p>
            <div className="flex space-x-6">
              {[Twitter, Github, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="text-gray-500 hover:text-[#39FF14] transition-colors">
                  <Icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6">Explore</h4>
            <ul className="space-y-4">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6">Contact</h4>
            <a 
              href="mailto:posolutions2025+tools@gmail.com"
              className="flex items-center text-gray-400 hover:text-[#39FF14] transition-colors group"
            >
              <Mail className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
              <span className="text-sm truncate">posolutions2025+tools@gmail.com</span>
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-gray-500 text-xs font-medium">
          <p>© 2025 POS Business Tools. All rights reserved.</p>
          <div className="flex space-x-8">
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
