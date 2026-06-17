import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Play, ChevronRight, ChevronDown, Star, Shield, Zap, Users } from 'lucide-react';
import Navbar from '../components/Navbar';

const concepts = [
  { icon: '🏠', title: 'Home Vault',     desc: 'Your private cloud storage with OTP-protected rooms and family sharing.' },
  { icon: '🎬', title: 'Theatre',        desc: 'Stream movies, series & songs. Watch together from anywhere on earth.' },
  { icon: '🍕', title: 'Food Court',     desc: 'Order from nearby restaurants. Hot meals delivered to your door.' },
  { icon: '👗', title: 'Textile Shop',   desc: 'Browse thousands of dresses, sarees, shirts & more. Delivered fast.' },
  { icon: '📻', title: 'Radio Station',  desc: 'Millions of songs, curated playlists, devotional music & more.' },
  { icon: '📚', title: 'Library',        desc: 'Read e-books, listen to audiobooks & access your daily shrine.' },
  { icon: '🍎', title: 'Fresh Market',   desc: 'Farm-fresh fruits & vegetables. Delivered within hours.' },
  { icon: '💍', title: 'Jewellery',      desc: 'Stunning gold, silver & diamond collections for every occasion.' },
  { icon: '💄', title: 'Cosmetics',      desc: 'Top beauty brands, skincare essentials & exclusive deals.' },
  { icon: '⚽', title: 'Sports Zone',    desc: 'Gear up with premium sports equipment & fitness products.' },
  { icon: '🚗', title: 'Car Showroom',   desc: 'Explore vehicles, compare models & get instant quotations.' },
  { icon: '🍦', title: 'Dessert Stall',  desc: 'Satisfy your sweet tooth with ice creams, sweets & more.' },
];

const faqs = [
  { q: 'What is HomeVault?',           a: 'HomeVault is your all-in-one virtual world — a street where you shop, stream, store files, order food, listen to music and more, all from one place.' },
  { q: 'Is there a free plan?',        a: 'Yes! Our Guest House plan is free with 15 GB of storage and limited access to key features. Upgrade anytime as your needs grow.' },
  { q: 'Can I share my home with family?', a: 'Absolutely. The Villa plan and above support up to 6 members, each with their own private room, shared hall, and personalized experience.' },
  { q: 'How does the Watch Party work?', a: 'Friends and family in different cities can sync a video to watch simultaneously, while chatting live. Perfect for long-distance couples and families.' },
  { q: 'Is my data secure?',           a: 'All rooms are protected with OTP keys. Legacy rooms require consensus approval from all home members. Your data is encrypted end-to-end.' },
];

