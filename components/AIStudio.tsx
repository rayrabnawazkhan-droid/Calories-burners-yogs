import React, { useState, useRef } from 'react';
import { Upload, Wand2, X, Download, Image as ImageIcon, Sparkles, Loader2, Gift } from 'lucide-react';
import { editImageWithGemini } from '../services/geminiService';

export const AIStudio: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);
  const [resultImage, setResultImage] = useState<string | null>(null);
  const [prompt, setPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // New Monetag Direct Link
  const AD_LINK_2 = "https://otieu.com/4/7312497";

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setImage(base64String);
        setResultImage(null); // Reset result on new upload
        setError(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleGenerate = async () => {
    if (!image || !prompt.trim()) return;

    setIsLoading(true);
    setError(null);

    try {
      // Assuming JPEG for simplicity, but could extract from base64 header
      const generated = await editImageWithGemini(image, prompt);
      setResultImage(generated);
    } catch (err: any) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const handleAdClick = () => {
    window.open(AD_LINK_2, "_blank");
  };

  return (
    <div className="pb-24">
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6">
        <div className="flex items-center space-x-3 mb-4">
          <div className="p-2 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-lg">
            <Wand2 className="text-white" size={20} />
          </div>
          <div>
            <h2 className="text-lg font-bold text-gray-800">AI Yoga Studio</h2>
            <p className="text-xs text-gray-500">Edit your poses with magic</p>
          </div>
        </div>

        <div className="space-y-4">
          {/* Image Preview Area */}
          <div className="relative aspect-[4/3] bg-gray-50 rounded-xl border-2 border-dashed border-gray-200 overflow-hidden flex flex-col items-center justify-center">
            {resultImage ? (
              <img src={resultImage} alt="AI Generated" className="w-full h-full object-cover" />
            ) : image ? (
              <img src={image} alt="Original" className="w-full h-full object-cover opacity-90" />
            ) : (
              <div className="text-center p-4 cursor-pointer" onClick={triggerFileInput}>
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3 text-gray-400">
                  <ImageIcon size={24} />
                </div>
                <p className="text-sm font-medium text-gray-600">Upload a photo</p>
                <p className="text-xs text-gray-400 mt-1">Tap to browse gallery</p>
              </div>
            )}

            {/* Loading Overlay */}
            {isLoading && (
              <div className="absolute inset-0 bg-white/80 backdrop-blur-sm flex flex-col items-center justify-center z-10">
                <Loader2 className="text-violet-600 animate-spin mb-2" size={32} />
                <p className="text-sm font-semibold text-violet-800">Gemini is thinking...</p>
                <p className="text-xs text-violet-600 mt-1">Applying magic to your photo</p>
              </div>
            )}

            {/* Clear Button */}
            {(image || resultImage) && !isLoading && (
              <button 
                onClick={() => { setImage(null); setResultImage(null); setPrompt(''); }}
                className="absolute top-2 right-2 bg-black/50 hover:bg-black/70 text-white p-1.5 rounded-full transition-colors"
              >
                <X size={16} />
              </button>
            )}
          </div>
          
          <input 
            type="file" 
            ref={fileInputRef} 
            className="hidden" 
            accept="image/*" 
            onChange={handleFileChange} 
          />

          {/* Controls */}
          <div className="space-y-3">
            <div className="relative">
              <input
                type="text"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="e.g. Add a sunset background, make it retro..."
                className="w-full pl-4 pr-10 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-violet-500 focus:ring-2 focus:ring-violet-100 outline-none text-sm transition-all"
                disabled={isLoading}
              />
              <Sparkles className="absolute right-3 top-3 text-violet-400" size={18} />
            </div>

            <button
              onClick={handleGenerate}
              disabled={!image || !prompt.trim() || isLoading}
              className={`w-full py-3.5 rounded-xl font-semibold text-white flex items-center justify-center space-x-2 shadow-lg shadow-violet-200 transition-all transform active:scale-95 ${
                !image || !prompt.trim() || isLoading
                  ? 'bg-gray-300 cursor-not-allowed shadow-none'
                  : 'bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-700 hover:to-fuchsia-700'
              }`}
            >
              {isLoading ? (
                <span>Processing...</span>
              ) : (
                <>
                  <Wand2 size={18} />
                  <span>Generate Magic</span>
                </>
              )}
            </button>

            {error && (
               <div className="p-3 bg-red-50 border border-red-100 rounded-xl text-red-600 text-xs text-center">
                 {error}
               </div>
            )}

            {resultImage && (
              <a 
                href={resultImage} 
                download="zenburn-edited.png"
                className="block w-full text-center py-3 text-violet-600 font-medium text-sm hover:bg-violet-50 rounded-xl transition-colors"
              >
                Download Image
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Monetag Ad Banner */}
      <div 
        onClick={handleAdClick}
        className="mb-6 mx-1 bg-gradient-to-br from-pink-50 to-purple-50 border border-purple-100 rounded-xl p-4 flex items-center justify-between cursor-pointer hover:shadow-md transition-shadow"
      >
         <div className="flex items-center space-x-3">
            <div className="p-2 bg-purple-100 rounded-full">
                <Gift size={20} className="text-purple-600" />
            </div>
            <div>
                <h3 className="text-sm font-bold text-purple-900">Support Free AI Tools</h3>
                <p className="text-xs text-purple-600">Tap here to check our partner offers</p>
            </div>
         </div>
         <div className="bg-white px-3 py-1 rounded-full text-xs font-bold text-purple-600 shadow-sm">
            Open
         </div>
      </div>

      <div className="px-4">
        <h3 className="text-sm font-bold text-gray-500 mb-3 uppercase tracking-wider">Inspiration</h3>
        <div className="flex space-x-3 overflow-x-auto no-scrollbar pb-2">
            {['Make it a sketch', 'Add fire aura', 'Cyberpunk style', 'Remove background'].map((preset) => (
                <button 
                    key={preset}
                    onClick={() => setPrompt(preset)}
                    className="whitespace-nowrap px-4 py-2 bg-white border border-gray-200 rounded-full text-xs font-medium text-gray-600 hover:border-violet-300 hover:text-violet-600 transition-colors"
                >
                    {preset}
                </button>
            ))}
        </div>
      </div>
    </div>
  );
};