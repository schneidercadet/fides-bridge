import React from "react";
import PolicyLayout from "@/Components/PolicyLayout";
import Link from "next/link";

export const metadata = {
  title: "Accessibility Statement | Fides Bridge",
  description: "Our commitment to accessibility and providing an inclusive experience for all users.",
};

export default function AccessibilityPage() {
  return (
    <PolicyLayout 
      title="Accessibility Statement"
      description="Our commitment to making Fides Bridge accessible to all users."
      lastUpdated="January 2023"
    >
      <p className="mb-6">
        At Fides Bridge, we are committed to ensuring digital accessibility for people with disabilities. We are continually improving the user 
        experience for everyone, and applying the relevant accessibility standards.
      </p>
      
      <h2 className="text-xl text-white font-bold mt-8 mb-4">Conformance Status</h2>
      <p className="mb-6">
        The Web Content Accessibility Guidelines (WCAG) define requirements for designers and developers to improve 
        accessibility for people with disabilities. It defines three levels of conformance: Level A, Level AA, and Level AAA. 
        Fides Bridge is partially conformant with WCAG 2.1 level AA. Partially conformant means that some parts of 
        the content do not fully conform to the accessibility standard.
      </p>
      
      <h2 className="text-xl text-white font-bold mt-8 mb-4">Accessibility Features</h2>
      <p className="mb-4">
        Fides Bridge includes the following accessibility features:
      </p>
      
      <div className="grid md:grid-cols-2 gap-4 mb-8">
        <div className="bg-blue-900/20 p-4 rounded-lg">
          <h3 className="text-lg text-white font-semibold mb-2">Keyboard Navigation</h3>
          <p className="text-gray-300">
            All interactive elements are accessible via keyboard, with visible focus indicators to help users navigate.
          </p>
        </div>
        
        <div className="bg-blue-900/20 p-4 rounded-lg">
          <h3 className="text-lg text-white font-semibold mb-2">Text Alternatives</h3>
          <p className="text-gray-300">
            We provide text alternatives for non-text content, including images, icons, and visual elements.
          </p>
        </div>
        
        <div className="bg-blue-900/20 p-4 rounded-lg">
          <h3 className="text-lg text-white font-semibold mb-2">Color Contrast</h3>
          <p className="text-gray-300">
            We strive to maintain sufficient color contrast between text and backgrounds to ensure readability.
          </p>
        </div>
        
        <div className="bg-blue-900/20 p-4 rounded-lg">
          <h3 className="text-lg text-white font-semibold mb-2">Responsive Design</h3>
          <p className="text-gray-300">
            Our interface adapts to different screen sizes and allows for text resizing without loss of functionality.
          </p>
        </div>
        
        <div className="bg-blue-900/20 p-4 rounded-lg">
          <h3 className="text-lg text-white font-semibold mb-2">Semantic Structure</h3>
          <p className="text-gray-300">
            We use proper headings, landmarks, and semantic HTML to improve navigation for screen reader users.
          </p>
        </div>
        
        <div className="bg-blue-900/20 p-4 rounded-lg">
          <h3 className="text-lg text-white font-semibold mb-2">ARIA Attributes</h3>
          <p className="text-gray-300">
            Where necessary, we implement ARIA (Accessible Rich Internet Applications) to enhance accessibility.
          </p>
        </div>
      </div>
      
      <h2 className="text-xl text-white font-bold mt-8 mb-4">Known Limitations</h2>
      <p className="mb-4">
        Despite our efforts to ensure accessibility, there may be some limitations:
      </p>
      <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-300">
        <li>Some older PDF documents may not be fully accessible.</li>
        <li>Some embedded third-party content may not be fully accessible.</li>
        <li>Some interactive visualizations may have limited accessibility alternatives.</li>
        <li>Some complex dynamic content may not be fully accessible to all assistive technologies.</li>
      </ul>
      
      <h2 className="text-xl text-white font-bold mt-8 mb-4">Feedback and Assistance</h2>
      <p className="mb-6">
        We welcome your feedback on the accessibility of Fides Bridge. Please let us know if you encounter accessibility 
        barriers on our website:
      </p>
      <div className="bg-blue-900/20 p-4 rounded-lg mb-6">
        <p>
          <strong>Accessibility Contact</strong><br />
          Email: accessibility@fidesbridge.com<br />
          Phone: +44 20 1234 5680
        </p>
      </div>
      <p className="mb-6">
        We try to respond to feedback within 3 business days. If you need assistance with a particular page or feature 
        that is not accessible to you, please contact us at the above details. We will consider your request and provide 
        you with an accessible alternative.
      </p>
      
      <h2 className="text-xl text-white font-bold mt-8 mb-4">Assessment Approach</h2>
      <p className="mb-6">
        Fides Bridge assessed the accessibility of our website by the following approaches:
      </p>
      <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-300">
        <li>Self-evaluation: Our development team regularly reviews our website against WCAG 2.1 criteria.</li>
        <li>Automated testing: We use automated testing tools to identify potential accessibility issues.</li>
        <li>User testing: We conduct testing with users who utilize assistive technologies.</li>
        <li>External audit: We periodically engage external accessibility experts to evaluate our platform.</li>
      </ul>
      
      <h2 className="text-xl text-white font-bold mt-8 mb-4">Compatibility with Browsers and Assistive Technology</h2>
      <p className="mb-4">
        Fides Bridge is designed to be compatible with the following assistive technologies:
      </p>
      <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-300">
        <li>Screen readers (including NVDA, JAWS, and VoiceOver)</li>
        <li>Screen magnification software</li>
        <li>Speech recognition software</li>
        <li>Keyboard-only navigation</li>
      </ul>
      <p className="mb-6">
        We support the following browsers:
      </p>
      <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-300">
        <li>Google Chrome (latest 2 versions)</li>
        <li>Mozilla Firefox (latest 2 versions)</li>
        <li>Apple Safari (latest 2 versions)</li>
        <li>Microsoft Edge (latest 2 versions)</li>
      </ul>
      
      <h2 className="text-xl text-white font-bold mt-8 mb-4">Technical Specifications</h2>
      <p className="mb-4">
        Accessibility of Fides Bridge relies on the following technologies to work with the particular 
        combination of web browser and any assistive technologies or plugins installed on your computer:
      </p>
      <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-300">
        <li>HTML</li>
        <li>WAI-ARIA</li>
        <li>CSS</li>
        <li>JavaScript</li>
      </ul>
      <p className="mb-6">
        These technologies are relied upon for conformance with the accessibility standards used.
      </p>
      
      <h2 className="text-xl text-white font-bold mt-8 mb-4">Improvement Plan</h2>
      <p className="mb-6">
        We are committed to continuously improving accessibility on our platform. Our accessibility roadmap 
        includes the following goals:
      </p>
      <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-300">
        <li>Regular accessibility training for our development and content teams</li>
        <li>Implementing an accessibility checklist in our development process</li>
        <li>Conducting quarterly accessibility audits</li>
        <li>Prioritizing accessibility fixes based on user impact</li>
        <li>Working towards full WCAG 2.1 Level AA compliance</li>
      </ul>
      
      <h2 className="text-xl text-white font-bold mt-8 mb-4">Legal Statement</h2>
      <p className="mb-6">
        This accessibility statement was created on January 1, 2023 using the Accessibility Statement Generator 
        Template. We review and update this statement regularly as our website changes and as we make accessibility 
        improvements.
      </p>
      
      <div className="mt-8 p-4 bg-blue-900/20 rounded-lg">
        <p className="mb-2">
          For more information about our commitment to inclusion:
        </p>
        <div className="flex flex-wrap gap-2">
          <Link href="/terms" className="text-blue-400 hover:text-blue-300">Terms & Conditions</Link>
          <span className="text-gray-500">•</span>
          <Link href="/sitemap" className="text-blue-400 hover:text-blue-300">Sitemap</Link>
          <span className="text-gray-500">•</span>
          <Link href="/contact" className="text-blue-400 hover:text-blue-300">Contact Us</Link>
        </div>
      </div>
    </PolicyLayout>
  );
} 