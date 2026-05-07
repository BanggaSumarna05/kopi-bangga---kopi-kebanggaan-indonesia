import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ArrowRight, Coffee, Clock, MapPin, Star, Instagram, Mail, ShieldCheck, Zap, Sparkles, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import { ProductCard } from '../components/ProductCard';
import { heroCoffeeImage, instagramGridImage, aboutStoryImage } from '../assets/images';
import { LazyImage } from '../components/LazyImage';
import { LazyImage } from '../components/LazyImage';

const TESTIMONIALS = [
  { name: "Andi Wijaya", role: "Warga Cipete", text: "Kopi Susu Bangga nggak pernah meleset. Rasa konsisten sejak 2015, tempatnya juga asik buat baca buku.", avatar: "https://i.pravatar.cc/150?u=andi" },
  { name: "Siska Putri", role: "Pekerja Lepas", text: "WiFi kencang dan kopinya mantap. Sangat laptop-friendly buat yang bosan kerja di rumah.", avatar: "https://i.pravatar.cc/150?u=siska" },
  { name: "Budi Santoso", role: "Pecinta Kopi", text: "Brewing method mereka serius. V60-nya clean banget, kerasa karakter beans-nya.", avatar: "https://i.pravatar.cc/150?u=budi" }
];

const INSTAGRAM_GRID = [
  "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1507133750040-4a8f57021571?q=80&w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=400&auto=format&fit=crop",
  instagramGridImage
];

