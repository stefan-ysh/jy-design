"use client";

import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "@/components/ui/project-card";
import { getAllProjects } from "@/data/projects";
import { useLanguage } from "@/components/providers/language-provider";

export default function ProjectsPage() {
  const projects = getAllProjects();
  const { dictionary } = useLanguage();

  return (
    <>
      <section className="pt-28 pb-12 bg-theme-hero">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{dictionary.projects.title}</h1>
            <p className="text-lg text-secondary">
              {dictionary.projects.description}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-theme-about">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                slug={project.slug}
                imageUrl={project.imageUrl}
                category={project.category}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
} 