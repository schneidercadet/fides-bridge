"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, MapPin, ArrowRight, Briefcase, Loader2 } from "lucide-react";
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import Navbar from "@/Components/Navbar";
import FooterSection from "@/Components/FooterSection";
import { GradientBorderButton } from "@/Components/ui/gradient-border-button";
import { JobApplicationDialog } from "@/Components/JobApplicationDialog";

// Job categories for filters
const jobCategories = [
  { id: "all", label: "View all" },
  { id: "healthcare", label: "Healthcare" },
  { id: "science", label: "Science" },
  { id: "engineering", label: "Engineering" },
  { id: "development", label: "Development" },
  { id: "management", label: "Management" },
  { id: "digital", label: "Digital" }
];

// Define the Job interface
interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  type: string;
  salary: string;
  description: string;
  logo?: string;
  category: string;
}

// Add this component at the top of the file, after the imports
const FallbackLogo = ({ company }: { company: string }) => {
  // Generate a deterministic color based on company name
  const getColorFromString = (str: string) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    const hue = Math.abs(hash) % 360;
    return `hsl(${hue}, 70%, 50%)`;
  };

  const bgColor = getColorFromString(company);
  const initials = company.split(' ').map(word => word[0]).join('').toUpperCase().slice(0, 2);

  return (
    <>
      {/* Fallback logo pattern */}
      <div className="absolute inset-0 opacity-20">
        <svg width="56" height="56" viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0h8v8H0zM16 0h8v8h-8zM32 0h8v8h-8zM48 0h8v8h-8zM8 8h8v8H8zM24 8h8v8h-8zM40 8h8v8h-8zM0 16h8v8H0zM16 16h8v8h-8zM32 16h8v8h-8zM48 16h8v8h-8zM8 24h8v8H8zM24 24h8v8h-8zM40 24h8v8h-8zM0 32h8v8H0zM16 32h8v8h-8zM32 32h8v8h-8zM48 32h8v8h-8zM8 40h8v8H8zM24 40h8v8h-8zM40 40h8v8h-8zM0 48h8v8H0zM16 48h8v8h-8zM32 48h8v8h-8zM48 48h8v8h-8z" fill="#fff" fillOpacity="0.4"/>
        </svg>
      </div>
      {initials ? (
        <span className="text-white font-bold text-lg z-10">{initials}</span>
      ) : (
        <Briefcase className="h-7 w-7 text-white z-10" />
      )}
    </>
  );
};

