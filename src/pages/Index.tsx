import { useState } from "react";
import { ProductGrid } from "@/components/ProductGrid";
import { ProductDetails } from "@/components/ProductDetails";
import { products, Product } from "@/data/products";
import { Package, Sparkles } from "lucide-react";

const Index = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  if (selectedProduct) {
    return (
      <ProductDetails
        product={selectedProduct}
        onBack={() => setSelectedProduct(null)}
      />
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <header className="text-center mb-12 space-y-4">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Package className="w-8 h-8 text-primary" />
            <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Hedamo
            </h1>
            <Sparkles className="w-6 h-6 text-accent" />
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our curated collection of premium organic products, 
            carefully selected for quality and sustainability.
          </p>
        </header>

        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-semibold text-foreground">Featured Products</h2>
            <div className="text-sm text-muted-foreground">
              {products.length} products available
            </div>
          </div>
          
          <ProductGrid
            products={products}
            onProductClick={setSelectedProduct}
          />
        </section>
      </div>
    </div>
  );
};

export default Index;
