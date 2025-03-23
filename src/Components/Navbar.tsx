"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import HamburgerButton from "@/Components/ui/hamburger-button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0B0F19]/90 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-4">
              <Image
                src="/images/fideslogo.png"
                alt="Fides Bridge Logo"
                width={70}
                height={70}
                className="drop-shadow-md"
              />
              <Image
                src="/images/fides-text.png"
                alt="Fides Bridge"
                width={180}
                height={28}
                className="drop-shadow-sm"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden min-[929px]:flex items-center space-x-8">
            <NavLink href="/about">About Us</NavLink>
            <NavLink href="/jobs">Jobs</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </div>

          {/* Mobile menu button with HamburgerButton component */}
          <div className="min-[929px]:hidden flex items-center">
            <HamburgerButton 
              isOpen={mobileMenuOpen} 
              onToggle={toggleMobileMenu}
            />
          </div>
        </div>

        {/* Mobile menu - enhanced design */}
        {mobileMenuOpen && (
          <div className="min-[929px]:hidden mt-4 rounded-2xl overflow-hidden bg-gradient-to-b from-[#101625] to-[#0B0F19] border border-blue-900/20 shadow-xl backdrop-blur-sm">
            <div className="flex flex-col p-4">
              <MobileNavLink href="/about">About Us</MobileNavLink>
              <MobileNavLink href="/jobs">Jobs</MobileNavLink>
              <MobileNavLink href="/contact">Contact</MobileNavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <Link
    href={href}
    className="group relative text-white hover:text-blue-300 transition-colors duration-200 text-sm font-medium flex items-center overflow-hidden px-1 py-2"
  >
    <span>{children}</span>
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 group-hover:w-full transition-all duration-300"></span>
  </Link>
);

const MobileNavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <Link
    href={href}
    className="text-gray-200 hover:text-blue-300 transition-all duration-200 text-sm font-medium py-2 px-3 rounded-lg hover:bg-blue-600/10 flex items-center"
  >
    {children}
  </Link>
);

export default Navbar;
