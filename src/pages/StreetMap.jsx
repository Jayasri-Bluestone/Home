import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const buildings = [
  {
    id: 'vault',
    emoji: '🏠',
    label: 'Home Vault',
    desc: 'Your private cloud & rooms',
    path: '/vault',
    color: '#74007A',
    img: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=400&q=70',
    position: { top: '35%', left: '5%' },
    size: 'large',
  },
  {
    id: 'theatre',
    emoji: '🎬',
    label: 'Theatre',
    desc: 'Movies • Series • Watch Party',
    path: '/theatre',
    color: '#dc2626',
    img: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&q=70',
    position: { top: '20%', left: '28%' },
    size: 'large',
  },
  {
    id: 'food',
    emoji: '🍕',
    label: 'Food Court',
    desc: 'Order food & groceries',
    path: '/food',
    color: '#ea580c',
    img: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&q=70',
    position: { top: '20%', left: '53%' },
    size: 'medium',
  },
  {
    id: 'textile',
    emoji: '👗',
    label: 'Textile Shop',
    desc: 'Fashion & clothing',
    path: '/shop/textile',
    color: '#74007A',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=70',
    position: { top: '20%', left: '73%' },
    size: 'medium',
  },
  {
    id: 'radio',
    emoji: '📻',
    label: 'Radio Station',
    desc: 'Music • Podcasts • Songs',
    path: '/radio',
    color: '#16a34a',
    img: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&q=70',
    position: { top: '55%', left: '28%' },
    size: 'medium',
  },
  {
    id: 'library',
    emoji: '📚',
    label: 'Library',
    desc: 'Books • Audio • Shrine',
    path: '/library',
    color: '#0369a1',
    img: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&q=70',
    position: { top: '55%', left: '50%' },
    size: 'medium',
  },
  {
    id: 'fruits',
    emoji: '🍎',
    label: 'Fruit Market',
    desc: 'Fresh fruits & vegetables',
    path: '/shop/fruits',
    color: '#15803d',
    img: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&q=70',
    position: { top: '55%', left: '70%' },
    size: 'small',
  },
  {
    id: 'jewellery',
    emoji: '💍',
    label: 'Jewellery',
    desc: 'Gold • Silver • Diamonds',
    path: '/shop/jewellery',
    color: '#b45309',
    img: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=400&q=70',
    position: { top: '68%', left: '82%' },
    size: 'small',
  },
  {
    id: 'icecream',
    emoji: '🍦',
    label: 'Dessert Stall',
    desc: 'Ice cream & sweets',
    path: '/shop/icecream',
    color: '#74007A',
    img: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&q=70',
    position: { top: '35%', left: '88%' },
    size: 'small',
  },
  {
    id: 'sports',
    emoji: '⚽',
    label: 'Sports Zone',
    desc: 'Sports & fitness gear',
    path: '/shop/sports',
    color: '#0284c7',
    img: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=400&q=70',
    position: { top: '72%', left: '15%' },
    size: 'small',
  },
  {
    id: 'cosmetic',
    emoji: '💄',
    label: 'Beauty Store',
    desc: 'Cosmetics & skincare',
    path: '/shop/cosmetic',
    color: '#be185d',
    img: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&q=70',
    position: { top: '72%', left: '40%' },
    size: 'small',
  },
  {
    id: 'showroom',
    emoji: '🚗',
    label: 'Showroom',
    desc: 'Cars • Bikes • Quotations',
    path: '/shop/showroom',
    color: '#374151',
    img: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400&q=70',
    position: { top: '72%', left: '58%' },
    size: 'small',
  },
];

const sizeMap = {
  large:  { w: 'w-44 md:w-52', h: 'h-44 md:h-52', text: 'text-5xl', labelSize: 'text-sm md:text-base' },
  medium: { w: 'w-36 md:w-44', h: 'h-36 md:h-44', text: 'text-4xl', labelSize: 'text-xs md:text-sm' },
  small:  { w: 'w-28 md:w-36', h: 'h-28 md:h-36', text: 'text-3xl', labelSize: 'text-xs' },
};

