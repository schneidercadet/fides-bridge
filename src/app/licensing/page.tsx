import React from "react";
import PolicyLayout from "@/Components/PolicyLayout";

export const metadata = {
  title: "Licensing | Fides Bridge",
  description: "Information about licenses and usage rights for Fides Bridge services."
};

export default function LicensingPage() {
  return (
    <PolicyLayout 
      title="Licensing"
      description="Information about licenses and usage rights for Fides Bridge services."
      lastUpdated="April 2023"
    >
      <h2>Software Licensing</h2>
      <p>
        The Fides Bridge platform, including all associated software, features, and functionality, is owned by Fides Bridge Ltd. 
        and licensed to you on a limited, non-exclusive, non-sublicensable, revocable basis in accordance with these terms.
      </p>
      
      <h2>Content Licensing</h2>
      <p>
        All content provided on Fides Bridge, including text, graphics, logos, images, audio clips, 
        digital downloads, data compilations, and software, is the property of Fides Bridge or its content suppliers 
        and protected by international copyright laws.
      </p>
      
      <h3>Your Content</h3>
      <p>
        By submitting content to Fides Bridge, including job postings, resumes, profiles, and other materials, 
        you grant Fides Bridge a worldwide, non-exclusive, royalty-free license (with the right to sublicense) 
        to use, copy, reproduce, process, adapt, modify, publish, transmit, display and distribute such content 
        in any and all media or distribution methods.
      </p>
      
      <h3>Usage Restrictions</h3>
      <p>
        You may not reproduce, duplicate, copy, sell, resell, or exploit any portion of the Fides Bridge service, 
        use of the service, or access to the service without express written permission from Fides Bridge.
      </p>
      
      <h2>Third-Party Services and Content</h2>
      <p>
        Fides Bridge may display content from third-party services or include links to other websites or applications. 
        Such third-party content is not owned or controlled by Fides Bridge, and Fides Bridge assumes no responsibility 
        for the content, privacy policies, or practices of any third-party websites.
      </p>
      
      <h2>Open Source Software</h2>
      <p>
        Certain components of the Fides Bridge platform may incorporate open-source software. 
        Any open source software is provided under the terms of the applicable open source license 
        and is not subject to these licensing terms.
      </p>
      
      <h2>Contact Information</h2>
      <p>
        For questions regarding licensing of Fides Bridge services or content, please contact our legal department:
      </p>
      <p>
        <strong>Email:</strong> legal@fidesbridge.com<br />
        <strong>Address:</strong> Fides Bridge Headquarters, 123 Recruitment Avenue, London, UK
      </p>
    </PolicyLayout>
  );
} 