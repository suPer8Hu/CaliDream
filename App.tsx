import React, { useState } from 'react';
import Header from './components/Header';
import DayList from './components/DayList';
import DetailView from './components/DetailView';
import HotelList from './components/HotelList';
import TravelTips from './components/TravelTips';
import InteractiveMap from './components/InteractiveMap';
import { ITINERARY_DATA_ZH, ITINERARY_DATA_EN, UI_TEXT } from './constants';
import { Language } from './types';

type ViewMode = 'itinerary' | 'map' | 'hotels' | 'tips';

const App: React.FC = () => {
  const [selectedDayId, setSelectedDayId] = useState<number>(1);
  const [currentView, setCurrentView] = useState<ViewMode>('itinerary');
  const [language, setLanguage] = useState<Language>('zh');

  const currentData = language === 'zh' ? ITINERARY_DATA_ZH : ITINERARY_DATA_EN;
  const activeDay = currentData.find(d => d.id === selectedDayId) || currentData[0];
  const t = UI_TEXT[language].hero;

  const handleReset = () => {
    setSelectedDayId(1);
    setCurrentView('itinerary');
  };

  return (
    <div className="min-h-screen bg-mist-gray text-gray-900 font-sans pb-0 selection:bg-cali-orange selection:text-white flex flex-col">
      <Header 
        currentView={currentView}
        onNavigate={setCurrentView}
        onReset={handleReset}
        language={language}
        setLanguage={setLanguage}
      />

      {/* Map View takes full screen height minus header, handled inside component */}
      {currentView === 'map' ? (
        <InteractiveMap language={language} />
      ) : (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1 w-full">
          
          {/* Intro Section - Conditional Rendering */}
          {currentView === 'itinerary' && (
            <div className="mb-12 text-center max-w-3xl mx-auto animate-slide-up">
              <span className="text-cali-orange font-bold tracking-[0.2em] text-xs uppercase mb-2 block">{t.subtitle}</span>
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 mb-6 leading-tight">
                {t.title1}<br />
                <span className="bg-gradient-to-r from-cali-gold to-cali-orange bg-clip-text text-transparent">{t.title2}</span>
              </h2>
              <p className="text-gray-500 text-lg md:text-xl font-light leading-relaxed">
                {t.desc}
              </p>
            </div>
          )}

          {/* Main Content Area */}
          {currentView === 'itinerary' ? (
            <div className="flex flex-col md:flex-row gap-8 min-h-[800px] h-[calc(100vh-200px)]">
              {/* Left Sidebar - Scrollable List */}
              <div className="w-full md:w-80 lg:w-[350px] shrink-0 h-full bg-white/50 backdrop-blur-sm rounded-3xl border border-white p-2 hidden md:block shadow-sm">
                <DayList 
                  selectedDayId={selectedDayId} 
                  onSelectDay={setSelectedDayId} 
                  data={currentData}
                  language={language}
                />
              </div>

              {/* Mobile Day Selector (Horizontal) */}
              <div className="md:hidden flex overflow-x-auto gap-3 pb-4 scrollbar-hide snap-x">
                 {currentData.map(day => (
                    <button 
                      key={day.id}
                      onClick={() => setSelectedDayId(day.id)}
                      className={`snap-center shrink-0 px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-colors border ${
                         selectedDayId === day.id 
                         ? 'bg-gray-900 text-white border-gray-900' 
                         : 'bg-white text-gray-500 border-gray-200'
                      }`}
                    >
                       {day.date} · {day.title.split(' ')[0]}
                    </button>
                 ))}
              </div>

              {/* Right Content - Scrollable Details */}
              <div className="flex-1 h-full overflow-y-auto scrollbar-hide pr-1 md:pr-4 rounded-3xl pb-10">
                <DetailView day={activeDay} language={language} />
              </div>
            </div>
          ) : currentView === 'hotels' ? (
            <div className="pb-10">
               <HotelList language={language} />
            </div>
          ) : (
            <div className="pb-10">
               <TravelTips language={language} />
            </div>
          )}
        </main>
      )}
    </div>
  );
};

export default App;