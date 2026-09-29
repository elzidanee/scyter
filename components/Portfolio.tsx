"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowRight, CheckCircle2, X, ExternalLink, Globe } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { MotionReveal } from "@/components/ui/motion-reveal";

interface ProjectItem {
  id: string;
  category: "web" | "app" | "system" | "uiux";
  categoryLabel: string;
  title: string;
  tagline: string;
  client: string;
  summary: string;
  features: string[];
  tech: string;
  image: string;
  accent: string;
  urlBar: string;
}

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [modalProject, setModalProject] = useState<ProjectItem | null>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (modalProject) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") setModalProject(null);
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = originalOverflow;
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [modalProject]);

  const projects: ProjectItem[] = [
    {
      id: "pos-system",
      category: "system",
      categoryLabel: "Custom System — POS",
      title: "Sistem Kasir (POS) & Inventaris Multi-Cabang",
      tagline: "Point of Sale retail & resto dengan cetak struk thermal, barcode scan, & rekap keuangan",
      client: "Retail & Cafe Chain",
      summary:
        "Sistem kasir berbasis web & tablet dengan pemrosesan transaksi sub-detik, sinkronisasi stok antar cabang otomatis, dan integrasi printer kasir thermal.",
      features: [
        "Cetak Struk Thermal Bluetooth / USB",
        "Peringatan Stok Menipis & Opname Barang",
        "Multi-Metode Pembayaran (Cash, QRIS, Kartu)",
        "Laporan Laba Rugi & Rekap Kas Harian",
      ],
      tech: "Next.js 16 · PostgreSQL · WebUSB API",
      accent: "#FFD700",
      urlBar: "pos.internal-retail.id",
      image: "/images/projects/pos-real.jpg",
    },
    {
      id: "company-cms",
      category: "web",
      categoryLabel: "Website & Headless CMS",
      title: "Enterprise Corporate Portal & CMS",
      tagline: "Website korporasi modern dengan loading instan dan panel admin publikasi konten",
      client: "PT Mandiri Digital Solusi",
      summary:
        "Portal korporasi berkinerja tinggi dengan skor Core Web Vitals 99+, panel CMS drag-and-drop untuk divisi marketing, dan integrasi WhatsApp CRM lead.",
      features: [
        "Skor Core Web Vitals 99+ & SEO Ready",
        "Panel CMS Mandiri Tanpa Koding",
        "Form Kontak Terenkripsi & Notif WA",
        "Multi-Language (ID / EN)",
      ],
      tech: "Next.js · Tailwind CSS · Supabase",
      accent: "#60A5FA",
      urlBar: "portal.mandirisolusi.co.id",
      image: "/images/projects/cms-real.jpg",
    },
    {
      id: "fitness-app",
      category: "app",
      categoryLabel: "Mobile App — Flutter",
      title: "Member App & Booking Studio Kebugaran",
      tagline: "Aplikasi Android & iOS untuk reservasi kelas, barcode absensi, & membership",
      client: "Aura Fitness Club",
      summary:
        "Aplikasi kebugaran mobile dengan integrasi payment gateway QRIS otomatis, push notification jadwal kelas, dan sistem loyalty poin member.",
      features: [
        "Booking Kelas Real-time & Kuota Otomatis",
        "QR Code Absensi Masuk Gate Studio",
        "Push Notification Pengingat Jadwal",
        "Payment Midtrans & Riwayat Transaksi",
      ],
      tech: "Flutter · Go Microservices · FCM",
      accent: "#34D399",
      urlBar: "app.aurafitness.id",
      image: "/images/projects/app-real.jpg",
    },
    {
      id: "hospital-pms",
      category: "system",
      categoryLabel: "Custom System — PMS",
      title: "Sistem Manajemen Kamar & Properti Kos/Hotel",
      tagline: "Monitoring okupansi sewa kamar, billing invoice otomatis, & rekap cashflow",
      client: "Urban Living Property Group",
      summary:
        "Sistem Property Management untuk mengelola 8 cabang kos eksklusif dan boutique hotel. Mengotomasi penagihan sewa bulanan dan histori pembayaran penghuni.",
      features: [
        "Kalender Visual Okupansi & Reservasi",
        "Auto-Generate Invoice Sewa Bulanan",
        "Integrasi Reminder Tagihan WhatsApp Bot",
        "Laporan Cash Flow & Pengeluaran Operasional",
      ],
      tech: "Next.js · Node.js · Redis · PostgreSQL",
      accent: "#C084FC",
      urlBar: "pms.urbanliving.id",
      image: "/images/projects/pms-real.jpg",
    },
    {
      id: "crypto-dashboard",
      category: "uiux",
      categoryLabel: "UI/UX & Fintech Web",
      title: "Fintech Analytics & Investment Dashboard",
      tagline: "Desain sistem antarmuka perdagangan aset & analitik portofolio berstandar institusi",
      client: "Nexa Digital Asset Fund",
      summary:
        "Perancangan antarmuka visual data-heavy dengan charting real-time, orderbook, dan kalkulator return portofolio menggunakan Figma Design Tokens.",
      features: [
        "Dark Mode Kustom & Ergonomi Visual Tinggi",
        "Design System 60+ Komponen Reusable",
        "Interactive High-Fidelity Prototype",
        "Handover Token CSS & Panduan Developer",
      ],
      tech: "Figma Tokens · React · TradingView Charts",
      accent: "#F59E0B",
      urlBar: "analytics.nexafund.com",
      image: "/images/projects/uiux-real.jpg",
    },
    {
      id: "fnb-lms",
      category: "system",
      categoryLabel: "Custom System — LMS",
      title: "E-Learning & Sertifikasi Barista Akademi",
      tagline: "Platform kelas video bertingkat dengan kuis interaktif & sertifikat otomatis",
      client: "Indo Barista Institute",
      summary:
        "Platform LMS edukasi untuk sertifikasi keahlian F&B. Dilengkapi sistem proteksi video pembelajaran, ujian bertingkat, dan verifikasi sertifikat ber-QR.",
      features: [
        "Streaming Video Terproteksi (Anti-Download)",
        "Ujian Pilihan Ganda & Skor Instan",
        "E-Sertifikat dengan Verifikasi QR Code",
        "Tracking Progress Belajar Setiap Siswa",
      ],
      tech: "Next.js · AWS S3 · PostgreSQL",
      accent: "#EC4899",
      urlBar: "academy.indobarista.com",
      image: "/images/projects/lms-real.jpg",
    },
  ];

  const categories = [
    { id: "all", label: "Semua Proyek" },
    { id: "system", label: "Custom System" },
    { id: "web", label: "Web Development" },
    { id: "app", label: "Mobile Apps" },
    { id: "uiux", label: "UI/UX Design" },
  ];

  const filtered =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section
      id="portfolio"
      className="py-16 sm:py-24 bg-[#09090B] relative overflow-hidden border-t border-white/[0.08]"
    >
      {/* Precision Background Grid Accent */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <MotionReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 pb-6 sm:mb-10 sm:pb-6 border-b border-white/[0.08]">
            <div className="max-w-2xl space-y-2">
              <span className="text-[10px] sm:text-[11px] uppercase font-mono tracking-widest text-amber-400 font-semibold flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span>SELECTED CASE STUDIES &amp; SYSTEMS</span>
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-[-0.03em] font-[family-name:var(--font-heading)] leading-snug">
                Karya Rekayasa <span className="gold-gradient-text">Software &amp; Solusi Nyata</span>
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
                Setiap proyek dirancang khusus dari nol untuk menjawab tantangan operasional dan mendorong pertumbuhan bisnis klien secara nyata.
              </p>
            </div>

            {/* Filter Segmented Control */}
            <div className="flex items-center overflow-x-auto no-scrollbar gap-1 p-1 rounded-xl bg-[#121215] border border-white/[0.08] shrink-0 max-w-full">
              {categories.map((c) => {
                const isActive = activeCategory === c.id;
                const count =
                  c.id === "all"
                    ? projects.length
                    : projects.filter((p) => p.category === c.id).length;

                return (
                  <button
                    key={c.id}
                    onClick={() => setActiveCategory(c.id)}
                    className={`relative px-3 py-1.5 rounded-lg text-xs font-medium active:scale-[0.98] transition-colors duration-150 cursor-pointer z-10 whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
                      isActive
                        ? "text-[#09090B] font-bold"
                        : "text-zinc-400 hover:text-zinc-200"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activePortfolioFilter"
                        className="absolute inset-0 bg-amber-400 rounded-lg shadow-sm -z-10"
                        transition={{ type: "spring", stiffness: 420, damping: 32 }}
                      />
                    )}
                    <span>{c.label}</span>
                    <span
                      className={`text-[10px] font-mono px-1.5 py-0.2 rounded ${
                        isActive
                          ? "bg-black/20 text-[#09090B]"
                          : "bg-white/[0.05] text-zinc-500"
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </MotionReveal>

        {/* Project Cards Grid with Clean Crossfade (No jittering/shaking) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -6 }}
            transition={{ duration: 0.16, ease: "easeOut" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
          >
            {filtered.map((item) => (
              <div
                key={item.id}
                onClick={() => setModalProject(item)}
                className="group rounded-xl bg-[#0F0F12] border border-white/[0.08] hover:border-white/[0.2] transition-[border-color,transform] duration-200 hover:-translate-y-1 flex flex-col overflow-hidden cursor-pointer"
              >
                {/* Visual Screenshot Area */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-950 border-b border-white/[0.06]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover object-top transition-transform duration-300 ease-out group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />

                  {/* Clean Ambient Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F12]/80 via-transparent to-transparent pointer-events-none" />

                  {/* Top Metadata Bar */}
                  <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between pointer-events-none">
                    <span className="px-2 py-0.5 rounded bg-black/70 backdrop-blur-md border border-white/10 font-mono text-[10px] text-zinc-300 flex items-center gap-1.5 truncate max-w-[70%]">
                      <Globe className="w-2.5 h-2.5 text-zinc-400 shrink-0" />
                      <span className="truncate">{item.urlBar}</span>
                    </span>
                    <span className="px-1.5 py-0.5 rounded text-[9px] font-mono font-medium bg-black/70 backdrop-blur-md border border-white/10 text-emerald-400 flex items-center gap-1 shrink-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span>LIVE</span>
                    </span>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3.5">
                  <div className="space-y-2">
                    {/* Eyebrow: Category & Client */}
                    <div className="flex items-center justify-between text-xs gap-2">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-amber-400/90 font-semibold truncate">
                        {item.categoryLabel}
                      </span>
                      <span className="text-[11px] font-mono text-zinc-500 truncate shrink-0">
                        {item.client}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-base font-bold text-white group-hover:text-amber-200 transition-colors duration-150 font-[family-name:var(--font-heading)] leading-snug line-clamp-2">
                      {item.title}
                    </h3>

                    {/* Tagline */}
                    <p className="text-xs text-zinc-400 leading-relaxed font-normal line-clamp-2">
                      {item.tagline}
                    </p>
                  </div>

                  {/* Bottom Area: Tech Stack Pills & Action Link */}
                  <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between gap-2">
                    <div className="flex flex-wrap items-center gap-1">
                      {item.tech.split("·").slice(0, 2).map((techItem, idx) => (
                        <span
                          key={idx}
                          className="px-1.5 py-0.5 rounded bg-white/[0.03] border border-white/[0.06] text-[10px] font-mono text-zinc-400"
                        >
                          {techItem.trim()}
                        </span>
                      ))}
                      {item.tech.split("·").length > 2 && (
                        <span className="px-1 py-0.5 rounded bg-white/[0.02] border border-white/[0.04] text-[9px] font-mono text-zinc-500">
                          +{item.tech.split("·").length - 2}
                        </span>
                      )}
                    </div>

                    <span className="text-[11px] font-semibold text-zinc-300 group-hover:text-amber-300 flex items-center gap-1 shrink-0 transition-colors duration-150">
                      <span>Detail</span>
                      <ArrowRight className="w-3 h-3 transition-transform duration-150 group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Modal Detail View */}
        <AnimatePresence>
          {modalProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.16, ease: "easeOut" }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
              onClick={() => setModalProject(null)}
            >
              <motion.div
                initial={
                  shouldReduceMotion
                    ? { opacity: 0 }
                    : { opacity: 0, scale: 0.97, y: 8 }
                }
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={
                  shouldReduceMotion
                    ? { opacity: 0 }
                    : { opacity: 0, scale: 0.97, y: 8 }
                }
                transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-xl max-h-[90dvh] overflow-y-auto overscroll-contain rounded-2xl bg-[#0F0F12] border border-white/[0.1] p-5 sm:p-6 shadow-[0_24px_60px_rgba(0,0,0,0.85)] space-y-4"
              >
                {/* Close Button */}
                <button
                  onClick={() => setModalProject(null)}
                  className="absolute top-4 right-4 p-2 rounded-lg bg-white/[0.04] border border-white/[0.08] text-zinc-400 hover:text-white hover:bg-white/[0.08] active:scale-[0.95] transition-[background-color,color,transform] duration-150 cursor-pointer z-10"
                  aria-label="Tutup modal"
                >
                  <X className="w-4 h-4" />
                </button>

                {/* Screenshot in Modal */}
                <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden bg-zinc-950 border border-white/[0.06]">
                  <Image
                    src={modalProject.image}
                    alt={modalProject.title}
                    fill
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F12]/60 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Modal Header */}
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-xs pr-8">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-amber-400 font-semibold">
                      {modalProject.categoryLabel}
                    </span>
                    <span className="text-xs font-mono text-zinc-400">
                      Klien: {modalProject.client}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white font-[family-name:var(--font-heading)] leading-snug">
                    {modalProject.title}
                  </h3>

                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {modalProject.tagline}
                  </p>
                </div>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
                  {modalProject.summary}
                </p>

                {/* Key Features List */}
                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-2">
                  <span className="text-[10px] font-bold text-zinc-200 uppercase tracking-wider font-mono block">
                    Spesifikasi Fitur Utama:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                    {modalProject.features.map((f, i) => (
                      <div key={i} className="flex items-start gap-1.5 text-xs text-zinc-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 mt-0.5 shrink-0" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack Details */}
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
                  <span className="text-zinc-500 uppercase tracking-wider text-[10px]">
                    Teknologi:
                  </span>
                  <div className="flex flex-wrap items-center gap-1.5">
                    {modalProject.tech.split("·").map((techItem, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.08] text-zinc-200 text-[10px]"
                      >
                        {techItem.trim()}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Modal Action CTA */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-white/[0.06]">
                  <span className="text-xs text-zinc-400">
                    Tertarik membangun sistem dengan spesifikasi serupa?
                  </span>
                  <a
                    href="#contact"
                    onClick={() => setModalProject(null)}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-[#09090B] font-bold text-xs hover:brightness-105 active:scale-[0.97] transition-[filter,transform] duration-150 cursor-pointer shadow-sm shrink-0"
                    style={{
                      background: "linear-gradient(180deg, #FFFCE6 0%, #FFE566 45%, #FFD700 100%)",
                    }}
                  >
                    <span>Konsultasikan Proyek Serupa</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
