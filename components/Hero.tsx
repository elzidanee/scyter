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
  Terminal,
  Activity,
  ShieldCheck,
  Cpu,
} from "lucide-react";

interface HeroProps {
  onOpenConsultation?: () => void;
}

export default function Hero({ onOpenConsultation }: HeroProps) {
  const [activeSystem, setActiveSystem] = useState<string>("pos");

  const systems = [
    {
      id: "pos",
      tag: "POS.ENGINE",
      title: "Sistem Kasir (POS) & Inventory",
      specs: [
        { label: "Transaksi", value: "Sub-second barcode scan" },
        { label: "Hardware", value: "Printer thermal & laci kasir" },
        { label: "Laporan", value: "Laba rugi, HPP, & stok otomatis" },
        { label: "Sinkronisasi", value: "Multi-outlet & multi-kasir" },
      ],
      route: "POST /api/v1/pos/transaction -> 200 OK (18ms)",
    },
    {
      id: "cms",
      tag: "CMS.PORTAL",
      title: "Headless CMS & Web Portal",
      specs: [
        { label: "Arsitektur", value: "Next.js 16 SSR & SEO Engine" },
        { label: "Panel Admin", value: "Role-based access & audit log" },
        { label: "Media", value: "Image optimizer & CDN storage" },
        { label: "Skalabilitas", value: "Jam transaksi trafik tinggi" },
      ],
      route: "GET /api/v1/content/published -> 200 OK (12ms)",
    },
    {
      id: "lms",
      tag: "LMS.LEARN",
      title: "Learning Management System (LMS)",
      specs: [
        { label: "Video", value: "Secure streaming & anti-download" },
        { label: "Evaluasi", value: "Bank soal & kuis otomatis" },
        { label: "Sertifikat", value: "Generator e-sertifikat ber-QR" },
        { label: "Pembayaran", value: "Otomatisasi Midtrans / QRIS" },
      ],
      route: "POST /api/v1/course/enroll -> 200 OK (22ms)",
    },
    {
      id: "pms",
      tag: "PMS.SUITE",
      title: "Property & Project Management (PMS)",
      specs: [
        { label: "Manajemen", value: "Unit sewa, kamar & tenant ledger" },
        { label: "Finansial", value: "Invoice otomatis & reminder WA" },
        { label: "Kalender", value: "Visual timeline booking live" },
        { label: "Analitik", value: "Tingkat okupansi & cash flow" },
      ],
      route: "GET /api/v1/properties/occupancy -> 200 OK (15ms)",
    },
  ];

  const currentSystem = systems.find((s) => s.id === activeSystem) || systems[0];

  return (
    <section className="relative pt-32 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-[#0A0A0A]">
      {/* Precision Engineering Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f18_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f18_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Top Gold Subtle Ambient Aura */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[320px] bg-[#FFD700]/7 blur-[140px] rounded-full pointer-events-none" />

      {/* Corporate Watermark */}
      <div className="absolute right-4 top-24 md:right-16 md:top-28 w-64 h-64 md:w-96 md:h-96 opacity-[0.03] pointer-events-none select-none">
        <Image src="/logo.png" alt="ScyterCorp Watermark" fill className="object-contain" priority />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Clean, High-Signal Headline & Services */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#141414] border border-[#262626] text-xs shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#FFD700] animate-pulse" />
              <span className="font-mono text-[#D4AF37] font-semibold text-[11px] tracking-wider uppercase">
                SCYTERCORP // SOFTWARE HOUSE & SYSTEMS
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-bold tracking-tight text-white leading-[1.12] font-[family-name:var(--font-heading)]">
              Membangun Solusi{" "}
              <span className="gold-gradient-text">Web, Mobile & Sistem Bisnis</span>{" "}
              Berskala Enterprise
            </h1>

            {/* Value Proposition */}
            <p className="text-base sm:text-lg text-[#8A8A8A] leading-relaxed max-w-xl mx-auto lg:mx-0">
              Kami merancang dan mengembangkan software berkualitas tinggi: Website modern, aplikasi Mobile (iOS/Android), UI/UX terstandar, serta sistem kustom seperti <strong>POS, CMS, LMS, dan PMS</strong>. 100% hak milik kode, tanpa royalti.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <button
                onClick={
                  onOpenConsultation ||
                  (() => {
                    const el = document.getElementById("contact");
                    el?.scrollIntoView({ behavior: "smooth" });
                  })
                }
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-[#0D0D0D] transition-all hover:brightness-110 hover:shadow-[0_0_24px_rgba(255,215,0,0.3)] cursor-pointer"
                style={{
                  background: "linear-gradient(180deg, #FFFBE6 0%, #FFE873 40%, #FFD700 100%)",
                }}
              >
                <Zap className="w-4 h-4 fill-current" />
                <span>Konsultasikan Kebutuhan Proyek</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#estimator"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-[#141414] border border-[#262626] hover:border-[#FFD700]/50 hover:bg-[#1A1A1A] transition-colors"
              >
                <span>Simulasi Estimasi Biaya</span>
                <Sparkles className="w-4 h-4 text-[#FFD700]" />
              </a>
            </div>

            {/* Service Tags */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-2 text-xs">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#121212] border border-[#222222] text-[#9A9A9A]">
                <Globe className="w-3.5 h-3.5 text-[#FFD700]" />
                Web App
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#121212] border border-[#222222] text-[#9A9A9A]">
                <Smartphone className="w-3.5 h-3.5 text-[#FFD700]" />
                Mobile App (iOS/Android)
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#121212] border border-[#222222] text-[#9A9A9A]">
                <Layout className="w-3.5 h-3.5 text-[#FFD700]" />
                UI/UX Design
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#141414] border border-[#FFD700]/40 text-[#FFE873]">
                <Layers className="w-3.5 h-3.5 text-[#FFD700]" />
                Custom Systems (POS / CMS / LMS / PMS)
              </span>
            </div>
          </div>

          {/* Right Column: High-Tech Architecture & Interactive System Terminal */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-[#111111] border border-[#242424] shadow-[0_20px_50px_rgba(0,0,0,0.7)] overflow-hidden">
              
              {/* Terminal Window Header Bar */}
              <div className="px-4 py-3 bg-[#161616] border-b border-[#222222] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]/80" />
                  </div>
                  <span className="text-[11px] font-mono text-[#737373] ml-2">
                    scyter-runtime :: system-hub
                  </span>
                </div>
                <div className="flex items-center gap-1.5 font-mono text-[10px] text-[#2ECC71] bg-[#2ECC71]/10 px-2 py-0.5 rounded border border-[#2ECC71]/20">
                  <Activity className="w-3 h-3" />
                  <span>ONLINE (18ms)</span>
                </div>
              </div>

              {/* System Selector Segmented Tabs */}
              <div className="p-4 pb-0">
                <div className="grid grid-cols-4 gap-1.5 p-1 rounded-xl bg-[#0D0D0D] border border-[#202020]">
                  {systems.map((s) => {
                    const isSelected = activeSystem === s.id;
                    return (
                      <button
                        key={s.id}
                        onClick={() => setActiveSystem(s.id)}
                        className={`py-2 text-center rounded-lg text-xs font-mono font-semibold transition-all cursor-pointer ${
                          isSelected
                            ? "bg-[#1C1C1C] text-[#FFD700] border border-[#FFD700]/30 shadow-sm"
                            : "text-[#737373] hover:text-white"
                        }`}
                      >
                        {s.id.toUpperCase()}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Active System Details & Specs Panel */}
              <div className="p-5 space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono text-[#D4AF37] uppercase tracking-wider block">
                      {currentSystem.tag}
                    </span>
                    <h3 className="text-base font-bold text-white font-[family-name:var(--font-heading)]">
                      {currentSystem.title}
                    </h3>
                  </div>
                  <span className="text-[10px] font-mono text-[#999999] px-2 py-0.5 rounded bg-[#181818] border border-[#2B2B2B]">
                    MODULAR API
                  </span>
                </div>

                {/* Simulated Telemetry API Request Bar */}
                <div className="px-3 py-2 rounded-lg bg-[#0C0C0C] border border-[#1F1F1F] font-mono text-[11px] text-[#A3A3A3] flex items-center justify-between">
                  <div className="flex items-center gap-2 truncate">
                    <Terminal className="w-3.5 h-3.5 text-[#FFD700] shrink-0" />
                    <span className="text-[#E6E6E6] truncate">{currentSystem.route}</span>
                  </div>
                  <span className="text-[#2ECC71] text-[10px] shrink-0">TLS 1.3</span>
                </div>

                {/* System Technical Specifications Grid */}
                <div className="grid grid-cols-2 gap-2.5">
                  {currentSystem.specs.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 rounded-xl bg-[#141414] border border-[#222222] flex flex-col justify-between"
                    >
                      <span className="text-[10px] font-mono text-[#666666] uppercase">
                        {item.label}
                      </span>
                      <span className="text-xs font-medium text-[#DCDCDC] mt-0.5 truncate">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Bottom Assurance Badges */}
                <div className="pt-3 border-t border-[#1F1F1F] flex items-center justify-between text-[11px] text-[#888888]">
                  <div className="flex items-center gap-1.5 text-[#2ECC71]">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>PostgreSQL ACID Relational</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[#FFD700]">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>100% Full Git Handover</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
