import React from "react";
import PolicyLayout from "@/Components/PolicyLayout";
import Link from "next/link";

export const metadata = {
  title: "GDPR Compliance | Fides Bridge",
  description: "Information about our compliance with the General Data Protection Regulation (GDPR).",
};

export default function GDPRPage() {
  return (
    <PolicyLayout 
      title="GDPR Compliance"
      description="Information about how we comply with the General Data Protection Regulation (GDPR)."
      lastUpdated="January 2023"
    >
      <p className="mb-6">
        The General Data Protection Regulation (GDPR) is a regulation in EU law on data protection and privacy that 
        applies to all individuals within the European Union and the European Economic Area. At Fides Bridge, we are 
        committed to ensuring our compliance with GDPR and protecting the personal data of our users.
      </p>
      
      <h2 className="text-xl text-white font-bold mt-8 mb-4">Our Approach to GDPR</h2>
      <p className="mb-6">
        Our approach to GDPR compliance is centered on the following key elements:
      </p>
      
      <div className="grid md:grid-cols-2 gap-4 mb-8">
        <div className="bg-blue-900/20 p-4 rounded-lg">
          <h3 className="text-lg text-white font-semibold mb-2">Data Protection by Design</h3>
          <p className="text-gray-300">
            We have implemented appropriate technical and organizational measures to integrate data protection into our 
            data processing activities from the earliest stage of design.
          </p>
        </div>
        
        <div className="bg-blue-900/20 p-4 rounded-lg">
          <h3 className="text-lg text-white font-semibold mb-2">Data Protection by Default</h3>
          <p className="text-gray-300">
            We ensure that only personal data necessary for each specific purpose of processing is processed, and that 
            data is not made accessible to an indefinite number of individuals.
          </p>
        </div>
        
        <div className="bg-blue-900/20 p-4 rounded-lg">
          <h3 className="text-lg text-white font-semibold mb-2">Lawful Basis for Processing</h3>
          <p className="text-gray-300">
            We process personal data only where we have a lawful basis to do so under the GDPR, such as consent, 
            contract, legal obligation, vital interests, public task, or legitimate interests.
          </p>
        </div>
        
        <div className="bg-blue-900/20 p-4 rounded-lg">
          <h3 className="text-lg text-white font-semibold mb-2">Transparent Information</h3>
          <p className="text-gray-300">
            We provide clear and transparent information about how we collect, use, store, and process personal data 
            through our Privacy Policy and related documentation.
          </p>
        </div>
      </div>
      
      <h2 className="text-xl text-white font-bold mt-8 mb-4">Legal Basis for Processing Personal Data</h2>
      <p className="mb-4">
        Under the GDPR, we process personal data based on one or more of the following legal bases:
      </p>
      
      <div className="space-y-4 mb-8">
        <div className="border-l-4 border-blue-600 pl-4">
          <h3 className="text-lg text-white font-semibold mb-1">Consent</h3>
          <p className="text-gray-300">
            Where you have given us explicit consent to process your personal data for a specific purpose. You can 
            withdraw your consent at any time.
          </p>
        </div>
        
        <div className="border-l-4 border-blue-600 pl-4">
          <h3 className="text-lg text-white font-semibold mb-1">Contract</h3>
          <p className="text-gray-300">
            Where processing is necessary for the performance of a contract to which you are a party, or to take steps 
            at your request before entering into a contract.
          </p>
        </div>
        
        <div className="border-l-4 border-blue-600 pl-4">
          <h3 className="text-lg text-white font-semibold mb-1">Legal Obligation</h3>
          <p className="text-gray-300">
            Where processing is necessary for compliance with a legal obligation to which we are subject.
          </p>
        </div>
        
        <div className="border-l-4 border-blue-600 pl-4">
          <h3 className="text-lg text-white font-semibold mb-1">Legitimate Interests</h3>
          <p className="text-gray-300">
            Where processing is necessary for the purposes of our legitimate interests, except where such interests are 
            overridden by your interests or fundamental rights and freedoms.
          </p>
        </div>
      </div>
      
      <h2 className="text-xl text-white font-bold mt-8 mb-4">Data Subject Rights Under GDPR</h2>
      <p className="mb-4">
        The GDPR provides you with certain rights concerning your personal data. We are committed to respecting these 
        rights and supporting you in exercising them. These rights include:
      </p>
      
      <div className="overflow-x-auto mb-8">
        <table className="min-w-full bg-[#101625]/70 border border-blue-900/30 rounded-lg">
          <thead>
            <tr className="border-b border-blue-900/30">
              <th className="p-3 text-left text-white">Right</th>
              <th className="p-3 text-left text-white">Description</th>
              <th className="p-3 text-left text-white">How to Exercise</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-blue-900/30">
            <tr>
              <td className="p-3 text-gray-300">Right to Be Informed</td>
              <td className="p-3 text-gray-300">You have the right to be informed about the collection and use of your personal data.</td>
              <td className="p-3 text-gray-300">Review our <Link href="/privacy-policy" className="text-blue-400 hover:text-blue-300">Privacy Policy</Link>.</td>
            </tr>
            <tr>
              <td className="p-3 text-gray-300">Right of Access</td>
              <td className="p-3 text-gray-300">You have the right to obtain confirmation if we process your personal data and request a copy of it.</td>
              <td className="p-3 text-gray-300">Contact our <Link href="/dpo" className="text-blue-400 hover:text-blue-300">DPO</Link>.</td>
            </tr>
            <tr>
              <td className="p-3 text-gray-300">Right to Rectification</td>
              <td className="p-3 text-gray-300">You have the right to request that inaccurate personal data be corrected or completed if incomplete.</td>
              <td className="p-3 text-gray-300">Update your account information or contact our <Link href="/dpo" className="text-blue-400 hover:text-blue-300">DPO</Link>.</td>
            </tr>
            <tr>
              <td className="p-3 text-gray-300">Right to Erasure</td>
              <td className="p-3 text-gray-300">You have the right to request the deletion of your personal data in certain circumstances.</td>
              <td className="p-3 text-gray-300">Contact our <Link href="/dpo" className="text-blue-400 hover:text-blue-300">DPO</Link> with your request.</td>
            </tr>
            <tr>
              <td className="p-3 text-gray-300">Right to Restrict Processing</td>
              <td className="p-3 text-gray-300">You have the right to request the restriction of processing your personal data.</td>
              <td className="p-3 text-gray-300">Contact our <Link href="/dpo" className="text-blue-400 hover:text-blue-300">DPO</Link> with your request.</td>
            </tr>
            <tr>
              <td className="p-3 text-gray-300">Right to Data Portability</td>
              <td className="p-3 text-gray-300">You have the right to receive your personal data in a structured, commonly used format or to request the transfer to another controller.</td>
              <td className="p-3 text-gray-300">Contact our <Link href="/dpo" className="text-blue-400 hover:text-blue-300">DPO</Link> with your request.</td>
            </tr>
            <tr>
              <td className="p-3 text-gray-300">Right to Object</td>
              <td className="p-3 text-gray-300">You have the right to object to the processing of your personal data in certain circumstances.</td>
              <td className="p-3 text-gray-300">Contact our <Link href="/dpo" className="text-blue-400 hover:text-blue-300">DPO</Link> with your objection.</td>
            </tr>
            <tr>
              <td className="p-3 text-gray-300">Rights Related to Automated Decision-making</td>
              <td className="p-3 text-gray-300">You have the right not to be subject to a decision based solely on automated processing, including profiling.</td>
              <td className="p-3 text-gray-300">Contact our <Link href="/dpo" className="text-blue-400 hover:text-blue-300">DPO</Link> with your request.</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <h2 className="text-xl text-white font-bold mt-8 mb-4">Data Protection Impact Assessments (DPIAs)</h2>
      <p className="mb-6">
        We conduct Data Protection Impact Assessments (DPIAs) whenever we identify processing that is likely to result 
        in a high risk to individuals' rights and freedoms. DPIAs help us identify and minimize data protection risks 
        associated with our processing activities.
      </p>
      
      <h2 className="text-xl text-white font-bold mt-8 mb-4">International Data Transfers</h2>
      <p className="mb-6">
        When transferring personal data outside the EEA or UK, we ensure that adequate safeguards are in place to provide 
        a level of protection equivalent to that guaranteed within the EEA or UK. These safeguards may include:
      </p>
      <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-300">
        <li>Standard Contractual Clauses (SCCs) approved by the European Commission</li>
        <li>Binding Corporate Rules</li>
        <li>Adequacy decisions by the European Commission</li>
        <li>Additional technical and organizational measures where necessary</li>
      </ul>
      
      <h2 className="text-xl text-white font-bold mt-8 mb-4">Data Protection Officer</h2>
      <p className="mb-6">
        We have appointed a Data Protection Officer (DPO) who is responsible for overseeing our data protection strategy 
        and ensuring compliance with GDPR requirements. You can contact our DPO if you have any questions or concerns 
        about how we handle your personal data:
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
      
      <h2 className="text-xl text-white font-bold mt-8 mb-4">Supervisory Authority</h2>
      <p className="mb-6">
        If you are located in the European Union or UK, you have the right to lodge a complaint with your local 
        supervisory authority if you believe that our processing of your personal data violates the GDPR. We encourage 
        you to contact us first so we can address your concerns directly.
      </p>
      
      <div className="mt-8 p-4 bg-blue-900/20 rounded-lg">
        <p className="mb-2">
          Related policies:
        </p>
        <div className="flex flex-wrap gap-2">
          <Link href="/privacy-policy" className="text-blue-400 hover:text-blue-300">Privacy Policy</Link>
          <span className="text-gray-500">•</span>
          <Link href="/data-protection" className="text-blue-400 hover:text-blue-300">Data Protection</Link>
          <span className="text-gray-500">•</span>
          <Link href="/dpa" className="text-blue-400 hover:text-blue-300">Data Processing Agreement</Link>
          <span className="text-gray-500">•</span>
          <Link href="/cookie-policy" className="text-blue-400 hover:text-blue-300">Cookie Policy</Link>
        </div>
      </div>
    </PolicyLayout>
  );
} 