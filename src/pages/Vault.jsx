import { useState } from 'react';
import { Lock, Unlock, ShieldAlert, Key, Users, HardDrive, FolderOpen } from 'lucide-react';
import { motion } from 'framer-motion';
import Finance from './Finance';

const rooms = [
  { id: 1, name: "Owner's Suite",     owner: "Alex (You)",        status: 'unlocked',  storage: 85, total: 100, color: '#74007A', emoji: '👑' },
  { id: 2, name: "Guest Room A",      owner: "Sarah",             status: 'locked',    storage: 42, total: 100, color: '#3b82f6', emoji: '💙' },
  { id: 3, name: "Kids Corner",       owner: "Leo & Mia",         status: 'locked',    storage: 12, total: 100, color: '#10b981', emoji: '🌟' },
  { id: 4, name: "The Studio",        owner: "David",             status: 'locked',    storage: 95, total: 100, color: '#f59e0b', emoji: '🎨' },
  { id: 5, name: "Legacy Vault",      owner: "Grandpa (Hidden)",  status: 'consensus', storage: 78, total: 100, color: '#6b7280', emoji: '🔮' },
];

export default function Vault() {
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [otpSent, setOtpSent] = useState(false);
  const [activeTab, setActiveTab] = useState('rooms');

  return (
    <div className="min-h-screen pt-20" style={{ background: 'var(--bg)' }}>
      <div className="container-page py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-black gradient-text">🏠 Home Vault</h1>
            <p className="text-sm mt-1" style={{ color: 'var(--muted)' }}>Your private cloud. OTP-protected rooms. Consensus-locked legacy access.</p>
          </div>
          <div className="flex items-center gap-3 px-4 py-2 rounded-xl" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
            <HardDrive size={18} style={{ color: '#74007A' }} />
            <div>
              <p className="text-xs font-bold" style={{ color: 'var(--text)' }}>Villa Plan · 600 GB</p>
              <p className="text-xs" style={{ color: 'var(--muted)' }}>312 GB used</p>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-2 mb-8 p-1 rounded-xl w-fit mx-auto" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
          <button 
            onClick={() => setActiveTab('rooms')} 
            className="px-6 py-2 rounded-lg font-bold text-sm transition-all"
            style={{ background: activeTab === 'rooms' ? '#74007A' : 'transparent', color: activeTab === 'rooms' ? '#fff' : 'var(--muted)' }}
          >
            Storage Rooms
          </button>
          <button 
            onClick={() => setActiveTab('finance')} 
            className="px-6 py-2 rounded-lg font-bold text-sm transition-all"
            style={{ background: activeTab === 'finance' ? '#74007A' : 'transparent', color: activeTab === 'finance' ? '#fff' : 'var(--muted)' }}
          >
            Finance Desk
          </button>
        </div>

        {activeTab === 'rooms' ? (
          <>
            {/* The Hall */}
        <div className="rounded-2xl p-6 mb-6" style={{ background: 'linear-gradient(135deg, rgba(116,0,122,0.1), rgba(236,72,153,0.05))', border: '1px solid rgba(116,0,122,0.2)' }}>
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: 'rgba(116,0,122,0.15)' }}>
                <Users size={22} style={{ color: '#a78bfa' }} />
              </div>
              <div>
                <h2 className="text-xl font-bold" style={{ color: 'var(--text)' }}>The Hall</h2>
                <p className="text-xs" style={{ color: 'var(--muted)' }}>Shared space • Guest access allowed</p>
              </div>
            </div>
            <span className="badge badge-brand">Public</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {['Family Photos', 'Wi-Fi Info', 'Holiday Plan', 'Groceries'].map(f => (
              <div key={f} className="p-3 rounded-xl cursor-pointer flex items-center gap-3 hover:scale-[1.02] transition-all"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid var(--border)' }}>
                <FolderOpen size={18} style={{ color: '#a78bfa' }} />
                <span className="text-sm font-medium truncate" style={{ color: 'var(--text)' }}>{f}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Private Rooms */}
        <h2 className="text-xl font-bold mb-4" style={{ color: 'var(--text)' }}>Private Rooms</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {rooms.map((room, i) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              onClick={() => { setSelectedRoom(room); setOtpSent(false); }}
              className="cursor-pointer p-6 rounded-2xl relative overflow-hidden group transition-all hover:scale-[1.02]"
              style={{ background: 'var(--surface)', border: `1px solid ${room.status === 'consensus' ? '#f43f5e44' : 'var(--border)'}`, boxShadow: room.status === 'consensus' ? '0 0 20px rgba(244,63,94,0.1)' : 'none' }}
            >
              <div className="absolute top-0 left-0 w-1 h-full rounded-l-2xl" style={{ background: room.color }} />
              <div className="flex justify-between items-start mb-5">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl" style={{ background: `${room.color}22` }}>
                  {room.emoji}
                </div>
                <div className="flex items-center gap-2">
                  {room.status === 'unlocked' && <Unlock size={18} style={{ color: '#10b981' }} />}
                  {room.status === 'locked' && <Lock size={18} style={{ color: 'var(--muted)' }} />}
                  {room.status === 'consensus' && <ShieldAlert size={18} style={{ color: '#f43f5e' }} />}
                </div>
              </div>
              <h3 className="font-bold text-base mb-1" style={{ color: 'var(--text)' }}>{room.name}</h3>
              <p className="text-xs mb-4" style={{ color: 'var(--muted)' }}>{room.owner}</p>
              {/* Storage bar */}
              <div>
                <div className="flex justify-between text-xs mb-1" style={{ color: 'var(--muted)' }}>
                  <span>{room.storage} GB used</span><span>{room.total} GB</span>
                </div>
                <div className="h-1.5 rounded-full" style={{ background: 'var(--border)' }}>
                  <div className="h-full rounded-full transition-all" style={{ width: `${room.storage}%`, background: room.status === 'consensus' ? '#f43f5e' : room.color }} />
                </div>
              </div>
              {room.status === 'consensus' && (
                <div className="mt-3 text-xs font-semibold" style={{ color: '#f43f5e' }}>
                  ⚠ Consensus Lock — 1/5 Approvals
                </div>
              )}
            </motion.div>
          ))}
          </div>
        </>
        ) : (
          <Finance />
        )}
      </div>

      {/* Modal */}
      {selectedRoom && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4" onClick={() => setSelectedRoom(null)}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            onClick={e => e.stopPropagation()}
            className="rounded-2xl p-8 w-full max-w-sm relative"
            style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
          >
            <button onClick={() => setSelectedRoom(null)} className="absolute top-4 right-4 text-2xl" style={{ color: 'var(--muted)' }}>✕</button>
            {selectedRoom.status === 'locked' && !otpSent && (
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center text-3xl" style={{ background: 'rgba(59,130,246,0.1)' }}>🔑</div>
                <h3 className="text-xl font-black mb-2" style={{ color: 'var(--text)' }}>Room Locked</h3>
                <p className="text-sm mb-6" style={{ color: 'var(--muted)' }}>An OTP will be sent to <strong style={{ color: 'var(--text)' }}>{selectedRoom.owner}</strong>'s phone to grant you access.</p>
                <div className="flex gap-3">
                  <button className="btn-outline flex-1" onClick={() => setSelectedRoom(null)}>Cancel</button>
                  <button className="btn-brand flex-1" onClick={() => setOtpSent(true)}><Key size={16} /> Request OTP</button>
                </div>
              </div>
            )}
            {selectedRoom.status === 'locked' && otpSent && (
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center text-3xl" style={{ background: 'rgba(16,185,129,0.1)' }}>📱</div>
                <h3 className="text-xl font-black mb-2" style={{ color: 'var(--text)' }}>OTP Sent!</h3>
                <p className="text-sm mb-4" style={{ color: 'var(--muted)' }}>Waiting for <strong style={{ color: 'var(--text)' }}>{selectedRoom.owner}</strong> to approve. Enter the OTP once received.</p>
                <div className="flex gap-2 justify-center mb-4">
                  {[...Array(4)].map((_, i) => (
                    <input key={i} maxLength={1} className="w-12 h-12 text-center text-xl font-bold rounded-xl input-field" />
                  ))}
                </div>
                <button className="btn-brand w-full">Verify & Enter</button>
              </div>
            )}
            {selectedRoom.status === 'consensus' && (
              <div className="text-center">
                <div className="text-4xl mb-4">🔮</div>
                <h3 className="text-xl font-black mb-2" style={{ color: '#f43f5e' }}>Legacy Vault</h3>
                <p className="text-sm mb-5" style={{ color: 'var(--muted)' }}>This room requires approval from all 5 active home members to unlock.</p>
                <div className="space-y-2 mb-5 text-left">
                  {[['Alex (You)', true], ['Sarah', false], ['Leo', false], ['Mia', false], ['David', false]].map(([name, approved]) => (
                    <div key={name} className="flex justify-between items-center py-2 px-3 rounded-xl" style={{ background: 'var(--card)' }}>
                      <span className="text-sm font-medium" style={{ color: 'var(--text)' }}>{name}</span>
                      <span className={`text-xs font-bold ${approved ? 'text-green-400' : 'text-gray-500'}`}>{approved ? '✓ Approved' : '⏳ Pending'}</span>
                    </div>
                  ))}
                </div>
                <div className="h-2 rounded-full mb-4" style={{ background: 'var(--border)' }}>
                  <div className="h-full rounded-full w-1/5" style={{ background: '#f43f5e' }} />
                </div>
                <button className="btn-brand w-full" style={{ background: '#f43f5e', boxShadow: '0 0 20px rgba(244,63,94,0.4)' }}>Sign My Approval</button>
              </div>
            )}
            {selectedRoom.status === 'unlocked' && (
              <div className="text-center">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-xl font-black mb-2" style={{ color: 'var(--text)' }}>Welcome back!</h3>
                <p className="text-sm mb-6" style={{ color: 'var(--muted)' }}>Your room is ready. {selectedRoom.storage} GB used of {selectedRoom.total} GB.</p>
                <button className="btn-brand w-full">Enter Room</button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </div>
  );
}
