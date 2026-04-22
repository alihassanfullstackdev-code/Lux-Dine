import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const FOOD_ITEMS = [
  {
    id: 1,
    name: "Zinger Fire Burger",
    price: "$12",
    description: "Crispy fried chicken breast, spicy mayo, iceberg lettuce on a toasted brioche bun.",
    image: "/images/chef.jpg",
    category: "Fast Food"
  },
  {
    id: 2,
    name: "Royal Chicken Biryani",
    price: "$18",
    description: "Long-grain basmati rice layered with spiced chicken, saffron, and caramelised onions.",
    image: "/images/biryani.jpg",
    category: "Desi Classic"
  },
  {
    id: 3,
    name: "Seekh Kebab Platter",
    price: "$15",
    description: "Succulent minced lamb skewers grilled over charcoal, served with mint chutney.",
    image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&q=80&w=800",
    category: "Grill"
  },
  {
    id: 4,
    name: "Loaded Masala Fries",
    price: "$8",
    description: "Crispy fries tossed in spiced masala, topped with melted cheese and peri-peri sauce.",
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&q=80&w=800",
    category: "Snacks"
  },
  {
    id: 5,
    name: "Pistachio Gulab Jamun",
    price: "$7",
    description: "Soft milk solids dumplings soaked in rose-flavored syrup, topped with crushed pistachios.",
    image: "https://images.unsplash.com/photo-1548943487-a2e4e43b4853?auto=format&fit=crop&q=80&w=800",
    category: "Desserts"
  }
];

export const CATEGORIES = [
  { id: 'bbq', title: 'The Tandoor Hub', desc: 'Charcoal-grilled masterpieces from the heart of the east.', color: '#F27D26' },
  { id: 'fast', title: 'Crunch Control', desc: 'Modern fast food classics with a spicy house-made twist.', color: '#26A0F2' },
  { id: 'spice', title: 'Masala Magic', desc: 'Traditional curries and rice dishes cooked to perfection.', color: '#82F226' },
  { id: 'sweet', title: 'Sugar Street', desc: 'Traditional sweets and modern fusion desserts.', color: '#F226A0' }
];
