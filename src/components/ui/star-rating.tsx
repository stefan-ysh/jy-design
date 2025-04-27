import { cn } from "@/lib/utils";
import { Star, StarHalf } from "lucide-react";
import React from "react";

interface StarRatingProps {
  rating: number; // Rating from 0 to 5
  maxStars?: number; // Maximum number of stars to display (default: 5)
  size?: "sm" | "md" | "lg"; // Size of stars
  color?: string; // Color of filled stars
  className?: string; // Additional CSS classes
  showText?: boolean; // Whether to display the text label
}

const sizeMap = {
  sm: {
    starSize: 16,
    className: "gap-0.5",
  },
  md: {
    starSize: 20,
    className: "gap-1",
  },
  lg: {
    starSize: 24,
    className: "gap-1.5",
  },
};

export function StarRating({
  rating,
  maxStars = 5,
  size = "md",
  color = "text-yellow-400",
  className,
  showText = false,
}: StarRatingProps) {
  // Ensure rating is within bounds
  const clampedRating = Math.max(0, Math.min(rating, maxStars));
  
  const { starSize, className: sizeClassName } = sizeMap[size];
  
  // Get skill level text based on rating
  const getSkillLevelText = (rating: number) => {
    if (rating <= 1) return "初级";
    if (rating <= 2) return "基础";
    if (rating <= 3) return "中级";
    if (rating <= 4) return "熟练";
    return "专家";
  };

  return (
    <div className={cn("flex items-center", className)}>
      <div className={cn("flex", sizeClassName)}>
        {Array.from({ length: maxStars }).map((_, i) => {
          const starValue = i + 1;
          
          // For full stars
          if (starValue <= clampedRating) {
            return (
              <Star
                key={i}
                size={starSize}
                className={cn("fill-current", color)}
              />
            );
          }
          
          // For half stars
          if (starValue - 0.5 <= clampedRating) {
            return (
              <StarHalf
                key={i}
                size={starSize}
                className={cn("fill-current", color)}
              />
            );
          }
          
          // For empty stars
          return (
            <Star
              key={i}
              size={starSize}
              className="text-gray-300"
            />
          );
        })}
      </div>
      
      {showText && (
        <span className="ml-2 text-sm font-medium">
          {getSkillLevelText(clampedRating)}
        </span>
      )}
    </div>
  );
} 