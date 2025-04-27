"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import ProjectCard from "@/components/ui/project-card";
import { getFeaturedProjects } from "@/data/projects";
import { useProfile } from "@/data/profile";
// @ts-ignore - anime.js doesn't have proper TypeScript typings despite installing @types/animejs
import anime from "animejs/lib/anime.es.js";
import { useLanguage } from "@/components/providers/language-provider";

export default function Home() {
  const featuredProjects = getFeaturedProjects();
  const profile = useProfile();
  const heroRef = useRef<HTMLDivElement>(null);
  const { dictionary } = useLanguage();

  useEffect(() => {
    if (heroRef.current) {
      anime({
        targets: ".hero-text",
        opacity: [0, 1],
        translateY: [20, 0],
        delay: anime.stagger(200, { start: 300 }),
        easing: "easeOutExpo",
        duration: 1000,
      });

      anime({
        targets: ".hero-image",
        opacity: [0, 1],
        scale: [0.9, 1],
        easing: "easeOutExpo",
        duration: 1500,
        delay: 500,
      });
    }
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-[90vh] flex items-center overflow-hidden bg-theme-hero"
      >
        <div className="container mx-auto px-4 py-20 md:py-32 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 z-10">
            <h2 className="hero-text text-sm font-medium text-secondary mb-3">
              {dictionary.home.greeting}
            </h2>
            <h1 className="hero-text text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              {profile.name}
            </h1>
            <p className="hero-text text-xl md:text-2xl lg:text-3xl text-secondary mb-6">
              {dictionary.home.role}
            </p>
            <p className="hero-text text-base md:text-lg text-secondary mb-8 max-w-md">
              {profile.bio[0]}
            </p>
            <div className="hero-text flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg">
                <Link href="/projects">{dictionary.home.browse_portfolio}</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">{dictionary.home.contact}</Link>
              </Button>
            </div>
          </div>
          <div className="hero-image md:w-1/2 mt-12 md:mt-0">
            <div className="relative w-[280px] md:w-[400px] aspect-[3/4] mx-auto">
              <Image
                src={profile.photo}
                alt={profile.name}
                fill
                priority
                className="object-cover rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div 
          className="absolute -bottom-32 -right-32 w-80 h-80 rounded-full filter blur-3xl opacity-30" 
          style={{ background: `linear-gradient(to bottom right, var(--gradient-1-from), var(--gradient-1-to))` }}
        ></div>
        <div 
          className="absolute -top-32 -left-32 w-80 h-80 rounded-full filter blur-3xl opacity-30"
          style={{ background: `linear-gradient(to bottom right, var(--gradient-2-from), var(--gradient-2-to))` }}
        ></div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-theme-about">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl font-bold mb-6">{dictionary.about.title}</h2>
            <p className="text-lg text-secondary mb-4">
              {profile.bio[1]}
            </p>
            <p className="text-lg text-secondary mb-8">
              {profile.bio[2]}
            </p>
            <Button asChild variant="outline">
              <Link href="/about">{dictionary.home.learn_more}</Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-5 gap-6"
          >
            {profile.skills.slice(0, 5).map((skill, index) => (
              <div
                key={skill.name}
                className="bg-theme-skill rounded-lg p-4 text-center"
              >
                <div className="text-xl font-bold mb-1">{skill.level}/10</div>
                <div className="text-sm text-secondary">
                  {skill.name}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 bg-theme-projects">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl font-bold mb-6">{dictionary.home.featured_projects}</h2>
            <p className="text-lg text-secondary">
              {dictionary.home.featured_description}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
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

          <div className="text-center mt-12">
            <Button asChild>
              <Link href="/projects">{dictionary.home.view_all}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-theme-cta text-theme-cta">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="container mx-auto px-4 text-center"
        >
          <h2 className="text-3xl font-bold mb-6">{dictionary.home.cta_title}</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            {dictionary.home.cta_description}
          </p>
          <Button
            asChild
            size="lg"
            variant="secondary"
          >
            <Link href="/contact">{dictionary.home.contact}</Link>
          </Button>
        </motion.div>
      </section>
    </>
  );
}
