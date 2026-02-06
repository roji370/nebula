"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Gift, ChevronRight } from "lucide-react";

interface Offer {
  id: string;
  title: string;
  code: string;
  description: string;
  minAmount?: number;
}

const AVAILABLE_OFFERS: Offer[] = [
  {
    id: "1",
    title: "Get 3 Bestsellers FREE",
    code: "BEST3",
    description: "Add eligible items worth ₹699 more to avail this offer",
    minAmount: 699,
  },
  {
    id: "2",
    title: "Get Flat 30% OFF",
    code: "STEAL30",
    description: "Add eligible items worth ₹899 more to avail this offer",
    minAmount: 899,
  },
  {
    id: "3",
    title: "Buy 3 Pay For 2",
    code: "B3P2",
    description: "Add 3 or more eligible items to avail this offer",
  },
];

export function AvailableOffers() {
  return (
    <Card className="p-5 bg-white border shadow-sm rounded-xl">
      <div className="flex items-center gap-2 mb-4">
        <Gift className="h-5 w-5 text-primary" />
        <h3 className="text-base font-bold text-foreground">Available offers for you (3)</h3>
      </div>
      <p className="text-xs text-muted-foreground mb-4">All coupons are applicable on MRP</p>

      <div className="space-y-3">
        {AVAILABLE_OFFERS.map((offer) => (
          <div
            key={offer.id}
            className="border border-border rounded-lg p-4 hover:border-primary/50 transition-colors"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <div className="border-2 border-dashed border-primary rounded px-2 py-1">
                    <span className="text-xs font-bold text-primary">{offer.code}</span>
                  </div>
                  <h4 className="text-sm font-semibold text-foreground">{offer.title}</h4>
                </div>
                <p className="text-xs text-muted-foreground">{offer.description}</p>
                <Button
                  variant="link"
                  className="text-xs text-primary p-0 h-auto mt-2 font-semibold"
                >
                  View details
                </Button>
              </div>
              <Button
                variant="outline"
                size="sm"
                className="border-primary text-primary hover:bg-primary/10 font-bold text-xs px-4 shrink-0"
              >
                Apply
              </Button>
            </div>
          </div>
        ))}
      </div>

      <Button variant="ghost" className="w-full mt-4 text-primary hover:bg-primary/5 font-semibold">
        View all offers
        <ChevronRight className="h-4 w-4 ml-1" />
      </Button>
    </Card>
  );
}
