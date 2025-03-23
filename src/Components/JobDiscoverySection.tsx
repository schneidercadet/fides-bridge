"use client";

import React from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const JobDiscoverySection = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-[#070A12] via-[#0B1A33] to-[#0E2D5F]">
      {/* Gradient overlay pattern */}
      <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="order-2 lg:order-1">
            <div 
              data-aos="fade-up" 
              data-aos-delay="100"
              className="text-blue-400 font-medium mb-3 uppercase tracking-wider text-sm"
            >
              FIDES BRIDGE
            </div>
            
            <h2 
              data-aos="fade-up" 
              data-aos-delay="200"
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              Connect with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">top talent</span>
            </h2>
            
            <p 
              data-aos="fade-up" 
              data-aos-delay="300"
              className="text-gray-300 text-lg mb-8 max-w-xl"
            >
              Fides bridges the gap between exceptional talent and forward-thinking companies, creating lasting professional relationships built on trust and expertise.
            </p>
            
            {/* Feature list */}
            <div className="space-y-4 mb-8">
              <div 
                data-aos="fade-up" 
                data-aos-delay="400" 
                className="flex items-center"
              >
                <Check className="text-blue-400 mr-3 h-5 w-5" />
                <span className="text-white">Industry-focused Expertise</span>
              </div>
              
              <div 
                data-aos="fade-up" 
                data-aos-delay="500" 
                className="flex items-center"
              >
                <Check className="text-blue-400 mr-3 h-5 w-5" />
                <span className="text-white">Transparent Recruitment Process</span>
              </div>
              
              <div 
                data-aos="fade-up" 
                data-aos-delay="600" 
                className="flex items-center"
              >
                <Check className="text-blue-400 mr-3 h-5 w-5" />
                <span className="text-white">Long-term Career Partnership</span>
              </div>
            </div>
            
            {/* Hero Section styled button */}
            <div 
              data-aos="fade-up" 
              data-aos-delay="700"
              className="rounded-full p-[2px] inline-block before:content-[''] before:absolute before:inset-0 before:rounded-full before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100 before:bg-gradient-to-r before:from-blue-500 before:to-blue-300 relative"
            >
              <Button 
                className="relative rounded-full px-6 py-5 bg-white text-gray-900 font-medium shadow-lg transition-colors duration-300
                hover:bg-[#0B0F19] hover:text-white"
              >
                <span>Learn More</span>
                <svg className="ml-2 h-4 w-4 inline" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="learnMoreGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#3B82F6" />
                      <stop offset="100%" stopColor="#9CA3AF" />
                    </linearGradient>
                  </defs>
                  <path 
                    d="M5 12h14M12 5l7 7-7 7" 
                    stroke="url(#learnMoreGradient)" 
                    strokeWidth="3" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    fill="none"
                  />
                </svg>
              </Button>
            </div>
          </div>
          
          {/* Image with icons */}
          <div 
            data-aos="fade-zoom-in" 
            data-aos-delay="300"
            data-aos-easing="ease-in-out"
            className="order-1 lg:order-2 relative"
          >
            {/* Container without overflow-hidden */}
            <div className="relative">
              {/* Image container - overflow hidden only applies to the image itself */}
              <div className="rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/images/hired.png"
                  alt="Professional in business attire"
                  width={600}
                  height={600}
                  className="object-cover w-full h-auto"
                />
              </div>
              
              {/* Floating icon rectangles - with glassmorphism style */}
              {/* Top left icon */}
              <div 
                className="absolute top-10 -left-6 md:-left-12 lg:-left-24 bg-gradient-to-br from-gray-700/80 to-gray-900/80 backdrop-blur-md p-5 sm:p-7 rounded-xl shadow-2xl z-20 hidden sm:block"
                style={{ 
                  width: 'auto',
                  height: 'auto',
                  minWidth: '180px',
                  minHeight: '100px',
                  backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
                  backgroundSize: '8px 8px',
                  border: '1px solid rgba(255,255,255,0.1)'
                }}
              >
                <div className="w-full h-full flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="h-14 w-14 md:h-18 md:w-18 lg:h-24 lg:w-24 text-blue-400 opacity-90">
                    <path d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  </svg>
                </div>
              </div>
              
              {/* Bottom left icon */}
              <div 
                className="absolute bottom-16 -left-6 md:-left-12 lg:-left-24 bg-gradient-to-br from-gray-700/80 to-gray-900/80 backdrop-blur-md p-5 sm:p-7 rounded-xl shadow-2xl z-20 hidden sm:block"
                style={{ 
                  width: 'auto',
                  height: 'auto',
                  minWidth: '200px',
                  minHeight: '110px',
                  backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
                  backgroundSize: '8px 8px',
                  border: '1px solid rgba(255,255,255,0.1)'
                }}
              >
                <div className="w-full h-full flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="h-14 w-14 md:h-18 md:w-18 lg:h-24 lg:w-24 text-blue-400 opacity-90">
                    <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  </svg>
                </div>
              </div>
              
              {/* Right side icon (middle) */}
              <div 
                className="absolute top-1/2 -translate-y-1/2 -right-6 md:-right-12 lg:-right-24 bg-gradient-to-br from-gray-700/80 to-gray-900/80 backdrop-blur-md p-5 sm:p-7 rounded-xl shadow-2xl z-20 hidden sm:block"
                style={{ 
                  width: 'auto',
                  height: 'auto',
                  minWidth: '220px',
                  minHeight: '120px',
                  backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
                  backgroundSize: '8px 8px',
                  border: '1px solid rgba(255,255,255,0.1)'
                }}
              >
                <div className="w-full h-full flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="h-14 w-14 md:h-18 md:w-18 lg:h-24 lg:w-24 text-blue-400 opacity-90">
                    <path d="M13 10V3L4 14h7v7l9-11h-7z" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* CEO Quote Section */}
        <div className="relative mt-24 mb-24" data-aos="fade-up">
          <div className="rounded-2xl overflow-hidden relative">
            {/* Background image with overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#081029]/70 to-[#0B1A33]/60 z-10"></div>
            <div className="absolute inset-0">
              <Image
                src="/images/hands.jpg"
                alt="Professional handshake"
                fill
                className="object-cover opacity-60"
              />
            </div>
            
            {/* Quote content */}
            <div className="relative z-20 p-12 sm:p-16 md:p-20">
              <div className="max-w-4xl mx-auto">
                <div className="mb-8 w-16 h-16">
                  <Image 
                    src="/images/quote.svg" 
                    alt="Quote mark" 
                    width={64} 
                    height={64}
                    className="opacity-90 brightness-0 invert-[0.7] filter text-blue-400"
                  />
                </div>
                <p className="text-lg sm:text-xl md:text-2xl text-white leading-relaxed md:leading-relaxed font-light mb-8">
                  "At Fides Bridge, we believe in the transformative power of the right connection. Our mission is to create meaningful partnerships between exceptional talent and visionary companies—partnerships built on mutual trust, shared values, and long-term success. We don't just fill positions; we build futures."
                </p>
                
                <div className="flex items-center">
                  <div>
                    <h4 className="text-white text-xl font-semibold">Anaika Cezil</h4>
                    <p className="text-blue-300">CEO & Founder</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Extended section with Fides values */}
        <div className="mt-28 text-center" data-aos="fade-up">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">The <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Fides</span> difference</h3>
          <p className="text-gray-300 text-lg mb-14 max-w-3xl mx-auto">
            Our approach puts relationships first, ensuring both candidates and companies find their perfect match.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div 
              data-aos="fade-up" 
              data-aos-delay="100"
              className="bg-gradient-to-br from-[#101729]/90 to-[#0D1F43]/90 backdrop-blur-sm p-8 rounded-2xl border border-blue-900/30"
            >
              <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg viewBox="0 0 24 24" className="h-8 w-8 text-blue-400">
                  <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" 
                  stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-white mb-3">Industry Expertise</h4>
              <p className="text-gray-400">Recruiters with deep industry knowledge who understand your specialized needs.</p>
            </div>
            
            {/* Card 2 */}
            <div 
              data-aos="fade-up" 
              data-aos-delay="200"
              className="bg-gradient-to-br from-[#101729]/90 to-[#0D1F43]/90 backdrop-blur-sm p-8 rounded-2xl border border-blue-900/30"
            >
              <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg viewBox="0 0 24 24" className="h-8 w-8 text-blue-400">
                  <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" 
                  stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-white mb-3">Trust & Transparency</h4>
              <p className="text-gray-400">Open communication and honest feedback throughout the entire recruitment process.</p>
            </div>
            
            {/* Card 3 */}
            <div 
              data-aos="fade-up" 
              data-aos-delay="300"
              className="bg-gradient-to-br from-[#101729]/90 to-[#0D1F43]/90 backdrop-blur-sm p-8 rounded-2xl border border-blue-900/30"
            >
              <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg viewBox="0 0 24 24" className="h-8 w-8 text-blue-400">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" 
                  stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-white mb-3">Accelerated Placement</h4>
              <p className="text-gray-400">Efficient recruiting process gets you from application to offer faster without sacrificing quality.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobDiscoverySection; 