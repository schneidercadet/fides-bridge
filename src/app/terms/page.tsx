import React from "react";
import PolicyLayout from "@/Components/PolicyLayout";
import Link from "next/link";

export const metadata = {
  title: "Terms & Conditions | Fides Bridge",
  description: "Terms and conditions for using the Fides Bridge platform."
};

export default function TermsPage() {
  return (
    <PolicyLayout 
      title="Terms & Conditions"
      description="Please read these terms and conditions carefully before using our platform."
      lastUpdated="March 2023"
    >
      <h2>1. Acceptance of Terms</h2>
      <p>
        By accessing or using the Fides Bridge platform ("Service"), you agree to be bound by these Terms and Conditions 
        and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from 
        using or accessing this site.
      </p>
      
      <h2>2. Registration and Account Security</h2>
      <p>
        To use certain features of the Service, you must register for an account. You agree to provide accurate, current, 
        and complete information during the registration process and to update such information to keep it accurate, current, 
        and complete.
      </p>
      <p>
        You are responsible for safeguarding the password that you use to access the Service and for any activities or actions 
        under your password. You agree not to disclose your password to any third party and to take sole responsibility for 
        any activities or actions under your account, whether or not you have authorized such activities or actions.
      </p>
      
      <h2>3. Permitted Use and Restrictions</h2>
      <p>
        Fides Bridge grants you a personal, non-transferable, non-exclusive, revocable license to access and use our Service. 
        This license is subject to these Terms and Conditions.
      </p>
      <p>
        You are prohibited from:
      </p>
      <ul>
        <li>Using the Service for any illegal purpose or in violation of any local, state, national, or international law</li>
        <li>Posting false or misleading information</li>
        <li>Harassing, abusing, or harming another person</li>
        <li>Interfering with the proper working of the Service</li>
        <li>Attempting to bypass any measures we may use to prevent or restrict access to the Service</li>
        <li>Scraping or collecting data from the Service without our prior consent</li>
      </ul>
      
      <h2>4. Content</h2>
      <p>
        Our Service allows you to post, link, store, share, and otherwise make available certain information, text, graphics, 
        videos, or other material ("Content"). You are responsible for the Content that you post on or through the Service, 
        including its legality, reliability, and appropriateness.
      </p>
      <p>
        By posting Content on or through the Service, you represent and warrant that:
      </p>
      <ul>
        <li>The Content is yours and/or you have the right to use it and the right to grant us the rights and license as provided in these Terms</li>
        <li>The posting of your Content on or through the Service does not violate the privacy rights, publicity rights, copyrights, contract rights, or any other rights of any person or entity</li>
      </ul>
      
      <h2>5. Termination</h2>
      <p>
        We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, 
        under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of 
        the Terms.
      </p>
      
      <h2>6. Limitation of Liability</h2>
      <p>
        In no event shall Fides Bridge, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for 
        any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, 
        use, goodwill, or other intangible losses, resulting from:
      </p>
      <ul>
        <li>Your access to or use of or inability to access or use the Service</li>
        <li>Any conduct or content of any third party on the Service</li>
        <li>Any content obtained from the Service</li>
        <li>Unauthorized access, use, or alteration of your transmissions or content</li>
      </ul>
      
      <h2>7. Changes to Terms</h2>
      <p>
        We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 
        30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole 
        discretion.
      </p>
      
      <h2>8. Governing Law</h2>
      <p>
        These Terms shall be governed and construed in accordance with the laws of the United Kingdom, without regard to its 
        conflict of law provisions.
      </p>
      
      <h2>9. Related Policies</h2>
      <p>
        Please also review our other policies that form part of these Terms & Conditions:
      </p>
      <ul>
        <li><Link href="/privacy-policy" className="text-blue-400 hover:text-blue-300">Privacy Policy</Link></li>
        <li><Link href="/cookie-policy" className="text-blue-400 hover:text-blue-300">Cookie Policy</Link></li>
        <li><Link href="/licensing" className="text-blue-400 hover:text-blue-300">Licensing</Link></li>
      </ul>
      
      <h2>10. Contact Us</h2>
      <p>
        If you have any questions about these Terms, please contact us:
      </p>
      <p>
        <strong>Email:</strong> terms@fidesbridge.com<br />
        <strong>Phone:</strong> +44 20 1234 5678
      </p>
    </PolicyLayout>
  );
} 