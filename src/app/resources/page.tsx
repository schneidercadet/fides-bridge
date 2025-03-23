"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Download, FileText, Award, BarChart, BookOpen, CheckCircle, ChevronRight, Clock } from "lucide-react";
import Navbar from "@/Components/Navbar";
import FooterSection from "@/Components/FooterSection";
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/Components/ui/tabs";
import { GradientBorderButton } from "@/Components/ui/gradient-border-button";

// Resource category interface
interface ResourceCategory {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

// Resource item interface
interface ResourceItem {
  id: string;
  title: string;
  description: string;
  category: string;
  fileType: string;
  downloadLink: string;
  fileSize: string;
}

export default function ResourcesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("all");
  
  // Resource categories
  const resourceCategories: ResourceCategory[] = [
    {
      id: "guides",
      title: "Career Guides",
      description: "Comprehensive guides for various career stages",
      icon: <FileText className="h-6 w-6 text-blue-400" />
    },
    {
      id: "assessments",
      title: "Skill Assessments",
      description: "Tools to evaluate your professional skills",
      icon: <Award className="h-6 w-6 text-blue-400" />
    },
    {
      id: "templates",
      title: "Resume Templates",
      description: "Professional templates for your job applications",
      icon: <BookOpen className="h-6 w-6 text-blue-400" />
    },
    {
      id: "reports",
      title: "Industry Reports",
      description: "Insights on job market trends and statistics",
      icon: <BarChart className="h-6 w-6 text-blue-400" />
    }
  ];
  
  // Resource items (mock data)
  const resourceItems: ResourceItem[] = [
    {
      id: "resource1",
      title: "Resume Writing Masterclass",
      description: "Learn how to craft a professional resume that gets noticed by recruiters.",
      category: "guides",
      fileType: "PDF",
      downloadLink: "/resources/resume-writing-guide.pdf",
      fileSize: "2.4 MB"
    },
    {
      id: "resource2",
      title: "Interview Preparation Guide",
      description: "Comprehensive guide to ace your next job interview with confidence.",
      category: "guides",
      fileType: "PDF",
      downloadLink: "/resources/interview-prep-guide.pdf",
      fileSize: "3.1 MB"
    },
    {
      id: "resource3",
      title: "Software Developer Skills Assessment",
      description: "Evaluate your technical skills as a software developer and identify areas for improvement.",
      category: "assessments",
      fileType: "Tool",
      downloadLink: "/resources/developer-assessment",
      fileSize: "Online"
    },
    {
      id: "resource4",
      title: "Project Management Skills Assessment",
      description: "Assess your project management capabilities and get personalized feedback.",
      category: "assessments",
      fileType: "Tool",
      downloadLink: "/resources/pm-assessment",
      fileSize: "Online"
    },
    {
      id: "resource5",
      title: "Modern Resume Template",
      description: "Clean and professional resume template suitable for various industries.",
      category: "templates",
      fileType: "DOCX",
      downloadLink: "/resources/modern-resume-template.docx",
      fileSize: "1.2 MB"
    },
    {
      id: "resource6",
      title: "Creative CV Template",
      description: "Stand out with this creative CV template perfect for design and creative roles.",
      category: "templates",
      fileType: "DOCX",
      downloadLink: "/resources/creative-cv-template.docx",
      fileSize: "1.5 MB"
    },
    {
      id: "resource7",
      title: "2023 Salary Guide",
      description: "Comprehensive salary data across industries and job roles.",
      category: "reports",
      fileType: "PDF",
      downloadLink: "/resources/salary-guide-2023.pdf",
      fileSize: "4.2 MB"
    },
    {
      id: "resource8",
      title: "Remote Work Trends Report",
      description: "Analysis of the latest trends in remote work and future projections.",
      category: "reports",
      fileType: "PDF",
      downloadLink: "/resources/remote-work-trends.pdf",
      fileSize: "3.7 MB"
    }
  ];
  
  // Filter resources based on search query and active tab
  const filteredResources = resourceItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTab = activeTab === "all" || item.category === activeTab;
    
