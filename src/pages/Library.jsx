import { useState } from 'react';
import { Book, Headphones, Sun, Flame, Music, BookOpen, Search } from 'lucide-react';

const holyBooks = [
  { title: 'Bhagavad Gita',  lang: 'Sanskrit', img: 'https://images.unsplash.com/photo-1604881991720-f91add269bed?w=200&q=70', religion: 'Hindu' },
  { title: 'Ramayana',       lang: 'Sanskrit', img: 'https://images.unsplash.com/photo-1590077428593-a55bb07c4665?w=200&q=70', religion: 'Hindu' },
  { title: 'Mahabharata',    lang: 'Sanskrit', img: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=200&q=70', religion: 'Hindu' },
  { title: 'Holy Bible',     lang: 'English',  img: 'https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?w=200&q=70', religion: 'Christian' },
  { title: 'The Quran',      lang: 'Arabic',   img: 'https://images.unsplash.com/photo-1563296291-74cbfb0ad55c?w=200&q=70', religion: 'Islam' },
  { title: 'Guru Granth Sahib', lang: 'Gurmukhi', img: 'https://images.unsplash.com/photo-1560807707-8cc77767d783?w=200&q=70', religion: 'Sikh' },
];

const ebooks = [
  { title: 'Atomic Habits',        author: 'James Clear', img: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=200&q=70' },
  { title: 'Think & Grow Rich',   author: 'Napoleon Hill', img: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=200&q=70' },
  { title: 'Deep Work',           author: 'Cal Newport',   img: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=200&q=70' },
  { title: 'Ikigai',              author: 'Héctor García',  img: 'https://images.unsplash.com/photo-1462275646964-a0e3386b89fa?w=200&q=70' },
];

export default function Library() {
  const [tab, setTab] = useState('library');
  const [religion, setReligion] = useState('Hindu');

  return (
    <div className="min-h-screen pt-16" style={{ background: 'var(--bg)' }}>
      <div className="container-page py-8">
        {/* Header & Tabs */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-black" style={{ color: 'var(--text)' }}>
              {tab === 'library' ? '📚 The Library' : '🙏 The Shrine'}
            </h1>
            <p className="text-sm mt-1" style={{ color: 'var(--muted)' }}>
              {tab === 'library' ? 'Read books, listen to audiobooks.' : 'Morning pooja, holy texts, devotional music.'}
            </p>
          </div>
          <div className="flex p-1 rounded-xl" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
            <button onClick={() => setTab('library')} className="px-5 py-2 rounded-lg text-sm font-bold transition-all" style={{ background: tab === 'library' ? '#74007A' : 'transparent', color: tab === 'library' ? '#fff' : 'var(--muted)' }}>
              📚 Library
            </button>
            <button onClick={() => setTab('shrine')} className="px-5 py-2 rounded-lg text-sm font-bold transition-all" style={{ background: tab === 'shrine' ? '#f59e0b' : 'transparent', color: tab === 'shrine' ? '#fff' : 'var(--muted)' }}>
              🙏 Shrine
            </button>
          </div>
        </div>

        {tab === 'library' && (
          <div>
            {/* Search */}
            <div className="relative mb-8 max-w-md">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: 'var(--muted)' }} />
              <input type="text" placeholder="Search books, authors..." className="input-field pl-9" />
            </div>

            {/* Audiobooks */}
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2" style={{ color: 'var(--text)' }}>
              <Headphones size={20} style={{ color: '#a78bfa' }} /> Audiobooks
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-10">
              {ebooks.map((book, i) => (
                <div key={i} className="group cursor-pointer">
                  <div className="relative rounded-xl overflow-hidden mb-3">
                    <img src={book.img} alt={book.title} className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-400" />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center">
                        <Headphones size={20} style={{ color: '#74007A' }} />
                      </div>
                    </div>
                  </div>
                  <p className="font-bold text-sm truncate" style={{ color: 'var(--text)' }}>{book.title}</p>
                  <p className="text-xs" style={{ color: 'var(--muted)' }}>{book.author}</p>
                </div>
              ))}
            </div>

            {/* E-Books */}
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2" style={{ color: 'var(--text)' }}>
              <BookOpen size={20} style={{ color: '#60a5fa' }} /> E-Books
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {[...ebooks, ...ebooks].slice(0, 5).map((book, i) => (
                <div key={i} className="group cursor-pointer">
                  <div className="relative rounded-xl overflow-hidden mb-3" style={{ aspectRatio: '2/3' }}>
                    <img src={book.img} alt={book.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center">
                      <span className="text-white font-bold text-sm px-3 py-1 rounded-full bg-blue-500/80">Read</span>
                    </div>
                  </div>
                  <p className="font-bold text-xs truncate" style={{ color: 'var(--text)' }}>{book.title}</p>
                  <p className="text-[10px]" style={{ color: 'var(--muted)' }}>{book.author}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === 'shrine' && (
          <div>
            {/* Morning Routine Banner */}
            <div className="p-6 rounded-2xl flex items-center justify-between mb-8" style={{ background: 'linear-gradient(135deg, rgba(245,158,11,0.15), rgba(234,88,12,0.1))', border: '1px solid rgba(245,158,11,0.3)' }}>
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center" style={{ background: 'rgba(245,158,11,0.15)', boxShadow: '0 0 30px rgba(245,158,11,0.3)' }}>
                  <Flame size={32} style={{ color: '#f59e0b' }} />
                </div>
                <div>
                  <p className="font-semibold text-sm mb-1" style={{ color: '#fcd34d' }}>Morning Routine Active • 6:00 AM</p>
                  <h2 className="text-2xl font-black" style={{ color: 'var(--text)' }}>Suprabhatam & Meditation</h2>
                  <p className="text-sm mt-1" style={{ color: 'var(--muted)' }}>Playing in Owner's Room · Hall</p>
                </div>
              </div>
              <button className="btn-brand flex items-center gap-2" style={{ background: '#f59e0b', boxShadow: '0 0 20px rgba(245,158,11,0.4)' }}>
                <Music size={16} /> Stop Routine
              </button>
            </div>

            {/* Religion filter */}
            <div className="flex gap-3 mb-6">
              {['Hindu', 'Christian', 'Islam', 'Sikh'].map(r => (
                <button key={r} onClick={() => setReligion(r)}
                  className="px-4 py-1.5 rounded-full text-sm font-semibold transition-all"
                  style={{ background: religion === r ? '#f59e0b' : 'var(--card)', color: religion === r ? '#000' : 'var(--muted)', border: '1px solid var(--border)' }}>
                  {r}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Holy Books */}
              <div>
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2" style={{ color: 'var(--text)' }}>
                  <Book size={20} style={{ color: '#f59e0b' }} /> Holy Texts
                </h2>
                <div className="space-y-3">
                  {holyBooks.filter(b => b.religion === religion || religion === 'All').map(book => (
                    <div key={book.title} className="flex items-center gap-4 p-4 rounded-xl cursor-pointer hover:scale-[1.01] transition-all group"
                      style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
                      <img src={book.img} alt={book.title} className="w-12 h-12 rounded-lg object-cover" />
                      <div className="flex-1">
                        <p className="font-bold text-sm" style={{ color: 'var(--text)' }}>{book.title}</p>
                        <p className="text-xs" style={{ color: 'var(--muted)' }}>{book.lang}</p>
                      </div>
                      <div className="flex gap-2">
                        <span className="text-xs px-2 py-1 rounded-lg cursor-pointer font-semibold" style={{ background: 'rgba(116,0,122,0.1)', color: '#a78bfa' }}>Read</span>
                        <span className="text-xs px-2 py-1 rounded-lg cursor-pointer font-semibold" style={{ background: 'rgba(245,158,11,0.1)', color: '#f59e0b' }}>Listen</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Devotional Playlists */}
              <div>
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2" style={{ color: 'var(--text)' }}>
                  <Music size={20} style={{ color: '#60a5fa' }} /> Devotional Playlists
                </h2>
                <div className="space-y-3">
                  {['Morning Suprabhatam', 'Evening Aarti', 'Meditation Flute', 'Sunday Mass Hymns', 'Azaan & Prayers'].map(song => (
                    <div key={song} className="flex items-center justify-between p-4 rounded-xl cursor-pointer hover:scale-[1.01] transition-all"
                      style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'rgba(96,165,250,0.1)' }}>
                          <Music size={18} style={{ color: '#60a5fa' }} />
                        </div>
                        <span className="font-medium text-sm" style={{ color: 'var(--text)' }}>{song}</span>
                      </div>
                      <button className="text-xs px-3 py-1.5 rounded-xl font-bold text-white" style={{ background: '#74007A' }}>Play</button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
