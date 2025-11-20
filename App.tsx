import React, { useState } from 'react';
import { View, UserProfile } from './types';
import { Dashboard } from './components/Dashboard';
import { BottomNav } from './components/BottomNav';
import { YogaSessions } from './components/YogaSessions';
import { AIStudio } from './components/AIStudio';
import { Auth } from './components/Auth';
import { Profile } from './components/Profile';
import { Menu, Bell } from 'lucide-react';

function App() {
  const [currentView, setCurrentView] = useState<View>(View.HOME);
  const [user, setUser] = useState<UserProfile | null>(null);

  const handleLogin = (loggedInUser: UserProfile) => {
    setUser(loggedInUser);
  };

  const handleLogout = () => {
    setUser(null);
    setCurrentView(View.HOME);
  };

  const renderContent = () => {
    switch (currentView) {
      case View.HOME:
        return <Dashboard />;
      case View.SESSIONS:
        return <YogaSessions />;
      case View.AI_STUDIO:
        return <AIStudio />;
      case View.PROFILE:
        if (user) {
            return <Profile user={user} onLogout={handleLogout} />;
        }
        return null;
      default:
        return <Dashboard />;
    }
  };

  // If not logged in, show Auth screen only
  if (!user) {
      return (
        <div className="min-h-screen bg-gray-100 flex justify-center">
            <div className="w-full max-w-md bg-gray-50 min-h-screen shadow-2xl relative overflow-hidden flex flex-col">
                <Auth onLogin={handleLogin} />
            </div>
        </div>
      );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center">
        {/* Mobile Container Simulator */}
        <div className="w-full max-w-md bg-gray-50 min-h-screen shadow-2xl relative overflow-hidden flex flex-col">
            
            {/* Top Header */}
            <header className="bg-white/80 backdrop-blur-md sticky top-0 z-40 px-6 py-4 flex justify-between items-center border-b border-gray-100">
                <div className="flex items-center space-x-3">
                   <button className="p-2 -ml-2 hover:bg-gray-100 rounded-full transition-colors">
                        <Menu size={24} className="text-gray-700" />
                   </button>
                   <div className="flex items-center space-x-2">
                        <img src="https://cdn-icons-png.flaticon.com/512/2647/2647625.png" className="w-8 h-8 object-contain" alt="App Logo" />
                        <h1 className="text-xl font-black tracking-tight flex items-center gap-1">
                            <span className="bg-gradient-to-r from-teal-500 to-blue-600 bg-clip-text text-transparent">Calories</span>
                            <span>🔥</span>
                            <span className="bg-gradient-to-r from-teal-500 to-blue-600 bg-clip-text text-transparent">Yoga</span>
                        </h1>
                   </div>
                </div>
                <div className="flex items-center space-x-2">
                    <button className="relative p-2 hover:bg-gray-100 rounded-full transition-colors">
                        <Bell size={20} className="text-gray-600" />
                        <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
                    </button>
                </div>
            </header>

            {/* Main Scrollable Content */}
            <main className="flex-1 overflow-y-auto p-6 scroll-smooth">
                {renderContent()}
            </main>

            {/* Bottom Navigation */}
            <BottomNav currentView={currentView} onChangeView={setCurrentView} />
            
        </div>
    </div>
  );
}

export default App;