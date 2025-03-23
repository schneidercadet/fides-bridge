"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface PrimaryButtonProps {
  href?: string;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

const PrimaryButton = ({
  href,
  className,
  children,
  onClick,
  type = "button",
  ...props
}: PrimaryButtonProps & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "type">) => {
  const buttonClasses = cn(
    "rounded-full px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-medium shadow-lg",
    "hover:shadow-blue-500/20 hover:from-blue-500 hover:to-blue-600 transition-all",
    className
  );

  if (href) {
    return (
      <Link href={href} className={buttonClasses} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button 
      type={type} 
      className={buttonClasses}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export { PrimaryButton }; 