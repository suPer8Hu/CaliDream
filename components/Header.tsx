import React from 'react';
import { Camera, Compass, Map, BedDouble, AlertTriangle, Users, Globe } from 'lucide-react';
import { Language } from '../types';
import { UI_TEXT } from '../constants';

interface HeaderProps {
  currentView: 'itinerary' | 'map' | 'hotels' | 'tips';
  onNavigate: (view: 'itinerary' | 'map' | 'hotels' | 'tips') => void;
  onReset: () => void;
  language: Language;
  setLanguage: (lang: Language) => void;
}

const Header: React.FC<HeaderProps> = ({ currentView, onNavigate, onReset, language, setLanguage }) => {
  const t = UI_TEXT[language].nav;
  
  const navItems = [
    { id: 'itinerary', label: t.itinerary, icon: Compass }, // Swapped icon for variety
    { id: 'map', label: language === 'zh' ? '全景地图' : 'Map Mode', icon: Map },
    { id: 'hotels', label: t.hotels, icon: BedDouble },
    { id: 'tips', label: t.tips, icon: AlertTriangle },
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'zh' ? 'en' : 'zh');
  };

  return (
    <header className="sticky top-0 z-50 glass-card border-b-0 h-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          {/* Logo Section */}
          <div 
            className="flex items-center gap-3 cursor-pointer group"
            onClick={onReset}
          >
            <div className="bg-gradient-to-tr from-cali-gold to-cali-orange p-2 rounded-xl text-white shadow-lg group-hover:rotate-12 transition-transform duration-300">
              <Compass size={24} />
            </div>
            <div className="flex flex-col">
              <h1 className="text-xl font-serif font-bold text-gray-900 leading-none tracking-tight">
                Cali<span className="text-cali-orange">Dream</span>
              </h1>
              <span className="text-[10px] text-gray-500 font-medium tracking-widest uppercase mt-0.5">Road Trip 2025</span>
            </div>
          </div>
          
          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id as any)}
                className={`
                  flex items-center gap-1.5 font-medium text-sm transition-colors relative group py-2
                  ${currentView === item.id ? 'text-cali-orange' : 'text-gray-600 hover:text-gray-900'}
                `}
              >
                <item.icon size={16} className={currentView === item.id ? 'stroke-[2.5px]' : 'stroke-2'} />
                {item.label}
                <span className={`
                  absolute bottom-0 left-0 h-0.5 bg-cali-orange transition-all duration-300 rounded-full
                  ${currentView === item.id ? 'w-full' : 'w-0 group-hover:w-full'}
                `}></span>
              </button>
            ))}
          </nav>

          {/* User Actions */}
          <div className="flex items-center gap-3">
             <button
               onClick={toggleLanguage}
               className="flex items-center gap-1 px-3 py-1.5 rounded-full border border-gray-200 text-xs font-bold text-gray-600 hover:bg-gray-50 transition-colors"
             >
               <Globe size={14} />
               <span>{language === 'zh' ? 'EN' : '中'}</span>
             </button>

             <div className="h-9 w-9 rounded-full bg-gradient-to-r from-pink-500 to-yellow-500 p-[2px] cursor-pointer hover:shadow-lg transition-shadow">
                <img src="https://picsum.photos/id/64/100/100" alt="User" className="h-full w-full object-cover rounded-full border-2 border-white" />
             </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;