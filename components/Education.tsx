"use client";

import { education, translations } from "@/lib/config";
import { GraduationCap } from "lucide-react";
import { useLanguageStore } from "@/store/useLanguageStore";

export default function Education() {
  const { language } = useLanguageStore();
  const t = translations[language];

  return (
    <section id="education" className="py-20 bg-gradient-to-b from-transparent to-blue-950/10">
      <div className="container">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-5xl font-bold gradient-text">{t.educationTitle}</h2>
        </div>

        <div className="glass-card p-[5%] max-w-3xl mx-auto">
          <div className="flex items-start gap-6">
            <div className="p-4 bg-amber-500/20 rounded-full">
              <GraduationCap className="text-amber-400" size={32} />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-white mb-4">{t.educationTitle}</h3>
              <p className="text-gray-300 leading-relaxed">{education[language]}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
