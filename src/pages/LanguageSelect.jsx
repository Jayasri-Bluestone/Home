import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Globe, ChevronRight } from 'lucide-react';

const languages = [
  { code: 'en', name: 'English',    native: 'English',    flag: '🇬🇧' },
  { code: 'ta', name: 'Tamil',      native: 'தமிழ்',       flag: '🇮🇳' },
  { code: 'hi', name: 'Hindi',      native: 'हिन्दी',       flag: '🇮🇳' },
  { code: 'te', name: 'Telugu',     native: 'తెలుగు',       flag: '🇮🇳' },
  { code: 'kn', name: 'Kannada',    native: 'ಕನ್ನಡ',       flag: '🇮🇳' },
  { code: 'ml', name: 'Malayalam',  native: 'മലയാളം',      flag: '🇮🇳' },
  { code: 'mr', name: 'Marathi',    native: 'मराठी',        flag: '🇮🇳' },
  { code: 'bn', name: 'Bengali',    native: 'বাংলা',        flag: '🇧🇩' },
  { code: 'fr', name: 'French',     native: 'Français',    flag: '🇫🇷' },
  { code: 'de', name: 'German',     native: 'Deutsch',     flag: '🇩🇪' },
  { code: 'es', name: 'Spanish',    native: 'Español',     flag: '🇪🇸' },
  { code: 'ar', name: 'Arabic',     native: 'العربية',     flag: '🇸🇦' },
];

export default function LanguageSelect() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState('en');

  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-24 pb-12"
      style={{ background: 'var(--bg)' }}
    >
      {/* Glow blob */}
      <div className="fixed top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(116,0,122,0.15) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 w-full max-w-2xl">
        <div className="text-center mb-10">
          <div className="w-16 h-16 rounded-2xl mx-auto mb-6 flex items-center justify-center"
            style={{ background: 'rgba(116,0,122,0.12)', color: '#a78bfa' }}>
            <Globe size={28} />
          </div>
          <h1 className="text-3xl font-black mb-3" style={{ color: 'var(--text)' }}>
            Select Your Language
          </h1>
          <p className="text-sm" style={{ color: 'var(--muted)' }}>
            HomeVault will use this for your experience. You can change it later.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
          {languages.map(lang => (
            <button
              key={lang.code}
              onClick={() => setSelected(lang.code)}
              className="flex items-center gap-3 px-4 py-4 rounded-xl text-left transition-all font-medium text-sm"
              style={{
                background: selected === lang.code ? 'rgba(116,0,122,0.15)' : 'var(--card)',
                border: selected === lang.code ? '2px solid #74007A' : '2px solid transparent',
                color: 'var(--text)',
                boxShadow: selected === lang.code ? '0 0 0 4px rgba(116,0,122,0.1)' : 'none',
              }}
            >
              <span className="text-2xl">{lang.flag}</span>
              <div>
                <div className="font-bold">{lang.native}</div>
                <div className="text-xs" style={{ color: 'var(--muted)' }}>{lang.name}</div>
              </div>
            </button>
          ))}
        </div>

        <button
          onClick={() => navigate('/login')}
          className="btn-brand w-full py-4 text-base font-bold"
        >
          Continue in {languages.find(l => l.code === selected)?.native} <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}
