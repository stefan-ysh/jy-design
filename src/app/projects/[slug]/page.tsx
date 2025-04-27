"use client";

import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, Tag, Building } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import ProjectCard from "@/components/ui/project-card";
import { getProjectBySlug, getRelatedProjects } from "@/data/projects";

type ParamsWithSlug = Promise<{
  slug: string;
}>;

interface ProjectDetailPageProps {
  params: ParamsWithSlug;
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = React.use(params);
  const project = getProjectBySlug(slug);
  
  if (!project) {
    notFound();
  }
  
  const relatedProjects = getRelatedProjects(slug);
  
  return (
    <>
      {/* Project Hero */}
      <section className="pt-28 pb-16 bg-neutral-50 dark:bg-neutral-950">
        <div className="container mx-auto px-4">
          <Button asChild variant="outline" className="mb-8">
            <Link href="/projects" className="flex items-center gap-2">
              <ArrowLeft size={16} />
              返回所有项目
            </Link>
          </Button>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{project.title}</h1>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                <Building size={16} />
                <span>{project.client}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                <Clock size={16} />
                <span>{project.date}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                <Tag size={16} />
                <span>{project.category}</span>
              </div>
            </div>
            
            <p className="text-lg text-neutral-700 dark:text-neutral-300 mb-10">
              {project.description}
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Project Main Image */}
      <section className="py-12 bg-white ">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative aspect-video max-w-5xl mx-auto overflow-hidden rounded-xl shadow-xl"
          >
            <Image 
              src={project.imageUrl}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
              priority
            />
          </motion.div>
        </div>
      </section>
      
      {/* Project Details */}
      <section className="py-16 bg-white ">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="prose prose-lg dark:prose-invert max-w-none"
            >
              {project.fullDescription.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-12"
            >
              <h3 className="text-xl font-bold mb-4">使用技术和标签</h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span 
                    key={tag} 
                    className="px-3 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Project Gallery */}
      <section className="py-16 bg-neutral-50 dark:bg-neutral-950">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold mb-10 max-w-5xl mx-auto"
          >
            项目图片集
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {project.galleryImages.map((image, index) => (
              <motion.div
                key={image}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-md"
              >
                <Image 
                  src={image}
                  alt={`${project.title} - 图片 ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="py-16 bg-white ">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold mb-10 text-center"
            >
              相关项目
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {relatedProjects.map((project, index) => (
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
      )}
    </>
  );
} 