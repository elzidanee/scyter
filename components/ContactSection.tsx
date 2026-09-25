"use client";

import { useState } from "react";
import {
  Send,
  MessageSquare,
  Mail,
  MapPin,
  Clock,
  CheckCircle2,
  Sparkles,
  PhoneCall,
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
    company: "",
    serviceType: "Web & SaaS Development",
    budget: "Rp 50jt - Rp 100jt",
    description: initialSummary,
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  const handleDirectWhatsApp = () => {
    const text = encodeURIComponent(
      `Halo ScyterCorp! Saya ${formData.name || "Klien"} ingin berkonsultasi mengenai proyek ${formData.serviceType}.\n\n` +
        `Estimasi Budget: ${formData.budget}\n` +
        `Catatan: ${formData.description || "Ingin menjadwalkan sesi discovery teknis"}`
    );
    window.open(`https://wa.me/6281234567890?text=${text}`, "_blank");
  };

  return (
    <section id="contact" className="py-24 bg-[#0D0D0D] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[350px] bg-[#FFD700]/10 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Contact Value Prop & Direct Channels */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#181818] border border-[#2A2A2A] text-xs font-semibold text-[#FFD700]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Konsultasi Teknis Gratis</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-[family-name:var(--font-heading)]">
                Mari Diskusikan <span className="gold-gradient-text">Rencana Besar Anda</span>
              </h2>
              <p className="text-base text-[#A3A3A3] leading-relaxed">
                Punya ide aplikasi baru, butuh percepatan sprint, atau ingin memodernisasi sistem legacy? Tim Principal Architect kami siap memberikan tinjauan teknis tanpa komitmen di awal.
              </p>
            </div>

            {/* Quick Channel Cards */}
            <div className="space-y-4">
              <button
                onClick={handleDirectWhatsApp}
                className="w-full p-4 rounded-xl bg-[#141414] border border-[#2A2A2A] hover:border-[#2ECC71]/60 transition-all flex items-center justify-between group cursor-pointer text-left"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-[#2ECC71]/10 border border-[#2ECC71]/30 flex items-center justify-center text-[#2ECC71]">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white group-hover:text-[#2ECC71] transition-colors">
                      WhatsApp Bisnis Instan
                    </h4>
                    <p className="text-xs text-[#7A7A7A]">Respon langsung dari Lead Architect (&lt;15 menit)</p>
                  </div>
                </div>
                <span className="text-xs font-semibold text-[#2ECC71] pr-2">Chat Sekarang →</span>
              </button>

              <div className="p-4 rounded-xl bg-[#141414] border border-[#2A2A2A] flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-[#1F1F1F] border border-[#333333] flex items-center justify-center text-[#FFD700]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Email Resmi</h4>
                  <a
                    href="mailto:engineering@scytercorp.com"
                    className="text-xs text-[#A3A3A3] hover:text-[#FFD700] transition-colors"
                  >
                    engineering@scytercorp.com / hello@scytercorp.com
                  </a>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#141414] border border-[#2A2A2A] flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-[#1F1F1F] border border-[#333333] flex items-center justify-center text-[#3B82F6]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Engineering Hub & Office</h4>
                  <p className="text-xs text-[#7A7A7A]">
                    Sudirman Tech Corridor, Jakarta Selatan, DKI Jakarta 12190
                  </p>
                </div>
              </div>
            </div>

            {/* Response Time Pledge */}
            <div className="p-4 rounded-xl bg-[#181818] border border-[#262626] flex items-center gap-3">
              <Clock className="w-5 h-5 text-[#FFD700] shrink-0" />
              <p className="text-xs text-[#A3A3A3]">
                <strong className="text-white">Garansi Waktu Respons:</strong> Tim kami menanggapi setiap inquiry dalam waktu maksimal 24 jam di hari kerja.
              </p>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-9 rounded-2xl bg-[#141414] border border-[#2A2A2A] shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#2ECC71]/10 border border-[#2ECC71]/30 mx-auto flex items-center justify-center text-[#2ECC71]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white font-[family-name:var(--font-heading)]">
                    Pesan Anda Berhasil Terkirim!
                  </h3>
                  <p className="text-sm text-[#A3A3A3] max-w-md mx-auto leading-relaxed">
                    Terima kasih telah menghubungi ScyterCorp. Lead Solution Architect kami sedang meninjau kebutuhan teknis Anda dan akan menghubungi Anda via WhatsApp/Email dalam &lt; 24 jam.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-lg text-xs font-semibold text-white bg-[#222222] border border-[#333333] hover:bg-[#282828] transition-colors"
                  >
                    Kirim Pesan Lain
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="border-b border-[#262626] pb-4 mb-2">
                    <h3 className="text-xl font-bold text-white font-[family-name:var(--font-heading)]">
                      Formulir Spesifikasi Proyek
                    </h3>
                    <p className="text-xs text-[#7A7A7A] mt-1">
                      Ceritakan kebutuhan Anda secara ringkas. Semua informasi dilindungi kerahasiaannya.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-[#CCCCCC]">Nama Lengkap *</label>
                      <input
                        type="text"
                        required
                        placeholder="Contoh: Budi Santoso"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#1A1A1A] border border-[#2E2E2E] text-white text-sm focus:outline-none focus:border-[#FFD700] transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-[#CCCCCC]">Email Kantor / Pribadi *</label>
                      <input
                        type="email"
                        required
                        placeholder="nama@perusahaan.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#1A1A1A] border border-[#2E2E2E] text-white text-sm focus:outline-none focus:border-[#FFD700] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-[#CCCCCC]">Nomor WhatsApp / Telepon *</label>
                      <input
                        type="tel"
                        required
                        placeholder="0812-xxxx-xxxx"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#1A1A1A] border border-[#2E2E2E] text-white text-sm focus:outline-none focus:border-[#FFD700] transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-[#CCCCCC]">Nama Perusahaan / Startup</label>
                      <input
                        type="text"
                        placeholder="PT Maju Bersama / Steath Co."
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#1A1A1A] border border-[#2E2E2E] text-white text-sm focus:outline-none focus:border-[#FFD700] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-[#CCCCCC]">Layanan yang Dibutuhkan</label>
                      <select
                        value={formData.serviceType}
                        onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#1A1A1A] border border-[#2E2E2E] text-white text-sm focus:outline-none focus:border-[#FFD700] transition-colors"
                      >
                        <option>Bespoke Web & SaaS Development</option>
                        <option>High-Performance Mobile Apps (iOS/Android)</option>
                        <option>Cloud Infrastructure & DevOps</option>
                        <option>AI & Custom Machine Learning</option>
                        <option>Legacy System Modernization</option>
                        <option>UI/UX & Design Systems</option>
                        <option>Dedicated Squad / Staff Augmentation</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-[#CCCCCC]">Estimasi Anggaran Investasi</label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#1A1A1A] border border-[#2E2E2E] text-white text-sm focus:outline-none focus:border-[#FFD700] transition-colors"
                      >
                        <option>&lt; Rp 50 Juta (MVP Ringan)</option>
                        <option>Rp 50 Juta – Rp 100 Juta</option>
                        <option>Rp 100 Juta – Rp 250 Juta</option>
                        <option>&gt; Rp 250 Juta (Enterprise Scale)</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-[#CCCCCC]">
                      Deskripsi Kebutuhan & Target Peluncuran
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Jelaskan gambaran sistem yang ingin dibangun, target pengguna, fitur inti, atau kendala yang sedang dihadapi..."
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#1A1A1A] border border-[#2E2E2E] text-white text-sm focus:outline-none focus:border-[#FFD700] transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl text-sm font-bold text-[#0D0D0D] transition-all duration-300 hover:brightness-105 hover:shadow-[0_0_24px_rgba(255,215,0,0.4)] cursor-pointer disabled:opacity-50"
                      style={{
                        background: "linear-gradient(180deg, #FFFBE6 0%, #FFE873 40%, #FFD700 100%)",
                      }}
                    >
                      {isSubmitting ? (
                        <span>Mengirim Permintaan...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Kirim Permintaan Konsultasi</span>
                        </>
                      )}
                    </button>
                  </div>

                  <div className="flex items-center justify-center gap-2 text-[11px] text-[#7A7A7A] pt-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#2ECC71]" />
                    <span>Data Anda 100% rahasia dan terlindungi oleh kebijakan privasi & NDA kami.</span>
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
