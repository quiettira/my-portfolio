"use client";
import React from 'react';

export default function Navbar() {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 backdrop-blur-md bg-white/10 border border-white/10 rounded-[20px] px-8 py-4">
      <div className="flex items-center justify-between gap-32">
          <span className="text-white font-semibold text-xl">tira's port</span>

        {/* Menu */}
        <div className="flex items-center gap-8">
          <a href="#about" className="text-white font-medium hover:text-white/80 transition">
            About
          </a>
          <a href="#project" className="text-white font-medium hover:text-white/80 transition">
            Projects
          </a>
          <a href="#Contact" className="text-white font-medium hover:text-white/80 transition">
            Contact
          </a>
        </div>
        </div>
    </nav>
  );
}