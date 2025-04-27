import React from "react";

import { StarRating } from "./star-rating";

interface SkillProps {
  name: string;
  level: number;
  className?: string;
}

export function SkillLevel({ name, level, className }: SkillProps) {
  return (
    <div className={`flex items-center justify-between ${className}`}>
      <span className="font-medium">{name}</span>
      <StarRating rating={level} showText={true} />
    </div>
  );
}

export function SkillsList({ skills }: { skills: { name: string; level: number }[] }) {
  return (
    <div className="space-y-2">
      {skills.map((skill, index) => (
        <SkillLevel 
          key={index} 
          name={skill.name} 
          level={skill.level} 
        />
      ))}
    </div>
  );
} 