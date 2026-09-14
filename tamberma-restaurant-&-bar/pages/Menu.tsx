import React, { useState } from 'react';
import { MENU_DATA } from '../constants';
import { MenuCategory } from '../types';
import { Leaf, Flame } from 'lucide-react';

const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>(MENU_DATA[0].id);

  const scrollToCategory = (categoryId: string) => {
    setActiveCategory(categoryId);
    const element = document.getElementById(categoryId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="bg-charcoal min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif text-white mb-4">Our Menu</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A curated selection of the finest dishes from India, China, and Nigeria.
          </p>
        </div>

        {/* Category Navigation */}
        <div className="sticky top-20 z-40 bg-charcoal/95 backdrop-blur border-y border-white/5 mb-12 py-4">
          <div className="flex justify-center flex-wrap gap-4 md:gap-8">
            {MENU_DATA.map((cat) => (
              <button
                key={cat.id}
                onClick={() => scrollToCategory(cat.id)}
                className={`text-sm md:text-base font-bold tracking-widest px-4 py-2 transition-all duration-300 border-b-2 ${
                  activeCategory === cat.id 
                    ? 'text-gold border-gold' 
                    : 'text-gray-500 border-transparent hover:text-gray-300'
                }`}
              >
                {cat.title.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Sections */}
        <div className="space-y-24">
          {MENU_DATA.map((category: MenuCategory) => (
            <div key={category.id} id={category.id} className="scroll-mt-40 animate-fade-in">
              <div className="flex flex-col items-center mb-10">
                <h2 className="text-3xl font-serif text-gold mb-2 text-center">{category.title}</h2>
                <div className="w-16 h-px bg-white/20 mb-4"></div>
                <p className="text-gray-400 italic text-center max-w-lg">{category.description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                {category.items.map((item) => (
                  <div key={item.id} className="group flex gap-4 md:gap-6">
                    {/* Item Image */}
                    <div className="w-24 h-24 md:w-32 md:h-32 flex-shrink-0 rounded-sm overflow-hidden bg-gray-800">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    
                    {/* Item Details */}
                    <div className="flex-1 flex flex-col justify-between py-1">
                      <div>
                        <div className="flex justify-between items-baseline mb-1">
                          <h3 className="text-white text-lg font-bold font-serif group-hover:text-gold transition-colors">
                            {item.name}
                          </h3>
                          <span className="text-gold font-bold">{item.price}</span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed mb-2">
                          {item.description}
                        </p>
                      </div>
                      
                      {/* Dietary Icons */}
                      <div className="flex gap-2 text-xs text-gray-500">
                        {item.isSpicy && (
                          <span className="flex items-center gap-1 text-red-400" title="Spicy">
                            <Flame size={12} /> Spicy
                          </span>
                        )}
                        {item.isVegetarian && (
                          <span className="flex items-center gap-1 text-green-400" title="Vegetarian">
                            <Leaf size={12} /> Veg
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Dietary Note */}
        <div className="mt-20 pt-8 border-t border-white/5 text-center text-gray-500 text-sm">
          <p>Please inform your server of any allergies or dietary requirements.</p>
          <p className="mt-2 text-xs">Prices are inclusive of VAT. Service charge not included.</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;