import React from "react";
import PolicyLayout from "@/Components/PolicyLayout";
import Link from "next/link";

export const metadata = {
  title: "Mandatory Notices | Fides Bridge",
  description: "Legal disclosures, copyright information, and other required notices for Fides Bridge.",
};

export default function MandatoryNoticesPage() {
  const currentYear = new Date().getFullYear();
  
  return (
    <PolicyLayout 
      title="Mandatory Notices"
      description="Legal disclosures, copyright information, and other required notices."
      lastUpdated="January 2023"
    >
      <p className="mb-6">
        This page contains important legal disclosures and notices that we are required to provide by law.
        Please review this information carefully.
      </p>
      
      <section className="mb-8">
        <h2 className="text-xl text-white font-bold mb-4">Company Information</h2>
        <div className="bg-blue-900/20 p-4 rounded-lg mb-6">
          <p>
            <strong>Fides Bridge Ltd</strong><br />
            Registered in England and Wales<br />
            Company Registration Number: 12345678<br />
            Registered Office: 123 Tech Avenue, London, EC1A 1BB, United Kingdom<br /><br />
            VAT Registration Number: GB123456789<br />
            Email: legal@fidesbridge.com<br />
            Phone: +44 20 1234 5678
          </p>
        </div>
      </section>
      
      <section className="mb-8">
        <h2 className="text-xl text-white font-bold mb-4">Copyright Notice</h2>
        <p className="mb-4">
          © 2000-{currentYear} Fides Bridge Ltd. All rights reserved.
        </p>
        <p className="mb-4">
          All content, design, graphics, organization, digital conversion, and other matters related to the 
          Fides Bridge website (fidesbridge.com) are protected under applicable copyrights, trademarks, and other 
          proprietary rights. The copying, redistribution, use, or publication by you of any such content or any 
          part of the website is strictly prohibited without express written permission from Fides Bridge Ltd.
        </p>
        <p className="mb-4">
          The use of any Fides Bridge trademark without express written permission is strictly prohibited.
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-xl text-white font-bold mb-4">Trademark Information</h2>
        <p className="mb-4">
          "Fides Bridge" and our logo are registered trademarks of Fides Bridge Ltd in the United Kingdom and other countries.
          Other product and company names mentioned on our website may be the trademarks of their respective owners.
        </p>
        <div className="flex items-center space-x-4 mb-4">
          <div className="flex items-center">
            <span className="text-white mr-1">™</span>
            <span className="text-gray-300">— Unregistered trademark</span>
          </div>
          <div className="flex items-center">
            <span className="text-white mr-1">®</span>
            <span className="text-gray-300">— Registered trademark</span>
          </div>
        </div>
      </section>
      
      <section className="mb-8">
        <h2 className="text-xl text-white font-bold mb-4">Third-Party Notices</h2>
        <p className="mb-4">
          Fides Bridge uses various third-party services and software components, each of which may have their 
          own licenses and notices. We acknowledge and appreciate the contributions of these third parties.
        </p>
        <p className="mb-4">
          Our website may include links to third-party websites, plug-ins, and applications. Clicking on those 
          links or enabling those connections may allow third parties to collect or share data about you. We do 
          not control these third-party websites and are not responsible for their privacy statements or content.
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-xl text-white font-bold mb-4">Open Source Software</h2>
        <p className="mb-4">
          Fides Bridge uses various open source software components. We acknowledge and are grateful to the 
          developers of these components. Information about these components and their respective licenses can 
          be provided upon request.
        </p>
        <p className="mb-4">
          To request the source code of open source components used in our software, please contact us at: 
          opensource@fidesbridge.com
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-xl text-white font-bold mb-4">Financial Notices</h2>
        <div className="bg-blue-900/20 p-4 rounded-lg mb-4">
          <h3 className="text-lg text-white font-semibold mb-2">Investment Disclaimer</h3>
          <p className="text-gray-300">
            Any information provided on this website regarding market trends, career prospects, salary expectations, 
            or industry outlooks is for informational purposes only and should not be construed as financial or 
            investment advice. Past performance is not indicative of future results. Consider seeking advice from an 
            independent financial advisor before making any financial decisions.
          </p>
        </div>
        <div className="bg-blue-900/20 p-4 rounded-lg">
          <h3 className="text-lg text-white font-semibold mb-2">Payment Processing</h3>
          <p className="text-gray-300">
            Fides Bridge uses secure third-party payment processors for all financial transactions. We do not store 
            your payment card details on our systems. All payment information is encrypted during transmission using 
            industry-standard SSL technology.
          </p>
        </div>
      </section>
      
      <section className="mb-8">
        <h2 className="text-xl text-white font-bold mb-4">Regulatory Compliance</h2>
        <p className="mb-4">
          Fides Bridge Ltd is registered with the Information Commissioner's Office (ICO) in the United Kingdom 
          as a data controller. Our registration number is: ZA123456.
        </p>
        <p className="mb-4">
          We comply with all applicable laws and regulations in the jurisdictions where we operate, including but not 
          limited to data protection laws, employment laws, and consumer protection laws.
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-xl text-white font-bold mb-4">Equal Opportunities Statement</h2>
        <p className="mb-4">
          Fides Bridge is committed to providing equal opportunities in all aspects of our business. We do not discriminate 
          on the basis of race, color, religion, gender, gender identity or expression, sexual orientation, national origin, 
          genetics, disability, age, or veteran status.
        </p>
        <p className="mb-4">
          All job listings, recruitment services, and career resources are provided with a commitment to fostering a 
          diverse and inclusive workplace environment for all.
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-xl text-white font-bold mb-4">Legal Jurisdiction</h2>
        <p className="mb-4">
          This website and its content are governed by and construed in accordance with the laws of England and Wales. 
          Any disputes relating to this website or its content shall be subject to the exclusive jurisdiction of the 
          courts of England and Wales.
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-xl text-white font-bold mb-4">Changes to Notices</h2>
        <p className="mb-4">
          We may update these notices from time to time to reflect changes in legal requirements or our business practices. 
          We encourage you to review this page periodically for the latest information.
        </p>
      </section>
      
      <div className="mt-8 p-4 bg-blue-900/20 rounded-lg">
        <p className="mb-2">
          For more information:
        </p>
        <div className="flex flex-wrap gap-2">
          <Link href="/terms" className="text-blue-400 hover:text-blue-300">Terms & Conditions</Link>
          <span className="text-gray-500">•</span>
          <Link href="/privacy-policy" className="text-blue-400 hover:text-blue-300">Privacy Policy</Link>
          <span className="text-gray-500">•</span>
          <Link href="/contact" className="text-blue-400 hover:text-blue-300">Contact Us</Link>
        </div>
      </div>
    </PolicyLayout>
  );
} 