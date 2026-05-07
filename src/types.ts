export interface Review {
  id: string;
  productId: number;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  category: string;
  image: string;
  ingredients?: string[];
  nutritionalInfo?: {
    calories: number;
    sugar: string;
    caffeine: string;
  };
  reviews?: Review[];
}

export interface CartItem extends Product {
  quantity: number;
}
