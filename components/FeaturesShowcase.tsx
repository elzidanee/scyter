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
    <section className="py-24 bg-[#09090B] relative overflow-hidden border-t border-white/[0.06]">
      {/* Subtle ambient background accents */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[540px] h-[300px] bg-amber-400/[0.03] blur-[160px] pointer-events-none rounded-full" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[540px] h-[300px] bg-emerald-400/[0.03] blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative space-y-24 lg:space-y-32">
        
        {/* ========================================================================= */}
        {/* Feature 1: Performance & High-Speed Architecture (Image Left, Text Right) */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Illustration Container (Left) */}
          <div className="lg:col-span-6 relative group">
            <div className="relative rounded-3xl overflow-hidden bg-[#0F0F12] border border-white/[0.08] shadow-[0_20px_50px_rgba(0,0,0,0.7),inset_0_1px_0_0_rgba(255,255,255,0.06)]">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/images/illustrations/performance.jpg"
                  alt="Performa Kecepatan Tinggi & Arsitektur Cloud ScyterCorp"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
            {/* Clean telemetry floating badge */}
            <div className="absolute -bottom-4 -right-2 sm:right-6 px-4 py-2.5 rounded-xl bg-[#0F0F12]/92 backdrop-blur-xl border border-white/[0.1] shadow-[0_12px_32px_rgba(0,0,0,0.6)] flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 ring-4 ring-emerald-400/20" />
              <span className="text-xs font-mono font-semibold text-zinc-200">Core Web Vitals 99+ · TTFB &lt; 180ms</span>
            </div>
          </div>

          {/* Copywriting (Right) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs font-mono text-amber-300">
                <Cpu className="w-3.5 h-3.5 text-amber-400" />
                <span>INFRASTRUKTUR & PERFORMA TINGGI</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-[1.2] font-[family-name:var(--font-heading)]">
                Performa Sub-Detik & <span className="gold-gradient-text">Arsitektur Siap Skala</span>
              </h2>
            </div>

            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed font-normal">
              Setiap website dan sistem yang kami bangun dioptimasi dengan arsitektur modern berkecepatan tinggi: Next.js 16 Server-Side Rendering, caching Redis, dan database query efisien untuk memastikan waktu muat selalu sub-detik bahkan di jam transaksi puncak.
            </p>

            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed font-normal">
              Dengan skor Google Core Web Vitals 95–100, kompresi Brotli, CDN global Cloudflare, dan proteksi SSL otomatis, pengalaman pengguna Anda menjadi lebih mulus serta disukai oleh algoritma Google.
            </p>

            {/* Feature Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 text-xs text-zinc-200 p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.1] transition-colors">
                <Zap className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="font-medium">Sub-Second Response Time</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-zinc-200 p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.1] transition-colors">
                <Server className="w-4 h-4 text-blue-400 shrink-0" />
                <span className="font-medium">Cloudflare Global Edge CDN</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-zinc-200 p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.1] transition-colors">
                <Database className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="font-medium">PostgreSQL Relational ACID</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-zinc-200 p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.1] transition-colors">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="font-medium">Core Web Vitals 95–100 Score</span>
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
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs font-mono text-amber-300">
                <KeyRound className="w-3.5 h-3.5 text-amber-400" />
                <span>HAK MILIK & SISTEM KUSTOM</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-[1.2] font-[family-name:var(--font-heading)]">
                Pengelolaan Lebih Mudah & <span className="gold-gradient-text">100% Hak Milik Anda</span>
              </h2>
            </div>

            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed font-normal">
              Kelola operasional bisnis Anda dengan praktis melalui panel admin terintegrasi yang mudah digunakan — mulai dari kasir POS retail, inventaris multi-cabang, CMS portal berita, LMS kursus online, hingga sistem manajemen properti (PMS).
            </p>

            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed font-normal">
              Tanpa biaya sewa atau royalti bulanan per pengguna ke pihak ketiga. Seluruh source code, database, dan hak cipta diserahkan 100% kepada Anda setelah proyek tuntas.
            </p>

            {/* Feature Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 text-xs text-zinc-200 p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.1] transition-colors">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="font-medium">100% Source Code Handover</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-zinc-200 p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.1] transition-colors">
                <Layers className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="font-medium">Zero Vendor Lock-in & No Royalty</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-zinc-200 p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.1] transition-colors">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span className="font-medium">Panel Admin Intuitif & Modern</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-zinc-200 p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.1] transition-colors">
                <KeyRound className="w-4 h-4 text-purple-400 shrink-0" />
                <span className="font-medium">Role-Based Access & Audit Log</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-amber-300 hover:text-amber-200 transition-colors group"
              >
                <span>Konsultasikan Kebutuhan Sistem Anda</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>

          {/* Illustration Container (Right) */}
          <div className="lg:col-span-6 relative group order-1 lg:order-2">
            <div className="relative rounded-3xl overflow-hidden bg-[#0F0F12] border border-white/[0.08] shadow-[0_20px_50px_rgba(0,0,0,0.7),inset_0_1px_0_0_rgba(255,255,255,0.06)]">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/images/illustrations/custom-system.jpg"
                  alt="Sistem Bisnis Kustom & Panel Kontrol ScyterCorp"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
            {/* Clean telemetry floating badge */}
            <div className="absolute -bottom-4 -left-2 sm:left-6 px-4 py-2.5 rounded-xl bg-[#0F0F12]/92 backdrop-blur-xl border border-white/[0.1] shadow-[0_12px_32px_rgba(0,0,0,0.6)] flex items-center gap-2.5">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span className="text-xs font-mono font-semibold text-zinc-200">Full IP & Database Transfer</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
