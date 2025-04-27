"use client";

import React, { useState, useEffect } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

// Use a simple type that doesn't conflict with next-themes internal types
type ThemeProviderProps = {
  children: React.ReactNode;
  [key: string]: any;
};

export function ThemeProvider({ 
  children,
  ...props
}: ThemeProviderProps) {
  // This helps prevent hydration mismatch by not rendering anything
  // until the client-side JavaScript is executed
  const [mounted, setMounted] = useState(false);

  // Add script to prevent theme flickering
  useEffect(() => {
    // Insert script to handle theme before page load
    const themeScript = `
      (function() {
        function getThemePreference() {
          const storedTheme = window.localStorage.getItem('theme');
          if (storedTheme) return storedTheme;
          
          const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
          return prefersDark ? 'dark' : 'light';
        }
        
        const theme = getThemePreference();
        const root = document.documentElement;
        
        if (theme === 'dark') {
          root.classList.add('dark');
        } else {
          root.classList.remove('dark');
        }
        
        // Prevent transition flicker
        root.style.colorScheme = theme;
      })();
    `;
    
    // Create and append script to head
    const scriptElement = document.createTextNode(themeScript);
    const scriptTag = document.createElement('script');
    scriptTag.appendChild(scriptElement);
    document.head.appendChild(scriptTag);
    
    setMounted(true);
    
    // Cleanup function
    return () => {
      document.head.removeChild(scriptTag);
    };
  }, []);

  // During SSR and until first client render, render children without theme context
  if (!mounted) {
    return <>{children}</>;
  }
  
  return (
    <NextThemesProvider {...props}>
      {children}
    </NextThemesProvider>
  );
} 