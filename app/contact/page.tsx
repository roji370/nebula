"use client";

import { Button } from "@/components/ui/button";
import SocialLinks from "@/components/custom/SocialLinks";
import { generateWhatsAppMessage, generateWhatsAppUrl } from "@/lib/whatsappMessages";
import { Mail, MessageSquare, Phone, MapPin, Clock, MessageCircle, Navigation } from "lucide-react";

export default function ContactUs() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "";

  // Store details from environment variables
  const storeCity = process.env.NEXT_PUBLIC_STORE_CITY || "Kerala";
  const storeState = process.env.NEXT_PUBLIC_STORE_STATE || "Kerala";
  const storeZipCode = process.env.NEXT_PUBLIC_STORE_ZIP || "695001";
  const storePhone = process.env.NEXT_PUBLIC_STORE_PHONE || "+91 98765 43210";
  const storeEmail = process.env.NEXT_PUBLIC_STORE_EMAIL || "store@nebula.com";
  const storeAddress = process.env.NEXT_PUBLIC_STORE_ADDRESS || "Kerala, India";

  // Factory hours
  const factoryHours = [
    { day: "Monday - Saturday", hours: "9:00 AM - 5:00 PM" },
    { day: "Sunday", hours: "Closed" },
  ];

  const handleWhatsAppClick = () => {
    const message = generateWhatsAppMessage({ pathname: "/contact" });
    const whatsappUrl = generateWhatsAppUrl(whatsappNumber, message);
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  const handleGetDirections = () => {
    const query = encodeURIComponent(
      `${storeAddress}, ${storeCity}, ${storeState} ${storeZipCode}`
    );
    window.open(`https://www.google.com/maps/search/?api=1&query=${query}`, "_blank");
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Modern Background */}
      <div className="absolute inset-0 bg-linear-to-br from-purple-50/80 via-pink-50/60 to-blue-50/80 dark:from-purple-950/20 dark:via-pink-950/10 dark:to-blue-950/20"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-300/10 rounded-full blur-3xl animate-pulse"></div>
      <div
        className="absolute bottom-0 right-1/4 w-72 h-72 bg-pink-300/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <div className="relative inline-flex items-center justify-center w-20 h-20 mb-6">
                <div className="absolute -inset-2 bg-linear-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl animate-pulse"></div>
                <div className="relative bg-white/20 dark:bg-black/20 backdrop-blur-md border border-white/30 dark:border-white/10 rounded-full p-5">
                  <MessageSquare className="w-10 h-10 text-blue-600 dark:text-blue-400" />
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-black mb-6 bg-linear-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                💬 Get in Touch
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-medium">
                We're here to help! Reach out via WhatsApp, visit our factory, or connect with us on
                social media.
              </p>
              <div className="w-24 h-1 bg-linear-to-r from-purple-500 to-pink-500 mx-auto mt-6 rounded-full"></div>
            </div>

            {/* Main Content Section */}
            <div className="grid lg:grid-cols-2 gap-8 mb-16">
              {/* Left Side - Social Media & WhatsApp */}
              <div className="space-y-6">
                {/* Social Media Section */}
                <div className="relative">
                  <div className="absolute -inset-1 bg-linear-to-r from-purple-600 via-pink-600 to-blue-600 rounded-2xl blur opacity-20"></div>
                  <div className="relative bg-white/90 dark:bg-zinc-900/90 backdrop-blur-xl rounded-2xl p-6 shadow-2xl border border-white/30 dark:border-zinc-700/50">
                    <div className="text-center">
                      <h3 className="text-xl font-bold mb-3 bg-linear-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                        Connect With Us
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4">
                        Follow us on social media for the latest updates, offers, and beauty tips
                      </p>
                      <div className="flex justify-center">
                        <SocialLinks variant="contact" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* WhatsApp Section */}
                <div className="relative">
                  <div className="absolute -inset-1 bg-linear-to-r from-[#25D366] via-[#128C7E] to-[#075E54] rounded-2xl blur opacity-30 animate-pulse"></div>
                  <div className="relative bg-white/90 dark:bg-zinc-900/90 backdrop-blur-xl rounded-2xl p-6 shadow-2xl border border-white/30 dark:border-zinc-700/50">
                    <div className="text-center space-y-4">
                      {/* WhatsApp Icon */}
                      <div className="relative inline-flex items-center justify-center">
                        <div className="absolute -inset-3 bg-[#25D366]/20 rounded-full blur-xl animate-pulse"></div>
                        <div className="relative bg-[#25D366] rounded-full p-4 shadow-2xl">
                          <MessageCircle size={40} fill="white" className="text-white" />
                        </div>
                      </div>

                      <div>
                        <h2 className="text-xl font-black mb-2 bg-linear-to-r from-[#25D366] to-[#128C7E] bg-clip-text text-transparent">
                          Chat with Us on WhatsApp
                        </h2>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          Get instant responses to your queries! Our team is ready to assist you
                          with product recommendations, order tracking, and any questions you may
                          have.
                        </p>
                      </div>

                      {/* Benefits */}
                      <div className="grid grid-cols-3 gap-2">
                        <div className="bg-white/50 dark:bg-zinc-800/50 backdrop-blur-sm rounded-lg p-2">
                          <div className="text-lg mb-1">⚡</div>
                          <h4 className="font-semibold text-[10px] mb-0.5">Instant Replies</h4>
                          <p className="text-[9px] text-muted-foreground">No waiting</p>
                        </div>
                        <div className="bg-white/50 dark:bg-zinc-800/50 backdrop-blur-sm rounded-lg p-2">
                          <div className="text-lg mb-1">🛍️</div>
                          <h4 className="font-semibold text-[10px] mb-0.5">Product Help</h4>
                          <p className="text-[9px] text-muted-foreground">Expert advice</p>
                        </div>
                        <div className="bg-white/50 dark:bg-zinc-800/50 backdrop-blur-sm rounded-lg p-2">
                          <div className="text-lg mb-1">📦</div>
                          <h4 className="font-semibold text-[10px] mb-0.5">Order Support</h4>
                          <p className="text-[9px] text-muted-foreground">Track orders</p>
                        </div>
                      </div>

                      {/* CTA Button */}
                      <Button
                        onClick={handleWhatsAppClick}
                        disabled={!whatsappNumber}
                        className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white border-0 rounded-xl px-5 py-5 font-bold text-base shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 group"
                      >
                        <div className="flex items-center justify-center gap-2">
                          <MessageCircle size={20} fill="white" />
                          <span>Start WhatsApp Chat</span>
                        </div>
                      </Button>

                      {!whatsappNumber && (
                        <p className="text-xs text-red-500 dark:text-red-400">
                          WhatsApp number not configured
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Factory Info */}
              <div className="space-y-6">
                {/* Address Card */}
                <div className="relative">
                  <div className="absolute -inset-1 bg-linear-to-r from-purple-500 to-pink-500 rounded-2xl blur opacity-20"></div>
                  <div className="relative bg-white/90 dark:bg-zinc-900/90 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/30 dark:border-zinc-700/50">
                    <div className="flex items-start gap-4">
                      <div className="shrink-0">
                        <div className="bg-linear-to-br from-purple-500 to-pink-500 rounded-xl p-3 shadow-lg">
                          <MapPin className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-lg mb-2 text-foreground">Our Address</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {storeAddress}
                          <br />
                          {storeCity}, {storeState} {storeZipCode}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Info Card */}
                <div className="relative">
                  <div className="absolute -inset-1 bg-linear-to-r from-blue-500 to-cyan-500 rounded-2xl blur opacity-20"></div>
                  <div className="relative bg-white/90 dark:bg-zinc-900/90 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/30 dark:border-zinc-700/50">
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <div className="bg-linear-to-br from-blue-500 to-cyan-500 rounded-xl p-3 shadow-lg">
                          <Phone className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-sm text-foreground">Phone</h4>
                          <a
                            href={`tel:${storePhone}`}
                            className="text-blue-600 dark:text-blue-400 hover:underline"
                          >
                            {storePhone}
                          </a>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="bg-linear-to-br from-orange-500 to-red-500 rounded-xl p-3 shadow-lg">
                          <Mail className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-sm text-foreground">Email</h4>
                          <a
                            href={`mailto:${storeEmail}`}
                            className="text-orange-600 dark:text-orange-400 hover:underline"
                          >
                            {storeEmail}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Factory Hours Card */}
                <div className="relative">
                  <div className="absolute -inset-1 bg-linear-to-r from-green-500 to-emerald-500 rounded-2xl blur opacity-20"></div>
                  <div className="relative bg-white/90 dark:bg-zinc-900/90 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/30 dark:border-zinc-700/50">
                    <div className="flex items-start gap-4">
                      <div className="shrink-0">
                        <div className="bg-linear-to-br from-green-500 to-emerald-500 rounded-xl p-3 shadow-lg">
                          <Clock className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-lg mb-3 text-foreground">Factory Hours</h3>
                        <div className="space-y-2">
                          {factoryHours.map((schedule, index) => (
                            <div
                              key={index}
                              className="flex justify-between py-2 border-b border-border last:border-0"
                            >
                              <span className="text-sm text-muted-foreground">{schedule.day}</span>
                              <span className="text-sm font-semibold text-foreground">
                                {schedule.hours}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Get Directions Button */}
                <Button
                  onClick={handleGetDirections}
                  className="w-full bg-linear-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 rounded-xl px-6 py-6 font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 group"
                >
                  <div className="flex items-center justify-center gap-2">
                    <Navigation className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
                    <span>Get Directions</span>
                  </div>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
