import { motion } from 'motion/react';
import { MapPin, Phone, MessageCircle } from 'lucide-react';

const STORES = [
  {
    name: "Bangga Cipete Raya",
    address: "Jl. Cipete Raya No. 7, Jakarta Selatan",
    phone: "0812-3456-7890",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=800&auto=format&fit=crop",
    logistics: ["Parkir Luas", "Laptop Friendly", "WiFi Kencang", "Akses Kursi Roda"],
    status: "Dog Friendly"
  },
  {
    name: "Bangga BSD",
    address: "The Breeze BSD City, Tangerang",
    phone: "0812-9876-5432",
    image: "https://images.unsplash.com/photo-1559925393-8be0ec41b505?q=80&w=800&auto=format&fit=crop",
    logistics: ["Parkir Mall", "Musholla Dekat", "Area Outdoor", "Stop Kontak"],
    status: "Laptop Policy: Max 2h"
  },
  {
    name: "Bangga Bandung",
    address: "Jl. Riau No. 12, Bandung",
    phone: "022-7654321",
    image: "https://images.unsplash.com/photo-1445116572660-236b2297bb32?q=80&w=800&auto=format&fit=crop",
    logistics: ["Parkir Pinggir Jalan", "Homey Space", "Banyak Tanaman", "Sejuk"],
    status: "Slow Living Mood"
  }
];

export function Locations() {
  return (
    <div className="pt-[113px] pb-24 px-6 sm:px-8 md:px-20 min-h-screen">
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-black italic tracking-tighter uppercase mb-12 sm:mb-16 pt-[15px] relative inline-block">
        LOKASI <span className="text-brand-yellow not-italic">BANGGA</span>
        <div className="absolute -bottom-2 md:-bottom-4 left-0 w-full h-3 md:h-5 bg-brand-yellow/30 -z-10 -rotate-1" />
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
        {STORES.map((store, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="brutalist-card flex flex-col group h-full"
          >
            <div className="h-48 border-b-2 border-brand-black overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500 relative">
              <img src={store.image} alt={store.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute top-4 right-4 bg-brand-yellow border-2 border-brand-black px-3 py-1 font-black text-[10px] uppercase shadow-brutalist-sm">
                {store.status}
              </div>
            </div>
            <div className="p-8 flex flex-col flex-grow">
              <h3 className="text-2xl font-black uppercase mb-4 tracking-tight">{store.name}</h3>
              
              <div className="space-y-6 flex-grow mb-8 font-medium">
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <MapPin className="size-5 shrink-0 text-brand-yellow" />
                    <p className="text-sm opacity-70 leading-tight">{store.address}</p>
                  </div>
                  <div className="flex gap-3">
                    <Phone className="size-5 shrink-0 text-brand-yellow" />
                    <p className="text-sm">{store.phone}</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-brand-black/10">
                   <h5 className="text-[10px] font-black uppercase tracking-widest text-brand-black/30 mb-3">Fasilitas</h5>
                   <div className="flex flex-wrap gap-2">
                     {store.logistics.map((item, j) => (
                       <span key={j} className="bg-brand-cream border border-brand-black px-2 py-1 text-[10px] font-bold uppercase">
                         {item}
                       </span>
                     ))}
                   </div>
                </div>
              </div>

              <button className="w-full py-4 bg-brand-black text-white hover:bg-brand-yellow hover:text-brand-black font-black uppercase text-xs tracking-widest flex items-center justify-center gap-2 transition-all group/btn shadow-brutalist-sm active:translate-x-[2px] active:translate-y-[2px] active:shadow-none">
                Petunjuk Arah <MessageCircle className="size-4 group-hover/btn:rotate-12" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
