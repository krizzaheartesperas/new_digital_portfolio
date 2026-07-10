import { portfolioData } from "@/data/portfolio";
import { 
  Server, 
  Database, 
  GitBranch, 
  Box, 
  Cloud, 
  PenTool, 
  Palette, 
  Workflow, 
  ShieldCheck, 
  Smartphone, 
  Code2 
} from "lucide-react";

// Brand-themed custom icons helper for technologies and concepts
const getSkillIcon = (name: string) => {
  const n = name.toLowerCase();
  
  if (n.includes("javascript")) {
    return <span className="text-[#F7DF1E] font-black text-xs select-none">JS</span>;
  }
  if (n.includes("typescript")) {
    return <span className="text-[#3178C6] font-black text-xs select-none">TS</span>;
  }
  if (n.includes("python")) {
    return <span className="text-[#3776AB] font-black text-xs select-none">PY</span>;
  }
  if (n.includes("html5")) {
    return <span className="text-[#E34F26] font-black text-xs select-none">H5</span>;
  }
  if (n.includes("css3")) {
    return <span className="text-[#1572B6] font-black text-xs select-none">C3</span>;
  }
  if (n.includes("node.js")) {
    return <Server className="h-4.5 w-4.5 text-[#339933]" />;
  }
  if (n.includes("supabase")) {
    return <span className="text-[#3ECF8E] font-extrabold text-sm select-none">⚡</span>;
  }
  if (n.includes("postgresql")) {
    return <Database className="h-4.5 w-4.5 text-[#4169E1]" />;
  }
  if (n.includes("github")) {
    return (
      <svg className="h-4.5 w-4.5 text-slate-400 dark:text-white" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
      </svg>
    );
  }
  if (n.includes("git")) {
    return <GitBranch className="h-4.5 w-4.5 text-[#F05032]" />;
  }
  if (n.includes("vs code")) {
    return <Box className="h-4.5 w-4.5 text-[#007ACC]" />;
  }
  if (n.includes("vercel")) {
    return <Cloud className="h-4.5 w-4.5 text-white" />;
  }
  if (n.includes("figma")) {
    return <PenTool className="h-4.5 w-4.5 text-[#F24E1E]" />;
  }
  if (n.includes("canva")) {
    return <Palette className="h-4.5 w-4.5 text-[#00C4CC]" />;
  }
  if (n.includes("rest api")) {
    return <Workflow className="h-4.5 w-4.5 text-indigo-400" />;
  }
  if (n.includes("authentication")) {
    return <ShieldCheck className="h-4.5 w-4.5 text-emerald-400" />;
  }
  if (n.includes("crud")) {
    return <Database className="h-4.5 w-4.5 text-amber-400" />;
  }
  if (n.includes("responsive")) {
    return <Smartphone className="h-4.5 w-4.5 text-rose-400" />;
  }

  return <Code2 className="h-4.5 w-4.5 text-teal-400" />;
};

export default function Skills() {
  const { skillCategories } = portfolioData;

  return (
    <section id="skills" className="bg-slate-950 py-24 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Skills &amp; Expertise</h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded bg-violet-500"></div>
          <p className="mx-auto mt-4 max-w-2xl text-slate-400 text-sm md:text-base">
            A comprehensive list of technologies, frameworks, and tools I use to build scalable web applications.
          </p>
        </div>

        {/* Skill Categories Grid */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 backdrop-blur-sm transition-all duration-300 hover:border-slate-700 hover:bg-slate-900/60"
            >
              <h3 className="text-lg font-bold text-white mb-6 border-b border-slate-800 pb-3 flex items-center justify-between">
                <span className="uppercase tracking-wider text-xs font-semibold">{cat.category}</span>
                <span className="h-2 w-2 rounded-full bg-violet-400 shadow-[0_0_8px_rgba(167,139,250,0.8)]"></span>
              </h3>
              
              <div className="grid grid-cols-2 gap-3">
                {cat.skills.map((skill) => (
                  <div 
                    key={skill.name}
                    className="flex items-center gap-2.5 p-2.5 rounded-xl border border-slate-800/80 bg-slate-950/40 hover:border-violet-500/30 hover:bg-violet-500/[0.02] transition duration-200 group"
                  >
                    <div className="flex-shrink-0 w-7 h-7 flex items-center justify-center rounded-lg bg-slate-900 border border-slate-800 shadow-sm transition-colors duration-200">
                      {getSkillIcon(skill.name)}
                    </div>
                    <span className="text-xs font-medium text-slate-300 group-hover:text-white transition-colors truncate">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
