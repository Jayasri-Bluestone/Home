import { ArrowUpRight, ArrowDownLeft, Plus, DollarSign, Users, Gift } from 'lucide-react';

const Finance = () => {
  return (
    <div className="max-w-6xl mx-auto py-4">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2 flex items-center gap-3">
            <DollarSign className="text-accent" size={32} /> Finance Desk
          </h1>
          <p className="text-gray-400">Track group expenses, split bills, and pool money for gifts.</p>
        </div>
        <button className="glass-button bg-accent/80 hover:bg-accent flex items-center gap-2 shadow-[0_0_15px_rgba(244,63,94,0.3)]">
          <Plus size={18} /> New Expense
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="glass-card p-6 bg-gradient-to-br from-surface to-black/40 border-l-4 border-l-emerald-500">
          <p className="text-gray-400 text-sm mb-1">You are owed</p>
          <h2 className="text-3xl font-bold text-white">₹12,050</h2>
        </div>
        <div className="glass-card p-6 bg-gradient-to-br from-surface to-black/40 border-l-4 border-l-accent">
          <p className="text-gray-400 text-sm mb-1">You owe</p>
          <h2 className="text-3xl font-bold text-white">₹3,480</h2>
        </div>
        <div className="glass-card p-6 bg-gradient-to-br from-primary/20 to-surface border border-primary/30">
          <div className="flex justify-between items-start mb-2">
            <p className="text-primary text-sm font-medium">Dad's Birthday Gift Pool</p>
            <Gift size={16} className="text-primary" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">₹29,000 / ₹40,000</h2>
          <div className="w-full bg-black/40 h-1.5 rounded-full">
            <div className="bg-gradient-to-r from-primary to-accent h-1.5 rounded-full w-[70%]"></div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Split Breakdown */}
        <div className="glass-panel p-6">
          <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
            <Users size={20} className="text-gray-400" /> Balances
          </h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 rounded-xl bg-surface/50 border border-white/5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-500"></div>
                <div>
                  <p className="font-semibold text-white">Sarah</p>
                  <p className="text-xs text-gray-400">Owes you</p>
                </div>
              </div>
              <span className="text-emerald-400 font-bold">+₹7,050</span>
            </div>
            
            <div className="flex items-center justify-between p-3 rounded-xl bg-surface/50 border border-white/5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-orange-500"></div>
                <div>
                  <p className="font-semibold text-white">David</p>
                  <p className="text-xs text-gray-400">You owe</p>
                </div>
              </div>
              <span className="text-accent font-bold">-₹3,480</span>
            </div>
            
            <div className="flex items-center justify-between p-3 rounded-xl bg-surface/50 border border-white/5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-500"></div>
                <div>
                  <p className="font-semibold text-white">Leo & Mia</p>
                  <p className="text-xs text-gray-400">Owes you</p>
                </div>
              </div>
              <span className="text-emerald-400 font-bold">+₹5,000</span>
            </div>
          </div>
          <button className="w-full mt-6 py-2 rounded-xl border border-white/10 text-gray-300 hover:bg-surfaceHighlight transition-colors text-sm font-medium">
            Settle Up All
          </button>
        </div>

        {/* Recent Transactions */}
        <div className="glass-panel p-6">
          <h3 className="text-lg font-bold mb-6">Recent Activity</h3>
          <div className="space-y-4">
            {[
              { title: "Netflix Subscription", by: "Alex", date: "Today", amount: "₹649", type: "split" },
              { title: "Groceries", by: "Sarah", date: "Yesterday", amount: "₹4,250", type: "borrowed" },
              { title: "Pizza Night", by: "Alex", date: "3 days ago", amount: "₹1,200", type: "split" },
              { title: "Internet Bill", by: "David", date: "5 days ago", amount: "₹1,499", type: "borrowed" },
            ].map((tx, i) => (
              <div key={i} className="flex items-center justify-between border-b border-white/5 pb-4 last:border-0 last:pb-0">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${tx.type === 'split' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-accent/20 text-accent'}`}>
                    {tx.type === 'split' ? <ArrowDownLeft size={18} /> : <ArrowUpRight size={18} />}
                  </div>
                  <div>
                    <p className="font-medium text-white text-sm">{tx.title}</p>
                    <p className="text-xs text-gray-400">Paid by {tx.by} • {tx.date}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="font-bold text-white block">{tx.amount}</span>
                  <span className="text-xs text-gray-500">Split 4 ways</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Finance;
