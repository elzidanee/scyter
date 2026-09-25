"use client";

import { useState, useMemo } from "react";
import {
  Calculator,
  Check,
  Send,
  Sparkles,
  Users,
  Calendar,
  Layers,
  ArrowRight,
  ShieldCheck,
  HelpCircle,
} from "lucide-react";

interface ProjectEstimatorProps {
  onProceedToForm?: (summary: string) => void;
}

export default function ProjectEstimator({ onProceedToForm }: ProjectEstimatorProps) {
  // Step 1: Solution Type
  const [solutionType, setSolutionType] = useState<string>("web");

  // Step 2: Scale & Maturity
  const [scale, setScale] = useState<string>("growth");

  // Step 3: Add-on Features
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([
    "auth",
    "payment",
    "cicd",
  ]);

  const solutionTypes = [
    {
      id: "web",
      name: "Web Application & SaaS",
      desc: "Portal web modern, dashboard multi-tenant, Next.js & Go",
      baseWeeks: 5,
      baseCost: 35,
    },
    {
      id: "mobile",
      name: "Mobile App (iOS & Android)",
      desc: "Aplikasi cross-platform Flutter/React Native dengan offline sync",
      baseWeeks: 6,
      baseCost: 40,
    },
    {
      id: "full-ecosystem",
      name: "Full Ecosystem (Web + Mobile)",
      desc: "Web portal admin + aplikasi mobile klien dengan shared backend",
      baseWeeks: 9,
      baseCost: 65,
    },
    {
      id: "ai-system",
      name: "AI & Custom Intelligent Pipeline",
      desc: "RAG private, chatbot otomasi internal, LLM custom pipeline",
      baseWeeks: 5,
      baseCost: 38,
    },
  ];

  const scaleOptions = [
    {
      id: "mvp",
      name: "MVP / Validasi Cepat",
      desc: "Fokus pada core fitur esensial, siap meluncur cepat ke pasar.",
      multiplier: 1.0,
      weeksAdd: 0,
      team: "1 Tech Lead, 1 Senior Fullstack, 1 UI/UX, 1 QA",
    },
    {
      id: "growth",
      name: "Growth / Skala Menengah",
      desc: "Sistem matang dengan arsitektur modular, analytics, dan redundansi.",
      multiplier: 1.5,
      weeksAdd: 3,
      team: "1 Solution Architect, 2 Senior Engineers, 1 UI/UX Specialist, 1 QA",
    },
    {
      id: "enterprise",
      name: "Enterprise / High-Traffic",
      desc: "Zero-trust security, SLA 99.98%, audit OWASP, load testing 50k req/min.",
      multiplier: 2.2,
      weeksAdd: 6,
      team: "1 Principal Architect, 3 Fullstack Engineers, 1 DevOps Specialist, 1 QA Lead",
    },
  ];

  const featureOptions = [
    {
      id: "auth",
      name: "Multi-Role RBAC & Audit Log",
      weeks: 1,
      cost: 5,
    },
    {
      id: "payment",
      name: "Payment Gateway & Auto-Reconcile",
      weeks: 1.5,
      cost: 7,
    },
    {
      id: "realtime",
      name: "Realtime WebSocket / Chat / Push",
      weeks: 1.5,
      cost: 7,
    },
    {
      id: "ai",
      name: "AI Copilot / Smart Assistant",
      weeks: 2,
      cost: 10,
    },
    {
      id: "cicd",
      name: "Cloud IaC & Automated CI/CD",
      weeks: 1,
      cost: 5,
    },
    {
      id: "sla",
      name: "Garansi SLA 24/7 & Pemeliharaan 6 Bulan",
      weeks: 0,
      cost: 8,
    },
  ];

  const toggleFeature = (id: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Calculations
  const calculation = useMemo(() => {
    const selectedSol = solutionTypes.find((s) => s.id === solutionType) || solutionTypes[0];
    const selectedScale = scaleOptions.find((s) => s.id === scale) || scaleOptions[1];

    let totalWeeks = selectedSol.baseWeeks + selectedScale.weeksAdd;
    let totalCost = selectedSol.baseCost * selectedScale.multiplier;

    selectedFeatures.forEach((featId) => {
      const feat = featureOptions.find((f) => f.id === featId);
      if (feat) {
        totalWeeks += feat.weeks;
        totalCost += feat.cost;
      }
    });

    const minWeeks = Math.floor(totalWeeks);
    const maxWeeks = Math.ceil(totalWeeks * 1.25);

    const minCost = Math.round(totalCost);
    const maxCost = Math.round(totalCost * 1.3);

    return {
      solutionName: selectedSol.name,
      scaleName: selectedScale.name,
      teamRecommendation: selectedScale.team,
      minWeeks,
      maxWeeks,
      minCost,
      maxCost,
    };
  }, [solutionType, scale, selectedFeatures]);

  const handleSendWhatsApp = () => {
    const featureNames = selectedFeatures
      .map((id) => featureOptions.find((f) => f.id === id)?.name)
      .filter(Boolean)
      .join(", ");

    const text = encodeURIComponent(
      `Halo ScyterCorp! Saya tertarik untuk konsultasi proyek dengan estimasi:\n\n` +
        `• Tipe Solusi: ${calculation.solutionName}\n` +
        `• Skala: ${calculation.scaleName}\n` +
        `• Fitur Tambahan: ${featureNames || "Standar"}\n` +
        `• Estimasi Durasi: ${calculation.minWeeks} - ${calculation.maxWeeks} Minggu\n` +
        `• Perkiraan Budget: Rp ${calculation.minCost}jt - Rp ${calculation.maxCost}jt\n\n` +
        `Bisakah kita jadwalkan sesi diskusi teknis?`
    );

    window.open(`https://wa.me/6281234567890?text=${text}`, "_blank");
  };

  const handleUseForm = () => {
    const summary = `${calculation.solutionName} (${calculation.scaleName}) - Durasi ${calculation.minWeeks}-${calculation.maxWeeks} Minggu`;
    if (onProceedToForm) {
      onProceedToForm(summary);
    } else {
      const el = document.getElementById("contact");
      el?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="estimator" className="py-24 bg-[#121212] relative overflow-hidden border-t border-[#262626]">
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-[#FFD700]/5 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1A1A1A] border border-[#2E2E2E] text-xs font-semibold text-[#FFD700]">
            <Calculator className="w-3.5 h-3.5" />
            <span>Kalkulator Transparansi Anggaran</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-[family-name:var(--font-heading)]">
            Hitung Estimasi Biaya & Waktu <span className="gold-gradient-text">Proyek Software Anda</span>
          </h2>
          <p className="text-base text-[#A3A3A3]">
            ScyterCorp menganut prinsip transparansi. Dapatkan proyeksi sprint pengerjaan, komposisi tim engineering, dan rentang investasi dalam hitungan detik.
          </p>
        </div>

        {/* Interactive Estimator Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Configuration Form Column (Left) */}
          <div className="lg:col-span-7 space-y-8">
            {/* Step 1: Solution Type */}
            <div className="space-y-3">
              <label className="text-xs font-bold uppercase tracking-wider text-[#FFD700] flex items-center gap-2">
                <span>01. Pilih Tipe Solusi Digital</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {solutionTypes.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setSolutionType(item.id)}
                    className={`p-4 rounded-xl text-left border transition-all cursor-pointer ${
                      solutionType === item.id
                        ? "bg-[#1C1C1C] border-[#FFD700] shadow-[0_0_20px_rgba(255,215,0,0.15)]"
                        : "bg-[#181818] border-[#2A2A2A] hover:border-[#3E3E3E]"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-white">{item.name}</span>
                      {solutionType === item.id && (
                        <span className="w-4 h-4 rounded-full bg-[#FFD700] flex items-center justify-center text-[#0D0D0D]">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-[#7A7A7A] mt-1.5 leading-relaxed">{item.desc}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Scale & Maturity */}
            <div className="space-y-3">
              <label className="text-xs font-bold uppercase tracking-wider text-[#FFD700] flex items-center gap-2">
                <span>02. Skala & Kebutuhan Arsitektur</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {scaleOptions.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setScale(item.id)}
                    className={`p-4 rounded-xl text-left border transition-all cursor-pointer ${
                      scale === item.id
                        ? "bg-[#1C1C1C] border-[#FFD700] shadow-[0_0_20px_rgba(255,215,0,0.15)]"
                        : "bg-[#181818] border-[#2A2A2A] hover:border-[#3E3E3E]"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-white">{item.name}</span>
                      {scale === item.id && (
                        <span className="w-4 h-4 rounded-full bg-[#FFD700] flex items-center justify-center text-[#0D0D0D]">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] text-[#7A7A7A] mt-1.5 leading-relaxed">{item.desc}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Add-on Capabilities */}
            <div className="space-y-3">
              <label className="text-xs font-bold uppercase tracking-wider text-[#FFD700] flex items-center gap-2">
                <span>03. Fitur Tambahan & Kebutuhan Kritis</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {featureOptions.map((item) => {
                  const isChecked = selectedFeatures.includes(item.id);
                  return (
                    <button
                      key={item.id}
                      onClick={() => toggleFeature(item.id)}
                      className={`p-3 rounded-lg text-left border transition-all flex items-center justify-between cursor-pointer ${
                        isChecked
                          ? "bg-[#1F1F1F] border-[#FFE873] text-white"
                          : "bg-[#181818] border-[#2A2A2A] text-[#A3A3A3] hover:border-[#3E3E3E]"
                      }`}
                    >
                      <span className="text-xs font-medium">{item.name}</span>
                      <div
                        className={`w-4 h-4 rounded flex items-center justify-center border transition-colors ${
                          isChecked
                            ? "bg-[#FFD700] border-[#FFD700] text-[#0D0D0D]"
                            : "border-[#3E3E3E] bg-[#141414]"
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

          {/* Result Card Column (Right) */}
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <div className="rounded-2xl bg-[#161616] border border-[#2E2E2E] p-6 sm:p-8 shadow-[0_16px_40px_rgba(0,0,0,0.6)] space-y-6">
              {/* Header result */}
              <div className="flex items-center justify-between pb-5 border-b border-[#2A2A2A]">
                <div>
                  <span className="text-xs font-semibold text-[#7A7A7A] uppercase tracking-wider">
                    Hasil Proyeksi Estimasi
                  </span>
                  <h3 className="text-lg font-bold text-white mt-0.5">
                    {calculation.solutionName}
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#FFD700]/10 border border-[#FFD700]/30 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-[#FFD700]" />
                </div>
              </div>

              {/* Metrics Display */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-[#1C1C1C] border border-[#2E2E2E]">
                  <div className="flex items-center gap-1.5 text-xs text-[#7A7A7A] mb-1">
                    <Calendar className="w-3.5 h-3.5 text-[#FFD700]" />
                    <span>Estimasi Durasi</span>
                  </div>
                  <div className="text-xl sm:text-2xl font-bold text-white font-[family-name:var(--font-heading)]">
                    {calculation.minWeeks} – {calculation.maxWeeks}{" "}
                    <span className="text-sm font-normal text-[#A3A3A3]">Minggu</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#1C1C1C] border border-[#2E2E2E]">
                  <div className="flex items-center gap-1.5 text-xs text-[#7A7A7A] mb-1">
                    <Layers className="w-3.5 h-3.5 text-[#2ECC71]" />
                    <span>Perkiraan Investasi</span>
                  </div>
                  <div className="text-xl sm:text-2xl font-bold text-[#FFD700] font-[family-name:var(--font-heading)]">
                    {calculation.minCost} – {calculation.maxCost}{" "}
                    <span className="text-sm font-normal text-[#FFE873]">Juta</span>
                  </div>
                </div>
              </div>

              {/* Dedicated Team Setup */}
              <div className="p-4 rounded-xl bg-[#1C1C1C] border border-[#2E2E2E] space-y-1.5">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-[#E5E5E5]">
                  <Users className="w-3.5 h-3.5 text-[#3B82F6]" />
                  <span>Rekomendasi Komposisi Squad Tim:</span>
                </div>
                <p className="text-xs text-[#A3A3A3] leading-relaxed">
                  {calculation.teamRecommendation}
                </p>
              </div>

              {/* Guarantees Included */}
              <div className="space-y-2 text-xs text-[#A3A3A3] pt-1">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#2ECC71] shrink-0" />
                  <span>Semua paket termasuk 100% kepemilikan kode sumber</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#2ECC71] shrink-0" />
                  <span>Perjanjian Kerahasiaan (NDA) resmi bertandatangan hukum</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#2ECC71] shrink-0" />
                  <span>Sistem pembayaran bertahap (Milestone based)</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 space-y-3">
                <button
                  onClick={handleSendWhatsApp}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl text-sm font-bold text-[#0D0D0D] transition-all hover:brightness-105 hover:shadow-[0_0_24px_rgba(255,215,0,0.35)] cursor-pointer"
                  style={{
                    background: "linear-gradient(180deg, #FFFBE6 0%, #FFE873 40%, #FFD700 100%)",
                  }}
                >
                  <Send className="w-4 h-4" />
                  <span>Konsultasikan Spesifikasi via WhatsApp</span>
                </button>

                <button
                  onClick={handleUseForm}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-medium text-white bg-[#222222] border border-[#333333] hover:bg-[#282828] transition-colors cursor-pointer"
                >
                  <span>Kirim Detail ke Formulir Konsultasi</span>
                  <ArrowRight className="w-4 h-4 text-[#A3A3A3]" />
                </button>
              </div>

              <p className="text-[11px] text-[#7A7A7A] text-center">
                *Estimasi ini bersifat indikatif dan dapat disesuaikan kembali setelah sesi Technical Discovery mendalam bersama Tim Arsitek ScyterCorp.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
