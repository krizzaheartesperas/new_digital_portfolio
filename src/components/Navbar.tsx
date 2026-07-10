"use client";

import { useState } from "react";
import { portfolioData } from "@/data/portfolio";

export default function Navbar() {
  const { name } = portfolioData.profile;
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Certifications", href: "#certifications" },
    { label: "Resume", href: "#resume" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo / Name */}
          <div className="flex-shrink-0">
            <a href="#" className="text-xl font-bold bg-gradient-to-r from-[#D4A017] to-[#D4A017] bg-clip-text text-transparent transition-all duration-300 hover:from-[#D4A017] hover:to-[#D4A017]">
              {name}
            </a>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-slate-400 transition-colors duration-200 hover:text-white"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                className="rounded-full bg-gradient-to-r from-[#D4A017] to-[#D4A017] px-5 py-2 text-sm font-medium text-white transition-all duration-300 hover:from-[#D4A017] hover:to-[#D4A017] hover:shadow-lg hover:shadow-[#D4A017]/20"
              >
                Hire Me
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-slate-400 hover:bg-slate-900 hover:text-white focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-950 border-b border-slate-800" id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block rounded-md px-3 py-2 text-base font-medium text-slate-400 hover:bg-slate-900 hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-4 block w-full text-center rounded-full bg-gradient-to-r from-[#D4A017] to-[#D4A017] px-5 py-2 text-sm font-medium text-white transition-all duration-300 hover:from-[#D4A017] hover:to-[#D4A017]"
            >
              Hire Me
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