    return matchesSearch && matchesTab;
  });
  
  return (
    <>
      <Navbar />
      
      <div className="pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="mb-16">
            <p className="text-center text-blue-500 text-lg md:text-xl font-medium uppercase tracking-wider mb-8">
              RESOURCES
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-6xl mx-auto mb-8 text-center">
              Valuable <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Career Resources</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto text-center">
              Access a collection of tools, guides, and resources to enhance your professional journey
            </p>
          </div>
          
          {/* Resource Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 mx-auto">
            {resourceCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`flex flex-col items-center justify-center text-center p-8 rounded-xl border transition-all duration-300 ${
                  activeTab === category.id 
                    ? "bg-blue-900/20 border-blue-500/50 shadow-lg shadow-blue-900/10" 
                    : "bg-[#0D1320]/80 border-blue-900/30 hover:bg-[#0D1320] hover:border-blue-900/50"
                }`}
              >
                <div className="mb-4">{category.icon}</div>
                <h3 className="text-white font-semibold text-lg mb-2">{category.title}</h3>
                <p className="text-gray-400 text-sm text-center">{category.description}</p>
              </button>
            ))}
          </div>
          
          {/* Skill Assessment Center */}
          <div className="mb-20 rounded-2xl overflow-hidden relative">
            <div className="bg-gradient-to-br from-[#0D1320] via-[#111b2d] to-[#0f1a2d] border border-blue-900/30 p-8 md:p-12">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">Skill Assessment Center</h2>
                <p className="text-gray-300 mb-8 text-center">
                  Evaluate your professional skills and receive personalized recommendations for improvement. 
                  Our assessments are designed by industry experts to help you identify your strengths and areas for growth.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <div className="bg-[#101625]/70 border border-blue-900/30 rounded-lg p-5">
                    <CheckCircle className="h-6 w-6 text-blue-400 mb-3" />
                    <h3 className="text-white font-semibold mb-2">Technical Skills</h3>
                    <p className="text-gray-400 text-sm">Assessments for programming, design, data analysis and more</p>
                  </div>
                  <div className="bg-[#101625]/70 border border-blue-900/30 rounded-lg p-5">
                    <CheckCircle className="h-6 w-6 text-blue-400 mb-3" />
                    <h3 className="text-white font-semibold mb-2">Soft Skills</h3>
                    <p className="text-gray-400 text-sm">Evaluate communication, leadership, and teamwork abilities</p>
                  </div>
                  <div className="bg-[#101625]/70 border border-blue-900/30 rounded-lg p-5">
                    <CheckCircle className="h-6 w-6 text-blue-400 mb-3" />
                    <h3 className="text-white font-semibold mb-2">Industry Knowledge</h3>
                    <p className="text-gray-400 text-sm">Test your knowledge in specific industries and domains</p>
                  </div>
                  <div className="bg-[#101625]/70 border border-blue-900/30 rounded-lg p-5">
                    <CheckCircle className="h-6 w-6 text-blue-400 mb-3" />
                    <h3 className="text-white font-semibold mb-2">Personalized Reports</h3>
                    <p className="text-gray-400 text-sm">Get detailed feedback and actionable improvement plans</p>
                  </div>
                </div>
                <div className="flex justify-center">
                  <GradientBorderButton>
                    Explore Assessments
                  </GradientBorderButton>
                </div>
              </div>
            </div>
            <div className="absolute right-0 top-0 bottom-0 w-1/3 hidden xl:block">
              <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-15"></div>
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#0f1a2d]"></div>
              <div className="absolute inset-0 bg-[url('/images/skills-assessment.jpg')] bg-cover opacity-10 mix-blend-overlay"></div>
            </div>
          </div>
          
          {/* Filter and Search Section */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <Tabs 
                defaultValue="all" 
                value={activeTab}
                onValueChange={setActiveTab}
                className="w-full md:w-auto"
              >
                <TabsList className="bg-[#101625]/70 border border-blue-900/30 p-1">
                  <TabsTrigger value="all" className="data-[state=active]:bg-blue-600">All Resources</TabsTrigger>
                  <TabsTrigger value="guides" className="data-[state=active]:bg-blue-600">Guides</TabsTrigger>
                  <TabsTrigger value="assessments" className="data-[state=active]:bg-blue-600">Assessments</TabsTrigger>
                  <TabsTrigger value="templates" className="data-[state=active]:bg-blue-600">Templates</TabsTrigger>
                  <TabsTrigger value="reports" className="data-[state=active]:bg-blue-600">Reports</TabsTrigger>
                </TabsList>
              </Tabs>
              
              <div className="relative w-full md:w-64">
                <Input 
                  type="text"
                  placeholder="Search resources..."
                  className="bg-[#101625]/70 border-blue-900/30 text-white pl-4 pr-10 py-2 rounded-lg placeholder:text-gray-500 focus-visible:ring-blue-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          
          {/* Resources Grid */}
          {filteredResources.length === 0 ? (
            <div className="bg-[#101625]/70 border border-blue-900/30 rounded-xl p-8 text-center">
              <h3 className="text-xl font-semibold text-white mb-2">No Resources Found</h3>
              <p className="text-gray-300 mb-6">No resources matching your search criteria.</p>
              <Button
                onClick={() => { setSearchQuery(""); setActiveTab("all"); }}
                className="bg-blue-600/10 hover:bg-blue-600/20 text-blue-400 border border-blue-800"
              >
                Clear Search
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
              {filteredResources.map((resource) => (
                <div 
                  key={resource.id}
                  className="w-full bg-[#0D1320]/80 border border-blue-900/30 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-blue-900/10 hover:border-blue-900/50"
                >
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-white font-semibold text-lg">{resource.title}</h3>
                      <span className="bg-blue-900/30 text-blue-400 text-xs font-medium px-2.5 py-1 rounded">
                        {resource.fileType}
                      </span>
                    </div>
                    <p className="text-gray-300 text-sm mb-6">{resource.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-gray-400 text-xs">
                        <Clock className="h-3.5 w-3.5 mr-1.5" />
                        {resource.fileSize}
                      </div>
                      <Link href={resource.downloadLink}>
                        <Button 
                          size="sm" 
                          className="bg-blue-600/10 hover:bg-blue-600/20 text-blue-400 border border-blue-800"
                        >
                          <Download className="h-4 w-4 mr-1.5" />
                          Download
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          {/* Newsletter Subscription */}
          <div className="mt-20 bg-gradient-to-br from-[#0D1320] via-[#111b2d] to-[#0f1a2d] border border-blue-900/30 rounded-xl p-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Stay Updated with New Resources</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter to receive updates when new resources are added to our library.
            </p>
            <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-3">
              <Input 
                type="email"
                placeholder="Your email address"
                className="bg-[#101625]/70 border-blue-900/30 text-white"
              />
              <Button className="bg-blue-600/10 hover:bg-blue-600/20 text-blue-400 border border-blue-800">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <FooterSection />
    </>
  );
} 