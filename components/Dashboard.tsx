import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { DailyStat } from '../types';
import { Flame, Trophy, Calendar, ExternalLink } from 'lucide-react';

const data: DailyStat[] = [
  { day: 'Mon', calories: 320 },
  { day: 'Tue', calories: 450 },
  { day: 'Wed', calories: 280 },
  { day: 'Thu', calories: 500 },
  { day: 'Fri', calories: 390 },
  { day: 'Sat', calories: 600 },
  { day: 'Sun', calories: 420 },
];

export const Dashboard: React.FC = () => {
  
  const handleAdClick = () => {
      // Monetag Direct Link
      window.open("https://otieu.com/4/6625912", "_blank");
  };

  return (
    <div className="space-y-6 pb-24">
      {/* Header Stats */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl p-4 text-white shadow-lg">
          <div className="flex items-center space-x-2 mb-2">
            <div className="p-2 bg-white/20 rounded-full">
              <Flame size={20} className="text-white" />
            </div>
            <span className="text-sm font-medium opacity-90">Total Burned</span>
          </div>
          <h3 className="text-3xl font-bold">12,450</h3>
          <p className="text-xs opacity-80 mt-1">kcal this month</p>
        </div>

        <div className="bg-gradient-to-br from-teal-400 to-emerald-500 rounded-2xl p-4 text-white shadow-lg">
          <div className="flex items-center space-x-2 mb-2">
            <div className="p-2 bg-white/20 rounded-full">
              <Trophy size={20} className="text-white" />
            </div>
            <span className="text-sm font-medium opacity-90">Streak</span>
          </div>
          <h3 className="text-3xl font-bold">12 Days</h3>
          <p className="text-xs opacity-80 mt-1">Keep it up!</p>
        </div>
      </div>

      {/* Ad Placeholder / Sponsored Section */}
      <div 
        onClick={handleAdClick}
        className="bg-gray-900 rounded-2xl p-1 overflow-hidden shadow-md cursor-pointer relative group"
      >
        <div className="absolute top-2 right-2 bg-white/20 backdrop-blur-sm px-1.5 py-0.5 rounded text-[10px] text-white font-semibold uppercase tracking-wider z-10">
            Sponsored
        </div>
        <div className="bg-gray-800 rounded-xl p-4 flex items-center justify-between hover:bg-gray-750 transition-colors">
            <div className="flex flex-col">
                <span className="text-white font-bold text-sm">Premium Yoga Gear</span>
                <span className="text-gray-400 text-xs">Tap to see exclusive offers</span>
            </div>
            <ExternalLink className="text-teal-400" size={18} />
        </div>
      </div>

      {/* Chart */}
      <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-bold text-gray-800">Weekly Activity</h2>
          <div className="flex items-center text-gray-400 text-sm">
             <Calendar size={14} className="mr-1" />
             <span>Last 7 Days</span>
          </div>
        </div>
        <div className="h-48 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id="colorCalories" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#14b8a6" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#14b8a6" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
              <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#9ca3af'}} dy={10} />
              <YAxis hide />
              <Tooltip 
                contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                cursor={{ stroke: '#14b8a6', strokeWidth: 1 }}
              />
              <Area type="monotone" dataKey="calories" stroke="#0d9488" strokeWidth={3} fillOpacity={1} fill="url(#colorCalories)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recommendation */}
      <div className="bg-indigo-900 rounded-2xl p-6 text-white relative overflow-hidden shadow-xl">
        <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-indigo-700 rounded-full opacity-50 blur-xl"></div>
        <div className="relative z-10">
          <h3 className="text-xl font-bold mb-2">Morning Power Yoga</h3>
          <p className="text-indigo-200 text-sm mb-4">Start your day with energy. Boosts metabolism for 12 hours.</p>
          <button className="bg-white text-indigo-900 px-5 py-2 rounded-full font-semibold text-sm hover:bg-indigo-50 transition-colors">
            Start Session
          </button>
        </div>
      </div>
    </div>
  );
};