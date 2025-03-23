"use client";

import React, { useState } from "react";
import PolicyLayout from "@/Components/PolicyLayout";
import Link from "next/link";

export default function DPAPage() {
  const [showSampleText, setShowSampleText] = useState(false);
  
  const handleDownload = () => {
    // In a real application, this would download a PDF template
    // For this demo, we'll just show an alert
    alert("In a production environment, this would download a DPA template PDF file.");
  };
  
  return (
    <PolicyLayout 
      title="Data Processing Agreement"
      description="Information about our Data Processing Agreement (DPA) for controlling and processing personal data."
      lastUpdated="January 2023"
    >
      <p className="mb-6">
        A Data Processing Agreement (DPA) is a legally binding contract that outlines the rights and obligations of 
        each party regarding the protection of personal data when one party (the data processor) processes personal 
        data on behalf of the other party (the data controller).
      </p>
      
      <div className="mb-8 bg-blue-900/20 p-5 rounded-lg">
        <h2 className="text-xl text-white font-bold mb-4">Request a Data Processing Agreement</h2>
        <p className="mb-4">
          If you are a business client who requires a Data Processing Agreement with Fides Bridge, please 
          download our standard DPA template below or contact our Data Protection Officer to request a 
          customized agreement.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button 
            onClick={handleDownload}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md flex items-center justify-center transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download DPA Template
          </button>
          <Link 
            href="mailto:dpo@fidesbridge.com?subject=Data%20Processing%20Agreement%20Request"
            className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-md flex items-center justify-center transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Contact DPO
          </Link>
        </div>
      </div>
      
      <h2 className="text-xl text-white font-bold mt-8 mb-4">Key Components of Our DPA</h2>
      <p className="mb-6">
        Our Data Processing Agreement includes the following key components to ensure compliance with data protection 
        laws, including the GDPR:
      </p>
      
      <div className="space-y-4 mb-8">
        <div className="border border-blue-900/30 p-4 rounded-lg">
          <h3 className="text-lg text-white font-semibold mb-2">Subject Matter and Duration</h3>
          <p className="text-gray-300">
            Clearly defines what personal data will be processed, the duration of processing, and the purpose of processing.
          </p>
        </div>
        
        <div className="border border-blue-900/30 p-4 rounded-lg">
          <h3 className="text-lg text-white font-semibold mb-2">Nature and Purpose of Processing</h3>
          <p className="text-gray-300">
            Outlines the specific processing activities that will be carried out and why they are necessary.
          </p>
        </div>
        
        <div className="border border-blue-900/30 p-4 rounded-lg">
          <h3 className="text-lg text-white font-semibold mb-2">Types of Personal Data</h3>
          <p className="text-gray-300">
            Lists the categories of personal data that will be processed, including any special categories of data.
          </p>
        </div>
        
        <div className="border border-blue-900/30 p-4 rounded-lg">
          <h3 className="text-lg text-white font-semibold mb-2">Categories of Data Subjects</h3>
          <p className="text-gray-300">
            Identifies whose personal data will be processed (e.g., employees, customers, users).
          </p>
        </div>
        
        <div className="border border-blue-900/30 p-4 rounded-lg">
          <h3 className="text-lg text-white font-semibold mb-2">Obligations and Rights of the Controller</h3>
          <p className="text-gray-300">
            Specifies what the data controller (you) can expect and what responsibilities they have.
          </p>
        </div>
        
        <div className="border border-blue-900/30 p-4 rounded-lg">
          <h3 className="text-lg text-white font-semibold mb-2">Obligations of the Processor</h3>
          <p className="text-gray-300">
            Details our responsibilities as the data processor, including security measures, confidentiality, and assistance obligations.
          </p>
        </div>
        
        <div className="border border-blue-900/30 p-4 rounded-lg">
          <h3 className="text-lg text-white font-semibold mb-2">Sub-processors</h3>
          <p className="text-gray-300">
            Outlines the conditions under which we may engage other processors and how we ensure their compliance.
          </p>
        </div>
        
        <div className="border border-blue-900/30 p-4 rounded-lg">
          <h3 className="text-lg text-white font-semibold mb-2">International Transfers</h3>
          <p className="text-gray-300">
            Addresses how transfers of personal data outside the EEA or UK will be handled to ensure adequate protection.
          </p>
        </div>
        
        <div className="border border-blue-900/30 p-4 rounded-lg">
          <h3 className="text-lg text-white font-semibold mb-2">Data Subject Rights</h3>
          <p className="text-gray-300">
            Specifies how we will assist you in responding to requests from data subjects exercising their rights.
          </p>
        </div>
        
        <div className="border border-blue-900/30 p-4 rounded-lg">
          <h3 className="text-lg text-white font-semibold mb-2">Data Breach Notification</h3>
          <p className="text-gray-300">
            Details the process for notifying you of any personal data breaches without undue delay.
          </p>
        </div>
      </div>
      
      <div className="mb-8">
        <button
          onClick={() => setShowSampleText(!showSampleText)}
          className="text-blue-400 hover:text-blue-300 font-medium flex items-center"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className={`h-5 w-5 mr-2 transition-transform ${showSampleText ? 'rotate-90' : ''}`} 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          {showSampleText ? "Hide Sample DPA Text" : "Show Sample DPA Text"}
        </button>
        
        {showSampleText && (
          <div className="mt-4 p-4 bg-[#101625]/70 border border-blue-900/30 rounded-lg text-gray-300 max-h-96 overflow-y-auto">
            <h3 className="text-lg text-white font-semibold mb-2">Sample DPA Text</h3>
            <p className="mb-3">This Data Processing Agreement ("DPA") forms part of the Terms of Service or other agreement between Fides Bridge Ltd ("Processor") and the Client ("Controller") for the provision of services that involve the processing of personal data.</p>
            
            <h4 className="text-white font-semibold mb-1">1. Definitions</h4>
            <p className="mb-3">
              In this DPA, the following terms shall have the meanings set out below:
              <br /><br />
              "GDPR" means the General Data Protection Regulation (EU) 2016/679.
              <br /><br />
              "Personal Data" means any information relating to an identified or identifiable natural person; an identifiable natural person is one who can be identified, directly or indirectly, in particular by reference to an identifier such as a name, an identification number, location data, an online identifier or to one or more factors specific to the physical, physiological, genetic, mental, economic, cultural or social identity of that natural person.
              <br /><br />
              "Processing" means any operation or set of operations which is performed on Personal Data or on sets of Personal Data, whether or not by automated means, such as collection, recording, organization, structuring, storage, adaptation or alteration, retrieval, consultation, use, disclosure by transmission, dissemination or otherwise making available, alignment or combination, restriction, erasure or destruction.
              <br /><br />
              "Sub-processor" means any processor engaged by the Processor who agrees to receive from the Processor Personal Data exclusively intended for processing activities to be carried out on behalf of the Controller.
            </p>
            
            <h4 className="text-white font-semibold mb-1">2. Processing of Personal Data</h4>
            <p className="mb-3">
              2.1 The Processor shall only process Personal Data on behalf of the Controller and in accordance with its documented instructions.
              <br /><br />
              2.2 The Processor shall ensure that persons authorized to process the Personal Data have committed themselves to confidentiality or are under an appropriate statutory obligation of confidentiality.
            </p>
            
            <h4 className="text-white font-semibold mb-1">3. Security of Processing</h4>
            <p className="mb-3">
              3.1 The Processor shall implement appropriate technical and organizational measures to ensure a level of security appropriate to the risk, including:
              <br /><br />
              (a) the pseudonymization and encryption of Personal Data;
              <br />
              (b) the ability to ensure the ongoing confidentiality, integrity, availability and resilience of processing systems and services;
              <br />
              (c) the ability to restore the availability and access to Personal Data in a timely manner in the event of a physical or technical incident;
              <br />
              (d) a process for regularly testing, assessing and evaluating the effectiveness of technical and organizational measures for ensuring the security of the processing.
            </p>
            
            <p className="italic text-gray-400">
              [This is a sample excerpt. The full DPA template includes additional sections covering all aspects required by data protection laws, including data subject rights, breach notification, international transfers, audits, return or deletion of data, and liability.]
            </p>
          </div>
        )}
      </div>
      
      <h2 className="text-xl text-white font-bold mt-8 mb-4">When is a DPA Required?</h2>
      <p className="mb-6">
        A Data Processing Agreement is required in the following scenarios:
      </p>
      <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-300">
        <li>When you use Fides Bridge to process personal data of EU or UK residents on your behalf</li>
        <li>When you act as a data controller and Fides Bridge acts as a data processor</li>
        <li>When you need to demonstrate compliance with GDPR or other data protection regulations</li>
        <li>When you engage us for services that involve handling employee, candidate, or other personal data</li>
      </ul>
      
      <h2 className="text-xl text-white font-bold mt-8 mb-4">DPA Compliance and Updates</h2>
      <p className="mb-6">
        Our Data Processing Agreement is regularly reviewed and updated to ensure compliance with evolving data 
        protection laws and regulations. We also ensure that our sub-processors comply with the same data protection 
        obligations as set out in our DPA with you.
      </p>
      
      <h2 className="text-xl text-white font-bold mt-8 mb-4">Contact Information</h2>
      <p className="mb-6">
        If you have any questions about our Data Processing Agreement or need assistance with executing 
        a DPA, please contact our Data Protection Officer:
      </p>
      <div className="bg-blue-900/20 p-4 rounded-lg mb-6">
        <p>
          <strong>Data Protection Officer</strong><br />
          Fides Bridge Ltd<br />
          123 Privacy Street<br />
          London, EC1A 1BB<br />
          United Kingdom<br /><br />
          Email: dpo@fidesbridge.com<br />
          Phone: +44 20 1234 5679
        </p>
      </div>
      
      <div className="mt-8 p-4 bg-blue-900/20 rounded-lg">
        <p className="mb-2">
          Related policies:
        </p>
        <div className="flex flex-wrap gap-2">
          <Link href="/privacy-policy" className="text-blue-400 hover:text-blue-300">Privacy Policy</Link>
          <span className="text-gray-500">•</span>
          <Link href="/data-protection" className="text-blue-400 hover:text-blue-300">Data Protection</Link>
          <span className="text-gray-500">•</span>
          <Link href="/gdpr" className="text-blue-400 hover:text-blue-300">GDPR Compliance</Link>
          <span className="text-gray-500">•</span>
          <Link href="/dpo" className="text-blue-400 hover:text-blue-300">Data Protection Officer</Link>
        </div>
      </div>
    </PolicyLayout>
  );
} 