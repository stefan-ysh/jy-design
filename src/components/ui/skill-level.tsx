import React from "react";
import { motion } from "framer-motion";
import { StarRating } from "./star-rating";
import { cn } from "@/lib/utils";

interface SkillProps {
  name: string;
  level: number;
  className?: string;
}

export function SkillLevel({ name, level, className }: SkillProps) {
  return (
    <div className={cn("flex items-center justify-between py-3 px-4 rounded-lg hover:bg-theme-skill/30 transition-colors", className)}>
      <span className="font-medium">{name}</span>
      <StarRating rating={level} showText={true} />
    </div>
  );
}

export function SkillsList({ skills }: { skills: { name: string; level: number }[] }) {
  return (
    <div className="space-y-2 divide-y divide-theme-divider">
      {skills.map((skill, index) => (
        <motion.div
          key={index} 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: index * 0.05 }}
        >
          <SkillLevel
            name={skill.name} 
            level={skill.level}
          />
        </motion.div>
      ))}
    </div>
  );
} 