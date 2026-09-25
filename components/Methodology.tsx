"use client";

import {
  MessageSquare,
  Layout,
  Code2,
  Rocket,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

export default function Methodology() {
  const steps = [
    {
      step: "01",
      icon: MessageSquare,
      title: "Konsultasi & Blueprint",
      subtitle: "Analisis Kebutuhan & Arsitektur",
      desc: "Diskusi mendalam alur proses bisnis Anda, mendefinisikan fitur esensial, menentukan arsitektur teknis yang tepat, serta estimasi biaya yang transparan.",
      deliverable: "Spesifikasi Teknis & Timeline Rinci",
      points: [
        "Analisis proses bisnis & target sistem",
        "Penentuan tech stack (Web, Mobile, Cloud)",
        "Estimasi biaya transparan tanpa biaya tersembunyi",
      ],
    },
    {
      step: "02",
      icon: Layout,
      title: "UI/UX & Prototyping",
      subtitle: "Desain Visual & Alur Interaktif",
      desc: "Sebelum kode ditulis, kami merancang wireframe dan visual interface interaktif di Figma. Anda dapat menguji navigasi secara langsung untuk revisi terarah.",
      deliverable: "Interactive Figma Prototype Siap Uji",
      points: [
        "Desain modern, clean, dan responsif",
        "Komponen & design system terstandar",
        "Revisi visual sebelum tahap coding",
      ],
    },
    {
      step: "03",
      icon: Code2,
      title: "Agile Development",
      subtitle: "Koding Terstruktur & Demo Berkala",
      desc: "Engineer kami mengeksekusi sistem dengan type-safe TypeScript, clean architecture, dan query database efisien, disertai demo berkala di staging server.",
      deliverable: "Staging Server untuk Demo Berkala",
      points: [
        "Koding modular, aman, dan mudah di-scale",
        "Progress mingguan dengan demo langsung",
        "Pengujian fungsional & security check",
      ],
    },
    {
      step: "04",
      icon: Rocket,
      title: "Deployment & Handover",
      subtitle: "Peluncuran Live & Garansi Sistem",
      desc: "Sistem diluncurkan ke server produksi pilihan Anda (Cloud/VPS). Seluruh source code diserahkan 100%, disertai garansi gratis perbaikan kendala.",
      deliverable: "100% Source Code & Dokumentasi Panduan",
      points: [
        "Setup cloud, SSL, domain, dan backup database",
        "Serah terima full repository & akses admin",
        "Garansi perbaikan bug pasca-rilis",
      ],
    },
  ];

  return (
    <section id="methodology" className="py-20 bg-[#0A0A0A] relative overflow-hidden border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-2.5">
          <span className="text-xs uppercase font-mono tracking-widest text-[#D4AF37]">
            ALUR KERJA TERSTRUKTUR
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight font-[family-name:var(--font-heading)]">
            Dari Ide Menjadi <span className="gold-gradient-text">Sistem Siap Pakai</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#888888] leading-relaxed">
            Setiap fase memiliki milestone yang jelas, terukur, dan transparan sehingga proyek selesai tepat waktu sesuai spesifikasi yang disepakati.
          </p>
        </div>

        {/* 4 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.step}
                className="p-6 rounded-2xl bg-[#121212] border border-[#222222] hover:border-[#FFD700]/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Bar with Number & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-2xl font-black text-[#FFD700] font-[family-name:var(--font-heading)]">
                      {item.step}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-[#1A1A1A] border border-[#2A2A2A] flex items-center justify-center text-[#FFD700]">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-white group-hover:text-[#FFE873] transition-colors font-[family-name:var(--font-heading)]">
                    {item.title}
                  </h3>
                  <div className="text-[11px] font-mono text-[#A3A3A3] mt-0.5 mb-2">
                    {item.subtitle}
                  </div>
                  <p className="text-xs text-[#888888] leading-relaxed">
                    {item.desc}
                  </p>

                  {/* Checklist Points */}
                  <div className="mt-4 pt-4 border-t border-[#1C1C1C] space-y-2">
                    {item.points.map((p, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2 text-[11px] text-[#AAAAAA]">
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
                  <div className="text-[11px] font-medium text-[#E6E6E6] bg-[#161616] px-2.5 py-1.5 rounded-lg border border-[#262626] flex items-center justify-between">
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
