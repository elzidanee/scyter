"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Berapa lama waktu pengerjaan proyek di ScyterCorp?",
      a: "Untuk website company profile atau landing page, pengerjaan biasanya berkisar 1 – 3 minggu. Untuk sistem kustom seperti kasir POS, CMS, LMS, atau aplikasi mobile, umumnya membutuhkan waktu 3 – 6 minggu tergantung kelengkapan fitur yang disepakati.",
    },
    {
      q: "Apakah saya mendapatkan 100% source code dan kepemilikan sistem?",
      a: "Ya, betul. Seluruh kode program, database, dan aset desain diserahkan seutuhnya kepada Anda setelah proyek selesai. Tidak ada biaya sewa atau penguncian vendor.",
    },
    {
      q: "Apa keuntungan membuat sistem kustom (POS/CMS/LMS/PMS) dibanding aplikasi langganan bulanan?",
      a: "Dengan sistem kustom, Anda hanya membayar biaya pembuatan sekali tanpa beban biaya bulanan/tahunan yang terus membengkak. Fitur dan alurnya juga 100% disesuaikan dengan cara kerja bisnis Anda, bukan Anda yang harus beradaptasi dengan keterbatasan aplikasi jadi.",
    },
    {
      q: "Apakah ada garansi jika terjadi kendala atau bug setelah rilis?",
      a: "Tentu ada. Kami memberikan masa garansi perbaikan bug secara gratis setelah sistem resmi diluncurkan untuk memastikan seluruh fitur berjalan lancar di operasional harian Anda.",
    },
    {
      q: "Bagaimana sistem pembayaran di ScyterCorp?",
      a: "Kami menggunakan sistem pembayaran bertahap (termin/milestone). Dimulai dari uang muka (DP) saat awal kesepakatan, dan pelunasan dilakukan setelah sistem selesai diuji coba serta siap digunakan.",
    },
  ];

  return (
    <section id="faq" className="py-24 bg-[#09090B] relative overflow-hidden border-t border-white/[0.06]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12 space-y-2.5">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs font-mono text-amber-300 font-semibold">
            <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
            <span>TANYA JAWAB // FAQ</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight font-[family-name:var(--font-heading)]">
            Pertanyaan yang <span className="gold-gradient-text">Sering Diajukan</span>
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
            Transparansi penuh mengenai hak milik, estimasi pengerjaan, dan jaminan kualitas untuk kenyamanan Anda.
          </p>
        </div>

        <div className="space-y-3.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl bg-[#0F0F12] border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "border-amber-400/40 shadow-[0_12px_32px_rgba(0,0,0,0.5)]"
                    : "border-white/[0.08] hover:border-white/[0.16]"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left font-semibold text-white hover:text-amber-200 transition-colors cursor-pointer text-sm sm:text-base gap-4"
                >
                  <span className="leading-snug">{faq.q}</span>
                  <div
                    className={`w-7 h-7 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center shrink-0 text-amber-400 transition-transform duration-200 ${
                      isOpen ? "rotate-180 bg-amber-400/10 border-amber-400/30" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-zinc-400 leading-relaxed border-t border-white/[0.06] font-normal">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
