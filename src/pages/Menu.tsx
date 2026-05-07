import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PRODUCTS } from '../constants';
import { ProductCard } from '../components/ProductCard';
import { useFavorites } from '../context/FavoritesContext';
import { Heart } from 'lucide-react';

export function Menu() {
  const [activeCategory, setActiveCategory] = useState("All");
  const { isFavorite } = useFavorites();
  
  const categories = ["All", "Favorit", ...Array.from(new Set(PRODUCTS.map(p => p.category)))];
  
  let filteredProducts = PRODUCTS;
  if (activeCategory === "Favorit") {
    filteredProducts = PRODUCTS.filter(p => isFavorite(p.id));
  } else if (activeCategory !== "All") {
    filteredProducts = PRODUCTS.filter(p => p.category === activeCategory);
  }

  return (
    <div className="pt-[113px] pb-24 px-6 sm:px-8 md:px-20 min-h-screen">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-8 pt-[15px]">
        <div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black italic tracking-tighter uppercase mb-4 leading-none">Daftar <span className="text-brand-yellow">Menu</span></h2>
          <p className="text-brand-black/60 max-w-md font-medium text-base md:text-lg leading-tight">Mulai dari Kopi Susu Tetangga legendaris hingga camilan rumahan yang hangat.</p>
        </div>
        
        <div className="flex flex-wrap gap-2 md:gap-3">
          {categories.map(cat => (
            <button 
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 sm:px-8 py-2.5 sm:py-3 border-2 border-brand-black font-black text-[10px] sm:text-xs uppercase tracking-widest transition-all flex items-center gap-2 grow sm:grow-0 justify-center ${activeCategory === cat ? 'bg-brand-yellow shadow-brutalist-sm translate-x-[-2px] translate-y-[-2px]' : 'bg-white hover:bg-gray-50'}`}
            >
              {cat === "Favorit" && <Heart className={`size-3 ${activeCategory === "Favorit" ? 'fill-current' : ''}`} />}
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </AnimatePresence>
      </div>
      
      {filteredProducts.length === 0 && (
        <div className="py-24 text-center border-4 border-dashed border-brand-black/10">
          <Heart className="size-16 mx-auto mb-4 opacity-10" />
          <p className="text-2xl font-black italic text-brand-black/20 uppercase tracking-tighter">
            {activeCategory === "Favorit" ? "Belum ada produk favorit." : "Menu belum tersedia."}
          </p>
        </div>
      )}
    </div>
  );
}
