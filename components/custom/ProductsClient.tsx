"use client";

import { Input } from "@/components/ui/input";
import { useMemo, useState, useEffect } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { ProductCard } from "@/components/custom/ProductCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Product {
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

export default function ProductsClient() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");

  const router = useRouter();
  const clientSearchParams = useSearchParams();

  // Initialize activeCategory from URL search params like ?category=Hair%20Oils
  const urlCategory = clientSearchParams?.get("category") || "All";
  const [activeCategory, setActiveCategory] = useState<string>(urlCategory);

  // Keep state synced with URL changes (like back/forward navigation)
  useEffect(() => {
    if (urlCategory && urlCategory !== activeCategory) {
      setActiveCategory(urlCategory);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [urlCategory]);

  // Update the URL when the user selects a category
  const updateCategoryInUrl = (value: string) => {
    try {
      const params = new URLSearchParams(clientSearchParams?.toString() || "");

      // Remove Next/React debug/internal query keys if accidentally present
      // (e.g. keys like 'status','value','reason','_children','_debugChunk','_debugInfo')
      const internalKeys = ["status", "value", "reason", "_children", "_debugChunk", "_debugInfo"];
      for (const k of internalKeys) params.delete(k);
      // also drop any keys starting with underscore
      for (const [k] of Array.from(params.entries())) {
        if (k.startsWith("_")) params.delete(k);
      }

      if (!value || value === "All") {
        params.delete("category");
      } else {
        params.set("category", value);
      }

      router.replace(`/products${params.toString() ? `?${params.toString()}` : ""}`);
    } catch {}
  };

  // When the user changes category via UI
  const handleCategoryChange = (value: string) => {
    setActiveCategory(value);
    updateCategoryInUrl(value);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/api/products");
        if (response.ok) {
          const data = await response.json();
          setProducts(data.products);
        }
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const [sort, setSort] = useState("popular");

  // Get unique categories from products
  const categories = useMemo(() => {
    const allCategories = products.flatMap((product) => product.categories);
    return ["All", ...Array.from(new Set(allCategories))];
  }, [products]);

  const filtered = useMemo(() => {
    let items = products.filter((p) => p.name.toLowerCase().includes(query.trim().toLowerCase()));

    if (activeCategory !== "All") {
      items = items.filter((p) => p.categories.includes(activeCategory));
    }

    switch (sort) {
      case "price-asc":
        items = [...items].sort(
          (a, b) => (a.discountedPrice || a.price) - (b.discountedPrice || b.price)
        );
        break;
      case "price-desc":
        items = [...items].sort(
          (a, b) => (b.discountedPrice || b.price) - (a.discountedPrice || a.price)
        );
        break;
      case "name":
        items = [...items].sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "newest":
        items = [...items].sort(
          (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
        break;
      default:
        break;
    }

    return items;
  }, [products, query, activeCategory, sort]);

  return (
    <div className="min-h-screen">
      {/* Enhanced Hero Section */}
      {/* Compact Modern Header */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col gap-6">
          {/* Top Row: Title & Search & Stats */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-foreground">All Products</h1>
              <p className="text-sm text-muted-foreground mt-1">Showing {filtered.length} items</p>
            </div>

            <div className="flex items-center gap-4 flex-1 md:justify-end">
              <div className="relative w-full md:w-80">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search..."
                  className="pl-9 h-10 bg-background border-border rounded-lg focus-visible:ring-1 focus-visible:ring-primary"
                />
              </div>
            </div>
          </div>

          {/* Second Row: Categories & Sort - Single Bar */}
          <Tabs
            defaultValue="All"
            value={activeCategory}
            onValueChange={handleCategoryChange}
            className="w-full"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border pb-4">
              <TabsList className="bg-transparent h-auto p-0 flex flex-wrap gap-2 justify-start w-full sm:w-auto overflow-x-auto no-scrollbar">
                {categories.map((cat) => (
                  <TabsTrigger
                    key={cat}
                    value={cat}
                    className="rounded-full px-4 py-1.5 h-auto text-sm border border-border data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:border-primary hover:bg-muted/50 transition-colors"
                  >
                    {cat}
                  </TabsTrigger>
                ))}
              </TabsList>

              <div className="flex items-center gap-2 shrink-0">
                <span className="text-sm text-muted-foreground whitespace-nowrap">Sort by:</span>
                <select
                  className="bg-transparent border-none text-sm font-medium text-foreground focus:ring-0 cursor-pointer pr-8"
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                >
                  <option value="popular">Popular</option>
                  <option value="newest">Newest</option>
                  <option value="name">Name (A–Z)</option>
                  <option value="price-asc">Price (Low)</option>
                  <option value="price-desc">Price (High)</option>
                </select>
              </div>
            </div>

            <TabsContent value={activeCategory} className="mt-6 pointer-events-none">
              {/* Empty placeholder to keep structure valid - content rendered below */}
            </TabsContent>
          </Tabs>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
            {[...Array(8)].map((_, index) => (
              <div key={index} className="bg-muted/10 rounded-lg p-4 animate-pulse">
                <div className="aspect-square bg-muted/20 rounded-md mb-3"></div>
                <div className="bg-muted/20 h-4 rounded w-3/4 mb-2"></div>
                <div className="bg-muted/20 h-4 rounded w-1/2"></div>
              </div>
            ))}
          </div>
        )}

        {/* Products Grid */}
        {!loading && (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 mt-2">
            {filtered.map((p, index) => (
              <div
                key={p.id}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <ProductCard product={p} />
              </div>
            ))}
          </div>
        )}

        {!loading && filtered.length === 0 && (
          <div className="text-center py-20 bg-muted/5 rounded-xl border border-dashed border-border mt-4">
            <h3 className="text-lg font-medium text-foreground mb-1">No products found</h3>
            <p className="text-sm text-muted-foreground">Try adjusting your search or filters</p>
          </div>
        )}
      </div>{" "}
    </div>
  );
}
