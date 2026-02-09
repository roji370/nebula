"use client";

import Link from "next/link";

export default function LegalPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-12">
      {/* Page Title */}
      <h1 className="text-3xl font-bold mb-6">Legal Information</h1>

      {/* Table of Contents */}
      <nav className="mb-8 space-y-2 bg-muted p-6 rounded-lg">
        <h2 className="font-bold text-lg mb-4">Quick Navigation</h2>
        <Link href="#privacy" className="text-primary hover:underline block">
          Privacy Policy
        </Link>
        <Link href="#terms" className="text-primary hover:underline block">
          Terms of Service
        </Link>
        <Link href="#refund" className="text-primary hover:underline block">
          Refund Policy
        </Link>
        <Link href="#shipping" className="text-primary hover:underline block">
          Shipping Policy
        </Link>
      </nav>

      {/* Privacy Policy */}
      <section id="privacy" className="scroll-mt-20">
        <h2 className="text-3xl font-bold mb-6">Privacy Policy</h2>

        <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
          <p>
            NIKANTHA operates this store and website, including all related information, content,
            features, tools, products and services, in order to provide you, the customer, with a
            curated shopping experience (the "Services"). This Privacy Policy describes how we
            collect, use, and disclose your personal information when you visit, use, or make a
            purchase or other transaction using the Services or otherwise communicate with us.
          </p>

          <h3 className="text-xl font-bold mt-6 mb-3 text-foreground">
            Personal Information We Collect or Process
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Contact details</strong> including your name, address, billing address,
              shipping address, phone number, and email address.
            </li>
            <li>
              <strong>Financial information</strong> including credit card, debit card, and
              financial account numbers, payment card information, transaction details.
            </li>
            <li>
              <strong>Account information</strong> including your username, password, security
              questions, preferences and settings.
            </li>
            <li>
              <strong>Transaction information</strong> including the items you view, purchase,
              return, exchange or cancel.
            </li>
            <li>
              <strong>Device information</strong> including information about your device, browser,
              IP address, and other unique identifiers.
            </li>
          </ul>

          <h3 className="text-xl font-bold mt-6 mb-3 text-foreground">
            How We Use Your Personal Information
          </h3>
          <p>
            We use your personal information to provide services, process payments, fulfill orders,
            improve user experience, and communicate updates.
          </p>

          <h3 className="text-xl font-bold mt-6 mb-3 text-foreground">Your Rights and Choices</h3>
          <p>
            You may have rights to access, delete, correct, or port your personal information.
            Contact us to exercise these rights.
          </p>

          <h3 className="text-xl font-bold mt-6 mb-3 text-foreground">Contact</h3>
          <p>
            Email us at{" "}
            <a href="mailto:nikachandra7@gmail.com" className="text-primary hover:underline">
              nikachandra7@gmail.com
            </a>
            , or contact us at Chandrakantham associates, vellangallur, Irinjalakuda, KL, 680662,
            IN.
          </p>

          <p className="mt-6 text-sm italic">Last updated: February 2026</p>
        </div>
      </section>

      {/* Terms of Service */}
      <section id="terms" className="scroll-mt-20">
        <h2 className="text-3xl font-bold mb-6">Terms of Service</h2>

        <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
          <h3 className="text-xl font-bold mt-6 mb-3 text-foreground">OVERVIEW</h3>
          <p>
            Welcome to NIKANTHA, operated by Chandrakantham Associates. Website:{" "}
            <a href="https://www.nikantha.in" className="text-primary hover:underline">
              www.nikantha.in
            </a>
          </p>
          <p>
            By accessing or using our website and services, you agree to be bound by these Terms of
            Service and our Privacy Policy and Refund Policy.
          </p>

          <h3 className="text-xl font-bold mt-6 mb-3 text-foreground">ACCESS AND ACCOUNT</h3>
          <p>
            By using this website, you confirm that you are at least 18 years of age. You agree to
            provide accurate information and are responsible for maintaining account
            confidentiality.
          </p>

          <h3 className="text-xl font-bold mt-6 mb-3 text-foreground">ORDERS</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>We reserve the right to accept or reject any order.</li>
            <li>Orders cannot be cancelled once confirmed and shipped.</li>
            <li>
              Customers must report damaged or missing products within 48 hours of delivery with
              clear photos.
            </li>
          </ul>

          <h3 className="text-xl font-bold mt-6 mb-3 text-foreground">PRICES AND BILLING</h3>
          <p>
            Prices are subject to change without notice. All prices are in Indian Rupees (INR).
            Taxes, shipping, and handling charges may apply.
          </p>

          <h3 className="text-xl font-bold mt-6 mb-3 text-foreground">SHIPPING AND DELIVERY</h3>
          <p>
            Delivery times are estimates and not guaranteed. We are not responsible for delays
            caused by courier companies, weather, strikes, or natural events.
          </p>

          <h3 className="text-xl font-bold mt-6 mb-3 text-foreground">INTELLECTUAL PROPERTY</h3>
          <p>
            All content, logos, images, text, and designs on this website belong to NIKANTHA and are
            protected under Indian and international intellectual property laws.
          </p>

          <h3 className="text-xl font-bold mt-6 mb-3 text-foreground">LIMITATION OF LIABILITY</h3>
          <p>
            To the maximum extent allowed by law, we are not liable for indirect, incidental, or
            consequential damages. Our liability shall not exceed the amount paid for the product.
          </p>

          <h3 className="text-xl font-bold mt-6 mb-3 text-foreground">GOVERNING LAW</h3>
          <p>
            These Terms are governed by the laws of India. Courts of Kerala shall have exclusive
            jurisdiction.
          </p>

          <h3 className="text-xl font-bold mt-6 mb-3 text-foreground">PRODUCT USAGE DISCLAIMER</h3>
          <p>
            Our cosmetic products are for external use only. Please perform a patch test before
            regular use. We are not responsible for allergic reactions, irritation, or side effects.
          </p>

          <h3 className="text-xl font-bold mt-6 mb-3 text-foreground">CONTACT INFORMATION</h3>
          <div className="bg-muted p-6 rounded-lg">
            <p>
              <strong>Business Name:</strong> Chandrakantham Associates (NIKANTHA)
            </p>
            <p>
              <strong>Address:</strong> Chandrakantham associates, vellangallur, Irinjalakuda, KL,
              680662, IN
            </p>
            <p>
              <strong>Phone:</strong>{" "}
              <a href="tel:+918714320563" className="text-primary hover:underline">
                +91 87143 20563
              </a>
            </p>
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:nikachandra7@gmail.com" className="text-primary hover:underline">
                nikachandra7@gmail.com
              </a>
            </p>
            <p>
              <strong>GSTIN:</strong> 32ATWPA4996J1Z3
            </p>
          </div>

          <p className="mt-6 text-sm italic">Last updated: February 2026</p>
        </div>
      </section>

      {/* Refund Policy */}
      <section id="refund" className="scroll-mt-20">
        <h2 className="text-3xl font-bold mb-6">Return & Refund Policy</h2>

        <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
          <p>
            We offer a <strong className="text-foreground">5-day return policy</strong> from the
            date of delivery.
          </p>
          <p>
            To be eligible for a return, your item must be unused, unopened, and in the same
            condition that you received it, with original packaging and proof of purchase.
          </p>

          <h3 className="text-xl font-bold mt-6 mb-3 text-foreground">📌 Damaged or Wrong Items</h3>
          <p>
            If you receive a damaged, defective, or wrong product, contact us within{" "}
            <strong className="text-foreground">48 hours</strong> with photos or videos at{" "}
            <a href="mailto:nikachandra7@gmail.com" className="text-primary hover:underline">
              nikachandra7@gmail.com
            </a>
            .
          </p>

          <h3 className="text-xl font-bold mt-6 mb-3 text-foreground">📌 Non-Returnable Items</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Opened or used cosmetic products</li>
            <li>Customized or special orders</li>
            <li>Sale or discounted items</li>
            <li>Free gifts</li>
          </ul>

          <h3 className="text-xl font-bold mt-6 mb-3 text-foreground">📌 Return Process</h3>
          <p>
            Contact us at{" "}
            <a href="mailto:nikachandra7@gmail.com" className="text-primary hover:underline">
              nikachandra7@gmail.com
            </a>{" "}
            for approval. Returns without prior approval will not be accepted.
          </p>

          <h3 className="text-xl font-bold mt-6 mb-3 text-foreground">📌 Refunds</h3>
          <p>
            Approved refunds will be processed within{" "}
            <strong className="text-foreground">5–7 working days</strong> to the original payment
            method.
          </p>

          <p className="mt-6 text-sm italic">Last updated: February 2026</p>
        </div>
      </section>

      {/* Shipping Policy */}
      <section id="shipping" className="scroll-mt-20">
        <h2 className="text-3xl font-bold mb-6">📦 Shipping Policy</h2>

        <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
          <h3 className="text-xl font-bold mt-6 mb-3 text-foreground">Order Processing Time</h3>
          <p>
            All orders are processed within{" "}
            <strong className="text-foreground">1–2 business days</strong> after confirmation.
          </p>

          <h3 className="text-xl font-bold mt-6 mb-3 text-foreground">Shipping Time</h3>
          <div className="bg-muted p-6 rounded-lg space-y-2">
            <p>
              <strong className="text-foreground">Kerala:</strong> 2–4 working days
            </p>
            <p>
              <strong className="text-foreground">Other States in India:</strong> 4–7 working days
            </p>
          </div>

          <h3 className="text-xl font-bold mt-6 mb-3 text-foreground">Shipping Charges</h3>
          <div className="bg-primary/10 border border-primary/20 p-6 rounded-lg space-y-2">
            <p>
              <strong className="text-foreground">Free Shipping</strong> on orders above ₹299
            </p>
            <p>
              <strong className="text-foreground">Below ₹299:</strong> ₹70 delivery charge
            </p>
          </div>

          <h3 className="text-xl font-bold mt-6 mb-3 text-foreground">Order Tracking</h3>
          <p>
            Once shipped, tracking details will be shared via{" "}
            <strong className="text-foreground">WhatsApp/SMS</strong>.
          </p>

          <h3 className="text-xl font-bold mt-6 mb-3 text-foreground">Contact</h3>
          <p>
            <strong>WhatsApp:</strong>{" "}
            <a href="https://wa.me/918714320563" className="text-primary hover:underline">
              +91 87143 20563
            </a>
            <br />
            <strong>Email:</strong>{" "}
            <a href="mailto:nikachandra7@gmail.com" className="text-primary hover:underline">
              nikachandra7@gmail.com
            </a>
          </p>

          <p className="mt-6 text-sm italic">Last updated: February 2026</p>
        </div>
      </section>
    </div>
  );
}
