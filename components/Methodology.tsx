"use client";

import {
  MessageSquare,
  Layout,
  Code2,
  Rocket,
} from "lucide-react";
import { MotionReveal, StaggerContainer, StaggerItem } from "@/components/ui/motion-reveal";

export default function Methodology() {
  const steps = [
    {
      step: "01",
      icon: MessageSquare,
      title: "Konsultasi & Blueprint",
      subtitle: "Analisis Alur & Spesifikasi",
      desc: "Diskusi mendalam bersama lead engineer untuk membedah alur operasional, mendefinisikan fitur esensial, dan menyusun arsitektur sistem dengan estimasi transparan.",
      deliverable: "Spesifikasi Arsitektur & Timeline",
    },
    {
      step: "02",
      icon: Layout,
      title: "UI/UX & Prototyping",
      subtitle: "Wireframing & Prototype Figma",
      desc: "Sebelum baris kode ditulis, kami merancang visual interface interaktif di Figma. Anda dapat menguji kenyamanan alur navigasi langsung untuk iterasi cepat.",
      deliverable: "Interactive Figma Prototype",
    },
    {
      step: "03",
      icon: Code2,
      title: "Agile Development",
      subtitle: "Koding Presisi & Demo Staging",
      desc: "Eksekusi sistem dengan type-safe TypeScript, arsitektur modular, dan query database efisien. Progres dilaporkan berkala dengan demo live di staging server.",
      deliverable: "Staging Server untuk Demo Berkala",
    },
    {
      step: "04",
      icon: Rocket,
      title: "Deploy & 100% Handover",
      subtitle: "Peluncuran Live & Garansi Sistem",
      desc: "Sistem diluncurkan ke server produksi (Cloud/VPS). Seluruh source code, database, dan akses admin diserahkan 100% kepada Anda dengan garansi bug-free.",
      deliverable: "100% Source Code Handover",
    },
  ];

  return (
    <section id="methodology" className="py-28 md:py-36 bg-[#09090B] relative overflow-hidden border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <MotionReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-white/[0.08]">
            <div className="max-w-2xl space-y-3">
              <span className="text-[11px] uppercase font-mono tracking-widest text-amber-400 font-semibold">
                ALUR KERJA TERSTRUKTUR
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-[-0.03em] font-[family-name:var(--font-heading)]">
                Disiplin rekayasa sistem dari ide hingga{" "}
                <span className="gold-gradient-text">serah terima repositori.</span>
              </h2>
            </div>
            <p className="text-sm text-zinc-400 max-w-md leading-relaxed font-normal">
              Setiap fase memiliki milestone yang jelas, terukur, dan transparan sehingga proyek selesai tepat waktu sesuai standar yang disepakati.
            </p>
          </div>
        </MotionReveal>

        {/* Clean 4-Stage Linear Timeline (Unboxed, Highly Legible) */}
        <StaggerContainer staggerDelay={0.08} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 relative">
          {steps.map((item) => {
            const Icon = item.icon;

            return (
              <StaggerItem key={item.step} className="h-full">
                <div className="flex flex-col justify-between h-full space-y-6 group">
                  
                  <div className="space-y-4">
                    {/* Step Number & Icon Accent */}
                    <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                      <span className="text-2xl font-black text-amber-400 font-mono">
                        {item.step}
                      </span>
                      <div className="w-8 h-8 rounded-lg bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-zinc-400 group-hover:text-amber-300 group-hover:border-amber-400/30 transition-colors duration-150">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-white group-hover:text-amber-200 transition-colors duration-150 font-[family-name:var(--font-heading)]">
                        {item.title}
                      </h3>
                      <span className="text-xs text-zinc-500 font-mono block mt-0.5">
                        {item.subtitle}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>

                  {/* Clean Deliverable Tag at Bottom */}
                  <div className="pt-4 border-t border-white/[0.06]">
                    <span className="text-[11px] font-mono text-zinc-400 block bg-white/[0.02] border border-white/[0.06] rounded-lg px-3 py-1.5">
                      Output: <span className="text-amber-300 font-medium">{item.deliverable}</span>
                    </span>
                  </div>

                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

      </div>
    </section>
  );
}
