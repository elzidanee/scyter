"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
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

  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? ["0%", "0%"] : ["0%", "20%"]);
  const glowY = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? ["0%", "0%"] : ["0%", "30%"]);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0.2]);

  const EASE_OUT = [0.23, 1, 0.32, 1] as const;

  return (
    <section ref={sectionRef} className="relative pt-32 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-[#09090B]">
      {/* Precision Engineering Grid Background with subtle scroll parallax */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_35%,#000_70%,transparent_100%)] pointer-events-none"
      />

      {/* Subtle Ambient Glow that drifts smoothly with scroll */}
      <motion.div
        style={{ y: glowY, opacity: glowOpacity }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[640px] h-[260px] bg-amber-400/[0.04] blur-[150px] rounded-full pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">

          {/* Left Column: Clear Value Proposition with Emil Kowalski Stagger */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.45, ease: EASE_OUT }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            
            {/* Status Pill with pulse ring */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05, ease: EASE_OUT }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs shadow-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-50" />
                <span className="relative w-2 h-2 rounded-full bg-amber-400" />
              </span>
              <span className="font-mono text-amber-300 font-semibold text-[11px] tracking-wider uppercase">
                SCYTERCORP // SOFTWARE HOUSE &amp; SYSTEMS
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: EASE_OUT }}
              className="text-3xl sm:text-5xl lg:text-[54px] font-bold tracking-tight text-white leading-[1.12] font-[family-name:var(--font-heading)]"
            >
              Membangun Solusi{" "}
              <span className="gold-gradient-text">Web, Mobile &amp; Sistem Bisnis</span>{" "}
              Berkualitas Tinggi
            </motion.h1>

            {/* Value Proposition */}
            <motion.p
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.17, ease: EASE_OUT }}
              className="text-sm sm:text-base text-zinc-400 leading-relaxed max-w-xl mx-auto lg:mx-0 font-normal"
            >
              ScyterCorp merekayasa produk digital berkinerja tinggi untuk pelaku usaha, startup, dan korporasi: Website modern, aplikasi Mobile (iOS/Android), UI/UX profesional, hingga sistem kustom seperti <strong className="text-zinc-200 font-semibold">POS, CMS, LMS, dan PMS</strong> dengan kepemilikan penuh 100%.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.24, ease: EASE_OUT }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2"
            >
              <button
                onClick={
                  onOpenConsultation ||
                  (() => {
                    const el = document.getElementById("contact");
                    el?.scrollIntoView({ behavior: "smooth" });
                  })
                }
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-[#09090B] transition-[transform,filter] duration-150 hover:brightness-105 active:scale-[0.97] shadow-[0_2px_18px_rgba(255,215,0,0.35),inset_0_1px_0_0_rgba(255,255,255,0.7)] cursor-pointer group"
                style={{
                  background: "linear-gradient(180deg, #FFFCE6 0%, #FFE566 45%, #FFD700 100%)",
                }}
              >
                <span>Konsultasikan Kebutuhan Proyek</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </button>

              <a
                href="#portfolio"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-xs sm:text-sm font-semibold text-zinc-200 bg-white/[0.03] border border-white/[0.1] hover:border-white/[0.2] hover:bg-white/[0.06] hover:text-white active:scale-[0.97] transition-[background-color,border-color,color,transform] duration-150"
              >
                <span>Lihat Portofolio</span>
              </a>
            </motion.div>

            {/* Service Tags */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3, ease: EASE_OUT }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-3 text-xs"
            >
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.02] border border-white/[0.06] text-zinc-400">
                <Globe className="w-3.5 h-3.5 text-amber-400" />
                Web App
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.02] border border-white/[0.06] text-zinc-400">
                <Smartphone className="w-3.5 h-3.5 text-amber-400" />
                Mobile App
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.02] border border-white/[0.06] text-zinc-400">
                <Layout className="w-3.5 h-3.5 text-amber-400" />
                UI/UX Design
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-400/[0.04] border border-amber-400/25 text-amber-200">
                <Layers className="w-3.5 h-3.5 text-amber-400" />
                Sistem Kustom (POS / CMS / LMS / PMS)
              </span>
            </motion.div>
          </motion.div>

          {/* Right Column: Clean Professional Standards Card (Anti AI Slop) */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2, ease: EASE_OUT }}
            className="lg:col-span-5"
          >
            <div className="rounded-2xl bg-[#0F0F12] border border-white/[0.08] p-6 sm:p-7 space-y-6 shadow-[0_20px_50px_rgba(0,0,0,0.65),inset_0_1px_0_0_rgba(255,255,255,0.06)] relative overflow-hidden">
              
              {/* Card Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.06]">
                <div>
                  <span className="text-[10px] font-mono text-amber-400 uppercase tracking-wider block font-semibold">
                    STANDAR REKAYASA SISTEM
                  </span>
                  <h3 className="text-base font-bold text-white font-[family-name:var(--font-heading)]">
                    Komitmen Kualitas ScyterCorp
                  </h3>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-medium text-emerald-400 bg-emerald-400/10 px-2.5 py-1 rounded-full border border-emerald-400/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>Siap Rilis</span>
                </div>
              </div>

              {/* 4 Crisp Deliverable Pillars with stagger */}
              <div className="space-y-3.5">
                {pillars.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={idx}
                      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: 12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.35, delay: 0.3 + idx * 0.06, ease: EASE_OUT }}
                      className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-start gap-3.5 hover:border-amber-400/30 hover:bg-white/[0.04] transition-[border-color,background-color] duration-200"
                    >
                      <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center shrink-0 text-amber-400 mt-0.5 shadow-sm">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="space-y-0.5">
                        <h4 className="text-xs sm:text-[13px] font-semibold text-zinc-100">
                          {item.title}
                        </h4>
                        <p className="text-[11px] sm:text-xs text-zinc-400 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Card Footer Assurance */}
              <div className="pt-2 flex items-center justify-between text-[11px] text-zinc-500 font-mono border-t border-white/[0.06]">
                <span>Software House · Malang, ID</span>
                <span className="text-amber-400 font-medium">100% Hak Milik Klien</span>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
