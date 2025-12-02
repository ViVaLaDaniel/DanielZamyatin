"use client";

import { useState, useEffect } from "react";
import { projects, translations, navLinks } from "@/lib/config";
import { Github, ExternalLink, X, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguageStore } from "@/store/useLanguageStore";

// Define the Project interface based on config.ts structure
interface Project {
  title: string;
  year?: string;
  description: {
    en: string;
    de: string;
    es: string;
    uk: string;
  };
  longDescription?: {
    en: string;
    de: string;
    es: string;
    uk: string;
  };
  tech: string[];
  image: string;
  gallery?: string[];
  github?: string;
  live?: string;
}

export default function Projects() {
  const { language } = useLanguageStore();
  const t = translations[language];
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Find the 'Projects' link name for the title
  const projectsTitle = navLinks.find(link => link.href === "#projects")?.name[language] || "Projects";

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedProject]);

  const handleProjectClick = (project: any) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedProject?.gallery) return;
    setCurrentImageIndex((prev) => 
      prev === (selectedProject.gallery?.length || 1) - 1 ? 0 : prev + 1
    );
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedProject?.gallery) return;
    setCurrentImageIndex((prev) => 
      prev === 0 ? (selectedProject.gallery?.length || 1) - 1 : prev - 1
    );
  };

  return (
    <section id="projects" className="py-20">
      <div className="container">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-5xl font-bold gradient-text">{projectsTitle}</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {projects.map((project, index) => (
            <motion.div
              layoutId={`project-${project.title}`}
              key={index}
              onClick={() => handleProjectClick(project)}
              className="glass-card p-[5%] group cursor-pointer hover:border-blue-500/50 transition-colors"
            >
              {/* Project Image */}
              <motion.div 
                layoutId={`image-${project.title}`}
                className="relative h-48 bg-gray-800 rounded-lg overflow-hidden mb-4"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
              </motion.div>

              {/* Project Info */}
              <div className="flex justify-between items-start mb-3">
                <motion.h3 
                  layoutId={`title-${project.title}`}
                  className="text-2xl font-bold text-white group-hover:text-amber-400 transition-colors"
                >
                  {project.title}
                </motion.h3>
                <span className="text-sm text-gray-400">{project.year}</span>
              </div>

              <motion.p 
                layoutId={`desc-${project.title}`}
                className="text-gray-300 mb-4 leading-relaxed line-clamp-3"
              >
                {project.description[language]}
              </motion.p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.slice(0, 4).map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs bg-blue-500/20 text-blue-300 rounded-full border border-blue-500/30"
                  >
                    {tech}
                  </span>
                ))}
                {project.tech.length > 4 && (
                  <span className="px-3 py-1 text-xs bg-gray-800 text-gray-400 rounded-full border border-gray-700">
                    +{project.tech.length - 4}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Expanded Modal */}
      <AnimatePresence>
        {selectedProject && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 md:p-8"
            >
              <motion.div
                layoutId={`project-${selectedProject.title}`}
                className="bg-[#0a0a0a] border border-white/10 w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-2xl relative shadow-2xl scrollbar-hide overscroll-contain"
                onClick={(e) => e.stopPropagation()}
                data-lenis-prevent
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-white/10 rounded-full text-white transition-colors"
                >
                  <X size={24} />
                </button>

                <div className="flex flex-col p-5 m-2">
                  {/* Gallery Section */}
                  <div className="relative w-full h-[300px] md:h-[450px] bg-gray-900 rounded-xl overflow-hidden mb-8 border border-white/5 shadow-2xl m-2">
                    <motion.div 
                      layoutId={`image-${selectedProject.title}`}
                      className="absolute inset-0"
                    >
                      {selectedProject.gallery && selectedProject.gallery.length > 0 ? (
                        <>
                          <Image
                            src={selectedProject.gallery[currentImageIndex]}
                            alt={selectedProject.title}
                            fill
                            className="object-cover"
                          />
                          
                          {/* Navigation Arrows (only if > 1 image) */}
                          {selectedProject.gallery.length > 1 && (
                            <>
                              <button 
                                onClick={prevImage}
                                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors"
                              >
                                <ChevronLeft size={24} />
                              </button>
                              <button 
                                onClick={nextImage}
                                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors"
                              >
                                <ChevronRight size={24} />
                              </button>
                              
                              {/* Dots Indicator */}
                              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                                {selectedProject.gallery.map((_, idx) => (
                                  <div 
                                    key={idx}
                                    className={`w-2 h-2 rounded-full transition-colors ${
                                      idx === currentImageIndex ? "bg-white" : "bg-white/30"
                                    }`}
                                  />
                                ))}
                              </div>
                            </>
                          )}
                        </>
                      ) : (
                        <Image
                          src={selectedProject.image}
                          alt={selectedProject.title}
                          fill
                          className="object-cover"
                        />
                      )}
                    </motion.div>
                  </div>

                  {/* Content Section */}
                  <div className="flex flex-col p-5 m-2">
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <motion.h3 
                          layoutId={`title-${selectedProject.title}`}
                          className="text-3xl md:text-4xl font-bold text-white mb-2"
                        >
                          {selectedProject.title}
                        </motion.h3>
                        <span className="text-blue-400 font-medium">{selectedProject.year}</span>
                      </div>
                      
                      <div className="flex gap-3">
                        {selectedProject.github && (
                          <a
                            href={selectedProject.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-white/5 hover:bg-white/10 rounded-full text-white transition-colors border border-white/10"
                            title={t.viewCode}
                          >
                            <Github size={20} />
                          </a>
                        )}
                        {selectedProject.live && (
                          <a
                            href={selectedProject.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-blue-600 hover:bg-blue-500 rounded-full text-white transition-colors shadow-lg shadow-blue-500/20"
                            title={t.liveDemo}
                          >
                            <ExternalLink size={20} />
                          </a>
                        )}
                      </div>
                    </div>

                    <div className="mb-8">
                      <h4 className="text-sm uppercase tracking-wider text-gray-500 mb-3 font-semibold">
                        {t.aboutProject}
                      </h4>
                      <motion.div 
                        layoutId={`desc-${selectedProject.title}`}
                        className="text-gray-300 leading-relaxed whitespace-pre-wrap"
                      >
                        {/* Prefer longDescription if available, fallback to description */}
                        {selectedProject.longDescription 
                          ? selectedProject.longDescription[language] 
                          : selectedProject.description[language]}
                      </motion.div>
                    </div>

                    <div className="mt-auto">
                      <h4 className="text-sm uppercase tracking-wider text-gray-500 mb-3 font-semibold">
                        {t.technologies}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tech.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1.5 text-sm bg-blue-500/10 text-blue-300 rounded-md border border-blue-500/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
