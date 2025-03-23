"use client";

import React, { useState } from "react";
import PolicyLayout from "@/Components/PolicyLayout";
import Link from "next/link";

export default function CookiePolicyPage() {
  const [cookiePreferences, setCookiePreferences] = useState({
    necessary: true,
    functional: false,
    analytics: false,
    marketing: false,
  });

  const handleCookieToggle = (type: keyof typeof cookiePreferences) => {
    setCookiePreferences({
      ...cookiePreferences,
      [type]: !cookiePreferences[type],
    });
  };

  const handleSavePreferences = () => {
    // In a real application, this would save preferences to cookies/localStorage
    // and communicate with a consent management platform
    alert("Cookie preferences saved successfully!");
    
    // Example of how you might save to localStorage
    localStorage.setItem("cookiePreferences", JSON.stringify(cookiePreferences));
  };

  return (
    <PolicyLayout 
      title="Cookie Policy"
      description="Information about how we use cookies and similar technologies on our website."
      lastUpdated="March 2023"
    >
      <p className="mb-6">
        This Cookie Policy explains how Fides Bridge uses cookies and similar technologies to recognize you when you 
        visit our website. It explains what these technologies are and why we use them, as well as your rights to 
        control our use of them.
      </p>
      
      <h2 className="text-xl text-white font-bold mt-8 mb-4">What are cookies?</h2>
      <p className="mb-4">
        Cookies are small data files that are placed on your computer or mobile device when you visit a website. 
        Cookies are widely used by website owners to make their websites work, or to work more efficiently, as well 
        as to provide reporting information.
      </p>
      <p className="mb-4">
        Cookies set by the website owner (in this case, Fides Bridge) are called "first-party cookies". Cookies set 
        by parties other than the website owner are called "third-party cookies". Third-party cookies enable 
        third-party features or functionality to be provided on or through the website (e.g., advertising, interactive 
        content, and analytics).
      </p>
      
      <h2 className="text-xl text-white font-bold mt-8 mb-4">Why do we use cookies?</h2>
      <p className="mb-4">
        We use first-party and third-party cookies for several reasons. Some cookies are required for technical 
        reasons in order for our websites to operate, and we refer to these as "essential" or "necessary" cookies. 
        Other cookies also enable us to track and target the interests of our users to enhance the experience on our 
        websites. Third parties serve cookies through our websites for advertising, analytics, and other purposes.
      </p>
      
      <h2 className="text-xl text-white font-bold mt-8 mb-4">Types of cookies we use</h2>
      
      <div className="mb-6 border border-blue-900/30 rounded-lg divide-y divide-blue-900/30">
        <div className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-white">Necessary Cookies</h3>
              <p className="text-gray-400 text-sm">
                These cookies are essential for the website to function properly.
                They cannot be disabled.
              </p>
            </div>
            <div>
              <label className="relative inline-flex items-center cursor-not-allowed">
                <input 
                  type="checkbox" 
                  checked={cookiePreferences.necessary} 
                  className="sr-only peer" 
                  disabled
                />
                <div className="w-11 h-6 bg-blue-600 rounded-full peer"></div>
                <span className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full"></span>
              </label>
            </div>
          </div>
        </div>
        
        <div className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-white">Functional Cookies</h3>
              <p className="text-gray-400 text-sm">
                These cookies enable the website to provide enhanced functionality and personalization.
              </p>
            </div>
            <div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input 
                  type="checkbox" 
                  checked={cookiePreferences.functional} 
                  onChange={() => handleCookieToggle('functional')} 
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
          </div>
        </div>
        
        <div className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-white">Analytics Cookies</h3>
              <p className="text-gray-400 text-sm">
                These cookies help us understand how visitors interact with our website.
              </p>
            </div>
            <div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input 
                  type="checkbox" 
                  checked={cookiePreferences.analytics} 
                  onChange={() => handleCookieToggle('analytics')} 
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
          </div>
        </div>
        
        <div className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-white">Marketing Cookies</h3>
              <p className="text-gray-400 text-sm">
                These cookies are used to track visitors across websites to display relevant advertisements.
              </p>
            </div>
            <div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input 
                  type="checkbox" 
                  checked={cookiePreferences.marketing} 
                  onChange={() => handleCookieToggle('marketing')} 
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex justify-end mb-8">
        <button 
          onClick={handleSavePreferences} 
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors"
        >
          Save Preferences
        </button>
      </div>
      
      <h2 className="text-xl text-white font-bold mt-8 mb-4">Cookie list</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-[#101625]/70 border border-blue-900/30 rounded-lg">
          <thead>
            <tr className="border-b border-blue-900/30">
              <th className="p-3 text-left text-white">Name</th>
              <th className="p-3 text-left text-white">Provider</th>
              <th className="p-3 text-left text-white">Purpose</th>
              <th className="p-3 text-left text-white">Expiry</th>
              <th className="p-3 text-left text-white">Type</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-blue-900/30">
            <tr>
              <td className="p-3 text-gray-300">session_id</td>
              <td className="p-3 text-gray-300">fidesbridge.com</td>
              <td className="p-3 text-gray-300">Preserves user session state across page requests</td>
              <td className="p-3 text-gray-300">Session</td>
              <td className="p-3 text-gray-300">Necessary</td>
            </tr>
            <tr>
              <td className="p-3 text-gray-300">XSRF-TOKEN</td>
              <td className="p-3 text-gray-300">fidesbridge.com</td>
              <td className="p-3 text-gray-300">Ensures visitor browsing security by preventing cross-site request forgery</td>
              <td className="p-3 text-gray-300">1 day</td>
              <td className="p-3 text-gray-300">Necessary</td>
            </tr>
            <tr>
              <td className="p-3 text-gray-300">ui_preferences</td>
              <td className="p-3 text-gray-300">fidesbridge.com</td>
              <td className="p-3 text-gray-300">Stores user interface preferences</td>
              <td className="p-3 text-gray-300">1 year</td>
              <td className="p-3 text-gray-300">Functional</td>
            </tr>
            <tr>
              <td className="p-3 text-gray-300">_ga</td>
              <td className="p-3 text-gray-300">Google</td>
              <td className="p-3 text-gray-300">Registers a unique ID used to generate statistical data</td>
              <td className="p-3 text-gray-300">2 years</td>
              <td className="p-3 text-gray-300">Analytics</td>
            </tr>
            <tr>
              <td className="p-3 text-gray-300">_fbp</td>
              <td className="p-3 text-gray-300">Facebook</td>
              <td className="p-3 text-gray-300">Used by Facebook to deliver advertisements</td>
              <td className="p-3 text-gray-300">3 months</td>
              <td className="p-3 text-gray-300">Marketing</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <h2 className="text-xl text-white font-bold mt-8 mb-4">How to manage cookies</h2>
      <p className="mb-4">
        You can set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, 
        you may still use our website though your access to some functionality and areas of our website may be restricted.
      </p>
      <p className="mb-4">
        The specific way to refuse cookies through your web browser controls varies from browser to browser. 
        Please visit your browser's help menu for more information.
      </p>
      
      <h2 className="text-xl text-white font-bold mt-8 mb-4">Changes to this Cookie Policy</h2>
      <p className="mb-4">
        We may update this Cookie Policy from time to time in order to reflect changes to the cookies we use or for other operational, 
        legal, or regulatory reasons. Please therefore revisit this Cookie Policy regularly to stay informed about our use of cookies 
        and related technologies.
      </p>
      <p className="mb-4">
        The date at the top of this Cookie Policy indicates when it was last updated.
      </p>
      
      <h2 className="text-xl text-white font-bold mt-8 mb-4">Contact us</h2>
      <p className="mb-4">
        If you have any questions about our use of cookies, please contact us at:
      </p>
      <p>
        <strong>Email:</strong> privacy@fidesbridge.com<br />
        <strong>Phone:</strong> +44 20 1234 5678
      </p>
      
      <div className="mt-8 p-4 bg-blue-900/20 rounded-lg">
        <p className="mb-2">
          For more information about data protection and privacy, please see our:
        </p>
        <div className="flex flex-wrap gap-2">
          <Link href="/privacy-policy" className="text-blue-400 hover:text-blue-300">Privacy Policy</Link>
          <span className="text-gray-500">•</span>
          <Link href="/data-protection" className="text-blue-400 hover:text-blue-300">Data Protection</Link>
          <span className="text-gray-500">•</span>
          <Link href="/gdpr" className="text-blue-400 hover:text-blue-300">GDPR Compliance</Link>
        </div>
      </div>
    </PolicyLayout>
  );
} 