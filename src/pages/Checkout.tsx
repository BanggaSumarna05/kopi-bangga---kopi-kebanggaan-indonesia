import { motion } from 'motion/react';
import { useCart } from '../context/CartContext';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Coffee, Trash2, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

export function Checkout() {
  const { cart, totalPrice, updateQuantity, clearCart } = useCart();
  const [isOrdered, setIsOrdered] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleOrder = () => {
    if (cart.length === 0) return;
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsOrdered(true);
      clearCart();
      toast.success('Pesanan berhasil dibuat!');
    }, 2000);
  };

  if (isOrdered) {
    return (
      <div className="pt-24 pb-24 px-8 md:px-20 min-h-screen flex items-center justify-center">
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-white border-4 border-brand-black p-12 shadow-brutalist-md text-center max-w-lg"
        >
          <div className="w-24 h-24 bg-brand-yellow border-4 border-brand-black rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle className="size-12" />
          </div>
          <h2 className="text-4xl font-black italic tracking-tighter uppercase mb-4">Pesanan Diterima!</h2>
          <p className="text-lg font-medium text-brand-black/60 mb-10">Kopi mu sedang disiapkan oleh tim kami. Harap tunggu sebentar, Tetangga.</p>
          <Link to="/" className="brutalist-button px-12 py-5 block">Kembali Ke Beranda</Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-[113px] pb-24 px-8 md:px-20 min-h-screen">
      <div className="max-w-6xl mx-auto pt-[15px]">
        <div className="flex items-center gap-4 mb-12">
          <Link to="/menu" className="w-12 h-12 border-2 border-brand-black flex items-center justify-center hover:bg-white transition-colors">
            <ArrowLeft className="size-6" />
          </Link>
          <h2 className="text-6xl font-black italic tracking-tighter uppercase">Checkout</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Order List */}
          <div className="lg:col-span-2 space-y-6">
            {cart.length === 0 ? (
              <div className="bg-white border-2 border-brand-black p-12 text-center">
                <Coffee className="size-16 mx-auto mb-4 opacity-10" />
                <p className="text-xl font-black italic opacity-20 uppercase">Keranjangmu kosong.</p>
                <Link to="/menu" className="text-brand-yellow font-black underline mt-4 inline-block">Mulai Pesan Kopi</Link>
              </div>
            ) : (
              cart.map(item => (
                <div key={item.id} className="bg-white border-2 border-brand-black p-6 flex flex-col sm:flex-row gap-8 shadow-brutalist-sm hover:shadow-brutalist-md transition-all">
                  <div className="w-24 h-24 border-2 border-brand-black flex-shrink-0 bg-brand-cream overflow-hidden">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-grow">
                    <div className="flex justify-between items-start mb-2">
                       <h4 className="text-xl font-black uppercase tracking-tight">{item.name}</h4>
                       <span className="text-lg font-black italic">Rp{(item.price * item.quantity).toLocaleString()}</span>
                    </div>
                    <p className="text-xs font-black uppercase text-brand-black/40 mb-6">{item.category}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center border-2 border-brand-black bg-white">
                        <button 
                          onClick={() => updateQuantity(item.id, -1)}
                          className="w-10 h-10 flex items-center justify-center hover:bg-brand-yellow transition-colors border-r-2 border-brand-black"
                        >
                          -
                        </button>
                        <span className="w-12 text-center text-lg font-black italic">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, 1)}
                          className="w-10 h-10 flex items-center justify-center hover:bg-brand-yellow transition-colors border-l-2 border-brand-black"
                        >
                          +
                        </button>
                      </div>
                      <button 
                        onClick={() => updateQuantity(item.id, -item.quantity)}
                        className="p-3 border-2 border-brand-black hover:bg-red-500 hover:text-white transition-all group"
                      >
                        <Trash2 className="size-5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Checkout Info */}
          <div className="space-y-8">
            <div className="bg-brand-yellow border-4 border-brand-black p-8 shadow-brutalist-md">
              <h3 className="text-2xl font-black uppercase tracking-tighter mb-8 italic">Ringkasan Order</h3>
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-sm font-bold opacity-60 uppercase">
                  <span>Subtotal</span>
                  <span>Rp{totalPrice.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm font-bold opacity-60 uppercase">
                  <span>Biaya Layanan</span>
                  <span>Rp2.000</span>
                </div>
                <div className="flex justify-between text-sm font-bold opacity-60 uppercase">
                  <span>Pajak (10%)</span>
                  <span>Rp{(totalPrice * 0.1).toLocaleString()}</span>
                </div>
                <div className="pt-4 border-t-2 border-brand-black flex justify-between items-center text-2xl font-black italic">
                   <span>Total</span>
                   <span>Rp{(totalPrice + 2000 + (totalPrice * 0.1)).toLocaleString()}</span>
                </div>
              </div>

              <button 
                onClick={handleOrder}
                disabled={cart.length === 0 || isLoading}
                className={`w-full py-5 bg-brand-black text-white border-2 border-brand-black font-black uppercase tracking-tighter transition-all flex items-center justify-center gap-2 ${isLoading ? 'opacity-50' : 'hover:bg-white hover:text-brand-black'}`}
              >
                {isLoading ? 'Memproses...' : 'Lakukan Pembayaran'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
