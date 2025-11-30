"use client";

import { useState } from "react";
import { experience } from "@/lib/config";
import { Briefcase } from "lucide-react";

export default function Experience() {
  const [lang, setLang] = useState<"en" | "ru">("en");

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-transparent to-blue-950/10">
      <div className="container">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-5xl font-bold gradient-text">Experience</h2>
          <button
            onClick={() => setLang(lang === "en" ? "ru" : "en")}
            className="btn btn-outline text-sm"
          >
            {lang === "en" ? "🇷🇺 RU" : "🇬🇧 EN"}
          </button>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-amber-500 hidden md:block"></div>

          <div className="space-y-12">
            {experience.map((job, index) => (
              <div key={index} className="relative md:ml-20">
                {/* Timeline dot */}
                <div className="absolute -left-12 top-6 w-4 h-4 bg-amber-500 rounded-full border-4 border-gray-900 hidden md:block glow-gold"></div>

                <div className="glass-card p-8 md:p-12 hover:border-amber-500/50 transition-all">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-blue-500/20 rounded-lg">
                      <Briefcase className="text-blue-400" size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white">{job.title}</h3>
                      <div className="flex flex-wrap gap-4 mt-2 text-gray-400">
                        <span>{job.period}</span>
                        <span>•</span>
                        <span>{job.location}</span>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-3 mt-6">
                    {job.achievements.map((achievement, i) => (
                      <li key={i} className="flex gap-3 text-gray-300">
                        <span className="text-amber-500 mt-1">▹</span>
                        <span>{achievement[lang]}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
