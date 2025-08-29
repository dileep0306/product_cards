import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, ArrowLeft, Leaf, Award, Truck, Heart } from "lucide-react";
import { Product } from "@/data/products";

interface ProductDetailsProps {
  product: Product;
  onBack: () => void;
}

export const ProductDetails = ({ product, onBack }: ProductDetailsProps) => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-6 max-w-6xl">
        <Button 
          variant="ghost" 
          onClick={onBack} 
          className="mb-6 hover:bg-secondary"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Products
        </Button>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <div className="space-y-4">
            <Card className="overflow-hidden bg-gradient-card border-0 shadow-card">
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-80 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-accent text-accent-foreground shadow-accent">
                    {product.category}
                  </Badge>
                </div>
              </div>
            </Card>
          </div>

          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">{product.name}</h1>
              <p className="text-muted-foreground text-lg leading-relaxed">{product.description}</p>
            </div>

            {product.reviews && (
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1">
                  <Star className="w-5 h-5 fill-accent text-accent" />
                  <span className="font-semibold text-lg">{product.reviews.rating}</span>
                  <span className="text-muted-foreground">({product.reviews.count} reviews)</span>
                </div>
              </div>
            )}

            {product.price && (
              <div className="flex items-center space-x-3">
                {product.price.original && (
                  <span className="text-xl text-muted-foreground line-through">
                    ${product.price.original}
                  </span>
                )}
                <span className="text-3xl font-bold text-primary">
                  ${product.price.current}
                </span>
                {product.price.original && (
                  <Badge variant="destructive">
                    {Math.round(((product.price.original - product.price.current) / product.price.original) * 100)}% OFF
                  </Badge>
                )}
              </div>
            )}

            <div className="flex space-x-3">
              <Button className="flex-1 bg-gradient-primary hover:opacity-90 text-primary-foreground">
                Add to Cart
              </Button>
              <Button variant="outline" size="icon" className="hover:bg-secondary">
                <Heart className="w-4 h-4" />
              </Button>
            </div>

            <div className="flex items-center space-x-6 pt-4 border-t border-border">
              <div className="flex items-center space-x-2">
                <Leaf className="w-4 h-4 text-success" />
                <span className="text-sm text-muted-foreground">Organic Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-4 h-4 text-accent" />
                <span className="text-sm text-muted-foreground">Quality Assured</span>
              </div>
              <div className="flex items-center space-x-2">
                <Truck className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">Free Shipping</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="bg-gradient-card border-0 shadow-card">
            <CardHeader>
              <CardTitle className="text-lg flex items-center">
                <Leaf className="w-5 h-5 mr-2 text-success" />
                Features
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {product.features.map((feature, index) => (
                  <Badge key={index} variant="outline" className="mr-2 mb-2">
                    {feature}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {product.nutrition && (
            <Card className="bg-gradient-card border-0 shadow-card">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Award className="w-5 h-5 mr-2 text-accent" />
                  Nutrition
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {Object.entries(product.nutrition).map(([key, value]) => (
                    <div key={key} className="flex justify-between">
                      <span className="capitalize text-muted-foreground">{key}:</span>
                      <span className="font-medium">{value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {product.traceability && (
            <Card className="bg-gradient-card border-0 shadow-card">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Truck className="w-5 h-5 mr-2 text-primary" />
                  Traceability
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {product.traceability.map((item, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-success rounded-full"></div>
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};