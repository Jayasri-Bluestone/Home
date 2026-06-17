import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Sun, Moon, Globe, Search, Bell, Menu, X, Crown, ChevronLeft } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Navbar = ({ transparent = false }) => {
  const { theme, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const isLanding = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navBg = isLanding
    ? scrolled ? (theme === 'light' ? 'bg-white/90 backdrop-blur-xl shadow-sm border-b border-[var(--border)]' : 'bg-black/90 backdrop-blur-xl shadow-lg') : 'bg-transparent'
    : 'bg-[var(--surface)] border-b border-[var(--border)]';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}>
      <div className="container-page flex items-center justify-between h-16">

        {/* Left Section: Back Button + Logo */}
        <div className="flex items-center gap-3">
          {location.pathname !== '/' && (
            <button 
              onClick={() => navigate(-1)}
              className="w-9 h-9 rounded-xl flex items-center justify-center hover:bg-[var(--surface)] border border-transparent hover:border-[var(--border)] transition-all"
              style={{ color: 'var(--text)' }}
              title="Go Back"
            >
              <ChevronLeft size={20} />
            </button>
          )}
          <Link to="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-xl flex items-center justify-center shadow-[0_0_16px_rgba(116,0,122,0.5)]"
            style={{ background: '#74007A' }}>
            <Crown size={18} className="text-white" />
          </div>
          <span className="text-xl font-black tracking-tight" style={{ color: 'var(--text)' }}>
            Home<span className="text-brand-500">Vault</span>
          </span>
          </Link>
        </div>

        {/* Desktop Nav Links */}
        {!isLanding && (
          <div className="hidden md:flex items-center gap-1">
            {[
              { label: 'The Street', path: '/home' },
              { label: 'Theatre', path: '/theatre' },
              { label: 'Radio', path: '/radio' },
              { label: 'Library', path: '/library' },
              { label: 'Food', path: '/food' },
            ].map(({ label, path }) => (
              <Link
                key={path}
                to={path}
                className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all ${
                  location.pathname === path
                    ? 'bg-brand-600/20 text-brand-400'
                    : 'text-[var(--muted)] hover:text-[var(--text)]'
                }`}
              >
                {label}
              </Link>
            ))}
          </div>
        )}

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle */}
          <button
            onClick={toggle}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            className="w-9 h-9 rounded-xl flex items-center justify-center transition-all hover:bg-brand-600/20"
            style={{ color: 'var(--muted)' }}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {isLanding ? (
            <>
              <Link to="/login" className="text-sm font-semibold" style={{ color: 'var(--text)' }}>Sign In</Link>
              <button onClick={() => navigate('/login')} className="btn-brand text-sm py-2 px-5">Get Started</button>
            </>
          ) : (
            <>
              <button className="w-9 h-9 rounded-xl flex items-center justify-center hover:bg-brand-600/20" style={{ color: 'var(--muted)' }}>
                <Search size={18} />
              </button>
              <button className="w-9 h-9 rounded-xl flex items-center justify-center hover:bg-brand-600/20 relative" style={{ color: 'var(--muted)' }}>
                <Bell size={18} />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-pink-500 rounded-full"></span>
              </button>
              <Link to="/subscription">
                <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-brand-600 to-pink-500 flex items-center justify-center cursor-pointer shadow-lg">
                  <span className="text-white text-xs font-bold">A</span>
                </div>
              </Link>
            </>
          )}

          {/* Mobile Menu */}
          <button
            className="md:hidden w-9 h-9 rounded-xl flex items-center justify-center"
            style={{ color: 'var(--text)' }}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4" style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)' }}>
          {[
            { label: 'The Street', path: '/home' },
            { label: 'Theatre', path: '/theatre' },
            { label: 'Radio', path: '/radio' },
            { label: 'Library', path: '/library' },
            { label: 'Food', path: '/food' },
          ].map(({ label, path }) => (
            <Link
              key={path}
              to={path}
              onClick={() => setMenuOpen(false)}
              className="block py-3 text-sm font-medium border-b"
              style={{ color: 'var(--text)', borderColor: 'var(--border)' }}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
