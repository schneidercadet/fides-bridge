"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { SubscribeInput } from "@/Components/ui/subscribe-input";
import { Button } from "@/Components/ui/button";
import { SubscribeButton } from "@/Components/ui/subscribe-button";
import { ArrowRight, Facebook, Youtube, Dribbble, Instagram, Linkedin, Mail } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="bg-[#0B0F19] pt-12 sm:pt-16 pb-6 sm:pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-10 sm:mb-16">
          {/* Subscription section */}
          <div className="lg:col-span-2">
            <div className="bg-[#161C2D]/70 rounded-xl sm:rounded-2xl p-6 sm:p-8 backdrop-blur-sm border border-blue-500/50 h-full">
              <h3 className="text-white text-xl sm:text-2xl font-semibold mb-2 sm:mb-3">Subscribe</h3>
              <p className="text-gray-400 text-sm sm:text-base mb-4 sm:mb-6">Stay current with all things Fides Bridge</p>
              
              <form onSubmit={(e) => e.preventDefault()} className="relative">
                <div className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-full shadow-xl"></div>
                <div className="relative flex items-center">
                  <div className="relative flex-grow">
                    <div className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 text-gray-400 z-10">
                      <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
                    </div>
                    <SubscribeInput 
                      placeholder="Enter your email"
                      className="pl-10 sm:pl-14 pr-16 sm:pr-36 py-5 sm:py-7 text-sm sm:text-base"
                    />
                  </div>
                  <div className="absolute right-2 sm:right-2 top-1/2 -translate-y-1/2 flex items-center justify-center">
                    <SubscribeButton 
                      size="sm" 
                      variant="gradient"
                      className="sm:hidden"
                    />
                    <SubscribeButton 
                      size="default" 
                      variant="gradient"
                      className="hidden sm:flex"
                    >
                      Subscribe
                    </SubscribeButton>
                  </div>
                </div>
              </form>
            </div>
          </div>
          
          {/* Navigation columns */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-1 lg:col-span-2 gap-4">
            {/* Company */}
            <div>
              <h3 className="text-white font-semibold uppercase mb-3 sm:mb-4 tracking-wide text-sm sm:text-base">Company</h3>
              <ul className="space-y-2 sm:space-y-3">
                <li><Link href="/about" className="text-gray-400 hover:text-blue-400 transition-colors text-sm sm:text-base">About</Link></li>
                <li><Link href="/team" className="text-gray-400 hover:text-blue-400 transition-colors text-sm sm:text-base">Our Team</Link></li>
                <li><Link href="/jobs" className="text-gray-400 hover:text-blue-400 transition-colors text-sm sm:text-base">Jobs</Link></li>
              </ul>
            </div>
            
            {/* Resources */}
            <div>
              <h3 className="text-white font-semibold uppercase mb-3 sm:mb-4 tracking-wide text-sm sm:text-base">Resources</h3>
              <ul className="space-y-2 sm:space-y-3">
                <li><Link href="/news" className="text-gray-400 hover:text-blue-400 transition-colors text-sm sm:text-base">News</Link></li>
                <li><Link href="/faqs" className="text-gray-400 hover:text-blue-400 transition-colors text-sm sm:text-base">FAQs</Link></li>
                <li><Link href="/candidates" className="text-gray-400 hover:text-blue-400 transition-colors text-sm sm:text-base">Candidates</Link></li>
              </ul>
            </div>
            
            {/* Contacts */}
            <div className="col-span-2 sm:col-span-1 mt-4 sm:mt-0">
              <h3 className="text-white font-semibold uppercase mb-3 sm:mb-4 tracking-wide text-sm sm:text-base">Contacts</h3>
              <ul className="space-y-2 sm:space-y-3">
                <li><Link href="/post-cv" className="text-gray-400 hover:text-blue-400 transition-colors text-sm sm:text-base">CV Post</Link></li>
                <li><Link href="/post-job" className="text-gray-400 hover:text-blue-400 transition-colors text-sm sm:text-base">Job Post</Link></li>
                <li><Link href="/contact" className="text-gray-400 hover:text-blue-400 transition-colors text-sm sm:text-base">Contact Us</Link></li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Logo and social media */}
        <div className="pt-6 sm:pt-8 pb-8 sm:pb-12">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            {/* Social media icons */}
            <div className="flex space-x-4 sm:space-x-6 order-1 sm:order-2 mb-6 sm:mb-0">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={18} className="sm:h-5 sm:w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube size={18} className="sm:h-5 sm:w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Dribbble size={18} className="sm:h-5 sm:w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={18} className="sm:h-5 sm:w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={18} className="sm:h-5 sm:w-5" />
              </Link>
            </div>
          </div>
        </div>
        
        {/* Copyright section */}
        <div className="border-t border-gray-800 pt-6 sm:pt-8 text-center text-gray-500 text-xs sm:text-sm">
          <p>© 2023-{new Date().getFullYear()} Fides Bridge. All rights reserved.</p>
          <p className="mt-2">
            <Link href="/licensing" className="hover:text-gray-400 transition-colors">Licensing</Link>
            {" • "}
            <Link href="/terms" className="hover:text-gray-400 transition-colors">Terms & Conditions</Link>
            {" • "}
            <Link href="/mandatory-notices" className="hover:text-gray-400 transition-colors">Mandatory Notices</Link>
            {" • "}
            <Link href="/privacy-policy" className="hover:text-gray-400 transition-colors">Privacy Policy</Link>
            {" • "}
            <Link href="/cookie-policy" className="hover:text-gray-400 transition-colors">Cookie Policy</Link>
            {" • "}
            <Link href="/accessibility" className="hover:text-gray-400 transition-colors">Accessibility</Link>
            {" • "}
            <Link href="/sitemap" className="hover:text-gray-400 transition-colors">Sitemap</Link>
            {" • "}
            <Link href="/data-protection" className="hover:text-gray-400 transition-colors">Data Protection</Link>
            {" • "}
            <Link href="/gdpr" className="hover:text-gray-400 transition-colors">GDPR</Link>
            {" • "}
            <Link href="/dpa" className="hover:text-gray-400 transition-colors">DPA</Link>
            {" • "}
            <Link href="/dpo" className="hover:text-gray-400 transition-colors">DPO</Link>
            
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection; 