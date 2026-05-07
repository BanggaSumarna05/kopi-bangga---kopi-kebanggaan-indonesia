import { motion, AnimatePresence } from 'motion/react';
import { X, Minus, Plus, ShoppingBag, Coffee, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

export function CartDrawer() {
  const { cart, isCartOpen, setIsCartOpen, updateQuantity, totalPrice, totalItems } = useCart();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-brand-black/60 backdrop-blur-sm z-[100]"
          />
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-brand-cream z-[101] border-l-4 border-brand-black shadow-none md:shadow-brutalist-md flex flex-col"
          >
            <div className="p-8 border-b-2 border-brand-black flex items-center justify-between bg-white">
              <div>
                <h3 className="text-3xl font-black uppercase tracking-tighter">Keranjang</h3>
                <span className="text-[10px] font-black uppercase tracking-widest text-brand-black/40">Total {totalItems} Item</span>
              </div>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="p-2 border-2 border-brand-black hover:bg-brand-yellow transition-colors"
              >
                <X className="size-6" />
              </button>
            </div>

            <div className="flex-grow overflow-y-auto p-8 space-y-8">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center opacity-30 space-y-4 grayscale">
                  <Coffee className="size-20" />
                  <p className="font-black uppercase tracking-widest text-sm">Wah, keranjangmu kosong!</p>
                </div>
              ) : (
                cart.map(item => (
                  <div key={item.id} className="flex gap-6 pb-8 border-b border-brand-black/10">
                    <div className="w-20 h-20 border-2 border-brand-black flex-shrink-0 bg-white">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all" />
                    </div>
                    <div className="flex-grow">
                      <div className="flex justify-between items-start mb-1">
                        <h4 className="font-black uppercase text-sm tracking-tight">{item.name}</h4>
                        <span className="font-black text-sm">Rp{(item.price * item.quantity).toLocaleString()}</span>
                      </div>
                      <p className="text-[10px] font-black text-brand-black/40 uppercase mb-4">{item.category}</p>
                      <div className="flex items-center gap-6">
                        <div className="flex items-center border-2 border-brand-black bg-white">
                          <button 
                            onClick={() => updateQuantity(item.id, -1)}
                            className="w-8 h-8 flex items-center justify-center hover:bg-brand-yellow transition-colors border-r-2 border-brand-black"
                          >
                            <Minus className="size-3" />
                          </button>
                          <span className="w-10 text-center text-sm font-black italic">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, 1)}
                            className="w-8 h-8 flex items-center justify-center hover:bg-brand-yellow transition-colors border-l-2 border-brand-black"
                          >
                            <Plus className="size-3" />
                          </button>
                        </div>
                        <button 
                          onClick={() => updateQuantity(item.id, -item.quantity)}
                          className="text-[10px] font-black uppercase text-red-500 underline"
                        >
                          Hapus
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div className="p-8 bg-brand-yellow border-t-4 border-brand-black space-y-6">
                <div className="flex justify-between items-center">
                  <span className="font-black uppercase text-xs tracking-widest opacity-60">Total Bayar</span>
                  <span className="text-3xl font-black italic">Rp{totalPrice.toLocaleString()}</span>
                </div>
                <Link 
                  to="/checkout" 
                  onClick={() => setIsCartOpen(false)}
                  className="w-full py-5 bg-brand-black text-white border-2 border-brand-black font-black uppercase tracking-tighter hover:bg-white hover:text-brand-black transition-all flex items-center justify-center gap-2 group"
                >
                  Bayar Sekarang <ArrowRight className="size-5 group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
