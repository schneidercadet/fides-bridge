"use client";

import React from "react";
import { Briefcase, Users, Award, Clock } from "lucide-react";

const FeaturesSection = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-[#0D1320] -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          data-aos="fade-up"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          <FeatureCard 
            icon={<Briefcase className="h-10 w-10 text-blue-500" />} 
            title="10k+ Jobs"
            description="We have over 10,000 jobs available for you to choose from"
          />
          <FeatureCard 
            icon={<Users className="h-10 w-10 text-blue-500" />} 
            title="Top Companies"
            description="Work with over 500+ companies and startups"
          />
          <FeatureCard 
            icon={<Award className="h-10 w-10 text-blue-500" />} 
            title="Verified Jobs"
            description="All our jobs are manually verified for your safety"
          />
          <FeatureCard 
            icon={<Clock className="h-10 w-10 text-blue-500" />} 
            title="Quick Apply"
            description="Apply to jobs with just a few clicks and get hired quickly"
          />
        </div>
      </div>
    </section>
  );
};

// Feature Card Component
function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div 
      data-aos="fade-up"
      data-aos-delay="100"
      className="p-6 bg-[#0B0F19]/70 rounded-xl border border-gray-800/50 transition-all duration-300 hover:border-blue-700/30 flex flex-col items-center text-center"
    >
      <div className="p-3 bg-[#0B0F19] rounded-lg mb-4">
        {icon}
      </div>
      <h3 className="text-white text-lg font-medium mb-2">{title}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  );
}

export default FeaturesSection; 