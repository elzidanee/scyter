import { Quote, Star } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      quote:
        "ScyterCorp adalah sedikit dari software house yang benar-benar memahami arsitektur distributed systems dan zero-downtime release. Payment gateway kami berjalan lancar tanpa satu pun incident saat flash sale akhir tahun.",
      author: "Raditya Prakoso",
      role: "VP of Engineering",
      company: "Regional Fintech Group",
      metrics: "Throughput 15k tps tercapai tanpa insiden",
    },
    {
      quote:
        "Kecepatan delivery dan kualitas kode mereka luar biasa. Sistem dispatch armada kami selesai dalam 8 sprint dengan penghematan biaya server yang terbukti 35% lebih rendah dibanding estimasi awal kami.",
      author: "Hendri Gunawan",
      role: "Chief Technology Officer",
      company: "Supply Chain & Logistics Corp",
      metrics: "Efisiensi rute armada meningkat 28%",
    },
    {
      quote:
        "Sangat terkesan dengan ketatnya penerapan SLA dan kepatuhan regulasi SatuSehat Kemenkes. Dokumentasi teknis dan penyerahan kode sangat rapi sehingga tim in-house kami dapat melanjutkannya dengan mudah.",
      author: "dr. Maya Anindita",
      role: "Head of Digital Transformation",
      company: "Healthcare Hospital Network",
      metrics: "100% Lulus akreditasi rekam medis digital",
    },
  ];

  return (
    <section className="py-24 bg-[#0D0D0D] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <p className="text-xs uppercase font-bold tracking-widest text-[#FFD700]">
            Suara Klien
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-[family-name:var(--font-heading)]">
            Dipercaya Oleh Para <span className="gold-gradient-text">Pemimpin Teknologi</span>
          </h2>
          <p className="text-base text-[#A3A3A3]">
            Testimoni jujur dari CTO, VP Engineering, dan Product Leaders yang mempercayakan platform strategis mereka kepada ScyterCorp.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-[#141414] border border-[#262626] hover:border-[#FFD700]/40 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5 hover:shadow-[0_16px_36px_rgba(0,0,0,0.5)]"
            >
              <div>
                {/* Stars and Quote Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-[#FFD700] text-[#FFD700]"
                      />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-[#333333] group-hover:text-[#FFD700]/50 transition-colors" />
                </div>

                <p className="text-sm text-[#CCCCCC] leading-relaxed italic">
                  &ldquo;{rev.quote}&rdquo;
                </p>

                <div className="mt-6 p-3 rounded-lg bg-[#1A1A1A] border border-[#2A2A2A] text-xs font-semibold text-[#FFE873]">
                  ⚡ {rev.metrics}
                </div>
              </div>

              {/* Author Info */}
              <div className="pt-6 mt-6 border-t border-[#262626]">
                <h4 className="text-sm font-bold text-white font-[family-name:var(--font-heading)]">
                  {rev.author}
                </h4>
                <p className="text-xs text-[#7A7A7A]">
                  {rev.role} · <span className="text-[#A3A3A3]">{rev.company}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
