"use client";

import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/lib/currency";
import { useAppContext } from "@/contexts/AppContext";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Heart, ShoppingCart, Sparkles, TrendingUp, Plus, Minus } from "lucide-react";

interface ProductCard {
  id: string;
  name: string;
  description: string;
  price: number;
  discountedPrice?: number;
  sku: string;
  stock: number;
  images: string[];
  categories: string[];
  featured: boolean;
  createdAt: Date;
  updatedAt: Date;
}

interface ProductCardProps {
  product: ProductCard;
}

export function ProductCard({ product }: ProductCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const { addItem, currency, cart, updateQuantity, removeItem } = useAppContext();

  // Check if item exists in cart
  const cartItem = cart.items.find((item) => item.id === product.id);

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.discountedPrice || product.price,
      image: product.images[0] || "/placeholder.svg",
    });
  };

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity <= 0) {
      removeItem(product.id);
    } else {
      updateQuantity(product.id, newQuantity);
    }
  };

  const currentPrice = product.discountedPrice || product.price;
  const hasDiscount = product.discountedPrice && product.discountedPrice < product.price;
  const discountPercentage = hasDiscount
    ? Math.round(((product.price - product.discountedPrice!) / product.price) * 100)
    : 0;

  return (
    <div className="group h-full">
      <Card className="relative bg-card rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300 border h-full flex flex-col">
        {/* Image Section */}
        <CardHeader className="p-0 relative">
          <Link href={`/products/${product.id}`}>
            <div className="relative aspect-square bg-muted/20">
              <Image
                src={product.images[0] || "/placeholder.svg"}
                alt={product.name}
                width={400}
                height={400}
                className={cn(
                  "w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-105",
                  imageLoaded ? "opacity-100" : "opacity-0"
                )}
                onLoad={() => setImageLoaded(true)}
              />

              {/* Badges */}
              <div className="absolute top-0 left-0 flex flex-col gap-1 p-2">
                {/* Best Seller / Featured Badge - Pink/Red */}
                {product.featured && (
                  <Badge className="bg-pink-500 hover:bg-pink-600 text-white rounded-sm font-bold text-[10px] px-2 py-0.5 uppercase tracking-wide shadow-sm">
                    BEST SELLER
                  </Badge>
                )}
                {/* Stock Running Low - Green */}
                {product.stock > 0 && product.stock < 10 && (
                  <Badge className="bg-green-500 hover:bg-green-600 text-white rounded-sm font-bold text-[10px] px-2 py-0.5 uppercase tracking-wide shadow-sm">
                    STOCK RUNNING LOW
                  </Badge>
                )}
                {/* Trending - Orange */}
                {!product.featured && product.stock >= 10 && (
                  <Badge className="bg-orange-500 hover:bg-orange-600 text-white rounded-sm font-bold text-[10px] px-2 py-0.5 uppercase tracking-wide shadow-sm">
                    TRENDING
                  </Badge>
                )}
              </div>

              {/* Wishlist Button */}
              <Button
                variant="ghost"
                size="icon"
                className={cn(
                  "absolute top-2 right-2 h-8 w-8 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white shadow-sm transition-all",
                  isWishlisted ? "text-red-500" : "text-gray-400 hover:text-red-500"
                )}
                onClick={(e) => {
                  e.preventDefault();
                  setIsWishlisted(!isWishlisted);
                }}
              >
                <Heart className={cn("h-5 w-5", isWishlisted && "fill-current")} />
              </Button>
            </div>
          </Link>
        </CardHeader>

        <CardContent className="p-4 pt-2 flex-1 flex flex-col text-center">
          {/* Product Name */}
          <Link href={`/products/${product.id}`} className="block mb-2">
            <h3 className="font-semibold text-base text-gray-800 line-clamp-2 min-h-[3rem] group-hover:text-primary transition-colors">
              {product.name}
            </h3>
          </Link>

          {/* Subtitle/Description (Optional) */}
          <p className="text-xs text-muted-foreground mb-2 line-clamp-1">
            {product.description || "Natural & Toxin Free"}
          </p>

          {/* Rating (Static for now, can be dynamic) */}
          <div className="flex items-center justify-center gap-1 mb-3">
            <div className="flex items-center bg-green-50 px-2 py-0.5 rounded text-xs font-bold text-green-700">
              4.8 <Sparkles className="h-3 w-3 ml-1 fill-current" />
            </div>
            <span className="text-xs text-muted-foreground">(120 Reviews)</span>
          </div>

          {/* Price */}
          <div className="mb-4 mt-auto">
            <div className="flex items-center justify-center gap-2 mb-1">
              <span className="text-lg font-bold text-gray-900">
                {formatCurrency(currentPrice, currency)}
              </span>
              {hasDiscount && (
                <span className="text-sm text-gray-500 line-through">
                  {formatCurrency(product.price, currency)}
                </span>
              )}
            </div>
            {hasDiscount && (
              <span className="text-xs font-bold text-green-600">{discountPercentage}% off</span>
            )}
          </div>

          {/* Action Button */}
          <div className="mt-2">
            {cartItem ? (
              <div className="flex items-center justify-center gap-3">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-9 w-9 border-primary text-primary hover:bg-primary/10 rounded-md"
                  onClick={() => handleQuantityChange(cartItem.quantity - 1)}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="font-bold w-6 text-center">{cartItem.quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-9 w-9 border-primary text-primary hover:bg-primary/10 rounded-md"
                  onClick={() => handleQuantityChange(cartItem.quantity + 1)}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            ) : (
              <Button
                className={cn(
                  "w-full rounded-md font-bold text-sm h-10 transition-colors",
                  product.stock === 0
                    ? "bg-muted text-muted-foreground"
                    : "bg-primary hover:bg-primary/90"
                )}
                onClick={handleAddToCart}
                disabled={product.stock === 0}
              >
                {product.stock === 0 ? "OUT OF STOCK" : "ADD TO CART"}
                {product.stock > 0 && <ShoppingCart className="ml-2 h-4 w-4" />}
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
