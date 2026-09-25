import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-[#222222] text-[#A3A3A3] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-5">
            <Link href="/" className="inline-block">
              <div className="relative h-11 w-52">
                <Image
                  src="/logo2.png"
                  alt="ScyterCorp Wordmark"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </Link>
            <p className="text-xs sm:text-sm text-[#888888] leading-relaxed max-w-sm">
              ScyterCorp adalah software house yang merekayasa sistem perangkat lunak kritis berkinerja tinggi, arsitektur cloud terdistribusi, dan automasi AI untuk perusahaan terkemuka.
            </p>

            {/* Operational Status */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#141414] border border-[#282828] text-xs">
              <span className="w-2 h-2 rounded-full bg-[#2ECC71] animate-pulse" />
              <span className="text-[#CCCCCC] font-mono text-[11px]">
                All Systems Operational · SLA 99.99%
              </span>
            </div>

            {/* Social channels (Crisp SVG Icons) */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="w-8 h-8 rounded-lg bg-[#161616] border border-[#282828] flex items-center justify-center text-[#A3A3A3] hover:text-[#FFD700] hover:border-[#FFD700]/50 transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-lg bg-[#161616] border border-[#282828] flex items-center justify-center text-[#A3A3A3] hover:text-[#FFD700] hover:border-[#FFD700]/50 transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64a1.64 1.64 0 1 0 0 3.27 1.64 1.64 0 0 0 0-3.27z" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="X / Twitter"
                className="w-8 h-8 rounded-lg bg-[#161616] border border-[#282828] flex items-center justify-center text-[#A3A3A3] hover:text-[#FFD700] hover:border-[#FFD700]/50 transition-colors"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Nav Column 1: Layanan */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Layanan Utama
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Web & SaaS Development
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  High-Performance Mobile Apps
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Cloud Infrastructure & DevOps
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  AI & Machine Learning Engine
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Legacy System Modernization
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  UI/UX & Design Systems
                </a>
              </li>
            </ul>
          </div>

          {/* Nav Column 2: Solusi & Fitur */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Eksplorasi
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#solutions" className="hover:text-white transition-colors">
                  Solusi Lintas Industri
                </a>
              </li>
              <li>
                <a href="#estimator" className="hover:text-white transition-colors">
                  Kalkulator Estimasi Biaya
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-white transition-colors">
                  Studi Kasus & Portofolio
                </a>
              </li>
              <li>
                <a href="#methodology" className="hover:text-white transition-colors">
                  Metodologi 4-Tahap
                </a>
              </li>
              <li>
                <a href="#techstack" className="hover:text-white transition-colors">
                  Teknologi & Tech Stack
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Tanya Jawab (FAQ)
                </a>
              </li>
            </ul>
          </div>

          {/* Nav Column 3: Kontak & Kantor */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Kantor & Kontak
            </h4>
            <ul className="space-y-2 text-xs text-[#888888]">
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#FFD700] mt-0.5 shrink-0" />
                <span>Malang, Indonesia</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#FFD700] shrink-0" />
                <a href="mailto:scyter.corp@gmail.com" className="hover:text-white transition-colors">
                  scyter.corp@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#FFD700] shrink-0" />
                <a
                  href="https://wa.me/6282233201091"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors"
                >
                  082233201091
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom legal line */}
        <div className="pt-8 border-t border-[#1C1C1C] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#666666]">
          <p>© 2026 PT Scyter Digital Nusantara (ScyterCorp). All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-[#A3A3A3] cursor-pointer">Kebijakan Privasi</span>
            <span className="hover:text-[#A3A3A3] cursor-pointer">Syarat & Ketentuan</span>
            <span className="hover:text-[#A3A3A3] cursor-pointer">Standar NDA</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
