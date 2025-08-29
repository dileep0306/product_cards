export interface Product {
  id: number;
  name: string;
  image: string;
  category: string;
  description: string;
  features: string[];
  nutrition?: {
    calories: number;
    sugar: string;
    [key: string]: string | number;
  };
  traceability?: string[];
  reviews?: {
    rating: number;
    count: number;
  };
  price?: {
    current: number;
    original?: number;
    currency: string;
  };
}

export const products: Product[] = [
  {
    id: 1,
    name: "Hedamo Organic Honey",
    image: "https://www.greendna.in/cdn/shop/products/pure-organic-honey_849x.jpg?v=1563029396",
    category: "Food",
    description: "Pure wild honey harvested from organic farms, unprocessed and nutrient-rich.",
    features: ["Unprocessed", "Nutrient-rich", "Eco-friendly"],
    nutrition: {
      calories: 70,
      sugar: "15g",
      protein: "0g",
      carbs: "17g"
    },
    traceability: ["Organic certification", "Local sourcing", "Fair trade"],
    reviews: {
      rating: 4.8,
      count: 124
    },
    price: {
      current: 24.99,
      original: 29.99,
      currency: "USD"
    }
  },
  {
    id: 2,
    name: "Premium Olive Oil",
    image: "https://rukminim2.flixcart.com/image/704/844/l0tweq80/edible-oil/x/m/6/500-imported-extra-virgin-olive-oil-1-plastic-bottle-olive-oil-original-imagcj25twtcykcc.jpeg?q=90&crop=false",
    category: "Food",
    description: "Extra virgin olive oil from Mediterranean groves, cold-pressed for maximum flavor.",
    features: ["Cold-pressed", "Extra virgin", "Mediterranean"],
    nutrition: {
      calories: 120,
      sugar: "0g",
      fat: "14g",
      sodium: "0mg"
    },
    traceability: ["Single origin", "Traditional methods", "Quality certified"],
    reviews: {
      rating: 4.9,
      count: 89
    },
    price: {
      current: 32.99,
      currency: "USD"
    }
  },
  {
    id: 3,
    name: "Artisan Coffee Beans",
    image: "https://artisante.in/cdn/shop/products/fairlands-estate-single-origin-800516_387x.jpg",
    category: "Beverages",
    description: "Single-origin coffee beans roasted to perfection, delivering rich and complex flavors.",
    features: ["Single-origin", "Dark roast", "Fair trade"],
    nutrition: {
      calories: 5,
      sugar: "0g",
      caffeine: "95mg",
      sodium: "5mg"
    },
    traceability: ["Farm direct", "Ethically sourced", "Small batch"],
    reviews: {
      rating: 4.7,
      count: 156
    },
    price: {
      current: 18.99,
      original: 22.99,
      currency: "USD"
    }
  }
];