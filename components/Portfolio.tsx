"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ExternalLink,
  ArrowRight,
  TrendingUp,
  Server,
  Shield,
  Zap,
  CheckCircle,
  X,
  Sparkles,
} from "lucide-react";

interface CaseStudy {
  id: string;
  category: "fintech" | "logistics" | "health" | "ecommerce";
  categoryLabel: string;
  title: string;
  tagline: string;
  clientType: string;
  description: string;
  impactMetrics: { label: string; value: string }[];
  techStack: string[];
  challenge: string;
  solution: string;
  architectureHighlight: string;
}

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [activeModal, setActiveModal] = useState<CaseStudy | null>(null);

  const caseStudies: CaseStudy[] = [
    {
      id: "aurapay",
      category: "fintech",
      categoryLabel: "Fintech & Banking",
      title: "AuraPay: Distributed Payment Gateway",
      tagline: "Infrastruktur Pembayaran Berkinerja Tinggi & Auto-Reconciliation",
      clientType: "Fintech Payment Provider Asia Tenggara",
      description:
        "Sistem payment gateway berlatensi rendah yang memproses transaksi perbankan, e-wallet, dan QRIS dengan mekanisme failover otomatis tanpa downtime.",
      impactMetrics: [
        { label: "Throughput Puncak", value: "15.000+ tps" },
        { label: "SLA Uptime", value: "99.995%" },
        { label: "GMV Bulanan", value: "$18M+" },
      ],
      techStack: ["Golang", "PostgreSQL", "Apache Kafka", "Redis", "Kubernetes", "Next.js"],
      challenge:
        "Klien menghadapi kegagalan transaksi saat peak hours tanggal gajian akibat bottleneck database monolitik dan ketidakakuratan rekonsiliasi antar bank partner.",
      solution:
        "ScyterCorp merancang arsitektur event-driven microservices berbasis Go dengan distributed locking di Redis dan streaming antrean Kafka, menjamin data ACID serta zero-reconciliation mismatch.",
      architectureHighlight:
        "Sistem multi-AZ dengan automated blue/green deployment dan isolasi keamanan bank-grade bersertifikasi ISO 27001.",
    },
    {
      id: "kargolink",
      category: "logistics",
      categoryLabel: "Logistics & AI",
      title: "KargoLink AI: Smart Dispatch & Telematics",
      tagline: "Platform Manajemen Armada Cerdas & Optimasi Rute Real-Time",
      clientType: "Perusahaan Logistik & Rantai Pasok Terkemuka",
      description:
        "Platform end-to-end pemantauan 1.200+ armada pengiriman secara real-time dengan algoritma optimasi rute bertenaga machine learning.",
      impactMetrics: [
        { label: "Efisiensi Bahan Bakar", value: "+28%" },
        { label: "Armada Terkoneksi", value: "1.200+ Truk" },
        { label: "Akurasi ETA", value: "98.4%" },
      ],
      techStack: ["Python", "FastAPI", "Flutter", "PostGIS", "PyTorch", "Google Maps Platform"],
      challenge:
        "Tingginya konsumsi bahan bakar dan seringnya keterlambatan pengiriman akibat rute statis serta blind spot konektivitas di rute antar-provinsi.",
      solution:
        "Kami membangun sistem telemetri IoT dengan engine optimasi dinamis yang memprediksi kemacetan dan cuaca, dilengkapi aplikasi driver offline-first yang tetap bekerja saat sinyal hilang.",
      architectureHighlight:
        "Real-time Geo-fencing dengan PostGIS dan sinkronisasi sub-detik melalui WebSockets berdaya komputasi edge.",
    },
    {
      id: "documed",
      category: "health",
      categoryLabel: "Healthcare & EMR",
      title: "DocuMed: Cloud EMR & SatuSehat Sync",
      tagline: "Rekam Medis Elektronik Terintegrasi dengan Enkripsi End-to-End",
      clientType: "Jaringan 24 Rumah Sakit & Klinik Swasta",
      description:
        "Digitalisasi rekam medis rawat jalan dan inap dengan integrasi SatuSehat Kemenkes, antrean cerdas pasien, dan modul farmasi.",
      impactMetrics: [
        { label: "Temu Berkas Pasien", value: "1.2 Detik" },
        { label: "Kepatuhan Kemenkes", value: "100% Lulus" },
        { label: "Reduksi Paperless", value: "94%" },
      ],
      techStack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Docker", "AWS KMS"],
      challenge:
        "Pencarian berkas fisik yang memakan waktu hingga 15 menit per pasien serta kewajiban regulasi Kemenkes untuk integrasi platform nasional SatuSehat.",
      solution:
        "Membangun portal EMR berbasis cloud dengan enkripsi data AES-256 tingkat field, sistem pencarian elastis, dan pipeline adaptor FHIR SatuSehat otomatis.",
      architectureHighlight:
        "Enkripsi multi-layer dengan hardware security module (HSM) dan audit trail forensik tak terhapus.",
    },
    {
      id: "aetheria",
      category: "ecommerce",
      categoryLabel: "High-Volume E-Commerce",
      title: "Aetheria: Headless Omnichannel Commerce",
      tagline: "Engine Belanja Multi-Brand Berkecepatan Kilat",
      clientType: "Brand Fashion & Retail Global",
      description:
        "Pengembangan storefront headless e-commerce dengan sistem inventaris terpusat untuk kanal online, retail fisik, dan marketplace.",
      impactMetrics: [
        { label: "Conversion Rate", value: "+34%" },
        { label: "Page Load Time", value: "0.7s" },
        { label: "Flash Sale Peak", value: "50k req/m" },
      ],
      techStack: ["Next.js App Router", "Tailwind CSS", "GraphQL", "Stripe", "Algolia", "Redis"],
      challenge:
        "Platform lama sering crash setiap flash sale 12.12 dan kecepatan loading lambat (>4 detik) yang menurunkan angka penjualan drastis.",
      solution:
        "Merombak sistem menjadi arsitektur headless JAMstack modern dengan edge caching Cloudflare dan checkout terisolasi yang tahan lonjakan puluhan ribu pembeli serentak.",
      architectureHighlight:
        "Global CDN Static generation dengan Incremental Static Regeneration (ISR) dan indexing katalog secepat kilat via Algolia.",
    },
  ];

  const categories = [
    { id: "all", label: "Semua Proyek" },
    { id: "fintech", label: "Fintech & Banking" },
    { id: "logistics", label: "Logistik & AI" },
    { id: "health", label: "Healthcare & EMR" },
    { id: "ecommerce", label: "E-Commerce" },
  ];

  const filteredProjects =
    activeCategory === "all"
      ? caseStudies
      : caseStudies.filter((item) => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 bg-[#0D0D0D] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#181818] border border-[#2A2A2A] text-xs font-semibold text-[#FFD700]">
              <Zap className="w-3.5 h-3.5" />
              <span>Studi Kasus & Portofolio Rekayasa</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-[family-name:var(--font-heading)]">
              Bukti Nyata <span className="gold-gradient-text">Keberhasilan Klien Kami</span>
            </h2>
            <p className="text-base text-[#A3A3A3]">
              Bukan sekadar mockup fiktif. Inilah sistem perangkat lunak nyata yang kami bangun dan operasikan untuk klien kami dengan performa terukur.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? "bg-[#FFE873] text-[#0D0D0D] shadow-[0_0_16px_rgba(255,215,0,0.3)]"
                    : "bg-[#181818] text-[#A3A3A3] hover:text-white border border-[#2A2A2A]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl bg-[#141414] border border-[#262626] p-7 transition-all duration-300 hover:border-[#FFD700]/50 hover:-translate-y-1.5 hover:shadow-[0_16px_40px_rgba(0,0,0,0.5)] flex flex-col justify-between group"
            >
              <div>
                {/* Header Category & Client */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className="px-2.5 py-1 rounded-full bg-[#202020] border border-[#333333] text-[11px] font-semibold text-[#FFE873]">
                    {project.categoryLabel}
                  </span>
                  <span className="text-xs text-[#7A7A7A] truncate font-medium">
                    {project.clientType}
                  </span>
                </div>

                {/* Title & Tagline */}
                <h3 className="text-xl font-bold text-white group-hover:text-[#FFE873] transition-colors font-[family-name:var(--font-heading)]">
                  {project.title}
                </h3>
                <p className="text-xs font-medium text-[#D9A900] mt-1">
                  {project.tagline}
                </p>
                <p className="text-sm text-[#A3A3A3] mt-3 leading-relaxed">
                  {project.description}
                </p>

                {/* Impact Metrics Grid */}
                <div className="grid grid-cols-3 gap-3 my-6 py-4 px-4 rounded-xl bg-[#1A1A1A] border border-[#2A2A2A]">
                  {project.impactMetrics.map((metric, mIdx) => (
                    <div key={mIdx} className="text-center sm:text-left">
                      <div className="text-base sm:text-lg font-extrabold text-[#FFD700] font-[family-name:var(--font-heading)]">
                        {metric.value}
                      </div>
                      <div className="text-[10px] text-[#7A7A7A] uppercase tracking-wider mt-0.5">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Tech Stack & Action */}
              <div className="pt-4 border-t border-[#262626] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.slice(0, 4).map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded bg-[#1F1F1F] text-[10px] font-mono text-[#A3A3A3]"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="px-1.5 py-0.5 rounded bg-[#1F1F1F] text-[10px] font-mono text-[#7A7A7A]">
                      +{project.techStack.length - 4}
                    </span>
                  )}
                </div>

                <button
                  onClick={() => setActiveModal(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-white group-hover:text-[#FFE873] transition-colors cursor-pointer shrink-0"
                >
                  <span>Baca Studi Kasus</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Deep-Dive Drawer */}
        {activeModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#141414] border border-[#2E2E2E] p-6 sm:p-8 shadow-[0_24px_60px_rgba(0,0,0,0.8)] space-y-6">
              {/* Close Button */}
              <button
                onClick={() => setActiveModal(null)}
                className="absolute top-5 right-5 p-2 rounded-lg bg-[#202020] text-[#A3A3A3] hover:text-white hover:bg-[#282828] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div>
                <span className="px-2.5 py-1 rounded-full bg-[#202020] text-xs font-semibold text-[#FFE873]">
                  {activeModal.categoryLabel}
                </span>
                <h3 className="text-2xl font-bold text-white mt-3 font-[family-name:var(--font-heading)]">
                  {activeModal.title}
                </h3>
                <p className="text-sm text-[#A3A3A3] mt-1">{activeModal.clientType}</p>
              </div>

              {/* Key Impact Stats */}
              <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-[#1A1A1A] border border-[#2A2A2A]">
                {activeModal.impactMetrics.map((metric, i) => (
                  <div key={i} className="text-center">
                    <div className="text-xl font-extrabold text-[#FFD700]">
                      {metric.value}
                    </div>
                    <div className="text-[11px] text-[#7A7A7A]">{metric.label}</div>
                  </div>
                ))}
              </div>

              {/* Challenge & Solution Breakdown */}
              <div className="space-y-4 text-sm text-[#CCCCCC]">
                <div className="p-4 rounded-xl bg-[#181818] border border-[#262626]">
                  <h4 className="text-xs font-bold uppercase text-[#E74C3C] tracking-wider mb-1.5 flex items-center gap-1.5">
                    <span>Tantangan Awal:</span>
                  </h4>
                  <p className="leading-relaxed text-xs sm:text-sm text-[#A3A3A3]">
                    {activeModal.challenge}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#181818] border border-[#262626]">
                  <h4 className="text-xs font-bold uppercase text-[#2ECC71] tracking-wider mb-1.5 flex items-center gap-1.5">
                    <span>Solusi Rekayasa ScyterCorp:</span>
                  </h4>
                  <p className="leading-relaxed text-xs sm:text-sm text-[#A3A3A3]">
                    {activeModal.solution}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#1C1C1C] border border-[#FFD700]/30">
                  <h4 className="text-xs font-bold uppercase text-[#FFD700] tracking-wider mb-1.5">
                    Arsitektur Kunci:
                  </h4>
                  <p className="leading-relaxed text-xs sm:text-sm text-[#E5E5E5]">
                    {activeModal.architectureHighlight}
                  </p>
                </div>
              </div>

              {/* Tech Stack Full */}
              <div>
                <h5 className="text-xs font-semibold text-[#7A7A7A] uppercase tracking-wider mb-2">
                  Teknologi yang Digunakan:
                </h5>
                <div className="flex flex-wrap gap-2">
                  {activeModal.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded bg-[#202020] border border-[#333333] text-xs font-mono text-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action */}
              <div className="pt-2 border-t border-[#262626] flex items-center justify-between">
                <span className="text-xs text-[#7A7A7A]">Ingin membangun sistem serupa?</span>
                <button
                  onClick={() => {
                    setActiveModal(null);
                    const el = document.getElementById("contact");
                    el?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="px-5 py-2.5 rounded-lg text-xs font-bold text-[#0D0D0D] transition-all hover:brightness-105"
                  style={{
                    background: "linear-gradient(180deg, #FFFBE6 0%, #FFE873 40%, #FFD700 100%)",
                  }}
                >
                  Konsultasikan Proyek Serupa
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
