"use client";

import { professionalSummary, skills, languages, navLinks } from "@/lib/config";
import { useLanguageStore } from "@/store/useLanguageStore";

export default function About() {
  const { language } = useLanguageStore();
  
  // Find the 'About' link name for the title
  const aboutTitle = navLinks.find(link => link.href === "#about")?.name[language] || "About";

  return (
    <section id="about" className="py-20">
      <div className="container">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-5xl font-bold gradient-text">{aboutTitle}</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
          {/* Professional Summary */}
          <div className="glass-card p-[5%]">
            <h3 className="text-2xl font-semibold mb-4 text-blue-400">Professional Summary</h3>
            <p className="text-gray-300 leading-relaxed">
              {professionalSummary[language]}
            </p>

            {/* Languages */}
            <div className="mt-8">
              <h4 className="text-xl font-semibold mb-4 text-amber-400">Languages</h4>
              <div className="flex flex-wrap gap-3">
                {languages.map((lang) => (
                  <div key={lang.code} className="glass px-4 py-2">
                    <span className="font-medium">{lang.name}</span>
                    <span className="text-gray-400 text-sm ml-2">({lang.level})</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="glass-card p-[5%]">
            <h3 className="text-2xl font-semibold mb-6 text-blue-400">Technical Skills</h3>
            <div className="space-y-6">
              {skills.map((skill) => (
                <div key={skill.category}>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold text-white">{skill.category}</span>
                    <span className="text-amber-400 font-bold">{skill.proficiency}%</span>
                  </div>
                  <div className="text-sm text-gray-400 mb-2">{skill.technologies}</div>
                  <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-500 to-amber-500 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.proficiency}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
