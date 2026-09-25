"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ArrowRight,
  Zap,
  Globe,
  Smartphone,
  Layout,
  Layers,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

interface HeroProps {
  onOpenConsultation?: () => void;
}

export default function Hero({ onOpenConsultation }: HeroProps) {
  const [activeHighlight, setActiveHighlight] = useState<string>("pos");

  const highlights = [
    {
      id: "pos",
      title: "Kasir (POS) & Inventory",
      desc: "Transaksi cepat, struk thermal, laporan laba rugi & stok otomatis.",
    },
    {
      id: "cms",
      title: "Custom CMS & Portal",
      desc: "Kelola konten, artikel, produk & media dengan panel admin mudah.",
    },
    {
      id: "lms",
      title: "Learning Management (LMS)",
      desc: "Kelas online, video materi, kuis otomatis & tracking sertifikat.",
    },
    {
      id: "pms",
      title: "Property & Project (PMS)",
      desc: "Pantau okupansi sewa, booking kamar, invoice & timeline proyek.",
    },
  ];

  return (
    <section className="relative pt-32 pb-20 md:pt-36 md:pb-24 overflow-hidden bg-[#0D0D0D]">
      {/* Subtle Background Gradients */}
      <div className="absolute inset-0 tech-grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#FFD700]/10 blur-[140px] rounded-full pointer-events-none" />

      {/* Watermark Logo Logogram */}
      <div className="absolute right-4 top-24 md:right-16 md:top-28 w-64 h-64 md:w-96 md:h-96 opacity-[0.04] pointer-events-none select-none">
        <Image src="/logo.png" alt="ScyterCorp Watermark" fill className="object-contain" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Clean & Punchy Copy */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#181818] border border-[#2A2A2A]">
              <span className="w-2 h-2 rounded-full bg-[#FFD700] animate-pulse" />
              <span className="text-xs font-semibold text-[#FFD700]">
                Software House & Digital Agency
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-bold tracking-tight text-white leading-[1.15] font-[family-name:var(--font-heading)]">
              Jasa Pembuatan{" "}
              <span className="gold-gradient-text">Web, Mobile App & Sistem Kustom</span>{" "}
              Profesional
            </h1>

            {/* Short Tagline */}
            <p className="text-base sm:text-lg text-[#A3A3A3] leading-relaxed max-w-xl mx-auto lg:mx-0">
              ScyterCorp membantu bisnis Anda berkembang lewat website modern, aplikasi mobile, desain UI/UX eksklusif, serta sistem bisnis seperti <strong>Kasir (POS), CMS, LMS,</strong> dan <strong>PMS</strong>.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-1">
              <button
                onClick={
                  onOpenConsultation ||
                  (() => {
                    const el = document.getElementById("contact");
                    el?.scrollIntoView({ behavior: "smooth" });
                  })
                }
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-bold text-[#0D0D0D] transition-all hover:brightness-105 hover:shadow-[0_0_24px_rgba(255,215,0,0.35)] cursor-pointer"
                style={{
                  background: "linear-gradient(180deg, #FFFBE6 0%, #FFE873 40%, #FFD700 100%)",
                }}
              >
                <Zap className="w-4 h-4 fill-current" />
                <span>Konsultasikan Kebutuhan</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#estimator"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-sm font-medium text-white bg-[#181818] border border-[#2A2A2A] hover:border-[#FFD700]/50 hover:bg-[#202020] transition-colors"
              >
                <span>Cek Estimasi Biaya</span>
                <Sparkles className="w-4 h-4 text-[#FFD700]" />
              </a>
            </div>

            {/* Service Tags */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-2 text-xs">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#161616] border border-[#2A2A2A] text-[#A3A3A3]">
                <Globe className="w-3.5 h-3.5" />
                Website
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#161616] border border-[#2A2A2A] text-[#A3A3A3]">
                <Smartphone className="w-3.5 h-3.5" />
                Mobile Apps
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#161616] border border-[#2A2A2A] text-[#A3A3A3]">
                <Layout className="w-3.5 h-3.5" />
                UI/UX Design
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#161616] border border-[#FFD700]/30 text-[#FFE873]">
                <Layers className="w-3.5 h-3.5" />
                Custom System (POS / CMS / LMS / PMS)
              </span>
            </div>
          </div>

          {/* Right Column: Visual Interactive Systems Showcase */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-[#141414] border border-[#2A2A2A] p-6 shadow-[0_16px_40px_rgba(0,0,0,0.6)]">
              <div className="flex items-center justify-between pb-4 border-b border-[#262626]">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FFD700]" />
                  <span className="text-xs font-bold text-white font-mono">
                    ScyterCorp System Hub
                  </span>
                </div>
                <span className="text-[11px] font-mono text-[#2ECC71]">Ready to Deploy</span>
              </div>

              {/* System selector buttons */}
              <div className="grid grid-cols-2 gap-2 my-4">
                {highlights.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveHighlight(item.id)}
                    className={`p-3 rounded-xl text-left border transition-all cursor-pointer ${
                      activeHighlight === item.id
                        ? "bg-[#1F1F1F] border-[#FFD700] text-white shadow-[0_0_16px_rgba(255,215,0,0.12)]"
                        : "bg-[#181818] border-[#2A2A2A] text-[#888888] hover:text-white hover:border-[#383838]"
                    }`}
                  >
                    <span className="text-xs font-bold block">{item.title}</span>
                  </button>
                ))}
              </div>

              {/* Active System Card Preview */}
              {(() => {
                const current = highlights.find((h) => h.id === activeHighlight) || highlights[0];
                return (
                  <div className="p-4 rounded-xl bg-[#1A1A1A] border border-[#2E2E2E] space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold text-[#FFD700]">{current.title}</span>
                      <span className="text-[10px] text-[#A3A3A3]">Kustomisasi Penuh</span>
                    </div>
                    <p className="text-xs text-[#A3A3A3] leading-relaxed">
                      {current.desc}
                    </p>
                    <div className="pt-2 border-t border-[#262626] flex items-center justify-between text-[11px] text-[#7A7A7A]">
                      <div className="flex items-center gap-1.5 text-[#2ECC71]">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Responsive & Mudah Dipakai</span>
                      </div>
                      <span className="text-white font-mono">Source Code 100% Milik Anda</span>
                    </div>
                  </div>
                );
              })()}

              {/* 3 Quick highlights */}
              <div className="mt-4 pt-4 border-t border-[#262626] grid grid-cols-3 gap-2 text-center text-xs">
                <div className="p-2 rounded-lg bg-[#181818]">
                  <div className="font-bold text-white">Cepat & Ringan</div>
                  <div className="text-[10px] text-[#7A7A7A]">Modern Tech</div>
                </div>
                <div className="p-2 rounded-lg bg-[#181818]">
                  <div className="font-bold text-[#FFD700]">Garansi Bug</div>
                  <div className="text-[10px] text-[#7A7A7A]">Free Support</div>
                </div>
                <div className="p-2 rounded-lg bg-[#181818]">
                  <div className="font-bold text-white">Desain Kustom</div>
                  <div className="text-[10px] text-[#7A7A7A]">Bukan Template</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
