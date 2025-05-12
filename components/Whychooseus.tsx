"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import { Cover } from "./ui/cover";



const content = [
  {
    title: "Instant Valuations",
    description:
      "Don’t waste time with complicated forms or endless follow-ups. With SoftSell, you simply upload your license details and get a real-time market-based estimate within seconds. Our intelligent pricing engine ensures accuracy and transparency, helping you make confident decisions fast.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
         <img
          src="/mt1.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Secure & Verified Process",
    description:
      "Your data is protected at every step. We use end-to-end encryption, comply with industry security standards, and verify every license through a rigorous multi-check system. You stay in control with clear updates, audit trails, and complete visibility into the resale process.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="/img2.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Enterprise-Ready Support",
    description:
      "Selling one license or managing a fleet of 500? We’ve got you. Our experienced support team provides end-to-end assistance—from uploading and documentation to compliance and legal support. Whether you're an individual or a global enterprise, we scale to fit your needs.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white">
        <img
          src="/sup.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "⚡ Payouts Within 24 Hours",
    description:
      "Why wait to get paid? Once your license is approved, we initiate secure payments directly to your bank account—often within 24 hours. No long processing times, no hidden deductions. Just fast, reliable payouts for your unused assets.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
         <img
          src="/pay.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
];
export function Whychooseus() {
  return (
    <div className="w-80% h-50%py-4" id="why-us">
       <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
            <Cover>Why Choose Us ?</Cover>
    </h1>
      <StickyScroll content={content} />
    </div>
  );
}
