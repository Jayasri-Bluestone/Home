import { useState } from 'react';
import { Book, Headphones, Sun, Flame, BookOpen, Music } from 'lucide-react';
import { motion } from 'framer-motion';

const LibraryShrine = () => {
  const [activeTab, setActiveTab] = useState('library');

  return (
    <div className="max-w-6xl mx-auto py-4">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2 flex items-center gap-3">
            {activeTab === 'library' ? <Book className="text-blue-400" size={32} /> : <Sun className="text-amber-500" size={32} />}
            {activeTab === 'library' ? 'The Library' : 'The Shrine'}
          </h1>
          <p className="text-gray-400">
            {activeTab === 'library' ? 'Read books and listen to audiobooks.' : 'Your morning routine, pooja songs, and religious texts.'}
          </p>
        </div>
        
        <div className="flex bg-surface p-1 rounded-xl border border-white/10">
          <button 
            onClick={() => setActiveTab('library')}
            className={`px-6 py-2 rounded-lg font-medium transition-colors ${activeTab === 'library' ? 'bg-primary/30 text-white' : 'text-gray-400 hover:text-white'}`}
          >
            Library
          </button>
          <button 
            onClick={() => setActiveTab('shrine')}
            className={`px-6 py-2 rounded-lg font-medium transition-colors ${activeTab === 'shrine' ? 'bg-amber-500/30 text-amber-500' : 'text-gray-400 hover:text-white'}`}
          >
            Shrine
          </button>
        </div>
      </div>

      {activeTab === 'library' && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Headphones className="text-purple-400" size={20} /> Audiobooks
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {[1, 2, 3, 4, 5].map((item) => (
                <div key={item} className="group cursor-pointer">
                  <div className="aspect-square bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl mb-3 shadow-lg group-hover:scale-105 transition-transform border border-white/10 flex items-center justify-center">
                    <Headphones size={32} className="text-gray-600 group-hover:text-purple-400 transition-colors" />
                  </div>
                  <h4 className="text-sm font-semibold text-white">The Great Novel</h4>
                  <p className="text-xs text-gray-500">Author Name</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <BookOpen className="text-blue-400" size={20} /> E-Books
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {[1, 2, 3, 4, 5].map((item) => (
                <div key={item} className="group cursor-pointer">
                  <div className="aspect-[2/3] bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl mb-3 shadow-lg group-hover:scale-105 transition-transform border border-white/10 flex items-center justify-center">
                    <Book size={32} className="text-gray-600 group-hover:text-blue-400 transition-colors" />
                  </div>
                  <h4 className="text-sm font-semibold text-white">Classic Literature</h4>
                  <p className="text-xs text-gray-500">John Doe</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      )}

      {activeTab === 'shrine' && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
          <div className="glass-card p-8 bg-gradient-to-br from-amber-500/10 to-orange-500/10 border-amber-500/30 flex items-center justify-between">
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 rounded-full bg-amber-500/20 flex items-center justify-center border border-amber-500/50 shadow-[0_0_30px_rgba(245,158,11,0.3)]">
                <Flame className="text-amber-500" size={32} />
              </div>
              <div>
                <p className="text-amber-500 font-semibold mb-1">Morning Routine Active</p>
                <h2 className="text-2xl font-bold text-white mb-2">Suprabhatam & Meditation</h2>
                <p className="text-sm text-gray-400">Playing across: Owner's Room, Hall</p>
              </div>
            </div>
            <button className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-xl font-semibold shadow-[0_0_20px_rgba(245,158,11,0.4)] transition-all flex items-center gap-2">
              <Music size={18} /> Stop Routine
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-panel p-6 border-white/10">
              <h3 className="text-lg font-bold mb-4">Holy Texts</h3>
              <div className="space-y-3">
                {['Bhagavad Gita', 'Ramayana', 'Mahabharata'].map((book) => (
                  <div key={book} className="p-4 bg-surface rounded-xl border border-white/5 flex items-center justify-between cursor-pointer hover:bg-surfaceHighlight">
                    <div className="flex items-center gap-3">
                      <BookOpen className="text-amber-500" size={20} />
                      <span className="font-medium text-white">{book}</span>
                    </div>
                    <span className="text-xs text-gray-400 bg-black/40 px-2 py-1 rounded">Read</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="glass-panel p-6 border-white/10">
              <h3 className="text-lg font-bold mb-4">Devotional Playlists</h3>
              <div className="space-y-3">
                {['Morning Chants', 'Evening Aarti', 'Meditation Flute'].map((song) => (
                  <div key={song} className="p-4 bg-surface rounded-xl border border-white/5 flex items-center justify-between cursor-pointer hover:bg-surfaceHighlight">
                    <div className="flex items-center gap-3">
                      <Music className="text-blue-400" size={20} />
                      <span className="font-medium text-white">{song}</span>
                    </div>
                    <button className="text-xs text-white bg-primary/80 hover:bg-primary px-3 py-1 rounded">Play</button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default LibraryShrine;
