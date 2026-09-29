"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import {
  ArrowRight,
  ShieldCheck,
  Code2,
  Users,
  FolderGit2,
} from "lucide-react";

interface HeroProps {
  onOpenConsultation?: () => void;
}

export default function Hero({ onOpenConsultation }: HeroProps) {
  const pillars = [
    {
      icon: FolderGit2,
      number: "01",
      title: "100% Hak Milik Klien",
      desc: "Source code dan database diserahkan penuh. Tanpa biaya sewa atau vendor lock-in.",
    },
    {
      icon: Code2,
      number: "02",
      title: "Arsitektur Sub-Detik",
      desc: "Next.js 16, TypeScript & Flutter untuk performa tinggi dengan Core Web Vitals 95+.",
    },
    {
      icon: Users,
      number: "03",
      title: "Direct Engineer Access",
      desc: "Konsultasi langsung dengan lead engineer tanpa lapisan perantara birokrasi.",
    },
    {
      icon: ShieldCheck,
      number: "04",
      title: "Garansi Bug-Free",
      desc: "Dukungan garansi purna jual gratis untuk kelancaran operasional sistem Anda.",
    },
  ];

  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? ["0%", "0%"] : ["0%", "15%"]);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0.1]);

  const EASE_OUT = [0.23, 1, 0.32, 1] as const;

  return (
    <section ref={sectionRef} className="relative pt-36 pb-24 md:pt-48 md:pb-32 overflow-hidden bg-[#09090B]">
      {/* Precision Background Accent */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_25%,#000_70%,transparent_100%)] pointer-events-none"
      />

      {/* Ambient Radial Spotlight */}
      <motion.div
        style={{ opacity: glowOpacity }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-amber-400/[0.04] blur-[160px] rounded-full pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Headline & Value Proposition (Clean Editorial Agency Style) */}
        <div className="max-w-4xl mx-auto text-center space-y-7">
          
          {/* Availability Status Badge */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: EASE_OUT }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs shadow-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
              <span className="relative w-2 h-2 rounded-full bg-emerald-400" />
            </span>
            <span className="text-zinc-300 font-mono text-[11px] tracking-wide">
              SOFTWARE HOUSE &middot; TERSEDIA UNTUK PROYEK BARU 2026
            </span>
          </motion.div>

          {/* Hero Headline (Editorial Scale) */}
          <motion.h1
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.08, ease: EASE_OUT }}
            className="text-4xl sm:text-6xl lg:text-[68px] font-bold text-white tracking-[-0.035em] leading-[1.08] font-[family-name:var(--font-heading)]"
          >
            Membangun produk digital &amp;{" "}
            <span className="gold-gradient-text">sistem bisnis</span> dengan standar craft tertinggi.
          </motion.h1>

          {/* Subtitle with generous line height and calm contrast */}
          <motion.p
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.16, ease: EASE_OUT }}
            className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed font-normal"
          >
            ScyterCorp merekayasa website modern, aplikasi mobile iOS &amp; Android, serta sistem operasional kustom (<span className="text-zinc-200">POS, CMS, LMS, PMS</span>) dengan arsitektur siap skala dan 100% kepemilikan kode tanpa biaya langganan bulanan.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.22, ease: EASE_OUT }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2"
          >
            <button
              onClick={
                onOpenConsultation ||
                (() => {
                  const el = document.getElementById("contact");
                  el?.scrollIntoView({ behavior: "smooth" });
                })
              }
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-xs sm:text-sm font-bold text-[#09090B] transition-[transform,filter] duration-150 hover:brightness-105 active:scale-[0.97] shadow-[0_2px_18px_rgba(255,215,0,0.32),inset_0_1px_0_0_rgba(255,255,255,0.7)] cursor-pointer group"
              style={{
                background: "linear-gradient(180deg, #FFFCE6 0%, #FFE566 45%, #FFD700 100%)",
              }}
            >
              <span>Konsultasikan Kebutuhan Proyek</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </button>

            <a
              href="#portfolio"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs sm:text-sm font-semibold text-zinc-300 bg-white/[0.03] border border-white/[0.1] hover:border-white/[0.2] hover:bg-white/[0.06] hover:text-white active:scale-[0.97] transition-[background-color,border-color,color,transform] duration-150"
            >
              <span>Eksplorasi Karya Kami</span>
            </a>
          </motion.div>

        </div>

        {/* Studio Assurance Bar: Clean, open columns with subtle hairline top border (No Card Overload) */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.3, ease: EASE_OUT }}
          className="mt-20 pt-10 border-t border-white/[0.08]"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {pillars.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="space-y-2 group">
                  <div className="flex items-center gap-2 text-zinc-500 font-mono text-[11px]">
                    <span className="text-amber-400 font-bold">{item.number}</span>
                    <span className="w-1 h-1 rounded-full bg-zinc-700" />
                    <Icon className="w-3.5 h-3.5 text-zinc-400 group-hover:text-amber-400 transition-colors duration-150" />
                  </div>
                  <h3 className="text-sm font-semibold text-zinc-100 font-[family-name:var(--font-heading)]">
                    {item.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
