import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Leaf, Award } from "lucide-react";

import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

export const ProductCard = ({ product, onClick }: ProductCardProps) => {
  return (
    <Card 
      className="group cursor-pointer transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 bg-gradient-card border-0"
      onClick={onClick}
    >
      <CardContent className="p-0">
        <div className="relative overflow-hidden rounded-t-lg">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute top-3 left-3">
            <Badge variant="secondary" className="bg-accent text-accent-foreground shadow-accent">
              {product.category}
            </Badge>
          </div>
          {product.price?.original && (
            <div className="absolute top-3 right-3">
              <Badge variant="destructive" className="text-xs">
                Save ${(product.price.original - product.price.current).toFixed(2)}
              </Badge>
            </div>
          )}
        </div>
        
        <div className="p-4 space-y-3">
          <div>
            <h3 className="font-semibold text-lg text-card-foreground group-hover:text-primary transition-colors">
              {product.name}
            </h3>
            <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
              {product.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-1">
            {product.features.slice(0, 3).map((feature, index) => (
              <Badge key={index} variant="outline" className="text-xs px-2 py-1">
                {feature}
              </Badge>
            ))}
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-1">
              {product.reviews && (
                <>
                  <Star className="w-4 h-4 fill-accent text-accent" />
                  <span className="text-sm font-medium">{product.reviews.rating}</span>
                  <span className="text-xs text-muted-foreground">({product.reviews.count})</span>
                </>
              )}
            </div>
            
            {product.price && (
              <div className="text-right">
                <div className="flex items-center space-x-2">
                  {product.price.original && (
                    <span className="text-sm text-muted-foreground line-through">
                      ${product.price.original}
                    </span>
                  )}
                  <span className="font-bold text-lg text-primary">
                    ${product.price.current}
                  </span>
                </div>
              </div>
            )}
          </div>

          <div className="flex items-center space-x-4 pt-2 border-t border-border">
            <div className="flex items-center space-x-1">
              <Leaf className="w-3 h-3 text-success" />
              <span className="text-xs text-muted-foreground">Organic</span>
            </div>
            <div className="flex items-center space-x-1">
              <Award className="w-3 h-3 text-accent" />
              <span className="text-xs text-muted-foreground">Certified</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};