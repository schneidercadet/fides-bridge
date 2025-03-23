import React from "react";
import { Button } from "@/Components/ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface SubscribeButtonProps {
  className?: string;
  size?: "default" | "sm" | "lg";
  variant?: "primary" | "outline" | "gradient";
  icon?: React.ReactNode;
  children?: React.ReactNode;
}

const SubscribeButton = ({ 
  className, 
  size = "default", 
  variant = "primary",
  icon = <ArrowRight size={18} />,
  children,
  ...props 
}: SubscribeButtonProps & React.ComponentProps<"button">) => {
  const baseStyles = "rounded-full flex items-center justify-center transition-all";
  
  const sizeStyles = {
    default: children ? "h-10 px-5 py-2 text-sm" : "h-10 w-10 p-2",
    sm: children ? "h-8 px-4 py-1.5 text-xs" : "h-8 w-8 p-1.5",
    lg: children ? "h-12 px-8 py-2.5 text-base" : "h-12 w-12 p-2.5",
  };
  
  const variantStyles = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    outline: "bg-transparent border border-gray-700 text-white hover:bg-gray-800",
    gradient: "relative rounded-full bg-white text-gray-900 font-medium shadow-lg transition-colors duration-300 hover:bg-[#0B0F19] hover:text-white",
  };

  if (variant === 'gradient') {
    const buttonContent = (
      <>
        {children ? (
          <>
            <span>{children}</span>
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
          </>
        ) : (
          icon
        )}
      </>
    );

    const buttonClasses = cn(
      baseStyles,
      sizeStyles[size],
      variantStyles[variant],
      className
    );

    const wrapperClasses = "rounded-full p-[2px] before:content-[''] before:absolute before:inset-0 before:rounded-full before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100 before:bg-gradient-to-r before:from-blue-500 before:to-blue-300 relative inline-block";

    return (
      <div className={wrapperClasses}>
        <Button
          className={buttonClasses}
          type="submit"
          aria-label={children ? undefined : "Subscribe"}
          {...props}
        >
          {buttonContent}
        </Button>
      </div>
    );
  }
  
  return (
    <Button
      className={cn(
        baseStyles,
        sizeStyles[size],
        variantStyles[variant],
        className
      )}
      type="submit"
      aria-label={children ? undefined : "Subscribe"}
      {...props}
    >
      {children || icon}
    </Button>
  );
};

export { SubscribeButton }; 