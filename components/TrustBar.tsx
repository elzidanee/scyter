"use client";

import Image from "next/image";
import { CheckCircle2, ArrowUpRight, Cpu } from "lucide-react";

interface SystemModule {
  image?: string;
  code: string;
  name: string;
  category: string;
  accent: string;
  desc: string;
  features: string[];
}

const systems: SystemModule[] = [
  {
    // image: "/images/projects/pos-preview.jpg", // Masukkan screenshot POS di sini
    code: "SYS-01",
    name: "Sistem Kasir (POS) & Inventory",
    category: "RETAIL & F&B ENGINE",
    accent: "#FFD700",
    desc: "Transaksi kasir kilat, integrasi printer thermal Bluetooth/USB, barcode scan, manajemen multi-cabang, dan laporan laba rugi otomatis.",
    features: ["Thermal & Barcode API", "Multi-outlet Sync", "Laba Rugi Otomatis", "Offline-first Cache"],
  },
  {
    // image: "/images/projects/cms-preview.jpg",
    code: "SYS-02",
    name: "Headless CMS & Web Portal",
    category: "CORPORATE CONTENT",
    accent: "#60A5FA",
    desc: "Panel admin dinamis untuk kelola berita, artikel, katalog produk, dan landing page dengan editor modern tanpa perlu paham koding.",
    features: ["Next.js 16 SSR / SEO", "Role-based Access", "Media Cloud Optimizer", "Audit Log & History"],
  },
  {
    // image: "/images/projects/lms-preview.jpg",
    code: "SYS-03",
    name: "LMS Kursus & Edukasi",
    category: "EDTECH PLATFORM",
    accent: "#34D399",
    desc: "Platform pembelajaran online interaktif dengan video streaming terproteksi, bank soal, kuis otomatis, hingga penerbitan e-sertifikat ber-QR.",
    features: ["Protected Video Stream", "Bank Soal & Kuis", "QR E-Certificate", "Payment Gateway Auto"],
  },
  {
    // image: "/images/projects/pms-preview.jpg",
    code: "SYS-04",
    name: "PMS Properti, Kos & Hotel",
    category: "MANAGEMENT SUITE",
    accent: "#C084FC",
    desc: "Sistem manajemen operasional properti: monitoring okupansi sewa kamar/unit, penagihan invoice otomatis, serta pencatatan cashflow.",
    features: ["Visual Booking Timeline", "Tenant Ledger & Invoice", "Billing Reminder WA", "Analisis Okupansi Unit"],
  },
];

export default function TrustBar() {
  return (
    <section id="custom-systems" className="py-20 bg-[#0E0E0E] border-y border-[#1C1C1C] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#161616] border border-[#262626] text-[11px] font-mono text-[#D4AF37] mb-2.5">
              <Cpu className="w-3 h-3 text-[#FFD700]" />
              <span>CUSTOM BUSINESS SUITE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight font-[family-name:var(--font-heading)]">
              Sistem Kustom Siap Pakai, <span className="gold-gradient-text">100% Hak Milik Anda</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#888888] max-w-md leading-relaxed">
            Tanpa biaya lisensi atau royalti bulanan per pengguna. Dibangun khusus sesuai alur kerja nyata bisnis Anda dengan penyerahan source code penuh.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {systems.map((item) => (
            <div
              key={item.code}
              className="rounded-2xl overflow-hidden bg-[#121212] border border-[#222222] hover:border-[#FFD700]/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,0,0,0.6)] group flex flex-col justify-between"
            >
              <div>
                {/* Visual / Screenshot Slot */}
                <div className="relative h-44 overflow-hidden bg-[#0A0A0A] border-b border-[#1E1E1E]">
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      sizes="25vw"
                    />
                  ) : (
                    /* Precision Wireframe Mockup Blueprint */
                    <div className="absolute inset-0 p-3.5 flex flex-col justify-between">
                      {/* Window Chrome Header */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-[#333333]" />
                          <span className="w-2 h-2 rounded-full bg-[#333333]" />
                          <span className="w-2 h-2 rounded-full bg-[#333333]" />
                        </div>
                        <span className="font-mono text-[9px] text-[#555555] tracking-wider uppercase">
                          {item.code}
                        </span>
                      </div>

                      {/* Mockup Dashboard Layout Blueprint */}
                      <div className="space-y-2 my-auto">
                        <div className="flex items-center gap-2">
                          <div
                            className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 border"
                            style={{
                              backgroundColor: `${item.accent}12`,
                              borderColor: `${item.accent}30`,
                              color: item.accent,
                            }}
                          >
                            <span className="font-mono text-[10px] font-bold">
                              {item.code.slice(-2)}
                            </span>
                          </div>
                          <div className="flex-1 space-y-1">
                            <div
                              className="h-2 rounded-full w-4/5"
                              style={{ backgroundColor: `${item.accent}35` }}
                            />
                            <div className="h-1.5 rounded-full w-1/2 bg-[#222222]" />
                          </div>
                        </div>

                        {/* Data grid lines */}
                        <div className="p-2 rounded-lg bg-[#111111] border border-[#1C1C1C] grid grid-cols-3 gap-1.5 text-center">
                          <div className="bg-[#181818] p-1 rounded">
                            <div className="h-1 rounded bg-[#333333] w-3/4 mx-auto mb-1" />
                            <div className="h-1.5 rounded bg-[#444444] w-1/2 mx-auto" />
                          </div>
                          <div className="bg-[#181818] p-1 rounded">
                            <div className="h-1 rounded bg-[#333333] w-3/4 mx-auto mb-1" />
                            <div className="h-1.5 rounded bg-[#444444] w-1/2 mx-auto" />
                          </div>
                          <div className="bg-[#181818] p-1 rounded">
                            <div className="h-1 rounded bg-[#333333] w-3/4 mx-auto mb-1" />
                            <div className="h-1.5 rounded bg-[#444444] w-1/2 mx-auto" />
                          </div>
                        </div>
                      </div>

                      {/* Active Status Badge */}
                      <div className="flex items-center justify-between text-[10px] font-mono text-[#666666]">
                        <span className="flex items-center gap-1.5">
                          <span
                            className="w-1.5 h-1.5 rounded-full animate-pulse"
                            style={{ backgroundColor: item.accent }}
                          />
                          <span className="text-[#888888]">DEPLOYMENT READY</span>
                        </span>
                        <span>v2.4</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-5">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#666666] block mb-1">
                    {item.category}
                  </span>
                  <h3 className="text-base font-bold text-white group-hover:text-[#FFE873] transition-colors font-[family-name:var(--font-heading)]">
                    {item.name}
                  </h3>
                  <p className="text-xs text-[#888888] mt-2 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>

              {/* Feature Tags List */}
              <div className="px-5 pb-5 pt-3 border-t border-[#1C1C1C] space-y-1.5">
                {item.features.map((f, fIdx) => (
                  <div key={fIdx} className="flex items-center gap-1.5 text-[11px] text-[#A6A6A6]">
                    <CheckCircle2 className="w-3 h-3 text-[#2ECC71] shrink-0" />
                    <span className="truncate">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
