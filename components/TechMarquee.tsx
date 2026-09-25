"use client";

import { InfiniteSlider } from "@/components/ui/infinite-slider";
import {
  Code2,
  Server,
  Smartphone,
  Database,
  Cloud,
  Layers,
  Cpu,
  ShieldCheck,
  Zap,
} from "lucide-react";

export default function TechMarquee() {
  const stackRow1 = [
    { name: "Next.js 16", tag: "Fullstack", icon: Code2 },
    { name: "React 19", tag: "Frontend", icon: Layers },
    { name: "TypeScript", tag: "Strict Typed", icon: ShieldCheck },
    { name: "Flutter", tag: "Cross-Platform", icon: Smartphone },
    { name: "Golang (Go)", tag: "High-Throughput", icon: Zap },
    { name: "Node.js / NestJS", tag: "Enterprise API", icon: Server },
    { name: "Python FastAPI", tag: "AI & Microservices", icon: Cpu },
    { name: "PostgreSQL", tag: "ACID Database", icon: Database },
  ];

  const stackRow2 = [
    { name: "Amazon Web Services", tag: "Cloud Infrastructure", icon: Cloud },
    { name: "Docker & K8s", tag: "DevOps Orchestration", icon: Server },
    { name: "Redis Cache", tag: "Sub-ms Latency", icon: Zap },
    { name: "Kotlin & Swift", tag: "Native Mobile", icon: Smartphone },
    { name: "Tailwind CSS", tag: "Modern UI System", icon: Layers },
    { name: "REST & gRPC", tag: "High Speed Protocols", icon: Code2 },
    { name: "Figma & Design Systems", tag: "UI/UX Architecture", icon: Layers },
    { name: "Git CI/CD Pipeline", tag: "Automated Deploy", icon: ShieldCheck },
  ];

  return (
    <section className="py-16 bg-[#0D0D0D] border-y border-[#1F1F1F] relative overflow-hidden">
      {/* Subtle Gold Gradient Glow in Center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[160px] bg-[#FFD700]/5 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
        <span className="text-[11px] font-mono uppercase tracking-widest text-[#FFD700] px-3 py-1 rounded-full bg-[#FFD700]/10 border border-[#FFD700]/20 inline-block mb-2">
          Enterprise Tech Ecosystem
        </span>
        <h3 className="text-xl sm:text-2xl font-bold text-white font-[family-name:var(--font-heading)]">
          Fondasi Teknologi Modern & Teruji
        </h3>
        <p className="text-xs sm:text-sm text-[#888888] mt-1 max-w-xl mx-auto">
          Arsitektur skalabel dengan performa tinggi, aman dari celah keamanan, dan siap berkembang bersama bisnis Anda.
        </p>
      </div>

      {/* Edge Gradient Masks for Smooth Fade */}
      <div className="relative w-full overflow-hidden">
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-[#0D0D0D] to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-[#0D0D0D] to-transparent z-10" />

        {/* Marquee Row 1 - Left to Right */}
        <InfiniteSlider gap={16} speed={35} speedOnHover={15} className="py-2">
          {stackRow1.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-[#141414] border border-[#242424] hover:border-[#FFD700]/50 transition-colors group cursor-default"
              >
                <div className="w-8 h-8 rounded-lg bg-[#1B1B1B] border border-[#2D2D2D] flex items-center justify-center text-[#FFD700] group-hover:scale-110 transition-transform">
                  <Icon className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-semibold text-white group-hover:text-[#FFE873] transition-colors">
                    {item.name}
                  </div>
                  <div className="text-[10px] text-[#737373] font-mono">
                    {item.tag}
                  </div>
                </div>
              </div>
            );
          })}
        </InfiniteSlider>

        {/* Marquee Row 2 - Right to Left (Reverse) */}
        <InfiniteSlider gap={16} speed={30} speedOnHover={15} reverse className="py-2 mt-2">
          {stackRow2.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-[#141414] border border-[#242424] hover:border-[#FFD700]/50 transition-colors group cursor-default"
              >
                <div className="w-8 h-8 rounded-lg bg-[#1B1B1B] border border-[#2D2D2D] flex items-center justify-center text-[#FFD700] group-hover:scale-110 transition-transform">
                  <Icon className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-semibold text-white group-hover:text-[#FFE873] transition-colors">
                    {item.name}
                  </div>
                  <div className="text-[10px] text-[#737373] font-mono">
                    {item.tag}
                  </div>
                </div>
              </div>
            );
          })}
        </InfiniteSlider>
      </div>
    </section>
  );
}
