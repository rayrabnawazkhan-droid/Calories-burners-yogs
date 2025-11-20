import React from 'react';
import { Home, Activity, Wand2, User } from 'lucide-react';
import { View } from '../types';

interface BottomNavProps {
  currentView: View;
  onChangeView: (view: View) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ currentView, onChangeView }) => {
  const navItems = [
    { view: View.HOME, icon: Home, label: 'Home' },
    { view: View.SESSIONS, icon: Activity, label: 'Yoga' },
    { view: View.AI_STUDIO, icon: Wand2, label: 'AI Edit' },
    { view: View.PROFILE, icon: User, label: 'Profile' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 pb-6 pt-2 px-6 rounded-t-2xl shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] z-50 max-w-md mx-auto">
      <div className="flex justify-between items-center">
        {navItems.map((item) => (
          <button
            key={item.view}
            onClick={() => onChangeView(item.view)}
            className={`flex flex-col items-center space-y-1 transition-colors duration-200 ${
              currentView === item.view ? 'text-teal-600' : 'text-gray-400 hover:text-gray-600'
            }`}
          >
            <item.icon size={24} strokeWidth={currentView === item.view ? 2.5 : 2} />
            <span className="text-xs font-medium">{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};