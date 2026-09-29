"use client";

import Image from "next/image";
import { ShieldCheck, ArrowRight } from "lucide-react";
import { MotionReveal } from "@/components/ui/motion-reveal";

export default function FeaturesShowcase() {
  return (
    <section className="py-16 sm:py-24 md:py-36 bg-[#09090B] relative overflow-hidden border-t border-white/[0.08]">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[600px] h-[200px] sm:h-[320px] bg-amber-400/[0.025] blur-[120px] sm:blur-[180px] pointer-events-none rounded-full" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[340px] sm:w-[600px] h-[200px] sm:h-[320px] bg-emerald-400/[0.025] blur-[120px] sm:blur-[180px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative space-y-16 sm:space-y-24 lg:space-y-36">
        
        {/* ========================================================================= */}
        {/* Feature 1: Performance Architecture (Visual Left, Editorial Right)       */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
          
          {/* Illustration Container (Left) */}
          <div className="lg:col-span-6 relative group">
            <MotionReveal delay={0.05} yOffset={20}>
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-[#0C0C0E] border border-white/[0.08] shadow-[0_24px_60px_rgba(0,0,0,0.7),inset_0_1px_0_0_rgba(255,255,255,0.06)]">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/images/illustrations/performance.jpg"
                    alt="Performa Kecepatan Tinggi & Arsitektur Cloud ScyterCorp"
                    fill
                    className="object-cover transition-transform duration-500 [transition-timing-function:cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[1.03]"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                </div>
              </div>
              {/* Telemetry pill */}
              <div className="absolute -bottom-3 right-2 sm:right-6 sm:-bottom-4 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#0F0F12]/95 backdrop-blur-xl border border-white/[0.1] shadow-[0_12px_32px_rgba(0,0,0,0.6)] flex items-center gap-2 max-w-[calc(100%-1rem)]">
                <span className="w-2 h-2 rounded-full bg-emerald-400 ring-4 ring-emerald-400/20 shrink-0" />
                <span className="text-[10px] sm:text-xs font-mono font-medium text-zinc-200 truncate">Core Web Vitals 99+ &middot; TTFB &lt; 180ms</span>
              </div>
            </MotionReveal>
          </div>

          {/* Copywriting (Right) */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-6">
            <MotionReveal delay={0.15} yOffset={24}>
              <div className="space-y-2 sm:space-y-3">
                <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-amber-400 font-semibold">
                  01 // REKAYASA PERFORMA &amp; INFRASTRUKTUR
                </span>
                <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white tracking-[-0.03em] leading-[1.15] sm:leading-[1.12] font-[family-name:var(--font-heading)]">
                  Performa sub-detik &amp;{" "}
                  <span className="gold-gradient-text">arsitektur cloud siap skala.</span>
                </h2>
              </div>

              <p className="text-xs sm:text-base text-zinc-400 leading-relaxed font-normal">
                Setiap baris kode di ScyterCorp dioptimasi dengan arsitektur modern berkecepatan tinggi: Next.js 16 Server-Side Rendering, query database efisien PostgreSQL, dan caching terdistribusi Redis. Waktu muat selalu sub-detik bahkan pada volume transaksi puncak.
              </p>

              {/* Minimalist 3-Column Engineering Metrics (Clean & Unboxed) */}
              <div className="pt-4 sm:pt-6 border-t border-white/[0.08] grid grid-cols-3 gap-2 sm:gap-6">
                <div>
                  <div className="text-lg sm:text-2xl lg:text-3xl font-bold text-white font-[family-name:var(--font-heading)]">
                    &lt; 180ms
                  </div>
                  <div className="text-[10px] sm:text-xs text-zinc-400 mt-0.5 sm:mt-1 leading-snug">Average TTFB Response</div>
                </div>
                <div>
                  <div className="text-lg sm:text-2xl lg:text-3xl font-bold text-amber-400 font-[family-name:var(--font-heading)]">
                    99.9%
                  </div>
                  <div className="text-[10px] sm:text-xs text-zinc-400 mt-0.5 sm:mt-1 leading-snug">Cloud Uptime Reliability</div>
                </div>
                <div>
                  <div className="text-lg sm:text-2xl lg:text-3xl font-bold text-emerald-400 font-[family-name:var(--font-heading)]">
                    100 / 100
                  </div>
                  <div className="text-[10px] sm:text-xs text-zinc-400 mt-0.5 sm:mt-1 leading-snug">Google SEO Audit Ready</div>
                </div>
              </div>
            </MotionReveal>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* Feature 2: 100% Ownership & Zero Lock-In (Editorial Left, Visual Right)   */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
          
          {/* Copywriting (Left) */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-6 order-2 lg:order-1">
            <MotionReveal delay={0.1} yOffset={24}>
              <div className="space-y-2 sm:space-y-3">
                <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-amber-400 font-semibold">
                  02 // KEPEMILIKAN ASET &amp; INTEGRITAS DATA
                </span>
                <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white tracking-[-0.03em] leading-[1.15] sm:leading-[1.12] font-[family-name:var(--font-heading)]">
                  Operasional terpusat &amp;{" "}
                  <span className="gold-gradient-text">100% hak milik aset bisnis Anda.</span>
                </h2>
              </div>

              <p className="text-xs sm:text-base text-zinc-400 leading-relaxed font-normal">
                Kelola bisnis Anda dengan panel kontrol yang dirancang khusus: mulai dari kasir POS multi-outlet, otomasi invoice PMS, katalog CMS, hingga sertifikasi LMS. Tanpa biaya sewa atau royalti bulanan per lisensi — seluruh kode dan database diserahkan penuh kepada Anda.
              </p>

              {/* Minimalist 3-Column Studio Assurances */}
              <div className="pt-4 sm:pt-6 border-t border-white/[0.08] grid grid-cols-3 gap-2 sm:gap-6">
                <div>
                  <div className="text-lg sm:text-2xl lg:text-3xl font-bold text-white font-[family-name:var(--font-heading)]">
                    100%
                  </div>
                  <div className="text-[10px] sm:text-xs text-zinc-400 mt-0.5 sm:mt-1 leading-snug">Source Code Handover</div>
                </div>
                <div>
                  <div className="text-lg sm:text-2xl lg:text-3xl font-bold text-amber-400 font-[family-name:var(--font-heading)]">
                    Rp 0
                  </div>
                  <div className="text-[10px] sm:text-xs text-zinc-400 mt-0.5 sm:mt-1 leading-snug">Biaya Sewa / Royalti</div>
                </div>
                <div>
                  <div className="text-lg sm:text-2xl lg:text-3xl font-bold text-emerald-400 font-[family-name:var(--font-heading)]">
                    Garansi
                  </div>
                  <div className="text-[10px] sm:text-xs text-zinc-400 mt-0.5 sm:mt-1 leading-snug">Perbaikan Bug Gratis</div>
                </div>
              </div>

              <div className="pt-2 sm:pt-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-amber-300 hover:text-amber-200 transition-colors group"
                >
                  <span>Diskusikan Arsitektur Sistem Anda</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </MotionReveal>
          </div>

          {/* Illustration Container (Right) */}
          <div className="lg:col-span-6 relative group order-1 lg:order-2">
            <MotionReveal delay={0.15} yOffset={20}>
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-[#0C0C0E] border border-white/[0.08] shadow-[0_24px_60px_rgba(0,0,0,0.7),inset_0_1px_0_0_rgba(255,255,255,0.06)]">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/images/illustrations/custom-system.jpg"
                    alt="Sistem Bisnis Kustom & Panel Kontrol ScyterCorp"
                    fill
                    className="object-cover transition-transform duration-500 [transition-timing-function:cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[1.03]"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                </div>
              </div>
              {/* Telemetry pill */}
              <div className="absolute -bottom-3 left-2 sm:left-6 sm:-bottom-4 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#0F0F12]/95 backdrop-blur-xl border border-white/[0.1] shadow-[0_12px_32px_rgba(0,0,0,0.6)] flex items-center gap-2 max-w-[calc(100%-1rem)]">
                <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="text-[10px] sm:text-xs font-mono font-medium text-zinc-200 truncate">Full IP, Database &amp; Repo Transfer</span>
              </div>
            </MotionReveal>
          </div>

        </div>

      </div>
    </section>
  );
}
