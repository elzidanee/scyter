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
    <section id="portfolio" className="py-24 bg-[#0A0A0A] relative overflow-hidden">
      {/* Precision Grid Accent */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f12_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f12_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#141414] border border-[#242424] text-[11px] font-mono text-[#D4AF37] mb-2.5">
              <Sparkles className="w-3 h-3 text-[#FFD700]" />
              <span>SELECTED CASE STUDIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-[family-name:var(--font-heading)]">
              Karya Rekayasa <span className="gold-gradient-text">Software & Solusi Nyata</span>
            </h2>
            <p className="text-xs sm:text-sm text-[#888888] mt-2 max-w-xl">
              Setiap proyek dirancang khusus dari nol untuk menjawab tantangan operasional dan pertumbuhan bisnis klien kami.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-[#121212] border border-[#222222]">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setActiveCategory(c.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  activeCategory === c.id
                    ? "bg-[#FFE873] text-[#0D0D0D] shadow-sm font-bold"
                    : "text-[#888888] hover:text-white"
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
              className="rounded-2xl bg-[#121212] border border-[#222222] hover:border-[#FFD700]/50 transition-all duration-300 flex flex-col overflow-hidden group hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.6)]"
            >
              {/* Real Photo Area with Clean Browser Window Chrome */}
              <div className="relative h-56 overflow-hidden bg-[#0D0D0D]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                
                {/* Gradient Fade Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/20 to-black/40" />

                {/* Top Window Bar Pill */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                  <div className="px-2.5 py-1 rounded-lg bg-black/75 backdrop-blur-md border border-white/10 font-mono text-[10px] text-[#A6A6A6] flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2ECC71]" />
                    <span>{item.urlBar}</span>
                  </div>
                  <span
                    className="text-[10px] font-mono px-2 py-0.5 rounded-md font-bold bg-black/75 backdrop-blur-md border"
                    style={{
                      borderColor: `${item.accent}40`,
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
                    <span className="text-[10px] font-mono text-[#666666]">
                      {item.client}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white group-hover:text-[#FFE873] transition-colors font-[family-name:var(--font-heading)] leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#888888] mt-2 leading-relaxed line-clamp-2">
                    {item.tagline}
                  </p>

                  {/* Key Features Bullet List */}
                  <div className="mt-4 pt-4 border-t border-[#1C1C1C] space-y-1.5">
                    {item.features.slice(0, 3).map((f, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-[#A6A6A6]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#2ECC71] mt-0.5 shrink-0" />
                        <span className="line-clamp-1">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Bar */}
                <div className="mt-5 pt-4 border-t border-[#1C1C1C] flex items-center justify-between">
                  <span className="text-[11px] font-mono text-[#666666] truncate max-w-[180px]">
                    {item.tech}
                  </span>
                  <button
                    onClick={() => setModalProject(item)}
                    className="text-xs font-bold text-[#FFD700] hover:text-[#FFE873] flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>Detail Spek</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Modal Detail View */}
        {modalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
            <div className="relative w-full max-w-lg rounded-2xl bg-[#141414] border border-[#2B2B2B] p-6 sm:p-7 shadow-2xl space-y-5">
              <button
                onClick={() => setModalProject(null)}
                className="absolute top-5 right-5 p-1.5 rounded-lg bg-[#202020] text-[#888888] hover:text-white cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="relative h-44 rounded-xl overflow-hidden mb-2">
                <Image
                  src={modalProject.image}
                  alt={modalProject.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent" />
              </div>

              <div>
                <span
                  className="px-2.5 py-1 rounded text-xs font-mono font-bold inline-block"
                  style={{
                    background: `${modalProject.accent}20`,
                    border: `1px solid ${modalProject.accent}40`,
                    color: modalProject.accent,
                  }}
                >
                  {modalProject.categoryLabel}
                </span>
                <h3 className="text-xl font-bold text-white mt-2 font-[family-name:var(--font-heading)]">
                  {modalProject.title}
                </h3>
                <p className="text-xs text-[#888888] mt-1">{modalProject.tagline}</p>
              </div>

              <p className="text-xs sm:text-sm text-[#CCCCCC] leading-relaxed">
                {modalProject.summary}
              </p>

              <div className="p-4 rounded-xl bg-[#181818] border border-[#262626] space-y-2.5">
                <div className="text-xs font-bold text-white uppercase tracking-wider font-mono">
                  Spesifikasi Fitur Utama:
                </div>
                {modalProject.features.map((f, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-[#D1D1D1]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#2ECC71] mt-0.5 shrink-0" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>

              <div className="p-3 rounded-lg bg-[#111111] border border-[#222222] flex items-center justify-between text-xs font-mono text-[#888888]">
                <span>TECH STACK:</span>
                <span className="text-white">{modalProject.tech}</span>
              </div>

              <div className="pt-2 flex items-center justify-between">
                <span className="text-xs text-[#7A7A7A]">Ingin sistem serupa?</span>
                <a
                  href="#contact"
                  onClick={() => setModalProject(null)}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#FFD700] text-[#0D0D0D] font-bold text-xs hover:bg-[#FFE873] transition-all cursor-pointer"
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
