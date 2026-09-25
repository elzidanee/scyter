"use client";

import { useState } from "react";
import {
  Globe,
  Smartphone,
  Cloud,
  Bot,
  RefreshCw,
  Layout,
  CheckCircle2,
  Clock,
  ArrowRight,
  Sparkles,
} from "lucide-react";

interface ServicesProps {
  onSelectService?: (serviceName: string) => void;
}

export default function Services({ onSelectService }: ServicesProps) {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const services = [
    {
      id: "web-saas",
      icon: Globe,
      badge: "Flagship Service",
      title: "Bespoke Web & SaaS Development",
      description:
        "Pengembangan web aplikasi dan platform SaaS kustom yang arsitekturnya dirancang tahan uji terhadap lonjakan jutaan trafik pengguna.",
      timeline: "4 – 8 Minggu",
      deliverables: [
        "Arsitektur Microservices / Clean Monolith",
        "Frontend Responsif & Ultra-Fast (Next.js / React)",
        "Role-Based Access Control (RBAC) & Audit Logs",
        "Dokumentasi OpenAPI / Swagger Standar Industri",
      ],
      techStack: ["Next.js", "TypeScript", "Go / Node.js", "PostgreSQL", "Tailwind CSS"],
    },
    {
      id: "mobile-apps",
      icon: Smartphone,
      badge: "Cross-Platform & Native",
      title: "High-Performance Mobile Apps",
      description:
        "Aplikasi mobile iOS dan Android yang mulus dengan kapabilitas offline-first, enkripsi biometrik, dan performa 60 FPS tanpa jeda.",
      timeline: "6 – 10 Minggu",
      deliverables: [
        "Bundle Siap Rilis ke App Store & Google Play",
        "Offline-First Sync & Cache Management",
        "Notifikasi Real-Time & Integrasi Biometrik",
        "Pengujian Menyeluruh pada Ragam Device",
      ],
      techStack: ["Flutter", "React Native", "Kotlin", "Swift", "Firebase / Supabase"],
    },
    {
      id: "cloud-devops",
      icon: Cloud,
      badge: "High Availability",
      title: "Cloud Infrastructure & DevOps",
      description:
        "Penyusunan arsitektur cloud otomatis (IaC) dengan deployment tanpa jeda (zero-downtime) dan mitigasi bencana otomatis.",
      timeline: "2 – 4 Minggu",
      deliverables: [
        "Infrastruktur Cloud Otomatis via Terraform",
        "Automated CI/CD Pipeline (GitHub Actions / GitLab)",
        "Container Orchestration via Kubernetes / Docker",
        "Monitoring 24/7 dengan Prometheus & Grafana",
      ],
      techStack: ["AWS", "Google Cloud", "Kubernetes", "Docker", "Terraform"],
    },
    {
      id: "ai-solutions",
      icon: Bot,
      badge: "Intelligent Systems",
      title: "AI & Custom Machine Learning",
      description:
        "Integrasi kecerdasan buatan enterprise: sistem Retrieval-Augmented Generation (RAG), private model tuning, dan automasi proses bisnis cerdas.",
      timeline: "4 – 6 Minggu",
      deliverables: [
        "Private Vector DB & Semantic Search Engine",
        "Sistem RAG untuk Dokumen Internal Perusahaan",
        "Automated Document Processing (OCR & Parsing)",
        "Keamanan Data & Privasi Terisolasi Penuh",
      ],
      techStack: ["Python", "FastAPI", "OpenAI / Claude API", "LangChain", "pgvector"],
    },
    {
      id: "legacy-modernization",
      icon: RefreshCw,
      badge: "System Transformation",
      title: "Legacy Modernization & API Redesign",
      description:
        "Transformasi sistem lawas yang lambat dan rapuh menjadi ekosistem modern yang modular tanpa mengganggu operasional bisnis yang sedang berjalan.",
      timeline: "6 – 12 Minggu",
      deliverables: [
        "Dekomposisi Monolit ke Event-Driven Architecture",
        "Migrasi Database Skala Besar dengan Zero Data Loss",
        "Optimasi Query & Caching Lapis Ganda",
        "Reduksi Biaya Server & Peningkatan Kecepatan Hingga 400%",
      ],
      techStack: ["Go", "Kafka", "PostgreSQL", "Redis", "Docker"],
    },
    {
      id: "uiux-design",
      icon: Layout,
      badge: "Design Systems",
      title: "UI/UX Engineering & Design Systems",
      description:
        "Perancangan antarmuka digital yang memadukan estetika kelas dunia, psikologi konversi, dan token desain yang langsung sinkron ke kode.",
      timeline: "3 – 5 Minggu",
      deliverables: [
        "Figma Component Library Terstruktur & Scalable",
        "Design Tokens yang Siap Diintegrasikan ke Kode",
        "Prototype Interaktif dengan Usability Testing",
        "Kepatuhan Aksesibilitas Standar WCAG 2.1 AA",
      ],
      techStack: ["Figma", "Tailwind CSS", "Storybook", "React Components"],
    },
  ];

  return (
    <section id="services" className="py-24 bg-[#0D0D0D] relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#FFD700]/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#181818] border border-[#2A2A2A] text-xs font-semibold text-[#FFD700]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Layanan Unggulan ScyterCorp</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-[family-name:var(--font-heading)]">
              Rekayasa Perangkat Lunak untuk{" "}
              <span className="gold-gradient-text">Setiap Tantangan Digital</span>
            </h2>
            <p className="text-base text-[#A3A3A3]">
              Dari produk perdana (MVP) yang harus segera diluncurkan hingga modernisasi sistem core perbankan dan logistik.
            </p>
          </div>

          <a
            href="#estimator"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#FFE873] hover:text-[#FFD700] transition-colors group self-start md:self-end"
          >
            <span>Hitung Biaya Berdasarkan Layanan</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isExpanded = selectedService === index;

            return (
              <div
                key={service.id}
                className={`p-7 rounded-2xl bg-[#141414] border transition-all duration-300 flex flex-col justify-between group cursor-pointer ${
                  isExpanded
                    ? "border-[#FFD700] shadow-[0_0_30px_rgba(255,215,0,0.15)] bg-[#181818]"
                    : "border-[#262626] hover:border-[#FFD700]/50 hover:-translate-y-1.5 hover:shadow-[0_12px_32px_rgba(0,0,0,0.4)]"
                }`}
                onClick={() => setSelectedService(isExpanded ? null : index)}
              >
                <div>
                  {/* Top Bar with Icon & Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#1E1E1E] border border-[#2E2E2E] flex items-center justify-center group-hover:border-[#FFD700]/50 group-hover:bg-[#252525] transition-all">
                      <Icon className="w-6 h-6 text-[#FFD700]" />
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-[#1F1F1F] border border-[#2E2E2E] text-[11px] font-medium text-[#FFE873]">
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg font-bold text-white group-hover:text-[#FFE873] transition-colors font-[family-name:var(--font-heading)]">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#A3A3A3] mt-2.5 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Deliverables List */}
                  <div className="mt-5 pt-5 border-t border-[#262626] space-y-2">
                    <div className="text-xs font-semibold text-[#7A7A7A] uppercase tracking-wider">
                      Deliverables Standar:
                    </div>
                    {service.deliverables.map((item, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2 text-xs text-[#CCCCCC]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#2ECC71] mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Metadata & Tech Stack */}
                <div className="mt-6 pt-5 border-t border-[#262626]">
                  <div className="flex items-center justify-between text-xs text-[#7A7A7A] mb-3">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#FFD700]" />
                      <span>Sprint: <strong className="text-white">{service.timeline}</strong></span>
                    </div>
                    <span className="text-[#A3A3A3] group-hover:text-white font-medium">
                      {isExpanded ? "Tutup Detail" : "Pilih Layanan →"}
                    </span>
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5">
                    {service.techStack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded bg-[#202020] text-[11px] font-mono text-[#A3A3A3]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
