"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, CheckCircle2, X, ExternalLink, Sparkles } from "lucide-react";

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
    { id: "system", label: "Custom System (POS/PMS/LMS)" },
    { id: "web", label: "Web Development" },
    { id: "app", label: "Mobile Apps" },
    { id: "uiux", label: "UI/UX Design" },
  ];

  const filtered =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 bg-[#09090B] relative overflow-hidden border-t border-white/[0.06]">
      {/* Precision Grid Accent */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-[11px] font-mono text-amber-300 mb-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              <span>SELECTED CASE STUDIES & SYSTEMS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-[family-name:var(--font-heading)]">
              Karya Rekayasa <span className="gold-gradient-text">Software & Solusi Nyata</span>
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 mt-2 max-w-xl leading-relaxed">
              Setiap proyek dirancang khusus dari nol untuk menjawab tantangan operasional dan mendorong pertumbuhan bisnis klien secara nyata.
            </p>
          </div>

          {/* Category Filter Segmented Control */}
          <div className="flex flex-wrap gap-1 p-1 rounded-xl bg-[#121215] border border-white/[0.08]">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setActiveCategory(c.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  activeCategory === c.id
                    ? "bg-amber-400 text-[#09090B] shadow-sm font-bold"
                    : "text-zinc-400 hover:text-white hover:bg-white/[0.04]"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid with Real Photos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl bg-[#0F0F12] border border-white/[0.08] hover:border-amber-400/40 transition-all duration-300 flex flex-col overflow-hidden group hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(0,0,0,0.7),inset_0_1px_0_0_rgba(255,255,255,0.06)]"
            >
              {/* Real Photo Area with Clean Browser Window Chrome */}
              <div className="relative h-56 overflow-hidden bg-zinc-950">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                
                {/* Gradient Fade Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F12] via-[#0F0F12]/20 to-black/40" />

                {/* Top Window Bar Pill */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                  <div className="px-2.5 py-1 rounded-lg bg-black/80 backdrop-blur-md border border-white/10 font-mono text-[10px] text-zinc-300 flex items-center gap-1.5 shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>{item.urlBar}</span>
                  </div>
                  <span
                    className="text-[10px] font-mono px-2 py-0.5 rounded-md font-bold bg-black/80 backdrop-blur-md border shadow-sm"
                    style={{
                      borderColor: `${item.accent}50`,
                      color: item.accent,
                    }}
                  >
                    LIVE
                  </span>
                </div>
              </div>

              {/* Text Information Area */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className="text-[10px] font-mono font-bold px-2 py-0.5 rounded"
                      style={{
                        background: `${item.accent}15`,
                        color: item.accent,
                        border: `1px solid ${item.accent}30`,
                      }}
                    >
                      {item.categoryLabel}
                    </span>
                    <span className="text-[10px] font-mono text-zinc-500">
                      {item.client}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white group-hover:text-amber-200 transition-colors font-[family-name:var(--font-heading)] leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-zinc-400 mt-2 leading-relaxed line-clamp-2">
                    {item.tagline}
                  </p>

                  {/* Key Features Bullet List */}
                  <div className="mt-4 pt-4 border-t border-white/[0.06] space-y-1.5">
                    {item.features.slice(0, 3).map((f, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-zinc-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                        <span className="line-clamp-1">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Bar */}
                <div className="mt-5 pt-4 border-t border-white/[0.06] flex items-center justify-between">
                  <span className="text-[11px] font-mono text-zinc-500 truncate max-w-[180px]">
                    {item.tech}
                  </span>
                  <button
                    onClick={() => setModalProject(item)}
                    className="text-xs font-bold text-amber-300 hover:text-amber-200 flex items-center gap-1.5 cursor-pointer group/btn"
                  >
                    <span>Detail Spek</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5" />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Modal Detail View */}
        {modalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <div className="relative w-full max-w-lg rounded-2xl bg-[#0F0F12] border border-white/[0.1] p-6 sm:p-7 shadow-[0_24px_60px_rgba(0,0,0,0.85),inset_0_1px_0_0_rgba(255,255,255,0.08)] space-y-5">
              <button
                onClick={() => setModalProject(null)}
                className="absolute top-5 right-5 p-2 rounded-lg bg-white/[0.04] border border-white/[0.08] text-zinc-400 hover:text-white hover:bg-white/[0.08] transition-colors cursor-pointer"
                aria-label="Tutup modal"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="relative h-44 rounded-xl overflow-hidden mb-2 bg-zinc-950">
                <Image
                  src={modalProject.image}
                  alt={modalProject.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F12] via-transparent to-transparent" />
              </div>

              <div>
                <span
                  className="px-2.5 py-1 rounded text-xs font-mono font-bold inline-block"
                  style={{
                    background: `${modalProject.accent}15`,
                    border: `1px solid ${modalProject.accent}30`,
                    color: modalProject.accent,
                  }}
                >
                  {modalProject.categoryLabel}
                </span>
                <h3 className="text-xl font-bold text-white mt-2 font-[family-name:var(--font-heading)]">
                  {modalProject.title}
                </h3>
                <p className="text-xs text-zinc-400 mt-1 leading-relaxed">{modalProject.tagline}</p>
              </div>

              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
                {modalProject.summary}
              </p>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-2.5">
                <div className="text-xs font-bold text-white uppercase tracking-wider font-mono">
                  Spesifikasi Fitur Utama:
                </div>
                {modalProject.features.map((f, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-zinc-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>

              <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.05] flex items-center justify-between text-xs font-mono text-zinc-400">
                <span>TECH STACK:</span>
                <span className="text-zinc-200">{modalProject.tech}</span>
              </div>

              <div className="pt-2 flex items-center justify-between">
                <span className="text-xs text-zinc-400">Ingin sistem serupa?</span>
                <a
                  href="#contact"
                  onClick={() => setModalProject(null)}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-[#09090B] font-bold text-xs hover:brightness-105 transition-all cursor-pointer shadow-sm"
                  style={{
                    background: "linear-gradient(180deg, #FFFCE6 0%, #FFE566 45%, #FFD700 100%)",
                  }}
                >
                  <span>Konsultasi Proyek Ini</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
