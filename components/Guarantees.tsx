import { ShieldCheck, Wrench, Sparkles, MessageCircle } from "lucide-react";

export default function Guarantees() {
  const guarantees = [
    {
      icon: ShieldCheck,
      title: "100% Hak Milik Kode",
      desc: "Seluruh kode program dan database diserahkan penuh kepada Anda tanpa biaya sewa tersembunyi.",
    },
    {
      icon: Wrench,
      title: "Garansi Perbaikan Bug",
      desc: "Dukungan garansi gratis perbaikan jika ditemukan kendala teknis setelah sistem resmi digunakan.",
    },
    {
      icon: Sparkles,
      title: "Desain Kustom Eksklusif",
      desc: "Tampilan visual dirancang unik mengikuti karakter brand Anda, bukan sekadar template pasaran.",
    },
    {
      icon: MessageCircle,
      title: "Komunikasi Responsif",
      desc: "Konsultasi mudah via WhatsApp dengan tim teknis yang siap menjawab kebutuhan Anda.",
    },
  ];

  return (
    <section className="py-16 bg-[#0D0D0D] border-t border-[#262626]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {guarantees.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-5 rounded-xl bg-[#141414] border border-[#262626] flex items-start gap-3.5 hover:border-[#FFD700]/40 transition-colors"
              >
                <div className="w-9 h-9 rounded-lg bg-[#1F1F1F] border border-[#303030] flex items-center justify-center shrink-0 text-[#FFD700]">
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white font-[family-name:var(--font-heading)]">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#888888] mt-1 leading-relaxed">
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
