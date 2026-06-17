import { useState } from 'react';
import { Play, Star, Clock, ChevronRight, Heart, MessageSquare, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const categories = ['🔥 Trending', '🎬 Movies', '📺 Series', '🎭 Serials', '🎵 Song Videos', '🌎 International', '👶 Kids'];

const contents = [
  { id: 1, title: 'Vikram',       type: 'Movie',     rating: 8.4, lang: 'Tamil',   img: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=300&q=70', year: 2022 },
  { id: 2, title: 'Stranger Things',   type: 'Series',    rating: 8.7, lang: 'English', img: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=300&q=70', year: 2022 },
  { id: 3, title: 'Pushpa',            type: 'Movie',     rating: 7.6, lang: 'Telugu',  img: 'https://images.unsplash.com/photo-1512070679279-8988d32161be?w=300&q=70', year: 2021 },
  { id: 4, title: 'Money Heist',       type: 'Series',    rating: 8.2, lang: 'Spanish', img: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?w=300&q=70', year: 2021 },
  { id: 5, title: 'KGF Chapter 2',     type: 'Movie',     rating: 8.1, lang: 'Kannada', img: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=300&q=70', year: 2022 },
  { id: 6, title: 'The Crown',         type: 'Series',    rating: 8.5, lang: 'English', img: 'https://images.unsplash.com/photo-1594909122845-11baa439b7bf?w=300&q=70', year: 2021 },
  { id: 7, title: 'Enthiran',          type: 'Movie',     rating: 7.1, lang: 'Tamil',   img: 'https://images.unsplash.com/photo-1535016120720-40c646be5580?w=300&q=70', year: 2010 },
  { id: 8, title: 'Breaking Bad',      type: 'Series',    rating: 9.5, lang: 'English', img: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=300&q=70', year: 2008 },
];

const watchPartyMembers = [
  { name: 'Sarah', color: '#74007A' },
  { name: 'Leo', color: '#74007A' },
  { name: 'Mia', color: '#16a34a' },
];

export default function Theatre() {
  const [activeCategory, setActiveCategory] = useState('🔥 Trending');
  const [watchPartyActive, setWatchPartyActive] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pt-16" style={{ background: '#0a0a0f' }}>

      {/* Featured Hero */}
      <div className="relative h-[70vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1400&q=80"
          alt="Featured"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, #0a0a0f 0%, rgba(10,10,15,0.5) 50%, rgba(10,10,15,0.2) 100%)' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(10,10,15,0.9) 0%, transparent 60%)' }} />

        <div className="absolute bottom-16 left-0 container-page">
          <div className="max-w-md">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-bold px-2 py-1 rounded" style={{ background: '#dc2626' }}>N</span>
              <span className="text-white/80 text-sm font-medium">Now Trending</span>
            </div>
            <h1 className="text-5xl font-black text-white mb-4">Breaking<br />Bad</h1>
            <div className="flex items-center gap-4 mb-6">
              <span className="flex items-center gap-1 text-sm text-green-400 font-bold">
                <Star size={14} fill="currentColor" /> 9.5
              </span>
              <span className="text-white/60 text-sm">2008–2013</span>
              <span className="border border-white/30 text-white/60 text-xs px-2 py-0.5 rounded">18+</span>
            </div>
            <p className="text-white/70 text-sm mb-8 leading-relaxed max-w-sm">
              A high school chemistry teacher turned methamphetamine manufacturer partners with a former student to secure his family's future.
            </p>
            <div className="flex gap-3">
              <button className="flex items-center gap-2 px-8 py-3 rounded-xl font-bold text-black transition-all hover:scale-105"
                style={{ background: '#fff' }}>
                <Play size={20} fill="black" /> Play
              </button>
              <button
                onClick={() => setWatchPartyActive(!watchPartyActive)}
                className="flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white transition-all"
                style={{ background: 'rgba(116,0,122,0.8)', boxShadow: watchPartyActive ? '0 0 24px rgba(116,0,122,0.8)' : 'none' }}
              >
                <Users size={18} /> {watchPartyActive ? '🔴 Watch Party Live' : 'Start Watch Party'}
              </button>
            </div>
            {watchPartyActive && (
              <div className="flex items-center gap-3 mt-4 animate-fade-in">
                <div className="flex">
                  {watchPartyMembers.map((m, i) => (
                    <div key={m.name} className="w-8 h-8 rounded-full border-2 border-black flex items-center justify-center text-xs font-bold text-white"
                      style={{ background: m.color, marginLeft: i !== 0 ? '-8px' : '0' }}>
                      {m.name[0]}
                    </div>
                  ))}
                </div>
                <span className="text-white/70 text-sm">Sarah, Leo, Mia watching with you!</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="container-page py-4">
        <div className="flex gap-2 overflow-x-auto pb-2">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="shrink-0 px-4 py-2 rounded-full text-sm font-semibold transition-all"
              style={{
                background: activeCategory === cat ? '#74007A' : 'rgba(255,255,255,0.05)',
                color: activeCategory === cat ? '#fff' : 'rgba(255,255,255,0.6)',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Content Grid */}
      <div className="container-page pb-16">
        <h2 className="text-xl font-bold text-white mb-5">Trending Now</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {contents.map(item => (
            <div key={item.id} className="group cursor-pointer rounded-xl overflow-hidden relative" style={{ border: '1px solid rgba(255,255,255,0.06)' }}>
              <img src={item.img} alt={item.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              {/* Hover play */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center">
                  <Play size={18} className="text-black ml-0.5" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <p className="font-bold text-sm text-white truncate">{item.title}</p>
                <div className="flex items-center justify-between mt-1">
                  <span className="text-xs text-white/50">{item.lang} • {item.type}</span>
                  <span className="text-xs text-yellow-400 flex items-center gap-1">
                    <Star size={10} fill="currentColor" /> {item.rating}
                  </span>
                </div>
              </div>
              {/* Top badge */}
              <div className="absolute top-2 right-2 badge" style={{ background: 'rgba(116,0,122,0.8)', color: '#e9d5ff', fontSize: '9px' }}>
                {item.type}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
