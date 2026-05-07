import { motion, AnimatePresence } from 'motion/react';
import { X, Plus, Heart, Info, Coffee, Star, MessageSquare, User } from 'lucide-react';
import { useProductModal } from '../context/ProductModalContext';
import { useCart } from '../context/CartContext';
import { useFavorites } from '../context/FavoritesContext';
import { useReviews } from '../context/ReviewContext';
import React, { useState } from 'react';
import { LazyImage } from './LazyImage';

export function ProductModal() {
  const { selectedProduct, closeModal } = useProductModal();
  const { addToCart } = useCart();
  const { toggleFavorite, isFavorite } = useFavorites();
  const { getReviewsByProductId, addReview } = useReviews();

  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const [userName, setUserName] = useState('');
  const [showReviewForm, setShowReviewForm] = useState(false);

  if (!selectedProduct) return null;

  const favorited = isFavorite(selectedProduct.id);
  const productReviews = getReviewsByProductId(selectedProduct.id);
  const averageRating = productReviews.length > 0 
    ? (productReviews.reduce((acc, r) => acc + r.rating, 0) / productReviews.length).toFixed(1)
    : 'New';

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userName.trim() || !comment.trim()) return;

    addReview({
      productId: selectedProduct.id,
      userName,
      rating,
      comment
    });

    setUserName('');
    setComment('');
    setRating(5);
    setShowReviewForm(false);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={closeModal}
        className="fixed inset-0 bg-brand-black/80 backdrop-blur-md z-[200] flex items-center justify-center p-6"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, rotate: 2 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          exit={{ scale: 0.9, opacity: 0, rotate: -2 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-brand-cream border-4 border-brand-black w-full max-w-4xl max-h-[90vh] overflow-hidden shadow-brutalist-lg flex flex-col md:flex-row"
        >
          {/* Image Section */}
          <div className="w-full md:w-1/2 h-64 md:h-auto border-b-4 md:border-b-0 md:border-r-4 border-brand-black relative">
            <LazyImage
              src={selectedProduct.image}
              alt={selectedProduct.name}
              containerClassName="w-full h-full"
              imageClassName="w-full h-full object-cover grayscale-[10%]"
            />
            <div className="absolute top-6 left-6 flex flex-col gap-2">
              <div className="bg-brand-yellow border-2 border-brand-black text-brand-black px-4 py-1 text-xs font-black uppercase shadow-brutalist-sm self-start">
                {selectedProduct.category}
              </div>
              <div className="bg-white border-2 border-brand-black text-brand-black px-3 py-1 text-xs font-black flex items-center gap-2 shadow-brutalist-sm self-start">
                <Star className="size-3 fill-brand-yellow text-brand-yellow" />
                {averageRating} ({productReviews.length})
              </div>
            </div>
          </div>

          {/* Info Section */}
          <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto flex flex-col">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-4xl font-black italic tracking-tighter uppercase mb-2">
                  {selectedProduct.name}
                </h2>
                <div className="flex items-center gap-4">
                  <p className="text-2xl font-black italic text-brand-yellow bg-brand-black px-3 py-1 inline-block">
                    Rp{selectedProduct.price.toLocaleString()}
                  </p>
                </div>
              </div>
              <button
                onClick={closeModal}
                className="p-2 border-2 border-brand-black hover:bg-brand-yellow transition-colors bg-white shadow-brutalist-sm active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
              >
                <X className="size-6" />
              </button>
            </div>

            <div className="space-y-12 flex-grow">
              <div>
                <h4 className="flex items-center gap-2 font-black uppercase text-xs tracking-widest text-brand-black/40 mb-4 border-b border-brand-black/10 pb-2">
                  <Info className="size-4" /> Deskripsi
                </h4>
                <p className="text-brand-black/80 font-medium leading-relaxed">
                  {selectedProduct.description}
                </p>
              </div>

              {selectedProduct.ingredients && selectedProduct.ingredients.length > 0 && (
                <div>
                  <h4 className="flex items-center gap-2 font-black uppercase text-xs tracking-widest text-brand-black/40 mb-4 border-b border-brand-black/10 pb-2">
                    <Coffee className="size-4" /> Komposisi
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProduct.ingredients.map((ing, i) => (
                      <span key={i} className="bg-white border-2 border-brand-black px-3 py-1 text-xs font-bold shadow-brutalist-sm">
                        {ing}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {selectedProduct.nutritionalInfo && (
                <div>
                  <h4 className="font-black uppercase text-xs tracking-widest text-brand-black/40 mb-4 border-b border-brand-black/10 pb-2">
                    Informasi Gizi
                  </h4>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-white border-2 border-brand-black p-3 shadow-brutalist-sm text-center">
                      <p className="text-[10px] font-black uppercase opacity-40">Kalori</p>
                      <p className="font-black italic">{selectedProduct.nutritionalInfo.calories}kcal</p>
                    </div>
                    <div className="bg-white border-2 border-brand-black p-3 shadow-brutalist-sm text-center">
                      <p className="text-[10px] font-black uppercase opacity-40">Gula</p>
                      <p className="font-black italic">{selectedProduct.nutritionalInfo.sugar}</p>
                    </div>
                    <div className="bg-white border-2 border-brand-black p-3 shadow-brutalist-sm text-center">
                      <p className="text-[10px] font-black uppercase opacity-40">Kafein</p>
                      <p className="font-black italic">{selectedProduct.nutritionalInfo.caffeine}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Reviews Section */}
              <div className="pt-4 border-t-2 border-brand-black/10">
                <div className="flex items-center justify-between mb-8">
                  <h4 className="flex items-center gap-2 font-black uppercase text-xs tracking-widest text-brand-black">
                    <MessageSquare className="size-4" /> Ulasan Pelanggan ({productReviews.length})
                  </h4>
                  <button 
                    onClick={() => setShowReviewForm(!showReviewForm)}
                    className="text-[10px] font-black uppercase underline decoration-brand-yellow decoration-2 hover:text-brand-yellow transition-colors"
                  >
                    {showReviewForm ? 'Batal' : 'Tulis Ulasan'}
                  </button>
                </div>

                <AnimatePresence>
                  {showReviewForm && (
                    <motion.form
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      onSubmit={handleSubmitReview}
                      className="mb-12 overflow-hidden bg-white border-2 border-brand-black p-6 shadow-brutalist-sm space-y-4"
                    >
                      <div className="flex gap-2 mb-4">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            type="button"
                            onClick={() => setRating(star)}
                            className="focus:outline-none"
                          >
                            <Star className={`size-6 ${rating >= star ? 'fill-brand-yellow text-brand-black' : 'text-brand-black/20'}`} />
                          </button>
                        ))}
                      </div>
                      <div className="space-y-4">
                        <div className="relative">
                          <User className="absolute left-4 top-4 size-4 text-brand-black/40" />
                          <input
                            type="text"
                            placeholder="NAMA ANDA"
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                            required
                            className="w-full pl-10 pr-4 py-3 border-2 border-brand-black text-xs font-black uppercase focus:shadow-brutalist-sm outline-none transition-all"
                          />
                        </div>
                        <textarea
                          placeholder="TULIS ULASAN ANDA..."
                          value={comment}
                          onChange={(e) => setComment(e.target.value)}
                          required
                          rows={3}
                          className="w-full p-4 border-2 border-brand-black text-xs font-bold focus:shadow-brutalist-sm outline-none transition-all resize-none"
                        />
                        <button type="submit" className="w-full brutalist-button py-3 text-xs">
                          KIRIM ULASAN
                        </button>
                      </div>
                    </motion.form>
                  )}
                </AnimatePresence>

                <div className="space-y-6">
                  {productReviews.length === 0 ? (
                    <p className="text-xs font-bold text-brand-black/40 italic">Belum ada ulasan untuk produk ini. Jadi yang pertama!</p>
                  ) : (
                    productReviews.map((review) => (
                      <div key={review.id} className="border-b border-brand-black/5 pb-6 last:border-0">
                        <div className="flex justify-between items-start mb-2">
                          <div className="flex items-center gap-3">
                            <div className="size-8 bg-brand-yellow border-2 border-brand-black flex items-center justify-center font-black text-xs italic">
                              {review.userName.charAt(0)}
                            </div>
                            <div>
                              <p className="text-xs font-black uppercase">{review.userName}</p>
                              <div className="flex gap-0.5 mt-0.5">
                                {[...Array(5)].map((_, i) => (
                                  <Star key={i} className={`size-2 ${i < review.rating ? 'fill-brand-yellow text-brand-black' : 'text-brand-black/20'}`} />
                                ))}
                              </div>
                            </div>
                          </div>
                          <span className="text-[10px] font-bold text-brand-black/30">{review.date}</span>
                        </div>
                        <p className="text-xs font-medium text-brand-black/80 leading-relaxed italic pl-11">
                          "{review.comment}"
                        </p>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-12 grid grid-cols-4 gap-4 pb-2">
              <button
                onClick={() => toggleFavorite(selectedProduct.id, selectedProduct.name)}
                className={`col-span-1 p-4 border-4 border-brand-black flex items-center justify-center transition-all shadow-brutalist-sm active:translate-x-[2px] active:translate-y-[2px] active:shadow-none ${favorited ? 'bg-red-500 text-white' : 'bg-white hover:bg-red-50'}`}
              >
                <Heart className={`size-6 ${favorited ? 'fill-current' : ''}`} />
              </button>
              <button
                onClick={() => addToCart(selectedProduct)}
                className="col-span-3 brutalist-button text-base py-4 flex items-center justify-center gap-3"
              >
                Pesan <Plus className="size-6" />
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
