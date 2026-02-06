"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useAppContext } from "@/contexts/AppContext";
import { Minus, Plus, Trash2, AlertTriangle } from "lucide-react";
import type { CartItem as CartItemType } from "@/contexts/AppContext";

interface CartItemProps {
  item: CartItemType;
}

export function CartItem({ item }: CartItemProps) {
  const [showWarning, setShowWarning] = useState(false);
  const { updateQuantity, removeItem, currency, cart } = useAppContext();

  // Check if this item is part of an applied bundle
  const isInAppliedBundle =
    cart.appliedBundles &&
    cart.appliedBundles.some((bundle) => bundle.requiredItems.includes(item.id));

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity <= 0) {
      if (isInAppliedBundle) {
        setShowWarning(true);
        setTimeout(() => setShowWarning(false), 3000);
      }
      removeItem(item.id);
    } else {
      updateQuantity(item.id, newQuantity);
    }
  };

  const handleRemove = () => {
    if (isInAppliedBundle) {
      setShowWarning(true);
      setTimeout(() => setShowWarning(false), 3000);
    }
    removeItem(item.id);
  };

  return (
    <div className="relative bg-white p-3 sm:p-4 border-b border-border last:border-b-0">
      {showWarning && (
        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 z-10 animate-fade-in-up">
          <div className="bg-orange-500 text-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2 text-sm font-medium">
            <AlertTriangle className="h-4 w-4" />
            Removing this will cancel the bundle offer
          </div>
        </div>
      )}
      <div className="flex items-center gap-3 sm:gap-4">
        {item.image && (
          <div className="relative h-14 w-14 sm:h-16 sm:w-16 shrink-0 overflow-hidden rounded-md">
            <Image
              src={item.image || "/placeholder.svg"}
              alt={item.name}
              fill
              sizes="(max-width: 640px) 56px, 64px"
              className="object-contain"
            />
          </div>
        )}

        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-sm text-foreground mb-2 line-clamp-1">{item.name}</h3>

          <div className="flex items-center gap-2 sm:gap-3">
            <div className="flex items-center gap-0.5 sm:gap-1 border border-border rounded">
              <Button
                variant="ghost"
                size="icon"
                className="h-7 w-7 hover:bg-muted rounded-none"
                onClick={() => handleQuantityChange(item.quantity - 1)}
              >
                <Minus className="h-3 w-3" />
              </Button>

              <span className="w-7 sm:w-8 text-center text-sm font-medium border-x border-border">
                {item.quantity}
              </span>

              <Button
                variant="ghost"
                size="icon"
                className="h-7 w-7 hover:bg-muted rounded-none"
                onClick={() => handleQuantityChange(item.quantity + 1)}
              >
                <Plus className="h-3 w-3" />
              </Button>
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="h-7 w-7 text-destructive hover:text-destructive hover:bg-destructive/10"
              onClick={handleRemove}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>

          {isInAppliedBundle && (
            <div className="flex items-center gap-1 mt-2">
              <div className="h-2 w-2 bg-purple-500 rounded-full"></div>
              <span className="text-xs text-purple-600 dark:text-purple-400 font-medium">
                Part of bundle offer
              </span>
            </div>
          )}
        </div>

        <div className="text-right shrink-0">
          <p className="font-bold text-sm sm:text-base text-foreground">
            {currency}
            {(item.price * item.quantity).toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
}
