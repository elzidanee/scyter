import {
  FileCode,
  GitBranch,
  ShieldCheck,
  Rocket,
  CheckCircle2,
  Lock,
  ArrowRight,
} from "lucide-react";

export default function Methodology() {
  const steps = [
    {
      step: "01",
      icon: FileCode,
      title: "Discovery & Architecture Blueprint",
      duration: "Minggu 1 – 2",
      description:
        "Kami membedah logika bisnis, merumuskan arsitektur sistem, memetakan skema database (ERD), dan menyusun wireframe interaktif sebelum satu baris kode pun ditulis.",
      deliverables: [
        "Software Requirements Specification (SRS)",
        "Spesifikasi OpenAPI / REST / gRPC Contracts",
        "Interactive Clickable Prototype di Figma",
        "Jadwal Milestone & Sprint dengan Batas Waktu Pasti",
      ],
    },
    {
      step: "02",
      icon: GitBranch,
      title: "Agile Sprints & Bi-Weekly Live Demos",
      duration: "Fase Iteratif",
      description:
        "Proses rekayasa transparan tanpa efek 'kotak hitam'. Anda mendapatkan akses staging environment dan sesi demo berkala setiap dua minggu untuk menguji progress secara langsung.",
      deliverables: [
        "Akses Staging Server yang Selalu Ter-update",
        "Transparansi Board Proyek (Jira / Linear / GitHub)",
        "Review Kode Berkala dengan Static Analysis",
        "Umpan Balik Cepat & Fleksibilitas Penyesuaian",
      ],
    },
    {
      step: "03",
      icon: ShieldCheck,
      title: "Automated Security & Stress Testing",
      duration: "Pra-Peluncuran",
      description:
        "Sebelum melangkah ke server produksi, sistem diuji secara agresif: simulasi beban ribuan pengguna serentak (load testing), audit OWASP, dan pengujian penetrasi keamanan data.",
      deliverables: [
        "Laporan Uji Beban (k6 / Locust Stress Test)",
        "Audit Keamanan Data Sesuai UU PDP & OWASP",
        "Quality Gate SonarQube dengan Zero Critical Debt",
        "Backup Otomatis & Skenario Disaster Recovery",
      ],
    },
    {
      step: "04",
      icon: Rocket,
      title: "Go-Live, Transfer Aset & SLA Warranty",
      duration: "Produksi & Berkelanjutan",
      description:
        "Peluncuran mulus ke akun cloud klien dengan zero-downtime, serah terima kepemilikan 100% kode sumber dan repositori, serta garansi pemeliharaan bebas bug.",
      deliverables: [
        "Deployment Resmi ke Akun Cloud Milik Klien (AWS/GCP)",
        "100% Hak Milik IP & Repositori Git Tanpa Kunci Vendor",
        "Dokumentasi Teknis & Sesi Knowledge Transfer",
        "Garansi Pemeliharaan Bug-Free & Dukungan SLA 24/7",
      ],
    },
  ];

  return (
    <section id="methodology" className="py-24 bg-[#121212] relative overflow-hidden border-t border-[#262626]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#181818] border border-[#2E2E2E] text-xs font-semibold text-[#FFD700]">
            <Lock className="w-3.5 h-3.5" />
            <span>Standar Rekayasa ScyterCorp</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-[family-name:var(--font-heading)]">
            Metodologi Kerja Terstruktur,{" "}
            <span className="gold-gradient-text">Tanpa Biaya Tersembunyi</span>
          </h2>
          <p className="text-base text-[#A3A3A3]">
            Hilangkan kekhawatiran proyek molor dan kode berantakan. Kami menerapkan standar engineering kelas enterprise dengan transparansi total dari hari pertama.
          </p>
        </div>

        {/* 4-Step Methodology Process */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="p-6 rounded-2xl bg-[#161616] border border-[#2A2A2A] hover:border-[#FFD700]/50 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(0,0,0,0.5)]"
              >
                <div>
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-2xl font-black text-[#FFD700] font-[family-name:var(--font-heading)] opacity-80 group-hover:opacity-100">
                      {item.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#202020] border border-[#333333] flex items-center justify-center group-hover:border-[#FFD700]/60 transition-colors">
                      <Icon className="w-5 h-5 text-[#FFD700]" />
                    </div>
                  </div>

                  {/* Title & Duration */}
                  <span className="text-[11px] font-mono uppercase text-[#D9A900]">
                    {item.duration}
                  </span>
                  <h3 className="text-base font-bold text-white mt-1 group-hover:text-[#FFE873] transition-colors font-[family-name:var(--font-heading)]">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#A3A3A3] mt-2.5 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Deliverables List */}
                  <div className="mt-5 pt-4 border-t border-[#262626] space-y-2">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-[#7A7A7A]">
                      Output Terukur:
                    </div>
                    {item.deliverables.map((del, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-1.5 text-[11px] text-[#CCCCCC]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#2ECC71] mt-0.5 shrink-0" />
                        <span>{del}</span>
                      </div>
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
