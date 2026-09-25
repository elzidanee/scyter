import { Globe, Smartphone, Layout, Settings, CheckCircle2, ArrowRight } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Globe,
      badge: "Layanan Populer",
      title: "Pembuatan Website",
      desc: "Website company profile, landing page promosi, web portal, hingga toko online yang cepat, responsif, dan mudah ditemukan di Google.",
      features: [
        "Company Profile & Landing Page",
        "Website Toko Online / Katalog",
        "Desain Mewah & Responsive Semua Device",
        "Optimasi Kecepatan & SEO Google",
      ],
      tech: "Next.js · React · WordPress / Kustom",
    },
    {
      icon: Smartphone,
      badge: "Android & iOS",
      title: "Pembuatan Mobile App",
      desc: "Aplikasi mobile yang ringan, intuitif, dan responsif untuk memperluas jangkauan pelanggan dan mempermudah operasional bisnis.",
      features: [
        "Aplikasi Bisnis & Layanan Jasa",
        "Aplikasi Toko & Reservasi",
        "Push Notification & Notifikasi WhatsApp",
        "Bantuan Rilis ke Google Play & App Store",
      ],
      tech: "Flutter · React Native · Firebase",
    },
    {
      icon: Layout,
      badge: "Visual & Experience",
      title: "UI/UX Design",
      desc: "Perancangan tampilan aplikasi dan website yang memikat, user-friendly, dan dirancang berdasarkan kenyamanan pengguna Anda.",
      features: [
        "Desain Figma Interaktif & Prototype",
        "Redesign Tampilan Aplikasi / Web Lama",
        "Design System & Komponen Siap Koding",
        "Uji Kenyamanan Navigasi Pengguna",
      ],
      tech: "Figma · Design Tokens · Prototyping",
    },
    {
      icon: Settings,
      badge: "Kustom Sesuai Bisnis",
      title: "Custom System (POS, CMS, LMS, PMS)",
      desc: "Sistem operasional kustom untuk mempermudah bisnis Anda tanpa harus membayar biaya langganan bulanan ke vendor pihak ketiga.",
      features: [
        "Kasir (POS) Toko, Resto & Inventaris",
        "CMS Pengelolaan Konten & Media",
        "LMS Kursus Online & Ujian Digital",
        "PMS Manajemen Properti, Kost & Proyek",
      ],
      tech: "Kustom Sesuai Kebutuhan Anda",
    },
  ];

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
              Solusi Digital yang <span className="gold-gradient-text">Fokus & Tepat Sasaran</span>
            </h2>
            <p className="text-sm text-[#888888]">
              Kami membantu mentransformasikan kebutuhan bisnis Anda ke dalam produk digital siap pakai dengan kualitas terbaik.
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

        {/* 4 Clean Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#141414] border border-[#262626] hover:border-[#FFD700]/50 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(0,0,0,0.5)]"
              >
                <div>
                  {/* Icon & Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#1E1E1E] border border-[#2E2E2E] flex items-center justify-center group-hover:border-[#FFD700]/50 group-hover:bg-[#252525] transition-all">
                      <Icon className="w-5 h-5 text-[#FFD700]" />
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full bg-[#1C1C1C] border border-[#2C2C2C] text-[10px] font-medium text-[#FFE873]">
                      {item.badge}
                    </span>
                  </div>

                  {/* Title & Desc */}
                  <h3 className="text-base font-bold text-white group-hover:text-[#FFE873] transition-colors font-[family-name:var(--font-heading)]">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#888888] mt-2 leading-relaxed">
                    {item.desc}
                  </p>

                  {/* Feature Bullets */}
                  <div className="mt-4 pt-4 border-t border-[#222222] space-y-2">
                    {item.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-1.5 text-xs text-[#CCCCCC]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#2ECC71] mt-0.5 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Tech */}
                <div className="mt-5 pt-3 border-t border-[#222222]">
                  <span className="text-[10px] text-[#7A7A7A] block font-mono">
                    {item.tech}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
