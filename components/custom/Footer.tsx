"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import SocialLinks from "@/components/custom/SocialLinks";

export default function Footer() {
  const pathname = usePathname();

  // Hide footer on seller dashboard
  if (pathname.startsWith("/seller")) return null;

  return (
    <footer className="relative bg-muted pt-16 pb-8 border-t border-border mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-bold text-2xl text-primary">Nebula</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Premium beauty & wellness platform delivering natural, high-quality products for your
              lifestyle.
            </p>
            <SocialLinks variant="footer" />
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Shop</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/products" className="hover:text-primary transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link
                  href="/products?featured=true"
                  className="hover:text-primary transition-colors"
                >
                  Best Sellers
                </Link>
              </li>
              <li>
                <Link href="/products?new=true" className="hover:text-primary transition-colors">
                  New Arrivals
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-foreground mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Stay Updated</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Subscribe for exclusive offers & latest updates.
            </p>
            <form className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-input rounded-md focus:border-primary focus:ring-1 focus:ring-primary outline-none bg-background text-sm"
              />
              <Button className="w-full bg-primary hover:bg-primary/90 text-white font-bold rounded-md">
                SUBSCRIBE
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2026 NIKANTHA. All rights reserved.</p>
          <div className="flex flex-wrap gap-4 md:gap-6 justify-center">
            <Link href="/legal#privacy" className="hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="/legal#terms" className="hover:text-primary">
              Terms of Service
            </Link>
            <Link href="/legal#refund" className="hover:text-primary">
              Refund Policy
            </Link>
            <Link href="/legal#shipping" className="hover:text-primary">
              Shipping Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
