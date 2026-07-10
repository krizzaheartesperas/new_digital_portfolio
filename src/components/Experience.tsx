import { portfolioData } from "@/data/portfolio";
import { ExternalLink } from "lucide-react";

export default function Experience() {
  const { experiences } = portfolioData;

  return (
    <section id="experience" className="bg-slate-900 py-24 text-white">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Work Experience</h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded bg-violet-500"></div>
          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            A chronological timeline of my professional journey in software engineering.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l border-slate-800 ml-4 md:ml-6">
          {experiences.map((exp, idx) => (
            <div key={exp.id} className="mb-12 last:mb-0 relative pl-8 md:pl-10">
              {/* Timeline dot */}
              <span className="absolute -left-[9px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-violet-500 ring-4 ring-slate-900">
                <span className="h-1.5 w-1.5 rounded-full bg-white"></span>
              </span>

              {/* Experience Card */}
              <div className="relative rounded-2xl border border-slate-800 bg-slate-950/45 p-6 md:p-8 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80 overflow-hidden">
                {/* HSI Background Logo Watermark */}
                {exp.id === "exp-1" && (
                  <div
                    className="pointer-events-none absolute -right-6 -bottom-4 w-64 h-40 opacity-[0.07] select-none"
                    aria-hidden="true"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/hsi-logo.png"
                      alt=""
                      className="w-full h-full object-contain"
                    />
                  </div>
                )}

                {/* Meta details */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                    <p
                      className="font-semibold mt-1"
                      style={exp.id === "exp-1" ? { color: "#D4A017" } : undefined}
                    >
                      {exp.id !== "exp-1" && (
                        <span className="text-violet-400">
                          {exp.companyUrl ? (
                            <a
                              href={exp.companyUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:underline inline-flex items-center gap-1 hover:text-violet-300 transition-colors"
                            >
                              {exp.company}
                              <ExternalLink className="h-3.5 w-3.5" />
                            </a>
                          ) : (
                            exp.company
                          )}
                        </span>
                      )}
                      {exp.id === "exp-1" && (
                        <>
                          {exp.companyUrl ? (
                            <a
                              href={exp.companyUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:underline inline-flex items-center gap-1 transition-colors"
                              style={{ color: "#D4A017" }}
                            >
                              {exp.company}
                              <ExternalLink className="h-3.5 w-3.5" />
                            </a>
                          ) : (
                            exp.company
                          )}
                        </>
                      )}
                    </p>
                  </div>
                  <div className="text-right md:text-right text-sm">
                    <span className="inline-block rounded-full bg-slate-800/80 px-3 py-1 text-slate-300 font-medium border border-slate-700/50">
                      {exp.period}
                    </span>
                    <p className="text-slate-400 text-xs mt-1.5">{exp.location}</p>
                  </div>
                </div>

                {/* Job Description Points */}
                <ul className="mt-6 list-disc list-outside pl-4 space-y-3 text-slate-300 text-sm md:text-base leading-relaxed">
                  {exp.description.map((point, pIdx) => (
                    <li key={pIdx}>{point}</li>
                  ))}
                </ul>

                {/* Technologies Used */}
                <div className="mt-6 flex flex-wrap gap-2 border-t border-slate-800/80 pt-5">
                  {exp.skills.map((tech) => (
                    <span
                      key={tech}
                      className="rounded bg-slate-900 px-2.5 py-1 text-xs font-semibold text-slate-300 border border-slate-800/85 hover:border-slate-700 transition duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
