"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

const ThemeToggle = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Only run on client after hydration to avoid mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    // Apply a smooth transition class before changing theme
    document.documentElement.classList.add('transition-theme');
    
    // Get the actual theme (resolvedTheme handles 'system' preference)
    const newTheme = resolvedTheme === "dark" ? "light" : "dark";
    
    // Update local storage instantly to prevent flashes on reload
    localStorage.setItem('theme', newTheme);
    
    // Apply the theme change
    setTheme(newTheme);
    
    // Remove transition class after the change completes
    setTimeout(() => {
      document.documentElement.classList.remove('transition-theme');
    }, 300);
  };

  // During SSR and first client render, show a placeholder that matches current theme
  if (!mounted) {
    return (
      <button
        className="p-2 rounded-md hover:bg-theme-hover transition-colors"
        aria-label="Toggle theme"
      >
        <div className="w-5 h-5" />
      </button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-md hover:bg-theme-hover transition-colors"
      aria-label="Toggle theme"
    >
      {resolvedTheme === "dark" ? (
        <Sun className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
    </button>
  );
};

export default ThemeToggle; 