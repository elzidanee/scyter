"use client";

import Image from "next/image";
import {
  Zap,
  ShieldCheck,
  CheckCircle2,
  Cpu,
  Database,
  ArrowRight,
  Server,
  KeyRound,
  Layers,
} from "lucide-react";

export default function FeaturesShowcase() {
  return (
    <section className="py-24 bg-[#0A0A0A] relative overflow-hidden border-t border-white/[0.06]">
      {/* Ambient background accents */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#FFD700]/5 blur-[160px] pointer-events-none rounded-full" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[500px] h-[300px] bg-[#2ECC71]/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative space-y-24 lg:space-y-32">
        
        {/* ========================================================================= */}
        {/* Feature 1: Performance & High-Speed Architecture (Image Left, Text Right) */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Illustration Container (Left) */}
          <div className="lg:col-span-6 relative group">
            <div className="relative rounded-3xl overflow-hidden bg-[#121212] border border-white/[0.08] shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/images/illustrations/performance.jpg"
                  alt="Performa Kecepatan Tinggi & Arsitektur Cloud ScyterCorp"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
            {/* Subtle floating badge */}
            <div className="absolute -bottom-4 -right-2 sm:right-6 px-4 py-2 rounded-xl bg-[#141414]/90 backdrop-blur-xl border border-white/[0.1] shadow-xl flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#2ECC71] animate-pulse" />
              <span className="text-xs font-mono font-semibold text-white">Score 100 Performance</span>
            </div>
          </div>

          {/* Copywriting (Right) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#161616] border border-[#2B2B2B] text-xs font-mono text-[#D4AF37]">
                <Cpu className="w-3.5 h-3.5 text-[#FFD700]" />
                <span>INFRASTRUKTUR & PERFORMA TINGGI</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-[1.2] font-[family-name:var(--font-heading)]">
                Performa Sub-Detik & <span className="gold-gradient-text">Arsitektur Siap Skala</span>
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[#9A9A9A] leading-relaxed">
              Setiap website dan sistem yang kami bangun dioptimasi dengan arsitektur modern berkecepatan tinggi: Next.js 16 Server-Side Rendering, caching Redis, dan database query efisien untuk memastikan waktu muat selalu sub-detik bahkan di jam transaksi puncak.
            </p>

            <p className="text-sm sm:text-base text-[#9A9A9A] leading-relaxed">
              Dengan skor Google Core Web Vitals 90–100, kompresi Brotli, CDN global Cloudflare, dan proteksi SSL otomatis, pengalaman pengguna Anda menjadi lebih mulus serta ramah SEO Google.
            </p>

            {/* Feature Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 text-xs text-[#E0E0E0] p-2.5 rounded-xl bg-[#141414] border border-[#222222]">
                <Zap className="w-4 h-4 text-[#FFD700] shrink-0" />
                <span>Sub-Second Response Time</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-[#E0E0E0] p-2.5 rounded-xl bg-[#141414] border border-[#222222]">
                <Server className="w-4 h-4 text-[#60A5FA] shrink-0" />
                <span>Cloudflare Global Edge CDN</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-[#E0E0E0] p-2.5 rounded-xl bg-[#141414] border border-[#222222]">
                <Database className="w-4 h-4 text-[#34D399] shrink-0" />
                <span>PostgreSQL Relational ACID</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-[#E0E0E0] p-2.5 rounded-xl bg-[#141414] border border-[#222222]">
                <CheckCircle2 className="w-4 h-4 text-[#2ECC71] shrink-0" />
                <span>Core Web Vitals 95–100 Score</span>
              </div>
            </div>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* Feature 2: Custom Systems & 100% Ownership (Text Left, Image Right)        */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Copywriting (Left) */}
          <div className="lg:col-span-6 space-y-6 order-2 lg:order-1">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#161616] border border-[#2B2B2B] text-xs font-mono text-[#D4AF37]">
                <KeyRound className="w-3.5 h-3.5 text-[#FFD700]" />
                <span>HAK MILIK & SISTEM KUSTOM</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-[1.2] font-[family-name:var(--font-heading)]">
                Pengelolaan Lebih Mudah & <span className="gold-gradient-text">100% Hak Milik Anda</span>
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[#9A9A9A] leading-relaxed">
              Kelola operasional bisnis Anda dengan praktis melalui panel admin terintegrasi yang mudah digunakan — mulai dari kasir POS retail, inventaris multi-cabang, CMS portal berita, LMS kursus online, hingga sistem manajemen properti (PMS).
            </p>

            <p className="text-sm sm:text-base text-[#9A9A9A] leading-relaxed">
              Tanpa biaya sewa atau royalti bulanan per pengguna ke vendor pihak ketiga. Seluruh source code, database, dan hak cipta diserahkan 100% kepada Anda setelah proyek tuntas.
            </p>

            {/* Feature Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 text-xs text-[#E0E0E0] p-2.5 rounded-xl bg-[#141414] border border-[#222222]">
                <ShieldCheck className="w-4 h-4 text-[#2ECC71] shrink-0" />
                <span>100% Source Code Handover</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-[#E0E0E0] p-2.5 rounded-xl bg-[#141414] border border-[#222222]">
                <Layers className="w-4 h-4 text-[#FFD700] shrink-0" />
                <span>Zero Vendor Lock-in & No Royalty</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-[#E0E0E0] p-2.5 rounded-xl bg-[#141414] border border-[#222222]">
                <CheckCircle2 className="w-4 h-4 text-[#60A5FA] shrink-0" />
                <span>Panel Admin Intuitif & Modern</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-[#E0E0E0] p-2.5 rounded-xl bg-[#141414] border border-[#222222]">
                <KeyRound className="w-4 h-4 text-[#C084FC] shrink-0" />
                <span>Role-Based Access & Audit Log</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#FFD700] hover:text-[#FFE873] transition-colors"
              >
                <span>Konsultasikan Kebutuhan Sistem Anda</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Illustration Container (Right) */}
          <div className="lg:col-span-6 relative group order-1 lg:order-2">
            <div className="relative rounded-3xl overflow-hidden bg-[#121212] border border-white/[0.08] shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/images/illustrations/custom-system.jpg"
                  alt="Sistem Bisnis Kustom & Panel Kontrol ScyterCorp"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
            {/* Subtle floating badge */}
            <div className="absolute -bottom-4 -left-2 sm:left-6 px-4 py-2 rounded-xl bg-[#141414]/90 backdrop-blur-xl border border-white/[0.1] shadow-xl flex items-center gap-2.5">
              <ShieldCheck className="w-4 h-4 text-[#FFD700]" />
              <span className="text-xs font-mono font-semibold text-white">Full IP & Database Transfer</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
