"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import anime from "animejs/lib/anime.es.js";

interface ProjectCardProps {
  title: string;
  description: string;
  slug: string;
  imageUrl: string;
  category: string;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  slug,
  imageUrl,
  category,
  index,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  // Animation on hover
  const handleMouseEnter = () => {
    if (imageRef.current) {
      anime({
        targets: imageRef.current,
        scale: 1.05,
        duration: 800,
        easing: "easeOutExpo",
      });
    }
  };

  const handleMouseLeave = () => {
    if (imageRef.current) {
      anime({
        targets: imageRef.current,
        scale: 1,
        duration: 800,
        easing: "easeOutExpo",
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <Link href={`/projects/${slug}`}>
        <div
          ref={cardRef}
          className="overflow-hidden rounded-lg bg-theme-card transition-all duration-500 hover:shadow-lg"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div ref={imageRef} className="relative aspect-[4/3] w-full overflow-hidden">
            <Image
              src={imageUrl}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
              priority={index < 4}
            />
          </div>
          <div className="p-6">
            <div className="mb-2">
              <span className="inline-block text-xs font-medium text-secondary uppercase tracking-wider">
                {category}
              </span>
            </div>
            <h3 className="text-lg font-medium mb-2 text-primary group-hover:opacity-80 transition-colors">
              {title}
            </h3>
            <p className="text-sm text-secondary line-clamp-2">
              {description}
            </p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard; 