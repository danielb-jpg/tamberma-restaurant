import React from 'react';
import { MapPin, Phone, Clock, Mail, ExternalLink } from 'lucide-react';
import { ADDRESS, WHATSAPP_LINK, GOOGLE_MAPS_LINK } from '../constants';

const Contact: React.FC = () => {
  return (
    <div className="bg-charcoal min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif text-white mb-4">Contact Us</h1>
          <p className="text-gray-400">We look forward to serving you.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-charcoal-light p-8 rounded-sm shadow-xl border border-white/5">
          
          {/* Info Column */}
          <div className="space-y-10">
            
            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="bg-gold/10 p-3 rounded-full text-gold">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="text-xl font-serif text-white font-bold mb-2">Location</h3>
                <p className="text-gray-400 text-lg mb-2">{ADDRESS}</p>
                <a 
                  href={GOOGLE_MAPS_LINK} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gold text-sm font-bold flex items-center gap-1 hover:underline"
                >
                  GET DIRECTIONS <ExternalLink size={14} />
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-4">
              <div className="bg-gold/10 p-3 rounded-full text-gold">
                <Clock size={24} />
              </div>
              <div>
                <h3 className="text-xl font-serif text-white font-bold mb-2">Opening Hours</h3>
                <ul className="text-gray-400 space-y-1">
                  <li className="flex justify-between w-full md:w-64"><span>Monday - Thursday</span> <span>12:00 PM - 10:30 PM</span></li>
                  <li className="flex justify-between w-full md:w-64 text-white font-medium"><span>Friday - Saturday</span> <span>12:00 PM - 11:30 PM</span></li>
                  <li className="flex justify-between w-full md:w-64"><span>Sunday</span> <span>12:00 PM - 11:00 PM</span></li>
                </ul>
              </div>
            </div>

            {/* Contact */}
            <div className="flex items-start gap-4">
              <div className="bg-gold/10 p-3 rounded-full text-gold">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="text-xl font-serif text-white font-bold mb-2">Reservations</h3>
                <p className="text-gray-400 mb-4">
                  For table bookings and private events, please contact us via WhatsApp or Phone.
                </p>
                <a 
                  href={WHATSAPP_LINK}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-charcoal font-bold rounded-sm hover:bg-white transition-colors"
                >
                  <MessageCircleIcon />
                  BOOK VIA WHATSAPP
                </a>
              </div>
            </div>

          </div>

          {/* Map Column (Placeholder for visual balance if real iframe not desired, but usually expected) */}
          <div className="relative h-96 lg:h-full min-h-[400px] bg-gray-800 rounded-sm overflow-hidden border border-white/10">
            {/* Using a static map image or placeholder since we cannot easily embed a real interactive Google Map without an API key in this context usually, but an iframe works if no key is enforced for basic embed. I will use a styled placeholder div that LOOKS like a map style for luxury aesthetic. */}
            <div className="absolute inset-0 bg-gray-900 flex items-center justify-center">
              <div className="text-center p-6">
                <MapPin size={48} className="text-gold mx-auto mb-4 animate-bounce" />
                <h4 className="text-white text-xl font-serif">Find us in Victoria Island</h4>
                <p className="text-gray-500 mt-2">245 Samuel Manuwa St.</p>
                
                {/* Simulated Map Background */}
                <div className="absolute inset-0 opacity-20 pointer-events-none" style={{
                  backgroundImage: 'radial-gradient(circle at 50% 50%, #333 1px, transparent 1px)',
                  backgroundSize: '20px 20px'
                }}></div>
              </div>
            </div>
            
            {/* Actual Google Maps Embed Link overlay */}
            <iframe 
              title="Tamberma Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.717646695286!2d3.4428!3d6.4299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf53282e3b291%3A0x629111111111111!2sSamuel%20Manuwa%20St%2C%20Victoria%20Island%2C%20Lagos!5e0!3m2!1sen!2sng!4v1600000000000!5m2!1sen!2sng" 
              width="100%" 
              height="100%" 
              style={{ border: 0, opacity: 0.6, filter: 'grayscale(100%) invert(90%) contrast(85%)' }} 
              allowFullScreen={false} 
              loading="lazy"
            ></iframe>
          </div>

        </div>
      </div>
    </div>
  );
};

// Simple icon helper for the button above to avoid cluttering imports
const MessageCircleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
  </svg>
);

export default Contact;