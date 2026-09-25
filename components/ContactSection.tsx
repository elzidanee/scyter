"use client";

import { useState } from "react";
import {
  Send,
  MessageSquare,
  Mail,
  MapPin,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
} from "lucide-react";

interface ContactSectionProps {
  initialSummary?: string;
}

export default function ContactSection({ initialSummary = "" }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "Pembuatan Website",
    budget: "Rp 5 Juta – Rp 15 Juta",
    description: initialSummary,
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1000);
  };

  const handleDirectWhatsApp = () => {
    const text = encodeURIComponent(
      `Halo ScyterCorp! Saya ${formData.name || "Klien"} ingin konsultasi proyek:\n\n` +
      `• Layanan: ${formData.serviceType}\n` +
      `• Estimasi Budget: ${formData.budget}\n` +
      `• Kebutuhan: ${formData.description || "Ingin berdiskusi lebih lanjut"}`
    );
    window.open(`https://wa.me/6282233201091?text=${text}`, "_blank");
  };

  return (
    <section id="contact" className="py-20 bg-[#0D0D0D] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#181818] border border-[#2A2A2A] text-xs font-semibold text-[#FFD700]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Konsultasi Proyek</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-[family-name:var(--font-heading)]">
                Konsultasikan Ide & <span className="gold-gradient-text">Kebutuhan Bisnis Anda</span>
              </h2>
              <p className="text-xs sm:text-sm text-[#888888] leading-relaxed">
                Ceritakan kebutuhan website, aplikasi, desain, atau sistem kustom yang ingin Anda bangun. Tim kami siap berdiskusi dan memberikan solusi terbaik.
              </p>
            </div>

            {/* Direct WhatsApp button */}
            <div className="space-y-3">
              <button
                onClick={handleDirectWhatsApp}
                className="w-full p-4 rounded-xl bg-[#141414] border border-[#2A2A2A] hover:border-[#2ECC71]/60 transition-all flex items-center justify-between group cursor-pointer text-left"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#2ECC71]/10 border border-[#2ECC71]/30 flex items-center justify-center text-[#2ECC71]">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-white group-hover:text-[#2ECC71] transition-colors">
                      Chat Langsung via WhatsApp
                    </h4>
                    <p className="text-[11px] text-[#7A7A7A]">082233201091 · Respon cepat & ramah</p>
                  </div>
                </div>
                <span className="text-xs font-semibold text-[#2ECC71]">Chat Sekarang →</span>
              </button>

              <div className="p-3.5 rounded-xl bg-[#141414] border border-[#262626] flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#FFD700] shrink-0" />
                <div className="text-xs">
                  <span className="text-[#888888]">Email: </span>
                  <a href="mailto:scyter.corp@gmail.com" className="text-white hover:text-[#FFD700]">
                    scyter.corp@gmail.com
                  </a>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#141414] border border-[#262626] flex items-center gap-3">
                <MapPin className="w-4 h-4 text-[#3B82F6] shrink-0" />
                <div className="text-xs text-[#888888]">
                  <span>Malang, Indonesia</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#141414] border border-[#262626]">
              {submitted ? (
                <div className="py-10 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-[#2ECC71]/10 border border-[#2ECC71]/30 mx-auto flex items-center justify-center text-[#2ECC71]">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white">
                    Pesan Anda Berhasil Terkirim!
                  </h3>
                  <p className="text-xs text-[#888888] max-w-sm mx-auto">
                    Terima kasih telah menghubungi ScyterCorp. Tim kami akan segera merespon via WhatsApp atau Email.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-4 py-2 rounded-lg text-xs font-semibold text-white bg-[#222222] border border-[#333333]"
                  >
                    Kirim Pesan Lain
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div className="space-y-1">
                      <label className="text-xs text-[#CCCCCC]">Nama Lengkap *</label>
                      <input
                        type="text"
                        required
                        placeholder="Contoh: Budi Santoso"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3 py-2 rounded-lg bg-[#1A1A1A] border border-[#2E2E2E] text-white text-xs focus:outline-none focus:border-[#FFD700]"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs text-[#CCCCCC]">Nomor WhatsApp / HP *</label>
                      <input
                        type="tel"
                        required
                        placeholder="0812-xxxx-xxxx"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3 py-2 rounded-lg bg-[#1A1A1A] border border-[#2E2E2E] text-white text-xs focus:outline-none focus:border-[#FFD700]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div className="space-y-1">
                      <label className="text-xs text-[#CCCCCC]">Email</label>
                      <input
                        type="email"
                        placeholder="nama@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3 py-2 rounded-lg bg-[#1A1A1A] border border-[#2E2E2E] text-white text-xs focus:outline-none focus:border-[#FFD700]"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs text-[#CCCCCC]">Pilihan Layanan</label>
                      <select
                        value={formData.serviceType}
                        onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                        className="w-full px-3 py-2 rounded-lg bg-[#1A1A1A] border border-[#2E2E2E] text-white text-xs focus:outline-none focus:border-[#FFD700]"
                      >
                        <option>Pembuatan Website</option>
                        <option>Pembuatan Mobile App</option>
                        <option>UI/UX Design</option>
                        <option>Sistem Kasir (POS)</option>
                        <option>Custom CMS</option>
                        <option>LMS Edukasi & Kursus</option>
                        <option>PMS Properti & Proyek</option>
                        <option>Sistem Kustom Lainnya</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs text-[#CCCCCC]">Perkiraan Anggaran</label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg bg-[#1A1A1A] border border-[#2E2E2E] text-white text-xs focus:outline-none focus:border-[#FFD700]"
                    >
                      <option>&lt; Rp 5 Juta</option>
                      <option>Rp 5 Juta – Rp 15 Juta</option>
                      <option>Rp 15 Juta – Rp 35 Juta</option>
                      <option>&gt; Rp 35 Juta</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs text-[#CCCCCC]">
                      Deskripsi Kebutuhan Singkat
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Ceritakan fitur atau gambaran aplikasi/website yang ingin Anda buat..."
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg bg-[#1A1A1A] border border-[#2E2E2E] text-white text-xs focus:outline-none focus:border-[#FFD700] resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-2.5 px-4 rounded-lg text-xs font-bold text-[#0D0D0D] transition-all hover:brightness-105 cursor-pointer disabled:opacity-50"
                    style={{
                      background: "linear-gradient(180deg, #FFFBE6 0%, #FFE873 40%, #FFD700 100%)",
                    }}
                  >
                    {isSubmitting ? "Mengirim..." : "Kirim Pesan Konsultasi"}
                  </button>

                  <div className="flex items-center justify-center gap-1.5 text-[10px] text-[#7A7A7A] pt-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#2ECC71]" />
                    <span>Data Anda aman & kami jaga kerahasiaannya.</span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
