"use client";

import { Dribbble, Instagram, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import React from "react";
import { useLanguage } from "@/components/providers/language-provider";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { dictionary } = useLanguage();

  return (
    <footer className="bg-theme-footer pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <Link href="/" className="text-xl font-bold tracking-tight mb-4 block">
              JY Design
            </Link>
            <p className="text-secondary max-w-md">
              {dictionary.footer.site_description}
            </p>
          </div>
          
          <div>
            <h3 className="font-medium text-sm mb-4 uppercase tracking-wider">{dictionary.footer.site_nav}</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-secondary hover:text-primary transition-colors">
                  {dictionary.navigation.home}
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-secondary hover:text-primary transition-colors">
                  {dictionary.navigation.about}
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-secondary hover:text-primary transition-colors">
                  {dictionary.navigation.projects}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-secondary hover:text-primary transition-colors">
                  {dictionary.navigation.contact}
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-sm mb-4 uppercase tracking-wider">{dictionary.footer.contact_info}</h3>
            <div className="flex space-x-4 mb-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-secondary hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://dribbble.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-secondary hover:text-primary transition-colors"
                aria-label="Dribbble"
              >
                <Dribbble className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-secondary hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="mailto:contact@jydesign.com"
                className="text-secondary hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
            <p className="text-secondary text-sm">
              contact@jydesign.com
            </p>
          </div>
        </div>
        
        <div className="border-t border-theme pt-8 text-center text-sm text-secondary">
          <p>© {currentYear} JY Design. {dictionary.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 