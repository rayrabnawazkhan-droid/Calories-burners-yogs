import React from 'react';
import { UserProfile } from '../types';
import { LogOut, Settings, User, Bell, Shield, ChevronRight, Heart } from 'lucide-react';

interface ProfileProps {
  user: UserProfile;
  onLogout: () => void;
}

export const Profile: React.FC<ProfileProps> = ({ user, onLogout }) => {
  const menuItems = [
    { icon: User, label: 'Personal Information' },
    { icon: Bell, label: 'Notifications' },
    { icon: Shield, label: 'Privacy & Security' },
    { icon: Settings, label: 'App Settings' },
  ];

  // Monetag Direct Link
  const MONETAG_DIRECT_LINK: string = "https://otieu.com/4/6625912"; 

  const handleSupportClick = () => {
      if (MONETAG_DIRECT_LINK && MONETAG_DIRECT_LINK !== "#") {
          window.open(MONETAG_DIRECT_LINK, '_blank');
      } else {
          alert("Monetag Direct Link not configured yet.");
      }
  };

  return (
    <div className="pb-24">
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6 relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-r from-teal-500 to-blue-600 opacity-10"></div>
         
         <div className="relative flex flex-col items-center">
            <div className="w-24 h-24 rounded-full p-1 bg-white shadow-lg mb-3 relative">
                 <img 
                    src={user.avatar || 'https://via.placeholder.com/150'} 
                    alt={user.name} 
                    className="w-full h-full rounded-full object-cover"
                 />
                 <div className="absolute bottom-1 right-1 w-5 h-5 bg-green-500 border-2 border-white rounded-full"></div>
            </div>
            <h2 className="text-xl font-bold text-gray-900">{user.name}</h2>
            <p className="text-sm text-gray-500">{user.email}</p>
            
            <div className="flex space-x-4 mt-6 w-full justify-center">
                <div className="text-center px-4 py-2 bg-orange-50 rounded-xl">
                    <p className="text-lg font-bold text-orange-600">12</p>
                    <p className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">Workouts</p>
                </div>
                <div className="text-center px-4 py-2 bg-teal-50 rounded-xl">
                    <p className="text-lg font-bold text-teal-600">3.2k</p>
                    <p className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">Calories</p>
                </div>
            </div>
         </div>
      </div>

      {/* Monetag Direct Link / Support Button */}
      <div className="mb-6 px-1">
          <button 
            onClick={handleSupportClick}
            className="w-full bg-gradient-to-r from-pink-500 to-rose-500 text-white p-4 rounded-2xl shadow-lg shadow-rose-200 flex items-center justify-between group transition-transform hover:scale-[1.02]"
          >
              <div className="flex items-center space-x-3">
                  <div className="p-2 bg-white/20 rounded-lg">
                    <Heart className="text-white fill-white" size={20} />
                  </div>
                  <div className="text-left">
                    <p className="font-bold text-sm">Support App Development</p>
                    <p className="text-xs text-rose-100">Watch a short ad to help us</p>
                  </div>
              </div>
              <ChevronRight className="text-white/80 group-hover:translate-x-1 transition-transform" />
          </button>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
         {menuItems.map((item, index) => (
             <button 
                key={index}
                className="w-full px-5 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors border-b border-gray-50 last:border-none"
             >
                 <div className="flex items-center space-x-3 text-gray-700">
                     <item.icon size={20} className="text-gray-400" />
                     <span className="font-medium text-sm">{item.label}</span>
                 </div>
                 <ChevronRight size={16} className="text-gray-300" />
             </button>
         ))}
      </div>

      <div className="mt-6">
          <button 
            onClick={onLogout}
            className="w-full bg-red-50 text-red-600 font-semibold py-4 rounded-xl flex items-center justify-center space-x-2 hover:bg-red-100 transition-colors"
          >
              <LogOut size={18} />
              <span>Log Out</span>
          </button>
      </div>
    </div>
  );
};