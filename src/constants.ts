import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Es Kopi Bangga",
    price: 24000,
    description: "The legendary iced coffee milk with palm sugar. A perfect blend of house coffee and creamy milk that makes you proud of local beans.",
    category: "Coffee",
    image: "/src/assets/images/regenerated_image_1777979714702.png",
    ingredients: ["Arabica Blend", "Fresh Milk", "Liquid Palm Sugar", "Ice"],
    nutritionalInfo: { calories: 180, sugar: "12g", caffeine: "95mg" }
  },
  {
    id: 2,
    name: "Double Shot Latte",
    price: 32000,
    description: "Extra punch for your productive day. Double espresso shot with silky steamed milk.",
    category: "Coffee",
    image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&w=800&auto=format&fit=crop",
    ingredients: ["Double Espresso", "Steamed Milk", "Microfoam"],
    nutritionalInfo: { calories: 120, sugar: "6g", caffeine: "150mg" }
  },
  {
    id: 3,
    name: "Cold Brew Black",
    price: 28000,
    description: "Slow steeped for 12 hours. Pure, crisp, and refreshing with subtle chocolate notes.",
    category: "Coffee",
    image: "/src/assets/images/regenerated_image_1777988604926.png",
    ingredients: ["Cold Steeped Coffee Bean", "Filtered Water"],
    nutritionalInfo: { calories: 5, sugar: "0g", caffeine: "120mg" }
  },
  {
    id: 4,
    name: "Matcha Latte",
    price: 35000,
    description: "Premium Uji Matcha with creamy milk. Earthy and naturally sweet.",
    category: "Non-Coffee",
    image: "/src/assets/images/regenerated_image_1777988609189.png",
    ingredients: ["Uji Matcha Powder", "Fresh Milk", "Honey"],
    nutritionalInfo: { calories: 160, sugar: "10g", caffeine: "45mg" }
  },
  {
    id: 5,
    name: "Donut Gula",
    price: 8000,
    description: "Classic old-style donut with sugar snow. Soft and nostalgic.",
    category: "Snacks",
    image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=800&auto=format&fit=crop",
    ingredients: ["Flour", "Yeast", "Icing Sugar", "Butter"],
    nutritionalInfo: { calories: 250, sugar: "15g", caffeine: "0mg" }
  },
  {
    id: 6,
    name: "Banana Bread",
    price: 22000,
    description: "Moist and dense banana cake, toasted with a thick slice of premium butter.",
    category: "Snacks",
    image: "https://images.unsplash.com/photo-1530610476181-d83430b64dcd?q=80&w=800&auto=format&fit=crop",
    ingredients: ["Ripe Bananas", "Wheat Flour", "Walnuts", "Cinnamon"],
    nutritionalInfo: { calories: 320, sugar: "12g", caffeine: "0mg" }
  },
  {
    id: 7,
    name: "Earl Grey Tea",
    price: 20000,
    description: "Fragrant black tea infused with bergamot orange.",
    category: "Non-Coffee",
    image: "/src/assets/images/regenerated_image_1777981586100.png",
    ingredients: ["Earl Grey Tea Leaves", "Hot Water"],
    nutritionalInfo: { calories: 0, sugar: "0g", caffeine: "40mg" }
  },
  {
    id: 8,
    name: "Iced Chocolate",
    price: 30000,
    description: "Deep, rich Belgian chocolate blend with cold milk.",
    category: "Non-Coffee",
    image: "/src/assets/images/regenerated_image_1777981687394.png",
    ingredients: ["Belgian Cocoa", "Sugar", "Milk", "Ice"],
    nutritionalInfo: { calories: 220, sugar: "18g", caffeine: "5mg" }
  }
];
