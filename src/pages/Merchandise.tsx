import { motion } from 'motion/react';
import { ShoppingBag, ArrowRight } from 'lucide-react';
import { LazyImage } from '../components/LazyImage';

const MERCH = [
  { id: 101, name: "Kaus Kopi Tetangga", price: 150000, category: "Apparel", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800&auto=format&fit=crop" },
  { id: 102, name: "Tumbler Kopi Lokal", price: 250000, category: "Hardware", image: "https://images.unsplash.com/photo-1517254456976-ee8682099819?q=80&w=800&auto=format&fit=crop" },
  { id: 103, name: "Tote Bag Kanvas", price: 75000, category: "Accessory", image: "https://images.unsplash.com/photo-1544816153-12ad5d71431a?q=80&w=800&auto=format&fit=crop" },
  { id: 104, name: "Sticker Pack Tetangga", price: 25000, category: "Small Stuff", image: "https://images.unsplash.com/photo-1572375927902-1c09cfec6e97?q=80&w=800&auto=format&fit=crop" },
];

export function Merchandise() {
  return (
    <div className="pt-[113px] pb-24 px-8 md:px-20 min-h-screen">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 pt-[15px]">
        <div>
          <h2 className="text-6xl font-black italic tracking-tighter uppercase mb-4">MER<span className="text-brand-yellow">CHAND</span>ISE</h2>
          <p className="text-brand-black/60 max-w-md font-medium text-lg leading-tight">Bawa pulang semangat Kopi Lokal dalam bentuk pernak-pernik yang keren.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {MERCH.map((item, i) => (
          <motion.div 
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="brutalist-card flex flex-col overflow-hidden group bg-white"
          >
            <div className="aspect-[3/4] border-b-2 border-brand-black overflow-hidden bg-brand-cream-dark">
              <LazyImage
                src={item.image}
                alt={item.name}
                containerClassName="w-full h-full"
                imageClassName="w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <span className="text-[10px] font-black uppercase text-brand-black/40 mb-2 block">{item.category}</span>
              <h4 className="font-black uppercase tracking-tight text-lg mb-4">{item.name}</h4>
              <div className="flex justify-between items-center bg-brand-yellow px-4 py-3 border-2 border-brand-black shadow-brutalist-sm group-hover:shadow-brutalist-md transition-all">
                <span className="font-black italic">Rp{item.price.toLocaleString()}</span>
                <ShoppingBag className="size-4" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-24 p-12 bg-brand-black text-white border-4 border-brand-yellow flex flex-col md:flex-row items-center justify-between gap-12 shadow-brutalist-lg">
        <div className="text-center md:text-left">
          <h3 className="text-4xl font-black uppercase italic mb-4">GABUNG JADI MITRA?</h3>
          <p className="opacity-60 max-w-sm">Jalin kerja sama dan buka Kopi Lokal di lingkungan tempat tinggalmu.</p>
        </div>
        <button className="brutalist-button py-6 px-12 text-sm bg-brand-yellow text-brand-black border-2 border-white flex items-center gap-4">
          HUBUNGI KAMI <ArrowRight className="size-5" />
        </button>
      </div>
    </div>
  );
}
