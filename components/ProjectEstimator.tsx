"use client";

import { useState, useMemo } from "react";
import {
  Globe,
  Smartphone,
  LayoutTemplate,
  CreditCard,
  Layers,
  GraduationCap,
  Building,
  Check,
  Send,
  ArrowRight,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { MotionReveal } from "@/components/ui/motion-reveal";

// ─── Data Layanan (Bahasa Manusiawi & Jelas) ──────────────────────────────────

interface ServiceOption {
  id: string;
  title: string;
  subtitle: string;
  icon: typeof Globe;
  baseWeeks: number;
  baseCost: number;
  workflow: string[];
  compatibleAddons: string[];
}

const serviceOptions: ServiceOption[] = [
  {
    id: "web",
    title: "Website & Web App",
    subtitle: "Company profile, landing page, portal berita, atau aplikasi web",
    icon: Globe,
    baseWeeks: 2,
    baseCost: 4,
    workflow: ["Desain UI & Struktur Halaman", "Pembuatan Frontend & Backend", "Testing & Peluncuran"],
    compatibleAddons: ["payment", "wa", "admin", "cloud"],
  },
  {
    id: "mobile",
    title: "Aplikasi Android & iOS",
    subtitle: "Aplikasi smartphone dengan Flutter untuk dua platform sekaligus",
    icon: Smartphone,
    baseWeeks: 4,
    baseCost: 10,
    workflow: ["Perancangan Tampilan & Alur", "Koding Aplikasi Mobile & API", "Uji Coba & Rilis ke Store"],
    compatibleAddons: ["payment", "wa", "admin", "store"],
  },
  {
    id: "uiux",
    title: "Desain UI/UX & Prototipe",
    subtitle: "Riset pengguna, desain antarmuka Figma & prototipe interaktif",
    icon: LayoutTemplate,
    baseWeeks: 2,
    baseCost: 3,
    workflow: ["Wireframing & Riset Alur", "Desain Visual & Komponen Figma", "Prototipe Siap Uji"],
    compatibleAddons: ["admin"],
  },
  {
    id: "pos",
    title: "Sistem Kasir (POS)",
    subtitle: "Aplikasi kasir toko/restoran, cetak struk, dan manajemen stok",
    icon: CreditCard,
    baseWeeks: 3,
    baseCost: 7,
    workflow: ["Penyesuaian Alur Kasir", "Pengerjaan Sistem & Hardware Struk", "Uji Coba Lapangan & Training"],
    compatibleAddons: ["payment", "wa", "admin", "cloud"],
  },
  {
    id: "cms",
    title: "Portal & Custom CMS",
    subtitle: "Situs pengelolaan artikel, berita, produk, dan media perusahaan",
    icon: Layers,
    baseWeeks: 3,
    baseCost: 6,
    workflow: ["Penyusunan Struktur Konten", "Pengerjaan Panel Kelola Konten", "Setup Server & Rilis"],
    compatibleAddons: ["wa", "admin", "cloud"],
  },
  {
    id: "lms",
    title: "Platform Kursus & Belajar (LMS)",
    subtitle: "Kelas online berbayar, materi video, kuis, dan sertifikat otomatis",
    icon: GraduationCap,
    baseWeeks: 4,
    baseCost: 9,
    workflow: ["Perancangan Alur Belajar & Akun", "Pengerjaan Fitur Video & Ujian", "Testing Beban & Rilis"],
    compatibleAddons: ["payment", "wa", "admin", "cloud"],
  },
  {
    id: "pms",
    title: "Sistem Properti & Reservasi",
    subtitle: "Manajemen kamar hotel/kos, reservasi tamu, dan rekap keuangan",
    icon: Building,
    baseWeeks: 4,
    baseCost: 9,
    workflow: ["Pemetaan Alur Kamar & Tamu", "Pengerjaan Kalender & Laporan", "Uji Sistem & Serah Terima"],
    compatibleAddons: ["payment", "wa", "admin", "cloud"],
  },
];

interface AddonOption {
  id: string;
  name: string;
  description: string;
  extraWeeks: number;
  extraCost: number;
}

const addonOptions: AddonOption[] = [
  {
    id: "payment",
    name: "Pembayaran Otomatis (Payment Gateway)",
    description: "Terima pembayaran QRIS, transfer bank virtual account, dan e-wallet otomatis.",
    extraWeeks: 0.5,
    extraCost: 1.5,
  },
  {
    id: "wa",
    name: "Notifikasi Otomatis WhatsApp",
    description: "Kirim pesan nota, OTP, atau pengingat otomatis langsung ke WhatsApp pelanggan.",
    extraWeeks: 0.5,
    extraCost: 1.0,
  },
  {
    id: "admin",
    name: "Dashboard Laporan & Ekspor Data",
    description: "Panel ringkasan data harian/bulanan yang bisa diunduh ke format Excel dan PDF.",
    extraWeeks: 0.5,
    extraCost: 1.0,
  },
  {
    id: "cloud",
    name: "Setup Server Cloud & Domain 1 Tahun",
    description: "Pemasangan server produksi siap pakai, domain pilihan, SSL aman, dan backup harian.",
    extraWeeks: 0,
    extraCost: 1.0,
  },
  {
    id: "store",
    name: "Bantuan Rilis Google Play & App Store",
    description: "Pendampingan pendaftaran akun developer dan proses review sampai aplikasi resmi tayang.",
    extraWeeks: 0.5,
    extraCost: 1.5,
  },
];

interface ProjectEstimatorProps {
  onProceedToForm?: (summary: string) => void;
}

export default function ProjectEstimator({ onProceedToForm }: ProjectEstimatorProps) {
  const [selectedServiceId, setSelectedServiceId] = useState<string>("web");
  const [isFullScale, setIsFullScale] = useState<boolean>(false);
  const [selectedAddons, setSelectedAddons] = useState<string[]>(["cloud"]);

  const currentService =
    serviceOptions.find((s) => s.id === selectedServiceId) || serviceOptions[0];

  // Saring opsi tambahan hanya yang relevan dengan layanan yang dipilih
  const availableAddons = useMemo(() => {
    return addonOptions.filter((addon) =>
      currentService.compatibleAddons.includes(addon.id)
    );
  }, [currentService]);

  const handleSelectService = (id: string) => {
    setSelectedServiceId(id);
    const targetService = serviceOptions.find((s) => s.id === id);
    if (targetService) {
      // Bersihkan addon yang tidak cocok dengan layanan baru
      setSelectedAddons((prev) =>
        prev.filter((addonId) => targetService.compatibleAddons.includes(addonId))
      );
    }
  };

  const toggleAddon = (id: string) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Kalkulasi estimasi biaya dan waktu
  const calculation = useMemo(() => {
    const scaleMultiplier = isFullScale ? 1.6 : 1.0;
    const scaleWeeksAdd = isFullScale ? 2 : 0;

    let totalWeeks = currentService.baseWeeks + scaleWeeksAdd;
    let totalCost = currentService.baseCost * scaleMultiplier;

    selectedAddons.forEach((addonId) => {
      const addon = addonOptions.find((a) => a.id === addonId);
      if (addon && currentService.compatibleAddons.includes(addonId)) {
        totalWeeks += addon.extraWeeks;
        totalCost += addon.extraCost;
      }
    });

    const minWeeks = Math.max(1, Math.round(totalWeeks));
    const maxWeeks = Math.round(totalWeeks + 1.5);
    const minCost = Math.round(totalCost);
    const maxCost = Math.round(totalCost * 1.3);

    return {
      serviceTitle: currentService.title,
      scaleTitle: isFullScale ? "Sistem Lengkap / Skala Penuh" : "Versi Awal (MVP)",
      minWeeks,
      maxWeeks,
      minCost,
      maxCost,
    };
  }, [currentService, isFullScale, selectedAddons]);

  const handleSendWhatsApp = () => {
    const addonNames = selectedAddons
      .map((id) => addonOptions.find((a) => a.id === id)?.name)
      .filter(Boolean)
      .join(", ");

    const message = encodeURIComponent(
      `Halo ScyterCorp! Saya baru saja menghitung perkiraan proyek di website:

` +
        `• Kebutuhan: ${calculation.serviceTitle}
` +
        `• Skala: ${calculation.scaleTitle}
` +
        `• Fitur Tambahan: ${addonNames || "Standar / Belum ada"}
` +
        `• Estimasi Waktu: ${calculation.minWeeks} – ${calculation.maxWeeks} Minggu
` +
        `• Perkiraan Biaya: Rp ${calculation.minCost}jt – Rp ${calculation.maxCost}jt

` +
        `Bisa kita jadwalkan konsultasi gratis untuk mendiskusikan detail rencana ini?`
    );

    window.open(`https://wa.me/6282233201091?text=${message}`, "_blank");
  };

  const handleUseForm = () => {
    const summary = `${calculation.serviceTitle} (${calculation.scaleTitle}) — Est. ${calculation.minWeeks}-${calculation.maxWeeks} Minggu (Rp ${calculation.minCost}-${calculation.maxCost}jt)`;
    if (onProceedToForm) {
      onProceedToForm(summary);
    } else {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const CurrentIcon = currentService.icon;

  return (
    <section
      id="estimator"
      className="py-16 sm:py-24 md:py-32 bg-[#09090B] relative overflow-hidden border-t border-white/[0.08]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header Section */}
        <MotionReveal>
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
            <span className="text-[11px] uppercase font-mono tracking-widest text-amber-400 font-semibold">
              SIMULASI &amp; PERKIRAAN BIAYA
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white tracking-[-0.03em] font-[family-name:var(--font-heading)] leading-tight">
              Berapa perkiraan waktu &amp;{" "}
              <span className="gold-gradient-text">biaya proyek Anda?</span>
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed max-w-2xl mx-auto font-normal">
              Pilih spesifikasi yang mendekati rencana bisnis Anda untuk melihat gambaran durasi pengerjaan dan estimasi investasi yang realistis sebelum sesi konsultasi.
            </p>
          </div>
        </MotionReveal>

        {/* Form Pilihan Utama */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Kolom Kiri: Pilihan Layanan & Kebutuhan */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Langkah 1: Pilih Layanan */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-xs sm:text-sm font-semibold text-zinc-200">
                  1. Pilih jenis software yang ingin dibangun
                </h3>
                <span className="text-[11px] text-zinc-500">Pilih salah satu</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {serviceOptions.map((svc) => {
                  const isSelected = svc.id === selectedServiceId;
                  const Icon = svc.icon;
                  return (
                    <button
                      key={svc.id}
                      type="button"
                      onClick={() => handleSelectService(svc.id)}
                      className={`p-3.5 rounded-xl text-left border transition-[background-color,border-color] duration-150 active:scale-[0.99] cursor-pointer ${
                        isSelected
                          ? "bg-white/[0.06] border-amber-400/80 text-white"
                          : "bg-[#111114] border-white/[0.06] text-zinc-300 hover:border-white/[0.14] hover:bg-white/[0.02]"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <div className="flex items-center gap-2">
                          <Icon
                            className={`w-4 h-4 ${
                              isSelected ? "text-amber-400" : "text-zinc-400"
                            }`}
                          />
                          <span className="text-xs sm:text-[13px] font-bold">
                            {svc.title}
                          </span>
                        </div>
                        {isSelected && (
                          <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0" />
                        )}
                      </div>
                      <p className="text-[11px] text-zinc-400 leading-snug line-clamp-2">
                        {svc.subtitle}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Langkah 2: Skala Kebutuhan */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-xs sm:text-sm font-semibold text-zinc-200">
                  2. Tentukan skala &amp; tahap kebutuhan
                </h3>
                <span className="text-[11px] text-zinc-500">Pilih tingkatan</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Opsi MVP */}
                <button
                  type="button"
                  onClick={() => setIsFullScale(false)}
                  className={`p-4 rounded-xl text-left border transition-[background-color,border-color] duration-150 active:scale-[0.99] cursor-pointer ${
                    !isFullScale
                      ? "bg-white/[0.06] border-amber-400/80 text-white"
                      : "bg-[#111114] border-white/[0.06] text-zinc-300 hover:border-white/[0.14] hover:bg-white/[0.02]"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs sm:text-sm font-bold">
                      Versi Awal (MVP)
                    </span>
                    {!isFullScale && (
                      <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0" />
                    )}
                  </div>
                  <p className="text-[11px] text-zinc-400 leading-relaxed">
                    Fokus pada fitur utama siap pakai untuk validasi ide bisnis dengan cepat ke pelanggan pertama Anda.
                  </p>
                </button>

                {/* Opsi Full Scale */}
                <button
                  type="button"
                  onClick={() => setIsFullScale(true)}
                  className={`p-4 rounded-xl text-left border transition-[background-color,border-color] duration-150 active:scale-[0.99] cursor-pointer ${
                    isFullScale
                      ? "bg-white/[0.06] border-amber-400/80 text-white"
                      : "bg-[#111114] border-white/[0.06] text-zinc-300 hover:border-white/[0.14] hover:bg-white/[0.02]"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs sm:text-sm font-bold">
                      Sistem Lengkap / Skala Penuh
                    </span>
                    {isFullScale && (
                      <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0" />
                    )}
                  </div>
                  <p className="text-[11px] text-zinc-400 leading-relaxed">
                    Fitur lebih mendalam, hak akses bertingkat (multi-role), alur persetujuan, dan laporan data komprehensif.
                  </p>
                </button>
              </div>
            </div>

            {/* Langkah 3: Integrasi & Modul Tambahan */}
            {availableAddons.length > 0 && (
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs sm:text-sm font-semibold text-zinc-200">
                    3. Fitur atau integrasi tambahan (opsional)
                  </h3>
                  <span className="text-[11px] text-zinc-500">Bisa pilih lebih dari satu</span>
                </div>

                <div className="space-y-2">
                  {availableAddons.map((addon) => {
                    const isChecked = selectedAddons.includes(addon.id);
                    return (
                      <div
                        key={addon.id}
                        onClick={() => toggleAddon(addon.id)}
                        className={`p-3.5 rounded-xl border transition-[background-color,border-color] duration-150 flex items-start justify-between gap-3 cursor-pointer select-none ${
                          isChecked
                            ? "bg-white/[0.04] border-white/[0.15] text-white"
                            : "bg-[#111114] border-white/[0.05] text-zinc-400 hover:border-white/[0.1] hover:text-zinc-300"
                        }`}
                      >
                        <div className="min-w-0 pr-2">
                          <span className="text-xs font-semibold text-zinc-200 block">
                            {addon.name}
                          </span>
                          <p className="text-[11px] text-zinc-400 mt-0.5 leading-snug">
                            {addon.description}
                          </p>
                        </div>

                        {/* Checkbox Indikator */}
                        <div
                          className={`w-4 h-4 rounded mt-0.5 flex items-center justify-center border shrink-0 transition-colors ${
                            isChecked
                              ? "bg-amber-400 border-amber-400 text-[#09090B]"
                              : "border-white/[0.2] bg-transparent"
                          }`}
                        >
                          {isChecked && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

          </div>

          {/* Kolom Kanan: Hasil Estimasi & Tindakan */}
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <div className="rounded-2xl bg-[#111114] border border-white/[0.08] p-6 sm:p-7 shadow-[0_20px_50px_rgba(0,0,0,0.6)] space-y-6">
              
              {/* Header Hasil */}
              <div className="pb-4 border-b border-white/[0.06] flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 font-semibold block">
                    RINGKASAN PERKIRAAN
                  </span>
                  <h4 className="text-base font-bold text-white mt-0.5 font-[family-name:var(--font-heading)]">
                    {calculation.serviceTitle}
                  </h4>
                </div>
                <span className="px-2.5 py-1 rounded bg-white/[0.04] border border-white/[0.08] text-[11px] font-medium text-amber-300/90">
                  {isFullScale ? "Skala Lengkap" : "Versi MVP"}
                </span>
              </div>

              {/* Dua Angka Utama: Waktu & Biaya */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                  <span className="text-[10px] uppercase font-mono tracking-wider text-zinc-500 block mb-1">
                    Durasi Pengerjaan
                  </span>
                  <div className="text-xl sm:text-2xl font-bold text-white font-[family-name:var(--font-heading)] tabular-nums">
                    {calculation.minWeeks} – {calculation.maxWeeks}{" "}
                    <span className="text-xs font-normal text-zinc-400">Minggu</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                  <span className="text-[10px] uppercase font-mono tracking-wider text-zinc-500 block mb-1">
                    Perkiraan Biaya
                  </span>
                  <div className="text-xl sm:text-2xl font-bold text-amber-300 font-[family-name:var(--font-heading)] tabular-nums">
                    {calculation.minCost} – {calculation.maxCost}{" "}
                    <span className="text-xs font-normal text-amber-200/70">Juta</span>
                  </div>
                </div>
              </div>

              {/* Tahapan Alur Pengerjaan */}
              <div className="space-y-2 p-3.5 rounded-xl bg-white/[0.015] border border-white/[0.05]">
                <span className="text-[10px] uppercase font-mono tracking-wider text-zinc-500 block">
                  Tahapan Pengerjaan Standar:
                </span>
                <div className="space-y-1.5 pt-0.5">
                  {currentService.workflow.map((step, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-zinc-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400/80 shrink-0" />
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Jaminan Pengerjaan */}
              <div className="space-y-1.5 pt-1 text-xs text-zinc-400">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>100% hak milik source code &amp; database diserahkan penuh</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Garansi perbaikan bug gratis setelah peluncuran</span>
                </div>
              </div>

              {/* Tombol Aksi */}
              <div className="space-y-2.5 pt-2">
                <button
                  type="button"
                  onClick={handleSendWhatsApp}
                  className="w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-bold text-[#09090B] transition-[filter,transform] duration-150 hover:brightness-105 active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2 shadow-[0_2px_16px_rgba(255,215,0,0.25),inset_0_1px_0_0_rgba(255,255,255,0.7)]"
                  style={{
                    background: "linear-gradient(180deg, #FFFCE6 0%, #FFE566 45%, #FFD700 100%)",
                  }}
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Konsultasikan via WhatsApp</span>
                </button>

                <button
                  type="button"
                  onClick={handleUseForm}
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-zinc-300 bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.06] hover:text-white active:scale-[0.98] transition-[background-color,border-color,color] duration-150 cursor-pointer flex items-center justify-center gap-1.5 group"
                >
                  <span>Kirim ke Formulir Pesan</span>
                  <ArrowRight className="w-3.5 h-3.5 text-zinc-500 transition-transform group-hover:translate-x-0.5" />
                </button>
              </div>

              <p className="text-[10px] text-zinc-500 text-center leading-relaxed">
                *Estimasi ini adalah patokan awal. Biaya dan jadwal pasti disesuaikan dengan spesifikasi final saat sesi konsultasi gratis.
              </p>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
