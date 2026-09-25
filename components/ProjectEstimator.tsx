"use client";

import { useState, useMemo } from "react";
import {
  Calculator,
  Check,
  Send,
  Sparkles,
  Calendar,
  Layers,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

interface ProjectEstimatorProps {
  onProceedToForm?: (summary: string) => void;
}

export default function ProjectEstimator({ onProceedToForm }: ProjectEstimatorProps) {
  // Step 1: Pilihan Layanan
  const [serviceType, setServiceType] = useState<string>("web");

  // Step 2: Tingkat Kebutuhan
  const [tier, setTier] = useState<string>("starter");

  // Step 3: Fitur Tambahan
  const [selectedAddons, setSelectedAddons] = useState<string[]>([
    "admin",
    "domain",
  ]);

  const services = [
    { id: "web", name: "Website", desc: "Company Profile, Landing Page, Portal", baseWeeks: 2, baseCost: 4 },
    { id: "app", name: "Mobile App", desc: "Aplikasi Android / iOS Flutter", baseWeeks: 4, baseCost: 10 },
    { id: "uiux", name: "UI/UX Design", desc: "Desain Figma & Prototype Interaktif", baseWeeks: 2, baseCost: 3 },
    { id: "pos", name: "Kasir (POS)", desc: "Sistem Kasir, Struk & Stok Barang", baseWeeks: 3, baseCost: 7 },
    { id: "cms", name: "Custom CMS", desc: "Pengelolaan Konten, Berita & Produk", baseWeeks: 3, baseCost: 6 },
    { id: "lms", name: "LMS Edukasi", desc: "Kelas Online, Video, Ujian & Sertifikat", baseWeeks: 4, baseCost: 9 },
    { id: "pms", name: "PMS Properti/Proyek", desc: "Sewa Kos/Hotel & Monitoring Proyek", baseWeeks: 4, baseCost: 9 },
  ];

  const tiers = [
    {
      id: "starter",
      name: "Paket Standar",
      desc: "Fitur esensial siap pakai untuk memulai digitalisasi bisnis dengan cepat.",
      multiplier: 1.0,
      weeksAdd: 0,
    },
    {
      id: "pro",
      name: "Paket Lengkap / Kustom Pro",
      desc: "Fitur lebih mendalam, kustomisasi alur bisnis, laporan lengkap & automasi.",
      multiplier: 1.6,
      weeksAdd: 2,
    },
  ];

  const addons = [
    { id: "payment", name: "Payment Gateway (QRIS & Transfer Otomatis)", weeks: 0.5, cost: 1.5 },
    { id: "wa", name: "Notifikasi Otomatis WhatsApp Gateway", weeks: 0.5, cost: 1 },
    { id: "admin", name: "Panel Admin & Ekspor Laporan Excel/PDF", weeks: 0.5, cost: 1 },
    { id: "domain", name: "Setup Domain, Server Cloud & SSL 1 Tahun", weeks: 0, cost: 1 },
    { id: "store", name: "Bantuan Rilis Akun Google Play / App Store", weeks: 0.5, cost: 1.5 },
  ];

  const toggleAddon = (id: string) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const calculation = useMemo(() => {
    const selectedService = services.find((s) => s.id === serviceType) || services[0];
    const selectedTier = tiers.find((t) => t.id === tier) || tiers[0];

    let totalWeeks = selectedService.baseWeeks + selectedTier.weeksAdd;
    let totalCost = selectedService.baseCost * selectedTier.multiplier;

    selectedAddons.forEach((addonId) => {
      const addon = addons.find((a) => a.id === addonId);
      if (addon) {
        totalWeeks += addon.weeks;
        totalCost += addon.cost;
      }
    });

    const minWeeks = Math.max(1, Math.round(totalWeeks));
    const maxWeeks = Math.round(totalWeeks + 1.5);

    const minCost = Math.round(totalCost);
    const maxCost = Math.round(totalCost * 1.3);

    return {
      serviceName: selectedService.name,
      tierName: selectedTier.name,
      minWeeks,
      maxWeeks,
      minCost,
      maxCost,
    };
  }, [serviceType, tier, selectedAddons]);

  const handleSendWhatsApp = () => {
    const addonNames = selectedAddons
      .map((id) => addons.find((a) => a.id === id)?.name)
      .filter(Boolean)
      .join(", ");

    const text = encodeURIComponent(
      `Halo ScyterCorp! Saya ingin konsultasi proyek:\n\n` +
        `• Layanan: ${calculation.serviceName} (${calculation.tierName})\n` +
        `• Tambahan: ${addonNames || "Standar"}\n` +
        `• Estimasi Waktu: ${calculation.minWeeks} - ${calculation.maxWeeks} Minggu\n` +
        `• Perkiraan Biaya: Rp ${calculation.minCost}jt - Rp ${calculation.maxCost}jt\n\n` +
        `Bisakah kita diskusikan lebih lanjut?`
    );

    window.open(`https://wa.me/6282233201091?text=${text}`, "_blank");
  };

  const handleUseForm = () => {
    const summary = `${calculation.serviceName} (${calculation.tierName}) - Estimasi ${calculation.minWeeks}-${calculation.maxWeeks} Minggu`;
    if (onProceedToForm) {
      onProceedToForm(summary);
    } else {
      const el = document.getElementById("contact");
      el?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="estimator" className="py-20 bg-[#121212] relative overflow-hidden border-t border-[#262626]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1A1A1A] border border-[#2E2E2E] text-xs font-semibold text-[#FFD700]">
            <Calculator className="w-3.5 h-3.5" />
            <span>Kalkulator Estimasi Cepat</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-[family-name:var(--font-heading)]">
            Hitung Estimasi Biaya & Waktu <span className="gold-gradient-text">Proyek Anda</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#888888]">
            Pilih kebutuhan layanan Anda di bawah ini untuk melihat gambaran durasi pengerjaan dan estimasi biaya secara transparan.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column */}
          <div className="lg:col-span-7 space-y-6">
            {/* Step 1: Pilihan Layanan */}
            <div className="space-y-2.5">
              <label className="text-xs font-bold uppercase tracking-wider text-[#FFD700]">
                1. Pilih Layanan
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {services.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setServiceType(s.id)}
                    className={`p-3 rounded-xl text-left border transition-all cursor-pointer ${
                      serviceType === s.id
                        ? "bg-[#1C1C1C] border-[#FFD700] shadow-[0_0_16px_rgba(255,215,0,0.15)]"
                        : "bg-[#161616] border-[#2A2A2A] hover:border-[#3A3A3A]"
                    }`}
                  >
                    <div className="text-xs font-bold text-white flex items-center justify-between">
                      <span>{s.name}</span>
                      {serviceType === s.id && <Check className="w-3.5 h-3.5 text-[#FFD700]" />}
                    </div>
                    <p className="text-[10px] text-[#7A7A7A] mt-1 leading-snug">{s.desc}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Paket Kebutuhan */}
            <div className="space-y-2.5">
              <label className="text-xs font-bold uppercase tracking-wider text-[#FFD700]">
                2. Tingkat Skala Kebutuhan
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {tiers.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setTier(t.id)}
                    className={`p-3.5 rounded-xl text-left border transition-all cursor-pointer ${
                      tier === t.id
                        ? "bg-[#1C1C1C] border-[#FFD700]"
                        : "bg-[#161616] border-[#2A2A2A] hover:border-[#3A3A3A]"
                    }`}
                  >
                    <div className="text-xs font-bold text-white flex items-center justify-between">
                      <span>{t.name}</span>
                      {tier === t.id && <Check className="w-3.5 h-3.5 text-[#FFD700]" />}
                    </div>
                    <p className="text-[11px] text-[#7A7A7A] mt-1">{t.desc}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Fitur Tambahan */}
            <div className="space-y-2.5">
              <label className="text-xs font-bold uppercase tracking-wider text-[#FFD700]">
                3. Fitur Tambahan (Opsional)
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {addons.map((a) => {
                  const isChecked = selectedAddons.includes(a.id);
                  return (
                    <button
                      key={a.id}
                      onClick={() => toggleAddon(a.id)}
                      className={`p-2.5 rounded-lg text-left border transition-all flex items-center justify-between cursor-pointer ${
                        isChecked
                          ? "bg-[#1E1E1E] border-[#FFE873] text-white"
                          : "bg-[#161616] border-[#2A2A2A] text-[#888888] hover:border-[#383838]"
                      }`}
                    >
                      <span className="text-xs">{a.name}</span>
                      <div
                        className={`w-4 h-4 rounded flex items-center justify-center border shrink-0 ml-2 ${
                          isChecked
                            ? "bg-[#FFD700] border-[#FFD700] text-[#0D0D0D]"
                            : "border-[#333333] bg-[#121212]"
                        }`}
                      >
                        {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Results Column */}
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <div className="rounded-2xl bg-[#161616] border border-[#2E2E2E] p-6 shadow-[0_16px_40px_rgba(0,0,0,0.6)] space-y-5">
              <div className="flex items-center justify-between pb-4 border-b border-[#2A2A2A]">
                <div>
                  <span className="text-[10px] uppercase font-bold text-[#7A7A7A]">Ringkasan</span>
                  <h3 className="text-base font-bold text-white mt-0.5">
                    {calculation.serviceName}
                  </h3>
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-[#202020] text-[11px] text-[#FFE873]">
                  {calculation.tierName}
                </span>
              </div>

              {/* Duration and Cost cards */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3.5 rounded-xl bg-[#1C1C1C] border border-[#2A2A2A]">
                  <div className="flex items-center gap-1.5 text-xs text-[#7A7A7A] mb-1">
                    <Calendar className="w-3.5 h-3.5 text-[#FFD700]" />
                    <span>Waktu Kerja</span>
                  </div>
                  <div className="text-xl font-bold text-white font-[family-name:var(--font-heading)]">
                    {calculation.minWeeks} – {calculation.maxWeeks} <span className="text-xs font-normal text-[#888888]">Minggu</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#1C1C1C] border border-[#2A2A2A]">
                  <div className="flex items-center gap-1.5 text-xs text-[#7A7A7A] mb-1">
                    <Layers className="w-3.5 h-3.5 text-[#2ECC71]" />
                    <span>Estimasi Biaya</span>
                  </div>
                  <div className="text-xl font-bold text-[#FFD700] font-[family-name:var(--font-heading)]">
                    {calculation.minCost} – {calculation.maxCost} <span className="text-xs font-normal text-[#FFE873]">Juta</span>
                  </div>
                </div>
              </div>

              {/* Guarantees */}
              <div className="space-y-1.5 text-xs text-[#888888] pt-1">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#2ECC71] shrink-0" />
                  <span>100% Hak Milik Source Code & Data Bisnis</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#2ECC71] shrink-0" />
                  <span>Garansi Perbaikan Bug Gratis Setelah Rilis</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2.5 pt-2">
                <button
                  onClick={handleSendWhatsApp}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold text-[#0D0D0D] transition-all hover:brightness-105 cursor-pointer"
                  style={{
                    background: "linear-gradient(180deg, #FFFBE6 0%, #FFE873 40%, #FFD700 100%)",
                  }}
                >
                  <Send className="w-4 h-4" />
                  <span>Konsultasi Hasil Estimasi via WhatsApp</span>
                </button>

                <button
                  onClick={handleUseForm}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-medium text-white bg-[#222222] border border-[#333333] hover:bg-[#282828] transition-colors cursor-pointer"
                >
                  <span>Kirim ke Formulir Pesan</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#888888]" />
                </button>
              </div>

              <p className="text-[10px] text-[#666666] text-center">
                *Estimasi dapat disesuaikan kembali sesuai kebutuhan spesifik Anda.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
