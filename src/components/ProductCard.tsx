import React from 'react';
import { motion } from 'motion/react';
import { Plus, Heart } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';
import { useFavorites } from '../context/FavoritesContext';
import { useProductModal } from '../context/ProductModalContext';

interface ProductCardProps {
  product: Product;
  key?: React.Key;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const { toggleFavorite, isFavorite } = useFavorites();
  const { openModal } = useProductModal();
  const favorited = isFavorite(product.id);

  return (
    <motion.div 
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      onClick={() => openModal(product)}
      className="bg-white border-2 border-brand-black shadow-brutalist-sm hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-brutalist-md transition-all duration-200 flex flex-col group cursor-pointer"
    >
      <div className="relative h-64 border-b-2 border-brand-black overflow-hidden bg-brand-cream">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4 flex gap-2">
          <div className="bg-brand-black text-white px-3 py-1 text-[10px] font-black uppercase">
            {product.category}
          </div>
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleFavorite(product.id, product.name);
          }}
          className={`absolute top-4 right-4 p-2 border-2 border-brand-black transition-all ${favorited ? 'bg-red-500 text-white' : 'bg-white text-brand-black hover:bg-red-50'}`}
        >
          <Heart className={`size-4 ${favorited ? 'fill-current' : ''}`} />
        </button>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h4 className="font-black uppercase text-lg mb-1 tracking-tight">{product.name}</h4>
        <p className="text-[10px] text-brand-black/50 uppercase font-black tracking-wider mb-4">
          {product.ingredients?.slice(0, 3).join(' • ')}
        </p>
        <p className="text-brand-black/70 text-sm mb-6 leading-tight flex-grow line-clamp-2">
          {product.description}
        </p>
        
        <div className="flex justify-between items-center pt-4 border-t border-brand-black/10">
          <span className="font-black text-xl">Rp{product.price.toLocaleString()}</span>
          <button 
            onClick={(e) => {
              e.stopPropagation();
              addToCart(product);
            }}
            className="w-10 h-10 bg-brand-black text-white flex items-center justify-center font-bold text-xl hover:bg-brand-yellow hover:text-brand-black transition-colors"
          >
            +
          </button>
        </div>
      </div>
    </motion.div>
  );
}
