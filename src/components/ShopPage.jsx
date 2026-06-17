import { useState } from 'react';
import { Search, Filter, Star, Heart, Plus, ShoppingCart } from 'lucide-react';

// Reusable E-commerce shop template
const ShopPage = ({ config }) => {
  const [cart, setCart] = useState(0);
  const [search, setSearch] = useState('');
  const [liked, setLiked] = useState({});

  const filtered = config.products.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen pt-16" style={{ background: 'var(--bg)' }}>
      {/* Banner */}
      <div className="relative overflow-hidden" style={{ background: `linear-gradient(135deg, ${config.color}, ${config.color2})` }}>
        <div className="absolute right-0 bottom-0 text-[120px] opacity-10 select-none">{config.emoji}</div>
        <div className="container-page py-10 relative z-10">
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <div className="flex-1">
              <h1 className="text-3xl font-black text-white mb-2">{config.emoji} {config.title}</h1>
              <p className="text-white/70">{config.subtitle}</p>
            </div>
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder={`Search ${config.title.toLowerCase()}...`}
                className="input-field pl-10"
                style={{ background: 'rgba(255,255,255,0.9)', color: '#111' }}
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="container-page py-5">
        <div className="flex gap-3 overflow-x-auto pb-2">
          {config.categories.map(cat => (
            <button key={cat} className="shrink-0 px-5 py-2 rounded-full text-sm font-semibold transition-all"
              style={{ background: 'var(--card)', color: 'var(--muted)', border: '1px solid var(--border)' }}>
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="container-page pb-24">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-xl font-bold" style={{ color: 'var(--text)' }}>{filtered.length} Products</h2>
          <button className="flex items-center gap-2 text-sm font-semibold" style={{ color: config.color }}>
            <Filter size={16} /> Filter
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {filtered.map(product => (
            <div key={product.id} className="card group cursor-pointer overflow-hidden">
              <div className="relative overflow-hidden" style={{ aspectRatio: '1/1' }}>
                <img src={product.img} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <button
                  onClick={() => setLiked(l => ({ ...l, [product.id]: !l[product.id] }))}
                  className="absolute top-2 right-2 w-8 h-8 rounded-full flex items-center justify-center transition-all"
                  style={{ background: 'rgba(0,0,0,0.4)' }}
                >
                  <Heart size={14} fill={liked[product.id] ? '#74007A' : 'none'} style={{ color: liked[product.id] ? '#74007A' : '#fff' }} />
                </button>
                {product.badge && (
                  <div className="absolute top-2 left-2 text-[10px] font-bold px-1.5 py-0.5 rounded" style={{ background: config.color, color: '#fff' }}>
                    {product.badge}
                  </div>
                )}
              </div>
              <div className="p-3">
                <p className="font-semibold text-sm truncate mb-1" style={{ color: 'var(--text)' }}>{product.name}</p>
                <div className="flex items-center gap-1 mb-2">
                  <Star size={11} fill="#f59e0b" style={{ color: '#f59e0b' }} />
                  <span className="text-xs font-bold" style={{ color: 'var(--muted)' }}>{product.rating}</span>
                  <span className="text-xs" style={{ color: 'var(--muted)' }}>({product.reviews})</span>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-black text-base" style={{ color: config.color }}>{product.price}</p>
                    {product.original && <p className="text-xs line-through" style={{ color: 'var(--muted)' }}>{product.original}</p>}
                  </div>
                  <button
                    onClick={() => setCart(c => c + 1)}
                    className="w-8 h-8 rounded-xl flex items-center justify-center text-white transition-all hover:scale-110"
                    style={{ background: config.color }}
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cart float */}
      {cart > 0 && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 animate-slide-up">
          <button className="flex items-center gap-4 px-8 py-4 rounded-2xl font-bold text-white shadow-2xl"
            style={{ background: config.color, boxShadow: `0 8px 32px ${config.color}55` }}>
            <ShoppingCart size={18} />
            <span className="bg-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-black" style={{ color: config.color }}>{cart}</span>
            View Cart
          </button>
        </div>
      )}
    </div>
  );
};

export default ShopPage;