export default function Landing() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* ── Hero ──────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background mosaic */}
        <div className="absolute inset-0 z-0">
          <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 h-full opacity-25">
            {[
              'https://images.unsplash.com/photo-1601513445506-2ab0d4fb4229?w=200&q=60',
              'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=200&q=60',
              'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=200&q=60',
              'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=200&q=60',
              'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=200&q=60',
              'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=200&q=60',
              'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=200&q=60',
              'https://images.unsplash.com/photo-1563396983906-b3795482a59a?w=200&q=60',
              'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=60',
              'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=200&q=60',
              'https://images.unsplash.com/photo-1511300636408-a63a89df3482?w=200&q=60',
              'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=200&q=60',
              'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=200&q=60',
              'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=200&q=60',
              'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200&q=60',
              'https://images.unsplash.com/photo-1519741497674-611481863552?w=200&q=60',
            ].map((src, i) => (
              <img key={i} src={src} alt="" className="w-full h-full object-cover" />
            ))}
          </div>
          {/* Overlays */}
          <div className="absolute inset-0" style={{ backgroundColor: 'var(--bg)', opacity: 0.1 }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, var(--bg) 0%, transparent 60%)' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, var(--bg) 0%, transparent 30%)' }} />
        </div>

        {/* Hero content */}
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto animate-slide-up">
          <span className="badge badge-brand text-sm mb-6 inline-flex">
            <Star size={12} fill="currentColor" /> Your World. One Street.
          </span>
          <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
            <span style={{ color: 'var(--text)' }}>Everything you </span>
            <span className="gradient-text">need</span>
            <br />
            <span style={{ color: 'var(--text)' }}>lives on </span>
            <span className="gradient-text">one street.</span>
          </h1>
          <p className="text-lg md:text-xl mb-10 max-w-xl mx-auto" style={{ color: 'var(--muted)' }}>
            Shop, stream, store, order food, listen to music — all from your virtual neighbourhood.
            <strong style={{ color: 'var(--text)' }}> Starts free.</strong>
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email to get started"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="input-field flex-1"
              style={{ background: 'var(--surface)', border: '1.5px solid var(--border)', color: 'var(--text)' }}
            />
            <button
              onClick={() => navigate('/language')}
              className="btn-brand whitespace-nowrap"
            >
              Get Started <ChevronRight size={16} />
            </button>
          </div>
          <p className="text-xs mt-4" style={{ color: 'var(--muted)' }}>Free to join. No credit card required.</p>

          {/* scroll hint */}
          <div className="mt-16 flex flex-col items-center gap-2 animate-bounce" style={{ color: 'var(--muted)' }}>
            <span className="text-xs font-medium">Explore</span>
            <ChevronDown size={20} />
          </div>
        </div>
      </section>

      {/* ── Concept Grid ──────────────────────────────────── */}
      <section className="py-24" style={{ background: 'var(--bg)' }}>
        <div className="container-page">
          <div className="text-center mb-14">
            <h2 className="section-title text-4xl font-black">
              Everything in <span className="gradient-text">one place</span>
            </h2>
            <p className="section-sub text-base max-w-xl mx-auto">
              Click any building on The Street to enter. Each zone is a world in itself.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {concepts.map((c, i) => (
              <div
                key={i}
                className="card p-6 cursor-pointer group"
                onClick={() => navigate('/home')}
              >
                <div className="text-4xl mb-4 group-hover:animate-float inline-block">{c.icon}</div>
                <h3 className="font-bold text-base mb-2" style={{ color: 'var(--text)' }}>{c.title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: 'var(--muted)' }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features Strip ────────────────────────────────── */}
      <section className="py-20" style={{ background: 'var(--surface)' }}>
        <div className="container-page grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: <Shield size={32} />, title: 'Secure & Private',        desc: 'OTP-protected rooms. End-to-end encryption. Consensus-locked legacy access.' },
            { icon: <Users size={32} />, title: 'Built for Families',       desc: 'Share your home with up to 15 members across Villa & Mansion plans.' },
            { icon: <Zap   size={32} />, title: 'Everything Integrated',    desc: 'Shop, stream, bank, order food — no more switching between 10 apps.' },
          ].map((f, i) => (
            <div key={i} className="flex flex-col items-center text-center p-8 rounded-2xl" style={{ border: '1px solid var(--border)' }}>
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6" style={{ background: 'rgba(116,0,122,0.12)', color: 'var(--brand-light, #a78bfa)' }}>
                {f.icon}
              </div>
              <h3 className="font-bold text-xl mb-3" style={{ color: 'var(--text)' }}>{f.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────── */}
      <section className="py-24" style={{ background: 'var(--bg)' }}>
        <div className="container-page max-w-3xl">
          <h2 className="section-title text-center text-4xl font-black mb-12">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="rounded-xl overflow-hidden cursor-pointer"
                style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
              >
                <button
                  className="w-full flex justify-between items-center px-6 py-5 text-left"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-semibold" style={{ color: 'var(--text)' }}>{faq.q}</span>
                  <ChevronDown
                    size={20}
                    className="transition-transform shrink-0"
                    style={{ color: '#74007A', transform: openFaq === i ? 'rotate(180deg)' : 'rotate(0deg)' }}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 text-sm leading-relaxed animate-fade-in" style={{ color: 'var(--muted)' }}>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ────────────────────────────────────── */}
      <section className="py-24" style={{ background: '#74007A' }}>
        <div className="container-page text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Ready to explore your street?
          </h2>
          <p className="text-lg text-purple-100 mb-10">Join thousands of families already living on HomeVault.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button onClick={() => navigate('/language')} className="bg-white text-brand-700 font-bold px-8 py-4 rounded-xl hover:shadow-2xl transition-all">
              Start for Free
            </button>
            <button onClick={() => navigate('/subscription')} className="border-2 border-white/60 text-white font-bold px-8 py-4 rounded-xl hover:bg-white/10 transition-all">
              View Plans
            </button>
          </div>
        </div>
      </section>

      {/* ── Footer ────────────────────────────────────────── */}
      <footer className="py-12" style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)' }}>
        <div className="container-page">
          <div className="flex flex-col md:flex-row justify-between gap-8">
            <div>
              <h3 className="font-black text-xl mb-2">Home<span style={{ color: '#74007A' }}>Vault</span></h3>
              <p className="text-sm max-w-xs" style={{ color: 'var(--muted)' }}>Your all-in-one virtual world. Shop, stream, share.</p>
            </div>
            {[
              { title: 'The Street', links: ['Home Vault', 'Theatre', 'Radio', 'Library', 'Food Court'] },
              { title: 'Shops',      links: ['Textile', 'Jewellery', 'Cosmetics', 'Sports', 'Showroom'] },
              { title: 'Company',    links: ['About', 'Careers', 'Privacy', 'Terms', 'Contact'] },
            ].map(col => (
              <div key={col.title}>
                <h4 className="font-bold text-sm mb-4" style={{ color: 'var(--text)' }}>{col.title}</h4>
                <ul className="space-y-2">
                  {col.links.map(l => (
                    <li key={l}><a href="#" className="text-sm hover:text-brand-400 transition-colors" style={{ color: 'var(--muted)' }}>{l}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-12 pt-6 text-center text-xs" style={{ color: 'var(--muted)', borderTop: '1px solid var(--border)' }}>
            © 2026 HomeVault. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
