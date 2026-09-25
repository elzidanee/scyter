import { MessageSquare, Layout, Code2, Rocket, CheckCircle2 } from "lucide-react";

export default function Methodology() {
  const steps = [
    {
      step: "01",
      icon: MessageSquare,
      title: "Konsultasi & Kebutuhan",
      desc: "Diskusi santai mengenai ide, fitur utama yang diinginkan, serta kesepakatan biaya dan batas waktu pengerjaan.",
      points: ["Briefing kebutuhan", "Estimasi biaya transparan", "Jadwal pengerjaan jelas"],
    },
    {
      step: "02",
      icon: Layout,
      title: "Desain UI/UX (Figma)",
      desc: "Kami merancang tampilan visual dan alur pengguna terlebih dahulu agar Anda dapat mereview sebelum proses koding dimulai.",
      points: ["Wireframe alur aplikasi", "Desain visual menarik", "Revisi sebelum dikoding"],
    },
    {
      step: "03",
      icon: Code2,
      title: "Proses Development",
      desc: "Pengembangan kode yang rapi, cepat, dan responsif dengan pengujian menyeluruh agar terbebas dari kendala bug.",
      points: ["Koding terstruktur", "Integrasi database & fitur", "Uji coba fungsi menyeluruh"],
    },
    {
      step: "04",
      icon: Rocket,
      title: "Rilis & Garansi Bug",
      desc: "Sistem diluncurkan siap pakai, penyerahan 100% source code kepada Anda, serta dukungan garansi perbaikan jika ada kendala.",
      points: ["Setup domain / server", "Source code milik Anda", "Garansi gratis pasca rilis"],
    },
  ];

  return (
    <section id="methodology" className="py-20 bg-[#121212] relative overflow-hidden border-t border-[#262626]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-xl mx-auto mb-12 space-y-2">
          <span className="text-xs uppercase font-bold tracking-widest text-[#FFD700]">
            Alur Pengerjaan
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-[family-name:var(--font-heading)]">
            4 Langkah Mudah <span className="gold-gradient-text">Mewujudkan Proyek Anda</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#888888]">
            Proses kerja yang jelas, komunikatif, dan terstruktur dari awal hingga sistem siap digunakan.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="p-5 rounded-2xl bg-[#161616] border border-[#2A2A2A] hover:border-[#FFD700]/50 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black text-[#FFD700] font-[family-name:var(--font-heading)]">
                      {item.step}
                    </span>
                    <div className="w-9 h-9 rounded-lg bg-[#202020] border border-[#333333] flex items-center justify-center text-[#FFD700]">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-sm font-bold text-white group-hover:text-[#FFE873] transition-colors font-[family-name:var(--font-heading)]">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#888888] mt-2 leading-relaxed">
                    {item.desc}
                  </p>

                  <div className="mt-4 pt-3 border-t border-[#222222] space-y-1.5">
                    {item.points.map((p, idx) => (
                      <div key={idx} className="flex items-center gap-1.5 text-[11px] text-[#CCCCCC]">
                        <CheckCircle2 className="w-3 h-3 text-[#2ECC71] shrink-0" />
                        <span>{p}</span>
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
