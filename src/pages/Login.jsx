import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Crown, ArrowRight } from 'lucide-react';

export default function Login() {
  const navigate = useNavigate();
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/home');
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-16"
      style={{ background: 'var(--bg)' }}
    >
      {/* Background glow */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, #74007A, transparent)' }} />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, #74007A, transparent)' }} />
      </div>

      <div className="relative z-10 w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="w-14 h-14 rounded-2xl mx-auto mb-4 flex items-center justify-center"
            style={{ background: '#74007A', boxShadow: '0 0 32px rgba(116,0,122,0.4)' }}>
            <Crown size={24} className="text-white" />
          </div>
          <h1 className="text-3xl font-black" style={{ color: 'var(--text)' }}>
            {isSignUp ? 'Create your account' : 'Welcome back'}
          </h1>
          <p className="text-sm mt-2" style={{ color: 'var(--muted)' }}>
            {isSignUp ? 'Join your virtual neighbourhood today.' : 'Sign in to enter The Street.'}
          </p>
        </div>

        {/* Card */}
        <div className="rounded-2xl p-8" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
          <form onSubmit={handleSubmit} className="space-y-4">
            {isSignUp && (
              <div>
                <label className="text-xs font-semibold mb-1.5 block" style={{ color: 'var(--muted)' }}>Full Name</label>
                <input
                  type="text"
                  placeholder="Your full name"
                  className="input-field"
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                  required
                />
              </div>
            )}
            <div>
              <label className="text-xs font-semibold mb-1.5 block" style={{ color: 'var(--muted)' }}>Email / Phone</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="input-field"
                value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })}
                required
              />
            </div>
            <div>
              <label className="text-xs font-semibold mb-1.5 block" style={{ color: 'var(--muted)' }}>Password</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  className="input-field pr-12"
                  value={form.password}
                  onChange={e => setForm({ ...form, password: e.target.value })}
                  required
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                  style={{ color: 'var(--muted)' }}
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {!isSignUp && (
              <div className="text-right">
                <a href="#" className="text-xs font-semibold" style={{ color: '#74007A' }}>Forgot password?</a>
              </div>
            )}

            <button type="submit" className="btn-brand w-full py-3.5 text-base mt-2">
              {isSignUp ? 'Create Account' : 'Sign In'} <ArrowRight size={18} />
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-3 my-6">
            <div className="flex-1 h-px" style={{ background: 'var(--border)' }} />
            <span className="text-xs" style={{ color: 'var(--muted)' }}>or continue with</span>
            <div className="flex-1 h-px" style={{ background: 'var(--border)' }} />
          </div>

          {/* Social */}
          <div className="grid grid-cols-2 gap-3">
            {['Google', 'Facebook'].map(provider => (
              <button
                key={provider}
                onClick={() => navigate('/home')}
                className="flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm transition-all hover:scale-[1.02]"
                style={{ background: 'var(--card)', border: '1px solid var(--border)', color: 'var(--text)' }}
              >
                {provider === 'Google' ? '🇬' : '📘'} {provider}
              </button>
            ))}
          </div>
        </div>

        {/* Toggle */}
        <p className="text-center text-sm mt-6" style={{ color: 'var(--muted)' }}>
          {isSignUp ? 'Already have an account? ' : "Don't have an account? "}
          <button
            onClick={() => setIsSignUp(!isSignUp)}
            className="font-bold hover:underline"
            style={{ color: '#74007A' }}
          >
            {isSignUp ? 'Sign In' : 'Sign Up'}
          </button>
        </p>

        {/* Guest access */}
        <div className="text-center mt-4">
          <button
            onClick={() => navigate('/home')}
            className="text-xs font-medium hover:underline"
            style={{ color: 'var(--muted)' }}
          >
            Continue as Guest (Hall access only)
          </button>
        </div>
      </div>
    </div>
  );
}
