"use client";

import { useState } from "react";
import { education } from "@/lib/config";
import { GraduationCap } from "lucide-react";

export default function Education() {
  const [lang, setLang] = useState<"en" | "ru">("en");

  return (
    <section id="education" className="py-20 bg-gradient-to-b from-transparent to-blue-950/10">
      <div className="container">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-5xl font-bold gradient-text">Education</h2>
          <button onClick={() => setLang(lang === "en" ? "ru" : "en")} className="btn btn-outline text-sm">
            {lang === "en" ? "🇷🇺 RU" : "🇬🇧 EN"}
          </button>
        </div>

        <div className="glass-card p-[5%] max-w-3xl mx-auto">
          <div className="flex items-start gap-4">
            <div className="p-4 bg-amber-500/20 rounded-lg">
              <GraduationCap className="text-amber-400" size={32} />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-white mb-4">Self-Taught Full-Stack Development</h3>
              <p className="text-gray-300 leading-relaxed">{education[lang]}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
