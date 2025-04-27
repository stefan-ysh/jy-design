"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { getDictionary, Language } from '@/lib/dictionary';

type LanguageContextType = {
  language: Language;
  dictionary: any;
  setLanguage: (lang: Language) => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Cookie helper functions
const setCookie = (name: string, value: string, days: number = 365) => {
  if (typeof document !== 'undefined') {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
  }
};

const getCookie = (name: string): string | null => {
  if (typeof document !== 'undefined') {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
  }
  return null;
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // Add script to document head to initialize language before React hydration
  useEffect(() => {
    const languageScript = `
      (function() {
        function getStoredLanguage() {
          // Get from cookie first
          const cookie = document.cookie.split(';').find(c => c.trim().startsWith('language='));
          if (cookie) {
            const lang = cookie.split('=')[1];
            if (lang === 'zh' || lang === 'en') return lang;
          }
          
          // Default to zh if no valid cookie found
          return 'zh';
        }
        
        // Set html lang attribute based on stored language
        const lang = getStoredLanguage();
        document.documentElement.lang = lang;
        
        // Store this for React to pick up after hydration
        window.__INITIAL_LANGUAGE__ = lang;
      })();
    `;
    
    const scriptElement = document.createTextNode(languageScript);
    const scriptTag = document.createElement('script');
    scriptTag.appendChild(scriptElement);
    document.head.appendChild(scriptTag);
    
    return () => {
      document.head.removeChild(scriptTag);
    };
  }, []);
  
  // Get initial language from window object if available, otherwise use default
  const getInitialLanguage = (): Language => {
    if (typeof window !== 'undefined' && window.__INITIAL_LANGUAGE__) {
      return window.__INITIAL_LANGUAGE__ as Language;
    }
    return 'zh';
  };
  
  // Always initialize with appropriate language
  const [language, setLanguageState] = useState<Language>(getInitialLanguage());
  const [dictionary, setDictionary] = useState(getDictionary(getInitialLanguage()));
  const [mounted, setMounted] = useState(false);
  
  // Initialize from cookie on mount (client-side only)
  useEffect(() => {
    setMounted(true);
    const savedLanguage = getCookie('language');
    if (savedLanguage && (savedLanguage === 'zh' || savedLanguage === 'en')) {
      setLanguageState(savedLanguage as Language);
      setDictionary(getDictionary(savedLanguage as Language));
    }
  }, []);

  // Set language and save to cookie
  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    setDictionary(getDictionary(lang));
    setCookie('language', lang);
    document.documentElement.lang = lang; // Update html lang attribute
  };

  // Avoid hydration mismatch by using the same content during SSR and initial client render
  const contextValue = {
    language, 
    dictionary,
    setLanguage
  };

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
}

// Add declaration for window object
declare global {
  interface Window {
    __INITIAL_LANGUAGE__?: string;
  }
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}