export function Home() {
  const featured = PRODUCTS.slice(0, 3);
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const nextTestimonial = () => {
    setTestimonialIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setTestimonialIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <div className="overflow-x-hidden space-y-8 md:space-y-16 pt-[113px] text-brand-black">
      {/* 1. Hero Section */}
      <section id="hero" className="px-6 sm:px-8 md:px-20 pt-12 md:pt-[24px] pb-16 md:pb-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-brand-cream relative">
        <div className="absolute top-24 md:top-48 left-1/4 size-48 md:size-96 bg-brand-yellow/10 rounded-full blur-3xl -z-10 animate-pulse" />
        <div className="z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >

            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black italic leading-[0.85] tracking-tighter mb-8 uppercase">
              KOPI SUSU<br /><span className="text-brand-yellow not-italic">BANGGA</span>
            </h2>
            <p className="mt-8 text-lg md:text-xl max-w-sm leading-tight text-brand-black/80 font-medium mb-10">
              Pesan kopi legendaris kami lewat sistem <span className="underline decoration-brand-yellow decoration-4">Order Ahead</span>, ambil tanpa antre.
            </p>
            <div className="flex flex-wrap gap-4 md:gap-6">
              <Link 
                to="/menu" 
                className="brutalist-button text-sm md:text-base px-8 md:px-10 py-4 md:py-5 inline-flex items-center gap-4 group w-full sm:w-auto justify-center"
              >
                Pesan Sekarang <ArrowRight className="size-5 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="relative">
          <motion.div 
            initial={{ opacity: 0, rotate: 5, scale: 0.9 }}
            animate={{ opacity: 1, rotate: -2, scale: 1 }}
            whileHover={{ 
              scale: 1.05, 
              rotate: 0,
              borderColor: "#FFC107",
              boxShadow: "0 0 20px rgba(255, 193, 7, 0.3)"
            }}
            transition={{ 
              type: "spring", 
              stiffness: 300, 
              damping: 20 
            }}
            className="bg-white border-4 border-brand-black p-4 shadow-brutalist-md hover:shadow-brutalist-lg relative z-10 cursor-pointer overflow-hidden transition-colors duration-300"
          >
            <motion.div
              className="absolute inset-0 border-4 border-transparent hover:border-brand-yellow/50 pointer-events-none z-20"
              animate={{
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <LazyImage
              src={heroCoffeeImage}
              alt="Cangkir kopi Kopi Bangga dengan latte art"
              containerClassName="w-full aspect-square"
              imageClassName="grayscale-[20%] hover:grayscale-0 transition-all duration-500"
            />
          </motion.div>
          <div className="absolute -bottom-4 -right-4 md:-bottom-8 md:-right-8 w-32 h-32 md:w-48 md:h-48 bg-brand-yellow rounded-full border-2 md:border-4 border-brand-black flex items-center justify-center p-4 md:p-6 text-center font-black uppercase text-[10px] md:text-sm rotate-[-12deg] shadow-xl z-20">
            Telah Menyeduh 500rb+ Cangkir Kebahagiaan
          </div>
        </div>
      </section>

      {/* 2. Featured Items */}
      <section className="py-16 md:py-24 px-6 sm:px-8 md:px-20 bg-white border-y-2 border-brand-black">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-6">
          <div className="max-w-xl">
            <span className="text-[10px] md:text-xs font-black uppercase tracking-widest text-brand-black/40 mb-2 block">Pesan Sekarang</span>
            <h3 className="text-4xl sm:text-5xl md:text-7xl font-black italic tracking-tighter uppercase leading-[0.9]">Menu <span className="text-brand-yellow">Paling Laris</span> Minggu Ini</h3>
          </div>
          <Link to="/menu" className="flex items-center gap-2 font-black uppercase text-[10px] md:text-xs tracking-tighter border-b-2 border-brand-black pb-1 hover:text-brand-yellow hover:border-brand-yellow transition-all">
            Lihat Menu Lengkap <ArrowRight className="size-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* 3. About Us (Kisah Singkat) + Behind The Scenes */}
      <section className="py-20 md:py-32 px-6 sm:px-8 md:px-20 bg-brand-cream overflow-hidden min-h-[auto] md:min-h-[700px] lg:h-[811px] flex items-center">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 md:gap-20 items-center">
          <div className="w-full md:w-1/2 space-y-6 md:space-y-10">
            <div className="flex items-center gap-6">
               <div className="size-16 md:size-20 bg-brand-black text-brand-yellow border-2 border-brand-black flex items-center justify-center font-black italic text-2xl md:text-3xl shadow-brutalist-sm">7+</div>
               <h4 className="text-xl md:text-2xl font-black uppercase italic tracking-tighter">Tahun Menjadi<br/>Kebanggaan Anda</h4>
            </div>
            <h3 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase italic leading-[0.9] tracking-tighter underline decoration-brand-yellow decoration-8 underline-offset-8">
              KAMI PERCAYA<br />KOPI ADALAH<br />PERCAKAPAN.
            </h3>
            <p className="text-base md:text-lg font-medium text-brand-black/70 leading-relaxed max-w-md">
              Banyak orang datang untuk kafein, tapi mereka tinggal karena rasa nyaman. Di Kopi Bangga, setiap seduhan adalah undangan untuk bertukar cerita penuh kebanggaan.
            </p>
            <Link to="/about" className="brutalist-button px-8 md:px-10 py-4 md:py-5 inline-block text-xs w-full sm:w-auto text-center">PELAJARI FILOSOFI KAMI</Link>
          </div>
          <div className="w-full md:w-1/2 relative mt-8 md:mt-0">
            <div className="aspect-[4/5] border-4 border-brand-black overflow-hidden shadow-brutalist-lg relative group">
                <LazyImage
                  src={aboutStoryImage}
                  alt="Proses roasting biji kopi di roastery Kopi Bangga"
                  containerClassName="w-full h-full"
                  imageClassName="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-brand-yellow/10 mix-blend-overlay pointer-events-none" />
             </div>
             <div className="absolute -top-6 -left-6 md:-top-10 md:-left-10 bg-white border-2 border-brand-black p-3 md:p-4 rotate-[-4deg] shadow-brutalist-sm max-w-[150px] md:max-w-[200px]">
                <p className="font-black italic text-[9px] md:text-[10px] uppercase leading-tight">Proses Roastery Kami Dilakukan Secara Mandiri Untuk Menjaga Kesegaran.</p>
             </div>
          </div>
        </div>
      </section>

      {/* 4. Educational: Brewing Methods */}
      <section className="py-20 md:py-24 px-6 sm:px-8 md:px-20 bg-brand-black text-white">
        <div className="text-center mb-12 md:mb-20">
          <h3 className="text-4xl sm:text-5xl font-black uppercase italic tracking-tighter mb-4">ILMU <span className="text-brand-yellow">SEDUH</span> KAMI</h3>
          <p className="text-white/70 font-medium tracking-widest uppercase text-[10px] md:text-xs">Dari Biji Terbaik Hingga Cangkir Anda</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { title: "V60 / Manual", desc: "Metode pour-over untuk menonjolkan karakter rasa buah dan keasaman kopi yang jernih.", icon: <Sparkles /> },
            { title: "Cold Brew", desc: "Ekstraksi air dingin selama 12-16 jam menghasilkan rasa cokelat yang bold dan rendah asam.", icon: <Zap /> },
            { title: "Espresso Based", desc: "Fondasi dari segala kopi susu kami yang legendaris, diekstrak dengan tekanan tinggi.", icon: <Coffee /> }
          ].map((item, i) => (
            <div key={i} className="border-2 border-white/20 p-10 hover:border-brand-yellow transition-colors group">
              <div className="text-brand-yellow size-10 mb-6 group-hover:scale-110 transition-transform">{item.icon}</div>
              <h4 className="text-2xl font-black uppercase italic mb-4">{item.title}</h4>
              <p className="text-sm text-white/60 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Testimonials (Social Proof) */}
      <section className="py-20 md:py-32 px-6 sm:px-8 md:px-20 bg-white border-b-2 border-brand-black">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 md:gap-20">
          <div className="lg:w-1/3">
            <Star className="size-10 md:size-12 text-brand-yellow mb-6 fill-current" />
            <h3 className="text-4xl sm:text-5xl font-black uppercase italic tracking-tighter mb-6">KATA<br />WARGA</h3>
            <p className="font-medium text-brand-black/60 mb-8 text-sm md:text-base">Google Maps Rating: 4.8/5 dari 2.000+ Ulasan.</p>
            <div className="flex gap-4">
               <button 
                 onClick={prevTestimonial}
                 className="p-3 md:p-4 border-2 border-brand-black hover:bg-brand-yellow transition-all shadow-brutalist-sm"
               >
                 ❮
               </button>
               <button 
                 onClick={nextTestimonial}
                 className="p-3 md:p-4 border-2 border-brand-black hover:bg-brand-yellow transition-all shadow-brutalist-sm"
               >
                 ❯
               </button>
            </div>
          </div>
          <div className="lg:w-2/3 relative h-[320px] sm:h-[300px] md:h-[350px] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div 
                key={testimonialIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="bg-brand-cream border-2 border-brand-black p-6 md:p-10 shadow-brutalist-sm h-full flex flex-col justify-between"
              >
                <div>
                  <div className="w-16 h-1 w-full bg-brand-yellow mb-6" />
                  <p className="text-lg sm:text-xl md:text-2xl font-bold italic mb-6 md:mb-8 leading-tight">
                    "{TESTIMONIALS[testimonialIndex].text}"
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <LazyImage
                  src={TESTIMONIALS[testimonialIndex].avatar}
                  alt={`Foto profil ${TESTIMONIALS[testimonialIndex].name}`}
                  containerClassName="size-10 md:size-12 rounded-full border-2 border-brand-black overflow-hidden"
                  imageClassName="object-cover"
                />
                  <div>
                    <h5 className="font-black uppercase text-[10px] md:text-xs tracking-widest">{TESTIMONIALS[testimonialIndex].name}</h5>
                    <p className="text-[9px] md:text-[10px] font-bold text-brand-black/40">{TESTIMONIALS[testimonialIndex].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* 6. Atmosphere / Instagram (Visual) */}
      <section className="py-16 md:py-24 bg-brand-cream-dark">
        <div className="px-6 sm:px-8 md:px-20 mb-12 md:mb-16 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6">
          <div>
            <h3 className="text-4xl sm:text-5xl font-black uppercase italic tracking-tighter">IKUTI <span className="text-brand-yellow">@KOPIBANGGA</span></h3>
            <p className="text-[10px] md:text-xs font-black uppercase tracking-widest text-brand-black/40 mt-2">Jadilah bagian dari komunitas kami</p>
          </div>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="brutalist-button py-3 md:py-4 px-6 md:px-8 text-xs flex items-center gap-2 w-full sm:w-auto justify-center">
            <Instagram className="size-4" /> FOLLOW US
          </a>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-0">
          {INSTAGRAM_GRID.map((img, i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 0.95 }}
              className="aspect-square border border-brand-black overflow-hidden relative group cursor-pointer"
            >
              <LazyImage
                src={img}
                alt="Foto suasana kedai Kopi Bangga"
                containerClassName="w-full h-full"
                imageClassName="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-brand-yellow/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                 <Instagram className="size-8 text-brand-black" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 7. Location & Accessibility (Peta + Detail Fasilitas) */}
      <section id="location" className="py-20 md:py-32 px-6 sm:px-8 md:px-20 bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20">
          <div>
            <span className="text-[10px] md:text-xs font-black uppercase tracking-widest text-brand-black/40 mb-2 block">Cari Kedai Terdekat</span>
            <h3 className="text-4xl sm:text-5xl md:text-6xl font-black italic tracking-tighter uppercase mb-8 md:mb-12 leading-[0.9]">MAMPIR KE <span className="text-brand-yellow">KEDAI</span> BANGGA</h3>
            
            <div className="space-y-8 md:space-y-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                 <div className="space-y-3 md:space-y-4">
                    <h5 className="font-black uppercase text-[9px] md:text-[10px] tracking-widest text-brand-black/40 underline decoration-brand-yellow decoration-2">ALAMAT KAMI</h5>
                    <p className="text-base md:text-lg font-bold leading-tight">Jl. Cipete Raya No. 7<br />Jakarta Selatan, 12410</p>
                 </div>
                 <div className="space-y-3 md:space-y-4">
                    <h5 className="font-black uppercase text-[9px] md:text-[10px] tracking-widest text-brand-black/40 underline decoration-brand-yellow decoration-2">JAM BUKA</h5>
                    <p className="text-base md:text-lg font-bold italic">07:00 - 22:00<br />SETIAP HARI</p>
                 </div>
              </div>

              <div className="bg-brand-cream border-2 border-brand-black p-6 md:p-8 shadow-brutalist-sm">
                <h5 className="font-black uppercase text-[10px] md:text-xs tracking-widest mb-6 border-b border-brand-black pb-4">Fidilitas & Aksesibilitas</h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Parkir Motor & Mobil",
                    "Akses Disabilitas",
                    "WiFi Kencang",
                    "Ramah Hewan (Outdoor)",
                    "Musholla Tersedia",
                    "Laptop Friendly Area"
                  ].map((f, i) => (
                    <div key={i} className="flex items-center gap-3 text-xs md:text-sm font-bold">
                       <ShieldCheck className="size-4 text-brand-yellow" /> {f}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 md:gap-6 pt-4">
                <button className="brutalist-button px-8 md:px-10 py-4 md:py-5 bg-brand-yellow text-brand-black grow text-center text-xs md:text-sm">BUKA GOOGLE MAPS</button>
                <Link to="/locations" className="px-8 md:px-10 py-4 md:py-5 border-2 border-brand-black font-black uppercase text-[10px] md:text-xs tracking-widest hover:bg-white transition-all grow text-center">LIHAT SEMUA LOKASI</Link>
              </div>
            </div>
          </div>
          <div className="h-[300px] md:h-full min-h-[300px] md:min-h-[400px] border-4 border-brand-black bg-brand-cream-dark shadow-brutalist-md overflow-hidden relative">
             <iframe 
                title="Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15863.666113645851!2d106.7912440871582!3d-6.274622100000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f109bc0f6071%3A0xe5a3632f056d60!2sToko%20Kopi%20Tuku!5e0!3m2!1sen!2sid!4v1714890000000!5m2!1sen!2sid"
                className="w-full h-full grayscale contrast-125 brightness-90 border-0"
                allowFullScreen loading="lazy"
             />
          </div>
        </div>
      </section>

      {/* 8. Newsletter & Loyalty (Retensi) */}
      <section className="py-16 md:py-24 px-6 sm:px-8 md:px-20 bg-brand-yellow border-t-4 border-brand-black">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-16">
          <div className="text-center md:text-left space-y-4 md:space-y-6 md:w-1/2">
            <h3 className="text-4xl sm:text-5xl font-black uppercase italic tracking-tighter leading-[0.9]">JADI MEMBER<br />BANGGA?</h3>
            <p className="text-base md:text-lg font-bold italic leading-tight">Dapatkan kopi gratis setiap 10 poin dan update menu rahasia kami.</p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <div className="flex items-center gap-2 text-[10px] md:text-xs font-black uppercase"><Check className="size-4" /> Diskon 10% First Order</div>
              <div className="flex items-center gap-2 text-[10px] md:text-xs font-black uppercase"><Check className="size-4" /> Akses Early Birds</div>
            </div>
          </div>
          <div className="md:w-1/2 w-full">
            <form className="space-y-4" onSubmit={e => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="EMAIL ANDA" 
                className="w-full p-4 md:p-6 border-4 border-brand-black bg-white shadow-brutalist-sm focus:outline-none focus:shadow-brutalist-md transition-all font-black uppercase italic placeholder:text-brand-black/20 text-xs md:text-base"
              />
              <button 
                type="submit" 
                className="w-full brutalist-button bg-brand-black text-white py-4 md:py-6 text-sm md:text-base tracking-widest flex items-center justify-center gap-4"
              >
                GABUNG SEKARANG <Mail className="size-5 md:size-6" />
              </button>
              <p className="text-center text-[9px] md:text-[10px] font-bold uppercase opacity-40">Kami menghargai privasi Anda seperti kami menghargai kopi kami.</p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
