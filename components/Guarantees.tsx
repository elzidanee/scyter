import {
  ShieldCheck,
  FileCheck,
  Wrench,
  CreditCard,
  CheckCircle,
} from "lucide-react";

export default function Guarantees() {
  const guarantees = [
    {
      icon: ShieldCheck,
      title: "100% Kepemilikan Source Code (IP)",
      desc: "Seluruh baris kode, arsitektur sistem, skema database, dan aset desain diserahkan seutuhnya menjadi aset perusahaan Anda. Tanpa royalti tersembunyi.",
      tag: "Tanpa Vendor Lock-in",
    },
    {
      icon: FileCheck,
      title: "Perjanjian Kerahasiaan (NDA) Mengikat",
      desc: "Ide bisnis, algoritma proprietary, dan rahasia dagang Anda dilindungi hukum secara ketat sebelum diskusi teknis perdana dimulai.",
      tag: "Perlindungan Hukum",
    },
    {
      icon: Wrench,
      title: "Garansi Bug-Free Purna Rilis",
      desc: "Kami memberikan jaminan perbaikan bug gratis hingga 90 hari setelah sistem live, memastikan stabilitas optimal di bawah beban operasional riil.",
      tag: "Dukungan Pasca Rilis",
    },
    {
      icon: CreditCard,
      title: "Pembayaran Berbasis Milestone Terverifikasi",
      desc: "Termin pembayaran dibagi berdasarkan penyelesaian tahap sprint yang Anda review dan setujui sendiri, menjamin keadilan kedua belah pihak.",
      tag: "Transparan & Aman",
    },
  ];

  return (
    <section className="py-20 bg-[#121212] border-y border-[#262626]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <p className="text-xs uppercase font-bold tracking-widest text-[#FFD700]">
            Kenyamanan Kerja Sama
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-[family-name:var(--font-heading)]">
            Empat Komitmen Mutlak untuk{" "}
            <span className="gold-gradient-text">Keamanan Investasi Anda</span>
          </h2>
          <p className="text-sm text-[#A3A3A3]">
            Kami memperlakukan setiap proyek klien dengan dedikasi dan standar etika tertinggi sebagaimana kami membangun produk kami sendiri.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {guarantees.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#181818] border border-[#2A2A2A] hover:border-[#FFD700]/50 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#222222] border border-[#333333] flex items-center justify-center group-hover:border-[#FFD700]/60 transition-colors">
                      <Icon className="w-5 h-5 text-[#FFD700]" />
                    </div>
                    <span className="px-2 py-0.5 rounded bg-[#202020] text-[10px] font-mono text-[#D9A900]">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-white group-hover:text-[#FFE873] transition-colors font-[family-name:var(--font-heading)]">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#A3A3A3] mt-2 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
