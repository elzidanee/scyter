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
    <section id="faq" className="py-20 bg-[#121212] relative overflow-hidden border-t border-[#262626]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-10 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#181818] border border-[#2E2E2E] text-xs font-semibold text-[#FFD700]">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Tanya Jawab</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-[family-name:var(--font-heading)]">
            Pertanyaan yang <span className="gold-gradient-text">Sering Diajukan</span>
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-xl bg-[#161616] border border-[#262626] transition-all overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-4 sm:p-5 text-left font-semibold text-white hover:text-[#FFE873] transition-colors cursor-pointer text-sm sm:text-base"
                >
                  <span className="pr-4">{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#FFD700] shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-4 sm:px-5 pb-4 sm:pb-5 pt-1 text-xs sm:text-sm text-[#888888] leading-relaxed border-t border-[#202020]">
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
