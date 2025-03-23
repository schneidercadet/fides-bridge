import React from "react";
import PolicyLayout from "@/Components/PolicyLayout";
import Link from "next/link";

export const metadata = {
  title: "Data Protection Officer | Fides Bridge",
  description: "Information about Fides Bridge's Data Protection Officer (DPO) and how to contact them regarding data protection matters.",
};

export default function DPOPage() {
  return (
    <PolicyLayout 
      title="Data Protection Officer (DPO)"
      description="Information about our Data Protection Officer and how they can assist you with data protection matters."
      lastUpdated="February 2023"
    >
      <section className="mb-8">
        <h2 className="text-xl text-white font-bold mb-4">Role of Our Data Protection Officer</h2>
        <p className="mb-4">
          The Data Protection Officer (DPO) at Fides Bridge is responsible for overseeing our data protection 
          strategy and implementation to ensure compliance with relevant data protection laws and regulations, 
          particularly the General Data Protection Regulation (GDPR).
        </p>
        <p className="mb-4">
          Our DPO serves as the point of contact for data protection matters, both for individuals whose data 
          we process and for the supervisory authorities.
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-xl text-white font-bold mb-4">Key Responsibilities</h2>
        <div className="space-y-4">
          <div className="bg-blue-900/20 p-4 rounded-lg">
            <h3 className="text-lg text-white font-semibold mb-2">Monitoring Compliance</h3>
            <p className="text-gray-300">
              Our DPO monitors Fides Bridge's compliance with data protection laws and our own data protection 
              policies, including assignment of responsibilities, awareness-raising, training of staff, and audits.
            </p>
          </div>
          
          <div className="bg-blue-900/20 p-4 rounded-lg">
            <h3 className="text-lg text-white font-semibold mb-2">Providing Advice and Guidance</h3>
            <p className="text-gray-300">
              The DPO provides advice and recommendations to Fides Bridge regarding data protection impact 
              assessments (DPIAs) and monitors their performance. They also offer guidance on implementing 
              data protection by design and by default.
            </p>
          </div>
          
          <div className="bg-blue-900/20 p-4 rounded-lg">
            <h3 className="text-lg text-white font-semibold mb-2">Cooperation with Supervisory Authorities</h3>
            <p className="text-gray-300">
              Our DPO cooperates with supervisory authorities, such as the Information Commissioner's Office (ICO) 
              in the UK, and acts as the contact point for issues related to data processing.
            </p>
          </div>
          
          <div className="bg-blue-900/20 p-4 rounded-lg">
            <h3 className="text-lg text-white font-semibold mb-2">Handling Data Subject Requests</h3>
            <p className="text-gray-300">
              The DPO handles requests from individuals regarding their rights under data protection laws, 
              including access, rectification, erasure, restriction of processing, data portability, 
              objection, and automated decision-making.
            </p>
          </div>
        </div>
      </section>
      
      <section className="mb-8">
        <h2 className="text-xl text-white font-bold mb-4">Independence of the DPO</h2>
        <p className="mb-4">
          In accordance with GDPR requirements, our DPO operates with a significant degree of independence:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-gray-300">
          <li>They report directly to the highest level of management at Fides Bridge</li>
          <li>They are provided with the resources necessary to carry out their tasks</li>
          <li>They operate independently and do not receive instructions regarding the exercise of their tasks</li>
          <li>They cannot be dismissed or penalized for performing their duties</li>
        </ul>
      </section>
      
      <section className="mb-8">
        <h2 className="text-xl text-white font-bold mb-4">Our DPO</h2>
        <div className="bg-blue-900/30 p-6 rounded-lg">
          <h3 className="text-lg text-white font-semibold mb-4">Dr. Emma Richardson</h3>
          <p className="mb-3">
            <span className="font-semibold text-white">Qualifications:</span> CIPP/E, CIPM, LLM in Information Law
          </p>
          <p className="mb-3">
            Dr. Richardson has been appointed as the Data Protection Officer for Fides Bridge Ltd. 
            With over 10 years of experience in data protection and information governance, Dr. Richardson 
            combines technical expertise with a comprehensive understanding of data protection laws and regulations.
          </p>
          <p className="mb-4">
            She is certified by the International Association of Privacy Professionals (IAPP) and holds 
            advanced qualifications in information law and data ethics.
          </p>
        </div>
      </section>
      
      <section className="mb-8">
        <h2 className="text-xl text-white font-bold mb-4">Contacting Our DPO</h2>
        <p className="mb-4">
          You can contact our Data Protection Officer regarding any matters related to the processing of your 
          personal data or to exercise your rights under applicable data protection laws:
        </p>
        
        <div className="bg-blue-900/20 p-4 rounded-lg mb-4">
          <p className="mb-2">
            <span className="font-semibold text-white">Email:</span>{" "}
            <a href="mailto:dpo@fidesbridge.com" className="text-blue-400 hover:text-blue-300">
              dpo@fidesbridge.com
            </a>
          </p>
          <p className="mb-2">
            <span className="font-semibold text-white">Postal Address:</span><br />
            Data Protection Officer<br />
            Fides Bridge Ltd<br />
            123 Tech Avenue<br />
            London, EC1A 1BB<br />
            United Kingdom
          </p>
          <p>
            <span className="font-semibold text-white">Telephone:</span> +44 20 1234 5678
          </p>
        </div>
        
        <p className="mb-4">
          Our DPO aims to respond to all legitimate inquiries within 5 business days, and in any event 
          within one month as required by the GDPR for data subject requests. Complex inquiries may 
          take longer to resolve, but you will be kept informed of progress.
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-xl text-white font-bold mb-4">When to Contact the DPO</h2>
        <p className="mb-4">
          You should contact our DPO if you:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-gray-300">
          <li>Want to know what personal data we hold about you and how it is processed</li>
          <li>Wish to exercise any of your data subject rights (access, rectification, erasure, etc.)</li>
          <li>Have questions about our privacy policy or data protection practices</li>
          <li>Want to report a possible data breach or security concern</li>
          <li>Need advice on data protection matters related to our services</li>
          <li>Wish to lodge a complaint about how we handle personal data</li>
        </ul>
      </section>
      
      <section className="mb-8">
        <h2 className="text-xl text-white font-bold mb-4">Data Protection Authority</h2>
        <p className="mb-4">
          While we encourage you to contact our DPO first with any concerns, you also have the right to 
          lodge a complaint directly with the relevant data protection authority:
        </p>
        <div className="bg-blue-900/20 p-4 rounded-lg">
          <p className="mb-2">
            <span className="font-semibold text-white">Information Commissioner's Office (ICO)</span><br />
            Wycliffe House<br />
            Water Lane<br />
            Wilmslow<br />
            Cheshire, SK9 5AF<br />
            United Kingdom
          </p>
          <p className="mb-2">
            <span className="font-semibold text-white">Helpline:</span> 0303 123 1113<br />
            <span className="font-semibold text-white">Website:</span>{" "}
            <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
              https://ico.org.uk
            </a>
          </p>
        </div>
      </section>
      
      <div className="mt-8 p-4 bg-blue-900/20 rounded-lg">
        <p className="mb-2">
          Related Policies:
        </p>
        <div className="flex flex-wrap gap-2">
          <Link href="/privacy-policy" className="text-blue-400 hover:text-blue-300">Privacy Policy</Link>
          <span className="text-gray-500">•</span>
          <Link href="/data-protection" className="text-blue-400 hover:text-blue-300">Data Protection</Link>
          <span className="text-gray-500">•</span>
          <Link href="/gdpr" className="text-blue-400 hover:text-blue-300">GDPR Compliance</Link>
          <span className="text-gray-500">•</span>
          <Link href="/dpa" className="text-blue-400 hover:text-blue-300">Data Processing Agreement</Link>
        </div>
      </div>
    </PolicyLayout>
  );
} 