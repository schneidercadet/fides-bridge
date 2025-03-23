"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface GradientBorderButtonProps {
  href?: string;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  showArrow?: boolean;
}

const GradientBorderButton = ({
  href,
  className,
  children,
  onClick,
  type = "button",
  showArrow = true,
  ...props
}: GradientBorderButtonProps & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "type">) => {
  const buttonContent = (
    <>
      <span>{children}</span>
      {showArrow && (
        <svg className="ml-2 h-4 w-4" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="arrowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#9CA3AF" />
            </linearGradient>
          </defs>
          <path 
            d="M5 12h14M12 5l7 7-7 7" 
            stroke="url(#arrowGradient)" 
            strokeWidth="3" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            fill="none"
          />
        </svg>
      )}
    </>
  );

  const buttonClasses = cn(
    "relative rounded-full px-6 py-3 bg-white text-gray-900 font-medium shadow-lg transition-colors duration-300 hover:bg-[#0B0F19] hover:text-white flex items-center justify-center",
    className
  );

  const wrapperClasses = "rounded-full p-[2px] before:content-[''] before:absolute before:inset-0 before:rounded-full before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100 before:bg-gradient-to-r before:from-blue-500 before:to-blue-300 relative inline-block";

  if (href) {
    return (
      <div className={wrapperClasses}>
        <Link href={href} className={buttonClasses} {...props}>
          {buttonContent}
        </Link>
      </div>
    );
  }

  return (
    <div className={wrapperClasses}>
      <button 
        type={type} 
        className={buttonClasses}
        onClick={onClick}
        {...props}
      >
        {buttonContent}
      </button>
    </div>
  );
};

export { GradientBorderButton }; 