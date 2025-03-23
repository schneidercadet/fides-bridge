"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  isTransparent?: boolean;
  delay?: number;
}

// Reusable testimonial card
const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  name, 
  role, 
  content, 
  isTransparent = false,
  delay = 0 
}) => {
  return (
    <div 
      data-aos="fade-up"
      data-aos-delay={delay}
      className={`relative p-8 rounded-2xl transition-all duration-300 min-w-[300px] max-w-[350px] min-h-[300px] flex flex-col ${
        isTransparent 
          ? "bg-transparent border border-gray-800/40" 
          : "bg-[#161C2D]/95 backdrop-blur-sm border border-gray-800/30"
      }`}
    >
      {/* Star rating */}
      <div className="flex space-x-1 mb-6">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="text-blue-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
        ))}
      </div>
      
      {/* Testimonial content */}
      <p className="text-white/90 text-base leading-relaxed mb-6 flex-grow">
        {content}
      </p>
      
      {/* Name and role */}
      <div className="mt-auto">
        <h4 className="font-medium text-white text-lg">{name}</h4>
        <p className="text-blue-300/80 text-sm">{role}</p>
      </div>
    </div>
  );
};

const TestimonialSection = () => {
  const testimonials = [
    // Candidates
    {
      name: "David S.",
      role: "IT Manager at Deloitte",
      content: "Fides Bridge exceeded my expectations in every aspect. From the moment I created my profile, I received valuable insights and guidance through their career resources. The platform's intuitive search filters allowed me to narrow down my options and discover opportunities that aligned with my desired work environment."
    },
    {
      name: "Sophia L.",
      role: "Software Engineer at Google",
      content: "As a recent graduate, I was overwhelmed by the job market. However, Fides Bridge made the process less daunting and helped me navigate through numerous opportunities. Their approach to showcase my skills attracted the attention of employers, resulting in multiple interview invitations."
    },
    {
      name: "Jennifer W.",
      role: "UX Designer at Adobe",
      content: "Fides Bridge truly delivers on its promise of creating meaningful connections. Their personalized approach and industry expertise helped me find not just any job, but one that utilizes my skills and also fulfills my sense of purpose."
    },
    {
      name: "Schneider C.",
      role: "Front-end Developer at Shopify",
      content: "After years of freelancing, I wanted to join a company where I could grow my skills. Fides Bridge understood exactly what I was looking for and connected me with Shopify. The matching process was spot-on, and I'm now part of an amazing team that values my contributions."
    },
    {
      name: "Amelia R.",
      role: "Nurse RN at Mayo Clinic",
      content: "Finding a position in specialized healthcare can be challenging, but Fides Bridge made it seamless. Their industry-specific knowledge and connections opened doors I didn't even know existed. I'm now in a role at Mayo Clinic that allows me to make a real difference."
    },
    // Employers
    {
      name: "Michael H.",
      role: "Hiring Manager at Microsoft",
      content: "Fides Bridge transformed our recruitment process. Their commitment to understanding our company culture ensured that every candidate we interviewed was not just qualified, but a potential cultural fit. This has dramatically reduced our time-to-hire."
    },
    {
      name: "James T.",
      role: "CEO of Goldman Sachs",
      content: "What sets Fides Bridge apart is their dedication to finding the right match. They've helped us build a team of finance professionals who share our vision and values, leading to improved retention rates and team cohesion."
    },
    {
      name: "Sarah P.",
      role: "HR Director at Johnson & Johnson",
      content: "Working with Fides Bridge has been refreshingly different. They take the time to understand our specific needs and consistently present candidates who exceed our expectations. Their industry expertise in healthcare recruitment is unmatched."
    },
    {
      name: "Dr. Alexander K.",
      role: "Bio Chemist at Pfizer",
      content: "As a specialized researcher, I was looking for opportunities that would allow me to continue my work in vaccine development. Fides Bridge connected me with Pfizer at exactly the right time, and I'm now leading a team doing breakthrough research."
    },
    {
      name: "Elizabeth M.",
      role: "Operations Manager at Amazon",
      content: "The quality of candidates from Fides Bridge has consistently impressed us. Their thorough vetting process saves us valuable time and resources, allowing us to focus on strategic growth rather than endless interviews."
    }
  ];

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      const scrollElement = scrollRef.current;
      
      // Create a truly infinite carousel by detecting when to reset
      const handleScroll = () => {
        const { scrollLeft, scrollWidth, clientWidth } = scrollElement;
        
        // When we've scrolled 1/4 of the way through the duplicated content,
        // reset back to the first 1/4 position to create a seamless loop
        const resetPoint = scrollWidth / 2;
        
        if (scrollLeft >= resetPoint) {
          // Disable animation temporarily
          scrollElement.style.scrollBehavior = 'auto';
          // Jump back to the start of the duplicated section
          scrollElement.scrollLeft = scrollLeft - resetPoint;
          // Re-enable smooth scrolling
          setTimeout(() => {
            scrollElement.style.scrollBehavior = 'smooth';
          }, 10);
        }
      };
      
      // Automatic scrolling animation
      let scrollPos = scrollElement.scrollLeft;
      
      const scrollAnimation = () => {
        // Increment scroll position
        scrollPos += 1;
        scrollElement.scrollLeft = scrollPos;
        
        // Check if we need to reset (handleScroll will reset if needed)
        handleScroll();
      };
      
      // Listen to scroll events to handle manual scrolling as well
      scrollElement.addEventListener('scroll', handleScroll);
      
      // Set up the automatic scrolling
      const animationInterval = setInterval(scrollAnimation, 20);
      
      return () => {
        clearInterval(animationInterval);
        scrollElement.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  // Create a continuous loop of cards by tripling the testimonials
  // This ensures smooth infinite scrolling with no visible reset
  const displayTestimonials = [...testimonials, ...testimonials, ...testimonials, ...testimonials];

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-[#0E2D5F] to-[#070A12]">
      {/* Gradient overlay pattern */}
      <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="text-blue-400 font-medium mb-3 uppercase tracking-wider text-sm" data-aos="fade-up">
            TESTIMONIALS
          </div>
          
          <h2 
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Our happy users <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">say about us</span>
          </h2>
          
          <p 
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-gray-300 text-lg max-w-3xl mx-auto"
          >
            We are grateful to our users for their kind words and testimonials.
            Their success stories motivate us to continually improve our platform
            and provide the best possible job search experience for every user.
          </p>
        </div>
        
        {/* Infinite scrolling testimonials */}
        <div className="relative overflow-hidden mx-[-5vw] sm:mx-[-10vw] md:mx-[-15vw] lg:mx-[-20vw]">
          <div 
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto py-8 scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <div className="flex gap-6 flex-nowrap pl-[5vw] sm:pl-[10vw] md:pl-[15vw] lg:pl-[20vw]">
              {displayTestimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={`${testimonial.name}-${index}`}
                  name={testimonial.name}
                  role={testimonial.role}
                  content={testimonial.content}
                  isTransparent={index % 2 === 1}
                  delay={100 * (index % testimonials.length)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default TestimonialSection; 