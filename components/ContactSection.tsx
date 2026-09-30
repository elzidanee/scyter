"use client";

import { useState, useEffect, useRef } from "react";
import {
  MessageSquare, Mail, MapPin, CheckCircle2,
  ShieldCheck, Loader2, Copy, Check, Send,
  Clock, ChevronLeft, ArrowRight,
} from "lucide-react";
import {
  motion, AnimatePresence, useReducedMotion,
} from "motion/react";

// ─── Data ────────────────────────────────────────────────────────────────────

const serviceOptions = [
  "Pembuatan Website",
  "Aplikasi Mobile",
  "Sistem Kasir (POS)",
  "Custom CMS / Portal",
  "Sistem Properti (PMS)",
  "UI/UX Design",
  "Sistem Kustom Lainnya",
];

const budgetOptions = ["< Rp 5 Jt", "Rp 5 – 15 Jt", "Rp 15 – 35 Jt", "> Rp 35 Jt"];

// ─── Easing constants ────────────────────────────────────────────────────────

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];
const EASE_IN: [number, number, number, number] = [0.32, 0, 0.67, 0];

// ─── Spotlight sub-component ─────────────────────────────────────────────────

function SpotlightCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const [pos, setPos]     = useState({ x: 0, y: 0 });
  const [hovered, setHov] = useState(false);
  const reduced           = useReducedMotion();

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduced) return;
    const r = e.currentTarget.getBoundingClientRect();
    setPos({ x: e.clientX - r.left, y: e.clientY - r.top });
  };

  return (
    <div
      onMouseMove={onMove}
      onMouseEnter={() => !reduced && setHov(true)}
      onMouseLeave={() => setHov(false)}
      className={`relative overflow-hidden ${className}`}
    >
      {!reduced && (
        <div
          className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
          style={{
            opacity: hovered ? 1 : 0,
            background: `radial-gradient(380px circle at ${pos.x}px ${pos.y}px, rgba(255,215,0,0.035), transparent 75%)`,
          }}
        />
      )}
      <div className="relative z-10">{children}</div>
    </div>
  );
}

// ─── Magnetic button sub-component ───────────────────────────────────────────

function MagneticButton({ children, disabled, className = "", style, type = "button", onClick }: {
  children: React.ReactNode;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
  type?: "button" | "submit";
  onClick?: () => void;
}) {
  const [off, setOff] = useState({ x: 0, y: 0 });
  const reduced       = useReducedMotion();

  const onMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (reduced || disabled) return;
    const r = e.currentTarget.getBoundingClientRect();
    setOff({ x: (e.clientX - (r.left + r.width / 2)) * 0.08, y: (e.clientY - (r.top + r.height / 2)) * 0.08 });
  };

  return (
    <motion.button
      type={type}
      disabled={disabled}
      onClick={onClick}
      onMouseMove={onMove}
      onMouseLeave={() => setOff({ x: 0, y: 0 })}
      animate={reduced ? {} : { x: off.x, y: off.y }}
      transition={{ type: "spring", stiffness: 400, damping: 28, mass: 0.4 }}
      style={style}
      className={className}
    >
      {children}
    </motion.button>
  );
}

// ─── Stagger wrapper helpers ──────────────────────────────────────────────────

// Consultation form outer wrapper — controls stagger for all children
const formVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.03, delayChildren: 0.14 } },
  // Collapse exit: children go DOWN (reverse direction)
  exit:   { transition: { staggerChildren: 0.015, staggerDirection: -1 } },
};

// Consultation header (eyebrow + heading) — enters with more emphasis
const consultHeaderVariants = {
  hidden:  { opacity: 0, y: 16, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.30, ease: EASE } },
  exit:    { opacity: 0, y: 10, scale: 0.98, transition: { duration: 0.16, ease: EASE_IN } },
};

// Contact info items + form fields — tighter motion
const itemVariants = {
  hidden:  { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.24, ease: EASE } },
  exit:    { opacity: 0, y: 10, transition: { duration: 0.12, ease: EASE_IN } },
};

