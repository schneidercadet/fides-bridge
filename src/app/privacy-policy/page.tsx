"use client";

import React, { useState } from "react";
import PolicyLayout from "@/Components/PolicyLayout";
import Link from "next/link";

export default function PrivacyPolicyPage() {
  const [expanded, setExpanded] = useState<string | null>(null);
  
  const toggleSection = (section: string) => {
    if (expanded === section) {
      setExpanded(null);
    } else {
      setExpanded(section);
    }
  };
  
  return (
    <PolicyLayout 
      title="Privacy Policy"
      description="How we collect, use, and protect your personal information."
      lastUpdated="April 2023"
    >
      <p className="italic mb-6">
        This Privacy Policy explains how Fides Bridge collects, uses, shares, and protects your personal information.
        We are committed to protecting your privacy and ensuring that your personal information is handled responsibly.
      </p>
      
      <div className="mb-8">
        <button 
          onClick={() => toggleSection('dataCollection')}
          className="flex justify-between items-center w-full text-left font-semibold text-lg text-white border-b border-blue-900/30 pb-2 mb-2"
        >
          <span>1. Information We Collect</span>
          <svg 
            className={`h-5 w-5 transform transition-transform ${expanded === 'dataCollection' ? 'rotate-180' : ''}`}
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        
        <div className={`overflow-hidden transition-all ${expanded === 'dataCollection' ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
          <h3 className="text-blue-400 font-medium mt-4 mb-2">1.1 Personal Information</h3>
          <p>
            We collect personal information that you provide directly to us, such as:
          </p>
          <ul className="list-disc pl-6 my-2">
            <li>Name, email address, phone number, and other contact details</li>
            <li>Resume/CV information, work history, education, and professional qualifications</li>
            <li>Job preferences, salary expectations, and willingness to relocate</li>
            <li>Information provided in interviews or assessments</li>
            <li>Account credentials (username and password)</li>
          </ul>
          
          <h3 className="text-blue-400 font-medium mt-4 mb-2">1.2 Usage Information</h3>
          <p>
            We automatically collect certain information about your device and how you interact with our platform:
          </p>
          <ul className="list-disc pl-6 my-2">
            <li>Device information (browser type, IP address, device type, operating system)</li>
            <li>Usage data (pages visited, time spent on pages, links clicked)</li>
            <li>Log data and error reports</li>
            <li>Location information (if you allow location services)</li>
          </ul>
          
          <h3 className="text-blue-400 font-medium mt-4 mb-2">1.3 Cookies and Similar Technologies</h3>
          <p>
            We use cookies and similar technologies to collect information about your browsing behavior.
            For more details, please see our <Link href="/cookie-policy" className="text-blue-400 hover:text-blue-300">Cookie Policy</Link>.
          </p>
        </div>
      </div>
      
      <div className="mb-8">
        <button 
          onClick={() => toggleSection('dataUse')}
          className="flex justify-between items-center w-full text-left font-semibold text-lg text-white border-b border-blue-900/30 pb-2 mb-2"
        >
          <span>2. How We Use Your Information</span>
          <svg 
            className={`h-5 w-5 transform transition-transform ${expanded === 'dataUse' ? 'rotate-180' : ''}`}
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        
        <div className={`overflow-hidden transition-all ${expanded === 'dataUse' ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
          <p className="my-2">We use your personal information to:</p>
          <ul className="list-disc pl-6 my-2">
            <li>Provide and improve our services</li>
            <li>Match candidates with appropriate job opportunities</li>
            <li>Communicate with you about our services, updates, and job opportunities</li>
            <li>Process job applications and facilitate the recruitment process</li>
            <li>Customize your experience and provide personalized content</li>
            <li>Analyze usage patterns and improve our platform</li>
            <li>Ensure the security and integrity of our services</li>
            <li>Comply with legal obligations</li>
          </ul>
        </div>
      </div>
      
      <div className="mb-8">
        <button 
          onClick={() => toggleSection('sharing')}
          className="flex justify-between items-center w-full text-left font-semibold text-lg text-white border-b border-blue-900/30 pb-2 mb-2"
        >
          <span>3. Information Sharing</span>
          <svg 
            className={`h-5 w-5 transform transition-transform ${expanded === 'sharing' ? 'rotate-180' : ''}`}
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        
        <div className={`overflow-hidden transition-all ${expanded === 'sharing' ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
          <p className="my-2">We may share your information with:</p>
          <ul className="list-disc pl-6 my-2">
            <li>Employers and hiring companies (with your consent)</li>
            <li>Service providers and business partners who help us deliver our services</li>
            <li>Legal authorities when required by law or to protect our rights</li>
            <li>In connection with a business transaction (merger, acquisition, or sale)</li>
          </ul>
          <p className="my-2">
            We do not sell your personal information to third parties for marketing purposes.
          </p>
        </div>
      </div>
      
      <div className="mb-8">
        <button 
          onClick={() => toggleSection('rights')}
          className="flex justify-between items-center w-full text-left font-semibold text-lg text-white border-b border-blue-900/30 pb-2 mb-2"
        >
          <span>4. Your Rights and Choices</span>
          <svg 
            className={`h-5 w-5 transform transition-transform ${expanded === 'rights' ? 'rotate-180' : ''}`}
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        
        <div className={`overflow-hidden transition-all ${expanded === 'rights' ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
          <p className="my-2">You have the right to:</p>
          <ul className="list-disc pl-6 my-2">
            <li>Access, correct, or delete your personal information</li>
            <li>Object to or restrict the processing of your data</li>
            <li>Request a copy of your data in a portable format</li>
            <li>Withdraw your consent at any time</li>
            <li>Lodge a complaint with a supervisory authority</li>
          </ul>
          <p className="my-2">
            To exercise these rights, please contact our Data Protection Officer at dpo@fidesbridge.com.
          </p>
        </div>
      </div>
      
      <div className="mb-8">
        <button 
          onClick={() => toggleSection('security')}
          className="flex justify-between items-center w-full text-left font-semibold text-lg text-white border-b border-blue-900/30 pb-2 mb-2"
        >
          <span>5. Data Security</span>
          <svg 
            className={`h-5 w-5 transform transition-transform ${expanded === 'security' ? 'rotate-180' : ''}`}
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        
        <div className={`overflow-hidden transition-all ${expanded === 'security' ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
          <p className="my-2">
            We implement appropriate technical and organizational measures to protect your personal information.
            However, no method of transmission over the Internet or electronic storage is 100% secure.
            We cannot guarantee absolute security, but we strive to use commercially acceptable means to protect your information.
          </p>
        </div>
      </div>
      
      <div className="mb-8">
        <button 
          onClick={() => toggleSection('retention')}
          className="flex justify-between items-center w-full text-left font-semibold text-lg text-white border-b border-blue-900/30 pb-2 mb-2"
        >
          <span>6. Data Retention</span>
          <svg 
            className={`h-5 w-5 transform transition-transform ${expanded === 'retention' ? 'rotate-180' : ''}`}
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        
        <div className={`overflow-hidden transition-all ${expanded === 'retention' ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
          <p className="my-2">
            We retain your personal information for as long as necessary to fulfill the purposes outlined in this
            Privacy Policy, unless a longer retention period is required or permitted by law.
            When determining how long to keep your information, we consider the amount, nature, and sensitivity of the
            information, the potential risk of harm from unauthorized use or disclosure, and the purposes for which we
            process your information.
          </p>
        </div>
      </div>
      
      <div className="mb-8">
        <button 
          onClick={() => toggleSection('international')}
          className="flex justify-between items-center w-full text-left font-semibold text-lg text-white border-b border-blue-900/30 pb-2 mb-2"
        >
          <span>7. International Data Transfers</span>
          <svg 
            className={`h-5 w-5 transform transition-transform ${expanded === 'international' ? 'rotate-180' : ''}`}
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        
        <div className={`overflow-hidden transition-all ${expanded === 'international' ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
          <p className="my-2">
            Your information may be transferred to and processed in countries other than the one in which you reside.
            These countries may have data protection laws that differ from those in your country.
            When we transfer your information, we use appropriate safeguards, such as standard contractual clauses,
            to ensure that your data receives an adequate level of protection.
          </p>
        </div>
      </div>
      
      <div className="mb-8">
        <button 
          onClick={() => toggleSection('updates')}
          className="flex justify-between items-center w-full text-left font-semibold text-lg text-white border-b border-blue-900/30 pb-2 mb-2"
        >
          <span>8. Changes to This Privacy Policy</span>
          <svg 
            className={`h-5 w-5 transform transition-transform ${expanded === 'updates' ? 'rotate-180' : ''}`}
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        
        <div className={`overflow-hidden transition-all ${expanded === 'updates' ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
          <p className="my-2">
            We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements.
            We will notify you of any material changes by posting the updated policy on our website with a new effective date.
            We encourage you to review this Privacy Policy periodically to stay informed about how we protect your information.
          </p>
        </div>
      </div>
      
      <div className="mb-8">
        <button 
          onClick={() => toggleSection('contact')}
          className="flex justify-between items-center w-full text-left font-semibold text-lg text-white border-b border-blue-900/30 pb-2 mb-2"
        >
          <span>9. Contact Us</span>
          <svg 
            className={`h-5 w-5 transform transition-transform ${expanded === 'contact' ? 'rotate-180' : ''}`}
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        
        <div className={`overflow-hidden transition-all ${expanded === 'contact' ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
          <p className="my-2">
            If you have any questions or concerns about this Privacy Policy or our data practices, please contact us:
          </p>
          <p className="my-2">
            <strong>Data Protection Officer</strong><br />
            Email: dpo@fidesbridge.com<br />
            Address: Fides Bridge Headquarters, 123 Recruitment Avenue, London, UK<br />
            Phone: +44 20 1234 5678
          </p>
        </div>
      </div>
      
      <div className="mt-12 p-4 bg-blue-900/20 rounded-lg">
        <h3 className="text-lg font-semibold text-white mb-2">Need More Information?</h3>
        <p className="mb-4">For more detailed information about how we handle your data, you can also refer to:</p>
        <div className="flex flex-wrap gap-4">
          <Link 
            href="/cookie-policy" 
            className="bg-blue-600/20 hover:bg-blue-600/30 text-blue-300 px-4 py-2 rounded-md transition-colors"
          >
            Cookie Policy
          </Link>
          <Link 
            href="/gdpr" 
            className="bg-blue-600/20 hover:bg-blue-600/30 text-blue-300 px-4 py-2 rounded-md transition-colors"
          >
            GDPR Compliance
          </Link>
          <Link 
            href="/data-protection" 
            className="bg-blue-600/20 hover:bg-blue-600/30 text-blue-300 px-4 py-2 rounded-md transition-colors"
          >
            Data Protection
          </Link>
        </div>
      </div>
    </PolicyLayout>
  );
} 