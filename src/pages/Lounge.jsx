import { useState } from 'react';
import { Play, Pause, SkipForward, SkipBack, MessageSquare, Users, Maximize, Volume2, MonitorPlay, Heart, Repeat, Shuffle, ListMusic } from 'lucide-react';

const Lounge = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(true);

  return (
    <div className="max-w-6xl mx-auto h-full flex flex-col gap-6">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold mb-2 flex items-center gap-3">
            <MonitorPlay className="text-primary" size={32} /> Entertainment Lounge
          </h1>
          <p className="text-gray-400">Sync watching and music streaming.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 flex-1">
        {/* Main Sync Video Area */}
        <div className="lg:col-span-3 flex flex-col gap-6">
          <div className="glass-panel p-2 flex-1 rounded-2xl overflow-hidden relative group min-h-[350px]">
            {/* Mock Video Player */}
            <div className="absolute inset-2 rounded-xl bg-gradient-to-br from-gray-900 to-black overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center opacity-40"></div>
              <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center cursor-pointer hover:bg-white/20 transition-all border border-white/20">
                <Play className="text-white ml-2" size={32} />
              </div>
              
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                <span className="text-xs font-semibold text-white">LIVE SYNC (6 Watching)</span>
              </div>
            </div>
          </div>

          {/* Spotify-style Music Player */}
          <div className="bg-[#121212] rounded-xl p-4 flex flex-col md:flex-row items-center justify-between border border-white/5 shadow-2xl relative overflow-hidden">
            {/* Green accent glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#1DB954] rounded-full blur-[100px] opacity-10 pointer-events-none"></div>
            
            {/* Left: Album Art & Info */}
            <div className="flex items-center gap-4 w-full md:w-1/3 mb-4 md:mb-0 z-10">
              <img 
                src="https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" 
                alt="Album Art" 
                className="w-16 h-16 rounded-md shadow-lg"
              />
              <div>
                <h4 className="text-white font-bold text-sm hover:underline cursor-pointer">Midnight City</h4>
                <p className="text-xs text-gray-400 hover:underline cursor-pointer">M83 • Family Playlist</p>
              </div>
              <Heart size={18} className="text-[#1DB954] ml-2 cursor-pointer" fill="#1DB954" />
            </div>

            {/* Center: Controls */}
            <div className="flex flex-col items-center w-full md:w-1/3 z-10">
              <div className="flex items-center gap-6 mb-2">
                <Shuffle size={18} className="text-gray-400 hover:text-white cursor-pointer" />
                <SkipBack size={20} className="text-gray-400 hover:text-white cursor-pointer" />
                <button 
                  onClick={() => setIsMusicPlaying(!isMusicPlaying)}
                  className="w-9 h-9 rounded-full bg-white text-black flex items-center justify-center hover:scale-105 transition-transform"
                >
                  {isMusicPlaying ? <Pause size={18} /> : <Play size={18} className="ml-1" />}
                </button>
                <SkipForward size={20} className="text-gray-400 hover:text-white cursor-pointer" />
                <Repeat size={18} className="text-gray-400 hover:text-white cursor-pointer" />
              </div>
              <div className="flex items-center gap-2 w-full max-w-md text-xs text-gray-400 font-medium">
                <span>1:24</span>
                <div className="flex-1 bg-white/20 h-1 rounded-full relative group cursor-pointer">
                  <div className="absolute left-0 top-0 bottom-0 w-1/3 bg-white group-hover:bg-[#1DB954] rounded-full"></div>
                </div>
                <span>4:03</span>
              </div>
            </div>

            {/* Right: Volume & Extra */}
            <div className="hidden md:flex items-center justify-end gap-4 w-1/3 z-10">
              <ListMusic size={18} className="text-gray-400 hover:text-white cursor-pointer" />
              <div className="flex items-center gap-2 w-24">
                <Volume2 size={18} className="text-gray-400" />
                <div className="flex-1 bg-white/20 h-1 rounded-full relative group cursor-pointer">
                  <div className="absolute left-0 top-0 bottom-0 w-2/3 bg-white group-hover:bg-[#1DB954] rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sync Chat */}
        <div className="glass-panel border-l border-white/10 flex flex-col h-[500px] lg:h-auto">
          <div className="p-4 border-b border-white/10 flex items-center justify-between bg-surfaceHighlight/50">
            <h3 className="font-semibold text-white flex items-center gap-2">
              <MessageSquare size={16} /> Watch Party Chat
            </h3>
            <span className="text-xs px-2 py-1 bg-primary/20 text-primary rounded-full">6 Online</span>
          </div>
          
          <div className="flex-1 p-4 overflow-y-auto space-y-4">
            <div className="text-center">
              <span className="text-xs text-gray-500">Alex started the watch party</span>
            </div>
            <div className="flex gap-3 flex-row-reverse">
              <div className="w-8 h-8 rounded-full bg-purple-500 shrink-0"></div>
              <div className="text-right">
                <p className="text-xs text-gray-400 mb-1">Alex (You) <span className="text-gray-600">Just now</span></p>
                <div className="bg-primary/80 p-2 rounded-xl rounded-tr-none text-sm text-white">
                  I'm ready! Let's hit play!
                </div>
              </div>
            </div>
          </div>
          
          <div className="p-4 border-t border-white/10">
            <input 
              type="text" 
              placeholder="Type a message..." 
              className="w-full bg-surface border border-white/10 rounded-full px-4 py-2 text-sm text-white focus:outline-none focus:border-primary/50"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lounge;
