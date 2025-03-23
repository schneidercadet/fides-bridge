"use client";

import React, { ReactNode } from 'react';
import Image from 'next/image';

interface BackgroundPatternProps {
  children: ReactNode;
  showHands?: boolean;
  className?: string;
}

const BackgroundPattern = ({ 
  children, 
  showHands = false,
  className = "min-h-screen"
}: BackgroundPatternProps) => {
  return (
    <div className={`relative ${className} flex flex-col overflow-hidden`}>
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F19] via-[#0D1525] to-blue-900/20">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-15"></div>
        
        {/* Hands image background - optional */}
        {showHands && (
          <div className="absolute inset-0 opacity-20">
            <Image
              src="/images/hands.jpg"
              alt="Hands collaboration background"
              fill
              quality={100}
              priority
              className="object-cover mix-blend-overlay"
            />
          </div>
        )}
        
        {/* Bottom darkening gradient for smooth transition */}
        <div className="absolute bottom-0 left-0 right-0 h-72 bg-gradient-to-t from-[#0B0F19] via-[#0B0F19]/90 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative w-full h-full z-10">
        {children}
      </div>
    </div>
  );
};

export default BackgroundPattern; 