import React, { useState } from 'react';
import { Mail, Lock, User, ArrowRight, Loader2 } from 'lucide-react';
import { UserProfile } from '../types';

interface AuthProps {
  onLogin: (user: UserProfile) => void;
}

export const Auth: React.FC<AuthProps> = ({ onLogin }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    // Simulate network request
    setTimeout(() => {
      setIsLoading(false);
      
      if (isLogin) {
        // Mock Login Logic
        if (formData.email && formData.password) {
           onLogin({
             name: 'Yoga Enthusiast',
             email: formData.email,
             avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d'
           });
        } else {
           setError('Please fill in all fields');
        }
      } else {
        // Mock Signup Logic
        if (formData.name && formData.email && formData.password) {
           onLogin({
             name: formData.name,
             email: formData.email,
             avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(formData.name)}&background=0D9488&color=fff`
           });
        } else {
           setError('Please fill in all fields');
        }
      }
    }, 1500);
  };

  return (
    <div className="flex flex-col h-full justify-center px-6 py-12 bg-white">
      <div className="mb-8 text-center">
        <div className="w-32 h-32 mx-auto mb-4 relative flex items-center justify-center">
           <img 
             src="https://cdn-icons-png.flaticon.com/512/2647/2647625.png" 
             alt="Yoga Logo" 
             className="w-full h-full object-contain relative z-10 drop-shadow-xl"
           />
        </div>
        
        <h2 className="text-2xl font-black tracking-tight mb-6 flex items-center justify-center gap-1">
           <span className="bg-gradient-to-r from-teal-500 to-blue-600 bg-clip-text text-transparent">Calories</span>
           <span>🔥</span>
           <span className="bg-gradient-to-r from-teal-500 to-blue-600 bg-clip-text text-transparent">Yoga</span>
        </h2>

        <h1 className="text-xl font-bold text-gray-900 mb-2">
          {isLogin ? 'Welcome Back' : 'Join the Movement'}
        </h1>
        <p className="text-gray-500 text-sm">
          {isLogin 
            ? 'Enter your details to access your yoga journey.' 
            : 'Start your fitness transformation today.'}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {!isLogin && (
          <div className="space-y-1">
            <label className="text-xs font-semibold text-gray-700 ml-1">Full Name</label>
            <div className="relative">
              <User className="absolute left-3 top-3.5 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="John Doe"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-100 outline-none transition-all bg-gray-50"
              />
            </div>
          </div>
        )}

        <div className="space-y-1">
          <label className="text-xs font-semibold text-gray-700 ml-1">Email Address</label>
          <div className="relative">
            <Mail className="absolute left-3 top-3.5 text-gray-400" size={18} />
            <input
              type="email"
              placeholder="hello@example.com"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-100 outline-none transition-all bg-gray-50"
            />
          </div>
        </div>

        <div className="space-y-1">
          <label className="text-xs font-semibold text-gray-700 ml-1">Password</label>
          <div className="relative">
            <Lock className="absolute left-3 top-3.5 text-gray-400" size={18} />
            <input
              type="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-100 outline-none transition-all bg-gray-50"
            />
          </div>
        </div>

        {error && (
            <p className="text-red-500 text-xs text-center bg-red-50 p-2 rounded-lg">{error}</p>
        )}

        <div className="pt-2">
            <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3.5 bg-gradient-to-r from-teal-600 to-blue-600 text-white rounded-xl font-bold shadow-lg shadow-teal-200 flex items-center justify-center space-x-2 hover:opacity-90 transition-opacity active:scale-[0.99]"
            >
            {isLoading ? (
                <Loader2 className="animate-spin" size={20} />
            ) : (
                <>
                <span>{isLogin ? 'Sign In' : 'Create Account'}</span>
                <ArrowRight size={18} />
                </>
            )}
            </button>
        </div>
      </form>

      <div className="mt-8 text-center">
        <p className="text-sm text-gray-500">
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <button 
            onClick={() => {
                setIsLogin(!isLogin); 
                setError(null); 
                setFormData({name: '', email: '', password: ''});
            }}
            className="font-bold text-teal-600 hover:text-teal-700"
          >
            {isLogin ? 'Sign Up' : 'Log In'}
          </button>
        </p>
      </div>

      <div className="mt-8">
        <div className="relative">
            <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-xs">
                <span className="px-2 bg-white text-gray-400 uppercase">Or continue with</span>
            </div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3">
            <button className="flex items-center justify-center px-4 py-2 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
               <svg className="h-5 w-5" viewBox="0 0 24 24">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                </svg>
            </button>
            <button className="flex items-center justify-center px-4 py-2 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
                <svg className="h-5 w-5 fill-current text-black" viewBox="0 0 24 24">
                    <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"/>
                </svg>
            </button>
        </div>
      </div>
    </div>
  );
};