// Reduced-motion fallbacks — opacity only, no translate
const consultHeaderVariantsReduced = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2 } },
  exit:    { opacity: 0, transition: { duration: 0.12 } },
};

const itemVariantsReduced = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.18 } },
  exit:    { opacity: 0, transition: { duration: 0.10 } },
};

// CTA state per-element variants
const ctaContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.03, delayChildren: 0.04 },
  },
  exit: {
    transition: { staggerChildren: 0.02 },
  },
};

const ctaEyebrowVariants = {
  hidden:  { opacity: 0, y: 6 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.22, ease: EASE } },
  exit:    { opacity: 0, y: -6, transition: { duration: 0.14, ease: EASE } },
};

const ctaHeadingVariants = {
  hidden:  { opacity: 0, y: 12, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.28, ease: EASE } },
  exit:    { opacity: 0, y: -18, scale: 0.97, transition: { duration: 0.18, delay: 0.02, ease: EASE } },
};

const ctaDescVariants = {
  hidden:  { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.22, ease: EASE } },
  exit:    { opacity: 0, y: -8, transition: { duration: 0.14, delay: 0.04, ease: EASE } },
};

const ctaButtonVariants = {
  hidden:  { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.24, ease: EASE } },
  exit:    { opacity: 0, scale: 0.96, y: -4, transition: { duration: 0.12, delay: 0.06, ease: EASE } },
};

// CTA reduced-motion variants
const ctaReducedVariants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2 } },
  exit:    { opacity: 0, transition: { duration: 0.14 } },
};

// ─── Props ───────────────────────────────────────────────────────────────────

interface ContactSectionProps {
  initialSummary?: string;
  isOpen?: boolean;
  onClose?: () => void;
  onAutoOpen?: () => void;
}

// ─── Main Component ──────────────────────────────────────────────────────────

