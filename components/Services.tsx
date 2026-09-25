"use client";

import Image from "next/image";
import { CheckCircle2, ArrowRight } from "lucide-react";

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
    <section id="services" className="py-20 bg-[#0D0D0D] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div className="space-y-2 max-w-xl">
            <span className="text-xs uppercase font-bold tracking-widest text-[#FFD700]">
              Layanan Kami
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-[family-name:var(--font-heading)]">
              Solusi Digital yang{" "}
              <span className="gold-gradient-text">Fokus & Tepat Sasaran</span>
            </h2>
            <p className="text-sm text-[#888888]">
              Kami mentransformasikan kebutuhan bisnis Anda ke dalam produk digital berkualitas — dari nol hingga siap pakai.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#FFE873] hover:text-[#FFD700] transition-colors self-start sm:self-end"
          >
            <span>Konsultasikan Kebutuhan Anda</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* 4 Cards with Photos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-[#141414] border border-[#262626] hover:border-[#FFD700]/50 transition-all duration-300 flex flex-col overflow-hidden group hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(0,0,0,0.5)]"
            >
              {/* Photo */}
              <div className="relative h-44 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/40 to-transparent" />
                <span className="absolute top-3 right-3 px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-sm border border-[#2C2C2C] text-[10px] font-semibold text-[#FFE873]">
                  {item.badge}
                </span>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-base font-bold text-white group-hover:text-[#FFE873] transition-colors font-[family-name:var(--font-heading)]">
                  {item.title}
                </h3>
                <p className="text-xs text-[#888888] mt-2 leading-relaxed">
                  {item.desc}
                </p>

                {/* Feature Bullets */}
                <div className="mt-4 pt-4 border-t border-[#222222] space-y-2 flex-1">
                  {item.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-1.5 text-xs text-[#CCCCCC]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#2ECC71] mt-0.5 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Bottom Tech */}
                <div className="mt-4 pt-3 border-t border-[#222222]">
                  <span className="text-[10px] text-[#7A7A7A] block font-mono">
                    {item.tech}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
