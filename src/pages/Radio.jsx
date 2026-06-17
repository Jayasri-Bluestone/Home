import { useState } from 'react';
import { Play, Pause, SkipForward, SkipBack, Heart, Repeat, Shuffle, Volume2, ListMusic, Search, MoreHorizontal } from 'lucide-react';

const genres = [
  { label: '🎵 All', key: 'all' },
  { label: '🎸 Pop', key: 'pop' },
  { label: '🎻 Classical', key: 'classical' },
  { label: '🙏 Devotional', key: 'devotional' },
  { label: '🎷 Jazz', key: 'jazz' },
  { label: '🥁 Hip Hop', key: 'hiphop' },
  { label: '🎤 Tamil', key: 'tamil' },
  { label: '🎶 Hindi', key: 'hindi' },
];

const playlists = [
  { id: 1, name: 'Morning Energy',    songs: 24, img: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&q=70', color: '#f59e0b' },
  { id: 2, name: 'Late Night Vibes',  songs: 18, img: 'https://images.unsplash.com/photo-1511300636408-a63a89df3482?w=300&q=70', color: '#74007A' },
  { id: 3, name: 'Devotional Bliss',  songs: 32, img: 'https://images.unsplash.com/photo-1504509546545-e000b4a62425?w=300&q=70', color: '#f43f5e' },
  { id: 4, name: 'Tamil Hits 2026',   songs: 45, img: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&q=70', color: '#16a34a' },
  { id: 5, name: 'Chill Lofi',        songs: 20, img: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=300&q=70', color: '#0ea5e9' },
  { id: 6, name: 'Workout Bangers',   songs: 30, img: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=300&q=70', color: '#dc2626' },
];

const recentSongs = [
  { id: 1, title: 'Midnight City',       artist: 'M83',               duration: '4:03', liked: true },
  { id: 2, title: 'Azhagiye',            artist: 'Vijay Antony',       duration: '5:12', liked: false },
  { id: 3, title: 'Blinding Lights',     artist: 'The Weeknd',         duration: '3:20', liked: true },
  { id: 4, title: 'Suprabhatam',         artist: 'M.S. Subbulakshmi',  duration: '7:45', liked: false },
  { id: 5, title: 'Tum Hi Ho',           artist: 'Arijit Singh',       duration: '4:22', liked: true },
  { id: 6, title: 'Shape of You',        artist: 'Ed Sheeran',         duration: '3:53', liked: false },
];

export default function Radio() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeGenre, setActiveGenre] = useState('all');
  const [progress, setProgress] = useState(33);
  const [currentSong, setCurrentSong] = useState(recentSongs[0]);

  return (
    <div className="min-h-screen pt-16 flex flex-col" style={{ background: 'var(--bg)' }}>
      {/* Top Search Bar */}
      <div className="container-page pt-8 pb-4 flex items-center gap-4">
        <div>
          <h1 className="text-3xl font-black gradient-text">📻 Radio Station</h1>
          <p className="text-sm mt-1" style={{ color: 'var(--muted)' }}>Music, podcasts, devotional — all in one place.</p>
        </div>
        <div className="ml-auto flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2" size={16} style={{ color: 'var(--muted)' }} />
            <input type="text" placeholder="Search songs, artists..." className="input-field pl-9 w-56" />
          </div>
        </div>
      </div>

      {/* Genre Pills */}
      <div className="container-page pb-4">
        <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
          {genres.map(g => (
            <button
              key={g.key}
              onClick={() => setActiveGenre(g.key)}
              className="shrink-0 px-4 py-2 rounded-full text-sm font-semibold transition-all"
              style={{
                background: activeGenre === g.key ? '#74007A' : 'var(--card)',
                color: activeGenre === g.key ? '#fff' : 'var(--muted)',
                border: '1px solid var(--border)',
              }}
            >
              {g.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main layout */}
      <div className="container-page flex-1 grid grid-cols-1 lg:grid-cols-3 gap-6 pb-36">

        {/* Playlists */}
        <div className="lg:col-span-2">
          <h2 className="text-xl font-bold mb-4" style={{ color: 'var(--text)' }}>Featured Playlists</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            {playlists.map(p => (
              <div
                key={p.id}
                onClick={() => setIsPlaying(true)}
                className="group cursor-pointer rounded-2xl overflow-hidden relative"
                style={{ border: '1px solid var(--border)' }}
              >
                <img src={p.img} alt={p.name} className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                {/* Play button */}
                <button className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg">
                    <Play size={20} className="text-black ml-1" />
                  </div>
                </button>
                <div className="absolute bottom-3 left-3 right-3">
                  <p className="font-bold text-sm text-white">{p.name}</p>
                  <p className="text-xs text-white/60">{p.songs} songs</p>
                </div>
              </div>
            ))}
          </div>

          {/* Recent Tracks */}
          <h2 className="text-xl font-bold mb-4" style={{ color: 'var(--text)' }}>Recently Played</h2>
          <div className="space-y-1">
            {recentSongs.map((song, i) => (
              <div
                key={song.id}
                onClick={() => setCurrentSong(song)}
                className="flex items-center gap-4 px-4 py-3 rounded-xl cursor-pointer transition-all group"
                style={{
                  background: currentSong.id === song.id ? 'rgba(116,0,122,0.1)' : 'transparent',
                  border: currentSong.id === song.id ? '1px solid rgba(116,0,122,0.3)' : '1px solid transparent',
                }}
              >
                <span className="w-5 text-xs font-mono text-center" style={{ color: currentSong.id === song.id ? '#74007A' : 'var(--muted)' }}>
                  {currentSong.id === song.id ? <span className="animate-pulse">♫</span> : i + 1}
                </span>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-sm truncate" style={{ color: currentSong.id === song.id ? '#a78bfa' : 'var(--text)' }}>{song.title}</p>
                  <p className="text-xs truncate" style={{ color: 'var(--muted)' }}>{song.artist}</p>
                </div>
                <div className="flex items-center gap-3">
                  <Heart
                    size={15}
                    style={{ color: song.liked ? '#74007A' : 'var(--muted)' }}
                    fill={song.liked ? '#74007A' : 'none'}
                  />
                  <span className="text-xs font-mono" style={{ color: 'var(--muted)' }}>{song.duration}</span>
                  <MoreHorizontal size={15} className="opacity-0 group-hover:opacity-100" style={{ color: 'var(--muted)' }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Now Playing */}
        <div>
          <h2 className="text-xl font-bold mb-4" style={{ color: 'var(--text)' }}>Now Playing</h2>
          <div className="rounded-2xl p-6 sticky top-24" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
            <div className="relative mb-6 rounded-xl overflow-hidden">
              <img
                src={playlists[1].img}
                alt="Album"
                className="w-full h-56 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-3 left-3 badge badge-brand text-xs">
                🎵 Streaming Now
              </div>
            </div>
            <div className="mb-4">
              <h3 className="font-black text-xl" style={{ color: 'var(--text)' }}>{currentSong.title}</h3>
              <p className="text-sm" style={{ color: 'var(--muted)' }}>{currentSong.artist}</p>
            </div>
            {/* Seek bar */}
            <div className="mb-4">
              <input
                type="range"
                min={0} max={100}
                value={progress}
                onChange={e => setProgress(e.target.value)}
                className="w-full accent-purple-600 cursor-pointer"
                style={{ height: '4px' }}
              />
              <div className="flex justify-between text-xs mt-1" style={{ color: 'var(--muted)' }}>
                <span>1:24</span>
                <span>{currentSong.duration}</span>
              </div>
            </div>
            {/* Controls */}
            <div className="flex items-center justify-between">
              <Shuffle size={18} style={{ color: 'var(--muted)' }} className="cursor-pointer hover:text-white" />
              <SkipBack size={22} style={{ color: 'var(--text)' }} className="cursor-pointer" />
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-105"
                style={{ background: '#74007A', boxShadow: '0 0 24px rgba(116,0,122,0.5)' }}
              >
                {isPlaying ? <Pause size={20} className="text-white" /> : <Play size={20} className="text-white ml-0.5" />}
              </button>
              <SkipForward size={22} style={{ color: 'var(--text)' }} className="cursor-pointer" />
              <Repeat size={18} style={{ color: 'var(--muted)' }} className="cursor-pointer" />
            </div>
            {/* Volume */}
            <div className="flex items-center gap-3 mt-5">
              <Volume2 size={16} style={{ color: 'var(--muted)' }} />
              <input type="range" min={0} max={100} defaultValue={70} className="flex-1 accent-purple-600 cursor-pointer" style={{ height: '3px' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
