import { useState } from 'react';
import { Search, Car, Bike, Info, CheckCircle, Phone, MessageCircle } from 'lucide-react';

const vehicles = [
  { id: 1, name: 'Maruti Suzuki Swift',  type: 'Hatchback', price: '₹6.49 L', emi: '₹12,800/mo', fuel: 'Petrol', img: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=400&q=70' },
  { id: 2, name: 'Hyundai Creta',        type: 'SUV',        price: '₹11.00 L', emi: '₹21,500/mo', fuel: 'Diesel', img: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&q=70' },
  { id: 3, name: 'Tata Nexon EV',        type: 'EV SUV',     price: '₹14.99 L', emi: '₹28,000/mo', fuel: 'Electric', img: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=400&q=70' },
  { id: 4, name: 'Royal Enfield Bullet', type: 'Cruiser',    price: '₹1.89 L', emi: '₹4,200/mo', fuel: 'Petrol', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=70' },
  { id: 5, name: 'Honda Activa 6G',      type: 'Scooter',    price: '₹75,000', emi: '₹1,800/mo', fuel: 'Petrol', img: 'https://images.unsplash.com/photo-1558981033-d3be6ff3bfd3?w=400&q=70' },
  { id: 6, name: 'BMW 3 Series',         type: 'Sedan',      price: '₹46.90 L', emi: '₹85,000/mo', fuel: 'Petrol', img: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&q=70' },
];

export default function Showroom() {
  const [selected, setSelected] = useState(null);
  const [type, setType] = useState('All');

  return (
    <div className="min-h-screen pt-16" style={{ background: 'var(--bg)' }}>
      {/* Banner */}
      <div className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #1f2937, #374151)' }}>
        <div className="absolute right-4 bottom-0 text-[120px] opacity-10">🚗</div>
        <div className="container-page py-10 relative z-10">
          <h1 className="text-3xl font-black text-white mb-2">🚗 Vehicle Showroom</h1>
          <p className="text-gray-400">Explore cars & bikes, compare models and get instant quotations.</p>
        </div>
      </div>

      {/* Type Filter */}
      <div className="container-page py-5">
        <div className="flex gap-3">
          {['All', 'Cars', 'Bikes', 'EVs', 'Luxury'].map(t => (
            <button key={t} onClick={() => setType(t)}
              className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all"
              style={{ background: type === t ? '#374151' : 'var(--card)', color: type === t ? '#fff' : 'var(--muted)', border: '1px solid var(--border)' }}>
              {t === 'Cars' ? <Car size={14} /> : t === 'Bikes' ? <Bike size={14} /> : null} {t}
            </button>
          ))}
        </div>
      </div>

      <div className="container-page pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {vehicles.map(v => (
            <div key={v.id} className="card overflow-hidden group cursor-pointer" onClick={() => setSelected(v)}>
              <div className="relative h-52 overflow-hidden">
                <img src={v.img} alt={v.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute top-3 left-3 text-xs font-bold px-2 py-1 rounded" style={{ background: 'rgba(55,65,81,0.9)', color: '#fff' }}>{v.type}</div>
                <div className="absolute top-3 right-3 text-xs font-bold px-2 py-1 rounded" style={{ background: v.fuel === 'Electric' ? '#16a34a' : '#374151', color: '#fff' }}>{v.fuel}</div>
              </div>
              <div className="p-5">
                <h3 className="font-black text-lg mb-1" style={{ color: 'var(--text)' }}>{v.name}</h3>
                <p className="text-2xl font-black mb-1" style={{ color: '#9ca3af' }}>{v.price}</p>
                <p className="text-xs mb-4" style={{ color: 'var(--muted)' }}>EMI from {v.emi}</p>
                <div className="flex gap-3">
                  <button className="flex-1 py-2.5 rounded-xl font-bold text-sm text-white" style={{ background: '#374151' }}>
                    View Details
                  </button>
                  <button className="flex-1 py-2.5 rounded-xl font-bold text-sm text-white" style={{ background: '#74007A', boxShadow: '0 0 16px rgba(116,0,122,0.4)' }}>
                    Get Quotation
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quotation Modal */}
      {selected && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4" onClick={() => setSelected(null)}>
          <div className="rounded-2xl p-8 w-full max-w-sm" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }} onClick={e => e.stopPropagation()}>
            <h3 className="text-xl font-black mb-2" style={{ color: 'var(--text)' }}>Get Quotation</h3>
            <p className="text-sm mb-6" style={{ color: 'var(--muted)' }}>for <span style={{ color: 'var(--text)', fontWeight: 700 }}>{selected.name}</span> — {selected.price}</p>
            <div className="space-y-3 mb-6">
              <input placeholder="Your Name" className="input-field" />
              <input placeholder="Phone Number" className="input-field" />
              <input placeholder="City / Location" className="input-field" />
            </div>
            <div className="flex gap-3">
              <button className="flex-1 py-3 rounded-xl font-bold border" style={{ border: '1px solid var(--border)', color: 'var(--text)' }} onClick={() => setSelected(null)}>Cancel</button>
              <button className="flex-1 py-3 rounded-xl font-bold text-white" style={{ background: '#74007A' }}>
                Request Quotation
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
