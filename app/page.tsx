"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
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
  const [isContactOpen, setIsContactOpen] = useState<boolean>(false);

  const handleOpenConsultation = () => {
    setIsContactOpen(true);
    setTimeout(() => {
      const el = document.getElementById("contact");
      el?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 450);
  };

  const handleProceedToForm = (summary: string) => {
    setInquirySummary(summary);
    setIsContactOpen(true);
    setTimeout(() => {
      const el = document.getElementById("contact");
      el?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 450);
  };

  return (
    <div className="min-h-screen bg-[#09090B] text-white flex flex-col selection:bg-amber-400 selection:text-[#09090B]">
      {/* Top Global Scroll Progress Indicator */}
      <ScrollProgress />

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

        {/* 4. 3D Illustrated Architecture & Ownership Showcase */}
        <FeaturesShowcase />

        {/* 5. Portfolio: Real Case Studies & Proof of Work */}
        <Portfolio />

        {/* 6. Project Estimator: Transparent Timeline & Cost Calculator */}
        <ProjectEstimator onProceedToForm={handleProceedToForm} />

        {/* 7. Methodology: Disciplined 4-Stage Development Workflow */}
        <Methodology />

        {/* 8. FAQ: Clear Answers to Client Questions */}
        <FAQ />

        {/* 9. Contact: Shared Morphing Card (CTA <-> Consultation Interface) */}
        <ContactSection
          initialSummary={inquirySummary}
          isOpen={isContactOpen}
          onClose={() => setIsContactOpen(false)}
          onAutoOpen={() => setIsContactOpen(true)}
        />
      </main>

      {/* Corporate Enterprise Footer */}
      <Footer />
    </div>
  );
}
