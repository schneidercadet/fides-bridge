"use client";

import React, { useEffect } from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import AOS from 'aos';
import 'aos/dist/aos.css';

const HeroSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out',
    });
  }, []);

  // Array of partner logos
  const partnerLogos = [
    { name: "Airbnb", path: "/images/airbnb-logo-svgrepo-com.svg" },
    { name: "Bristol-Myers Squibb", path: "/images/bristol-logo-svgrepo-com.svg" },
    { name: "Figma", path: "/images/figma-1-logo-svgrepo-com.svg" },
    { name: "Tropicana", path: "/images/tropicana-logo-svgrepo-com.svg" },
    { name: "Lyft", path: "/images/lyft-logo-svgrepo-com.svg" },
    { name: "Aetna", path: "/images/aetna-logo-svgrepo-com.svg" },
    { name: "Exxon", path: "/images/exxon-logo-svgrepo-com.svg" },
    { name: "Allina", path: "/images/allina-logo-svgrepo-com.svg" },
    { name: "Microsoft", path: "/images/microsoft-logo-svgrepo-com.svg" },
    { name: "Paypal", path: "/images/paypal-logo-svgrepo-com.svg" },
  ];

  return (
    <div className="relative min-h-[90vh] flex flex-col overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F19] via-[#0B0F19]/90 to-[#0B0F19]">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-5"></div>
        
        {/* Hands image background */}
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/hands.jpg"
            alt="Hands collaboration background"
            fill
            quality={100}
            priority
            className="object-cover mix-blend-overlay"
          />
        </div>
        
        {/* Bottom darkening gradient for smooth transition */}
        <div className="absolute bottom-0 left-0 right-0 h-72 bg-gradient-to-t from-[#070A12] via-[#070A12]/95 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center pt-40 sm:pt-48">
        {/* "The best job seekers" tag */}
        <div 
          data-aos="fade-down"
          data-aos-delay="100"
          className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-sm rounded-full px-4 py-2 mb-8 border border-white/10"
        >
          <span className="text-white/80 text-sm">The best job seekers</span>
          <span className="text-gray-500">|</span>
          <button className="text-blue-400 flex items-center hover:text-blue-300 transition-colors text-sm font-medium group">
            <span className="mr-1">Explore</span>
            <div className="w-6 h-4 flex items-center relative">
              <svg 
                className="h-4 w-4 absolute left-0 transform transition-transform duration-300 group-hover:translate-x-1" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M5 12h14M12 5l7 7-7 7" 
                  stroke="currentColor" 
                  strokeWidth="3" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  fill="none"
                />
              </svg>
            </div>
          </button>
        </div>

        {/* Main heading */}
        <h1 
          data-aos="zoom-in"
          data-aos-delay="300"
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-tight"
        >
          Connecting talent with{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
            opportunity
          </span>
        </h1>

        {/* Subtitle */}
        <p 
          data-aos="zoom-in"
          data-aos-delay="500"
          className="text-gray-400 text-lg mb-12 max-w-2xl"
        >
          Expert recruitment solutions to build high-performing teams in IT, Engineering, Science and Healthcare.
        </p>

        {/* Search bar */}
        <div 
          data-aos="fade-up" 
          data-aos-delay="700"
          className="w-full max-w-2xl relative mb-24"
        >
          <div className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-full shadow-xl"></div>
          <div className="relative flex items-center w-full max-w-2xl">
            <div className="relative flex-grow">
              <div className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 z-10">
                <Search className="h-5 w-5" />
              </div>
              <Input 
                type="text"
                placeholder="Job title"
                className="w-full bg-transparent border border-none rounded-full py-7 pl-14 pr-36 text-white placeholder-gray-400 focus-visible:ring-blue-400 focus-visible:ring-1 focus-visible:border-white/40"
              />
            </div>
            
            {/* Fixed gradient border button */}
            <div className="absolute right-2 rounded-full p-[2px] before:content-[''] before:absolute before:inset-0 before:rounded-full before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100 before:bg-gradient-to-r before:from-blue-500 before:to-blue-300">
              <Button 
                className="relative rounded-full px-6 py-5 bg-white text-gray-900 font-medium shadow-lg transition-colors duration-300
                hover:bg-[#0B0F19] hover:text-white"
              >
                <span>Find Jobs</span>
                <svg className="ml-2 h-4 w-4" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="arrowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#3B82F6" />
                      <stop offset="100%" stopColor="#9CA3AF" />
                    </linearGradient>
                  </defs>
                  <path 
                    d="M5 12h14M12 5l7 7-7 7" 
                    stroke="url(#arrowGradient)" 
                    strokeWidth="3" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    fill="none"
                  />
                </svg>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Partners section */}
        <div 
          data-aos="fade-up"
          data-aos-delay="900"
          className="w-full mt-16"
        >
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <h2 className="text-lg font-medium text-white/90 mb-10 tracking-wider uppercase text-center">Our trusted partners</h2>
            
            {/* Desktop view (single row) - hidden on smaller screens */}
            <div className="hidden xl:flex items-center justify-between overflow-x-auto pb-4 hide-scrollbar">
              {partnerLogos.map((logo, index) => (
                <div 
                  key={`desktop-${logo.name}`}
                  data-aos="fade-up"
                  data-aos-delay={900 + (index * 50)}
                  className="flex items-center justify-center opacity-80 hover:opacity-100 transition-all duration-500 ease-in-out px-4"
                >
                  <Image 
                    src={logo.path}
                    alt={`${logo.name} logo`}
                    width={120}
                    height={40}
                    className={`w-auto ${
                      logo.name === "Allina" || logo.name === "Bristol-Myers Squibb" ? "h-7" : 
                      logo.name === "Aetna" ? "h-8" : 
                      "h-9"
                    } object-contain`}
                  />
                </div>
              ))}
            </div>
            
            {/* iPad/Medium view (2 rows) - shown only on medium screens */}
            <div className="hidden md:grid xl:hidden grid-cols-5 gap-x-8 gap-y-10 pb-4">
              {partnerLogos.slice(0, 5).map((logo, index) => (
                <div 
                  key={`ipad-top-${logo.name}`}
                  data-aos="fade-up"
                  data-aos-delay={900 + (index * 40)}
                  className="flex items-center justify-center opacity-80 hover:opacity-100 transition-all duration-500 ease-in-out"
                >
                  <Image 
                    src={logo.path}
                    alt={`${logo.name} logo`}
                    width={120}
                    height={40}
                    className={`w-auto ${
                      logo.name === "Allina" || logo.name === "Bristol-Myers Squibb" ? "h-8" : 
                      logo.name === "Aetna" ? "h-9" : 
                      "h-10"
                    } object-contain`}
                  />
                </div>
              ))}
              {partnerLogos.slice(5, 10).map((logo, index) => (
                <div 
                  key={`ipad-bottom-${logo.name}`}
                  data-aos="fade-up"
                  data-aos-delay={1100 + (index * 40)}
                  className="flex items-center justify-center opacity-80 hover:opacity-100 transition-all duration-500 ease-in-out"
                >
                  <Image 
                    src={logo.path}
                    alt={`${logo.name} logo`}
                    width={120}
                    height={40}
                    className={`w-auto ${
                      logo.name === "Allina" || logo.name === "Bristol-Myers Squibb" ? "h-8" : 
                      logo.name === "Aetna" ? "h-9" : 
                      "h-10"
                    } object-contain`}
                  />
                </div>
              ))}
            </div>
            
            {/* Mobile view (grid) - shown only on small screens */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:hidden gap-6 sm:gap-8 pb-4">
              {partnerLogos.map((logo, index) => (
                <div 
                  key={`mobile-${logo.name}`}
                  data-aos="fade-up"
                  data-aos-delay={900 + (index * 30)}
                  className="flex items-center justify-center opacity-80 hover:opacity-100 transition-all duration-500 ease-in-out"
                >
                  <Image 
                    src={logo.path}
                    alt={`${logo.name} logo`}
                    width={120}
                    height={40}
                    className={`w-auto ${
                      logo.name === "Allina" || logo.name === "Bristol-Myers Squibb" ? "h-6 sm:h-7" : 
                      logo.name === "Aetna" ? "h-7 sm:h-8" : 
                      "h-8 sm:h-9"
                    } object-contain`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default HeroSection;
