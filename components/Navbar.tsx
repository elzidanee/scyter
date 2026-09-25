"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ArrowUpRight, Sparkles } from "lucide-react";

interface NavbarProps {
  onOpenConsultation?: () => void;
}

export default function Navbar({ onOpenConsultation }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Layanan", href: "#services" },
    { label: "Sistem Kustom", href: "#custom-systems" },
    { label: "Estimator", href: "#estimator" },
    { label: "Portofolio", href: "#portfolio" },
    { label: "Alur Kerja", href: "#methodology" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0D0D0D]/90 backdrop-blur-xl border-b border-[#2A2A2A] shadow-[0_4px_30px_rgba(0,0,0,0.6)] py-3"
          : "bg-[#0D0D0D]/40 backdrop-blur-md border-b border-white/[0.05] py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 lg:gap-8">
          {/* 1. Left: Brand Logo with dedicated breathing room */}
          <Link
            href="/"
            className="flex items-center shrink-0 group focus:outline-none"
            aria-label="ScyterCorp Home"
          >
            <div className="relative h-8 sm:h-9 w-36 sm:w-44 transition-transform duration-300 group-hover:scale-[1.02]">
              <Image
                src="/logo2.png"
                alt="ScyterCorp"
                fill
                priority
                className="object-contain object-left"
              />
            </div>
          </Link>

          {/* 2. Center: Elegant Pill Navigation (No Text Wrapping, Balanced Spacing) */}
          <nav className="hidden lg:flex items-center justify-center">
            <div className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#161616]/80 border border-[#2A2A2A] shadow-inner backdrop-blur-md">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-3.5 py-1.5 text-xs xl:text-[13px] font-medium text-[#A3A3A3] hover:text-white transition-all duration-200 rounded-full hover:bg-white/[0.08] whitespace-nowrap"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </nav>

          {/* 3. Right: Status Badge & Single-Line CTA Button */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <div className="hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#161616] border border-[#2A2A2A] text-xs font-medium text-[#A3A3A3] whitespace-nowrap">
              <span className="w-2 h-2 rounded-full bg-[#2ECC71] animate-pulse" />
              <span>Available for Sprints</span>
            </div>

            <button
              onClick={
                onOpenConsultation ||
                (() => {
                  const el = document.getElementById("contact");
                  el?.scrollIntoView({ behavior: "smooth" });
                })
              }
              className="inline-flex items-center justify-center gap-1.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm font-bold text-[#0D0D0D] transition-all duration-300 hover:brightness-105 hover:shadow-[0_0_24px_rgba(255,215,0,0.4)] cursor-pointer whitespace-nowrap shrink-0 group"
              style={{
                background: "linear-gradient(180deg, #FFFBE6 0%, #FFE873 40%, #FFD700 100%)",
              }}
            >
              <span>Konsultasi Gratis</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-[#181818] border border-[#2A2A2A] text-white hover:text-[#FFD700] transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#121212]/98 backdrop-blur-2xl border-b border-[#2A2A2A] px-5 py-6 mt-3 space-y-4 shadow-2xl">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1A1A1A] border border-[#2A2A2A] text-xs font-medium text-[#A3A3A3] w-fit">
            <span className="w-2 h-2 rounded-full bg-[#2ECC71] animate-pulse" />
            <span>Menerima Proyek Baru (Q4/Q1)</span>
          </div>

          <div className="space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 text-sm font-medium text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-[#2A2A2A]">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenConsultation) {
                  onOpenConsultation();
                } else {
                  const el = document.getElementById("contact");
                  el?.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-bold text-[#0D0D0D] transition-all hover:brightness-105"
              style={{
                background: "linear-gradient(180deg, #FFFBE6 0%, #FFE873 40%, #FFD700 100%)",
              }}
            >
              <Sparkles className="w-4 h-4" />
              <span>Jadwalkan Konsultasi Gratis</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