export default function JobsPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [jobs, setJobs] = useState<Job[]>([]);
  const [visibleJobs, setVisibleJobs] = useState(6);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // Fetch jobs from API
  useEffect(() => {
    const fetchJobs = async () => {
      setIsLoading(true);
      setError(null);
      
      try {
        const response = await fetch(`/api/jobs?category=${activeFilter === 'all' ? '' : activeFilter}&search=${searchQuery}`);
        
        if (!response.ok) {
          throw new Error(`Error fetching jobs: ${response.status}`);
        }
        
        const data = await response.json();
        setJobs(data);
      } catch (err: any) {
        console.error('Failed to fetch jobs:', err);
        setError(err.message || 'Failed to fetch jobs');
        setJobs([]);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchJobs();
  }, [activeFilter, searchQuery]);
  
  // Reset visible jobs when filters change
  useEffect(() => {
    setVisibleJobs(6);
  }, [activeFilter, searchQuery]);

  // Handle load more button
  const handleLoadMore = () => {
    setVisibleJobs(prev => prev + 6);
  };
  
  // Debounce search input
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Debounce search input to avoid too many API calls
    const timeoutId = setTimeout(() => {
      setSearchQuery(value);
    }, 300);
    
    return () => clearTimeout(timeoutId);
  };
  
  return (
    <>
      <Navbar />
      
      <div className="pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="mb-16 max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Discover the best job
            </h1>
            <p className="text-xl text-gray-300">
              Start career with the best company in the world, we ensures you to get the best job possible.
            </p>
          </div>
          
          {/* Search Bar */}
          <div className="mb-12 max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none z-10">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <Input
                type="text"
                placeholder="Search for jobs, companies, or keywords..."
                className="w-full bg-[#101625]/70 backdrop-blur-sm border border-blue-900/30 rounded-full py-6 pl-12 pr-4 text-white placeholder-gray-400 focus-visible:ring-blue-400 focus-visible:ring-1"
                defaultValue={searchQuery}
                onChange={handleSearchChange}
              />
            </div>
          </div>
          
          {/* Filter Categories */}
          <div className="mb-12 flex flex-wrap items-center justify-center gap-3">
            {jobCategories.map(category => (
              <button
                key={category.id}
                className={`px-5 py-2 rounded-full ${
                  activeFilter === category.id 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-[#101625]/70 backdrop-blur-sm border border-blue-900/30 text-white hover:bg-blue-600/20'
                } transition-all`}
                onClick={() => setActiveFilter(category.id)}
              >
                {category.label}
              </button>
            ))}
          </div>
          
          {/* Loading State */}
          {isLoading && (
            <div className="flex justify-center items-center py-16">
              <Loader2 className="h-8 w-8 text-blue-500 animate-spin" />
              <span className="ml-3 text-lg text-gray-300">Loading jobs...</span>
            </div>
          )}
          
          {/* Error State */}
          {error && !isLoading && (
            <div className="text-center py-16">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-500/20 text-red-500 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-white mb-2">Failed to load jobs</h3>
              <p className="text-gray-400 mb-6">{error}</p>
              <GradientBorderButton onClick={() => window.location.reload()}>
                Try Again
              </GradientBorderButton>
            </div>
          )}
          
          {/* Empty State */}
          {!isLoading && !error && jobs.length === 0 && (
            <div className="text-center py-16">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-500/20 text-blue-500 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-white mb-2">No jobs found</h3>
              <p className="text-gray-400 mb-6">Try adjusting your search or filter criteria</p>
              <GradientBorderButton onClick={() => {
                setActiveFilter("all");
                setSearchQuery("");
              }}>
                Clear Filters
              </GradientBorderButton>
            </div>
          )}
          
          {/* Job Listings Grid */}
          {!isLoading && !error && jobs.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
              {jobs.slice(0, visibleJobs).map(job => (
                <div 
                  key={job.id}
                  className="bg-gradient-to-br from-[#0D1320] via-[#111b2d] to-[#0f1a2d] border border-gray-800/50 rounded-xl overflow-hidden hover:border-blue-700/40 hover:shadow-lg hover:shadow-blue-900/20 transition-all duration-300 transform hover:-translate-y-1 group"
                >
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="h-14 w-14 rounded-lg bg-gradient-to-br from-blue-600 to-blue-500 flex items-center justify-center mr-4 overflow-hidden relative">
                        {job.logo ? (
                          <Image 
                            src={job.logo} 
                            alt={`${job.company} logo`} 
                            width={40} 
                            height={40}
                            className="object-contain z-10"
                            onError={(e) => {
                              // Hide the image element on error
                              const target = e.target as HTMLImageElement;
                              target.style.display = 'none';
                              // Force fallback to show
                              const container = target.parentElement;
                              if (container) {
                                const fallback = document.createElement('div');
                                fallback.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-7 w-7 text-white z-10"><path d="M20 7h-4V4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v3H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zM8 4h8v3H8V4zm8 16h-4v-5h4v5z"/></svg>`;
                                container.appendChild(fallback);
                              }
                            }}
                          />
                        ) : (
                          <FallbackLogo company={job.company} />
                        )}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">{job.title}</h3>
                        <p className="text-gray-400">{job.company}</p>
                      </div>
                    </div>
                    
                    <div className="mt-3 mb-6">
                      <p className="text-gray-300 mb-4 line-clamp-2 group-hover:text-white/90 transition-colors">
                        {job.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-500/10 text-blue-400 group-hover:bg-blue-500/20 transition-colors">
                          {job.type}
                        </span>
                      </div>
                    </div>
                    
                    <div className="border-t border-gray-800/50 pt-4 mt-auto">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm">
                          <div className="text-gray-400 flex items-center">
                            <MapPin className="h-3.5 w-3.5 mr-1" />
                            {job.location}
                          </div>
                          <div className="text-gray-400">{job.salary}</div>
                        </div>
                        <div>
                          <JobApplicationDialog 
                            jobId={job.id} 
                            jobTitle={job.title}
                            jobCompany={job.company}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          {/* Load More Button */}
          {!isLoading && !error && jobs.length > visibleJobs && (
            <div className="flex justify-center mt-10">
              <GradientBorderButton onClick={handleLoadMore}>
                Load More Jobs
              </GradientBorderButton>
            </div>
          )}
        </div>
      </div>
      
      <FooterSection />
    </>
  );
} 