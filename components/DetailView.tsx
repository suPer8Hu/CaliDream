
import React, { useEffect, useState } from 'react';
import { ItineraryDay, AiInsight, Language } from '../types';
import { getTravelInsights } from '../services/geminiService';
import { MapPin, Car, Camera, Star, Sparkles, Shirt, PartyPopper, Heart, Share2, ExternalLink, Ticket, ArrowRight } from 'lucide-react';
import { UI_TEXT } from '../constants';

interface DetailViewProps {
  day: ItineraryDay;
  language: Language;
}

const DetailView: React.FC<DetailViewProps> = ({ day, language }) => {
  const [insight, setInsight] = useState<AiInsight | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const t = UI_TEXT[language].detail;

  // Reset state when day changes
  useEffect(() => {
    setInsight(null);
    setIsLiked(false);
    
    const fetchInsight = async () => {
      setLoading(true);
      const locations = day.mainStops.map(s => s.name);
      const data = await getTravelInsights(day.title, day.route, locations, language);
      setInsight(data);
      setLoading(false);
    };

    fetchInsight();
  }, [day, language]); // Added language as dependency

  return (
    <div className="space-y-6 animate-fade-in pb-10">
      
      {/* 1. Immersive Hero Section */}
      <div className="relative h-64 md:h-80 rounded-3xl overflow-hidden shadow-2xl group">
        <img 
          src={`https://picsum.photos/seed/${day.id + day.route}/1200/600`} 
          alt={day.title}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 md:p-8">
          <div className="flex justify-between items-end">
            <div>
              <div className="flex items-center gap-2 text-white/90 text-xs md:text-sm font-medium mb-2 backdrop-blur-sm bg-white/10 w-fit px-3 py-1 rounded-full">
                <Car size={14} />
                <span>{t.drive}: {day.driveTime}</span>
                <span className="w-1 h-1 bg-white rounded-full"></span>
                <span>{day.miles} {language === 'zh' ? '英里' : 'mi'}</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-serif font-bold text-white shadow-sm mb-2 leading-tight">
                {day.title}
              </h1>
              <p className="text-white/80 text-sm md:text-base max-w-xl font-light line-clamp-2">
                {day.shortDesc}
              </p>
            </div>
            
            {/* Interactive Actions */}
            <div className="flex flex-col gap-3">
              <button 
                onClick={() => setIsLiked(!isLiked)}
                className={`p-3 rounded-full backdrop-blur-md transition-all duration-300 ${isLiked ? 'bg-red-500 text-white shadow-red-500/50 shadow-lg scale-110' : 'bg-white/20 text-white hover:bg-white/30'}`}
              >
                <Heart size={20} fill={isLiked ? "currentColor" : "none"} />
              </button>
              <button className="p-3 rounded-full bg-white/20 text-white hover:bg-white/30 backdrop-blur-md transition-all">
                <Share2 size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
        
        {/* LEFT COLUMN (Content) */}
        <div className="lg:col-span-8 space-y-8">
          
          {/* 2. Intro Text */}
          <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-gray-100">
             <div className="flex items-start gap-4">
                <span className="text-4xl text-cali-orange/50">❝</span>
                <p className="text-gray-600 leading-loose font-serif text-lg italic pt-2">
                  {day.description}
                </p>
             </div>
          </div>

          {/* 3. Stops Timeline (Visual Design Upgrade) */}
          <div>
            <h3 className="font-bold text-xl text-gray-900 mb-5 flex items-center gap-2 px-2">
              <span className="w-1 h-6 bg-cali-orange rounded-full"></span>
              {t.mustVisit}
            </h3>
            <div className="space-y-4">
              {day.mainStops.map((stop, idx) => (
                <div key={idx} className="group bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 flex gap-4 relative overflow-hidden">
                  
                  {/* Map Link Wrapper */}
                  <a 
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(stop.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-4 right-4 text-gray-300 hover:text-cali-orange transition-colors z-10"
                  >
                     <MapPin size={20} />
                  </a>

                  {/* Number Badge */}
                  <div className="flex flex-col items-center gap-1 shrink-0">
                     <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-900 text-white font-serif font-bold text-sm">
                       {idx + 1}
                     </span>
                     <div className="w-0.5 h-full bg-gray-100 rounded-full group-last:hidden mt-2"></div>
                  </div>
                  
                  <div className="flex-1 pr-6">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <h4 className="font-bold text-lg text-gray-800">{stop.name}</h4>
                      {stop.isInstaWorthy && (
                        <span className="px-2 py-0.5 bg-pink-50 text-pink-600 text-[10px] font-bold uppercase rounded-md flex items-center gap-1">
                          <Camera size={12} /> {language === 'zh' ? '出片' : 'Photo Op'}
                        </span>
                      )}
                      <span className="px-2 py-0.5 bg-green-50 text-green-700 text-[10px] font-bold uppercase rounded-md flex items-center gap-1">
                          <Ticket size={12} /> {stop.ticketInfo}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm mb-3 leading-relaxed">{stop.description}</p>
                    
                    {/* Photo Tip Box */}
                    <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-3 rounded-xl border border-purple-100 flex gap-3">
                       <div className="bg-white p-1.5 rounded-lg shadow-sm h-fit text-purple-500 shrink-0">
                          <Sparkles size={16} />
                       </div>
                       <div>
                         <span className="text-xs font-bold text-purple-800 block mb-0.5">{t.photoTip}</span>
                         <p className="text-xs text-purple-900/80">{stop.photoTip}</p>
                       </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 4. AI Gemini Widget */}
          <div className="relative overflow-hidden rounded-3xl bg-gray-900 text-white shadow-xl">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500 rounded-full blur-[100px] opacity-30 -mr-20 -mt-20"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-cali-orange rounded-full blur-[100px] opacity-20 -ml-20 -mb-20"></div>
            
            <div className="relative z-10 p-6 md:p-8">
              <div className="flex items-center gap-2 mb-6">
                <div className="p-2 bg-white/10 backdrop-blur rounded-lg">
                   <Sparkles className="text-yellow-300" size={20} />
                </div>
                <h3 className="font-bold text-xl">Gemini {language === 'zh' ? '智能向导' : 'AI Guide'}</h3>
                <span className="text-[10px] bg-indigo-600 px-2 py-0.5 rounded-full ml-auto animate-pulse">AI Generating...</span>
              </div>

              {loading ? (
                <div className="h-40 flex flex-col items-center justify-center text-white/50 space-y-3">
                   <div className="w-8 h-8 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                   <p className="text-sm">{language === 'zh' ? '正在分析穿搭与天气...' : 'Analyzing vibes & weather...'}</p>
                </div>
              ) : insight ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* OOTD Card */}
                  <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10 hover:bg-white/20 transition-colors">
                     <div className="flex items-center gap-2 text-pink-300 font-bold text-xs mb-2 uppercase tracking-wider">
                        <Shirt size={14} /> OOTD
                     </div>
                     <p className="text-sm text-gray-100 leading-relaxed">{insight.ootd}</p>
                  </div>

                  {/* Hidden Gem Card */}
                  <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10 hover:bg-white/20 transition-colors">
                     <div className="flex items-center gap-2 text-emerald-300 font-bold text-xs mb-2 uppercase tracking-wider">
                        <PartyPopper size={14} /> {language === 'zh' ? '宝藏体验' : 'Hidden Gem'}
                     </div>
                     <p className="text-sm text-gray-100 leading-relaxed">{insight.hiddenGem}</p>
                  </div>
                  
                  {/* Photo Advice */}
                  <div className="md:col-span-2 bg-white/5 backdrop-blur-md p-4 rounded-2xl border border-white/5 flex items-start gap-3">
                      <Camera size={16} className="text-blue-300 shrink-0 mt-0.5" />
                      <p className="text-sm text-gray-200">
                        <span className="text-blue-300 font-bold">{language === 'zh' ? '专业建议' : 'Pro Tip'}: </span> 
                        {insight.photographyAdvice}
                      </p>
                  </div>

                  {/* Hashtags */}
                  <div className="md:col-span-2 flex flex-wrap gap-2 pt-2">
                     {insight.hashtags.map((tag, i) => (
                       <span key={i} className="text-xs font-medium text-white/70 hover:text-white cursor-pointer transition-colors">
                         {tag}
                       </span>
                     ))}
                  </div>
                </div>
              ) : (
                <div className="text-white/50 text-sm">{language === 'zh' ? '加载失败，请重试' : 'Failed to load, please retry'}</div>
              )}
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN (Utilities & Hotels) */}
        <div className="lg:col-span-4 space-y-6">
           
           <h3 className="font-bold text-lg text-gray-900 flex items-center gap-2">
              <span className="w-1 h-5 bg-gray-900 rounded-full"></span>
              {t.hotels}
           </h3>

           {/* Scrollable Hotel Cards */}
           <div className="flex flex-col gap-4">
             {day.hotels.map((hotel, index) => (
               <a 
                 key={index}
                 href={hotel.bookingUrl}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="group block"
               >
                 <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 relative">
                    <div className="h-32 overflow-hidden relative">
                       <img 
                         src={`https://picsum.photos/seed/${hotel.name + 'hotel'}/600/400`} 
                         className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                         alt="Hotel" 
                       />
                       <div className="absolute top-2 right-2 flex gap-1">
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded backdrop-blur-md text-white ${
                            hotel.category === 'Luxury' ? 'bg-black/70' : 
                            hotel.category === 'Comfort' ? 'bg-blue-600/70' : 'bg-green-600/70'
                          }`}>
                            {hotel.category === 'Luxury' ? t.luxury : hotel.category === 'Comfort' ? t.comfort : t.budget}
                          </span>
                       </div>
                    </div>
                    <div className="p-4">
                       <div className="flex justify-between items-start mb-1">
                          <h4 className="font-bold text-base text-gray-900 leading-tight w-3/4 group-hover:text-cali-orange transition-colors">
                            {hotel.name}
                          </h4>
                          <div className="flex items-center gap-1 text-xs font-bold text-yellow-600 bg-yellow-50 px-1.5 py-0.5 rounded">
                              <Star size={10} fill="currentColor" />
                              {hotel.rating}
                          </div>
                       </div>
                       <p className="text-xs text-gray-500 mb-3 line-clamp-2">{hotel.description}</p>
                       
                       <div className="flex items-center justify-between border-t border-gray-50 pt-2 mt-2">
                          <span className="text-sm font-bold text-gray-900">{hotel.priceRange}</span>
                          <span className="flex items-center gap-1 text-[10px] font-bold text-gray-400 group-hover:text-gray-900 transition-colors">
                             {t.details} <ArrowRight size={10} />
                          </span>
                       </div>
                    </div>
                 </div>
               </a>
             ))}
           </div>

           {/* Interactive Map Link */}
           <a 
             href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(day.mapQuery)}`}
             target="_blank"
             rel="noopener noreferrer"
             className="block group mt-6"
           >
             <div className="bg-blue-50 rounded-3xl border border-blue-100 p-1 hover:shadow-md transition-all duration-300">
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-blue-100">
                   {/* Decorative Map Background */}
                   <div className="absolute inset-0 bg-[url('https://assets.website-files.com/5e832e12eb7ca02ee9064d42/5f7db426b676b95755fb2844_Group%20805.jpg')] bg-cover bg-center opacity-50 grayscale group-hover:grayscale-0 transition-all duration-500"></div>
                   
                   <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10">
                      <div className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-blue-600 mb-3 group-hover:scale-110 transition-transform">
                         <MapPin size={24} fill="currentColor" />
                      </div>
                      <h4 className="font-bold text-gray-900 mb-1">{t.map}</h4>
                      <p className="text-xs text-gray-600 mb-3">{day.mapQuery}</p>
                      <div className="flex items-center gap-1 text-[10px] font-bold text-blue-600 bg-blue-100/50 px-3 py-1.5 rounded-full">
                         <ExternalLink size={10} />
                         Google Maps
                      </div>
                   </div>
                </div>
             </div>
           </a>
        </div>

      </div>
    </div>
  );
};

export default DetailView;
