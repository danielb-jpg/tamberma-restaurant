import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Utensils, MessageCircle } from 'lucide-react';
import { WHATSAPP_LINK, GLOVO_LINK, MENU_DATA } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* HERO SECTION */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image with overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/1920/1080?grayscale&blur=2" 
            alt="Tamberma Interior" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-charcoal"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center space-y-8 animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white tracking-wider leading-tight">
            <span className="text-gold block mb-2 text-2xl md:text-3xl font-sans font-light tracking-[0.2em]">WELCOME TO</span>
            TAMBERMA
          </h1>
          <p className="text-gray-300 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
            Experience the harmony of Indian spice, Chinese wok-craft, and Nigerian soul in the heart of Victoria Island.
          </p>

          {/* DUAL ORDER BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8 w-full max-w-lg mx-auto">
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-center gap-3 px-8 py-4 bg-transparent border-2 border-gold text-gold font-bold tracking-widest hover:bg-gold hover:text-charcoal transition-all duration-300"
            >
              <MessageCircle size={20} />
              <span>BOOK A TABLE</span>
            </a>
            
            <a 
              href={GLOVO_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-center gap-3 px-8 py-4 bg-gold border-2 border-gold text-charcoal font-bold tracking-widest hover:bg-white hover:border-white transition-all duration-300"
            >
              <Utensils size={20} />
              <span>ORDER DELIVERY</span>
            </a>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-gold/50">
          <div className="w-px h-16 bg-gradient-to-b from-transparent to-gold"></div>
        </div>
      </section>

      {/* FEATURED CATEGORIES PREVIEW */}
      <section className="py-20 px-4 bg-charcoal">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">Our Culinary Journey</h2>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {MENU_DATA.map((category) => (
              <div key={category.id} className="group relative overflow-hidden rounded-sm cursor-pointer border border-white/5 hover:border-gold/30 transition-all duration-500">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={category.items[0].image} 
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-xl font-bold text-white mb-2 font-serif">{category.title}</h3>
                  <p className="text-gray-300 text-sm mb-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    {category.description}
                  </p>
                  <Link 
                    to="/menu" 
                    className="text-gold text-sm font-bold flex items-center gap-2"
                  >
                    VIEW MENU <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ATMOSPHERE TEASER */}
      <section className="py-24 px-4 bg-charcoal-light relative">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <h4 className="text-gold tracking-widest text-sm font-bold">THE EXPERIENCE</h4>
            <h2 className="text-3xl md:text-5xl font-serif text-white leading-tight">
              A Hidden Gem in Victoria Island
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Step away from the Lagos bustle into an atmosphere of moody elegance. 
              Gold accents shimmer against charcoal walls, creating an intimate dining 
              sanctuary perfect for romantic dinners or high-end business meetings.
            </p>
            <Link 
              to="/about"
              className="inline-block mt-4 text-white border-b border-gold pb-1 hover:text-gold transition-colors"
            >
              Read Our Story
            </Link>
          </div>
          <div className="flex-1 relative">
            <div className="absolute -inset-4 border-2 border-gold/20 translate-x-4 translate-y-4 hidden md:block"></div>
            <img 
              src="https://picsum.photos/600/400?grayscale" 
              alt="Restaurant Interior" 
              className="relative z-10 w-full shadow-2xl"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;