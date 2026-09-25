"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ArrowRight,
  ShieldCheck,
  Zap,
  Activity,
  Terminal,
  Cpu,
  Server,
  Database,
  Lock,
  CheckCircle2,
  Layers,
  Sparkles,
  ExternalLink,
} from "lucide-react";

interface HeroProps {
  onOpenConsultation?: () => void;
}

export default function Hero({ onOpenConsultation }: HeroProps) {
  const [activeTab, setActiveTab] = useState<"arch" | "metrics" | "code">("arch");

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#0D0D0D]">
      {/* Background Subtle Tech Patterns & Brand Gold Mesh */}
      <div className="absolute inset-0 tech-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#FFD700]/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-[#FFE873]/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Watermark of the ScyterCorp Logogram "Y" */}
      <div className="absolute right-4 top-20 md:right-20 md:top-24 w-72 h-72 md:w-[480px] md:h-[480px] opacity-[0.04] pointer-events-none select-none">
        <Image
          src="/logo.png"
          alt="ScyterCorp Watermark"
          fill
          className="object-contain"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Value Proposition & Copywriting */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#181818] border border-[#2A2A2A] shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-[#FFD700] animate-ping" />
              <span className="text-xs font-semibold uppercase tracking-wider text-[#FFD700]">
                Enterprise Software House
              </span>
              <span className="text-xs text-[#7A7A7A]">|</span>
              <span className="text-xs text-[#A3A3A3] font-medium hidden sm:inline">
                Zero-Debt Codebase · Bank-Grade Architecture
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[58px] font-bold tracking-tight text-white leading-[1.12] font-[family-name:var(--font-heading)]">
              Transformasi Ide Menjadi{" "}
              <span className="gold-gradient-text inline-block">
                Software Skala Enterprise
              </span>{" "}
              yang Cepat, Skalabel & Aman.
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#A3A3A3] leading-relaxed max-w-2xl mx-auto lg:mx-0">
              ScyterCorp adalah mitra rekayasa perangkat lunak terpercaya untuk korporasi,
              startup bertumbuh, dan bisnis modern. Kami membangun platform web & mobile kritis,
              arsitektur cloud terdistribusi, serta automasi AI yang siap beroperasi di skala jutaan pengguna.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onOpenConsultation || (() => {
                  const el = document.getElementById("contact");
                  el?.scrollIntoView({ behavior: "smooth" });
                })}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg text-base font-bold text-[#0D0D0D] transition-all duration-300 hover:brightness-105 hover:shadow-[0_0_28px_rgba(255,215,0,0.4)] cursor-pointer group"
                style={{
                  background: "linear-gradient(180deg, #FFFBE6 0%, #FFE873 40%, #FFD700 100%)",
                }}
              >
                <Zap className="w-5 h-5 fill-current text-[#0D0D0D]" />
                <span>Mulai Diskusi Proyek</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <a
                href="#estimator"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-base font-medium text-white bg-[#181818] border border-[#2A2A2A] hover:bg-[#202020] hover:border-[#FFD700]/50 transition-all duration-200"
              >
                <span>Hitung Estimasi Biaya</span>
                <Sparkles className="w-4 h-4 text-[#FFD700]" />
              </a>
            </div>

            {/* Micro Guarantees */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-6 text-xs text-[#7A7A7A]">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#2ECC71]" />
                <span className="text-[#A3A3A3]">100% Hak Milik Source Code</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#2ECC71]" />
                <span className="text-[#A3A3A3]">Perlindungan Ketat NDA</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#2ECC71]" />
                <span className="text-[#A3A3A3]">Garansi Purna Jual & Bug-Free</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Engineering Cockpit Terminal */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-[#141414] border border-[#2A2A2A] shadow-[0_20px_50px_rgba(0,0,0,0.7)] overflow-hidden transition-all duration-300 hover:border-[#FFD700]/40">
              {/* Terminal Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#1A1A1A] border-b border-[#2A2A2A]">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#E74C3C]/80" />
                  <span className="w-3 h-3 rounded-full bg-[#F5A623]/80" />
                  <span className="w-3 h-3 rounded-full bg-[#2ECC71]/80" />
                  <span className="ml-2 font-mono text-xs text-[#7A7A7A]">
                    scyter-engine :: v4.2.0-prod
                  </span>
                </div>
                <div className="flex items-center gap-1 px-2 py-0.5 rounded bg-[#252525] text-[10px] font-mono text-[#2ECC71]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2ECC71] animate-ping" />
                  <span>LIVE CLUSTER</span>
                </div>
              </div>

              {/* View Switcher Tabs */}
              <div className="flex items-center border-b border-[#2A2A2A] bg-[#121212] px-2 text-xs">
                <button
                  onClick={() => setActiveTab("arch")}
                  className={`flex items-center gap-1.5 px-3 py-2.5 font-medium border-b-2 transition-colors cursor-pointer ${
                    activeTab === "arch"
                      ? "border-[#FFD700] text-[#FFD700]"
                      : "border-transparent text-[#7A7A7A] hover:text-white"
                  }`}
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>Arsitektur Sistem</span>
                </button>
                <button
                  onClick={() => setActiveTab("metrics")}
                  className={`flex items-center gap-1.5 px-3 py-2.5 font-medium border-b-2 transition-colors cursor-pointer ${
                    activeTab === "metrics"
                      ? "border-[#FFD700] text-[#FFD700]"
                      : "border-transparent text-[#7A7A7A] hover:text-white"
                  }`}
                >
                  <Activity className="w-3.5 h-3.5" />
                  <span>Metrik SLA</span>
                </button>
                <button
                  onClick={() => setActiveTab("code")}
                  className={`flex items-center gap-1.5 px-3 py-2.5 font-medium border-b-2 transition-colors cursor-pointer ${
                    activeTab === "code"
                      ? "border-[#FFD700] text-[#FFD700]"
                      : "border-transparent text-[#7A7A7A] hover:text-white"
                  }`}
                >
                  <Terminal className="w-3.5 h-3.5" />
                  <span>Clean Code</span>
                </button>
              </div>

              {/* Terminal Content Body */}
              <div className="p-5 font-mono text-xs text-[#A3A3A3] min-h-[300px] flex flex-col justify-between">
                {activeTab === "arch" && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-[11px] text-[#7A7A7A]">
                      <span>TOPOLOGY: EVENT-DRIVEN MICROSERVICES</span>
                      <span className="text-[#FFD700]">ZERO-DOWNTIME CI/CD</span>
                    </div>

                    {/* Visual Node Flow */}
                    <div className="space-y-2.5 pt-1">
                      <div className="p-2.5 rounded-lg bg-[#1A1A1A] border border-[#2E2E2E] flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Cpu className="w-4 h-4 text-[#FFD700]" />
                          <span className="font-semibold text-white">Edge Gateway & Load Balancer</span>
                        </div>
                        <span className="text-[10px] text-[#2ECC71]">12ms Global P99</span>
                      </div>

                      <div className="flex justify-center text-[#7A7A7A]">↓ REST / gRPC Streaming ↓</div>

                      <div className="grid grid-cols-2 gap-2">
                        <div className="p-2.5 rounded-lg bg-[#1A1A1A] border border-[#2E2E2E]">
                          <div className="flex items-center gap-1.5 text-white font-semibold">
                            <Server className="w-3.5 h-3.5 text-[#3B82F6]" />
                            <span>Auth & Core API</span>
                          </div>
                          <p className="text-[10px] text-[#7A7A7A] mt-1">Go / Gin · Stateless JWT</p>
                        </div>
                        <div className="p-2.5 rounded-lg bg-[#1A1A1A] border border-[#2E2E2E]">
                          <div className="flex items-center gap-1.5 text-white font-semibold">
                            <Sparkles className="w-3.5 h-3.5 text-[#FFD700]" />
                            <span>AI & Event Pipeline</span>
                          </div>
                          <p className="text-[10px] text-[#7A7A7A] mt-1">Kafka / PyTorch RAG</p>
                        </div>
                      </div>

                      <div className="flex justify-center text-[#7A7A7A]">↓ Multi-AZ Distributed Storage ↓</div>

                      <div className="p-2.5 rounded-lg bg-[#1A1A1A] border border-[#2E2E2E] flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Database className="w-4 h-4 text-[#2ECC71]" />
                          <span className="font-semibold text-white">PostgreSQL Cluster + Redis Caching</span>
                        </div>
                        <span className="text-[10px] text-[#FFD700]">Replication Active</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "metrics" && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-3 rounded-lg bg-[#1A1A1A] border border-[#2E2E2E]">
                        <span className="text-[10px] text-[#7A7A7A]">SYSTEM AVAILABILITY</span>
                        <div className="text-xl font-bold text-white mt-1">99.995%</div>
                        <span className="text-[10px] text-[#2ECC71]">Terjamin SLA Perjanjian</span>
                      </div>
                      <div className="p-3 rounded-lg bg-[#1A1A1A] border border-[#2E2E2E]">
                        <span className="text-[10px] text-[#7A7A7A]">API P99 LATENCY</span>
                        <div className="text-xl font-bold text-[#FFD700] mt-1">&lt; 18 ms</div>
                        <span className="text-[10px] text-[#A3A3A3]">High-Concurrency Tuned</span>
                      </div>
                      <div className="p-3 rounded-lg bg-[#1A1A1A] border border-[#2E2E2E]">
                        <span className="text-[10px] text-[#7A7A7A]">SECURITY AUDIT</span>
                        <div className="text-xl font-bold text-[#2ECC71] mt-1">Grade A+</div>
                        <span className="text-[10px] text-[#A3A3A3]">OWASP Top 10 Cleared</span>
                      </div>
                      <div className="p-3 rounded-lg bg-[#1A1A1A] border border-[#2E2E2E]">
                        <span className="text-[10px] text-[#7A7A7A]">AUTOMATED DEPLOY</span>
                        <div className="text-xl font-bold text-white mt-1">38 Detik</div>
                        <span className="text-[10px] text-[#3B82F6]">Zero Downtime Release</span>
                      </div>
                    </div>

                    <div className="p-3 rounded-lg bg-[#181818] border border-[#2E2E2E] flex items-center justify-between text-[11px]">
                      <span className="text-[#A3A3A3]">Kepatuhan Regulasi Data:</span>
                      <span className="text-[#FFD700] font-semibold">UU PDP & ISO 27001</span>
                    </div>
                  </div>
                )}

                {activeTab === "code" && (
                  <div className="space-y-2 font-mono text-[11px] leading-relaxed">
                    <div className="text-[#7A7A7A]">// ScyterCorp Core: Zero-Allocation Safe Transaction</div>
                    <div>
                      <span className="text-[#E74C3C]">export async function</span>{" "}
                      <span className="text-[#FFE873]">executeEnterpriseOrder</span>(
                      <span className="text-white">ctx: Context, order: OrderPayload</span>
                    ): <span className="text-[#3B82F6]">Promise&lt;Result&gt;</span> &#123;
                    </div>
                    <div className="pl-4 text-[#A3A3A3]">
                      <span className="text-[#E74C3C]">const</span> session ={" "}
                      <span className="text-[#E74C3C]">await</span> ctx.db.startTransaction();
                    </div>
                    <div className="pl-4 text-[#7A7A7A]">
                      // Enforce concurrency lock with microsecond latency
                    </div>
                    <div className="pl-4 text-[#A3A3A3]">
                      <span className="text-[#E74C3C]">await</span> ctx.redis.acquireLock(order.id, 5000);
                    </div>
                    <div className="pl-4 text-[#A3A3A3]">
                      <span className="text-[#E74C3C]">const</span> result ={" "}
                      <span className="text-[#E74C3C]">await</span> orderPipeline.process(order, session);
                    </div>
                    <div className="pl-4 text-[#2ECC71]">
                      <span className="text-[#E74C3C]">return</span> session.commit(result);
                    </div>
                    <div>&#125;</div>
                  </div>
                )}

                {/* Terminal Bottom Footer Status */}
                <div className="pt-4 mt-2 border-t border-[#2A2A2A] flex items-center justify-between text-[10px] text-[#7A7A7A]">
                  <div className="flex items-center gap-1.5">
                    <Lock className="w-3 h-3 text-[#2ECC71]" />
                    <span>End-to-End Encrypted (AES-256)</span>
                  </div>
                  <span className="text-[#FFD700]">Jakarta DC Region</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Highlighted Proof Numbers Strip */}
        <div className="mt-16 sm:mt-24 pt-10 border-t border-[#2A2A2A] grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="space-y-1 text-center md:text-left">
            <div className="text-3xl sm:text-4xl font-extrabold text-white font-[family-name:var(--font-heading)]">
              45<span className="text-[#FFD700]">+</span>
            </div>
            <div className="text-sm font-semibold text-[#E5E5E5]">Sistem Skala Produksi</div>
            <p className="text-xs text-[#7A7A7A]">Terkirim tepat waktu tanpa overbudget</p>
          </div>

          <div className="space-y-1 text-center md:text-left">
            <div className="text-3xl sm:text-4xl font-extrabold text-white font-[family-name:var(--font-heading)]">
              99.98<span className="text-[#FFD700]">%</span>
            </div>
            <div className="text-sm font-semibold text-[#E5E5E5]">Garansi SLA Availability</div>
            <p className="text-xs text-[#7A7A7A]">Dukungan pemantauan 24/7 purna rilis</p>
          </div>

          <div className="space-y-1 text-center md:text-left">
            <div className="text-3xl sm:text-4xl font-extrabold text-white font-[family-name:var(--font-heading)]">
              &lt; 24<span className="text-[#FFD700]">j</span>
            </div>
            <div className="text-sm font-semibold text-[#E5E5E5]">Respon Cepat Konsultasi</div>
            <p className="text-xs text-[#7A7A7A]">Langsung terhubung dengan Lead Architect</p>
          </div>

          <div className="space-y-1 text-center md:text-left">
            <div className="text-3xl sm:text-4xl font-extrabold text-white font-[family-name:var(--font-heading)]">
              100<span className="text-[#FFD700]">%</span>
            </div>
            <div className="text-sm font-semibold text-[#E5E5E5]">Kepemilikan Source Code</div>
            <p className="text-xs text-[#7A7A7A]">Tanpa vendor lock-in, IP seutuhnya milik Anda</p>
          </div>
        </div>
      </div>
    </section>
  );
}
