import { ProductCard } from "./ProductCard";
import { Product } from "@/data/products";

interface ProductGridProps {
  products: Product[];
  onProductClick: (product: Product) => void;
}

export const ProductGrid = ({ products, onProductClick }: ProductGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
      {products.map((product, index) => (
        <div 
          key={product.id}
          className="animate-slide-up"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <ProductCard
            product={product}
            onClick={() => onProductClick(product)}
          />
        </div>
      ))}
    </div>
  );
};