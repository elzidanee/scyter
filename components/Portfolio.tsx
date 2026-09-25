"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, CheckCircle2, X } from "lucide-react";

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
}


export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [modalProject, setModalProject] = useState<ProjectItem | null>(null);

  const projects: ProjectItem[] = [
    {
      id: "pos-system",
      category: "system",
      categoryLabel: "Custom System (POS)",
      title: "Sistem Kasir (POS) & Inventaris Toko",
      tagline: "Point of Sale Multi-Outlet dengan Cetak Struk & Laporan Keuangan",
      client: "Jaringan Retail & Cafe 5 Cabang",
      summary:
        "Sistem kasir berbasis web & tablet yang mempermudah kasir memproses pesanan cepat, scan barcode, sinkronisasi stok otomatis, dan rekap omzet harian.",
      features: [
        "Cetak Struk Thermal Bluetooth / USB",
        "Peringatan Stok Menipis & Opname Barang",
        "Multi-Metode Pembayaran (Cash, QRIS, Transfer)",
        "Laporan Laba Kotor & Bersih Otomatis",
      ],
      tech: "Next.js · PostgreSQL · Tailwind · Thermal SDK",
      image: "/images/system-pos.jpg",
    },
    {
      id: "company-cms",
      category: "web",
      categoryLabel: "Website & CMS",
      title: "Company Profile & Portal Berita CMS",
      tagline: "Website Korporasi Elegan dengan Panel Admin Pengelolaan Konten",
      client: "PT Mandiri Digital Solusi",
      summary:
        "Website profil perusahaan dengan tampilan visual modern, loading cepat, dan panel CMS untuk tim marketing mengunggah artikel, produk, dan portofolio.",
      features: [
        "Desain Eksklusif & Loading di Bawah 1 Detik",
        "Panel CMS Ramah Pengguna Tanpa Perlu Koding",
        "Formulir Kontak Terhubung Langsung ke WhatsApp & Email",
        "Teroptimasi SEO Google Page 1 Ready",
      ],
      tech: "React · Next.js · Node.js · Cloudflare",
      image: "/images/service-web.jpg",
    },
    {
      id: "lms-kursus",
      category: "system",
      categoryLabel: "Custom System (LMS)",
      title: "Platform Learning Management System",
      tagline: "Portal Kursus Online dengan Video Streaming & Sertifikat Otomatis",
      client: "Akademi Keterampilan Vokasi",
      summary:
        "Platform belajar daring interaktif di mana siswa dapat membeli kelas online, menonton video pembelajaran bertahap, mengerjakan kuis, dan download sertifikat.",
      features: [
        "Streaming Video Terproteksi Anti-Download",
        "Kuis Pilihan Ganda & Penilaian Otomatis",
        "Generate Sertifikat Kelulusan Ber-QR Code",
        "Integrasi Pembayaran Otomatis Midtrans",
      ],
      tech: "Next.js · PostgreSQL · Tailwind · AWS S3",
      image: "/images/system-lms.jpg",
    },
    {
      id: "mobile-order",
      category: "app",
      categoryLabel: "Mobile App",
      title: "Aplikasi Mobile Booking & Pemesanan",
      tagline: "Aplikasi Android & iOS untuk Reservasi & Notifikasi Pelanggan",
      client: "Layanan Jasa & Studio Perawatan",
      summary:
        "Aplikasi smartphone untuk pelanggan memilih jadwal booking terapis, melihat ketersediaan slot jam, serta mendapatkan reminder notifikasi push ke HP.",
      features: [
        "Kalender Booking & Slot Waktu Real-Time",
        "Push Notification Pengingat Jadwal",
        "Riwayat Pesanan & Loyalty Point",
        "Bisa Diinstall di Android & iOS",
      ],
      tech: "Flutter · Firebase · REST API",
      image: "/images/service-mobile.jpg",
    },
    {
      id: "pms-properti",
      category: "system",
      categoryLabel: "Custom System (PMS)",
      title: "Property Management System (PMS)",
      tagline: "Manajemen Sewa Properti, Kos & Pengingat Tagihan Bulanan",
      client: "Pengelola Kos & Hunian Modern",
      summary:
        "Sistem cerdas untuk memantau kamar kosong/terisi, mencatat kontrak penyewa, dan mengirim reminder tagihan sewa otomatis via WhatsApp.",
      features: [
        "Dashboard Status Kamar Kos & Okupansi",
        "Auto-Reminder Tagihan Sewa via WhatsApp",
        "Laporan Pengeluaran Operasional & Listrik",
        "Portal Khusus Penyewa untuk Bukti Transfer",
      ],
      tech: "Next.js · PostgreSQL · WA Gateway API",
      image: "/images/system-pms.jpg",
    },
    {
      id: "uiux-redesign",
      category: "uiux",
      categoryLabel: "UI/UX Design",
      title: "Redesign UI/UX Dashboard Manajemen",
      tagline: "Desain Antarmuka Modern, Bersih, dan Mudah Dipelajari",
      client: "Platform Logistik & Bisnis",
      summary:
        "Perombakan total antarmuka web dashboard lama yang rumit menjadi tampilan minimalis modern di Figma dengan alur pengguna yang intuitif.",
      features: [
        "Riset Alur Kerja Pengguna & Wireframing",
        "Interactive Clickable Prototype di Figma",
        "Desain Komponen Reusable Siap Koding",
        "Mendukung Tampilan Dark Mode & Light Mode",
      ],
      tech: "Figma · Design System · User Flow",
      image: "/images/service-uiux.jpg",
    },
  ];


  const categories = [
    { id: "all", label: "Semua Proyek" },
    { id: "web", label: "Website" },
    { id: "app", label: "Mobile App" },
    { id: "system", label: "Custom System (POS/CMS/LMS/PMS)" },
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
              Portofolio Pilihan
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-[family-name:var(--font-heading)]">
              Contoh Solusi yang <span className="gold-gradient-text">Telah Kami Bangun</span>
            </h2>
            <p className="text-xs sm:text-sm text-[#888888]">
              Beberapa gambaran implementasi sistem nyata untuk membantu operasional dan penjualan klien kami.
            </p>
          </div>

          {/* Filter Pills */}
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

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl bg-[#141414] border border-[#262626] hover:border-[#FFD700]/50 transition-all duration-300 flex flex-col overflow-hidden group hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(0,0,0,0.5)]"
            >
              {/* Project Photo */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/30 to-transparent" />
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded-md bg-black/60 backdrop-blur-sm text-[10px] font-semibold text-[#FFE873]">
                    {item.categoryLabel}
                  </span>
                  <span className="text-[11px] text-white/70 bg-black/50 backdrop-blur-sm px-2 py-0.5 rounded">{item.client}</span>
                </div>
              </div>

              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-base font-bold text-white group-hover:text-[#FFE873] transition-colors font-[family-name:var(--font-heading)]">
                  {item.title}
                </h3>
                <p className="text-xs text-[#888888] mt-2 leading-relaxed line-clamp-2">
                  {item.summary}
                </p>

                {/* Features Mini List */}
                <div className="mt-4 pt-3 border-t border-[#222222] space-y-1.5 flex-1">
                  {item.features.slice(0, 3).map((f, i) => (
                    <div key={i} className="flex items-start gap-1.5 text-xs text-[#CCCCCC]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#2ECC71] mt-0.5 shrink-0" />
                      <span className="line-clamp-1">{f}</span>
                    </div>
                  ))}
                </div>

              {/* Bottom Action */}
              <div className="mt-5 pt-3 border-t border-[#222222] flex items-center justify-between">
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

        {/* Modal Detail */}
        {modalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <div className="relative w-full max-w-lg rounded-2xl bg-[#141414] border border-[#2E2E2E] p-6 shadow-2xl space-y-4">
              <button
                onClick={() => setModalProject(null)}
                className="absolute top-4 right-4 p-1.5 rounded-lg bg-[#202020] text-[#888888] hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>

              <div>
                <span className="px-2.5 py-0.5 rounded-md bg-[#202020] text-xs font-semibold text-[#FFE873]">
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
                <div className="text-xs font-semibold text-white">Fitur Kunci yang Dibangun:</div>
                {modalProject.features.map((f, i) => (
                  <div key={i} className="flex items-start gap-1.5 text-xs text-[#CCCCCC]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#2ECC71] mt-0.5 shrink-0" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2 flex items-center justify-between">
                <span className="text-xs text-[#7A7A7A]">Tertarik membuat sistem seperti ini?</span>
                <button
                  onClick={() => {
                    setModalProject(null);
                    const el = document.getElementById("contact");
                    el?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="px-4 py-2 rounded-lg text-xs font-bold text-[#0D0D0D]"
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
