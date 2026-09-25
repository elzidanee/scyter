import Image from "next/image";

const systems = [
  {
    image: "/images/system-pos.jpg",
    name: "Sistem Kasir (POS)",
    desc: "Kasir toko, cafe, resto, multi-cabang & stok barcode.",
  },
  {
    image: "/images/system-cms.jpg",
    name: "Custom CMS",
    desc: "Portal perusahaan, artikel, blog & katalog produk dinamis.",
  },
  {
    image: "/images/system-lms.jpg",
    name: "LMS Kursus & Edukasi",
    desc: "Platform belajar online, video materi, ujian & sertifikat.",
  },
  {
    image: "/images/system-pms.jpg",
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
              Custom System Solutif
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-white mt-1 font-[family-name:var(--font-heading)]">
              Sistem Kustom Siap Pakai & Disesuaikan dengan Bisnis Anda
            </h2>
          </div>
          <p className="text-xs text-[#888888] max-w-sm">
            Tanpa biaya langganan bulanan. Sistem dibangun sesuai kebutuhan unik Anda dan 100% jadi milik Anda.
          </p>
        </div>

        {/* 4 Systems Grid with Photos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {systems.map((item, idx) => (
            <div
              key={idx}
              className="rounded-xl overflow-hidden bg-[#161616] border border-[#2A2A2A] hover:border-[#FFD700]/50 transition-all duration-300 hover:-translate-y-1 group"
            >
              {/* Photo */}
              <div className="relative h-36 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#161616] via-[#161616]/50 to-transparent" />
              </div>

              {/* Text */}
              <div className="p-4">
                <h3 className="text-sm font-bold text-white group-hover:text-[#FFE873] transition-colors">
                  {item.name}
                </h3>
                <p className="text-xs text-[#888888] mt-1.5 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
