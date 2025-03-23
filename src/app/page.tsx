import React from "react";
import Navbar from "@/Components/Navbar";
import HeroSection from "@/Components/HeroSection";
import JobDiscoverySection from "@/Components/JobDiscoverySection";
import TestimonialSection from "@/Components/TestimonialSection";
import FeaturesSection from "@/Components/FeaturesSection";
import FooterSection from "@/Components/FooterSection";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <JobDiscoverySection />
      <TestimonialSection />
      <FeaturesSection />
      <FooterSection />
    </main>
  );
}
