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
    { name: "Next.js", Icon: SiNextdotjs, color: "group-hover:text-white" },
    { name: "React", Icon: SiReact, color: "group-hover:text-[#61DAFB]" },
    { name: "TypeScript", Icon: SiTypescript, color: "group-hover:text-[#3178C6]" },
    { name: "Flutter", Icon: SiFlutter, color: "group-hover:text-[#02569B]" },
    { name: "Tailwind CSS", Icon: SiTailwindcss, color: "group-hover:text-[#06B6D4]" },
    { name: "Figma", Icon: SiFigma, color: "group-hover:text-[#F24E1E]" },
    { name: "Swift", Icon: SiSwift, color: "group-hover:text-[#F05138]" },
    { name: "Kotlin", Icon: SiKotlin, color: "group-hover:text-[#7F52FF]" },
    { name: "Vue.js", Icon: SiVuedotjs, color: "group-hover:text-[#4FC08D]" },
    { name: "Vite", Icon: SiVite, color: "group-hover:text-[#646CFF]" },
    { name: "GraphQL", Icon: SiGraphql, color: "group-hover:text-[#E10098]" },
    { name: "Supabase", Icon: SiSupabase, color: "group-hover:text-[#3ECF8E]" },
  ];

  // Row 2: Backend, Database, Cloud & Infrastructure
  const row2 = [
    { name: "Node.js", Icon: SiNodedotjs, color: "group-hover:text-[#5FA04E]" },
    { name: "Go (Golang)", Icon: SiGo, color: "group-hover:text-[#00ADD8]" },
    { name: "Python", Icon: SiPython, color: "group-hover:text-[#3776AB]" },
    { name: "PostgreSQL", Icon: SiPostgresql, color: "group-hover:text-[#4169E1]" },
    { name: "MongoDB", Icon: SiMongodb, color: "group-hover:text-[#47A248]" },
    { name: "Redis", Icon: SiRedis, color: "group-hover:text-[#DC382D]" },
    { name: "Docker", Icon: SiDocker, color: "group-hover:text-[#2496ED]" },
    { name: "Kubernetes", Icon: SiKubernetes, color: "group-hover:text-[#326CE5]" },
    { name: "Google Cloud", Icon: SiGooglecloud, color: "group-hover:text-[#4285F4]" },
    { name: "Cloudflare", Icon: SiCloudflare, color: "group-hover:text-[#F38020]" },
    { name: "NGINX", Icon: SiNginx, color: "group-hover:text-[#009639]" },
    { name: "MySQL", Icon: SiMysql, color: "group-hover:text-[#4479A1]" },
    { name: "Git", Icon: SiGit, color: "group-hover:text-[#F05032]" },
    { name: "GitHub", Icon: SiGithub, color: "group-hover:text-white" },
  ];

  return (
    <section className="py-20 bg-[#0B0B0B] border-y border-[#181818] relative overflow-hidden">
      {/* Precision Grid Background Accent */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f10_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f10_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Center Ambience Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[160px] bg-[#FFD700]/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#141414] border border-[#242424] text-[11px] font-mono text-[#D4AF37] mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[#FFD700] animate-pulse" />
          <span>PRODUCTION-READY TECH STACK</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-[family-name:var(--font-heading)]">
          Didukung Ekosistem & Tools <span className="gold-gradient-text">Standar Global</span>
        </h3>
        <p className="text-xs sm:text-sm text-[#737373] mt-2 max-w-xl mx-auto leading-relaxed">
          Kami menolak teknologi usang. Setiap baris kode dibangun di atas ekosistem modern yang type-safe, cepat, dan mudah dipelihara.
        </p>
      </div>

      {/* Edge Gradient Masks for Smooth Seamless Loop */}
      <div className="relative w-full overflow-hidden">
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 sm:w-48 bg-gradient-to-r from-[#0B0B0B] via-[#0B0B0B]/80 to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 sm:w-48 bg-gradient-to-l from-[#0B0B0B] via-[#0B0B0B]/80 to-transparent z-10" />

        {/* Marquee Row 1 - Left to Right */}
        <InfiniteSlider gap={16} speed={38} speedOnHover={12} className="py-2">
          {row1.map((item, idx) => {
            const Icon = item.Icon;
            return (
              <div
                key={idx}
                title={item.name}
                className="w-16 h-16 sm:w-[72px] sm:h-[72px] rounded-xl bg-[#111111] border border-[#222222] hover:border-[#FFD700]/60 flex items-center justify-center transition-all duration-300 group cursor-pointer hover:scale-105 hover:bg-[#161616] hover:shadow-[0_0_20px_rgba(255,215,0,0.15)] shrink-0"
              >
                <Icon
                  size={30}
                  className={`text-[#7A7A7A] transition-all duration-300 ${item.color} group-hover:scale-110`}
                />
              </div>
            );
          })}
        </InfiniteSlider>

        {/* Marquee Row 2 - Right to Left (Reverse) */}
        <InfiniteSlider gap={16} speed={34} speedOnHover={12} reverse className="py-2 mt-2">
          {row2.map((item, idx) => {
            const Icon = item.Icon;
            return (
              <div
                key={idx}
                title={item.name}
                className="w-16 h-16 sm:w-[72px] sm:h-[72px] rounded-xl bg-[#111111] border border-[#222222] hover:border-[#FFD700]/60 flex items-center justify-center transition-all duration-300 group cursor-pointer hover:scale-105 hover:bg-[#161616] hover:shadow-[0_0_20px_rgba(255,215,0,0.15)] shrink-0"
              >
                <Icon
                  size={30}
                  className={`text-[#7A7A7A] transition-all duration-300 ${item.color} group-hover:scale-110`}
                />
              </div>
            );
          })}
        </InfiniteSlider>
      </div>
    </section>
  );
}
