'use client';

import React from 'react';

interface SkeletonProps {
  className?: string;
}

export const Skeleton = ({ className = '' }: SkeletonProps) => {
  return (
    <div className={`animate-pulse bg-gray-700/50 rounded ${className}`} />
  );
};

export const NavbarSkeleton = () => {
  return (
    <div className="fixed w-full top-0 z-50 bg-[#0B0F19]/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <Skeleton className="h-[60px] w-[60px] rounded-full" />
          <div className="hidden md:flex items-center space-x-8">
            {[1, 2, 3, 4].map((i) => (
              <Skeleton key={i} className="h-4 w-20" />
            ))}
          </div>
          <div className="flex items-center space-x-4">
            <Skeleton className="h-10 w-24 rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export const HeroSkeleton = () => {
  return (
    <div className="relative min-h-[80vh] flex flex-col">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center pt-32">
        <Skeleton className="h-8 w-48 rounded-full mb-8" />
        <Skeleton className="h-20 w-3/4 mb-4" />
        <Skeleton className="h-20 w-1/2 mb-8" />
        <Skeleton className="h-6 w-96 mb-12" />
        <div className="w-full max-w-2xl">
          <Skeleton className="h-14 w-full rounded-lg" />
        </div>
      </div>
    </div>
  );
};
