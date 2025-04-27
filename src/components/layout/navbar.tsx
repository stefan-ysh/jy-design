"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import ThemeToggle from "@/components/ui/theme-toggle";
import LanguageSwitch from "@/components/ui/language-switch";
import { useLanguage } from "@/components/providers/language-provider";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { language, dictionary } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { 
      name: dictionary.navigation.home, 
      path: "/" 
    },
    { 
      name: dictionary.navigation.about, 
      path: "/about" 
    },
    { 
      name: dictionary.navigation.projects, 
      path: "/projects" 
    },
    { 
      name: dictionary.navigation.contact, 
      path: "/contact" 
    },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        scrolled
          ? "bg-theme-navbar backdrop-blur-sm shadow-md py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-primary hover:opacity-80 transition-colors"
        >
          JY Design
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center">
          <nav className="flex space-x-8 mr-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:opacity-80",
                  pathname === link.path
                    ? "text-primary font-semibold"
                    : "text-secondary"
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          
          <div className="flex items-center space-x-2">
            <LanguageSwitch />
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-2">
          <LanguageSwitch />
          <ThemeToggle />
          <button
            className="p-2 rounded-md hover:bg-theme-hover transition-colors text-primary"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-theme-menu shadow-lg">
          <nav className="flex flex-col py-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={cn(
                  "px-4 py-3 text-sm font-medium transition-colors hover:opacity-80 hover:bg-theme-hover",
                  pathname === link.path
                    ? "text-primary font-semibold"
                    : "text-secondary"
                )}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar; 