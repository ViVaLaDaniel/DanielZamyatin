"use client";

import { siteConfig, translations } from "@/lib/config";
import { Github, Linkedin, Mail } from "lucide-react";
import { useLanguageStore } from "@/store/useLanguageStore";

export default function Footer() {
  const { language } = useLanguageStore();
  const t = translations[language];

  return (
    <footer className="py-12 border-t border-gray-800">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-gray-400">
              © {new Date().getFullYear()} {siteConfig.name}. {t.allRightsReserved}
            </p>
            <p className="text-sm text-gray-500 mt-1">
              {t.builtWith}
            </p>
          </div>

          <div className="flex gap-6">
            <a 
              href={siteConfig.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Github size={24} />
            </a>
            <a 
              href={siteConfig.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href={`mailto:${siteConfig.email}`}
              className="text-gray-400 hover:text-amber-400 transition-colors"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
