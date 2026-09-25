"use client";

import { useState } from "react";
import { Spotlight } from "@/components/ui/spotlight";
import {
  MessageSquare,
  Layout,
  Code2,
  Rocket,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export default function Methodology() {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      step: "01",
      icon: MessageSquare,
      title: "Konsultasi & Blueprint",
      subtitle: "Diskusi Mendalam & Analisis Kebutuhan",
      desc: "Kami membedah alur proses bisnis Anda, mendefinisikan fitur esensial, menentukan arsitektur teknis yang tepat, serta menyepakati anggaran dan timeline yang transparan.",
      deliverable: "Dokumen Spesifikasi Teknis & Timeline Rinci",
      points: [
        "Identifikasi problem & target pengguna",
        "Penentuan arsitektur (Web, Mobile, Cloud)",
        "Estimasi biaya transparan tanpa markup tersembunyi",
      ],
    },
    {
      step: "02",
      icon: Layout,
      title: "UI/UX & Prototyping",
      subtitle: "Desain Visual & Alur Interaktif di Figma",
      desc: "Sebelum sebaris kode pun ditulis, kami merancang wireframe dan visual interface interaktif. Anda dapat menguji rasa dan navigasi aplikasi secara langsung untuk revisi terarah.",
      deliverable: "Interactive Figma Prototype Siap Uji",
      points: [
        "Desain modern, clean, dan responsif",
        "Design system & komponen terstandar",
        "Review & revisi hingga sesuai visi Anda",
      ],
    },
    {
      step: "03",
      icon: Code2,
      title: "Agile Development",
      subtitle: "Koding Terstruktur & Pengujian Ketat",
      desc: "Engineer kami mengeksekusi sistem dengan clean code, type-safe TypeScript, performa database optimal, serta pengujian menyeluruh (unit & integration testing) untuk meminimalkan bug.",
      deliverable: "Staging Server untuk Demo Berkala",
      points: [
        "Koding modular, aman, dan mudah di-scale",
        "Progress mingguan dengan demo di staging server",
        "Quality assurance & security check berkala",
      ],
    },
    {
      step: "04",
      icon: Rocket,
      title: "Deployment & Handover",
      subtitle: "Peluncuran Live & Garansi Pemeliharaan",
      desc: "Sistem diluncurkan ke server produksi pilihan Anda (AWS, VPS, GCP, atau Cloudflare). Seluruh source code diserahkan 100%, disertai garansi gratis perbaikan kendala.",
      deliverable: "100% Source Code & Dokumentasi Panduan",
      points: [
        "Setup cloud, SSL, domain, dan database backup",
        "Serah terima full repository & akses admin",
        "Garansi perbaikan bug & monitoring pasca rilis",
      ],
    },
  ];

  return (
    <section id="methodology" className="py-24 bg-[#0F0F0F] relative overflow-hidden border-t border-[#1F1F1F]">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-[#FFD700]/5 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#181818] border border-[#2B2B2B] text-[11px] text-[#FFE873]">
            <Sparkles className="w-3 h-3 text-[#FFD700]" />
            <span className="font-semibold uppercase tracking-wider">Metodologi Pengerjaan</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-[family-name:var(--font-heading)]">
            Alur Terstruktur dari <span className="gold-gradient-text">Ide Menjadi Sistem Siap Pakai</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#888888]">
            Setiap fase memiliki milestone yang jelas, terukur, dan transparan sehingga proyek selesai tepat waktu dan sesuai ekspektasi.
          </p>
        </div>

        {/* Desktop Step Nav / Connector Bar */}
        <div className="hidden lg:grid grid-cols-4 gap-4 mb-8">
          {steps.map((item, index) => {
            const isSelected = activeStep === index;
            return (
              <button
                key={item.step}
                onClick={() => setActiveStep(index)}
                className={`text-left p-4 rounded-xl border transition-all cursor-pointer relative ${
                  isSelected
                    ? "bg-[#181818] border-[#FFD700]/70 shadow-[0_0_20px_rgba(255,215,0,0.15)]"
                    : "bg-[#131313] border-[#222222] hover:border-[#383838]"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${
                      isSelected
                        ? "bg-[#FFD700] text-[#0D0D0D]"
                        : "bg-[#202020] text-[#888888]"
                    }`}
                  >
                    TAHAP {item.step}
                  </span>
                  <div
                    className={`w-2.5 h-2.5 rounded-full ${
                      isSelected
                        ? "bg-[#FFD700] ring-4 ring-[#FFD700]/20 animate-pulse"
                        : "bg-[#333333]"
                    }`}
                  />
                </div>
                <div
                  className={`text-sm font-bold transition-colors font-[family-name:var(--font-heading)] ${
                    isSelected ? "text-white" : "text-[#888888]"
                  }`}
                >
                  {item.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* 4 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((item, index) => {
            const Icon = item.icon;
            const isHoveredOrActive = activeStep === index;

            return (
              <div
                key={item.step}
                onMouseEnter={() => setActiveStep(index)}
                className={`p-6 rounded-2xl bg-[#141414] border transition-all duration-300 flex flex-col justify-between group relative overflow-hidden ${
                  isHoveredOrActive
                    ? "border-[#FFD700]/60 shadow-[0_8px_30px_rgba(255,215,0,0.12)] -translate-y-1"
                    : "border-[#242424] hover:border-[#383838]"
                }`}
              >
                <Spotlight className="from-[#FFD700]/20 via-[#FFD700]/5 to-transparent" size={260} />

                <div>
                  {/* Top Bar with Number & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-3xl font-black text-[#FFD700] font-[family-name:var(--font-heading)]">
                      {item.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#1D1D1D] border border-[#303030] flex items-center justify-center text-[#FFD700] group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-white group-hover:text-[#FFE873] transition-colors font-[family-name:var(--font-heading)]">
                    {item.title}
                  </h3>
                  <div className="text-[11px] font-mono text-[#D9A900] mt-0.5 mb-2">
                    {item.subtitle}
                  </div>
                  <p className="text-xs text-[#888888] leading-relaxed">
                    {item.desc}
                  </p>

                  {/* Checklist Points */}
                  <div className="mt-5 pt-4 border-t border-[#202020] space-y-2">
                    {item.points.map((p, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2 text-[11px] text-[#BBBBBB]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#2ECC71] shrink-0 mt-0.5" />
                        <span className="leading-tight">{p}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Deliverable Badge */}
                <div className="mt-5 pt-4 border-t border-[#1C1C1C]">
                  <div className="text-[10px] uppercase font-mono tracking-wider text-[#666666] mb-1">
                    Output Deliverable:
                  </div>
                  <div className="text-[11px] font-semibold text-[#E6E6E6] bg-[#1A1A1A] px-2.5 py-1.5 rounded-lg border border-[#292929] flex items-center justify-between">
                    <span className="truncate">{item.deliverable}</span>
                    <ArrowRight className="w-3 h-3 text-[#FFD700] shrink-0 ml-1" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
