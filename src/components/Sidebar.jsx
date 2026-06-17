import { Link, useLocation } from 'react-router-dom';
import { Home, Tv, CreditCard, BookOpen, Crown, Settings } from 'lucide-react';

const Sidebar = () => {
  const location = useLocation();

  const navItems = [
    { name: 'My Home', path: '/', icon: Home },
    { name: 'Lounge', path: '/lounge', icon: Tv },
    { name: 'Finance', path: '/finance', icon: CreditCard },
    { name: 'Library & Shrine', path: '/library', icon: BookOpen },
    { name: 'Decorator', path: '/decorator', icon: Settings },
    { name: 'Subscriptions', path: '/subscription', icon: Crown },
  ];

  return (
    <aside className="w-64 border-r border-white/10 glass-panel m-4 flex flex-col hidden md:flex z-10">
      <div className="p-6 flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/30">
          <Crown size={24} className="text-white" />
        </div>
        <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
          Home Vault
        </h1>
      </div>
      
      <nav className="flex-1 px-4 py-6 space-y-2">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.name}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                isActive 
                  ? 'bg-primary/20 text-white border border-primary/50 shadow-[inset_0_0_15px_rgba(109,40,217,0.2)]' 
                  : 'text-gray-400 hover:text-white hover:bg-surfaceHighlight'
              }`}
            >
              <item.icon size={20} className={isActive ? 'text-primary' : ''} />
              <span className="font-medium">{item.name}</span>
            </Link>
          );
        })}
      </nav>

      <div className="p-4 mt-auto">
        <div className="glass-panel p-4 rounded-xl border border-white/5 bg-black/20">
          <p className="text-xs text-gray-400 mb-2">Storage (Villa Plan)</p>
          <div className="w-full bg-surface rounded-full h-2 mb-1">
            <div className="bg-gradient-to-r from-primary to-accent h-2 rounded-full w-[65%]"></div>
          </div>
          <p className="text-xs font-semibold text-white">390 GB / 600 GB</p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
