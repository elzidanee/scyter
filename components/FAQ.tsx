"use client";

import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { MotionReveal } from "@/components/ui/motion-reveal";

const faqs = [
  {
    q: "Berapa lama waktu pengerjaan proyek di ScyterCorp?",
    a: "Website company profile atau landing page biasanya 1 – 3 minggu. Sistem kustom seperti kasir POS, CMS, LMS, atau aplikasi mobile umumnya 3 – 6 minggu tergantung kelengkapan fitur.",
  },
  {
    q: "Apakah saya mendapatkan 100% source code dan kepemilikan sistem?",
    a: "Ya. Seluruh kode program, database, dan aset desain diserahkan seutuhnya setelah proyek selesai. Tanpa biaya sewa, tanpa vendor lock-in.",
  },
  {
    q: "Apa keuntungan sistem kustom dibanding aplikasi langganan bulanan?",
    a: "Bayar sekali tanpa beban lisensi bulanan per user yang terus membengkak. Fitur dan alur 100% disesuaikan dengan bisnis Anda, bukan sebaliknya.",
  },
  {
    q: "Apakah ada garansi jika terjadi bug setelah rilis?",
    a: "Ada. Masa garansi perbaikan bug gratis setelah sistem resmi diluncurkan untuk memastikan seluruh fitur stabil di operasional harian Anda.",
  },
  {
    q: "Bagaimana sistem pembayaran di ScyterCorp?",
    a: "Bertahap (termin/milestone). Uang muka saat kesepakatan, pelunasan setelah sistem selesai diuji coba dan siap digunakan di server produksi.",
  },
];

function FaqCard({ index, q, a }: { index: string; q: string; a: string }) {
  return (
    <div className="w-[300px] sm:w-[380px] shrink-0 rounded-2xl bg-[#141418] border border-white/[0.08] hover:border-[#FFD700]/40 p-5 sm:p-6 flex flex-col gap-3 transition-colors duration-200">
      <div className="flex items-center gap-3">
        <span className="text-[11px] font-mono font-bold text-[#09090B] bg-[#FFD700] rounded-md px-2 py-0.5">
          {index}
        </span>
        <h3 className="text-sm sm:text-[15px] font-semibold text-white leading-snug">{q}</h3>
      </div>
      <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">{a}</p>
    </div>
  );
}

export default function FAQ() {
  const rowA = faqs;
  const rowB = [...faqs].reverse();

  return (
    <section id="faq" className="py-16 sm:py-24 md:py-28 bg-[#09090B] relative overflow-hidden border-t border-white/[0.08]">
      {/* Gold radial glow bottom, ala demo */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 85% 60% at 50% 100%, rgba(255,215,0,0.07) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <MotionReveal>
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <span className="text-[10px] sm:text-[11px] uppercase font-mono tracking-widest text-amber-400 font-semibold">
              TANYA JAWAB // FAQ
            </span>
            <h2 className="mt-2 text-2xl sm:text-4xl lg:text-5xl font-bold text-white tracking-[-0.03em] font-[family-name:var(--font-heading)] leading-snug">
              Transparansi penuh mengenai kepemilikan,{" "}
              <span className="gold-gradient-text">timeline &amp; garansi.</span>
            </h2>
            <p className="mt-3 text-xs sm:text-base text-zinc-400 leading-relaxed">
              Jawaban singkat atas pertanyaan yang paling sering ditanyakan calon klien sebelum memulai proyek.
            </p>
          </div>
        </MotionReveal>
      </div>

      {/* Dua baris marquee berlawanan arah */}
      <MotionReveal delay={0.1}>
        <div className="relative flex flex-col gap-4 sm:gap-5">
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-10 sm:w-40 bg-gradient-to-r from-[#09090B] to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-10 sm:w-40 bg-gradient-to-l from-[#09090B] to-transparent z-10" />

          <InfiniteSlider gap={16} speed={40} speedOnHover={12}>
            {rowA.map((f, i) => (
              <FaqCard key={`a-${i}`} index={String((i % faqs.length) + 1).padStart(2, "0")} q={f.q} a={f.a} />
            ))}
          </InfiniteSlider>

          <InfiniteSlider gap={16} speed={32} speedOnHover={12} reverse>
            {rowB.map((f, i) => (
              <FaqCard key={`b-${i}`} index={String((i % faqs.length) + 1).padStart(2, "0")} q={f.q} a={f.a} />
            ))}
          </InfiniteSlider>
        </div>
      </MotionReveal>
    </section>
  );
}
