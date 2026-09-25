"use client";

import { InfiniteSlider } from "@/components/ui/infinite-slider";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiFlutter,
  SiTailwindcss,
  SiFigma,
  SiSwift,
  SiKotlin,
  SiVuedotjs,
  SiVite,
  SiGraphql,
  SiSupabase,
  SiNodedotjs,
  SiGo,
  SiPython,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiDocker,
  SiKubernetes,
  SiGooglecloud,
  SiCloudflare,
  SiNginx,
  SiMysql,
  SiGit,
  SiGithub,
} from "@icons-pack/react-simple-icons";

export default function TechMarquee() {
  // Row 1: Frontend, Mobile, Frameworks, & Design
  const row1 = [
    { name: "Next.js", Icon: SiNextdotjs, hoverColor: "hover:text-white" },
    { name: "React", Icon: SiReact, hoverColor: "hover:text-[#61DAFB]" },
    { name: "TypeScript", Icon: SiTypescript, hoverColor: "hover:text-[#3178C6]" },
    { name: "Flutter", Icon: SiFlutter, hoverColor: "hover:text-[#02569B]" },
    { name: "Tailwind CSS", Icon: SiTailwindcss, hoverColor: "hover:text-[#06B6D4]" },
    { name: "Figma", Icon: SiFigma, hoverColor: "hover:text-[#F24E1E]" },
    { name: "Swift", Icon: SiSwift, hoverColor: "hover:text-[#F05138]" },
    { name: "Kotlin", Icon: SiKotlin, hoverColor: "hover:text-[#7F52FF]" },
    { name: "Vue.js", Icon: SiVuedotjs, hoverColor: "hover:text-[#4FC08D]" },
    { name: "Vite", Icon: SiVite, hoverColor: "hover:text-[#646CFF]" },
    { name: "GraphQL", Icon: SiGraphql, hoverColor: "hover:text-[#E10098]" },
    { name: "Supabase", Icon: SiSupabase, hoverColor: "hover:text-[#3ECF8E]" },
  ];

  // Row 2: Backend, Database, Cloud & DevOps
  const row2 = [
    { name: "Node.js", Icon: SiNodedotjs, hoverColor: "hover:text-[#5FA04E]" },
    { name: "Go (Golang)", Icon: SiGo, hoverColor: "hover:text-[#00ADD8]" },
    { name: "Python", Icon: SiPython, hoverColor: "hover:text-[#3776AB]" },
    { name: "PostgreSQL", Icon: SiPostgresql, hoverColor: "hover:text-[#4169E1]" },
    { name: "MongoDB", Icon: SiMongodb, hoverColor: "hover:text-[#47A248]" },
    { name: "Redis", Icon: SiRedis, hoverColor: "hover:text-[#DC382D]" },
    { name: "Docker", Icon: SiDocker, hoverColor: "hover:text-[#2496ED]" },
    { name: "Kubernetes", Icon: SiKubernetes, hoverColor: "hover:text-[#326CE5]" },
    { name: "Google Cloud", Icon: SiGooglecloud, hoverColor: "hover:text-[#4285F4]" },
    { name: "Cloudflare", Icon: SiCloudflare, hoverColor: "hover:text-[#F38020]" },
    { name: "NGINX", Icon: SiNginx, hoverColor: "hover:text-[#009639]" },
    { name: "MySQL", Icon: SiMysql, hoverColor: "hover:text-[#4479A1]" },
    { name: "Git", Icon: SiGit, hoverColor: "hover:text-[#F05032]" },
    { name: "GitHub", Icon: SiGithub, hoverColor: "hover:text-white" },
  ];

  return (
    <section className="py-16 bg-[#0D0D0D] border-y border-[#1C1C1C] relative overflow-hidden">
      {/* Background Ambience Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[150px] bg-[#FFD700]/5 blur-[110px] pointer-events-none rounded-full" />

      {/* Section Subtitle */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
        <span className="text-[11px] font-mono uppercase tracking-widest text-[#FFD700] px-3 py-1 rounded-full bg-[#FFD700]/10 border border-[#FFD700]/20 inline-block mb-2">
          Enterprise Tech Ecosystem
        </span>
        <h3 className="text-xl sm:text-2xl font-bold text-white font-[family-name:var(--font-heading)]">
          Fondasi Teknologi Modern & Teruji
        </h3>
        <p className="text-xs sm:text-sm text-[#888888] mt-1 max-w-xl mx-auto">
          Arsitektur teruji skala enterprise untuk kestabilan, kecepatan, dan keamanan sistem Anda.
        </p>
      </div>

      {/* Edge Gradient Masks for Smooth Fading */}
      <div className="relative w-full overflow-hidden">
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 sm:w-48 bg-gradient-to-r from-[#0D0D0D] to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 sm:w-48 bg-gradient-to-l from-[#0D0D0D] to-transparent z-10" />

        {/* Marquee Row 1 - Left to Right */}
        <InfiniteSlider gap={20} speed={40} speedOnHover={15} className="py-2.5">
          {row1.map((item, idx) => {
            const Icon = item.Icon;
            return (
              <div
                key={idx}
                title={item.name}
                aria-label={item.name}
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[#141414] border border-[#242424] hover:border-[#FFD700]/60 flex items-center justify-center transition-all duration-300 group cursor-pointer hover:scale-110 hover:shadow-[0_0_24px_rgba(255,215,0,0.18)] shrink-0"
              >
                <Icon
                  size={32}
                  className={`text-[#8E8E8E] transition-all duration-300 ${item.hoverColor} group-hover:scale-110`}
                />
              </div>
            );
          })}
        </InfiniteSlider>

        {/* Marquee Row 2 - Right to Left (Reverse) */}
        <InfiniteSlider gap={20} speed={36} speedOnHover={15} reverse className="py-2.5 mt-2">
          {row2.map((item, idx) => {
            const Icon = item.Icon;
            return (
              <div
                key={idx}
                title={item.name}
                aria-label={item.name}
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[#141414] border border-[#242424] hover:border-[#FFD700]/60 flex items-center justify-center transition-all duration-300 group cursor-pointer hover:scale-110 hover:shadow-[0_0_24px_rgba(255,215,0,0.18)] shrink-0"
              >
                <Icon
                  size={32}
                  className={`text-[#8E8E8E] transition-all duration-300 ${item.hoverColor} group-hover:scale-110`}
                />
              </div>
            );
          })}
        </InfiniteSlider>
      </div>
    </section>
  );
}
