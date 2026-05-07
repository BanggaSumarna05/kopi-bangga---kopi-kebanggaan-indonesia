import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'sonner';

interface FavoritesContextType {
  favorites: number[];
  toggleFavorite: (id: number, name: string) => void;
  isFavorite: (id: number) => boolean;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export function FavoritesProvider({ children }: { children: React.ReactNode }) {
  const [favorites, setFavorites] = useState<number[]>(() => {
    const saved = localStorage.getItem('kopi_lokal_favorites');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('kopi_lokal_favorites', JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (id: number, name: string) => {
    setFavorites(prev => {
      const isFav = prev.includes(id);
      if (isFav) {
        toast.info(`${name} dihapus dari favorit`);
        return prev.filter(fId => fId !== id);
      } else {
        toast.success(`${name} ditambahkan ke favorit!`);
        return [...prev, id];
      }
    });
  };

  const isFavorite = (id: number) => favorites.includes(id);

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const context = useContext(FavoritesContext);
  if (context === undefined) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
}
