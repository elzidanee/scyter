"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Berapa lama rata-rata waktu yang dibutuhkan untuk menyelesaikan sebuah proyek?",
      a: "Tergantung pada skala dan kompleksitas proyek. Untuk Minimum Viable Product (MVP) yang fokus pada core fitur, durasi pengerjaan berkisar antara 4 hingga 8 minggu. Untuk platform enterprise skala besar, arsitektur microservices, atau integrasi legacy, sprint berlangsung antara 8 hingga 16 minggu. Kami selalu menyepakati jadwal sprint pasti sebelum kontrak dimulai.",
    },
    {
      q: "Apakah perusahaan kami mendapatkan 100% kepemilikan source code dan hak cipta?",
      a: "Ya, 100% mutlak. Seluruh source code, skema database, artefak arsitektur, dan aset visual menjadi hak milik intelektual (IP) penuh klien Anda. Kami mentransfer repositori Git langsung ke organisasi perusahaan Anda setelah pelunasan milestone akhir tanpa ada royalti tersembunyi atau penguncian vendor.",
    },
    {
      q: "Bagaimana skema pembayaran di ScyterCorp?",
      a: "Kami menggunakan skema pembayaran bertahap (Milestone-Based). Pembayaran dipecah menjadi beberapa termin yang terikat pada keberhasilan deliverable tertentu (misalnya: DP 25–30% saat Discovery & Arsitektur, termin sprint demo, dan pelunasan saat lolos UAT & Go-Live). Anda hanya membayar ketika deliverable terbukti selesai.",
    },
    {
      q: "Bagaimana ScyterCorp menjamin kerahasiaan ide dan data perusahaan kami?",
      a: "Sebelum Anda membagikan dokumen atau mendiskusikan rahasia teknis, kami menandatangani Non-Disclosure Agreement (NDA) resmi yang mengikat secara hukum. Semua developer dan arsitek kami juga terikat NDA internal dengan akses repositori berbasis prinsip least-privilege.",
    },
    {
      q: "Apakah ada garansi jika ditemukan bug setelah sistem resmi diluncurkan?",
      a: "Tentu. Setiap proyek ScyterCorp dilengkapi dengan Garansi Pemeliharaan Bug-Free gratis selama 30 hingga 90 hari pasca go-live. Jika terjadi kegagalan sistem atau bug yang tidak sesuai dengan spesifikasi awal, tim kami akan memperbaikinya dengan prioritas darurat tanpa biaya tambahan.",
    },
    {
      q: "Bisakah ScyterCorp melanjutkan sistem yang sebelumnya dibuat oleh vendor lain?",
      a: "Bisa. Kami memiliki spesialisasi dalam Legacy System Modernization. Kami akan memulai dengan Architecture & Codebase Health Audit untuk memeriksa kualitas kode, utang teknis, keamanan, dan celah performa sebelum merekomendasikan apakah sistem layak dilanjutkan atau perlu refactoring bertahap.",
    },
    {
      q: "Bagaimana jika kami ingin menambah atau mengubah fitur di tengah proses pengerjaan?",
      a: "Kami menerapkan metodologi Agile fleksibel. Jika terdapat penambahan atau modifikasi fitur di tengah sprint, kami akan menghitung dampaknya terhadap estimasi waktu dan biaya melalui Change Request (CR) transparan, sehingga Anda dapat memutuskan prioritas fitur tanpa mengorbankan kualitas.",
    },
  ];

  return (
    <section id="faq" className="py-24 bg-[#121212] relative overflow-hidden border-t border-[#262626]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#181818] border border-[#2E2E2E] text-xs font-semibold text-[#FFD700]">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Pertanyaan yang Sering Diajukan</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-[family-name:var(--font-heading)]">
            Semua yang Perlu Anda Ketahui tentang{" "}
            <span className="gold-gradient-text">Kerja Sama Bersama Kami</span>
          </h2>
          <p className="text-base text-[#A3A3A3]">
            Transparansi adalah kunci hubungan jangka panjang. Jika Anda memiliki pertanyaan lain, tim arsitek kami siap berdiskusi langsung.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-xl bg-[#161616] border border-[#2A2A2A] transition-all overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-left font-semibold text-white hover:text-[#FFE873] transition-colors cursor-pointer"
                >
                  <span className="text-sm sm:text-base pr-4">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#FFD700] shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-sm text-[#A3A3A3] leading-relaxed border-t border-[#222222]">
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
