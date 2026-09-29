"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

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
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") setMobileMenuOpen(false);
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = originalOverflow;
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [mobileMenuOpen]);

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
        className={`pointer-events-auto w-full max-w-6xl mx-auto rounded-2xl md:rounded-full transition-[background-color,border-color,box-shadow,padding] duration-300 [transition-timing-function:cubic-bezier(0.23,1,0.32,1)] ${
          isScrolled
            ? "border border-white/[0.1] shadow-[0_16px_40px_rgba(0,0,0,0.7),inset_0_1px_0_0_rgba(255,255,255,0.08)] py-2 sm:py-2.5 px-4 sm:px-6"
            : "border border-white/[0.08] shadow-[0_10px_30px_rgba(0,0,0,0.45),inset_0_1px_0_0_rgba(255,255,255,0.06)] py-2.5 sm:py-3 px-4 sm:px-6"
        }`}
        style={{
          background: isScrolled
            ? "rgba(9, 9, 11, 0.7)"
            : "rgba(15, 15, 18, 0.6)",
          backdropFilter: "blur(20px) saturate(180%)",
          WebkitBackdropFilter: "blur(20px) saturate(180%)",
        }}
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
                className="px-3.5 py-1.5 text-xs xl:text-[13px] font-medium text-zinc-400 hover:text-white transition-[color,background-color] duration-150 rounded-full hover:bg-white/[0.06] whitespace-nowrap"
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
              className="inline-flex items-center justify-center gap-1.5 px-4 sm:px-5 py-2 rounded-xl md:rounded-full text-xs sm:text-[13px] font-bold text-[#09090B] transition-[filter,transform] duration-150 hover:brightness-105 active:scale-[0.97] shadow-[0_2px_14px_rgba(255,215,0,0.3),inset_0_1px_0_0_rgba(255,255,255,0.7)] cursor-pointer whitespace-nowrap shrink-0 group"
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
              className="p-2 rounded-xl bg-white/[0.04] border border-white/[0.1] text-zinc-200 hover:text-white active:scale-[0.97] transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown (Fluid Origin-Aware Transition) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: -6 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: -6 }}
            transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
            style={{
              transformOrigin: "top",
              background: "rgba(15, 15, 18, 0.88)",
              backdropFilter: "blur(20px) saturate(180%)",
              WebkitBackdropFilter: "blur(20px) saturate(180%)",
            }}
            className="pointer-events-auto md:hidden w-full max-w-6xl mx-auto rounded-2xl border border-white/[0.1] px-5 py-5 mt-2 space-y-4 shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
          >
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-medium text-zinc-300 w-fit">
              <span className="w-2 h-2 rounded-full bg-emerald-400 ring-2 ring-emerald-400/20" />
              <span>Menerima Proyek Baru</span>
            </div>

            <div className="space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 text-sm font-medium text-zinc-200 hover:text-white hover:bg-white/[0.06] rounded-xl transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-2 border-t border-white/[0.08]">
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
                className="w-full flex items-center justify-center gap-2 py-3 rounded-full text-xs font-bold text-[#09090B] transition-transform active:scale-[0.97] hover:brightness-105 shadow-sm"
                style={{
                  background: "linear-gradient(180deg, #FFFCE6 0%, #FFE566 45%, #FFD700 100%)",
                }}
              >
                <span>Jadwalkan Konsultasi Gratis</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
