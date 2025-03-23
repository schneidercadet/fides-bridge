"use client";

import React from "react";
import Navbar from "@/Components/Navbar";
import FooterSection from "@/Components/FooterSection";

interface PolicyLayoutProps {
  children: React.ReactNode;
  title: string;
  description?: string;
  lastUpdated?: string;
}

const PolicyLayout = ({ 
  children, 
  title, 
  description = "Legal information and policies for Fides Bridge users.", 
  lastUpdated = "March 2023"
}: PolicyLayoutProps) => {
  return (
    <main className="min-h-screen bg-[#0B0F19]">
      <Navbar />
      
      <div className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#101625]/70 backdrop-blur-md border border-blue-900/20 rounded-xl p-6 md:p-8 lg:p-10 shadow-xl">
            <div className="mb-8 border-b border-blue-900/20 pb-6">
              <h1 className="text-2xl md:text-3xl font-bold text-white mb-3">{title}</h1>
              <p className="text-gray-400 text-sm md:text-base">{description}</p>
              {lastUpdated && (
                <p className="text-gray-500 text-xs mt-3">Last updated: {lastUpdated}</p>
              )}
            </div>
            
            <div className="prose prose-sm md:prose-base max-w-none text-gray-300 prose-headings:text-white prose-strong:text-white prose-a:text-blue-400 hover:prose-a:text-blue-300 prose-a:transition-colors prose-hr:border-blue-900/20">
              {children}
            </div>
          </div>
        </div>
      </div>
      
      <FooterSection />
    </main>
  );
};

export default PolicyLayout; 