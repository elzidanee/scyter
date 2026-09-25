"use client";

import Image from "next/image";
import {
  ArrowRight,
  ShieldCheck,
  Code2,
  Users,
  CheckCircle2,
  FolderGit2,
  Globe,
  Smartphone,
  Layout,
  Layers,
} from "lucide-react";

interface HeroProps {
  onOpenConsultation?: () => void;
}

export default function Hero({ onOpenConsultation }: HeroProps) {
  const pillars = [
    {
      icon: FolderGit2,
      title: "100% Hak Milik Kode & Database",
      desc: "Seluruh source code dan database diserahkan penuh. Tanpa biaya sewa atau vendor lock-in.",
    },
    {
      icon: Code2,
      title: "Arsitektur Modern & Siap Skala",
      desc: "Next.js 16, TypeScript, Flutter, & PostgreSQL untuk kecepatan tinggi dan keamanan standar industri.",
    },
    {
      icon: Users,
      title: "Komunikasi Langsung Engineer",
      desc: "Diskusi proyek langsung dengan lead engineer via WhatsApp tanpa perantara birokrasi.",
    },
    {
      icon: ShieldCheck,
      title: "Garansi Pemeliharaan & Bug-Free",
      desc: "Dukungan garansi purna jual untuk memastikan kelancaran operasional sistem bisnis Anda.",
    },
  ];

  return (
    <section className="relative pt-32 pb-20 md:pt-36 md:pb-24 overflow-hidden bg-[#0A0A0A]">
      {/* Precision Engineering Grid Background - Very Subtle */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f14_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f14_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_35%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Subtle Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[240px] bg-[#FFD700]/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Clear Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#141414] border border-[#262626] text-xs">
              <span className="w-2 h-2 rounded-full bg-[#FFD700]" />
              <span className="font-mono text-[#D4AF37] font-semibold text-[11px] tracking-wider uppercase">
                SCYTERCORP // SOFTWARE HOUSE & SYSTEMS
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-bold tracking-tight text-white leading-[1.14] font-[family-name:var(--font-heading)]">
              Membangun Solusi{" "}
              <span className="gold-gradient-text">Web, Mobile & Sistem Bisnis</span>{" "}
              Berkualitas Tinggi
            </h1>

            {/* Value Proposition */}
            <p className="text-sm sm:text-base text-[#999999] leading-relaxed max-w-xl mx-auto lg:mx-0">
              ScyterCorp merekayasa produk digital berkinerja tinggi untuk pelaku usaha dan korporasi: Website modern, aplikasi Mobile (iOS/Android), UI/UX profesional, hingga sistem kustom seperti <strong>POS, CMS, LMS, dan PMS</strong> dengan kepemilikan penuh.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-2">
              <button
                onClick={
                  onOpenConsultation ||
                  (() => {
                    const el = document.getElementById("contact");
                    el?.scrollIntoView({ behavior: "smooth" });
                  })
                }
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-[#0D0D0D] transition-all hover:brightness-105 cursor-pointer shadow-sm"
                style={{
                  background: "linear-gradient(180deg, #FFFBE6 0%, #FFE873 40%, #FFD700 100%)",
                }}
              >
                <span>Konsultasikan Kebutuhan Proyek</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#portfolio"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-[#141414] border border-[#262626] hover:border-[#FFD700]/50 hover:bg-[#1A1A1A] transition-colors"
              >
                <span>Lihat Portofolio</span>
              </a>
            </div>

            {/* Service Tags */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-3 text-xs">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#121212] border border-[#222222] text-[#888888]">
                <Globe className="w-3.5 h-3.5 text-[#FFD700]" />
                Web App
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#121212] border border-[#222222] text-[#888888]">
                <Smartphone className="w-3.5 h-3.5 text-[#FFD700]" />
                Mobile App
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#121212] border border-[#222222] text-[#888888]">
                <Layout className="w-3.5 h-3.5 text-[#FFD700]" />
                UI/UX Design
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#141414] border border-[#FFD700]/30 text-[#FFE873]">
                <Layers className="w-3.5 h-3.5 text-[#FFD700]" />
                Sistem Kustom (POS / CMS / LMS / PMS)
              </span>
            </div>
          </div>

          {/* Right Column: Clean Professional Standards Card (Anti AI Slop) */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-[#121212] border border-[#242424] p-6 sm:p-7 space-y-6 shadow-xl relative overflow-hidden">
              
              {/* Card Header */}
              <div className="flex items-center justify-between pb-4 border-b border-[#202020]">
                <div>
                  <span className="text-[10px] font-mono text-[#D4AF37] uppercase tracking-wider block">
                    STANDAR REKAYASA
                  </span>
                  <h3 className="text-base font-bold text-white font-[family-name:var(--font-heading)]">
                    Komitmen Kualitas ScyterCorp
                  </h3>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-[#2ECC71] bg-[#2ECC71]/10 px-2.5 py-1 rounded-full border border-[#2ECC71]/20">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Siap Rilis</span>
                </div>
              </div>

              {/* 4 Crisp Deliverable Pillars */}
              <div className="space-y-4">
                {pillars.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-[#161616] border border-[#222222] flex items-start gap-3.5 hover:border-[#FFD700]/30 transition-colors"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#1F1F1F] border border-[#2C2C2C] flex items-center justify-center shrink-0 text-[#FFD700] mt-0.5">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="space-y-0.5">
                        <h4 className="text-xs sm:text-sm font-semibold text-white">
                          {item.title}
                        </h4>
                        <p className="text-[11px] sm:text-xs text-[#888888] leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Card Footer Assurance */}
              <div className="pt-2 flex items-center justify-between text-[11px] text-[#777777]">
                <span>Software House · Malang, ID</span>
                <span className="text-[#FFD700] font-medium">100% Hak Milik Klien</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
