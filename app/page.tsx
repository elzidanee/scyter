"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Services from "@/components/Services";
import ProjectEstimator from "@/components/ProjectEstimator";
import Portfolio from "@/components/Portfolio";
import Methodology from "@/components/Methodology";
import TechStack from "@/components/TechStack";
import Guarantees from "@/components/Guarantees";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  const [inquirySummary, setInquirySummary] = useState<string>("");

  const handleOpenConsultation = () => {
    const el = document.getElementById("contact");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  const handleProceedToForm = (summary: string) => {
    setInquirySummary(summary);
    const el = document.getElementById("contact");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white flex flex-col selection:bg-[#FFD700] selection:text-[#0D0D0D]">
      {/* Sticky Global Navigation */}
      <Navbar onOpenConsultation={handleOpenConsultation} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section with Interactive Engineering Cockpit Terminal */}
        <Hero onOpenConsultation={handleOpenConsultation} />

        {/* Industry Trust & Regulatory Compliance Standards */}
        <TrustBar />

        {/* Core Services with Detailed Deliverables & Timelines */}
        <Services />

        {/* Interactive Project Cost & Timeline Estimator (Huge Conversion Driver) */}
        <ProjectEstimator onProceedToForm={handleProceedToForm} />

        {/* Real-World Case Studies & Portfolio with Impact Metrics */}
        <Portfolio />

        {/* The 4-Step Engineering Methodology & Zero Technical Debt Standard */}
        <Methodology />

        {/* Categorized Production-Grade Tech Stack */}
        <TechStack />

        {/* 4 Ironclad Guarantees: 100% IP Ownership, Strict NDA, Warranty, Milestone Billing */}
        <Guarantees />

        {/* Executive Testimonials from Tech Leaders */}
        <Testimonials />

        {/* Comprehensive Interactive FAQ */}
        <FAQ />

        {/* Direct Technical Consultation Form & WhatsApp Quick Connect */}
        <ContactSection initialSummary={inquirySummary} />
      </main>

      {/* Corporate Enterprise Footer */}
      <Footer />
    </div>
  );
}
