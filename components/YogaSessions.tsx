import React, { useState } from 'react';
import { Play, Clock, Flame, X, Pause, Share2, ExternalLink, Star } from 'lucide-react';
import { YogaSession } from '../types';

const sessions: YogaSession[] = [
  {
    id: '1',
    title: 'Morning Sun Salutation',
    duration: '20 min',
    calories: 150,
    level: 'Beginner',
    image: 'https://picsum.photos/400/200?random=1',
  },
  {
    id: '2',
    title: 'Power Vinyasa Flow',
    duration: '45 min',
    calories: 400,
    level: 'Advanced',
    image: 'https://picsum.photos/400/200?random=2',
  },
  {
    id: '3',
    title: 'Core & Balance HIIT',
    duration: '30 min',
    calories: 320,
    level: 'Intermediate',
    image: 'https://picsum.photos/400/200?random=3',
  },
  {
    id: '4',
    title: 'Evening Restore',
    duration: '15 min',
    calories: 80,
    level: 'Beginner',
    image: 'https://picsum.photos/400/200?random=4',
  },
];

export const YogaSessions: React.FC = () => {
  const [selectedSession, setSelectedSession] = useState<YogaSession | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // New Monetag Direct Link
  const AD_LINK_2 = "https://otieu.com/4/7312497";

  const openSession = (session: YogaSession) => {
    setSelectedSession(session);
    setIsPlaying(true);
  };

  const closeSession = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedSession(null);
    setIsPlaying(false);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handleAdClick = () => {
    window.open(AD_LINK_2, "_blank");
  };

  return (
    <div className="space-y-4 pb-24">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Explore Workouts</h2>
      
      {sessions.map((session, index) => (
        <React.Fragment key={session.id}>
            {/* Render Session Card */}
            <div 
                onClick={() => openSession(session)}
                className="bg-white rounded-2xl p-3 shadow-sm border border-gray-100 flex space-x-4 items-center group cursor-pointer hover:shadow-md transition-all transform active:scale-[0.99]"
            >
            <div className="relative w-24 h-24 flex-shrink-0">
                <img 
                src={session.image} 
                alt={session.title} 
                className="w-full h-full object-cover rounded-xl"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 rounded-xl opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity">
                    <Play fill="white" className="text-white drop-shadow-md" size={20} />
                </div>
            </div>
            
            <div className="flex-1 py-1">
                <div className="flex justify-between items-start">
                <h3 className="font-bold text-gray-800 text-sm line-clamp-1">{session.title}</h3>
                <span className={`text-[10px] px-2 py-0.5 rounded-full font-semibold ${
                    session.level === 'Advanced' ? 'bg-red-100 text-red-600' :
                    session.level === 'Intermediate' ? 'bg-orange-100 text-orange-600' :
                    'bg-green-100 text-green-600'
                }`}>
                    {session.level}
                </span>
                </div>
                
                <div className="flex items-center space-x-4 mt-3 text-gray-500">
                <div className="flex items-center space-x-1">
                    <Clock size={12} />
                    <span className="text-xs">{session.duration}</span>
                </div>
                <div className="flex items-center space-x-1">
                    <Flame size={12} className="text-orange-500" />
                    <span className="text-xs">{session.calories} kcal</span>
                </div>
                </div>
            </div>
            </div>

            {/* Interleaved Ad Card after the 2nd item */}
            {index === 1 && (
                <div 
                    onClick={handleAdClick}
                    className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-4 shadow-md cursor-pointer relative overflow-hidden group"
                >
                    <div className="absolute top-0 right-0 bg-white/20 px-2 py-1 rounded-bl-lg">
                        <span className="text-[10px] text-white font-bold uppercase tracking-wide">Sponsored</span>
                    </div>
                    <div className="flex items-center space-x-4 relative z-10">
                        <div className="p-3 bg-white/20 rounded-full backdrop-blur-sm">
                            <Star fill="white" className="text-white" size={24} />
                        </div>
                        <div className="text-white">
                            <h3 className="font-bold text-sm">Exclusive Fitness Deals</h3>
                            <p className="text-xs opacity-90 mt-0.5">Tap to unlock premium offers</p>
                        </div>
                        <ExternalLink className="text-white/80 ml-auto" size={18} />
                    </div>
                </div>
            )}
        </React.Fragment>
      ))}

      {/* Full Screen Video Modal */}
      {selectedSession && (
        <div className="fixed inset-0 z-[60] bg-white flex flex-col animate-in slide-in-from-bottom-10 duration-300">
            {/* Video Player Area */}
            <div className="relative w-full bg-black aspect-[9/16] md:aspect-video flex-shrink-0">
                 {/* Simulated Video Background */}
                 <img 
                    src={selectedSession.image} 
                    className={`w-full h-full object-cover transition-opacity duration-700 ${isPlaying ? 'opacity-80' : 'opacity-40'}`} 
                    alt="video background"
                 />
                 
                 {/* Controls Overlay */}
                 <div className="absolute inset-0 flex flex-col justify-between p-4 safe-area-top">
                    <div className="flex justify-between items-start z-20">
                        <button 
                            onClick={closeSession} 
                            className="p-2 bg-black/30 backdrop-blur-md rounded-full text-white hover:bg-black/50 transition-colors"
                        >
                            <X size={24}/>
                        </button>
                        <button 
                            onClick={handleAdClick}
                            className="p-2 bg-black/30 backdrop-blur-md rounded-full text-white hover:bg-black/50 transition-colors"
                        >
                            <Share2 size={24}/>
                        </button>
                    </div>
                    
                    {/* Centered Play Button Indicator */}
                    {!isPlaying && (
                         <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <div className="p-6 rounded-full bg-white/20 backdrop-blur-md">
                                <Play size={48} fill="white" className="text-white translate-x-1" />
                            </div>
                        </div>
                    )}

                    {/* Bottom Controls */}
                    <div className="w-full space-y-3 pb-2 z-20">
                         <div className="w-full h-1.5 bg-white/30 rounded-full overflow-hidden cursor-pointer">
                            <div 
                                className={`h-full bg-teal-500 relative rounded-full ${isPlaying ? 'w-1/3 animate-pulse' : 'w-0'}`}
                            ></div>
                         </div>
                         <div className="flex justify-between text-white font-medium text-xs">
                            <span>{isPlaying ? '05:23' : '00:00'}</span>
                            <span>{selectedSession.duration}</span>
                         </div>
                         
                         <div className="flex justify-center items-center space-x-8 pt-2">
                             <button onClick={togglePlay} className="p-4 bg-white text-black rounded-full hover:scale-105 transition-transform">
                                 {isPlaying ? <Pause size={28} fill="currentColor" /> : <Play size={28} fill="currentColor" className="translate-x-1" />}
                             </button>
                         </div>
                    </div>
                    
                    {/* Gradient Overlay for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 pointer-events-none"></div>
                 </div>
            </div>

            {/* Video Info Body */}
            <div className="flex-1 bg-white relative -mt-6 rounded-t-3xl z-10 p-6 flex flex-col overflow-y-auto">
                <div className="w-12 h-1.5 bg-gray-200 rounded-full mx-auto mb-6 flex-shrink-0"></div>
                
                <div className="flex justify-between items-start mb-2">
                    <h2 className="text-2xl font-bold text-gray-900 leading-tight">{selectedSession.title}</h2>
                    <button className="text-teal-600 font-bold text-sm">Save</button>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                    <div className="flex items-center space-x-1.5 text-gray-600 bg-gray-100 px-3 py-1.5 rounded-full text-xs font-medium">
                        <Clock size={14} />
                        <span>{selectedSession.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1.5 text-orange-600 bg-orange-50 px-3 py-1.5 rounded-full text-xs font-medium">
                        <Flame size={14} />
                        <span>{selectedSession.calories} kcal</span>
                    </div>
                    <div className="text-xs font-bold px-3 py-1.5 rounded-full bg-teal-100 text-teal-700">
                        {selectedSession.level}
                    </div>
                </div>

                <div className="prose prose-sm text-gray-600 mb-8">
                    <h3 className="text-gray-900 font-bold text-sm mb-2">About this class</h3>
                    <p>
                        Join us for a transformative {selectedSession.duration} session focusing on {selectedSession.title.toLowerCase()}. 
                        This {selectedSession.level.toLowerCase()} level class is designed to burn calories while improving your flexibility and mental clarity.
                    </p>
                </div>

                <div className="mt-auto">
                    <h3 className="font-bold text-gray-800 mb-3">Up Next</h3>
                    <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl border border-gray-100 active:bg-gray-100">
                        <div className="w-16 h-16 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0 relative">
                            <img src="https://picsum.photos/100/100?random=9" className="w-full h-full object-cover" alt="next" />
                            <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                                <Play size={12} fill="white" className="text-white"/>
                            </div>
                        </div>
                        <div>
                            <p className="text-sm font-bold text-gray-800">Cooldown Stretch</p>
                            <p className="text-xs text-gray-500">5 min • 20 kcal</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      )}
    </div>
  );
};