export default function ContactSection({
  initialSummary = "",
  isOpen         = false,
  onClose,
  onAutoOpen,
}: ContactSectionProps) {
  const reduced      = useReducedMotion();
  const nameRef      = useRef<HTMLInputElement>(null);
  const cardRef      = useRef<HTMLDivElement>(null);

  const [expanded,    setExpanded]    = useState(isOpen);
  const [prevIsOpen,  setPrevIsOpen]  = useState(isOpen);
  const [submitted,   setSubmitted]   = useState(false);
  const [submitting,  setSubmitting]  = useState(false);
  const [copiedEmail, setCopied]      = useState(false);

  const [formData, setFormData] = useState({
    name: "", email: "", phone: "",
    serviceType: "Pembuatan Website",
    budget: "Rp 5 – 15 Jt",
    description: initialSummary,
  });
  const [prevInitialSummary, setPrevInitialSummary] = useState(initialSummary);

  // Sync isOpen from parent during render (avoids cascading effect renders)
  if (isOpen !== prevIsOpen) {
    setPrevIsOpen(isOpen);
    if (isOpen) {
      setExpanded(true);
    }
  }

  // Sync initialSummary from parent during render
  if (initialSummary !== prevInitialSummary) {
    setPrevInitialSummary(initialSummary);
    if (initialSummary) {
      setFormData(p => ({ ...p, description: initialSummary }));
    }
  }

  // Hash navigation & anchor clicks — auto-open and scroll
  useEffect(() => {
    const handleHash = () => {
      if (window.location.hash === "#contact") {
        onAutoOpen?.();
        setExpanded(true);
        setTimeout(scrollToCard, 420);
      }
    };

    const handleAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest?.('a[href*="#contact"]');
      if (target) {
        onAutoOpen?.();
        setExpanded(true);
        setTimeout(scrollToCard, 420);
      }
    };

    let initialTimer: ReturnType<typeof setTimeout> | undefined;
    if (typeof window !== "undefined" && window.location.hash === "#contact") {
      initialTimer = setTimeout(() => {
        onAutoOpen?.();
        setExpanded(true);
        setTimeout(scrollToCard, 420);
      }, 0);
    }

    window.addEventListener("hashchange", handleHash);
    window.addEventListener("popstate", handleHash);
    document.addEventListener("click", handleAnchorClick, { passive: true });

    return () => {
      if (initialTimer) clearTimeout(initialTimer);
      window.removeEventListener("hashchange", handleHash);
      window.removeEventListener("popstate", handleHash);
      document.removeEventListener("click", handleAnchorClick);
    };
  }, [onAutoOpen]);

  // Autofocus (desktop / pointer:fine only)
  useEffect(() => {
    if (!expanded) return;
    const isFinePinter = typeof window !== "undefined" && window.matchMedia("(pointer:fine)").matches;
    if (!isFinePinter) return;
    const t = setTimeout(() => nameRef.current?.focus({ preventScroll: true }), 600);
    return () => clearTimeout(t);
  }, [expanded]);

  function scrollToCard() {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function handleExpand() {
    setExpanded(true);
    setTimeout(scrollToCard, 500); // wait for layout morph to stabilise
  }

  function handleCollapse() {
    setExpanded(false);
    setSubmitted(false);
    onClose?.();
    setTimeout(scrollToCard, 400);
  }

  function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => { setSubmitting(false); setSubmitted(true); }, 700);
  }

  function handleCopyEmail(e: React.MouseEvent) {
    e.preventDefault();
    navigator.clipboard.writeText("scyter.corp@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  function handleWhatsApp() {
    const text = encodeURIComponent(
      `Halo ScyterCorp! Saya ${formData.name || "Klien"} ingin konsultasi proyek:\n\n` +
      `• Layanan: ${formData.serviceType}\n` +
      `• Estimasi Budget: ${formData.budget}\n` +
      `• Kebutuhan: ${formData.description || "Ingin berdiskusi lebih lanjut"}`
    );
    window.open(`https://wa.me/6282233201091?text=${text}`, "_blank");
  }

  const iv = reduced ? itemVariantsReduced : itemVariants;
  const consultHeaderIv = reduced ? consultHeaderVariantsReduced : consultHeaderVariants;

  return (
    <section
      id="contact"
      className="py-16 sm:py-24 bg-[#09090B] relative border-t border-white/[0.08] overflow-hidden scroll-mt-16"
    >
      {/* Hairline grid */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(to right,rgba(255,255,255,0.015) 1px,transparent 1px),linear-gradient(to bottom,rgba(255,255,255,0.015) 1px,transparent 1px)",
          backgroundSize: "4rem 4rem",
        }}
      />
      {/* Ambient warm glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[260px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse,rgba(255,215,0,0.03) 0%,transparent 70%)", filter: "blur(60px)" }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ══════════════════════════════════════════════
            SHARED MORPHING CARD
        ══════════════════════════════════════════════ */}
        <motion.div
          ref={cardRef}
          layout
          transition={{ duration: 0.55, ease: EASE }}
          className="rounded-2xl sm:rounded-3xl bg-[#0F0F12] border border-white/[0.08] shadow-[0_24px_60px_rgba(0,0,0,0.7)] overflow-hidden"
        >
          <AnimatePresence mode="wait" initial={false}>

            {/* ── STATE A: CTA ── */}
            {!expanded && (
              <motion.div
                key="cta"
                variants={reduced ? ctaReducedVariants : ctaContainerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="flex flex-col items-center text-center px-6 sm:px-12 py-14 sm:py-20"
              >
                {/* Eyebrow */}
                <motion.p
                  variants={reduced ? ctaReducedVariants : ctaEyebrowVariants}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-[11px] font-mono text-amber-400 font-semibold tracking-widest uppercase mb-6"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" aria-hidden="true" />
                  REKAYASA PERANGKAT LUNAK &amp; SOLUSI DIGITAL
                </motion.p>

                {/* Heading */}
                <motion.h2
                  variants={reduced ? ctaReducedVariants : ctaHeadingVariants}
                  className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-[-0.035em] font-[family-name:var(--font-heading)] leading-[1.08] mb-4"
                >
                  Ready to Build{" "}
                  <span className="gold-gradient-text">Something Real?</span>
                </motion.h2>

                {/* Sub-copy */}
                <motion.p
                  variants={reduced ? ctaReducedVariants : ctaDescVariants}
                  className="text-sm sm:text-base text-zinc-400 max-w-lg leading-relaxed font-normal mb-8"
                >
                  Diskusikan arsitektur website, aplikasi mobile, sistem kasir, atau platform custom bersama tim engineering ScyterCorp — dari ide awal hingga produk siap pakai.
                </motion.p>

                {/* CTA button with ArrowRight micro movement & tap scale */}
                <motion.button
                  variants={reduced ? ctaReducedVariants : ctaButtonVariants}
                  whileTap={reduced ? undefined : { scale: 0.97 }}
                  type="button"
                  onClick={handleExpand}
                  className="group inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl font-bold text-sm text-[#09090B] transition-[filter] duration-150 hover:brightness-105 cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400 shadow-[0_2px_24px_rgba(255,215,0,0.22),inset_0_1px_0_0_rgba(255,255,255,0.65)]"
                  style={{ background: "linear-gradient(180deg,#FFFCE6 0%,#FFE566 45%,#FFD700 100%)" }}
                >
                  <span>START A PROJECT</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-150 group-hover:translate-x-[2.5px] shrink-0" />
                </motion.button>
              </motion.div>
            )}

            {/* ── STATE B: CONSULTATION FORM ── */}
            {expanded && (
              <motion.div
                key="form"
                variants={formVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="p-5 sm:p-8 lg:p-10"
              >

                {/* Form header row */}
                <motion.div variants={consultHeaderIv} className="flex items-center justify-between mb-6 sm:mb-8 pb-4 border-b border-white/[0.07]">
                  <div>
                    <p className="text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-amber-400 font-semibold mb-1">
                      KONSULTASI PROYEK
                    </p>
                    <h2 className="text-xl sm:text-2xl font-bold text-white font-[family-name:var(--font-heading)] tracking-tight">
                      Ceritakan kebutuhan proyek Anda.
                    </h2>
                  </div>
                  <button
                    type="button"
                    onClick={handleCollapse}
                    className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white transition-colors duration-150 active:scale-[0.97] focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-400 rounded px-2 py-1 cursor-pointer shrink-0 ml-4"
                  >
                    <ChevronLeft className="w-3.5 h-3.5" />
                    <span className="hidden sm:block">Back to overview</span>
                  </button>
                </motion.div>

                <AnimatePresence mode="wait">
                  {submitted ? (
                    /* ── Success state ── */
                    <motion.div
                      key="success"
                      initial={reduced ? { opacity: 0 } : { opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={reduced ? { opacity: 0 } : { opacity: 0, scale: 0.96 }}
                      transition={{ duration: 0.22, ease: EASE }}
                      className="py-10 text-center space-y-4"
                    >
                      <div className="w-14 h-14 rounded-full bg-emerald-400/10 border border-emerald-400/30 mx-auto flex items-center justify-center text-emerald-400">
                        <CheckCircle2 className="w-7 h-7" />
                      </div>
                      <div className="space-y-1">
                        <h3 className="text-xl font-bold text-white font-[family-name:var(--font-heading)]">Pesan Anda Berhasil Terkirim!</h3>
                        <p className="text-xs sm:text-sm text-zinc-400 max-w-sm mx-auto leading-relaxed">
                          Terima kasih {formData.name || ""}. Tim ScyterCorp akan meninjau kebutuhan proyek Anda dan menghubungi via WhatsApp/Email dalam 1x24 jam.
                        </p>
                      </div>
                      <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                        <button
                          type="button" onClick={handleWhatsApp}
                          className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs font-bold text-[#09090B] bg-amber-400 hover:bg-amber-300 active:scale-[0.97] transition-all cursor-pointer flex items-center justify-center gap-2"
                        >
                          <MessageSquare className="w-3.5 h-3.5" />
                          <span>Lanjutkan di WhatsApp</span>
                        </button>
                        <button
                          type="button" onClick={() => setSubmitted(false)}
                          className="w-full sm:w-auto px-4 py-2.5 rounded-xl text-xs font-semibold text-zinc-300 bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.08] hover:text-white active:scale-[0.97] transition-colors cursor-pointer"
                        >
                          Kirim Pesan Lain
                        </button>
                      </div>
                    </motion.div>
                  ) : (
                    /* ── The consultation form ── */
                    <form onSubmit={handleSubmit} noValidate className="space-y-0">
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">

                        {/* ── LEFT: Contact info ── */}
                        <div className="lg:col-span-4 space-y-4">
                          <motion.div variants={iv} className="space-y-1.5">
                            <p className="text-xs text-zinc-400 leading-relaxed">
                              Tim engineer kami siap mendiskusikan arsitektur teknis dan estimasi investasi terbaik untuk kebutuhan Anda.
                            </p>
                          </motion.div>

                          {/* WhatsApp */}
                          <motion.div variants={iv}>
                            <SpotlightCard className="rounded-xl border border-white/[0.08] hover:border-emerald-500/40 bg-[#09090B]/60 transition-colors duration-200">
                              <button type="button" onClick={handleWhatsApp}
                                className="w-full p-3.5 flex items-center justify-between group cursor-pointer text-left active:scale-[0.99] transition-transform duration-100"
                              >
                                <div className="flex items-center gap-3">
                                  <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0 group-hover:scale-105 transition-transform duration-150">
                                    <MessageSquare className="w-4 h-4" />
                                  </div>
                                  <div>
                                    <div className="flex items-center gap-2">
                                      <h4 className="text-xs font-bold text-white group-hover:text-emerald-300 transition-colors">Chat via WhatsApp</h4>
                                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping shrink-0" />
                                    </div>
                                    <p className="text-[11px] text-zinc-500 mt-0.5">082233201091 · Respon cepat</p>
                                  </div>
                                </div>
                                <span className="text-[11px] font-semibold text-emerald-400 group-hover:translate-x-1 transition-transform duration-150 shrink-0">Chat →</span>
                              </button>
                            </SpotlightCard>
                          </motion.div>

                          {/* Email */}
                          <motion.div variants={iv}
                            className="p-3.5 rounded-xl bg-[#09090B]/60 border border-white/[0.08] flex items-center justify-between gap-2 text-xs"
                          >
                            <div className="flex items-center gap-3 min-w-0">
                              <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-amber-400 shrink-0">
                                <Mail className="w-3.5 h-3.5" />
                              </div>
                              <div className="min-w-0">
                                <span className="text-zinc-500 font-mono text-[10px] block font-semibold">EMAIL RESMI</span>
                                <a href="mailto:scyter.corp@gmail.com" className="text-zinc-200 hover:text-amber-300 transition-colors font-mono text-[11px] truncate block">
                                  scyter.corp@gmail.com
                                </a>
                              </div>
                            </div>
                            <button type="button" onClick={handleCopyEmail} title="Salin email"
                              className="px-2 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.08] active:scale-[0.95] text-zinc-400 hover:text-white transition-[background-color,color,transform] duration-150 flex items-center gap-1 text-[11px] cursor-pointer shrink-0"
                            >
                              {copiedEmail ? <><Check className="w-3 h-3 text-emerald-400" /><span className="text-emerald-400">Tersalin</span></> : <><Copy className="w-3 h-3" /><span>Salin</span></>}
                            </button>
                          </motion.div>

                          {/* Location */}
                          <motion.div variants={iv}
                            className="p-3.5 rounded-xl bg-[#09090B]/60 border border-white/[0.08] flex items-center justify-between gap-2 text-xs"
                          >
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-blue-400 shrink-0">
                                <MapPin className="w-3.5 h-3.5" />
                              </div>
                              <div>
                                <span className="text-zinc-500 font-mono text-[10px] block font-semibold">LOKASI KANTOR</span>
                                <span className="text-zinc-200 font-medium text-[11px]">Malang, Jawa Timur</span>
                              </div>
                            </div>
                            <span className="text-[10px] font-mono text-zinc-500 px-1.5 py-0.5 rounded bg-white/[0.03] border border-white/[0.06] shrink-0">UTC+7</span>
                          </motion.div>

                          {/* SLA */}
                          <motion.div variants={iv}
                            className="p-3 rounded-xl bg-white/[0.015] border border-white/[0.05] flex items-center gap-2 text-xs text-zinc-400"
                          >
                            <Clock className="w-4 h-4 text-amber-400/80 shrink-0" />
                            <span className="text-[11px] leading-relaxed">08.00 – 21.00 WIB · Konsultasi awal bebas biaya.</span>
                          </motion.div>
                        </div>

                        {/* ── RIGHT: Form fields ── */}
                        <SpotlightCard className="lg:col-span-8">
                          <div className="space-y-4">

                            {/* Name & Phone */}
                            <motion.div variants={iv} className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                              <div className="space-y-1.5">
                                <label className="text-xs font-medium text-zinc-300 block">Nama Lengkap *</label>
                                <input
                                  ref={nameRef}
                                  type="text" inputMode="text" autoComplete="name" required
                                  placeholder="Contoh: Budi Santoso"
                                  value={formData.name}
                                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white text-xs sm:text-sm focus:outline-none focus:border-amber-400/80 focus:bg-white/[0.05] placeholder:text-zinc-600 transition-all duration-150"
                                />
                              </div>
                              <div className="space-y-1.5">
                                <label className="text-xs font-medium text-zinc-300 block">Nomor WhatsApp / HP *</label>
                                <input
                                  type="tel" inputMode="tel" autoComplete="tel" required
                                  placeholder="0812-xxxx-xxxx"
                                  value={formData.phone}
                                  onChange={e => setFormData({ ...formData, phone: e.target.value })}
                                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white text-xs sm:text-sm focus:outline-none focus:border-amber-400/80 focus:bg-white/[0.05] placeholder:text-zinc-600 transition-all duration-150"
                                />
                              </div>
                            </motion.div>

                            {/* Email */}
                            <motion.div variants={iv} className="space-y-1.5">
                              <label className="text-xs font-medium text-zinc-300 block">
                                Email <span className="text-zinc-500 font-normal">(opsional)</span>
                              </label>
                              <input
                                type="email" inputMode="email" autoComplete="email"
                                placeholder="nama@perusahaan.com"
                                value={formData.email}
                                onChange={e => setFormData({ ...formData, email: e.target.value })}
                                className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white text-xs sm:text-sm focus:outline-none focus:border-amber-400/80 focus:bg-white/[0.05] placeholder:text-zinc-600 transition-all duration-150"
                              />
                            </motion.div>

                            {/* Services chips */}
                            <motion.div variants={iv} className="space-y-2">
                              <label className="text-xs font-medium text-zinc-300 block">Pilihan Layanan</label>
                              <div className="flex flex-wrap gap-1.5">
                                {serviceOptions.map(svc => {
                                  const sel = formData.serviceType === svc;
                                  return (
                                    <button key={svc} type="button"
                                      onClick={() => setFormData({ ...formData, serviceType: svc })}
                                      className={`relative px-3 py-1.5 rounded-lg text-xs font-medium transition-colors duration-150 active:scale-[0.98] cursor-pointer select-none border ${sel ? "text-[#09090B] font-bold border-amber-400" : "bg-white/[0.03] border-white/[0.08] text-zinc-400 hover:text-zinc-200 hover:border-white/[0.14]"}`}
                                    >
                                      {sel && (
                                        <motion.div
                                          layoutId="svc"
                                          className="absolute inset-0 bg-amber-400 rounded-lg -z-10"
                                          transition={{ type: "spring", stiffness: 450, damping: 35 }}
                                        />
                                      )}
                                      {svc}
                                    </button>
                                  );
                                })}
                              </div>
                            </motion.div>

                            {/* Budget chips */}
                            <motion.div variants={iv} className="space-y-2">
                              <label className="text-xs font-medium text-zinc-300 block">Perkiraan Anggaran</label>
                              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                                {budgetOptions.map(b => {
                                  const sel = formData.budget === b;
                                  return (
                                    <button key={b} type="button"
                                      onClick={() => setFormData({ ...formData, budget: b })}
                                      className={`relative py-2 px-2 rounded-lg text-xs font-medium text-center transition-colors duration-150 active:scale-[0.98] cursor-pointer border select-none ${sel ? "text-amber-300 font-bold border-amber-400/80" : "bg-white/[0.02] border-white/[0.06] text-zinc-400 hover:text-zinc-200 hover:border-white/[0.12]"}`}
                                    >
                                      {sel && (
                                        <motion.div
                                          layoutId="bgt"
                                          className="absolute inset-0 bg-white/[0.08] rounded-lg -z-10"
                                          transition={{ type: "spring", stiffness: 450, damping: 35 }}
                                        />
                                      )}
                                      {b}
                                    </button>
                                  );
                                })}
                              </div>
                            </motion.div>

                            {/* Description */}
                            <motion.div variants={iv} className="space-y-1.5">
                              <div className="flex items-center justify-between">
                                <label className="text-xs font-medium text-zinc-300">Deskripsi Kebutuhan</label>
                                <span className="text-[10px] font-mono text-zinc-500">{formData.description.length} karakter</span>
                              </div>
                              <textarea
                                rows={3}
                                placeholder="Ceritakan gambaran alur bisnis, fitur utama, atau target waktu peluncuran..."
                                value={formData.description}
                                onChange={e => setFormData({ ...formData, description: e.target.value })}
                                className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white text-xs sm:text-sm focus:outline-none focus:border-amber-400/80 focus:bg-white/[0.05] placeholder:text-zinc-600 resize-none transition-all duration-150"
                              />
                            </motion.div>

                            {/* Submit */}
                            <motion.div variants={iv}>
                              <MagneticButton
                                type="submit"
                                disabled={submitting}
                                className="w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-bold text-[#09090B] transition-[filter] duration-150 hover:brightness-105 active:scale-[0.98] shadow-[0_2px_16px_rgba(255,215,0,0.25),inset_0_1px_0_0_rgba(255,255,255,0.7)] cursor-pointer disabled:opacity-60 flex items-center justify-center gap-2"
                                style={{ background: "linear-gradient(180deg,#FFFCE6 0%,#FFE566 45%,#FFD700 100%)" }}
                              >
                                {submitting ? <><Loader2 className="w-4 h-4 animate-spin" /><span>Mengirimkan...</span></> : <><Send className="w-3.5 h-3.5" /><span>Kirim Pesan Konsultasi</span></>}
                              </MagneticButton>
                            </motion.div>

                            {/* Trust */}
                            <motion.div variants={iv}
                              className="flex items-center justify-center gap-1.5 text-[11px] text-zinc-500"
                            >
                              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                              <span>Data Anda terlindungi &amp; terikat kerahasiaan non-disclosure.</span>
                            </motion.div>

                          </div>
                        </SpotlightCard>

                      </div>
                    </form>
                  )}
                </AnimatePresence>

              </motion.div>
            )}

          </AnimatePresence>
        </motion.div>
        {/* end shared card */}

      </div>
    </section>
  );
}
