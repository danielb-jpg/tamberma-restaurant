import React from 'react';
import { Facebook, Instagram, Twitter, MapPin, ExternalLink } from 'lucide-react';
import { GLOVO_LINK, ADDRESS, WHATSAPP_LINK } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          
          {/* Brand */}
          <div className="space-y-4">
            <h2 className="text-3xl font-serif text-gold font-bold">TAMBERMA</h2>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
              A hidden gem in Victoria Island delivering an exquisite fusion of Indian, Chinese, and Nigerian flavors.
            </p>
            <div className="flex justify-center md:justify-start space-x-6 pt-2">
              <a href="#" className="text-gray-400 hover:text-gold transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-gold transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-gold transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

          {/* Quick Links / Contact */}
          <div className="space-y-4">
            <h3 className="text-white font-serif text-lg tracking-widest">VISIT US</h3>
            <div className="flex flex-col items-center md:items-start space-y-3 text-gray-400 text-sm">
              <div className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 text-gold flex-shrink-0" />
                <span>{ADDRESS}</span>
              </div>
              <p>Mon - Sun: 12:00 PM - 11:00 PM</p>
              <a href={WHATSAPP_LINK} className="text-gold hover:underline">Book a Table via WhatsApp</a>
            </div>
          </div>

          {/* Glovo */}
          <div className="space-y-4 flex flex-col items-center md:items-start">
            <h3 className="text-white font-serif text-lg tracking-widest">DELIVERY</h3>
            <p className="text-gray-400 text-sm">Craving Tamberma at home?</p>
            <a 
              href={GLOVO_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#FFC244] text-[#00A082] font-bold px-6 py-3 rounded-full hover:bg-white transition-colors"
            >
              {/* Glovo SVG Icon approximation */}
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/> 
                {/* Simplified placeholder for Glovo logo shape */}
              </svg>
              <span>Order on Glovo</span>
              <ExternalLink size={16} />
            </a>
          </div>

        </div>
        
        <div className="mt-16 border-t border-white/5 pt-8 text-center text-xs text-gray-600">
          <p>&copy; {new Date().getFullYear()} Tamberma Restaurant & Bar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;