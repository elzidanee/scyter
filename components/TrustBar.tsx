import Image from "next/image";

const systems = [
  {
    // image: "/images/projects/pos-preview.jpg",  ← taruh screenshot POS di sini
    accent: "#D9A900",
    name: "Sistem Kasir (POS)",
    desc: "Kasir toko, cafe, resto, multi-cabang & stok barcode.",
  },
  {
    // image: "/images/projects/cms-preview.jpg",
    accent: "#5B7CF6",
    name: "Custom CMS",
    desc: "Portal perusahaan, artikel, blog & katalog produk dinamis.",
  },
  {
    // image: "/images/projects/lms-preview.jpg",
    accent: "#2ECC71",
    name: "LMS Kursus & Edukasi",
    desc: "Platform belajar online, video materi, ujian & sertifikat.",
  },
  {
    // image: "/images/projects/pms-preview.jpg",
    accent: "#9B59B6",
    name: "PMS Properti & Proyek",
    desc: "Sistem manajemen sewa kos, hotel, hingga timeline proyek.",
  },
];

export default function TrustBar() {
  return (
    <section id="custom-systems" className="py-12 bg-[#121212] border-y border-[#262626]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <span className="text-xs uppercase font-bold tracking-widest text-[#FFD700]">
              Custom System
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-white mt-1 font-[family-name:var(--font-heading)]">
              Sistem Kustom Siap Pakai, 100% Milik Anda
            </h2>
          </div>
          <p className="text-xs text-[#888888] max-w-sm">
            Tanpa biaya langganan bulanan. Dibangun sesuai kebutuhan unik bisnis Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {systems.map((item, idx) => (
            <div
              key={idx}
              className="rounded-xl overflow-hidden bg-[#161616] border border-[#2A2A2A] hover:border-[#FFD700]/50 transition-all duration-300 hover:-translate-y-1 group"
            >
              {/* Preview area */}
              <div className="relative h-32 overflow-hidden">
                {(item as { image?: string }).image ? (
                  <Image
                    src={(item as unknown as { image: string }).image}
                    alt={item.name}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    sizes="25vw"
                  />
                ) : (
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `radial-gradient(ellipse at 60% 30%, ${item.accent}15 0%, transparent 65%), #161616`,
                    }}
                  >
                    <div
                      className="absolute inset-0 opacity-[0.07]"
                      style={{
                        backgroundImage: `linear-gradient(${item.accent} 1px, transparent 1px), linear-gradient(90deg, ${item.accent} 1px, transparent 1px)`,
                        backgroundSize: "22px 22px",
                      }}
                    />
                    {/* Simulated UI bars */}
                    <div className="absolute inset-0 flex flex-col justify-center px-4 gap-2">
                      <div
                        className="h-1.5 rounded-full w-3/4 opacity-20"
                        style={{ background: item.accent }}
                      />
                      <div
                        className="h-1.5 rounded-full w-1/2 opacity-15"
                        style={{ background: item.accent }}
                      />
                      <div
                        className="h-1.5 rounded-full w-2/3 opacity-10"
                        style={{ background: item.accent }}
                      />
                    </div>
                    {/* Color dot accent */}
                    <div
                      className="absolute top-3 right-3 w-2 h-2 rounded-full"
                      style={{ background: item.accent, boxShadow: `0 0 6px ${item.accent}` }}
                    />
                  </div>
                )}
              </div>

              {/* Text */}
              <div className="p-4">
                <h3
                  className="text-sm font-bold text-white group-hover:transition-colors"
                  style={{ transition: "color 0.2s" }}
                >
                  {item.name}
                </h3>
                <p className="text-xs text-[#888888] mt-1.5 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
