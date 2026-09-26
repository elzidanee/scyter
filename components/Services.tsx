"use client";

import Image from "next/image";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { MotionReveal, StaggerContainer, StaggerItem } from "@/components/ui/motion-reveal";

const services = [
  {
    image: "/images/service-web.jpg",
    badge: "Layanan Populer",
    title: "Pembuatan Website",
    desc: "Website company profile, landing page, hingga toko online yang cepat, responsif, dan mudah ditemukan di Google.",
    features: [
      "Company Profile & Landing Page",
      "Website Toko Online / Katalog",
      "Desain Eksklusif & Responsive",
      "Optimasi Kecepatan & SEO Google",
    ],
    tech: "Next.js · React · WordPress / Kustom",
  },
  {
    image: "/images/service-mobile.jpg",
    badge: "Android & iOS",
    title: "Pembuatan Mobile App",
    desc: "Aplikasi mobile yang ringan, intuitif, dan responsif untuk memperluas jangkauan pelanggan bisnis Anda.",
    features: [
      "Aplikasi Bisnis & Layanan Jasa",
      "Push Notification & WhatsApp",
      "Aplikasi Toko & Reservasi",
      "Rilis ke Google Play & App Store",
    ],
    tech: "Flutter · React Native · Firebase",
  },
  {
    image: "/images/service-uiux.jpg",
    badge: "Visual & Experience",
    title: "UI/UX Design",
    desc: "Perancangan tampilan aplikasi dan website yang memikat, user-friendly, dan nyaman untuk pengguna Anda.",
    features: [
      "Desain Figma Interaktif & Prototype",
      "Redesign Tampilan Aplikasi Lama",
      "Design System Siap Koding",
      "Uji Kenyamanan Navigasi",
    ],
    tech: "Figma · Design Tokens · Prototyping",
  },
  {
    image: "/images/service-system.jpg",
    badge: "Kustom Sesuai Bisnis",
    title: "Custom System",
    desc: "Sistem operasional kustom — POS, CMS, LMS, PMS — tanpa biaya langganan bulanan ke vendor pihak ketiga.",
    features: [
      "Kasir (POS) Toko, Resto & Inventaris",
      "CMS Pengelolaan Konten & Media",
      "LMS Kursus Online & Ujian Digital",
      "PMS Manajemen Properti & Proyek",
    ],
    tech: "Kustom Sesuai Kebutuhan Anda",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[#09090B] relative overflow-hidden border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <MotionReveal>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div className="space-y-2 max-w-xl">
              <span className="text-xs uppercase font-mono tracking-widest text-amber-300 font-semibold">
                LAYANAN UTAMA
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight font-[family-name:var(--font-heading)]">
                Solusi Digital yang{" "}
                <span className="gold-gradient-text">Fokus & Tepat Sasaran</span>
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Kami mentransformasikan kebutuhan bisnis Anda ke dalam produk digital berkualitas tinggi — dari nol hingga siap pakai dengan kepemilikan penuh.
              </p>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-300 hover:text-amber-200 transition-colors self-start sm:self-end group"
            >
              <span>Konsultasikan Kebutuhan Anda</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </MotionReveal>

        {/* 4 Cards with Photos Staggered */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((item, idx) => (
            <StaggerItem key={idx}>
              <div className="h-full rounded-2xl bg-[#0F0F12] border border-white/[0.08] hover:border-amber-400/40 transition-all duration-300 flex flex-col overflow-hidden group hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.65),inset_0_1px_0_0_rgba(255,255,255,0.06)]">
                {/* Photo */}
                <div className="relative h-44 overflow-hidden bg-zinc-950">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F12] via-[#0F0F12]/30 to-black/30" />
                  <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/10 text-[10px] font-mono font-medium text-amber-300 shadow-sm">
                    {item.badge}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="text-base font-bold text-white group-hover:text-amber-200 transition-colors font-[family-name:var(--font-heading)]">
                      {item.title}
                    </h3>
                    <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                      {item.desc}
                    </p>

                    {/* Feature Bullets */}
                    <div className="mt-4 pt-4 border-t border-white/[0.06] space-y-2">
                      {item.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2 text-xs text-zinc-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                          <span className="leading-snug">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Tech */}
                  <div className="mt-5 pt-3.5 border-t border-white/[0.06]">
                    <span className="text-[10px] text-zinc-400 block font-mono bg-white/[0.02] px-2.5 py-1.5 rounded-lg border border-white/[0.05]">
                      {item.tech}
                    </span>
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
