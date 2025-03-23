'use client';

import React, { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "glass";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  children: React.ReactNode;
  className?: string;
}

export const Button = ({
  variant = "primary",
  size = "md",
  fullWidth = false,
  children,
  className = "",
  ...props
}: ButtonProps) => {
  const baseStyles = "rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-105 active:scale-100";
  
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 shadow-lg hover:shadow-blue-500/50",
    secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300 active:bg-gray-400 shadow-lg hover:shadow-gray-500/50",
    outline: "border-2 border-blue-600 text-blue-600 hover:bg-blue-50 active:bg-blue-100",
    glass: "backdrop-blur-md bg-white/10 border border-white/20 text-white hover:bg-white/20 active:bg-white/30 shadow-lg"
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-5 py-2 text-base",
    lg: "px-7 py-3 text-lg"
  };

  const classes = twMerge(
    baseStyles,
    variants[variant],
    sizes[size],
    fullWidth ? "w-full" : "",
    className
  );

  return (
    <button 
      className={classes} 
      {...props}
    >
      {children}
    </button>
  );
};
