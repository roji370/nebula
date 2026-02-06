import "./globals.css";
import Script from "next/script";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Navbar from "@/components/custom/Navbar";
import Footer from "@/components/custom/Footer";
import { ProviderWrapper } from "@/components/ProviderWrapper";
import ClientFloatingButton from "@/components/ClientFloatingButton";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nebula E-Commerce - Premium Beauty & Wellness",
  description:
    "Discover premium quality beauty and wellness products with Nebula E-Commerce. Natural hair oils, organic face packs, and traditional wellness solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${montserrat.variable} font-sans antialiased`}>
        <ProviderWrapper>
          <div className="relative min-h-screen bg-background">
            <Navbar />
            <main className="relative">{children}</main>
            <Footer />
            <ClientFloatingButton />
          </div>
        </ProviderWrapper>
      </body>
      {/* Razorpay checkout script */}
      <Script src="https://checkout.razorpay.com/v1/checkout.js" strategy="afterInteractive" />
    </html>
  );
}
