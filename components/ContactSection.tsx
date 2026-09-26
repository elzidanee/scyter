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
import { MotionReveal } from "@/components/ui/motion-reveal";

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
    <section id="contact" className="py-24 bg-[#09090B] relative overflow-hidden border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Left Column: Direct Info */}
          <MotionReveal delay={0.05} yOffset={24} className="lg:col-span-5 space-y-6">
            <div className="space-y-2.5">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs font-mono text-amber-300 font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span>KONSULTASI & DISKUSI TEKNIS</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight font-[family-name:var(--font-heading)]">
                Konsultasikan Ide & <span className="gold-gradient-text">Kebutuhan Bisnis Anda</span>
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
                Ceritakan kebutuhan website, aplikasi, desain, atau sistem kustom yang ingin Anda bangun. Tim engineer kami siap mendiskusikan arsitektur dan penawaran terbaik.
              </p>
            </div>

            {/* Direct WhatsApp button */}
            <div className="space-y-3.5">
              <button
                onClick={handleDirectWhatsApp}
                className="w-full p-4 rounded-2xl bg-[#0F0F12] border border-white/[0.08] hover:border-emerald-400/40 hover:bg-white/[0.02] transition-all flex items-center justify-between group cursor-pointer text-left shadow-[0_12px_32px_rgba(0,0,0,0.5)]"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-400/10 border border-emerald-400/20 flex items-center justify-center text-emerald-400 shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">
                      Chat Langsung via WhatsApp
                    </h4>
                    <p className="text-[11px] text-zinc-400">082233201091 · Respon cepat & konsultasi langsung</p>
                  </div>
                </div>
                <span className="text-xs font-semibold text-emerald-400 group-hover:translate-x-0.5 transition-transform">Chat Sekarang →</span>
              </button>

              <div className="p-3.5 rounded-xl bg-[#0F0F12] border border-white/[0.08] flex items-center gap-3 text-xs">
                <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-amber-400 shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-zinc-500 font-mono text-[11px] block">EMAIL RESMI</span>
                  <a href="mailto:scyter.corp@gmail.com" className="text-zinc-200 hover:text-amber-300 transition-colors font-medium">
                    scyter.corp@gmail.com
                  </a>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#0F0F12] border border-white/[0.08] flex items-center gap-3 text-xs">
                <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-blue-400 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-zinc-500 font-mono text-[11px] block">LOKASI KANTOR</span>
                  <span className="text-zinc-200 font-medium">Malang, Jawa Timur, Indonesia</span>
                </div>
              </div>
            </div>
          </MotionReveal>

          {/* Right Column: Clean Form */}
          <MotionReveal delay={0.15} yOffset={24} className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0F0F12] border border-white/[0.08] shadow-[0_20px_50px_rgba(0,0,0,0.7),inset_0_1px_0_0_rgba(255,255,255,0.06)]">
              {submitted ? (
                <div className="py-12 text-center space-y-3.5">
                  <div className="w-14 h-14 rounded-full bg-emerald-400/10 border border-emerald-400/30 mx-auto flex items-center justify-center text-emerald-400">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-white font-[family-name:var(--font-heading)]">
                    Pesan Anda Berhasil Terkirim!
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 max-w-sm mx-auto leading-relaxed">
                    Terima kasih telah menghubungi ScyterCorp. Tim kami akan segera menindaklanjuti pesan Anda via WhatsApp atau Email.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-white/[0.04] border border-white/[0.1] hover:bg-white/[0.08] transition-colors cursor-pointer"
                  >
                    Kirim Pesan Lain
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-zinc-300">Nama Lengkap *</label>
                      <input
                        type="text"
                        required
                        placeholder="Contoh: Budi Santoso"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white text-xs sm:text-sm focus:outline-none focus:border-amber-400/80 focus:ring-1 focus:ring-amber-400/20 placeholder:text-zinc-600 transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-zinc-300">Nomor WhatsApp / HP *</label>
                      <input
                        type="tel"
                        required
                        placeholder="0812-xxxx-xxxx"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white text-xs sm:text-sm focus:outline-none focus:border-amber-400/80 focus:ring-1 focus:ring-amber-400/20 placeholder:text-zinc-600 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-zinc-300">Email Perusahaan / Pribadi</label>
                      <input
                        type="email"
                        placeholder="nama@perusahaan.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white text-xs sm:text-sm focus:outline-none focus:border-amber-400/80 focus:ring-1 focus:ring-amber-400/20 placeholder:text-zinc-600 transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-zinc-300">Pilihan Layanan</label>
                      <select
                        value={formData.serviceType}
                        onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#141417] border border-white/[0.08] text-white text-xs sm:text-sm focus:outline-none focus:border-amber-400/80 focus:ring-1 focus:ring-amber-400/20 transition-all"
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

                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-zinc-300">Perkiraan Anggaran</label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#141417] border border-white/[0.08] text-white text-xs sm:text-sm focus:outline-none focus:border-amber-400/80 focus:ring-1 focus:ring-amber-400/20 transition-all"
                    >
                      <option>&lt; Rp 5 Juta</option>
                      <option>Rp 5 Juta – Rp 15 Juta</option>
                      <option>Rp 15 Juta – Rp 35 Juta</option>
                      <option>&gt; Rp 35 Juta</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-zinc-300">
                      Deskripsi Kebutuhan Singkat
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Ceritakan fitur atau gambaran aplikasi/website yang ingin Anda bangun..."
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white text-xs sm:text-sm focus:outline-none focus:border-amber-400/80 focus:ring-1 focus:ring-amber-400/20 placeholder:text-zinc-600 resize-none transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-4 rounded-xl text-xs sm:text-sm font-bold text-[#09090B] transition-all hover:brightness-105 active:scale-[0.98] shadow-[0_2px_16px_rgba(255,215,0,0.3),inset_0_1px_0_0_rgba(255,255,255,0.7)] cursor-pointer disabled:opacity-50"
                    style={{
                      background: "linear-gradient(180deg, #FFFCE6 0%, #FFE566 45%, #FFD700 100%)",
                    }}
                  >
                    {isSubmitting ? "Mengirim Pesan..." : "Kirim Pesan Konsultasi"}
                  </button>

                  <div className="flex items-center justify-center gap-1.5 text-[11px] text-zinc-500 pt-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Data Anda terlindungi & terikat kerahasiaan non-disclosure.</span>
                  </div>
                </form>
              )}
            </div>
          </MotionReveal>
        </div>
      </div>
    </section>
  );
}
