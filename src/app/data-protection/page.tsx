import React from "react";
import PolicyLayout from "@/Components/PolicyLayout";
import Link from "next/link";

export const metadata = {
  title: "Data Protection | Fides Bridge",
  description: "Learn about our data protection practices and your rights regarding your personal information.",
};

export default function DataProtectionPage() {
  return (
    <PolicyLayout 
      title="Data Protection"
      description="Detailed information about how we protect your data and your rights."
      lastUpdated="February 2023"
    >
      <p className="mb-6">
        At Fides Bridge, we are committed to protecting your personal data and respecting your privacy rights. 
        This Data Protection Policy outlines how we collect, use, store, and protect your personal information, 
        as well as the rights you have in relation to your data.
      </p>
      
      <h2 className="text-xl text-white font-bold mt-8 mb-4">Our Data Protection Principles</h2>
      <p className="mb-4">
        We adhere to the following principles in our data processing activities:
      </p>
      <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-300">
        <li>Lawfulness, fairness, and transparency in how we process personal data</li>
        <li>Collection of data for specified, explicit, and legitimate purposes only</li>
        <li>Data minimization – collecting only what's necessary for the purposes stated</li>
        <li>Accuracy – keeping personal data up to date and correcting inaccuracies</li>
        <li>Storage limitation – keeping data only as long as necessary</li>
        <li>Integrity and confidentiality – ensuring appropriate security of personal data</li>
        <li>Accountability – taking responsibility for our data processing activities</li>
      </ul>
      
      <h2 className="text-xl text-white font-bold mt-8 mb-4">Data Protection Officer</h2>
      <p className="mb-6">
        We have appointed a Data Protection Officer (DPO) who is responsible for overseeing questions in relation 
        to this Data Protection Policy and our privacy practices. If you have any questions about how we handle 
        your data, including any requests to exercise your legal rights, please contact our DPO using the details below:
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
      
      <h2 className="text-xl text-white font-bold mt-8 mb-4">Your Data Protection Rights</h2>
      <p className="mb-4">
        Under data protection laws, you have rights in relation to your personal data that include the right to:
      </p>
      
      <div className="space-y-4 mb-6">
        <div className="border border-blue-900/30 p-4 rounded-lg">
          <h3 className="text-lg text-white font-semibold mb-2">Request access to your personal data</h3>
          <p className="text-gray-300">
            You have the right to obtain a copy of the personal data we hold about you and certain information 
            relating to our processing of your personal data.
          </p>
        </div>
        
        <div className="border border-blue-900/30 p-4 rounded-lg">
          <h3 className="text-lg text-white font-semibold mb-2">Request rectification of your personal data</h3>
          <p className="text-gray-300">
            You have the right to request that we correct any inaccurate or incomplete personal data we hold about you.
          </p>
        </div>
        
        <div className="border border-blue-900/30 p-4 rounded-lg">
          <h3 className="text-lg text-white font-semibold mb-2">Request erasure of your personal data</h3>
          <p className="text-gray-300">
            You have the right to request that we delete or remove personal data where there is no good reason for us 
            continuing to process it. Note that we may not always be able to comply with your request of erasure for 
            specific legal reasons which will be notified to you, if applicable, at the time of your request.
          </p>
        </div>
        
        <div className="border border-blue-900/30 p-4 rounded-lg">
          <h3 className="text-lg text-white font-semibold mb-2">Request restriction of processing</h3>
          <p className="text-gray-300">
            You have the right to request that we suspend the processing of your personal data in certain scenarios, 
            such as if you want us to establish the data's accuracy.
          </p>
        </div>
        
        <div className="border border-blue-900/30 p-4 rounded-lg">
          <h3 className="text-lg text-white font-semibold mb-2">Request data portability</h3>
          <p className="text-gray-300">
            You have the right to request that we transfer your personal data to you or to a third party. We will provide 
            to you, or a third party you have chosen, your personal data in a structured, commonly used, machine-readable format.
          </p>
        </div>
        
        <div className="border border-blue-900/30 p-4 rounded-lg">
          <h3 className="text-lg text-white font-semibold mb-2">Object to processing</h3>
          <p className="text-gray-300">
            You have the right to object to our processing of your personal data where we are relying on a legitimate 
            interest and there is something about your particular situation which makes you want to object to processing 
            on this ground. You also have the right to object where we are processing your personal data for direct marketing purposes.
          </p>
        </div>
      </div>
      
      <h2 className="text-xl text-white font-bold mt-8 mb-4">How to Exercise Your Rights</h2>
      <p className="mb-4">
        If you wish to exercise any of the rights set out above, please contact our Data Protection Officer using the 
        contact details provided. We may need to request specific information from you to help us confirm your identity 
        and ensure your right to access your personal data (or to exercise any of your other rights). This is a security 
        measure to ensure that personal data is not disclosed to any person who has no right to receive it.
      </p>
      <p className="mb-6">
        We try to respond to all legitimate requests within one month. Occasionally it may take us longer than a month 
        if your request is particularly complex or you have made a number of requests. In this case, we will notify you 
        and keep you updated.
      </p>
      
      <h2 className="text-xl text-white font-bold mt-8 mb-4">Data Security</h2>
      <p className="mb-4">
        We have put in place appropriate security measures to prevent your personal data from being accidentally lost, 
        used, or accessed in an unauthorized way, altered, or disclosed. In addition, we limit access to your personal 
        data to those employees, agents, contractors, and other third parties who have a business need to know. They will 
        only process your personal data on our instructions, and they are subject to a duty of confidentiality.
      </p>
      <p className="mb-6">
        Our security measures include:
      </p>
      <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-300">
        <li>Encryption of personal data in transit and at rest</li>
        <li>Regular testing and evaluation of the effectiveness of technical and organizational measures</li>
        <li>Regular security assessments and penetration testing of our systems</li>
        <li>Restricted access controls and authentication procedures</li>
        <li>Regular staff training on data protection and security</li>
        <li>Detailed incident response procedures</li>
      </ul>
      
      <h2 className="text-xl text-white font-bold mt-8 mb-4">Data Breach Procedures</h2>
      <p className="mb-4">
        We have procedures in place to deal with any suspected personal data breach and will notify you and any applicable 
        regulator of a breach where we are legally required to do so. Our breach response procedure includes:
      </p>
      <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-300">
        <li>Immediate assessment of the breach and containment measures</li>
        <li>Evaluation of risk to individuals' rights and freedoms</li>
        <li>Notification to supervisory authorities within 72 hours, where applicable</li>
        <li>Communication to affected individuals without undue delay, when required</li>
        <li>Documentation of all breaches and remedial actions taken</li>
      </ul>
      
      <h2 className="text-xl text-white font-bold mt-8 mb-4">International Transfers</h2>
      <p className="mb-6">
        We may transfer your personal data to countries outside the UK or European Economic Area (EEA). Whenever we transfer 
        your personal data out of the UK or EEA, we ensure a similar degree of protection is afforded to it by implementing 
        at least one of the following safeguards:
      </p>
      <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-300">
        <li>Transferring to countries that have been deemed to provide an adequate level of protection for personal data by the 
          European Commission or UK authorities</li>
        <li>Using specific contracts approved by the European Commission or UK authorities that give personal data the same 
          protection it has in Europe and the UK</li>
        <li>Implementing appropriate supplementary measures where necessary</li>
      </ul>
      
      <h2 className="text-xl text-white font-bold mt-8 mb-4">Data Retention</h2>
      <p className="mb-6">
        We will only retain your personal data for as long as necessary to fulfill the purposes we collected it for, 
        including for the purposes of satisfying any legal, accounting, or reporting requirements. To determine the 
        appropriate retention period for personal data, we consider the amount, nature, and sensitivity of the personal 
        data, the potential risk of harm from unauthorized use or disclosure of your personal data, the purposes for 
        which we process your personal data, and the applicable legal requirements.
      </p>
      
      <h2 className="text-xl text-white font-bold mt-8 mb-4">Complaints</h2>
      <p className="mb-4">
        You have the right to make a complaint at any time to your data protection authority. In the UK, this is the 
        Information Commissioner's Office (ICO): <a href="https://ico.org.uk" className="text-blue-400 hover:text-blue-300">https://ico.org.uk</a>. 
        We would, however, appreciate the chance to deal with your concerns before you approach the ICO, so please contact 
        us in the first instance.
      </p>
      
      <div className="mt-8 p-4 bg-blue-900/20 rounded-lg">
        <p className="mb-2">
          Related policies:
        </p>
        <div className="flex flex-wrap gap-2">
          <Link href="/privacy-policy" className="text-blue-400 hover:text-blue-300">Privacy Policy</Link>
          <span className="text-gray-500">•</span>
          <Link href="/cookie-policy" className="text-blue-400 hover:text-blue-300">Cookie Policy</Link>
          <span className="text-gray-500">•</span>
          <Link href="/gdpr" className="text-blue-400 hover:text-blue-300">GDPR Compliance</Link>
          <span className="text-gray-500">•</span>
          <Link href="/dpa" className="text-blue-400 hover:text-blue-300">Data Processing Agreement</Link>
        </div>
      </div>
    </PolicyLayout>
  );
} 