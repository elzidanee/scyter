"use client";

import { useState } from "react";
import {
  Code2,
  Server,
  Smartphone,
  Database,
  Cloud,
  Cpu,
  Layers,
} from "lucide-react";

export default function TechStack() {
  const [activeTab, setActiveTab] = useState<string>("all");

  const categories = [
    { id: "all", label: "Semua Teknologi", icon: Layers },
    { id: "frontend", label: "Frontend & Web", icon: Code2 },
    { id: "backend", label: "Backend & Services", icon: Server },
    { id: "mobile", label: "Mobile Apps", icon: Smartphone },
    { id: "database", label: "Database & Cache", icon: Database },
    { id: "devops", label: "Cloud & DevOps", icon: Cloud },
    { id: "ai", label: "AI & ML Engine", icon: Cpu },
  ];

  const technologies = [
    // Frontend
    { name: "TypeScript", role: "Type-Safe Core", cat: "frontend", highlight: "Enterprise Standard" },
    { name: "Next.js 16", role: "Fullstack React Framework", cat: "frontend", highlight: "App Router & SSR" },
    { name: "React 19", role: "Component Architecture", cat: "frontend", highlight: "Server Components" },
    { name: "Tailwind CSS", role: "Utility Design Tokens", cat: "frontend", highlight: "High Velocity UI" },
    { name: "Vue.js / Nuxt", role: "Alternative Frontend", cat: "frontend", highlight: "Progressive Web" },

    // Backend
    { name: "Golang (Go)", role: "High-Throughput Microservices", cat: "backend", highlight: "Ultra-Low Latency" },
    { name: "Node.js / NestJS", role: "Enterprise Modular API", cat: "backend", highlight: "Clean Architecture" },
    { name: "Python / FastAPI", role: "AI & High-Performance Async", cat: "backend", highlight: "Modern Asynchronous" },
    { name: "Rust", role: "Memory-Safe Systems", cat: "backend", highlight: "Critical Performance" },
    { name: "gRPC & Protocol Buffers", role: "Inter-Service Communication", cat: "backend", highlight: "Binary Serialization" },

    // Mobile
    { name: "Flutter", role: "Cross-Platform Framework", cat: "mobile", highlight: "60 FPS Native Canvas" },
    { name: "React Native", role: "JavaScript Mobile Ecosystem", cat: "mobile", highlight: "Code Sharing" },
    { name: "Swift (iOS)", role: "Native Apple Platform", cat: "mobile", highlight: "iOS Hardware Tuning" },
    { name: "Kotlin (Android)", role: "Native Android Platform", cat: "mobile", highlight: "Jetpack Compose" },

    // Database & Cache
    { name: "PostgreSQL", role: "Relational ACID Core", cat: "database", highlight: "Battle-Tested Reliability" },
    { name: "Redis", role: "In-Memory Caching & Lock", cat: "database", highlight: "Sub-Millisecond Read" },
    { name: "Apache Kafka", role: "Distributed Event Streaming", cat: "database", highlight: "Million Events/Sec" },
    { name: "ClickHouse", role: "Columnar Big Data Analytics", cat: "database", highlight: "Instant BI Query" },
    { name: "MongoDB", role: "Flexible Document Store", cat: "database", highlight: "Dynamic Schema" },

    // Cloud & DevOps
    { name: "Amazon Web Services (AWS)", role: "Premier Cloud Infrastructure", cat: "devops", highlight: "EKS, RDS, S3, CloudFront" },
    { name: "Google Cloud Platform", role: "GCP Kubernetes & BigQuery", cat: "devops", highlight: "Data & Compute Cloud" },
    { name: "Kubernetes (K8s)", role: "Container Orchestration", cat: "devops", highlight: "Auto-Scaling & Healing" },
    { name: "Docker", role: "Containerization Standard", cat: "devops", highlight: "Consistent Environments" },
    { name: "Terraform", role: "Infrastructure as Code (IaC)", cat: "devops", highlight: "Zero-Drift Automation" },

    // AI & ML
    { name: "OpenAI & Anthropic API", role: "Frontier LLM Integration", cat: "ai", highlight: "Enterprise Agents" },
    { name: "PyTorch", role: "Deep Learning Framework", cat: "ai", highlight: "Custom Model Training" },
    { name: "LangChain & LlamaIndex", role: "RAG & Orchestration", cat: "ai", highlight: "Enterprise Knowledge" },
    { name: "pgvector", role: "Vector Similarity Search", cat: "ai", highlight: "Low Latency Embeddings" },
  ];

  const filtered =
    activeTab === "all"
      ? technologies
      : technologies.filter((t) => t.cat === activeTab);

  return (
    <section id="techstack" className="py-24 bg-[#0D0D0D] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <p className="text-xs uppercase font-bold tracking-widest text-[#FFD700]">
            Teknologi Terpilih
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-[family-name:var(--font-heading)]">
            Tech Stack Modern untuk{" "}
            <span className="gold-gradient-text">Stabilitas Jangka Panjang</span>
          </h2>
          <p className="text-base text-[#A3A3A3]">
            Kami hanya memilih teknologi yang matang, didukung ekosistem global yang kuat, dan mudah di-maintain oleh tim internal Anda di kemudian hari.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  isActive
                    ? "bg-[#FFE873] text-[#0D0D0D] shadow-[0_0_16px_rgba(255,215,0,0.3)]"
                    : "bg-[#161616] text-[#A3A3A3] hover:text-white border border-[#262626] hover:border-[#383838]"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tech Stack Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5">
          {filtered.map((tech, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-[#141414] border border-[#262626] hover:border-[#FFD700]/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.4)] group flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-mono text-[#D9A900] uppercase tracking-wider block mb-1">
                  {tech.highlight}
                </span>
                <h3 className="text-sm font-bold text-white group-hover:text-[#FFE873] transition-colors">
                  {tech.name}
                </h3>
              </div>
              <p className="text-[11px] text-[#7A7A7A] mt-2">
                {tech.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
