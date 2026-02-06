"use client";

import Link from "next/link";
import { Sparkles, Sun, Wind } from "lucide-react";

// Custom animations styles
const animationStyles = `
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-8px); }
  }
  @keyframes glow {
    0%, 100% { opacity: 0.4; }
    50% { opacity: 0.8; }
  }
  @keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }
  .animate-float {
    animation: float 3s ease-in-out infinite;
  }
  .animate-glow {
    animation: glow 2s ease-in-out infinite;
  }
  .animate-shimmer {
    animation: shimmer 3s infinite;
  }
`;

const categories = [
  {
    name: "Makeup",
    path: "/products?category=Makeup",
    icon: Sparkles,
    gradient: "from-pink-400 to-rose-400",
    bgColor: "bg-pink-500",
    glowColor: "shadow-pink-500/20",
    description: "Beauty Essentials",
    emoji: "💄",
  },
  {
    name: "Face Care",
    path: "/products?category=Face+Care",
    icon: Sun,
    gradient: "from-amber-400 to-orange-400",
    bgColor: "bg-orange-500",
    glowColor: "shadow-orange-500/20",
    description: "Radiant Skin",
    emoji: "✨",
  },
  {
    name: "Hair Care",
    path: "/products?category=Hair+Care",
    icon: Wind,
    gradient: "from-primary to-cyan-400",
    bgColor: "bg-primary",
    glowColor: "shadow-primary/20",
    description: "Healthy & Strong",
    emoji: "💇‍♀️",
  },
];

export default function ProductCategories() {
  return (
    <div className="py-20 relative overflow-hidden">
      <style jsx>{animationStyles}</style>

      {/* Background Elements */}
      <div className="absolute inset-0 bg-muted"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Enhanced Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-foreground">
            🛍️ Shop by Category
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-medium">
            Explore our curated collection of premium beauty and wellness products
          </p>
          <div className="w-24 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Enhanced Categories Grid */}
        <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-4xl mx-auto">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Link
                key={index}
                href={category.path}
                className="group relative overflow-hidden cursor-pointer"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Glow Effect */}
                <div
                  className={`absolute -inset-0.5 bg-linear-to-r ${category.gradient} rounded-3xl blur opacity-0 group-hover:opacity-40 transition-all duration-500 ${category.glowColor}`}
                ></div>

                {/* Main Card */}
                <div className="relative bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl rounded-2xl md:rounded-3xl p-4 md:p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-white/30 dark:border-zinc-700/50 overflow-hidden group-hover:bg-white/90 dark:group-hover:bg-zinc-900/90">
                  {/* Shine Effect */}
                  <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>

                  {/* Icon Container with Enhanced Effects */}
                  <div className="relative mb-3 md:mb-6">
                    <div
                      className={`absolute inset-0 bg-linear-to-br ${category.gradient} rounded-xl md:rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-all duration-500 animate-glow`}
                    ></div>
                    <div
                      className={`relative bg-linear-to-br ${category.gradient} rounded-xl md:rounded-2xl p-3 md:p-6 shadow-lg group-hover:shadow-xl transition-all duration-500 animate-float`}
                    >
                      <IconComponent className="w-8 h-8 md:w-12 md:h-12 text-white mx-auto drop-shadow-lg group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    {/* Emoji Overlay */}
                    <div className="absolute -top-1 -right-1 md:-top-2 md:-right-2 text-lg md:text-2xl group-hover:scale-125 transition-transform duration-300">
                      {category.emoji}
                    </div>
                  </div>

                  {/* Enhanced Text */}
                  <div className="space-y-1 md:space-y-2">
                    <h3 className="font-bold text-base md:text-lg text-foreground transition-all duration-300">
                      {category.name}
                    </h3>
                    <p className="text-sm text-muted-foreground font-medium opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      {category.description}
                    </p>
                  </div>

                  {/* Interactive Arrow */}
                  <div className="mt-4 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 delay-100">
                    <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 bg-white/20 dark:bg-black/20 backdrop-blur-md border border-white/30 dark:border-white/10 rounded-full px-6 py-3 text-muted-foreground font-medium">
            <span>✨ Discover premium quality products</span>
          </div>
        </div>
      </div>
    </div>
  );
}
