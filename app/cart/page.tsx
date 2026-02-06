"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useAppContext } from "@/contexts/AppContext";
import { ArrowLeft, ShoppingBag, Package, Receipt } from "lucide-react";
import { CartItem } from "@/components/custom/cart/cart-items";
import { CartSummary } from "@/components/custom/cart/cart-summery";

export default function CartPage() {
  const { cart, currency } = useAppContext();
  const { items, itemCount, total } = cart;

  // Calculate final total
  const shipping = total > 50 ? 0 : 9.99;
  const tax = total * 0.08;
  const finalTotal = cart.finalTotal + shipping + tax;

  if (itemCount === 0) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col items-center justify-center py-20 text-center max-w-2xl mx-auto">
            <div className="relative mb-6">
              <div className="relative bg-muted rounded-full p-8">
                <ShoppingBag className="h-20 w-20 text-muted-foreground" />
              </div>
            </div>
            <h2 className="text-2xl font-bold mb-3 text-foreground">Your cart is empty</h2>
            <p className="text-muted-foreground mb-8">
              Discover our amazing collection of products
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/">Start Shopping</Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-3 sm:px-4 py-4 sm:py-6 max-w-4xl">
        {/* Cart Details Section */}
        <div className="mb-4 sm:mb-6">
          <div className="mb-3 sm:mb-4">
            <div className="flex items-center gap-2 mb-1">
              <Package className="h-5 w-5 text-foreground" />
              <h2 className="text-base font-bold text-foreground">Cart details</h2>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Total Items: {itemCount} | To pay: {currency}
              {finalTotal.toFixed(2)}
            </p>
          </div>

          {/* Cart Items */}
          <div className="bg-white border border-border rounded-md overflow-hidden">
            {items.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
        </div>

        {/* Price Summary Section - Full Width Below */}
        <div>
          <CartSummary />
        </div>
      </div>
    </div>
  );
}
