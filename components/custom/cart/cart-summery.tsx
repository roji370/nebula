"use client";

import { LogIn, Receipt } from "lucide-react";
import { useUser } from "@clerk/nextjs";
import { useClerk } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useAppContext } from "@/contexts/AppContext";

export function CartSummary() {
  const { cart, clearCart, currency } = useAppContext();
  const { user } = useUser();
  const { openSignIn } = useClerk();
  const { total, itemCount, finalTotal: cartFinalTotal } = cart;

  const shipping = total > 50 ? 0 : 9.99;
  const tax = total * 0.08;
  const finalTotal = cartFinalTotal + shipping + tax;
  localStorage.setItem("finalTotal", finalTotal.toString());

  return (
    <div className="bg-white">
      {/* Price Summary Header */}
      <div className="bg-white border-b border-border pb-3 pt-3 sm:pt-4 px-3 sm:px-4">
        <div className="flex items-center gap-2">
          <Receipt className="h-5 w-5 text-foreground" />
          <h3 className="text-base font-bold text-foreground">Price Summary</h3>
        </div>
      </div>

      {/* Price Details */}
      <div className="space-y-3 pt-3 sm:pt-4 pb-3 sm:pb-4 px-3 sm:px-4 bg-white">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Order Total</span>
          <span className="font-semibold text-foreground">
            {currency}
            {total.toFixed(2)}
          </span>
        </div>

        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Shipping</span>
          <span className="font-semibold text-foreground">
            {shipping === 0 ? "Free" : `${currency}${shipping.toFixed(2)}`}
          </span>
        </div>

        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Tax</span>
          <span className="font-semibold text-foreground">
            {currency}
            {tax.toFixed(2)}
          </span>
        </div>

        <Separator className="my-3" />

        <div className="flex justify-between font-bold text-base pt-2">
          <span className="text-foreground">To Pay</span>
          <span className="text-foreground">
            {currency}
            {finalTotal.toFixed(2)}
          </span>
        </div>

        {total < 50 && (
          <p className="text-xs text-muted-foreground bg-blue-50 p-2 rounded-md border border-blue-100">
            💡 Add {currency}
            {(50 - total).toFixed(2)} more for free shipping
          </p>
        )}
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col gap-3 bg-white pt-3 sm:pt-4 px-3 sm:px-4 pb-3 sm:pb-4">
        {!user ? (
          <>
            <Button
              className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-5 sm:py-6 rounded-md shadow-md hover:shadow-lg transition-all"
              size="lg"
              onClick={() => openSignIn()}
            >
              <LogIn className="mr-2 h-5 w-5" />
              Sign in to Checkout
            </Button>
            <p className="text-xs text-center text-muted-foreground">
              You need to be signed in to proceed with checkout
            </p>
          </>
        ) : (
          <Button
            className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-5 sm:py-6 rounded-md shadow-md hover:shadow-lg transition-all"
            size="lg"
            disabled={itemCount === 0}
            asChild
          >
            <a href="/checkout">Add address</a>
          </Button>
        )}

        <Button
          variant="outline"
          className="w-full border-border hover:bg-muted/50 rounded-md"
          onClick={clearCart}
          disabled={itemCount === 0}
        >
          Clear Cart
        </Button>
      </div>
    </div>
  );
}
