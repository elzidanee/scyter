"use client";

import TextLoop, { TextLoopItem } from "@/components/ui/TextLoop";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiFlutter,
  SiTailwindcss,
  SiNodedotjs,
  SiGo,
  SiPython,
  SiPostgresql,
  SiDocker,
  SiKubernetes,
  SiSupabase,
  SiMongodb,
  SiRedis,
  SiCloudflare,
  SiGooglecloud,
  SiFigma,
  SiSwift,
  SiKotlin,
  SiVuedotjs,
  SiGit,
  SiGithub,
} from "@icons-pack/react-simple-icons";

export default function TechMarquee() {
  const techStacks: TextLoopItem[] = [
    { name: "Next.js", Icon: SiNextdotjs },
    { name: "React", Icon: SiReact },
    { name: "TypeScript", Icon: SiTypescript },
    { name: "Flutter", Icon: SiFlutter },
    { name: "Tailwind CSS", Icon: SiTailwindcss },
    { name: "Node.js", Icon: SiNodedotjs },
    { name: "Golang", Icon: SiGo },
    { name: "Python", Icon: SiPython },
    { name: "PostgreSQL", Icon: SiPostgresql },
    { name: "Docker", Icon: SiDocker },
    { name: "Kubernetes", Icon: SiKubernetes },
    { name: "Supabase", Icon: SiSupabase },
    { name: "MongoDB", Icon: SiMongodb },
    { name: "Redis", Icon: SiRedis },
    { name: "Cloudflare", Icon: SiCloudflare },
    { name: "Google Cloud", Icon: SiGooglecloud },
    { name: "Figma", Icon: SiFigma },
    { name: "Swift", Icon: SiSwift },
    { name: "Kotlin", Icon: SiKotlin },
    { name: "Vue.js", Icon: SiVuedotjs },
    { name: "Git", Icon: SiGit },
    { name: "GitHub", Icon: SiGithub },
  ];

  return (
    <section className="py-10 sm:py-14 md:py-16 bg-[#09090B] border-y border-white/[0.06] relative overflow-hidden">
      {/* Subtle Ambient Radial Highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[180px] bg-[#FFD700]/[0.03] blur-[120px] pointer-events-none rounded-full" />

      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4 sm:mb-6 text-center relative z-10">
        <p className="text-[11px] sm:text-xs font-semibold text-[#D9A900] mb-1.5 sm:mb-2">
          Ekosistem &amp; Teknologi Teruji
        </p>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-white font-[family-name:var(--font-heading)]">
          Fondasi Rekayasa Perangkat Lunak Berstandar Industri
        </h2>
        <p className="text-xs sm:text-sm text-zinc-400 mt-1.5 sm:mt-2 max-w-lg mx-auto leading-relaxed">
          Setiap sistem dibangun dengan arsitektur modern yang cepat, aman, dan siap menangani pertumbuhan volume transaksi Anda.
        </p>
      </div>

      {/* Tech Loop with Icons & Titles along Curved Ribbon */}
      <div className="relative w-full overflow-hidden">
        {/* Edge Gradient Masks */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-10 sm:w-32 md:w-56 bg-gradient-to-r from-[#09090B] via-[#09090B]/90 to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-10 sm:w-32 md:w-56 bg-gradient-to-l from-[#09090B] via-[#09090B]/90 to-transparent z-10" />

        <TextLoop
          items={techStacks}
          shape="wave"
          curviness={36}
          speed={70}
          separator="✦"
          fontSize={14}
          fontWeight={750}
          letterSpacing={1.2}
          color="#09090B"
          ribbon
          ribbonColor="#FFD700"
          ribbonWidth={50}
          pauseOnHover
          viewHeight={170}
          itemSpacing={200}
        />
      </div>
    </section>
  );
}
