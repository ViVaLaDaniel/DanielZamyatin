"use client";

import { useState } from "react";
import { projects } from "@/lib/config";
import { Github, ExternalLink } from "lucide-react";
import Image from "next/image";

export default function Projects() {
  const [lang, setLang] = useState<"en" | "ru">("en");

  return (
    <section id="projects" className="py-20">
      <div className="container">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-5xl font-bold gradient-text">Projects</h2>
          <button
            onClick={() => setLang(lang === "en" ? "ru" : "en")}
            className="btn btn-outline text-sm"
          >
            {lang === "en" ? "🇷🇺 RU" : "🇬🇧 EN"}
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {projects.map((project, index) => (
            <div key={index} className="glass-card p-[5%] group">
              {/* Project Image */}
              <div className="relative h-48 bg-gray-800 rounded-lg overflow-hidden mb-4">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
              </div>

              {/* Project Info */}
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-2xl font-bold text-white group-hover:text-amber-400 transition-colors">
                  {project.title}
                </h3>
                <span className="text-sm text-gray-400">{project.year}</span>
              </div>

              <p className="text-gray-300 mb-4 leading-relaxed">
                {project.description[lang]}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs bg-blue-500/20 text-blue-300 rounded-full border border-blue-500/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    <Github size={16} />
                    Code
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-amber-400 transition-colors"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
