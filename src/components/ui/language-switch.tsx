"use client";

import React, { useState, useEffect } from "react";
import { Globe } from "lucide-react";
import { useLanguage } from "@/components/providers/language-provider";

const LanguageSwitch = () => {
  const { language, setLanguage } = useLanguage();
  const [mounted, setMounted] = useState(false);
  
  // Only show the correct UI state after hydration to prevent mismatch
  useEffect(() => {
    setMounted(true);
  }, []);
  
  const toggleLanguage = () => {
    // Add transition class for smoother changes
    document.body.classList.add('transition-theme');
    
    const newLang = language === 'en' ? 'zh' : 'en';
    
    // Update HTML lang attribute right away
    document.documentElement.lang = newLang;
    
    // Set language through context
    setLanguage(newLang);
    
    // Remove transition class after change is complete
    setTimeout(() => {
      document.body.classList.remove('transition-theme');
    }, 300);
  };

  // During SSR and first client render, don't show language-specific content
  if (!mounted) {
    return (
      <button
        className="p-2 rounded-md hover:bg-theme-hover transition-colors"
        aria-label="Toggle language"
      >
        <Globe className="h-5 w-5" />
      </button>
    );
  }

  return (
    <button
      onClick={toggleLanguage}
      className="p-2 rounded-md hover:bg-theme-hover transition-colors cursor-pointer"
      aria-label="Toggle language"
    >
      <span className="text-sm">{language === 'en' ? "中文" : "EN"}</span>
    </button>
  );
};

export default LanguageSwitch; 