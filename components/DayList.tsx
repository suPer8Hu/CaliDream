
import React from 'react';
import { ItineraryDay, Language } from '../types';
import { MapPin, ChevronRight, Navigation } from 'lucide-react';
import { UI_TEXT } from '../constants';

interface DayListProps {
  selectedDayId: number;
  onSelectDay: (id: number) => void;
  data: ItineraryDay[];
  language: Language;
}

const DayList: React.FC<DayListProps> = ({ selectedDayId, onSelectDay, data, language }) => {
  const t = UI_TEXT[language].dayList;

  return (
    <div className="h-full flex flex-col">
      <div className="mb-4 px-2">
        <h2 className="text-xl font-serif font-bold text-gray-900 flex items-center gap-2">
          <Navigation className="text-cali-orange" size={20} />
          {t.title}
        </h2>
        <p className="text-xs text-gray-400 mt-1 pl-7">{t.subtitle}</p>
      </div>
      
      <div className="overflow-y-auto flex-1 space-y-3 px-2 pb-4 scrollbar-hide">
        {data.map((day) => {
          const isSelected = selectedDayId === day.id;
          return (
            <div
              key={day.id}
              onClick={() => onSelectDay(day.id)}
              className={`
                group relative w-full text-left p-4 rounded-2xl cursor-pointer transition-all duration-300 border
                ${isSelected 
                  ? 'bg-white border-cali-orange/30 shadow-lg shadow-orange-100 scale-[1.02] z-10' 
                  : 'bg-white border-gray-100 hover:border-orange-200 hover:shadow-md'
                }
              `}
            >
              <div className="flex justify-between items-start gap-3">
                {/* Date Badge */}
                <div className={`
                  flex flex-col items-center justify-center w-12 h-12 rounded-xl shrink-0 font-serif
                  ${isSelected ? 'bg-cali-orange text-white' : 'bg-gray-50 text-gray-400 group-hover:bg-orange-50 group-hover:text-orange-400'}
                `}>
                  <span className="text-[10px] font-medium leading-none mt-1">{t.day}</span>
                  <span className="text-xl font-bold leading-none">{day.id}</span>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-gray-500 tracking-wide">{day.date}</span>
                    <span className="text-[10px] text-gray-400 bg-gray-50 px-2 py-0.5 rounded-full">{day.miles} {t.miles}</span>
                  </div>
                  <h3 className={`font-bold text-sm truncate transition-colors ${isSelected ? 'text-gray-900' : 'text-gray-700'}`}>
                    {day.title}
                  </h3>
                  <div className="flex items-center gap-1 mt-1.5 text-xs text-gray-400">
                     <MapPin size={10} className={isSelected ? 'text-cali-orange' : ''} />
                     <span className="truncate">{day.route.split('->')[0]}</span>
                  </div>
                </div>

                {/* Active Indicator */}
                {isSelected && (
                   <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white p-1 rounded-full shadow-sm border border-gray-100 md:block hidden">
                      <ChevronRight size={14} className="text-cali-orange" />
                   </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DayList;
