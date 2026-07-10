"use client";

import { useState } from "react";
import { portfolioData, Project } from "@/data/portfolio";

export default function Projects() {
  const { projects } = portfolioData;
  const [selectedTag, setSelectedTag] = useState<string>("All");

  // Get unique tags for filtering (extracting top common tags to avoid clutter)
  const filterTags = ["All", "Next.js", "React", "TypeScript", "Tailwind CSS"];

  const filteredProjects = selectedTag === "All"
    ? projects
    : projects.filter(project => project.tags.includes(selectedTag));

  return (
    <section id="projects" className="bg-slate-950 py-24 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Featured Projects</h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded bg-violet-500"></div>
          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            A curated selection of recent applications I have designed, engineered, and deployed.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="mt-12 flex flex-wrap justify-center gap-2">
          {filterTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                selectedTag === tag
                  ? "bg-violet-600 text-white shadow-lg shadow-violet-500/20"
                  : "bg-slate-900 text-slate-400 hover:bg-slate-800 hover:text-white"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="group flex flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/30 backdrop-blur-sm transition-all duration-350 hover:-translate-y-2 hover:border-slate-700/80 hover:bg-slate-900/50 hover:shadow-xl hover:shadow-violet-950/10"
            >
              {/* Image Container with Zoom effect */}
              <div className="relative aspect-[3/2] w-full overflow-hidden bg-slate-950">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                {project.featured && (
                  <span className="absolute top-4 left-4 rounded-full bg-violet-600/90 backdrop-blur-sm px-3 py-1 text-[10px] font-extrabold uppercase tracking-widest text-white ring-1 ring-violet-500/30">
                    Featured
                  </span>
                )}
              </div>

              {/* Project Info */}
              <div className="flex flex-1 flex-col p-6">
                <div className="flex-1">
                  <div className="flex flex-col gap-1.5">
                    <h3 className="text-xl font-bold text-white group-hover:text-violet-400 transition-colors duration-250">
                      {project.title}
                    </h3>
                    {project.period && (
                      <span className="text-[11px] font-semibold text-slate-500 bg-slate-800/80 px-2 py-0.5 rounded border border-slate-700/50 w-fit">
                        {project.period}
                      </span>
                    )}
                    {project.role && (
                      <p className="text-xs font-semibold text-violet-400">
                        {project.role} {project.location && `• ${project.location}`}
                      </p>
                    )}
                  </div>

                  {project.descriptionPoints ? (
                    <ul className="mt-4 space-y-2 text-xs text-slate-400">
                      {project.descriptionPoints.map((point, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2">
                          <span className="text-green-500 mt-0.5">•</span>
                          <span className="leading-relaxed">{point}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="mt-3 text-sm text-slate-400 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                  )}
                </div>

                {/* Tags List */}
                <div className="mt-6 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded bg-slate-950/70 px-2 py-0.5 text-xs text-slate-400 border border-slate-850"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="mt-6 flex items-center justify-between border-t border-slate-800/85 pt-4">
                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-xs font-semibold text-slate-400 transition-colors duration-200 hover:text-white"
                    >
                      <svg className="h-4 w-4 mr-1.5" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
                      </svg>
                      Code base
                    </a>
                  ) : (
                    <span />
                  )}

                  {project.demoUrl ? (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-xs font-semibold text-violet-400 transition-colors duration-200 hover:text-violet-300"
                    >
                      Live Demo
                      <svg className="h-3.5 w-3.5 ml-1" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                      </svg>
                    </a>
                  ) : (
                    <span />
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
