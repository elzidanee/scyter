import { Shield, Lock, Award, CheckCircle, Cpu, Landmark, Truck, Stethoscope, ShoppingBag } from "lucide-react";

export default function TrustBar() {
  const industries = [
    { icon: Landmark, name: "Fintech & Banking", desc: "Core banking, payment gateways, fraud detection" },
    { icon: Truck, name: "Logistics & Supply Chain", desc: "Fleet telematics, dynamic route dispatch, WMS" },
    { icon: Stethoscope, name: "Healthcare & EMR", desc: "HIPAA/SatuSehat compliant, encrypted telemetry" },
    { icon: ShoppingBag, name: "High-Volume E-Commerce", desc: "Flash sale architecture, sub-second checkout" },
    { icon: Cpu, name: "Enterprise SaaS & AI", desc: "Multi-tenant platforms, private LLM pipelines" },
  ];

  const standards = [
    "ISO 27001 Security Standard",
    "OWASP Top 10 Audited",
    "Kepatuhan UU PDP Indonesia",
    "100% Hak Milik IP Klien",
    "SLA Availability 99.98%",
  ];

  return (
    <section id="solutions" className="py-16 bg-[#121212] border-y border-[#262626]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <p className="text-xs uppercase font-bold tracking-widest text-[#FFD700]">
            Keahlian Lintas Industri
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-2 font-[family-name:var(--font-heading)]">
            Solusi Rekayasa Terbukti untuk Sektor Kritis
          </h2>
          <p className="text-sm text-[#A3A3A3] mt-2">
            Kami memahami kepatuhan regulasi, keamanan data tingkat tinggi, dan tuntutan konkurensi di setiap lini bisnis.
          </p>
        </div>

        {/* Industry Capabilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {industries.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-5 rounded-xl bg-[#181818] border border-[#2A2A2A] hover:border-[#FFD700]/50 transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#222222] border border-[#333333] flex items-center justify-center mb-3 group-hover:border-[#FFD700]/60 transition-colors">
                  <Icon className="w-5 h-5 text-[#FFD700]" />
                </div>
                <h3 className="text-sm font-bold text-white group-hover:text-[#FFE873] transition-colors">
                  {item.name}
                </h3>
                <p className="text-xs text-[#7A7A7A] mt-1.5 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Standards & Compliance Strip */}
        <div className="mt-12 pt-8 border-t border-[#262626] flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-medium text-[#A3A3A3]">
          {standards.map((std, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FFD700]" />
              <span>{std}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
