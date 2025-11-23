import React, { useEffect, useRef, useState } from 'react';
import { ITINERARY_DATA_ZH, ITINERARY_DATA_EN, UI_TEXT } from '../constants';
import { Language, Spot } from '../types';
import { MapPin, ArrowRight, Navigation } from 'lucide-react';

// Declare Leaflet types since we are using it via CDN
declare global {
  interface Window {
    L: any;
  }
}

interface InteractiveMapProps {
  language: Language;
}

const InteractiveMap: React.FC<InteractiveMapProps> = ({ language }) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
  const markersRef = useRef<any[]>([]);
  const polylineRef = useRef<any>(null);
  
  const [activeDayId, setActiveDayId] = useState<number | null>(null); // null means "Show All"
  const [activeSpot, setActiveSpot] = useState<Spot | null>(null);

  const data = language === 'zh' ? ITINERARY_DATA_ZH : ITINERARY_DATA_EN;
  const t = UI_TEXT[language];

  // Helper to flatten spots based on selection
  const getVisibleSpots = () => {
    if (activeDayId) {
      const day = data.find(d => d.id === activeDayId);
      return day ? day.mainStops.map(s => ({ ...s, dayId: day.id, dayTitle: day.title })) : [];
    }
    return data.flatMap(d => d.mainStops.map(s => ({ ...s, dayId: d.id, dayTitle: d.title })));
  };

  // Initialize Map
  useEffect(() => {
    if (!mapContainerRef.current || mapInstanceRef.current) return;

    if (window.L) {
      const map = window.L.map(mapContainerRef.current, {
        zoomControl: false,
        attributionControl: false
      }).setView([35.5, -120.5], 7); // Center of CA coast

      // CartoDB Voyager Tile Layer (Clean, travel-friendly)
      window.L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 19
      }).addTo(map);

      // Add Zoom Control to top-right
      window.L.control.zoom({
        position: 'topright'
      }).addTo(map);

      mapInstanceRef.current = map;
    }
  }, []);

  // Update Markers & Route when filter changes
  useEffect(() => {
    if (!mapInstanceRef.current || !window.L) return;
    const map = mapInstanceRef.current;
    const L = window.L;

    // Clear existing
    markersRef.current.forEach(m => map.removeLayer(m));
    markersRef.current = [];
    if (polylineRef.current) map.removeLayer(polylineRef.current);

    const visibleSpots = getVisibleSpots();
    const latLngs = visibleSpots.map(s => [s.coordinates.lat, s.coordinates.lng]);

    // Draw Polyline (Route)
    if (latLngs.length > 1) {
      polylineRef.current = L.polyline(latLngs, {
        color: '#FF7844', // cali-orange
        weight: 4,
        opacity: 0.8,
        dashArray: '10, 10',
        lineCap: 'round'
      }).addTo(map);
    }

    // Add Markers
    visibleSpots.forEach((spot) => {
      const icon = L.divIcon({
        className: 'custom-div-icon',
        html: `
          <div class="photo-marker ${activeSpot?.name === spot.name ? 'active' : ''}">
            <img src="https://picsum.photos/seed/${spot.name}/100/100" />
            <div class="marker-label">${spot.name}</div>
          </div>
        `,
        iconSize: [40, 40],
        iconAnchor: [20, 46] // Center bottom
      });

      const marker = L.marker([spot.coordinates.lat, spot.coordinates.lng], { icon })
        .addTo(map)
        .on('click', () => {
          setActiveSpot(spot);
          map.flyTo([spot.coordinates.lat, spot.coordinates.lng], 14, { duration: 1.5 });
          
          // Scroll sidebar to this item
          const el = document.getElementById(`card-${spot.name}`);
          if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        });
      
      markersRef.current.push(marker);
    });

    // Fit Bounds if not focusing on a specific spot
    if (latLngs.length > 0 && !activeSpot) {
      map.fitBounds(L.latLngBounds(latLngs), { padding: [50, 50], maxZoom: 12 });
    }

  }, [activeDayId, language, activeSpot]); // Re-run when filter or language changes

  return (
    <div className="flex flex-col md:flex-row h-[calc(100vh-80px)] overflow-hidden relative">
      
      {/* 1. Map Container (Full width on mobile, flexible on desktop) */}
      <div className="flex-1 relative h-[60vh] md:h-full w-full z-0 bg-gray-100">
        <div ref={mapContainerRef} className="w-full h-full outline-none" />
        
        {/* Floating Day Selector on Map */}
        <div className="absolute top-4 left-4 z-[1000] flex flex-col gap-2 max-h-[80%] overflow-y-auto scrollbar-hide">
          <button 
            onClick={() => { setActiveDayId(null); setActiveSpot(null); }}
            className={`px-4 py-2 rounded-full text-sm font-bold shadow-lg transition-all ${
              activeDayId === null ? 'bg-gray-900 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            {language === 'zh' ? '全程总览' : 'Full Route'}
          </button>
          {data.map(day => (
            <button
              key={day.id}
              onClick={() => { setActiveDayId(day.id); setActiveSpot(null); }}
              className={`px-4 py-2 rounded-full text-xs font-bold shadow-lg transition-all whitespace-nowrap text-left flex items-center gap-2 ${
                activeDayId === day.id 
                ? 'bg-cali-orange text-white transform translate-x-2' 
                : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-[10px]">{day.id}</span>
              {day.date}
            </button>
          ))}
        </div>
      </div>

      {/* 2. Sidebar List (Below map on mobile, Right side on desktop) */}
      <div className="w-full md:w-96 bg-white border-l border-gray-200 h-full overflow-y-auto scrollbar-hide z-10 shadow-xl flex flex-col">
        <div className="p-4 border-b border-gray-100 bg-white/95 sticky top-0 backdrop-blur z-20">
          <h2 className="font-serif font-bold text-xl text-gray-900 flex items-center gap-2">
            <Navigation className="text-cali-orange" size={20} />
            {activeDayId 
              ? `${data.find(d => d.id === activeDayId)?.title}` 
              : (language === 'zh' ? '所有景点' : 'All Spots')
            }
          </h2>
          <p className="text-xs text-gray-400 mt-1">
            {getVisibleSpots().length} {language === 'zh' ? '个打卡点' : 'Spots'}
          </p>
        </div>

        <div className="p-4 space-y-4">
          {getVisibleSpots().map((spot, idx) => (
            <div 
              key={`${spot.name}-${idx}`}
              id={`card-${spot.name}`}
              onClick={() => {
                setActiveSpot(spot);
                if (mapInstanceRef.current) {
                   mapInstanceRef.current.flyTo([spot.coordinates.lat, spot.coordinates.lng], 14, { duration: 1.5 });
                }
              }}
              className={`
                group relative flex gap-3 p-3 rounded-xl border transition-all cursor-pointer
                ${activeSpot?.name === spot.name 
                  ? 'bg-orange-50 border-cali-orange shadow-md scale-[1.02]' 
                  : 'bg-white border-gray-100 hover:border-gray-300 hover:shadow-sm'
                }
              `}
            >
              <div className="w-20 h-20 shrink-0 rounded-lg overflow-hidden bg-gray-100 relative">
                <img 
                  src={`https://picsum.photos/seed/${spot.name}/200/200`} 
                  className="w-full h-full object-cover transition-transform group-hover:scale-110" 
                  alt={spot.name} 
                />
                <div className="absolute top-1 left-1 bg-black/50 text-white text-[9px] px-1.5 rounded-full backdrop-blur">
                  {spot.ticketInfo === 'Free' ? 'Free' : '$'}
                </div>
              </div>
              
              <div className="flex-1 min-w-0 flex flex-col justify-center">
                <h3 className="font-bold text-sm text-gray-900 truncate mb-1">{spot.name}</h3>
                <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed mb-2">
                  {spot.description}
                </p>
                <div className="flex items-center gap-2 mt-auto">
                   <span className="text-[10px] text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">
                     {(spot as any).dayTitle?.split(' ')[0] || `Day ${(spot as any).dayId}`}
                   </span>
                   {spot.isInstaWorthy && (
                     <span className="text-[10px] text-pink-600 bg-pink-50 px-2 py-0.5 rounded-full">
                       {language === 'zh' ? '出片' : 'Photo'}
                     </span>
                   )}
                </div>
              </div>

              {activeSpot?.name === spot.name && (
                <div className="absolute right-3 top-3 text-cali-orange animate-pulse">
                  <MapPin size={16} fill="currentColor" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InteractiveMap;