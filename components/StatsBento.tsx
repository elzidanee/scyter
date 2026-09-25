"use client";

import { AnimatedNumber } from "@/components/ui/animated-number";
import { Spotlight } from "@/components/ui/spotlight";
import {
  CodeXml,
  Activity,
  ShieldCheck,
  Clock,
  Sparkles,
  ArrowUpRight,
  CheckCircle,
} from "lucide-react";

export default function StatsBento() {
  return (
    <section className="py-20 bg-[#0E0E0E] relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-[#FFD700]/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#181818] border border-[#2B2B2B] text-[11px] text-[#FFE873]">
            <Sparkles className="w-3 h-3 text-[#FFD700]" />
            <span className="font-semibold uppercase tracking-wider">Metrik & Standar Kualitas</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-[family-name:var(--font-heading)]">
            Rekam Jejak & Komitmen <span className="gold-gradient-text">Profesional ScyterCorp</span>
          </h2>
          <p className="text-sm text-[#888888]">
            Kami membangun software andal berstandar industri dengan transparansi penuh sejak hari pertama.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          
          {/* Bento Card 1: 50+ Projects (Large 2 Cols) */}
          <div className="md:col-span-2 rounded-2xl bg-[#141414] border border-[#262626] p-7 flex flex-col justify-between group relative overflow-hidden transition-all duration-300 hover:border-[#FFD700]/50 hover:shadow-[0_12px_36px_rgba(0,0,0,0.6)]">
            <Spotlight className="from-[#FFD700]/20 via-[#FFD700]/5 to-transparent" size={320} />
            
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#1D1D1D] border border-[#333333] flex items-center justify-center text-[#FFD700]">
                  <CodeXml className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-mono text-[#2ECC71] bg-[#2ECC71]/10 px-2.5 py-1 rounded-full border border-[#2ECC71]/20 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2ECC71] animate-pulse" />
                  Produksi Aktif
                </span>
              </div>

              <div className="flex items-baseline gap-1">
                <span className="text-5xl sm:text-6xl font-black text-white font-[family-name:var(--font-heading)]">
                  <AnimatedNumber value={50} />
                </span>
                <span className="text-3xl sm:text-4xl font-black text-[#FFD700]">+</span>
              </div>
              
              <h3 className="text-base sm:text-lg font-bold text-white mt-2 font-[family-name:var(--font-heading)]">
                Proyek Web, Mobile & Custom System Sukses
              </h3>
              <p className="text-xs sm:text-sm text-[#888888] mt-1.5 leading-relaxed max-w-lg">
                Dari aplikasi kasir retail (POS), sistem manajemen properti & hotel (PMS), LMS edukasi, hingga e-commerce berskala ribuan transaksi harian.
              </p>
            </div>

            <div className="mt-6 pt-5 border-t border-[#222222] flex flex-wrap gap-2 text-[11px] text-[#A3A3A3]">
              <span className="px-2.5 py-1 rounded-md bg-[#1B1B1B] border border-[#2B2B2B]">Web Portal</span>
              <span className="px-2.5 py-1 rounded-md bg-[#1B1B1B] border border-[#2B2B2B]">Mobile Apps</span>
              <span className="px-2.5 py-1 rounded-md bg-[#1B1B1B] border border-[#2B2B2B]">POS & Retail</span>
              <span className="px-2.5 py-1 rounded-md bg-[#1B1B1B] border border-[#2B2B2B]">PMS & LMS</span>
            </div>
          </div>

          {/* Bento Card 2: 99.9% Uptime */}
          <div className="rounded-2xl bg-[#141414] border border-[#262626] p-7 flex flex-col justify-between group relative overflow-hidden transition-all duration-300 hover:border-[#FFD700]/50 hover:shadow-[0_12px_36px_rgba(0,0,0,0.6)]">
            <Spotlight className="from-[#FFD700]/20 via-[#FFD700]/5 to-transparent" size={260} />

            <div>
              <div className="w-10 h-10 rounded-xl bg-[#1D1D1D] border border-[#333333] flex items-center justify-center text-[#FFD700] mb-6">
                <Activity className="w-5 h-5" />
              </div>

              <div className="flex items-baseline gap-1">
                <span className="text-4xl sm:text-5xl font-black text-white font-[family-name:var(--font-heading)]">
                  99.9
                </span>
                <span className="text-2xl sm:text-3xl font-black text-[#FFD700]">%</span>
              </div>

              <h3 className="text-sm sm:text-base font-bold text-white mt-2 font-[family-name:var(--font-heading)]">
                Stabilitas & Uptime Target
              </h3>
              <p className="text-xs text-[#888888] mt-1.5 leading-relaxed">
                Dioptimasi dengan arsitektur cloud modular, caching Redis, dan database query efisien.
              </p>
            </div>

            <div className="mt-5 pt-4 border-t border-[#222222] flex items-center gap-2 text-[11px] text-[#2ECC71]">
              <CheckCircle className="w-3.5 h-3.5" />
              <span>Monitoring Real-time</span>
            </div>
          </div>

          {/* Bento Card 3: 100% Code Ownership */}
          <div className="rounded-2xl bg-[#141414] border border-[#262626] p-7 flex flex-col justify-between group relative overflow-hidden transition-all duration-300 hover:border-[#FFD700]/50 hover:shadow-[0_12px_36px_rgba(0,0,0,0.6)]">
            <Spotlight className="from-[#FFD700]/20 via-[#FFD700]/5 to-transparent" size={260} />

            <div>
              <div className="w-10 h-10 rounded-xl bg-[#1D1D1D] border border-[#333333] flex items-center justify-center text-[#FFD700] mb-6">
                <ShieldCheck className="w-5 h-5" />
              </div>

              <div className="flex items-baseline gap-1">
                <span className="text-4xl sm:text-5xl font-black text-white font-[family-name:var(--font-heading)]">
                  <AnimatedNumber value={100} />
                </span>
                <span className="text-2xl sm:text-3xl font-black text-[#FFD700]">%</span>
              </div>

              <h3 className="text-sm sm:text-base font-bold text-white mt-2 font-[family-name:var(--font-heading)]">
                Hak Milik Source Code
              </h3>
              <p className="text-xs text-[#888888] mt-1.5 leading-relaxed">
                Source code, database schema, dan aset desain diserahkan penuh tanpa biaya langganan royalti tersembunyi.
              </p>
            </div>

            <div className="mt-5 pt-4 border-t border-[#222222] flex items-center gap-2 text-[11px] text-[#FFD700]">
              <CheckCircle className="w-3.5 h-3.5" />
              <span>Zero Vendor Lock-In</span>
            </div>
          </div>

          {/* Bento Card 4: Rapid SLA & Communication (Full width row on mobile, 4 cols span on desktop) */}
          <div className="md:col-span-3 lg:col-span-4 rounded-2xl bg-gradient-to-r from-[#161616] via-[#141414] to-[#161616] border border-[#2A2A2A] p-6 sm:p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-6 relative overflow-hidden hover:border-[#FFD700]/40 transition-colors">
            <Spotlight className="from-[#FFD700]/15 via-[#FFD700]/5 to-transparent" size={400} />

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#202020] border border-[#363636] flex items-center justify-center text-[#FFD700] shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-base sm:text-lg font-bold text-white font-[family-name:var(--font-heading)]">
                    Direct Engineer Communication & SLA Cepat
                  </h3>
                  <span className="text-[10px] font-mono text-[#FFD700] bg-[#FFD700]/10 border border-[#FFD700]/30 px-2 py-0.5 rounded">
                    SLA &lt; 24 Jam
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#888888] max-w-2xl leading-relaxed">
                  Bicara langsung dengan software engineer dan project lead Anda melalui grup WhatsApp atau Slack khusus. Tanpa birokrasi berbelit-belit, progress transparan dengan update berkala.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#FFD700] text-[#0D0D0D] font-bold text-xs hover:bg-[#FFE873] transition-all cursor-pointer shadow-[0_0_15px_rgba(255,215,0,0.2)]"
              >
                <span>Konsultasikan Kebutuhan</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
