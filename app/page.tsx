"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Services from "@/components/Services";
import ProjectEstimator from "@/components/ProjectEstimator";
import Portfolio from "@/components/Portfolio";
import Methodology from "@/components/Methodology";
import Guarantees from "@/components/Guarantees";
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
        {/* Hero Section */}
        <Hero onOpenConsultation={handleOpenConsultation} />

        {/* Custom Systems Showcase (POS, CMS, LMS, PMS) */}
        <TrustBar />

        {/* 4 Core Services: Web, App, UI/UX, Custom System */}
        <Services />

        {/* Interactive Estimator Calculator */}
        <ProjectEstimator onProceedToForm={handleProceedToForm} />

        {/* Real-World Case Studies & Portfolio */}
        <Portfolio />

        {/* 4-Step Methodology */}
        <Methodology />

        {/* 4 Guarantees */}
        <Guarantees />

        {/* Clean Interactive FAQ */}
        <FAQ />

        {/* Direct Consultation Form & WhatsApp Quick Connect */}
        <ContactSection initialSummary={inquirySummary} />
      </main>

      {/* Corporate Enterprise Footer */}
      <Footer />
    </div>
  );
}
