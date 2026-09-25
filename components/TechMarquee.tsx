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
  // Row 1: Frontend, Mobile, Frameworks, & Design Tools
  const row1 = [
    { name: "Next.js", Icon: SiNextdotjs, hoverClass: "hover:text-white" },
    { name: "React", Icon: SiReact, hoverClass: "hover:text-[#61DAFB]" },
    { name: "TypeScript", Icon: SiTypescript, hoverClass: "hover:text-[#3178C6]" },
    { name: "Flutter", Icon: SiFlutter, hoverClass: "hover:text-[#02569B]" },
    { name: "Tailwind CSS", Icon: SiTailwindcss, hoverClass: "hover:text-[#06B6D4]" },
    { name: "Figma", Icon: SiFigma, hoverClass: "hover:text-[#F24E1E]" },
    { name: "Swift", Icon: SiSwift, hoverClass: "hover:text-[#F05138]" },
    { name: "Kotlin", Icon: SiKotlin, hoverClass: "hover:text-[#7F52FF]" },
    { name: "Vue.js", Icon: SiVuedotjs, hoverClass: "hover:text-[#4FC08D]" },
    { name: "Vite", Icon: SiVite, hoverClass: "hover:text-[#646CFF]" },
    { name: "GraphQL", Icon: SiGraphql, hoverClass: "hover:text-[#E10098]" },
    { name: "Supabase", Icon: SiSupabase, hoverClass: "hover:text-[#3ECF8E]" },
  ];

  // Row 2: Backend, Database, Cloud & DevOps Infrastructure
  const row2 = [
    { name: "Node.js", Icon: SiNodedotjs, hoverClass: "hover:text-[#5FA04E]" },
    { name: "Go (Golang)", Icon: SiGo, hoverClass: "hover:text-[#00ADD8]" },
    { name: "Python", Icon: SiPython, hoverClass: "hover:text-[#3776AB]" },
    { name: "PostgreSQL", Icon: SiPostgresql, hoverClass: "hover:text-[#4169E1]" },
    { name: "MongoDB", Icon: SiMongodb, hoverClass: "hover:text-[#47A248]" },
    { name: "Redis", Icon: SiRedis, hoverClass: "hover:text-[#DC382D]" },
    { name: "Docker", Icon: SiDocker, hoverClass: "hover:text-[#2496ED]" },
    { name: "Kubernetes", Icon: SiKubernetes, hoverClass: "hover:text-[#326CE5]" },
    { name: "Google Cloud", Icon: SiGooglecloud, hoverClass: "hover:text-[#4285F4]" },
    { name: "Cloudflare", Icon: SiCloudflare, hoverClass: "hover:text-[#F38020]" },
    { name: "NGINX", Icon: SiNginx, hoverClass: "hover:text-[#009639]" },
    { name: "MySQL", Icon: SiMysql, hoverClass: "hover:text-[#4479A1]" },
    { name: "Git", Icon: SiGit, hoverClass: "hover:text-[#F05032]" },
    { name: "GitHub", Icon: SiGithub, hoverClass: "hover:text-white" },
  ];

  return (
    <section className="py-20 bg-[#09090B] border-y border-white/[0.06] relative overflow-hidden">
      {/* Subtle Ambient Radial Highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[180px] bg-[#FFD700]/[0.03] blur-[120px] pointer-events-none rounded-full" />

      {/* Section Header - Clean, Refined Typography */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center relative z-10">
        <p className="text-xs font-semibold text-[#D9A900] mb-2">
          Ekosistem & Teknologi Teruji
        </p>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-[family-name:var(--font-heading)]">
          Fondasi Rekayasa Perangkat Lunak Berstandar Industri
        </h2>
        <p className="text-xs sm:text-sm text-zinc-400 mt-2 max-w-lg mx-auto leading-relaxed">
          Setiap sistem dibangun dengan arsitektur modern yang cepat, aman, dan siap menangani pertumbuhan volume transaksi Anda.
        </p>
      </div>

      {/* Logo Loop - Floating Framer / React Bits Style */}
      <div className="relative w-full overflow-hidden">
        {/* Wide Gradient Masks on Edges */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-32 sm:w-56 bg-gradient-to-r from-[#09090B] via-[#09090B]/90 to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-32 sm:w-56 bg-gradient-to-l from-[#09090B] via-[#09090B]/90 to-transparent z-10" />

        {/* Row 1 - Left to Right */}
        <InfiniteSlider gap={24} speed={36} speedOnHover={14} className="py-3">
          {row1.map((item, idx) => {
            const Icon = item.Icon;
            return (
              <div
                key={idx}
                title={item.name}
                className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-white/[0.02] border border-white/[0.06] hover:border-[#FFD700]/40 hover:bg-white/[0.05] transition-all duration-300 group cursor-default shrink-0"
              >
                <Icon
                  size={20}
                  className={`text-zinc-500 transition-colors duration-300 ${item.hoverClass} group-hover:scale-110`}
                />
                <span className="text-xs font-medium text-zinc-400 group-hover:text-zinc-100 transition-colors">
                  {item.name}
                </span>
              </div>
            );
          })}
        </InfiniteSlider>

        {/* Row 2 - Right to Left (Reverse) */}
        <InfiniteSlider gap={24} speed={32} speedOnHover={14} reverse className="py-3 mt-1">
          {row2.map((item, idx) => {
            const Icon = item.Icon;
            return (
              <div
                key={idx}
                title={item.name}
                className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-white/[0.02] border border-white/[0.06] hover:border-[#FFD700]/40 hover:bg-white/[0.05] transition-all duration-300 group cursor-default shrink-0"
              >
                <Icon
                  size={20}
                  className={`text-zinc-500 transition-colors duration-300 ${item.hoverClass} group-hover:scale-110`}
                />
                <span className="text-xs font-medium text-zinc-400 group-hover:text-zinc-100 transition-colors">
                  {item.name}
                </span>
              </div>
            );
          })}
        </InfiniteSlider>
      </div>
    </section>
  );
}
