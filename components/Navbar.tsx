"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";

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
    { label: "Portofolio", href: "#portfolio" },
    { label: "Estimasi Biaya", href: "#estimator" },
    { label: "Alur Kerja", href: "#methodology" },
    { label: "FAQ", href: "#faq" },
  ];

  const handleScrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (window.location.hash) {
      window.history.pushState(null, "", window.location.pathname);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none pt-3.5 sm:pt-4 px-3 sm:px-6 flex flex-col items-center">
      {/* Floating Island Navbar */}
      <div
        className={`pointer-events-auto w-full max-w-6xl mx-auto rounded-2xl md:rounded-full transition-all duration-300 ${
          isScrolled
            ? "bg-[#09090B]/90 backdrop-blur-xl border border-white/[0.1] shadow-[0_16px_40px_rgba(0,0,0,0.7),inset_0_1px_0_0_rgba(255,255,255,0.08)] py-2 sm:py-2.5 px-4 sm:px-6"
            : "bg-[#0F0F12]/80 backdrop-blur-lg border border-white/[0.08] shadow-[0_10px_30px_rgba(0,0,0,0.45),inset_0_1px_0_0_rgba(255,255,255,0.06)] py-2.5 sm:py-3 px-4 sm:px-6"
        }`}
      >
        <div className="flex items-center justify-between gap-4 lg:gap-8">
          {/* 1. Left: Brand Logo (Scroll to Top on Click) */}
          <Link
            href="/"
            onClick={handleScrollToTop}
            className="flex items-center shrink-0 group focus:outline-none cursor-pointer"
            aria-label="ScyterCorp Home - Scroll to top"
          >
            <div className="relative h-7 sm:h-8 w-32 sm:w-40 transition-transform duration-300 group-hover:scale-[1.02]">
              <Image
                src="/logo2.png"
                alt="ScyterCorp"
                fill
                priority
                className="object-contain object-left"
              />
            </div>
          </Link>

          {/* 2. Center: Elegant Navigation Links */}
          <nav className="hidden lg:flex items-center justify-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3.5 py-1.5 text-xs xl:text-[13px] font-medium text-zinc-400 hover:text-white transition-all duration-200 rounded-full hover:bg-white/[0.06] whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* 3. Right: Status Badge & Single-Line CTA Button */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <div className="hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs font-medium text-zinc-300 whitespace-nowrap">
              <span className="w-2 h-2 rounded-full bg-emerald-400 ring-4 ring-emerald-400/20" />
              <span>Menerima Proyek Baru</span>
            </div>

            <button
              onClick={
                onOpenConsultation ||
                (() => {
                  const el = document.getElementById("contact");
                  el?.scrollIntoView({ behavior: "smooth" });
                })
              }
              className="inline-flex items-center justify-center gap-1.5 px-4 sm:px-5 py-2 rounded-xl md:rounded-full text-xs sm:text-[13px] font-bold text-[#09090B] transition-all duration-300 hover:brightness-105 active:scale-[0.98] shadow-[0_2px_14px_rgba(255,215,0,0.3),inset_0_1px_0_0_rgba(255,255,255,0.7)] cursor-pointer whitespace-nowrap shrink-0 group"
              style={{
                background: "linear-gradient(180deg, #FFFCE6 0%, #FFE566 45%, #FFD700 100%)",
              }}
            >
              <span>Konsultasi Gratis</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-white/[0.04] border border-white/[0.1] text-zinc-200 hover:text-white transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown (Floating Card beneath island) */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto md:hidden w-full max-w-6xl mx-auto rounded-2xl bg-[#0F0F12]/95 backdrop-blur-2xl border border-white/[0.1] px-5 py-5 mt-2 space-y-4 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1A1A1A] border border-[#2A2A2A] text-xs font-medium text-[#A3A3A3] w-fit">
            <span className="w-2 h-2 rounded-full bg-[#2ECC71]" />
            <span>Menerima Proyek Baru</span>
          </div>

          <div className="space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-sm font-medium text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-[#2A2A2A]">
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
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-[#0D0D0D] transition-all hover:brightness-105"
              style={{
                background: "linear-gradient(180deg, #FFFBE6 0%, #FFE873 40%, #FFD700 100%)",
              }}
            >
              <span>Jadwalkan Konsultasi Gratis</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
