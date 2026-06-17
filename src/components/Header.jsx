import { Bell, Search, User } from 'lucide-react';

const Header = () => {
  return (
    <header className="h-20 border-b border-white/10 px-8 flex items-center justify-between bg-background/50 backdrop-blur-md z-10 sticky top-0">
      <div className="flex items-center gap-4">
        <h2 className="text-2xl font-bold text-white tracking-tight">The Villa</h2>
        <span className="px-3 py-1 rounded-full bg-surfaceHighlight text-xs font-medium text-gray-300 border border-white/5">
          Standard Family Plan
        </span>
      </div>

      <div className="flex items-center gap-6">
        <div className="relative hidden md:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input 
            type="text" 
            placeholder="Search home vault..." 
            className="bg-surface border border-white/10 rounded-full pl-10 pr-4 py-2 text-sm text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all w-64"
          />
        </div>

        <button className="relative text-gray-400 hover:text-white transition-colors">
          <Bell size={22} />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-accent rounded-full border-2 border-[#0a0a0f]"></span>
        </button>

        <div className="flex items-center gap-3 pl-6 border-l border-white/10">
          <div className="text-right hidden md:block">
            <p className="text-sm font-semibold text-white">Alex (Owner)</p>
            <p className="text-xs text-gray-400">Master Bedroom</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 flex items-center justify-center border-2 border-primary/50 cursor-pointer shadow-lg">
            <User size={20} className="text-white" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
