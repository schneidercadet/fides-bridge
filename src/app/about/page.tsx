"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/Components/Navbar";
import FooterSection from "@/Components/FooterSection";
import { PrimaryButton } from "@/Components/ui/primary-button";
import { GradientBorderButton } from "@/Components/ui/gradient-border-button";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      
      <div className="pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Section */}
          <div className="mb-24">
            <p className="text-center text-blue-500 text-lg md:text-xl font-medium uppercase tracking-wider mb-8">
              ABOUT US
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white max-w-6xl mx-auto mb-10 text-center">
              Your gateway to <span className="text-gray-500">career success</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto text-center">
              Connecting talent with opportunity for career success.
            </p>
          </div>
          
          {/* Professional Images Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {/* Doctor */}
            <div className="group">
              <div className="overflow-hidden rounded-xl bg-[#101625]/70 backdrop-blur-sm border border-blue-900/30 p-2">
                <div className="relative aspect-square overflow-hidden rounded-lg">
                  <Image 
                    src="/images/dr.jpg"
                    alt="Healthcare Professional"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-white font-semibold text-lg">Healthcare</h3>
                  <p className="text-gray-400 text-sm mt-1">Medical professionals shaping the future of care</p>
                </div>
              </div>
            </div>
            
            {/* Engineer */}
            <div className="group">
              <div className="overflow-hidden rounded-xl bg-[#101625]/70 backdrop-blur-sm border border-blue-900/30 p-2">
                <div className="relative aspect-square overflow-hidden rounded-lg">
                  <Image 
                    src="/images/engineer.jpg"
                    alt="Engineering Professional"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-white font-semibold text-lg">Engineering</h3>
                  <p className="text-gray-400 text-sm mt-1">Innovators building tomorrow's infrastructure</p>
                </div>
              </div>
            </div>
            
            {/* Developer */}
            <div className="group">
              <div className="overflow-hidden rounded-xl bg-[#101625]/70 backdrop-blur-sm border border-blue-900/30 p-2">
                <div className="relative aspect-square overflow-hidden rounded-lg">
                  <Image 
                    src="/images/dev.jpg"
                    alt="Software Developer"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-white font-semibold text-lg">Technology</h3>
                  <p className="text-gray-400 text-sm mt-1">Developers coding the digital revolution</p>
                </div>
              </div>
            </div>
            
            {/* Chemist */}
            <div className="group">
              <div className="overflow-hidden rounded-xl bg-[#101625]/70 backdrop-blur-sm border border-blue-900/30 p-2">
                <div className="relative aspect-square overflow-hidden rounded-lg">
                  <Image 
                    src="/images/chemist.jpg"
                    alt="Chemistry Professional"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-white font-semibold text-lg">Science</h3>
                  <p className="text-gray-400 text-sm mt-1">Researchers advancing scientific discovery</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* OUR MISSION Section */}
          <div className="relative py-24 md:py-32 mt-20">
            <div className="relative z-10 max-w-7xl mx-auto px-4">
              <p className="text-center text-blue-500 text-lg md:text-xl font-medium uppercase tracking-wider mb-6">
                OUR MISSION
              </p>
              
              <h2 className="text-2xl md:text-5xl lg:text-4xl font-bold text-white max-w-6xl mx-auto mb-16 text-center">
                Our mission is to empower job seekers like you by providing a comprehensive platform that brings together job openings from various industries and locations.
              </h2>
              
              {/* Feature Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                {/* Card 1 */}
                <div className="bg-[#0F1729]/80 backdrop-blur-sm border border-[#1E293B] rounded-lg p-8 h-full">
                  <div className="bg-[#101625] h-16 w-16 rounded-lg flex items-center justify-center mb-6">
                    <div className="text-blue-400 w-8 h-8">
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Future of Job Hunting</h3>
                  <p className="text-gray-300">
                    Say goodbye to the traditional job search process and step into the 
                    future of employment opportunities.
                  </p>
                </div>
                
                {/* Card 2 */}
                <div className="bg-[#0F1729]/80 backdrop-blur-sm border border-[#1E293B] rounded-lg p-8 h-full">
                  <div className="bg-[#101625] h-16 w-16 rounded-lg flex items-center justify-center mb-6">
                    <div className="text-blue-400 w-8 h-8">
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 21V7.4C4 6.62761 4 6.24142 4.10899 5.92295C4.20487 5.64299 4.35785 5.38843 4.55595 5.17889C4.78105 4.94222 5.09692 4.79256 5.72865 4.49323L8.00003 3.36326M19.9996 21V7.4M16 5H8.00003M8.00003 5V3.36326M8.00003 3.36326C9.08428 2.8301 9.62641 2.56352 10.2139 2.46316C10.7357 2.37456 11.2643 2.37456 11.7861 2.46316C12.3736 2.56352 12.9157 2.8301 14 3.36326C15.0843 3.8964 15.6264 4.16298 16.2139 4.26335C16.7357 4.35195 17.2643 4.35195 17.7861 4.26335C18.3736 4.16298 18.9157 3.8964 20 3.36326V10.7271C20 11.1551 20 11.3691 19.9124 11.5539C19.8344 11.7163 19.7056 11.8513 19.5473 11.9361C19.3679 12.0323 19.1521 12.0324 18.7204 12.0324H14M14 21C14 18.7909 12.2091 17 10 17C7.79086 17 6 18.7909 6 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Simplify research</h3>
                  <p className="text-gray-300">
                    Save time and effort by accessing a wide range of opportunities in 
                    various industries and career stages.
                  </p>
                </div>
                
                {/* Card 3 */}
                <div className="bg-[#0F1729]/80 backdrop-blur-sm border border-[#1E293B] rounded-lg p-8 h-full">
                  <div className="bg-[#101625] h-16 w-16 rounded-lg flex items-center justify-center mb-6">
                    <div className="text-blue-400 w-8 h-8">
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 7H16M8 12H16M8 17H12M5 22H19C20.1046 22 21 21.1046 21 20V4C21 2.89543 20.1046 2 19 2H5C3.89543 2 3 2.89543 3 4V20C3 21.1046 3.89543 22 5 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Be unique</h3>
                  <p className="text-gray-300">
                    Craft a detailed profile that effectively showcases your unique 
                    skills, past experiences, and notable accomplishments.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Fides Bridge Benefits */}
          <div className="mt-24 mb-0">
            <div className="bg-gradient-to-br from-[#111827]/80 via-[#0F1729]/90 to-[#101935]/80 backdrop-blur-sm border border-blue-600/40 rounded-xl p-8 md:p-12 shadow-lg shadow-blue-900/10">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-3xl font-bold text-blue-500 mb-6 text-center">Why Choose Fides Bridge?</h2>
                <p className="text-gray-300 text-lg mb-12 text-center">
                  We connect talented professionals with outstanding opportunities, making your job search journey smoother and more efficient.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Personalized Job Matching</h3>
                    <p className="text-gray-300">Our advanced algorithm tailors job recommendations to your unique skills, experience, and career aspirations.</p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Career Development Tools</h3>
                    <p className="text-gray-300">Access resources to enhance your skills, build your resume, and prepare for interviews to stand out from the competition.</p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Diverse Opportunities</h3>
                    <p className="text-gray-300">Explore positions across industries, from startups to Fortune 500 companies, finding the perfect match for your career goals.</p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Dedicated Support</h3>
                    <p className="text-gray-300">Our team of career advisors provides guidance throughout your job search process, from application to offer.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Job Positions Carousel - Full width */}
        </div>
      </div>
      
      {/* Job Positions Carousel - Full width outside main container */}
      <div className="w-screen overflow-hidden mt-4">
        {/* First row - moving left to right */}
        <div className="relative">
          <div className="flex animate-scroll-right-fast">
            {[...Array(2)].map((_, index) => (
              <div key={`row1-${index}`} className="flex shrink-0">
                <div className="whitespace-nowrap text-white font-medium mr-8">Human Resources Manager</div>
                <div className="whitespace-nowrap text-blue-400 font-medium px-4 py-1 rounded-full bg-[#101625]/70 backdrop-blur-sm border border-blue-900/30 mr-8">Mechanical Engineer</div>
                <div className="whitespace-nowrap text-white font-medium mr-8">Content Manager</div>
                <div className="whitespace-nowrap text-blue-400 font-medium px-4 py-1 rounded-full bg-[#101625]/70 backdrop-blur-sm border border-blue-900/30 mr-8">Data Analyst</div>
                <div className="whitespace-nowrap text-white font-medium mr-8">Digital Marketing Manager</div>
                <div className="whitespace-nowrap text-blue-400 font-medium px-4 py-1 rounded-full bg-[#101625]/70 backdrop-blur-sm border border-blue-900/30 mr-8">Operations Manager</div>
                <div className="whitespace-nowrap text-white font-medium mr-8">Back-end Developer</div>
                <div className="whitespace-nowrap text-blue-400 font-medium px-4 py-1 rounded-full bg-[#101625]/70 backdrop-blur-sm border border-blue-900/30 mr-8">Medical Doctor</div>
                <div className="whitespace-nowrap text-white font-medium mr-8">Research Scientist</div>
                <div className="whitespace-nowrap text-blue-400 font-medium px-4 py-1 rounded-full bg-[#101625]/70 backdrop-blur-sm border border-blue-900/30 mr-8">UX Designer</div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Second row - moving right to left */}
        <div className="relative">
          <div className="flex animate-scroll-left-fast">
            {[...Array(2)].map((_, index) => (
              <div key={`row2-${index}`} className="flex shrink-0">
                <div className="whitespace-nowrap text-blue-400 font-medium px-4 py-1 rounded-full bg-[#101625]/70 backdrop-blur-sm border border-blue-900/30 mr-8">Investment Banking Analyst</div>
                <div className="whitespace-nowrap text-white font-medium mr-8">Project Manager</div>
                <div className="whitespace-nowrap text-blue-400 font-medium px-4 py-1 rounded-full bg-[#101625]/70 backdrop-blur-sm border border-blue-900/30 mr-8">Financial Manager</div>
                <div className="whitespace-nowrap text-white font-medium mr-8">Software Developer</div>
                <div className="whitespace-nowrap text-blue-400 font-medium px-4 py-1 rounded-full bg-[#101625]/70 backdrop-blur-sm border border-blue-900/30 mr-8">Brand Manager</div>
                <div className="whitespace-nowrap text-white font-medium mr-8">Senior 3D Designer</div>
                <div className="whitespace-nowrap text-blue-400 font-medium px-4 py-1 rounded-full bg-[#101625]/70 backdrop-blur-sm border border-blue-900/30 mr-8">Mechanical Engineer</div>
                <div className="whitespace-nowrap text-white font-medium mr-8">Clinical Lab Scientist</div>
                <div className="whitespace-nowrap text-blue-400 font-medium px-4 py-1 rounded-full bg-[#101625]/70 backdrop-blur-sm border border-blue-900/30 mr-8">Pharmacist</div>
                <div className="whitespace-nowrap text-white font-medium mr-8">IT Support Specialist</div>
              </div>
            ))}
          </div>
        </div>
        
        {/* View All Jobs button centered below carousel */}
        <div className="flex justify-center my-8">
          <GradientBorderButton href="/jobs">
            View All Jobs
          </GradientBorderButton>
        </div>
      </div>
      
      <style jsx global>{`
        @keyframes scroll-right {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        @keyframes scroll-left {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        
        .animate-scroll-right {
          animation: scroll-right 30s linear infinite;
        }
        
        .animate-scroll-left {
          animation: scroll-left 30s linear infinite;
        }
        
        .animate-scroll-right-fast {
          animation: scroll-right 15s linear infinite;
        }
        
        .animate-scroll-left-fast {
          animation: scroll-left 15s linear infinite;
        }
        
        .job-item {
          position: relative;
        }
        
        .job-item::after {
          content: "•";
          display: inline-block;
          margin-left: 12px;
          color: rgba(255, 255, 255, 0.3);
        }
      `}</style>
      
      <FooterSection />
    </>
  );
} 