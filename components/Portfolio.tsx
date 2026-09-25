"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, CheckCircle2, X, ImageIcon } from "lucide-react";

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
  // Ganti dengan path screenshot project asli kamu di public/images/projects/
  image?: string;
  // Warna accent unik per project (fallback jika belum ada foto)
  accent: string;
}

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [modalProject, setModalProject] = useState<ProjectItem | null>(null);

  const projects: ProjectItem[] = [
    {
      id: "pos-system",
      category: "system",
      categoryLabel: "Custom System — POS",
      title: "Sistem Kasir (POS) & Inventaris",
      tagline: "Point of Sale multi-outlet dengan cetak struk & laporan keuangan",
      client: "Retail & Cafe · 5 Cabang",
      summary:
        "Sistem kasir berbasis web & tablet: proses pesanan cepat, scan barcode, sinkronisasi stok otomatis, dan rekap omzet harian.",
      features: [
        "Cetak Struk Thermal Bluetooth / USB",
        "Peringatan Stok Menipis & Opname Barang",
        "Multi-Metode Pembayaran (Cash, QRIS, Transfer)",
        "Laporan Laba Kotor & Bersih Otomatis",
      ],
      tech: "Next.js · PostgreSQL · Thermal SDK",
      accent: "#D9A900",
      // image: "/images/projects/pos-screenshot.jpg",
    },
    {
      id: "company-cms",
      category: "web",
      categoryLabel: "Website & CMS",
      title: "Company Profile & Portal CMS",
      tagline: "Website korporasi elegan dengan panel admin pengelolaan konten",
      client: "PT Mandiri Digital Solusi",
      summary:
        "Website profil perusahaan dengan tampilan modern, loading di bawah 1 detik, dan panel CMS untuk tim marketing.",
      features: [
        "Desain Eksklusif & Loading < 1 Detik",
        "Panel CMS Tanpa Koding",
        "Form Kontak → WhatsApp & Email",
        "SEO Google Page 1 Ready",
      ],
      tech: "Next.js · Node.js · Cloudflare",
      accent: "#5B7CF6",
      // image: "/images/projects/cms-screenshot.jpg",
    },
    {
      id: "lms-kursus",
      category: "system",
      categoryLabel: "Custom System — LMS",
      title: "Learning Management System",
      tagline: "Portal kursus online dengan video streaming & sertifikat otomatis",
      client: "Akademi Keterampilan Vokasi",
      summary:
        "Platform belajar daring: kelas online, video bertahap, kuis otomatis, dan sertifikat QR code.",
      features: [
        "Streaming Video Terproteksi",
        "Kuis & Penilaian Otomatis",
        "Sertifikat Kelulusan Ber-QR Code",
        "Integrasi Midtrans Payment",
      ],
      tech: "Next.js · PostgreSQL · AWS S3",
      accent: "#2ECC71",
      // image: "/images/projects/lms-screenshot.jpg",
    },
    {
      id: "mobile-order",
      category: "app",
      categoryLabel: "Mobile App",
      title: "Aplikasi Booking & Pemesanan",
      tagline: "Aplikasi Android & iOS untuk reservasi & notifikasi pelanggan",
      client: "Studio & Layanan Jasa",
      summary:
        "Aplikasi booking jadwal dengan kalender slot real-time, push notification pengingat, dan riwayat loyalty point.",
      features: [
        "Kalender Booking & Slot Real-Time",
        "Push Notification Pengingat",
        "Riwayat Pesanan & Loyalty Point",
        "Android & iOS",
      ],
      tech: "Flutter · Firebase · REST API",
      accent: "#E74C3C",
      // image: "/images/projects/mobile-screenshot.jpg",
    },
    {
      id: "pms-properti",
      category: "system",
      categoryLabel: "Custom System — PMS",
      title: "Property Management System",
      tagline: "Manajemen sewa properti, kos & reminder tagihan otomatis",
      client: "Pengelola Kos & Hunian",
      summary:
        "Sistem pantau kamar kosong/terisi, kontrak penyewa, dan reminder tagihan sewa via WhatsApp.",
      features: [
        "Dashboard Kamar & Okupansi",
        "Auto-Reminder Tagihan via WhatsApp",
        "Laporan Operasional & Listrik",
        "Portal Penyewa Upload Bukti Transfer",
      ],
      tech: "Next.js · PostgreSQL · WA Gateway",
      accent: "#9B59B6",
      // image: "/images/projects/pms-screenshot.jpg",
    },
    {
      id: "uiux-redesign",
      category: "uiux",
      categoryLabel: "UI/UX Design",
      title: "Redesign Dashboard Manajemen",
      tagline: "Antarmuka modern, bersih, dan intuitif untuk pengguna bisnis",
      client: "Platform Logistik",
      summary:
        "Perombakan total dashboard lama menjadi tampilan minimalis modern di Figma dengan alur pengguna yang intuitif.",
      features: [
        "Wireframing & User Flow",
        "Interactive Prototype Figma",
        "Design System Siap Koding",
        "Dark Mode & Light Mode",
      ],
      tech: "Figma · Design Tokens · Prototype",
      accent: "#F39C12",
      // image: "/images/projects/uiux-screenshot.jpg",
    },
  ];

  const categories = [
    { id: "all", label: "Semua" },
    { id: "web", label: "Website" },
    { id: "app", label: "Mobile App" },
    { id: "system", label: "Custom System" },
    { id: "uiux", label: "UI/UX Design" },
  ];

  const filtered =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 bg-[#0D0D0D] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div className="space-y-2 max-w-xl">
            <span className="text-xs uppercase font-bold tracking-widest text-[#FFD700]">
              Portofolio
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-[family-name:var(--font-heading)]">
              Solusi yang <span className="gold-gradient-text">Telah Kami Bangun</span>
            </h2>
            <p className="text-xs sm:text-sm text-[#888888]">
              Sistem nyata yang berjalan di bisnis klien kami.
            </p>
          </div>

          {/* Filter */}
          <div className="flex flex-wrap gap-1.5 self-start sm:self-end">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setActiveCategory(c.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  activeCategory === c.id
                    ? "bg-[#FFE873] text-[#0D0D0D]"
                    : "bg-[#181818] text-[#888888] hover:text-white border border-[#2A2A2A]"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl bg-[#141414] border border-[#262626] hover:border-[#FFD700]/50 transition-all duration-300 flex flex-col overflow-hidden group hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(0,0,0,0.5)]"
            >
              {/* Image area — replace with real screenshot or keep elegant placeholder */}
              <div className="relative h-48 overflow-hidden">
                {item.image ? (
                  <>
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent" />
                  </>
                ) : (
                  /* Elegant placeholder — hapus ini setelah kamu taruh screenshot asli */
                  <div
                    className="absolute inset-0 flex flex-col items-center justify-center"
                    style={{
                      background: `radial-gradient(ellipse at 60% 40%, ${item.accent}18 0%, transparent 70%), linear-gradient(135deg, #161616 0%, #1C1C1C 100%)`,
                    }}
                  >
                    {/* Grid lines accent */}
                    <div
                      className="absolute inset-0 opacity-[0.06]"
                      style={{
                        backgroundImage: `linear-gradient(${item.accent} 1px, transparent 1px), linear-gradient(90deg, ${item.accent} 1px, transparent 1px)`,
                        backgroundSize: "28px 28px",
                      }}
                    />
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center mb-2 border"
                      style={{ borderColor: `${item.accent}40`, background: `${item.accent}10` }}
                    >
                      <ImageIcon className="w-5 h-5" style={{ color: item.accent }} />
                    </div>
                    <span className="text-[11px] font-medium" style={{ color: `${item.accent}99` }}>
                      Screenshot project akan ditampilkan di sini
                    </span>
                  </div>
                )}

                {/* Badges on top */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                  <span
                    className="px-2.5 py-0.5 rounded-md text-[10px] font-bold"
                    style={{
                      background: `${item.accent}22`,
                      border: `1px solid ${item.accent}44`,
                      color: item.accent,
                    }}
                  >
                    {item.categoryLabel}
                  </span>
                  <span className="text-[10px] text-white/60 bg-black/50 backdrop-blur-sm px-2 py-0.5 rounded font-medium">
                    {item.client}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-sm font-bold text-white group-hover:text-[#FFE873] transition-colors font-[family-name:var(--font-heading)] leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-[#888888] mt-1.5 leading-relaxed line-clamp-2">
                  {item.tagline}
                </p>

                {/* Feature bullets */}
                <div className="mt-4 pt-3 border-t border-[#222222] space-y-1.5 flex-1">
                  {item.features.slice(0, 3).map((f, i) => (
                    <div key={i} className="flex items-start gap-1.5 text-xs text-[#CCCCCC]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#2ECC71] mt-0.5 shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>

                {/* Bottom */}
                <div className="mt-4 pt-3 border-t border-[#222222] flex items-center justify-between">
                  <span className="text-[10px] font-mono text-[#7A7A7A] truncate max-w-[170px]">
                    {item.tech}
                  </span>
                  <button
                    onClick={() => setModalProject(item)}
                    className="text-xs font-semibold text-white group-hover:text-[#FFE873] flex items-center gap-1 cursor-pointer"
                  >
                    <span>Detail</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {modalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <div className="relative w-full max-w-lg rounded-2xl bg-[#141414] border border-[#2E2E2E] p-6 shadow-2xl space-y-4">
              <button
                onClick={() => setModalProject(null)}
                className="absolute top-4 right-4 p-1.5 rounded-lg bg-[#202020] text-[#888888] hover:text-white cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              <div>
                <span
                  className="px-2.5 py-0.5 rounded-md text-xs font-bold"
                  style={{
                    background: `${modalProject.accent}22`,
                    border: `1px solid ${modalProject.accent}44`,
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

              <div className="p-3.5 rounded-xl bg-[#1A1A1A] border border-[#262626] space-y-2">
                <div className="text-xs font-semibold text-white mb-1">Fitur yang Dibangun:</div>
                {modalProject.features.map((f, i) => (
                  <div key={i} className="flex items-start gap-1.5 text-xs text-[#CCCCCC]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#2ECC71] mt-0.5 shrink-0" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2 flex items-center justify-between">
                <span className="text-xs text-[#7A7A7A]">Tertarik sistem serupa?</span>
                <button
                  onClick={() => {
                    setModalProject(null);
                    const el = document.getElementById("contact");
                    el?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="px-4 py-2 rounded-lg text-xs font-bold text-[#0D0D0D] cursor-pointer"
                  style={{
                    background: "linear-gradient(180deg, #FFFBE6 0%, #FFE873 40%, #FFD700 100%)",
                  }}
                >
                  Konsultasikan Sekarang
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
