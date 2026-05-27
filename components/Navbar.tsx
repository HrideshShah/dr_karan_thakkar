"use client";

import { useState } from "react";
import Link from "next/link";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Mission", href: "#mission" },
  { label: "Hospital Hours", href: "#hours" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur border-b border-gray-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="#home"
          className="text-lg font-semibold text-blue-700 tracking-tight"
        >
          Dr. Karan Thakkar
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="hover:text-blue-700 transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-gray-600"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <ul className="md:hidden bg-white border-t border-gray-100 px-6 pb-4 space-y-3 text-sm font-medium text-gray-600">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block hover:text-blue-700 transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
