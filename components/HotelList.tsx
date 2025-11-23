
import React from 'react';
import { ITINERARY_DATA_ZH, ITINERARY_DATA_EN, UI_TEXT } from '../constants';
import { Star, MapPin, ExternalLink } from 'lucide-react';
import { Language } from '../types';

interface HotelListProps {
  language: Language;
}

const HotelList: React.FC<HotelListProps> = ({ language }) => {
  const data = language === 'zh' ? ITINERARY_DATA_ZH : ITINERARY_DATA_EN;
  const t = UI_TEXT[language];

  return (
    <div className="animate-slide-up space-y-8">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <h2 className="text-3xl font-serif font-bold text-gray-900 mb-3">{t.hotels.title}</h2>
        <p className="text-gray-500">{t.hotels.desc}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.flatMap((day) => 
          day.hotels.map((hotel, hIdx) => (
            <a 
              key={`${day.id}-${hIdx}`}
              href={hotel.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group flex flex-col h-full"
            >
              <div className="h-56 overflow-hidden relative">
                <img 
                  src={`https://picsum.photos/seed/${hotel.name}hotel/800/600`} 
                  alt={hotel.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-2 py-1 rounded-lg text-xs font-bold shadow-sm flex items-center gap-1">
                  <Star size={12} className="text-yellow-500 fill-yellow-500" />
                  {hotel.rating}
                </div>
                <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-medium text-white flex items-center gap-1">
                  <MapPin size={10} />
                  Day {day.id} · {day.title.split(' ')[0]}
                </div>
                <div className={`absolute top-4 left-4 text-[10px] font-bold px-2 py-1 rounded text-white ${
                    hotel.category === 'Luxury' ? 'bg-black/70' : 
                    hotel.category === 'Comfort' ? 'bg-blue-600/70' : 'bg-green-600/70'
                }`}>
                    {hotel.category === 'Luxury' ? t.detail.luxury : hotel.category === 'Comfort' ? t.detail.comfort : t.detail.budget}
                </div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="font-bold text-xl text-gray-900 mb-2 leading-tight group-hover:text-cali-orange transition-colors">
                  {hotel.name}
                </h3>
                <p className="text-gray-500 text-sm mb-4 line-clamp-3 flex-1">{hotel.description}</p>
                
                <div className="pt-4 border-t border-gray-50 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-gray-400 uppercase tracking-wider block mb-0.5">{t.detail.refPrice}</span>
                    <span className="text-gray-900 font-bold">{hotel.priceRange}</span>
                  </div>
                  <button className="p-2 rounded-full bg-gray-50 text-gray-600 hover:bg-gray-900 hover:text-white transition-colors">
                    <ExternalLink size={18} />
                  </button>
                </div>
              </div>
            </a>
          ))
        )}
      </div>
    </div>
  );
};

export default HotelList;
