"use client";
import React, { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 backdrop-blur-md bg-white/10 border border-white/10 rounded-[20px] px-4 py-3 md:px-8 md:py-4">
      <div className="flex items-center justify-between gap-6 md:gap-32">
          <span className="text-white font-semibold text-lg md:text-xl">tira's port</span>

        {/* Menu */}
        <div className="hidden md:flex items-center gap-6 md:gap-8">
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

        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-white/90 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(v => !v)}
        >
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {open ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden mt-3 border-t border-white/10 pt-3">
          <div className="flex flex-col items-stretch gap-2">
            <a href="#about" className="px-2 py-2 rounded-md text-white font-medium hover:bg-white/10" onClick={() => setOpen(false)}>
              About
            </a>
            <a href="#project" className="px-2 py-2 rounded-md text-white font-medium hover:bg-white/10" onClick={() => setOpen(false)}>
              Projects
            </a>
            <a href="#Contact" className="px-2 py-2 rounded-md text-white font-medium hover:bg-white/10" onClick={() => setOpen(false)}>
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}