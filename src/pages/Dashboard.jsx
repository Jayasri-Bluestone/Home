import { useState } from 'react';
import { motion } from 'framer-motion';
import { Lock, Unlock, Users, Key, ShieldAlert } from 'lucide-react';

const rooms = [
  { id: 1, name: "Owner's Master Room", owner: "Alex", status: "unlocked", storage: "85 GB", color: "from-primary to-purple-500" },
  { id: 2, name: "Guest Room A", owner: "Sarah", status: "locked", storage: "42 GB", color: "from-blue-500 to-cyan-500" },
  { id: 3, name: "Kids Room", owner: "Leo & Mia", status: "locked", storage: "12 GB", color: "from-emerald-500 to-teal-500" },
  { id: 4, name: "Studio", owner: "David", status: "locked", storage: "95 GB", color: "from-orange-500 to-amber-500" },
  { id: 5, name: "The Vault (Legacy)", owner: "Grandpa (Hidden)", status: "consensus", storage: "120 GB", color: "from-gray-700 to-gray-900", border: "border-accent/50" }
];

const Dashboard = () => {
  const [selectedRoom, setSelectedRoom] = useState(null);

  const renderModal = () => {
    if (!selectedRoom) return null;

    return (
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          className="glass-panel w-full max-w-md p-8 relative"
        >
          <button 
            onClick={() => setSelectedRoom(null)}
            className="absolute top-4 right-4 text-gray-400 hover:text-white"
          >
            ✕
          </button>
          
          {selectedRoom.status === 'locked' ? (
            <div className="text-center">
              <div className="w-16 h-16 bg-surfaceHighlight rounded-full flex items-center justify-center mx-auto mb-4 border border-white/10">
                <Key className="text-blue-400" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-2">Room Locked</h3>
              <p className="text-gray-400 mb-6">
                This is <span className="text-white font-semibold">{selectedRoom.owner}'s</span> private space. 
                Requesting access will send an OTP to their device.
              </p>
              <div className="flex gap-4 justify-center">
                <button className="glass-button bg-surface hover:bg-surfaceHighlight shadow-none">Cancel</button>
                <button className="glass-button">Request OTP</button>
              </div>
            </div>
          ) : selectedRoom.status === 'consensus' ? (
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-accent/50 shadow-[0_0_30px_rgba(244,63,94,0.3)]">
                <ShieldAlert className="text-accent" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-accent">Legacy Vault</h3>
              <p className="text-gray-300 mb-4 text-sm">
                This room is in Legacy mode. Unlocking it requires consensus approval from all 5 active members of The Villa.
              </p>
              <div className="bg-surface rounded-xl p-4 mb-6 text-left space-y-2">
                <div className="flex justify-between items-center text-sm">
                  <span>Alex (Owner)</span>
                  <span className="text-emerald-400 flex items-center gap-1"><Unlock size={14}/> Approved</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span>Sarah</span>
                  <span className="text-gray-500 flex items-center gap-1"><Lock size={14}/> Pending</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span>David</span>
                  <span className="text-gray-500 flex items-center gap-1"><Lock size={14}/> Pending</span>
                </div>
                <div className="w-full bg-black/40 h-1.5 rounded-full mt-3">
                  <div className="bg-accent h-1.5 rounded-full w-1/5"></div>
                </div>
                <p className="text-xs text-right text-gray-400 mt-1">1/5 Approvals</p>
              </div>
              <button className="glass-button w-full bg-accent/80 hover:bg-accent shadow-[0_0_15px_rgba(244,63,94,0.4)]">
                Sign Approval
              </button>
            </div>
          ) : (
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-2">Welcome to your room</h3>
              <p className="text-gray-400 mb-6">Storage used: {selectedRoom.storage}</p>
              <button className="glass-button" onClick={() => setSelectedRoom(null)}>Enter Vault</button>
            </div>
          )}
        </motion.div>
      </div>
    );
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Home Layout</h1>
        <p className="text-gray-400">Manage your virtual home, access rooms, and view the central hall.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* The Hall (Shared Space) */}
        <div className="lg:col-span-3">
          <motion.div 
            whileHover={{ scale: 0.99 }}
            className="glass-card p-8 bg-gradient-to-br from-surface to-black/40 border-t border-l border-white/20"
          >
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-2xl font-bold flex items-center gap-3">
                  <Users className="text-primary" /> The Hall (Shared Space)
                </h2>
                <p className="text-gray-400 mt-1">Guest access allowed. Public family files and announcements.</p>
              </div>
              <button className="px-4 py-2 rounded-lg bg-surface border border-white/10 text-sm hover:bg-surfaceHighlight transition-colors">
                Manage Guests
              </button>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['Family Photos 2026', 'Wi-Fi Passwords', 'Holiday Itinerary', 'Shared Grocery List'].map((folder) => (
                <div key={folder} className="p-4 rounded-xl bg-surface/50 border border-white/5 hover:border-primary/50 transition-colors cursor-pointer group">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center mb-3 group-hover:bg-primary/40 transition-colors">
                    📁
                  </div>
                  <p className="font-medium text-sm text-gray-200">{folder}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Private Rooms */}
        {rooms.map((room, index) => (
          <motion.div
            key={room.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            onClick={() => setSelectedRoom(room)}
            className={`glass-card p-6 relative overflow-hidden ${room.border || 'border-white/10'}`}
          >
            <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${room.color}`}></div>
            
            <div className="flex justify-between items-start mb-4">
              <div className="w-12 h-12 rounded-xl bg-surfaceHighlight flex items-center justify-center border border-white/5">
                {room.status === 'unlocked' ? <Unlock size={20} className="text-emerald-400" /> : 
                 room.status === 'consensus' ? <ShieldAlert size={20} className="text-accent" /> :
                 <Lock size={20} className="text-gray-400" />}
              </div>
              <span className="text-xs font-semibold px-2 py-1 rounded-md bg-black/40 text-gray-300">
                {room.storage}
              </span>
            </div>
            
            <h3 className="text-lg font-bold mb-1">{room.name}</h3>
            <p className="text-sm text-gray-400">Owned by <span className="text-white">{room.owner}</span></p>
            
            {room.status === 'consensus' && (
              <div className="mt-4 pt-4 border-t border-white/5">
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-accent font-medium">Consensus Lock</span>
                  <span className="text-gray-400">1/5 Appv</span>
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {renderModal()}
    </div>
  );
};

export default Dashboard;
