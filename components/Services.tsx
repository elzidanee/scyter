"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { MotionReveal, StaggerContainer, StaggerItem } from "@/components/ui/motion-reveal";

const services = [
  {
    image: "/images/service-web.jpg",
    number: "01",
    category: "WEB ENGINEERING",
    title: "Website Modern & Web Application",
    desc: "Kami membangun website berkinerja tinggi mulai dari company profile korporasi, portal berita, hingga web app interaktif yang cepat, responsif di semua perangkat, dan teroptimasi penuh untuk SEO Google.",
    tags: ["Next.js 16 SSR", "SEO Google 95+", "Company Profile", "Katalog & E-Commerce", "Admin CMS"],
    tech: "Next.js · React · TypeScript · Tailwind CSS",
  },
  {
    image: "/images/service-mobile.jpg",
    number: "02",
    category: "MOBILE DEVELOPMENT",
    title: "Aplikasi Mobile Android & iOS",
    desc: "Aplikasi mobile native & cross-platform dengan navigasi fluida, animasi 60 FPS, dan pengalaman sentuh yang intuitif. Terintegrasi penuh dengan push notification, payment gateway, dan rilis resmi ke App Store & Google Play.",
    tags: ["Flutter", "React Native", "Google Play & App Store", "Push Notification", "Payment Gateway"],
    tech: "Flutter · React Native · Firebase · Go Microservices",
  },
  {
    image: "/images/service-uiux.jpg",
    number: "03",
    category: "DESIGN ENGINEERING",
    title: "UI/UX & Interactive Design System",
    desc: "Perancangan pengalaman antarmuka visual yang modern, bersih, dan berorientasi konversi. Setiap wireframe, prototipe interaktif di Figma, dan design token dirancang rapi agar siap diimplementasikan engineer dengan presisi 1:1.",
    tags: ["Interactive Figma Prototype", "Design Tokens", "Redesign Aplikasi", "Design System", "User Journey"],
    tech: "Figma · Design Tokens · Motion Prototyping",
  },
  {
    image: "/images/service-system.jpg",
    number: "04",
    category: "ENTERPRISE AUTOMATION",
    title: "Sistem Kustom (POS, CMS, LMS, PMS)",
    desc: "Sistem perangkat lunak operasional yang dibangun khusus mengikuti alur kerja unik bisnis Anda. Tanpa biaya sewa atau royalti bulanan per user — seluruh source code, database, dan hak cipta diserahkan 100% kepada Anda.",
    tags: ["Kasir POS & Barcode", "Headless CMS", "LMS Kelas Video & Ujian", "PMS Manajemen Sewa", "Multi-Cabang"],
    tech: "PostgreSQL · Redis · Docker · Node.js · Cloud VPS",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-28 md:py-36 bg-[#09090B] relative overflow-hidden border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header (Clean Studio Editorial Style) */}
        <MotionReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-white/[0.08]">
            <div className="max-w-2xl space-y-3">
              <span className="text-[11px] uppercase font-mono tracking-widest text-amber-400 font-semibold">
                KAPABILITAS &amp; LAYANAN UTAMA
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-[-0.03em] font-[family-name:var(--font-heading)]">
                Rekayasa digital yang fokus pada{" "}
                <span className="gold-gradient-text">efisiensi &amp; hasil nyata.</span>
              </h2>
            </div>

            <p className="text-sm text-zinc-400 max-w-md leading-relaxed font-normal">
              Kami mentransformasikan visi bisnis Anda ke dalam produk digital siap rilis — terstruktur dari fondasi arsitektur hingga serah terima source code 100%.
            </p>
          </div>
        </MotionReveal>

        {/* 2x2 Clean Spacious Grid (No Cramped Card Boxes) */}
        <StaggerContainer staggerDelay={0.08} className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
          {services.map((item, idx) => (
            <StaggerItem key={idx}>
              <div className="group space-y-6">
                
                {/* Visual Showcase Container with Crisp Aspect Ratio */}
                <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-zinc-950 border border-white/[0.08] shadow-[0_12px_32px_rgba(0,0,0,0.5),inset_0_1px_0_0_rgba(255,255,255,0.06)]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover object-center transition-transform duration-500 [transition-timing-function:cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[1.03]"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#09090B]/80 via-transparent to-transparent pointer-events-none" />

                  {/* Corner Number Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/10 font-mono text-[11px] text-amber-300 font-semibold shadow-sm">
                    {item.number} &middot; {item.category}
                  </div>
                </div>

                {/* Text Description & Metadata */}
                <div className="space-y-3.5">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-amber-200 transition-colors duration-200 font-[family-name:var(--font-heading)] tracking-tight">
                      {item.title}
                    </h3>
                    <a
                      href="#contact"
                      className="shrink-0 w-8 h-8 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-zinc-400 group-hover:text-amber-300 group-hover:border-amber-400/40 group-hover:bg-amber-400/[0.06] transition-[border-color,background-color,color] duration-150 active:scale-95"
                      aria-label={`Konsultasi ${item.title}`}
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
                    {item.desc}
                  </p>

                  {/* Pill Tags (Clean Minimalist Capabilities) */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {item.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono text-zinc-300 bg-white/[0.03] border border-white/[0.06]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Tech stack line */}
                  <div className="pt-2 text-[11px] font-mono text-zinc-500">
                    Fondasi: <span className="text-zinc-400">{item.tech}</span>
                  </div>
                </div>

              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

      </div>
    </section>
  );
}
