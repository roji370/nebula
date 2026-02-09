import { Suspense } from "react";
import ProductsClient from "@/components/custom/ProductsClient";

export default function Page() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen">
          <div className="max-w-7xl mx-auto px-4 py-8">
            {/* Header Skeleton */}
            <div className="flex flex-col gap-6 mb-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <div className="h-8 bg-muted rounded w-48 mb-2 animate-pulse"></div>
                  <div className="h-4 bg-muted rounded w-32 animate-pulse"></div>
                </div>
                <div className="h-10 bg-muted rounded-lg w-full md:w-80 animate-pulse"></div>
              </div>

              {/* Category tabs skeleton */}
              <div className="flex gap-2 pb-4 border-b border-border overflow-x-auto">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="h-8 bg-muted rounded-full w-20 animate-pulse"></div>
                ))}
              </div>
            </div>

            {/* Product Cards Skeleton */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 mt-6">
              {[...Array(8)].map((_, index) => (
                <div key={index} className="bg-card rounded-xl p-4 border shadow-sm animate-pulse">
                  <div className="aspect-square bg-muted rounded-lg mb-4"></div>
                  <div className="bg-muted h-5 rounded mb-2 w-3/4"></div>
                  <div className="bg-muted h-4 rounded mb-2 w-1/2"></div>
                  <div className="bg-muted h-10 rounded"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      }
    >
      <ProductsClient />
    </Suspense>
  );
}
