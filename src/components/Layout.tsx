import React, { useState, useEffect } from 'react';
import { ShoppingBag, Coffee, Instagram, Twitter, Facebook, Sparkles, Zap, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { useCart } from '../context/CartContext';
import { CartDrawer } from './CartDrawer';
import { ProductModal } from './ProductModal';
import { Toaster } from 'sonner';
import { logoKopiBangga } from '../assets/images';
import { LazyImage } from './LazyImage';

export function Layout({ children }: { children: React.ReactNode }) {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { setIsCartOpen, totalItems } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMenuOpen(false); // Close menu on route change
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col font-sans select-none bg-brand-cream text-brand-black">
      <Toaster position="top-center" />
      
      {/* Integrated Header: Banner + Nav */}
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="bg-brand-black text-brand-yellow py-2 border-b-2 border-brand-yellow overflow-hidden w-full">
          <div className="animate-marquee whitespace-nowrap flex gap-12">
            {Array(4).fill(null).map((_, i) => (
              <span key={i} className="text-[10px] font-black uppercase tracking-[0.3em] flex items-center gap-4">
                <Sparkles className="size-3" /> FLASH SALE: DISKON 20% UNTUK LAYANAN PICK-UP SETIAP JAM 2-4 SORE! <Zap className="size-3" />
              </span>
            ))}
          </div>
        </div>
        
        <nav id="nav" className={`transition-all duration-300 px-4 md:px-8 py-2 md:py-4 flex items-center justify-between border-b ${scrolled ? 'bg-brand-cream/95 backdrop-blur-md border-brand-black/20 shadow-sm' : 'bg-transparent border-transparent'}`}>
          <Link to="/" className="group scale-90 sm:scale-100 origin-left">
            <LazyImage
              src={logoKopiBangga}
              alt="Logo Kopi Bangga"
              containerClassName="h-14 w-14 md:h-16 md:w-16"
              imageClassName="object-contain hover:scale-110 hover:rotate-3 transition-all duration-300 mix-blend-multiply drop-shadow-md"
            />
          </Link>

          <div className="hidden md:flex gap-6 lg:gap-10 text-xs font-black uppercase tracking-widest">
            <Link to="/" className={`pb-1 border-b-2 transition-all ${location.pathname === '/' ? 'border-brand-black' : 'border-transparent hover:border-brand-yellow/50'}`}>Beranda</Link>
            <Link to="/menu" className={`pb-1 border-b-2 transition-all ${location.pathname === '/menu' ? 'border-brand-black' : 'border-transparent hover:border-brand-yellow/50'}`}>Menu</Link>
            <Link to="/about" className={`pb-1 border-b-2 transition-all ${location.pathname === '/about' ? 'border-brand-black' : 'border-transparent hover:border-brand-yellow/50'}`}>Tentang</Link>
            <Link to="/locations" className={`pb-1 border-b-2 transition-all ${location.pathname === '/locations' ? 'border-brand-black' : 'border-transparent hover:border-brand-yellow/50'}`}>Lokasi</Link>
          </div>

          <div className="flex items-center gap-3">
            <Link to="/merch" className="hidden sm:block text-[10px] font-black uppercase tracking-widest border-2 border-brand-black px-3 py-1.5 hover:bg-brand-yellow transition-all shadow-brutalist-sm bg-white">Merch</Link>
            <button 
              onClick={() => setIsCartOpen(true)}
              className="group p-2 border-2 border-brand-black bg-white shadow-brutalist-sm hover:shadow-brutalist-md transition-all active:translate-x-[1px] active:translate-y-[1px] active:shadow-none relative"
            >
              <ShoppingBag className="size-4 md:size-5 text-brand-black" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-brand-yellow text-brand-black text-[8px] w-5 h-5 flex items-center justify-center border-2 border-brand-black font-black">
                  {totalItems}
                </span>
              )}
            </button>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 border-2 border-brand-black bg-white shadow-brutalist-sm active:translate-x-[1px] active:translate-y-[1px] active:shadow-none"
            >
              {isMenuOpen ? <X className="size-4" /> : <Menu className="size-4" />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden fixed top-[80px] sm:top-[100px] left-0 right-0 bg-brand-cream border-b-2 border-brand-black z-40 p-8 flex flex-col gap-6 text-xl font-black italic uppercase tracking-tighter shadow-brutalist-lg"
            >
              <Link to="/" onClick={() => setIsMenuOpen(false)}>Beranda</Link>
              <Link to="/menu" onClick={() => setIsMenuOpen(false)}>Menu</Link>
              <Link to="/about" onClick={() => setIsMenuOpen(false)}>Tentang</Link>
              <Link to="/locations" onClick={() => setIsMenuOpen(false)}>Lokasi</Link>
              <Link to="/merch" onClick={() => setIsMenuOpen(false)} className="text-brand-yellow bg-brand-black px-4 py-2 self-start not-italic text-sm">Merchandise</Link>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <CartDrawer />
      <ProductModal />
      
      <main className="flex-grow">
        {children}
      </main>

      <footer className="border-t-4 border-brand-yellow pt-10 pb-12 px-6 sm:px-8 md:px-20 bg-brand-cream text-brand-black">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-12 underline decoration-brand-yellow decoration-4 underline-offset-8">
          <Link to="/" className="group inline-block">
            <LazyImage
              src={logoKopiBangga}
              alt="Logo Kopi Bangga"
              containerClassName="h-20 w-20 md:h-32 md:w-32"
              imageClassName="object-contain mix-blend-multiply hover:scale-105 transition-all duration-500"
            />
          </Link>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 text-[10px] md:text-xs font-black uppercase tracking-widest w-full md:w-auto">
            <div className="flex flex-col gap-4">
              <Link to="/menu" className="hover:text-brand-yellow transition-colors">Menu</Link>
              <Link to="/merch" className="hover:text-brand-yellow transition-colors">Merchandise</Link>
            </div>
            <div className="flex flex-col gap-4">
              <a href="#" className="hover:text-brand-yellow transition-colors">Instagram</a>
              <a href="#" className="hover:text-brand-yellow transition-colors">Twitter</a>
            </div>
            <div className="flex flex-col gap-4">
              <Link to="/locations" className="hover:text-brand-yellow transition-colors">Lokasi</Link>
              <Link to="/about" className="hover:text-brand-yellow transition-colors">Tentang</Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-brand-black/40 pt-8 md:pt-12 border-t border-brand-yellow/30 gap-6">
          <p className="text-center md:text-left">© 2026 Kopi Bangga. Seluruh Hak Cipta Dilindungi.</p>
          <div className="flex gap-4 md:gap-8">
            <a href="#" className="hover:text-brand-yellow transition-colors">Syarat & Ketentuan</a>
            <a href="#" className="hover:text-brand-yellow transition-colors">Kebijakan Privasi</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
