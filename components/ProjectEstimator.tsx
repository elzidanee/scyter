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
    <section id="estimator" className="py-24 bg-[#09090B] relative overflow-hidden border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-2.5">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs font-mono text-amber-300 font-semibold">
            <Calculator className="w-3.5 h-3.5 text-amber-400" />
            <span>KALKULATOR ESTIMASI PROYEK</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight font-[family-name:var(--font-heading)]">
            Hitung Estimasi Biaya & Waktu <span className="gold-gradient-text">Proyek Anda</span>
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
            Pilih parameter kebutuhan bisnis Anda di bawah ini untuk melihat gambaran durasi pengerjaan dan estimasi biaya secara transparan tanpa biaya tersembunyi.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column */}
          <div className="lg:col-span-7 space-y-7">
            {/* Step 1: Pilihan Layanan */}
            <div className="space-y-3">
              <label className="text-[11px] font-mono font-bold uppercase tracking-wider text-amber-400 flex items-center gap-2">
                <span>01 // PILIH JENIS LAYANAN</span>
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {services.map((s) => {
                  const isSelected = serviceType === s.id;
                  return (
                    <button
                      key={s.id}
                      onClick={() => setServiceType(s.id)}
                      className={`p-3.5 rounded-xl text-left border transition-all duration-200 cursor-pointer ${
                        isSelected
                          ? "bg-amber-400/[0.06] border-amber-400/80 shadow-[0_0_20px_rgba(255,215,0,0.12)] ring-1 ring-amber-400/30"
                          : "bg-[#0F0F12] border-white/[0.08] hover:border-white/[0.18] hover:bg-white/[0.02]"
                      }`}
                    >
                      <div className="text-xs sm:text-[13px] font-bold text-white flex items-center justify-between">
                        <span>{s.name}</span>
                        {isSelected && <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />}
                      </div>
                      <p className="text-[10px] sm:text-[11px] text-zinc-400 mt-1 leading-snug">{s.desc}</p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Paket Kebutuhan */}
            <div className="space-y-3">
              <label className="text-[11px] font-mono font-bold uppercase tracking-wider text-amber-400 flex items-center gap-2">
                <span>02 // SKALA & KOMPLEKSITAS</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {tiers.map((t) => {
                  const isSelected = tier === t.id;
                  return (
                    <button
                      key={t.id}
                      onClick={() => setTier(t.id)}
                      className={`p-4 rounded-xl text-left border transition-all duration-200 cursor-pointer ${
                        isSelected
                          ? "bg-amber-400/[0.06] border-amber-400/80 shadow-[0_0_20px_rgba(255,215,0,0.12)] ring-1 ring-amber-400/30"
                          : "bg-[#0F0F12] border-white/[0.08] hover:border-white/[0.18] hover:bg-white/[0.02]"
                      }`}
                    >
                      <div className="text-xs sm:text-sm font-bold text-white flex items-center justify-between">
                        <span>{t.name}</span>
                        {isSelected && <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />}
                      </div>
                      <p className="text-[11px] text-zinc-400 mt-1 leading-relaxed">{t.desc}</p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Fitur Tambahan */}
            <div className="space-y-3">
              <label className="text-[11px] font-mono font-bold uppercase tracking-wider text-amber-400 flex items-center gap-2">
                <span>03 // FITUR & INTEGRASI TAMBAHAN (OPSIONAL)</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {addons.map((a) => {
                  const isChecked = selectedAddons.includes(a.id);
                  return (
                    <button
                      key={a.id}
                      onClick={() => toggleAddon(a.id)}
                      className={`p-3 rounded-xl text-left border transition-all duration-200 flex items-center justify-between cursor-pointer ${
                        isChecked
                          ? "bg-amber-400/[0.04] border-amber-400/50 text-white"
                          : "bg-[#0F0F12] border-white/[0.06] text-zinc-400 hover:border-white/[0.14] hover:text-zinc-300"
                      }`}
                    >
                      <span className="text-xs leading-snug">{a.name}</span>
                      <div
                        className={`w-4 h-4 rounded flex items-center justify-center border shrink-0 ml-3 transition-colors ${
                          isChecked
                            ? "bg-amber-400 border-amber-400 text-[#09090B]"
                            : "border-white/[0.15] bg-white/[0.02]"
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
            <div className="rounded-2xl bg-[#0F0F12] border border-white/[0.08] p-6 sm:p-7 shadow-[0_20px_50px_rgba(0,0,0,0.7),inset_0_1px_0_0_rgba(255,255,255,0.06)] space-y-5">
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.06]">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 font-semibold">
                    RINGKASAN ESTIMASI
                  </span>
                  <h3 className="text-base font-bold text-white mt-0.5 font-[family-name:var(--font-heading)]">
                    {calculation.serviceName}
                  </h3>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-[11px] font-mono font-medium text-amber-300">
                  {calculation.tierName}
                </span>
              </div>

              {/* Duration and Cost cards */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                  <div className="flex items-center gap-1.5 text-xs text-zinc-400 mb-1">
                    <Calendar className="w-3.5 h-3.5 text-amber-400" />
                    <span>Durasi Kerja</span>
                  </div>
                  <div className="text-xl font-bold text-white font-[family-name:var(--font-heading)]">
                    {calculation.minWeeks} – {calculation.maxWeeks} <span className="text-xs font-normal text-zinc-400">Minggu</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                  <div className="flex items-center gap-1.5 text-xs text-zinc-400 mb-1">
                    <Layers className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Perkiraan Biaya</span>
                  </div>
                  <div className="text-xl font-bold text-amber-300 font-[family-name:var(--font-heading)]">
                    {calculation.minCost} – {calculation.maxCost} <span className="text-xs font-normal text-amber-200/80">Juta</span>
                  </div>
                </div>
              </div>

              {/* Guarantees */}
              <div className="space-y-2 text-xs text-zinc-300 pt-1">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>100% Hak Milik Source Code & Data Bisnis</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Garansi Perbaikan Bug Gratis Setelah Rilis</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2.5 pt-2">
                <button
                  onClick={handleSendWhatsApp}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold text-[#09090B] transition-all hover:brightness-105 active:scale-[0.98] shadow-[0_2px_16px_rgba(255,215,0,0.3),inset_0_1px_0_0_rgba(255,255,255,0.7)] cursor-pointer group"
                  style={{
                    background: "linear-gradient(180deg, #FFFCE6 0%, #FFE566 45%, #FFD700 100%)",
                  }}
                >
                  <Send className="w-4 h-4" />
                  <span>Konsultasi Hasil Estimasi via WhatsApp</span>
                </button>

                <button
                  onClick={handleUseForm}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold text-zinc-200 bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.06] hover:text-white transition-colors cursor-pointer group/form"
                >
                  <span>Kirim ke Formulir Pesan</span>
                  <ArrowRight className="w-3.5 h-3.5 text-zinc-400 transition-transform group-form:translate-x-0.5" />
                </button>
              </div>

              <p className="text-[10px] text-zinc-500 text-center font-mono">
                *Estimasi dapat disesuaikan kembali sesuai kebutuhan spesifik Anda.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
