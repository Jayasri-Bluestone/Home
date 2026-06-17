import { useState } from 'react';
import { MapPin, Clock, Star, Plus, Search, Filter } from 'lucide-react';

const categories = ['🍕 All', '🍛 Biryani', '🍔 Burger', '🍜 Noodles', '🍣 Sushi', '🥗 Salads', '🍰 Desserts', '☕ Cafe'];

const restaurants = [
  { id: 1, name: 'Spice Garden',       cuisine: 'South Indian', rating: 4.5, time: '25-30', price: '₹150', img: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&q=70', offer: '20% OFF', tags: ['Pure Veg', 'Fast Delivery'] },
  { id: 2, name: 'Burger King',        cuisine: 'American',     rating: 4.2, time: '20-25', price: '₹200', img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=70', offer: '',      tags: ['Bestseller'] },
  { id: 3, name: 'Biryani House',      cuisine: 'Mughlai',      rating: 4.7, time: '30-40', price: '₹180', img: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=400&q=70', offer: 'Free Delivery', tags: ['Trending'] },
  { id: 4, name: 'Pizza Paradise',     cuisine: 'Italian',      rating: 4.3, time: '25-35', price: '₹250', img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=70', offer: '',      tags: [] },
  { id: 5, name: 'Sushi Hub',          cuisine: 'Japanese',     rating: 4.6, time: '35-45', price: '₹400', img: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=400&q=70', offer: '',      tags: ['Premium'] },
  { id: 6, name: 'Chennai Cafe',       cuisine: 'Tamil',        rating: 4.4, time: '15-20', price: '₹80',  img: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&q=70', offer: '10% OFF', tags: ['Budget Friendly'] },
];

export default function Food() {
  const [activeCategory, setActiveCategory] = useState('🍕 All');
  const [cart, setCart] = useState(0);

  return (
    <div className="min-h-screen pt-16" style={{ background: 'var(--bg)' }}>
      {/* Header Banner */}
      <div className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #ea580c, #f97316)' }}>
        <div className="container-page py-10">
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <div className="flex-1">
              <h1 className="text-3xl font-black text-white mb-2">🍕 Food Court</h1>
              <p className="text-orange-100">Order from nearby restaurants. Fast, fresh delivery.</p>
              <div className="flex items-center gap-2 mt-3 text-orange-100 text-sm">
                <MapPin size={14} /> <span>Delivering to: Your Street</span>
              </div>
            </div>
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input type="text" placeholder="Search food, restaurants..." className="input-field pl-10" style={{ background: 'rgba(255,255,255,0.9)', color: '#111' }} />
            </div>
          </div>
        </div>
        <div className="absolute right-0 bottom-0 text-[120px] opacity-10">🍕</div>
      </div>

      {/* Category Pills */}
      <div className="container-page py-5">
        <div className="flex gap-3 overflow-x-auto pb-2">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="shrink-0 px-5 py-2 rounded-full text-sm font-semibold transition-all"
              style={{
                background: activeCategory === cat ? '#ea580c' : 'var(--card)',
                color: activeCategory === cat ? '#fff' : 'var(--muted)',
                border: '1px solid var(--border)',
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Restaurants Grid */}
      <div className="container-page pb-20">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-xl font-bold" style={{ color: 'var(--text)' }}>Restaurants Near You</h2>
          <button className="flex items-center gap-2 text-sm font-semibold" style={{ color: '#ea580c' }}>
            <Filter size={16} /> Filter
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {restaurants.map(r => (
            <div key={r.id} className="card cursor-pointer overflow-hidden group">
              <div className="relative h-44 overflow-hidden">
                <img src={r.img} alt={r.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                {r.offer && (
                  <div className="absolute top-3 left-3 text-xs font-bold px-2 py-1 rounded" style={{ background: '#16a34a', color: '#fff' }}>
                    {r.offer}
                  </div>
                )}
                <button
                  onClick={() => setCart(c => c + 1)}
                  className="absolute bottom-3 right-3 w-8 h-8 rounded-full flex items-center justify-center font-bold text-white transition-all opacity-0 group-hover:opacity-100"
                  style={{ background: '#ea580c' }}
                >
                  <Plus size={16} />
                </button>
              </div>
              <div className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-bold" style={{ color: 'var(--text)' }}>{r.name}</h3>
                    <p className="text-xs" style={{ color: 'var(--muted)' }}>{r.cuisine}</p>
                  </div>
                  <span className="flex items-center gap-1 text-sm font-bold text-green-500">
                    <Star size={13} fill="currentColor" /> {r.rating}
                  </span>
                </div>
                <div className="flex items-center gap-4 text-xs" style={{ color: 'var(--muted)' }}>
                  <span className="flex items-center gap-1"><Clock size={11} /> {r.time} min</span>
                  <span>Avg {r.price}</span>
                </div>
                {r.tags.length > 0 && (
                  <div className="flex gap-2 mt-3">
                    {r.tags.map(t => (
                      <span key={t} className="text-[10px] px-2 py-0.5 rounded-full" style={{ background: 'rgba(234,88,12,0.1)', color: '#ea580c' }}>{t}</span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cart indicator */}
      {cart > 0 && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 animate-slide-up">
          <button className="flex items-center gap-4 px-8 py-4 rounded-2xl font-bold text-white shadow-2xl"
            style={{ background: '#ea580c', boxShadow: '0 8px 32px rgba(234,88,12,0.5)' }}>
            <span className="bg-white text-orange-600 rounded-full w-7 h-7 flex items-center justify-center text-sm font-black">{cart}</span>
            View Cart
            <span className="ml-2">→</span>
          </button>
        </div>
      )}
    </div>
  );
}
