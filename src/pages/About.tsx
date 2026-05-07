import { motion } from 'motion/react';
import { Coffee, Heart, Users, Home } from 'lucide-react';

export function About() {
  return (
    <div className="pt-[113px] pb-24 px-8 md:px-20 min-h-screen">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto pt-[15px]"
      >
        <span className="text-xs font-black uppercase tracking-widest text-brand-yellow bg-brand-black px-3 py-1 mb-6 inline-block">Cerita Kami</span>
        <h2 className="text-6xl md:text-8xl font-black italic tracking-tighter uppercase mb-12 leading-[0.9]">
          Menyapa <span className="text-brand-yellow not-italic underline decoration-brand-black decoration-8 underline-offset-12">Bangga</span> Sejak 2015
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
          <div className="space-y-6 text-lg font-medium leading-relaxed text-brand-black/80">
            <p>
              Kopi Bangga bermula dari sebuah garasi kecil di Cipete. Niat kami sederhana: menyajikan kopi yang jujur untuk para warga yang lewat setiap pagi.
            </p>
            <p>
              Kami percaya bahwa kopi bukan sekadar minuman berkafein, melainkan jembatan komunikasi antar manusia. Itulah mengapa kami menyebut kedai kami sebagai wadah 'Kebanggaan'.
            </p>
          </div>
          <div className="bg-white border-2 border-brand-black p-4 shadow-brutalist-md rotate-2">
            <img 
              src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=800&auto=format&fit=crop" 
              alt="Barista" 
              className="w-full grayscale border-2 border-brand-black"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="brutalist-card p-8">
            <Coffee className="size-10 mb-4 text-brand-yellow" />
            <h4 className="font-black uppercase text-xl mb-2 italic">Kopi Jujur</h4>
            <p className="text-sm opacity-70">Biji kopi pilihan dari petani lokal dengan proses yang transparan.</p>
          </div>
          <div className="brutalist-card p-8 bg-brand-yellow">
            <Users className="size-10 mb-4" />
            <h4 className="font-black uppercase text-xl mb-2 italic">Komunitas</h4>
            <p className="text-sm border-t border-brand-black/20 pt-4">Ruang di mana setiap orang merasa bangga dengan kopi lokal.</p>
          </div>
          <div className="brutalist-card p-8">
            <Heart className="size-10 mb-4 text-brand-yellow" />
            <h4 className="font-black uppercase text-xl mb-2 italic">Dengan Hati</h4>
            <p className="text-sm opacity-70">Setiap cangkir diseduh dengan ketelitian dan rasa cinta pada tanah air.</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
