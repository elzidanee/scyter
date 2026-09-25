import { ShoppingCart, FileText, GraduationCap, Building2, CheckCircle2 } from "lucide-react";

export default function TrustBar() {
  const systems = [
    {
      icon: ShoppingCart,
      name: "Sistem Kasir (POS)",
      desc: "Kasir toko, cafe, resto, multi-cabang & stok barcode.",
    },
    {
      icon: FileText,
      name: "Custom CMS",
      desc: "Portal perusahaan, artikel, blog & katalog produk dinamis.",
    },
    {
      icon: GraduationCap,
      name: "LMS Kursus & Edukasi",
      desc: "Platform belajar online, video materi, ujian & sertifikat.",
    },
    {
      icon: Building2,
      name: "PMS Properti & Proyek",
      desc: "Sistem manajemen sewa kos, hotel, hingga timeline proyek.",
    },
  ];

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
            Tanpa biaya bulanan berlangganan yang mahal. Sistem dibangun sesuai kebutuhan unik Anda dan 100% jadi milik Anda.
          </p>
        </div>

        {/* 4 Systems Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {systems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-5 rounded-xl bg-[#161616] border border-[#2A2A2A] hover:border-[#FFD700]/50 transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="w-9 h-9 rounded-lg bg-[#202020] border border-[#333333] flex items-center justify-center mb-3 group-hover:border-[#FFD700]/50 transition-colors">
                  <Icon className="w-4 h-4 text-[#FFD700]" />
                </div>
                <h3 className="text-sm font-bold text-white group-hover:text-[#FFE873] transition-colors">
                  {item.name}
                </h3>
                <p className="text-xs text-[#888888] mt-1.5 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
