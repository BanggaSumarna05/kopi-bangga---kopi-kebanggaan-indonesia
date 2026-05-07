import React, { createContext, useContext, useState, useEffect } from 'react';
import { Review } from '../types';
import { toast } from 'sonner';

interface ReviewContextType {
  reviews: Review[];
  addReview: (review: Omit<Review, 'id' | 'date'>) => void;
  getReviewsByProductId: (productId: number) => Review[];
}

const ReviewContext = createContext<ReviewContextType | undefined>(undefined);

const INITIAL_REVIEWS: Review[] = [
  {
    id: '1',
    productId: 1,
    userName: 'Budi S.',
    rating: 5,
    comment: 'Kopi susu terbaik di Jakarta! Rasa gula arennya pas banget.',
    date: '2024-03-20'
  },
  {
    id: '2',
    productId: 1,
    userName: 'Siska A.',
    rating: 4,
    comment: 'Enak, tapi kadang antrinya lumayan kalau beli langsung.',
    date: '2024-03-18'
  },
  {
    id: '3',
    productId: 2,
    userName: 'Andi W.',
    rating: 5,
    comment: 'Mantap buat yang butuh kafein extra. Strong!',
    date: '2024-03-15'
  }
];

export function ReviewProvider({ children }: { children: React.ReactNode }) {
  const [reviews, setReviews] = useState<Review[]>(() => {
    const saved = localStorage.getItem('kopi_bangga_reviews');
    return saved ? JSON.parse(saved) : INITIAL_REVIEWS;
  });

  useEffect(() => {
    localStorage.setItem('kopi_bangga_reviews', JSON.stringify(reviews));
  }, [reviews]);

  const addReview = (newReview: Omit<Review, 'id' | 'date'>) => {
    const review: Review = {
      ...newReview,
      id: Math.random().toString(36).substring(2, 9),
      date: new Date().toISOString().split('T')[0]
    };
    
    setReviews(prev => [review, ...prev]);
    toast.success('Ulasan Anda telah ditambahkan!');
  };

  const getReviewsByProductId = (productId: number) => {
    return reviews.filter(r => r.productId === productId);
  };

  return (
    <ReviewContext.Provider value={{ reviews, addReview, getReviewsByProductId }}>
      {children}
    </ReviewContext.Provider>
  );
}

export function useReviews() {
  const context = useContext(ReviewContext);
  if (context === undefined) {
    throw new Error('useReviews must be used within a ReviewProvider');
  }
  return context;
}
