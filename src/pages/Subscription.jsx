import { useState } from 'react';
import { Check, Crown, Zap, Star, ToggleLeft, ToggleRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const plans = [
  {
    name: 'Guest House',
    subtitle: 'Freemium',
    icon: '🏡',
    priceMonthly: 0,
    priceYearly: 0,
    storage: '15 GB',
    members: '1 Owner',
    color: '#6b7280',
    features: [
      'Basic Cloud Storage (15 GB)',
      'Hall Access (Public Files)',
      'Ad-supported Radio',
      'Limited Library (5 books/month)',
      'Basic Shrine (2 playlists)',
      '3 Bill Splits per month',
    ],
    missing: ['Watch Party', 'Theatre Streaming', 'E-commerce Shops', 'OTP Room Access'],
  },
  {
    name: 'The Studio',
    subtitle: 'Couples & Duos',
    icon: '🛋️',
    priceMonthly: 399,
    priceYearly: 299,
    storage: '100 GB',
    members: '2 Members',
    color: '#3b82f6',
    features: [
      '2 Rooms + 1 Hall (100 GB total)',
      'OTP Room Access',
      'Sync Watch Party (HD)',
      'Ad-free Radio & Library',
      'Shared Finance Tracker',
      'Full Shrine Access',
      'All 7 E-commerce Shops',
    ],
    missing: ['Consensus Lock', 'Multiple Watch Parties'],
  },
  {
    name: 'The Villa',
    subtitle: 'Standard Family / Gang',
    icon: '🏘️',
    priceMonthly: 899,
    priceYearly: 699,
    storage: '600 GB',
    members: '6 Members',
    color: '#74007A',
    popular: true,
    features: [
      '6 Rooms + Large Hall (100 GB/room)',
      'OTP Room Access + Consensus Lock',
      '4K Watch Party (up to 6 screens)',
      'Guest Logins for Hall',
      'Advanced Finance (Gift Pooling)',
      'Full Library & Shrine Access',
      'Multi-room Decorator',
      'All 12 E-commerce Shops',
      'Food Court Priority Delivery',
    ],
    missing: [],
  },
  {
    name: 'The Mansion',
    subtitle: 'Extended Family / Gangs',
    icon: '🏰',
    priceMonthly: 1999,
    priceYearly: 1499,
    storage: '2 TB',
    members: '15 Members',
    color: '#f59e0b',
    features: [
      'Up to 15 Rooms + Sub-Halls',
      'Consensus Lock (75% majority)',
      'Multiple Watch Parties Simultaneously',
      'Multi-currency Finance Pool',
      'Custom Furniture in Decorator',
      'Priority across all Shops & Food',
      '2 TB Pooled Storage (owner allocates)',
      'Dedicated Family Admin Panel',
    ],
    missing: [],
  },
  {
    name: 'The Estate',
    subtitle: 'Enterprise / Communities',
    icon: '🌆',
    priceMonthly: 6999,
    priceYearly: 5499,
    storage: '10 TB+',
    members: 'Unlimited',
    color: '#74007A',
    enterprise: true,
    features: [
      'Unlimited Rooms & Members',
      'Custom Branding for Estate',
      '10 TB+ Pooled Storage',
      'Priority Streaming Bandwidth',
      'Dedicated Account Manager',
      'API Access for Integration',
      'All features from Mansion',
      'Advanced Analytics Dashboard',
    ],
    missing: [],
  },
];

export default function Subscription() {
  const [yearly, setYearly] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pt-16" style={{ background: 'var(--bg)' }}>
      {/* Hero */}
      <div className="py-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(116,0,122,0.15) 0%, transparent 70%)' }} />
        <div className="container-page relative z-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6"
            style={{ background: '#74007A', boxShadow: '0 0 40px rgba(116,0,122,0.45)' }}>
            <Crown size={28} className="text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-4" style={{ color: 'var(--text)' }}>
            Upgrade Your <span className="gradient-text">Home</span>
          </h1>
          <p className="text-lg max-w-xl mx-auto mb-10" style={{ color: 'var(--muted)' }}>
            Every plan includes all 12 concepts on The Street. Shop, stream, store — everything bundled.
          </p>
          {/* Monthly / Yearly Toggle */}
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="font-semibold text-sm" style={{ color: yearly ? 'var(--muted)' : 'var(--text)' }}>Monthly</span>
            <button onClick={() => setYearly(!yearly)} className="transition-all">
              {yearly
                ? <ToggleRight size={40} style={{ color: '#74007A' }} />
                : <ToggleLeft size={40} style={{ color: 'var(--muted)' }} />}
            </button>
            <span className="font-semibold text-sm" style={{ color: yearly ? 'var(--text)' : 'var(--muted)' }}>
              Yearly <span className="text-xs font-bold px-2 py-0.5 rounded-full" style={{ background: 'rgba(16,185,129,0.15)', color: '#10b981' }}>Save 20%</span>
            </span>
          </div>
        </div>
      </div>

      {/* Plans */}
      <div className="container-page pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 items-start">
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-6 flex flex-col relative overflow-hidden transition-all hover:scale-[1.02] ${plan.popular ? 'ring-2 shadow-2xl' : ''}`}
              style={{
                background: plan.popular ? `linear-gradient(160deg, rgba(116,0,122,0.15), var(--surface))` : 'var(--surface)',
                border: `1px solid ${plan.popular ? plan.color : 'var(--border)'}`,
                ringColor: plan.color,
                boxShadow: plan.popular ? `0 0 40px ${plan.color}33` : 'none',
              }}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 px-3 py-1 text-xs font-black text-white rounded-bl-xl" style={{ background: plan.color }}>
                  MOST POPULAR
                </div>
              )}

              <div className="text-3xl mb-3">{plan.icon}</div>
              <h3 className="font-black text-lg mb-0.5" style={{ color: 'var(--text)' }}>{plan.name}</h3>
              <p className="text-xs mb-4" style={{ color: 'var(--muted)' }}>{plan.subtitle}</p>

              <div className="mb-4 pb-4" style={{ borderBottom: '1px solid var(--border)' }}>
                {plan.priceMonthly === 0 ? (
                  <span className="text-3xl font-black text-green-400">Free</span>
                ) : (
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-black" style={{ color: 'var(--text)' }}>
                      ₹{yearly ? plan.priceYearly : plan.priceMonthly}
                    </span>
                    <span className="text-xs" style={{ color: 'var(--muted)' }}>/mo</span>
                  </div>
                )}
                <div className="flex gap-3 mt-2 text-xs" style={{ color: 'var(--muted)' }}>
                  <span>📦 {plan.storage}</span>
                  <span>👤 {plan.members}</span>
                </div>
              </div>

              <ul className="space-y-2.5 mb-6 flex-1">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2 text-xs" style={{ color: 'var(--text)' }}>
                    <Check size={14} className="mt-0.5 shrink-0" style={{ color: plan.color }} />
                    {f}
                  </li>
                ))}
                {plan.missing?.map((f, j) => (
                  <li key={`m${j}`} className="flex items-start gap-2 text-xs line-through" style={{ color: 'var(--muted)' }}>
                    <span className="mt-0.5">✗</span> {f}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => navigate('/home')}
                className="w-full py-3 rounded-xl font-bold text-sm transition-all hover:scale-[1.02]"
                style={{
                  background: plan.priceMonthly === 0 ? 'var(--card)' : plan.color,
                  color: plan.priceMonthly === 0 ? 'var(--text)' : '#fff',
                  border: plan.priceMonthly === 0 ? '1px solid var(--border)' : 'none',
                  boxShadow: plan.priceMonthly !== 0 ? `0 0 20px ${plan.color}55` : 'none',
                }}
              >
                {plan.priceMonthly === 0 ? 'Start Free' : plan.enterprise ? 'Contact Sales' : 'Get Started'}
              </button>
            </div>
          ))}
        </div>

        {/* Feature comparison note */}
        <div className="mt-12 p-6 rounded-2xl text-center" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
          <p className="font-bold text-sm mb-2" style={{ color: 'var(--text)' }}>All plans include access to every concept on The Street</p>
          <p className="text-xs" style={{ color: 'var(--muted)' }}>
            Theatre • Radio • Library • Food Court • Home Vault • Textile • Fruits • Jewellery • Cosmetics • Sports • Ice Cream • Showroom
          </p>
        </div>
      </div>
    </div>
  );
}
