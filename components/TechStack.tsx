"use client";

import { techStack, translations } from "@/lib/config";
import { useLanguageStore } from "@/store/useLanguageStore";

export default function TechStack() {
  const { language } = useLanguageStore();
  const t = translations[language];

  return (
    <section id="tech" className="py-20 bg-gradient-to-b from-blue-950/10 to-transparent">
      <div className="container">
        <h2 className="text-5xl font-bold gradient-text mb-12">{t.techStackTitle}</h2>

        <div className="glass-card p-[5%]">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left py-4 px-4 text-blue-400 font-semibold">{t.category}</th>
                  <th className="text-left py-4 px-4 text-blue-400 font-semibold">{t.technologies}</th>
                </tr>
              </thead>
              <tbody>
                {techStack.map((stack, index) => (
                  <tr key={index} className="border-b border-gray-800 hover:bg-white/5 transition-colors">
                    <td className="py-4 px-4 text-white font-medium">{stack.category}</td>
                    <td className="py-4 px-4 text-gray-400">
                      <div className="flex flex-wrap gap-2">
                        {stack.technologies.map((tech) => (
                          <span key={tech} className="px-2 py-1 bg-gray-800 rounded text-sm border border-gray-700">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
