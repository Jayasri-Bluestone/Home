import { Grid, Move, Check } from 'lucide-react';
import { motion } from 'framer-motion';

const Decorator = () => {
  return (
    <div className="max-w-6xl mx-auto h-full flex flex-col py-4">
      <div className="flex justify-between items-end mb-6">
        <div>
          <h1 className="text-3xl font-bold mb-2 flex items-center gap-3">
            <Grid className="text-teal-400" size={32} /> Visual Decorator
          </h1>
          <p className="text-gray-400">Plan and visualize actual furniture and decor in your rooms.</p>
        </div>
        <div className="flex items-center gap-3">
          <select className="bg-surface border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-teal-500">
            <option>Hall (Shared Space)</option>
            <option>Owner's Room</option>
          </select>
          <button className="glass-button bg-teal-500/80 hover:bg-teal-500 shadow-[0_0_15px_rgba(20,184,166,0.3)]">
            Save Layout
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 flex-1">
        {/* Products Sidebar */}
        <div className="glass-panel p-4 flex flex-col h-[600px] overflow-hidden">
          <h3 className="font-bold text-lg mb-4">Catalog</h3>
          <div className="flex-1 overflow-y-auto pr-2 space-y-4">
            {[
              { name: "Modern Sofa", type: "Seating", img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" },
              { name: "TV Showcase", type: "Entertainment", img: "https://images.unsplash.com/photo-1593696140826-c58b021acf8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" },
              { name: "Wall Photo Frame", type: "Decor", img: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" },
              { name: "Coffee Table", type: "Table", img: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" },
              { name: "Kitchen Island", type: "Kitchen", img: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" }
            ].map((item, i) => (
              <div key={i} className="bg-surface rounded-xl border border-white/5 cursor-grab hover:border-teal-500/50 overflow-hidden group">
                <div className="h-24 w-full bg-black/40 overflow-hidden relative">
                  <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-3">
                  <p className="font-semibold text-sm text-white">{item.name}</p>
                  <p className="text-xs text-gray-500">{item.type}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2D Canvas Mockup */}
        <div className="lg:col-span-3 glass-panel p-6 relative overflow-hidden bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CgkJPHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPgoJCTxwYXRoIGQ9Ik0wIDBoNDB2MUgweiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIvPgoJCTxwYXRoIGQ9Ik0wIDBoMXY0MEgweiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIvPgoJPC9zdmc+')] bg-repeat min-h-[600px]">
          <div className="absolute top-4 left-4 bg-black/60 px-3 py-1 rounded-md border border-white/10 text-xs font-mono text-gray-400 z-10">
            Layout: The Hall 
          </div>

          {/* Realistic Draggable Sofa */}
          <motion.div 
            drag
            dragMomentum={false}
            className="absolute top-1/4 left-1/4 w-64 h-40 bg-surface border-2 border-white/20 rounded-xl flex flex-col items-center justify-center cursor-move shadow-2xl overflow-hidden group"
          >
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center">
              <Move size={24} className="text-white drop-shadow-lg" />
            </div>
            <img src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Sofa" className="w-full h-full object-cover" />
            <div className="absolute bottom-2 left-2 bg-black/60 backdrop-blur-md px-2 py-1 rounded text-xs text-white font-semibold z-20 border border-white/10">
              Modern Sofa
            </div>
          </motion.div>

          {/* Realistic Draggable TV Showcase */}
          <motion.div 
            drag
            dragMomentum={false}
            className="absolute top-1/2 right-1/4 w-48 h-56 bg-surface border-2 border-white/20 rounded-xl flex flex-col items-center justify-center cursor-move shadow-2xl overflow-hidden group"
          >
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center">
              <Move size={24} className="text-white drop-shadow-lg" />
            </div>
            <img src="https://images.unsplash.com/photo-1593696140826-c58b021acf8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="TV Showcase" className="w-full h-full object-cover" />
            <div className="absolute bottom-2 left-2 bg-black/60 backdrop-blur-md px-2 py-1 rounded text-xs text-white font-semibold z-20 border border-white/10">
              TV Showcase
            </div>
          </motion.div>

          {/* Realistic Draggable Photo Frame (Wall) */}
          <motion.div 
            drag
            dragMomentum={false}
            className="absolute top-[10%] right-[10%] w-32 h-40 bg-surface border-2 border-white/20 rounded-xl flex flex-col items-center justify-center cursor-move shadow-2xl overflow-hidden group"
          >
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center">
              <Move size={24} className="text-white drop-shadow-lg" />
            </div>
            <img src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" alt="Photo Frame" className="w-full h-full object-cover" />
            <div className="absolute top-2 right-2 bg-teal-500/80 backdrop-blur-md px-2 py-1 rounded text-[10px] text-white font-bold z-20">
              Wall Snap
            </div>
          </motion.div>
          
          <div className="absolute bottom-4 right-4 bg-surfaceHighlight p-3 rounded-xl border border-white/10 z-10">
            <h4 className="text-sm font-semibold mb-2 flex items-center gap-1">
              <Check size={14} className="text-emerald-400" /> Photorealistic View
            </h4>
            <p className="text-xs text-gray-400">Drag actual product images to visualize.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Decorator;
