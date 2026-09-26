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
    <section id="methodology" className="py-24 bg-[#09090B] relative overflow-hidden border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-2.5">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs font-mono text-amber-300 font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            <span>ALUR KERJA TERSTRUKTUR</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight font-[family-name:var(--font-heading)]">
            Dari Ide Menjadi <span className="gold-gradient-text">Sistem Siap Pakai</span>
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
            Setiap fase memiliki milestone yang jelas, terukur, dan transparan sehingga proyek selesai tepat waktu sesuai spesifikasi yang disepakati.
          </p>
        </div>

        {/* 4 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.step}
                className="p-6 rounded-2xl bg-[#0F0F12] border border-white/[0.08] hover:border-amber-400/40 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(0,0,0,0.65),inset_0_1px_0_0_rgba(255,255,255,0.06)] transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Bar with Number & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-3xl font-black text-amber-400/90 font-[family-name:var(--font-heading)]">
                      {item.step}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-amber-400 shadow-sm">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-white group-hover:text-amber-200 transition-colors font-[family-name:var(--font-heading)]">
                    {item.title}
                  </h3>
                  <div className="text-[11px] font-mono text-zinc-400 mt-0.5 mb-2.5">
                    {item.subtitle}
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {item.desc}
                  </p>

                  {/* Checklist Points */}
                  <div className="mt-4 pt-4 border-t border-white/[0.06] space-y-2">
                    {item.points.map((p, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2 text-[11px] text-zinc-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="leading-tight">{p}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Deliverable Badge */}
                <div className="mt-6 pt-4 border-t border-white/[0.06]">
                  <div className="text-[10px] uppercase font-mono tracking-wider text-zinc-500 mb-1.5 font-medium">
                    Output Deliverable:
                  </div>
                  <div className="text-[11px] font-medium text-zinc-200 bg-white/[0.02] px-3 py-2 rounded-xl border border-white/[0.06] flex items-center justify-between">
                    <span className="truncate">{item.deliverable}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-amber-400 shrink-0 ml-1.5" />
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