export default function StreetMap() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pt-16" style={{ background: 'var(--bg)' }}>
      {/* Street header */}
      <div className="container-page pt-8 pb-4">
        <h1 className="text-3xl font-black mb-1" style={{ color: 'var(--text)' }}>
          🏘️ <span className="gradient-text">The Street</span>
        </h1>
        <p className="text-sm" style={{ color: 'var(--muted)' }}>
          Click any building to enter. Your entire world, one street.
        </p>
      </div>

      {/* Street scene — scrollable container */}
      <div className="relative w-full overflow-x-auto overflow-y-auto" style={{ height: 'calc(100vh - 140px)', minHeight: '650px' }}>
        {/* Street background */}
        <div className="relative" style={{ minWidth: '1100px', height: '100%' }}>
          {/* Sky gradient */}
          <div className="absolute inset-0"
            style={{
              background: 'linear-gradient(180deg, #1a0a3e 0%, #2d1265 30%, #4a1d96 55%, #6d4a1a 75%, #a07a3a 85%, #c8a96e 100%)',
            }}
          />

          {/* Ground / road */}
          <div className="absolute bottom-0 left-0 right-0 h-40"
            style={{ background: 'linear-gradient(180deg, #5a4a2a 0%, #3a2f1a 100%)' }}
          />
          {/* Road lane lines */}
          <div className="absolute bottom-12 left-0 right-0 h-4"
            style={{ background: '#4a3a1a' }}
          />
          {[...Array(12)].map((_, i) => (
            <div key={i} className="absolute bottom-12 h-1"
              style={{ left: `${i * 9}%`, width: '5%', background: '#f5c842', top: 'auto', bottom: '3.5rem' }}
            />
          ))}

          {/* Stars */}
          {[...Array(30)].map((_, i) => (
            <div key={i} className="absolute rounded-full animate-pulse-slow"
              style={{
                width: Math.random() * 3 + 1 + 'px',
                height: Math.random() * 3 + 1 + 'px',
                background: '#fff',
                top: Math.random() * 40 + '%',
                left: Math.random() * 100 + '%',
                opacity: Math.random() * 0.8 + 0.2,
                animationDelay: `${Math.random() * 3}s`,
              }}
            />
          ))}

          {/* Moon */}
          <div className="absolute top-8 right-24 w-16 h-16 rounded-full"
            style={{ background: 'radial-gradient(circle at 40% 40%, #fff8dc, #f0c060)', boxShadow: '0 0 40px rgba(240,192,96,0.4)' }}
          />

          {/* Buildings */}
          {buildings.map((b, i) => {
            const sz = sizeMap[b.size];
            return (
              <motion.div
                key={b.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07, duration: 0.4 }}
                whileHover={{ scale: 1.06, y: -8 }}
                onClick={() => navigate(b.path)}
                className={`absolute cursor-pointer ${sz.w} ${sz.h} rounded-2xl overflow-hidden group`}
                style={{
                  ...b.position,
                  transform: 'translate(-50%, -50%)',
                  boxShadow: `0 8px 32px ${b.color}55, 0 2px 8px rgba(0,0,0,0.5)`,
                  border: `2px solid ${b.color}88`,
                }}
              >
                {/* Building image */}
                <img src={b.img} alt={b.label} className="w-full h-full object-cover" />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all" />

                {/* Glow on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity"
                  style={{ background: b.color }}
                />

                {/* Label */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-2 text-center">
                  <span className={`${sz.text} mb-1 drop-shadow-lg`}>{b.emoji}</span>
                  <span className={`font-black text-white drop-shadow-lg ${sz.labelSize}`}>{b.label}</span>
                  <span className="text-[10px] text-white/70 mt-0.5 leading-tight hidden group-hover:block">
                    {b.desc}
                  </span>
                </div>

                {/* Neon sign at top */}
                <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl" style={{ background: b.color }} />
              </motion.div>
            );
          })}

          {/* Street lamps */}
          {[15, 40, 65, 88].map(pos => (
            <div key={pos} className="absolute" style={{ left: `${pos}%`, bottom: '9rem' }}>
              <div className="w-2 h-24 mx-auto" style={{ background: '#888' }} />
              <div className="w-8 h-3 rounded-t-full -ml-3 relative" style={{ background: '#aaa' }}>
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full"
                  style={{ background: '#ffe878', boxShadow: '0 0 16px 6px rgba(255,232,120,0.5)' }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
