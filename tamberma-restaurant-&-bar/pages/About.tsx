import React from 'react';
import { Star } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-charcoal min-h-screen pt-24 pb-16">
      {/* Introduction Hero */}
      <div className="relative h-[60vh] overflow-hidden mb-16">
        <img 
          src="https://picsum.photos/1920/1080?grayscale&blur=1" 
          alt="Tamberma Atmosphere" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-5xl md:text-7xl font-serif text-gold font-bold mb-4">The Story</h1>
            <p className="text-white text-lg tracking-widest uppercase">Elegance • Fusion • Intimacy</p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* The Hidden Gem */}
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1 text-center md:text-right space-y-6">
            <h2 className="text-3xl font-serif text-white">The Hidden Gem of V.I.</h2>
            <div className="h-0.5 w-16 bg-gold ml-auto mr-auto md:mr-0"></div>
            <p className="text-gray-400 leading-relaxed text-lg">
              Tucked away on Samuel Manuwa Street, Tamberma defies the chaotic energy of Lagos. 
              We are not just a restaurant; we are a sanctuary. Our design philosophy centers on 
              <span className="text-gold"> "Dark Luxury"</span>—a mood set by charcoal textures, 
              dim ambient lighting, and warm gold accents that create an immediate sense of privacy and exclusivity.
            </p>
          </div>
          <div className="flex-1">
             <img 
               src="https://picsum.photos/600/800?grayscale" 
               alt="Interior Detail" 
               className="rounded-sm shadow-2xl border border-white/5"
             />
          </div>
        </div>

        {/* The Fusion Concept */}
        <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
          <div className="flex-1 text-center md:text-left space-y-6">
            <h2 className="text-3xl font-serif text-white">A Tri-Cultural Kitchen</h2>
            <div className="h-0.5 w-16 bg-gold mr-auto ml-auto md:ml-0"></div>
            <p className="text-gray-400 leading-relaxed text-lg">
              Why choose one cuisine when you can experience the best of three? Tamberma was born from the desire to 
              bring authentic <span className="text-white">Indian Tandoor</span>, fiery <span className="text-white">Chinese Wok</span>, 
              and smoky <span className="text-white">Nigerian Grill</span> flavors under one roof. 
              Our chefs are masters of their respective domains, ensuring that whether you order the Rogan Josh 
              or the Suya Pizza, you are tasting authenticity, not imitation.
            </p>
          </div>
          <div className="flex-1 grid grid-cols-2 gap-4">
             <img src="https://picsum.photos/400/400?random=20" className="rounded-sm opacity-80" alt="Chef Cooking" />
             <img src="https://picsum.photos/400/400?random=21" className="rounded-sm mt-8 opacity-80" alt="Plating" />
          </div>
        </div>

        {/* Testimonial */}
        <div className="bg-charcoal-light p-10 rounded-sm border border-gold/10 text-center">
           <div className="flex justify-center gap-1 text-gold mb-6">
             {[1,2,3,4,5].map(i => <Star key={i} fill="currentColor" size={20} />)}
           </div>
           <blockquote className="font-serif text-xl md:text-2xl text-white italic mb-6">
             "It feels like you've left Lagos entirely. The mood, the lighting, the food—everything screams sophistication without being pretentious."
           </blockquote>
           <cite className="text-gold font-bold tracking-widest text-sm">— A Loyal Patron</cite>
        </div>

      </div>
    </div>
  );
};

export default About;