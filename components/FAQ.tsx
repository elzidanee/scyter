"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { MotionReveal } from "@/components/ui/motion-reveal";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Berapa lama waktu pengerjaan proyek di ScyterCorp?",
      a: "Untuk website company profile atau landing page, pengerjaan biasanya berkisar 1 – 3 minggu. Untuk sistem kustom seperti kasir POS, CMS, LMS, atau aplikasi mobile, umumnya membutuhkan waktu 3 – 6 minggu tergantung kelengkapan fitur yang disepakati.",
    },
    {
      q: "Apakah saya mendapatkan 100% source code dan kepemilikan sistem?",
      a: "Ya, betul. Seluruh kode program, database, dan aset desain diserahkan seutuhnya kepada Anda setelah proyek selesai. Tidak ada biaya sewa atau penguncian vendor (zero vendor lock-in).",
    },
    {
      q: "Apa keuntungan membuat sistem kustom (POS/CMS/LMS/PMS) dibanding aplikasi langganan bulanan?",
      a: "Dengan sistem kustom, Anda hanya membayar biaya pembuatan sekali tanpa beban biaya bulanan atau tahunan per lisensi user yang terus membengkak. Fitur dan alurnya juga 100% disesuaikan dengan alur unik bisnis Anda, bukan Anda yang harus beradaptasi dengan keterbatasan aplikasi jadi.",
    },
    {
      q: "Apakah ada garansi jika terjadi kendala atau bug setelah rilis?",
      a: "Tentu ada. Kami memberikan masa garansi perbaikan bug secara gratis setelah sistem resmi diluncurkan untuk memastikan seluruh fitur berjalan stabil di operasional harian Anda.",
    },
    {
      q: "Bagaimana sistem pembayaran di ScyterCorp?",
      a: "Kami menggunakan sistem pembayaran bertahap (termin/milestone). Dimulai dari uang muka (DP) saat awal kesepakatan, dan pelunasan dilakukan setelah sistem selesai diuji coba serta siap digunakan di server produksi.",
    },
  ];

  return (
    <section id="faq" className="py-16 sm:py-24 md:py-36 bg-[#09090B] relative overflow-hidden border-t border-white/[0.08]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <MotionReveal>
          <div className="mb-10 space-y-2 sm:space-y-3 pb-6 sm:mb-16 sm:pb-8 border-b border-white/[0.08]">
            <span className="text-[10px] sm:text-[11px] uppercase font-mono tracking-widest text-amber-400 font-semibold">
              TANYA JAWAB // FAQ
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white tracking-[-0.03em] font-[family-name:var(--font-heading)] leading-snug">
              Transparansi penuh mengenai kepemilikan,{" "}
              <span className="gold-gradient-text">timeline &amp; garansi.</span>
            </h2>
          </div>
        </MotionReveal>

        {/* Minimalist Divider Accordion (Clean Studio Agency Style) */}
        <MotionReveal delay={0.1}>
          <div className="divide-y divide-white/[0.08]">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={index} className="py-4 sm:py-6 group">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full flex items-center justify-between text-left transition-colors duration-150 cursor-pointer gap-4 sm:gap-6"
                  >
                    <span className={`text-sm sm:text-lg font-medium tracking-tight transition-colors duration-150 ${
                      isOpen ? "text-amber-300 font-semibold" : "text-zinc-100 group-hover:text-white"
                    }`}>
                      {faq.q}
                    </span>
                    <div
                      className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full border flex items-center justify-center shrink-0 transition-[transform,border-color,background-color] duration-200 [transition-timing-function:cubic-bezier(0.23,1,0.32,1)] ${
                        isOpen
                          ? "border-amber-400/40 bg-amber-400/10 text-amber-300 rotate-180"
                          : "border-white/[0.1] bg-white/[0.02] text-zinc-400 group-hover:border-white/[0.2] group-hover:text-white"
                      }`}
                    >
                      <ChevronDown className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pt-3 sm:pt-4 pr-4 sm:pr-12 text-xs sm:text-base text-zinc-400 leading-relaxed font-normal">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </MotionReveal>

      </div>
    </section>
  );
}
