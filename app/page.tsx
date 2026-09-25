"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechMarquee from "@/components/TechMarquee";
import Services from "@/components/Services";
import FeaturesShowcase from "@/components/FeaturesShowcase";
import Portfolio from "@/components/Portfolio";
import ProjectEstimator from "@/components/ProjectEstimator";
import Methodology from "@/components/Methodology";
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

      {/* Main Content Sections - Clean, Professional & Linear */}
      <main className="flex-1">
        {/* 1. Hero: Clear Value Proposition & Engineering Commitments */}
        <Hero onOpenConsultation={handleOpenConsultation} />

        {/* 2. Tech Stack: Curated Modern Enterprise Foundation */}
        <TechMarquee />

        {/* 3. Core Services: Web, Mobile, UI/UX, & Custom Systems */}
        <Services />

        {/* 4. 3D Illustrated Architecture & Ownership Showcase (Reference Style) */}
        <FeaturesShowcase />

        {/* 5. Portfolio: Real Case Studies & Proof of Work */}
        <Portfolio />

        {/* 5. Project Estimator: Transparent Timeline & Cost Calculator */}
        <ProjectEstimator onProceedToForm={handleProceedToForm} />

        {/* 6. Methodology: Disciplined 4-Stage Development Workflow */}
        <Methodology />

        {/* 7. FAQ: Clear Answers to Client Questions */}
        <FAQ />

        {/* 8. Contact: Direct WhatsApp & Consultation Form */}
        <ContactSection initialSummary={inquirySummary} />
      </main>

      {/* Corporate Enterprise Footer */}
      <Footer />
    </div>
  );
}
