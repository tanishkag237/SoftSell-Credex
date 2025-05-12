import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-sm text-gray-600 dark:text-gray-300 py-6 px-4 mt-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        
        <p className="text-center md:text-left">
          &copy; {new Date().getFullYear()} <span className="font-semibold">SoftSell</span>. All rights reserved.
        </p>

        <div className="flex flex-wrap justify-center md:justify-end gap-4">
          <Link href="/privacy-policy" className="font-semibold hover:underline">
            Privacy Policy
          </Link>
          <Link href="/terms" className="font-semibold hover:underline">
            Terms of Service
          </Link>
           <a href="#contact-us" className="font-semibold hover:underline">
        <h2>Contact Us</h2>
      </a>
        </div>
      </div>
    </footer>
  );
}
