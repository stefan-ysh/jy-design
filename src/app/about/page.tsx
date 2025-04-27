"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useProfile } from "@/data/profile";
import anime from "animejs/lib/anime.es.js";
import { useLanguage } from "@/components/providers/language-provider";
import { SkillsList } from "@/components/ui/skill-level";

export default function AboutPage() {
  const { dictionary } = useLanguage();
  const profile = useProfile();
  
  useEffect(() => {
    anime({
      targets: '.skill-bar',
      width: function(el: HTMLElement) {
        return el.getAttribute('data-level') + '%';
      },
      easing: 'easeInOutQuart',
      duration: 1000,
      delay: anime.stagger(100)
    });
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="pt-20 pb-20 bg-theme-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              {dictionary.about.title}
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-theme-profile-card shadow-lg rounded-xl p-8 mb-12"
            >
              <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                <div className="w-48 h-48 relative rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={profile.photo}
                    alt={profile.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 192px, 192px"
                  />
                </div>
                <div className="text-left">
                  <h2 className="text-2xl font-bold mb-2">{profile.name}</h2>
                  <p className="text-lg text-secondary mb-4">{profile.role}</p>
                  <div className="space-y-4">
                    {profile.bio.map((paragraph, index) => (
                      <p key={index} className="text-secondary">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-theme-about">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-12 text-center"
          >
            {dictionary.about.skills_title}
          </motion.h2>
          
          <div className="max-w-3xl mx-auto">
            <SkillsList 
              skills={profile.skills.map(skill => ({
                name: skill.name,
                level: skill.level / 2 // 转换为5星制 (原值是10分制)
              }))}
            />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-theme-projects">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-12 text-center"
          >
            {dictionary.about.experience_title}
          </motion.h2>
          
          <div className="max-w-3xl mx-auto">
            {profile.experiences.map((experience, index) => (
              <motion.div
                key={experience.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-8 pb-12 last:pb-0 border-l border-theme-timeline last:border-transparent"
              >
                <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-theme-timeline-dot"></div>
                <div className="bg-theme-experience-card p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-2">{experience.position}</h3>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-secondary">{experience.company}</span>
                    <span className="text-sm bg-theme-experience-period px-3 py-1 rounded-full">{experience.period}</span>
                  </div>
                  <p className="text-secondary">{experience.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 bg-theme-about">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-6 text-center"
          >
            {dictionary.about.education_title}
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-3xl mx-auto mb-10 text-center"
          >
            {dictionary.about.education_intro.map((paragraph: string, index: number) => (
              <p key={index} className={`text-secondary ${index < dictionary.about.education_intro.length - 1 ? 'mb-4' : ''}`}>
                {paragraph}
              </p>
            ))}
          </motion.div>
          
          <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {profile.education.map((edu, index) => (
              <motion.div
                key={edu.institution + edu.degree}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-theme-edu-card p-6 rounded-lg"
              >
                <h3 className="text-lg font-bold mb-2">{edu.institution}</h3>
                <p className="text-secondary mb-2">{edu.degree}</p>
                <p className="text-sm text-secondary opacity-75">{edu.period}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
} 