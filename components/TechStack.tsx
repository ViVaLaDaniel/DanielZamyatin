import { techStack } from "@/lib/config";

export default function TechStack() {
  return (
    <section id="tech" className="py-20 bg-gradient-to-b from-blue-950/10 to-transparent">
      <div className="container">
        <h2 className="text-5xl font-bold gradient-text mb-12">Tech Stack</h2>

        <div className="glass-card p-6 md:p-12">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left py-4 px-4 text-blue-400 font-semibold">Category</th>
                  <th className="text-left py-4 px-4 text-blue-400 font-semibold">Technologies</th>
                </tr>
              </thead>
              <tbody>
                {techStack.map((category, index) => (
                  <tr
                    key={index}
                    className="border-b border-gray-800 hover:bg-blue-500/5 transition-colors"
                  >
                    <td className="py-4 px-4 font-semibold text-white whitespace-nowrap">
                      {category.category}
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex flex-wrap gap-2">
                        {category.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 text-sm bg-gray-800 text-gray-300 rounded-md hover:bg-amber-500/20 hover:text-amber-400 transition-colors"
                          >
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
