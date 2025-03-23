"use client";

import React, { useRef, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { cn } from '@/lib/utils';

// Import Lottie dynamically with SSR disabled
const Lottie = dynamic(() => import('lottie-react'), { 
  ssr: false,
  loading: () => <div className="w-8 h-8" /> // Simple placeholder while loading
});

interface HamburgerButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isOpen: boolean;
  onToggle: () => void;
  className?: string;
  lottieClassName?: string;
  barClassName?: string;
}

export function HamburgerButton({
  isOpen,
  onToggle,
  className,
  lottieClassName,
  barClassName,
  ...props
}: HamburgerButtonProps) {
  const lottieRef = useRef<any>(null);
  const [isMounted, setIsMounted] = useState(false);
  
  // Set mounted state once component is mounted on client
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Control Lottie animation based on menu state
  useEffect(() => {
    if (lottieRef.current && isMounted) {
      if (isOpen) {
        // Play animation forward (hamburger to X)
        lottieRef.current.setDirection(1);
        lottieRef.current.play();
      } else {
        // Play animation backward (X to hamburger)
        lottieRef.current.setDirection(-1);
        lottieRef.current.play();
      }
    }
  }, [isOpen, isMounted]);

  // Get animation data only on client side
  const [animationData, setAnimationData] = useState<any>(null);
  
  useEffect(() => {
    // Only load the animation data on the client
    if (typeof window !== 'undefined') {
      import('/public/assets/hamburger.json')
        .then(data => setAnimationData(data.default))
        .catch(err => console.error('Failed to load animation:', err));
    }
  }, []);

  return (
    <button
      onClick={onToggle}
      className={cn(
        "text-white hover:text-blue-300 transition-colors duration-300 w-8 h-8 flex items-center justify-center",
        className
      )}
      aria-label={isOpen ? "Close menu" : "Open menu"}
      type="button"
      {...props}
    >
      {isOpen ? (
        // Single bar when menu is open
        <div className={cn("w-5 h-0.5 bg-blue-400 rounded transition-all duration-300", barClassName)}></div>
      ) : (
        // Lottie animation when menu is closed
        <div className={cn("w-8 h-8", lottieClassName)}>
          {isMounted && animationData && (
            <Lottie
              lottieRef={lottieRef}
              animationData={animationData}
              loop={false}
              autoplay={false}
              style={{ width: '100%', height: '100%' }}
            />
          )}
        </div>
      )}
    </button>
  );
}

export default HamburgerButton; 