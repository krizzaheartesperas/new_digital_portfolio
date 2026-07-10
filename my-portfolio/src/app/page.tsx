"use client";

import React, { useState, useEffect } from "react";
import { portfolioData } from "@/data/portfolio";
import { 
  Briefcase, 
  Award, 
  Code, 
  FolderGit2, 
  User, 
  Mail, 
  Sun, 
  Moon, 
  MapPin, 
  FileText, 
  Send, 
  CheckCircle,
  ExternalLink,
  Sparkles,
  Search,
  Globe
} from "lucide-react";

export default function Home() {
  const { profile, experiences, skillCategories, projects, certifications } = portfolioData;

  const [activeTab, setActiveTab] = useState<string>("experience");
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [selectedProjectTag, setSelectedProjectTag] = useState<string>("All");

  // Contact form state
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [contactStatus, setContactStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    if (savedTheme) {
      setTheme(savedTheme);
      if (savedTheme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    } else {
      // Default to dark
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactStatus("sending");
    setTimeout(() => {
      setContactStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1200);
  };

  // Get project tags
  const projectTags = ["All", "Next.js", "React", "TypeScript", "Tailwind CSS"];
  const filteredProjects = selectedProjectTag === "All"
    ? projects
    : projects.filter(p => p.tags.includes(selectedProjectTag));

  return (
    <div className="min-h-screen flex flex-col grid-bg bg-background text-foreground transition-colors duration-300 relative overflow-hidden selection:bg-cyan-500/20 selection:text-cyan-200">
      
      {/* Decorative Radial Glowing Elements for Premium Aesthetics */}
      <div className="absolute top-0 left-0 -z-10 h-full w-full pointer-events-none opacity-50 dark:opacity-100">
        <div className="absolute top-[-10%] left-[-10%] h-[600px] w-[600px] rounded-full bg-gradient-to-br from-indigo-500/10 to-transparent blur-[120px] dark:from-indigo-500/5" />
        <div className="absolute bottom-[-10%] right-[-10%] h-[600px] w-[600px] rounded-full bg-gradient-to-tl from-cyan-500/10 to-transparent blur-[120px] dark:from-cyan-500/5" />
        <div className="absolute top-[30%] right-[15%] h-[400px] w-[400px] rounded-full bg-gradient-to-tr from-violet-500/10 to-transparent blur-[100px] dark:from-violet-500/5" />
      </div>

      {/* Main Header / Navbar */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-200/50 bg-white/70 dark:border-slate-800/50 dark:bg-slate-950/70 backdrop-blur-md transition-colors duration-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo Name & Role */}
          <div className="flex items-center gap-2">
            <span className="font-bold text-base md:text-lg text-slate-900 dark:text-white tracking-tight">{profile.name}</span>
            <span className="text-slate-300 dark:text-slate-700">/</span>
            <span className="text-teal-600 dark:text-teal-400 font-semibold text-xs md:text-sm tracking-wide">{profile.title}</span>
          </div>

          {/* Navigation Menu */}
          <nav className="flex items-center gap-1 md:gap-4">
            <div className="flex items-center gap-1 md:gap-2">
              {[
                { id: "experience", label: "Experience" },
                { id: "credentials", label: "Credentials" },
                { id: "skills", label: "Skills" },
                { id: "projects", label: "Projects" }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative px-2.5 py-1.5 md:px-4 text-xs md:text-sm font-semibold transition-all duration-200 border-b-2 cursor-pointer ${
                    activeTab === tab.id
                      ? "text-slate-950 dark:text-white border-cyan-500 dark:border-cyan-400"
                      : "text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white border-transparent"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Light/Dark Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 ml-2 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200/50 dark:border-slate-850 hover:bg-slate-100 dark:hover:bg-slate-800/80 text-slate-500 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white transition duration-200 cursor-pointer"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="h-4.5 w-4.5" /> : <Moon className="h-4.5 w-4.5" />}
            </button>
          </nav>
        </div>
      </header>

      {/* Main Container Layout */}
      <main className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-8 md:py-12 flex-grow flex flex-col">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Sidebar Card */}
          <aside className="lg:col-span-4 flex flex-col gap-6">
            <div className="rounded-[2.25rem] border border-slate-200/80 bg-white/70 p-6 md:p-8 dark:border-slate-800/80 dark:bg-slate-900/40 backdrop-blur-md shadow-sm transition-colors duration-300">
              
              {/* Profile Image container (squircle styled shape) */}
              <div className="relative mx-auto w-full aspect-square overflow-hidden rounded-[2rem] bg-slate-100 dark:bg-slate-950 p-1.5 border border-slate-200/50 dark:border-slate-850 shadow-inner mb-6 max-w-[280px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={profile.avatar}
                  alt={profile.name}
                  className="h-full w-full object-cover object-top rounded-[1.75rem]"
                />
              </div>

              {/* Title & Location details */}
              <div className="text-center">
                <h1 className="text-xl md:text-2xl font-bold tracking-tight text-slate-950 dark:text-white leading-tight">
                  {profile.name}
                </h1>
                
                <p className="text-xs md:text-sm font-semibold text-slate-500 dark:text-slate-400 mt-3 flex items-center justify-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse"></span>
                  Open for Junior or Entry Level Position
                </p>

                <p className="text-[11px] text-slate-450 dark:text-slate-500 mt-2 flex items-center justify-center gap-1">
                  <MapPin className="h-3 w-3 text-slate-450 dark:text-slate-500" />
                  {profile.location}
                </p>

                {/* Role Pill Badges */}
                <div className="flex flex-wrap justify-center gap-2 mt-4">
                  <span className="px-3 py-1 text-[10px] md:text-[11px] font-semibold bg-slate-50 dark:bg-slate-800/50 text-slate-700 dark:text-slate-350 rounded-lg border border-slate-200/40 dark:border-slate-800/40">
                    Developer
                  </span>
                  <span className="px-3 py-1 text-[10px] md:text-[11px] font-semibold bg-slate-50 dark:bg-slate-800/50 text-slate-700 dark:text-slate-350 rounded-lg border border-slate-200/40 dark:border-slate-800/40">
                    Frontend
                  </span>
                  <span className="px-3 py-1 text-[10px] md:text-[11px] font-semibold bg-slate-50 dark:bg-slate-800/50 text-slate-700 dark:text-slate-350 rounded-lg border border-slate-200/40 dark:border-slate-800/40">
                    Backend
                  </span>
                </div>

                {/* Social Links Grid */}
                <div className="flex justify-center gap-3 mt-6">
                  {[
                    { 
                      icon: (
                        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                      ), 
                      url: profile.linkedin, 
                      label: "LinkedIn" 
                    },
                    { 
                      icon: (
                        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                        </svg>
                      ), 
                      url: profile.github, 
                      label: "GitHub" 
                    },
                    { 
                      icon: (
                        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                        </svg>
                      ), 
                      url: profile.twitter || "#", 
                      label: "Twitter" 
                    },
                    { icon: <Mail className="h-4.5 w-4.5" />, url: `mailto:${profile.email}`, label: "Email" }
                  ].map((soc, i) => (
                    <a
                      key={i}
                      href={soc.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-xl flex items-center justify-center bg-slate-50 border border-slate-200 dark:bg-slate-950 dark:border-slate-850 hover:bg-slate-100 dark:hover:bg-slate-900 text-slate-500 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white transition duration-200 shadow-sm"
                      title={soc.label}
                    >
                      {soc.icon}
                    </a>
                  ))}
                </div>

                {/* Primary Action Buttons */}
                <div className="flex gap-3 mt-8">
                  <a
                    href={profile.resumeUrl}
                    className="flex-1 bg-blue-600 hover:bg-blue-500 text-white rounded-xl py-3 px-4 font-semibold text-xs md:text-sm flex items-center justify-center gap-2 transition duration-200 shadow-lg shadow-blue-500/10 cursor-pointer"
                  >
                    <FileText className="h-4 w-4" />
                    Resume
                  </a>
                  <button
                    onClick={() => setActiveTab("contact")}
                    className="flex-1 bg-slate-50 border border-slate-200 dark:bg-slate-950 dark:border-slate-850 hover:bg-slate-100 dark:hover:bg-slate-900 text-slate-800 dark:text-white rounded-xl py-3 px-4 font-semibold text-xs md:text-sm flex items-center justify-center gap-2 transition duration-200 cursor-pointer"
                  >
                    <Send className="h-4 w-4" />
                    Email
                  </button>
                </div>

                {/* Bottom Secondary Nav Buttons (About & Contact) */}
                <div className="flex gap-3 mt-4">
                  <button
                    onClick={() => setActiveTab("about")}
                    className={`flex-1 py-3 px-4 rounded-xl flex items-center justify-center gap-2 text-xs md:text-sm font-semibold border transition duration-200 cursor-pointer ${
                      activeTab === "about"
                        ? "bg-slate-950 border-transparent text-white dark:bg-white dark:text-slate-950"
                        : "bg-transparent border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-850"
                    }`}
                  >
                    <User className="h-4 w-4" />
                    About
                  </button>
                  <button
                    onClick={() => setActiveTab("contact")}
                    className={`flex-1 py-3 px-4 rounded-xl flex items-center justify-center gap-2 text-xs md:text-sm font-semibold border transition duration-200 cursor-pointer ${
                      activeTab === "contact"
                        ? "bg-slate-950 border-transparent text-white dark:bg-white dark:text-slate-950"
                        : "bg-transparent border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-850"
                    }`}
                  >
                    <Mail className="h-4 w-4" />
                    Contact
                  </button>
                </div>

              </div>
            </div>
          </aside>

          {/* Right Column: Dynamic Panel Cards */}
          <section className="lg:col-span-8 flex flex-col min-h-[600px] w-full">
            <div className="rounded-[2.25rem] border border-slate-200/80 bg-white/70 p-6 md:p-8 dark:border-slate-800/80 dark:bg-slate-900/40 backdrop-blur-md shadow-sm transition-colors duration-300 flex-1 flex flex-col">
              
              {/* TAB 1: WORK EXPERIENCE */}
              {activeTab === "experience" && (
                <div className="flex-1 flex flex-col">
                  {/* Tab Title */}
                  <div className="flex items-center gap-3 pb-6 border-b border-slate-200/60 dark:border-slate-800/60 mb-6">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-500 border border-blue-500/20">
                      <Briefcase className="h-5 w-5" />
                    </div>
                    <h2 className="text-xl font-bold text-slate-950 dark:text-white">Experience</h2>
                  </div>

                  {/* Experience Timeline/List */}
                  <div className="space-y-8 flex-1">
                    {experiences.map((exp, idx) => (
                      <div 
                        key={exp.id} 
                        className="group relative pb-8 last:pb-0 border-b border-slate-200/50 dark:border-slate-800/30 last:border-0"
                      >
                        {/* Header Row */}
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-3">
                          <div>
                            <h3 className="text-base md:text-lg font-bold text-slate-950 dark:text-white">
                              {exp.role}
                            </h3>
                            <p className="text-cyan-600 dark:text-cyan-400 font-semibold text-sm">
                              {exp.company}
                            </p>
                          </div>
                          <span className="text-xs font-semibold text-slate-500 dark:text-slate-455 sm:text-right bg-slate-100 dark:bg-slate-800/60 py-1 px-2.5 rounded-lg w-max border border-slate-200/30 dark:border-slate-850">
                            {exp.period}
                          </span>
                        </div>

                        {/* Description Paragraph */}
                        <p className="text-slate-650 dark:text-slate-350 text-sm leading-relaxed mb-4">
                          {exp.description[0]}
                        </p>

                        {/* Key Achievements Checklist */}
                        {exp.description.length > 1 && (
                          <div className="mb-4">
                            <h4 className="text-[11px] font-bold text-slate-455 dark:text-slate-500 uppercase tracking-wider mb-2">
                              Key Achievements
                            </h4>
                            <ul className="space-y-2">
                              {exp.description.slice(1).map((point, pIdx) => (
                                <li key={pIdx} className="flex items-start gap-2.5 text-slate-650 dark:text-slate-350 text-xs md:text-sm">
                                  <div className="flex-shrink-0 mt-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-green-500/10 text-green-500 border border-green-500/20">
                                    <CheckCircle className="h-2.5 w-2.5" />
                                  </div>
                                  <span className="leading-relaxed">{point}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Tech Stack used */}
                        {exp.skills && (
                          <div className="mt-4 flex flex-wrap gap-1.5">
                            {exp.skills.map((tech) => (
                              <span
                                key={tech}
                                className="px-2.5 py-0.5 bg-slate-50 dark:bg-slate-950 text-slate-600 dark:text-slate-400 text-xs font-medium rounded border border-slate-200/50 dark:border-slate-850"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 2: CERTIFICATIONS & CREDENTIALS */}
              {activeTab === "credentials" && (
                <div className="flex-1 flex flex-col">
                  {/* Tab Title */}
                  <div className="flex items-center gap-3 pb-6 border-b border-slate-200/60 dark:border-slate-800/60 mb-6">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/10 text-purple-500 border border-purple-500/20">
                      <Award className="h-5 w-5" />
                    </div>
                    <h2 className="text-xl font-bold text-slate-950 dark:text-white">Credentials</h2>
                  </div>

                  {/* Certifications Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1">
                    {certifications.map((cert) => (
                      <div
                        key={cert.id}
                        className="rounded-2xl border border-slate-200 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-950/20 p-5 flex flex-col justify-between transition-all duration-200 hover:border-slate-350 dark:hover:border-slate-700/80"
                      >
                        <div className="flex gap-4">
                          <div className="flex-shrink-0 flex h-11 w-11 items-center justify-center rounded-xl bg-purple-500/10 text-purple-500 border border-purple-500/20">
                            <Award className="h-5 w-5" />
                          </div>
                          <div>
                            <h3 className="text-sm md:text-base font-bold text-slate-900 dark:text-white leading-snug">
                              {cert.title}
                            </h3>
                            <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 mt-1">
                              {cert.issuer}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center justify-between border-t border-slate-200/60 dark:border-slate-850 pt-4 mt-6">
                          <span className="text-[11px] text-slate-400 dark:text-slate-500 font-semibold">
                            Issued {cert.date}
                          </span>
                          {cert.credentialUrl && (
                            <a
                              href={cert.credentialUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs font-bold text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 flex items-center gap-1 transition"
                            >
                              Verify
                              <ExternalLink className="h-3 w-3" />
                            </a>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 3: SKILLS & CATEGORIES */}
              {activeTab === "skills" && (
                <div className="flex-1 flex flex-col">
                  {/* Tab Title */}
                  <div className="flex items-center gap-3 pb-6 border-b border-slate-200/60 dark:border-slate-800/60 mb-6">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-500/10 text-teal-500 border border-teal-500/20">
                      <Code className="h-5 w-5" />
                    </div>
                    <h2 className="text-xl font-bold text-slate-950 dark:text-white">Skills & Expertise</h2>
                  </div>

                  {/* Skills Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1">
                    {skillCategories.map((cat, idx) => (
                      <div
                        key={idx}
                        className="rounded-2xl border border-slate-200 dark:border-slate-800/60 bg-slate-50/50 dark:bg-slate-950/10 p-5 transition hover:border-slate-350 dark:hover:border-slate-700/60"
                      >
                        <h3 className="text-sm font-bold text-slate-950 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-2 mb-4 flex items-center justify-between">
                          <span>{cat.category}</span>
                          <span className="h-1.5 w-1.5 rounded-full bg-teal-500"></span>
                        </h3>

                        <div className="space-y-4">
                          {cat.skills.map((skill) => (
                            <div key={skill.name}>
                              <div className="flex justify-between text-xs mb-1.5">
                                <span className="font-semibold text-slate-750 dark:text-slate-300">{skill.name}</span>
                                <span className="text-teal-600 dark:text-teal-400 font-bold">{skill.level}%</span>
                              </div>
                              {/* Progress bar container */}
                              <div className="h-1.5 w-full bg-slate-100 dark:bg-slate-800/80 rounded-full overflow-hidden">
                                <div
                                  className="h-full rounded-full bg-gradient-to-r from-teal-500 to-emerald-500 transition-all duration-500"
                                  style={{ width: `${skill.level}%` }}
                                ></div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 4: FEATURED PROJECTS */}
              {activeTab === "projects" && (
                <div className="flex-1 flex flex-col">
                  {/* Tab Title */}
                  <div className="flex items-center gap-3 pb-4 border-b border-slate-200/60 dark:border-slate-800/60 mb-6">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500/10 text-orange-500 border border-orange-500/20">
                      <FolderGit2 className="h-5 w-5" />
                    </div>
                    <h2 className="text-xl font-bold text-slate-950 dark:text-white">Featured Projects</h2>
                  </div>

                  {/* Project Tag Filter Row */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {projectTags.map((tag) => (
                      <button
                        key={tag}
                        onClick={() => setSelectedProjectTag(tag)}
                        className={`rounded-lg px-3 py-1.5 text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                          selectedProjectTag === tag
                            ? "bg-slate-950 dark:bg-white text-white dark:text-slate-950 shadow-sm"
                            : "bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900 border border-slate-200 dark:border-slate-850"
                        }`}
                      >
                        {tag}
                      </button>
                    ))}
                  </div>

                  {/* Projects Cards Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1">
                    {filteredProjects.map((project) => (
                      <div
                        key={project.id}
                        className="group flex flex-col rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950/20 overflow-hidden shadow-sm hover:border-slate-350 dark:hover:border-slate-700/80 transition-all duration-300"
                      >
                        {/* Image Container with Zoom hover */}
                        <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 dark:bg-slate-950">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={project.image}
                            alt={project.title}
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-103"
                          />
                          {project.featured && (
                            <span className="absolute top-3 left-3 px-2 py-0.5 rounded bg-amber-500 text-slate-950 text-[9px] font-extrabold uppercase tracking-widest ring-1 ring-amber-400/20">
                              Featured
                            </span>
                          )}
                        </div>

                        {/* Project Info details */}
                        <div className="p-5 flex-1 flex flex-col justify-between">
                          <div>
                            <h3 className="text-base font-bold text-slate-950 dark:text-white group-hover:text-blue-500 transition-colors">
                              {project.title}
                            </h3>
                            <p className="text-slate-550 dark:text-slate-400 text-xs md:text-sm mt-2 leading-relaxed line-clamp-3">
                              {project.description}
                            </p>

                            {/* Tags list */}
                            <div className="mt-4 flex flex-wrap gap-1">
                              {project.tags.map((t) => (
                                <span
                                  key={t}
                                  className="text-[10px] font-medium bg-slate-50 border border-slate-200 dark:bg-slate-950 dark:border-slate-850 px-2 py-0.5 rounded text-slate-500 dark:text-slate-400"
                                >
                                  {t}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Footer Action Links */}
                          <div className="mt-6 flex items-center justify-between border-t border-slate-200/50 dark:border-slate-855 pt-4">
                            {project.githubUrl ? (
                              <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center text-xs font-bold text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition gap-1.5"
                              >
                                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                                </svg>
                                Codebase
                              </a>
                            ) : (
                              <span />
                            )}

                            {project.demoUrl ? (
                              <a
                                href={project.demoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center text-xs font-bold text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 transition gap-1"
                              >
                                Live Demo
                                <ExternalLink className="h-3.5 w-3.5" />
                              </a>
                            ) : (
                              <span />
                            )}
                          </div>
                        </div>

                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 5: ABOUT BIOGRAPHY */}
              {activeTab === "about" && (
                <div className="flex-1 flex flex-col">
                  {/* Tab Title */}
                  <div className="flex items-center gap-3 pb-6 border-b border-slate-200/60 dark:border-slate-800/60 mb-6">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/10 text-violet-500 border border-violet-500/20">
                      <User className="h-5 w-5" />
                    </div>
                    <h2 className="text-xl font-bold text-slate-950 dark:text-white">About Me</h2>
                  </div>

                  <div className="space-y-6 flex-1">
                    {/* Role Heading */}
                    <h3 className="text-base md:text-lg font-bold text-slate-950 dark:text-white flex items-center gap-2">
                      <Sparkles className="h-4 w-4 text-violet-500" />
                      Engineering solutions to real-world problems
                    </h3>

                    {/* Bio text */}
                    <div className="space-y-4 text-slate-650 dark:text-slate-300 text-sm leading-relaxed">
                      {profile.bio.map((para, i) => (
                        <p key={i}>{para}</p>
                      ))}
                    </div>

                    {/* Stats List Cards */}
                    <div className="grid grid-cols-3 gap-4 border-t border-slate-200/80 dark:border-slate-800 pt-8 mt-8">
                      {[
                        { label: "Years Experience", value: "5+" },
                        { label: "Projects Completed", value: "25+" },
                        { label: "Happy Clients", value: "15+" }
                      ].map((stat, i) => (
                        <div key={i} className="text-center md:text-left rounded-xl p-4 bg-slate-50 dark:bg-slate-950/20 border border-slate-200/50 dark:border-slate-850">
                          <span className="block text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white bg-gradient-to-r from-violet-600 to-indigo-600 dark:from-violet-400 dark:to-indigo-400 bg-clip-text text-transparent">
                            {stat.value}
                          </span>
                          <span className="block mt-1.5 text-[9px] md:text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                            {stat.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 6: CONTACT INFORMATION & EMAIL FORM */}
              {activeTab === "contact" && (
                <div className="flex-1 flex flex-col">
                  {/* Tab Title */}
                  <div className="flex items-center gap-3 pb-6 border-b border-slate-200/60 dark:border-slate-800/60 mb-6">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-pink-500/10 text-pink-500 border border-pink-500/20">
                      <Mail className="h-5 w-5" />
                    </div>
                    <h2 className="text-xl font-bold text-slate-950 dark:text-white">Get In Touch</h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-12 gap-8 flex-1">
                    {/* Details Column */}
                    <div className="md:col-span-5 space-y-4">
                      <div className="rounded-2xl border border-slate-200 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-950/20 p-5 space-y-5">
                        <h3 className="text-sm font-bold text-slate-950 dark:text-white mb-3">Contact Information</h3>
                        
                        {/* Email */}
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 flex h-8 w-8 items-center justify-center rounded-lg bg-pink-500/10 text-pink-500 border border-pink-500/20">
                            <Mail className="h-4.5 w-4.5" />
                          </div>
                          <div>
                            <h4 className="text-xs font-bold text-slate-400 dark:text-slate-500">Email Me</h4>
                            <a href={`mailto:${profile.email}`} className="text-xs md:text-sm text-cyan-600 dark:text-cyan-400 hover:underline mt-0.5 block break-all font-semibold">
                              {profile.email}
                            </a>
                          </div>
                        </div>

                        {/* Location */}
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 flex h-8 w-8 items-center justify-center rounded-lg bg-pink-500/10 text-pink-500 border border-pink-500/20">
                            <MapPin className="h-4.5 w-4.5" />
                          </div>
                          <div>
                            <h4 className="text-xs font-bold text-slate-400 dark:text-slate-500">Location</h4>
                            <p className="text-xs md:text-sm text-slate-650 dark:text-slate-350 mt-0.5 font-medium">{profile.location}</p>
                          </div>
                        </div>

                        {/* Response Time */}
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 flex h-8 w-8 items-center justify-center rounded-lg bg-pink-500/10 text-pink-500 border border-pink-500/20">
                            <Globe className="h-4.5 w-4.5" />
                          </div>
                          <div>
                            <h4 className="text-xs font-bold text-slate-400 dark:text-slate-500">Availability</h4>
                            <p className="text-xs md:text-sm text-slate-650 dark:text-slate-350 mt-0.5 font-medium">Remote, Hybrid, On-site</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Email Form Column */}
                    <form onSubmit={handleContactSubmit} className="md:col-span-7 space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="form-name" className="block text-xs font-semibold text-slate-500 dark:text-slate-455 mb-1">Your Name</label>
                          <input
                            type="text"
                            id="form-name"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="Krizza"
                            className="w-full text-xs md:text-sm px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:border-cyan-500 dark:focus:border-cyan-400 focus:outline-none transition duration-200"
                          />
                        </div>
                        <div>
                          <label htmlFor="form-email" className="block text-xs font-semibold text-slate-500 dark:text-slate-455 mb-1">Your Email</label>
                          <input
                            type="email"
                            id="form-email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="krizzaheart.esperas@gmail.com"
                            className="w-full text-xs md:text-sm px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:border-cyan-500 dark:focus:border-cyan-400 focus:outline-none transition duration-200"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="form-subject" className="block text-xs font-semibold text-slate-500 dark:text-slate-455 mb-1">Subject</label>
                        <input
                          type="text"
                          id="form-subject"
                          required
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          placeholder="Project Inquiry / Hiring"
                          className="w-full text-xs md:text-sm px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:border-cyan-500 dark:focus:border-cyan-400 focus:outline-none transition duration-200"
                        />
                      </div>

                      <div>
                        <label htmlFor="form-message" className="block text-xs font-semibold text-slate-500 dark:text-slate-455 mb-1">Message</label>
                        <textarea
                          id="form-message"
                          required
                          rows={4}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Hello Krizza, let's discuss a new project..."
                          className="w-full text-xs md:text-sm px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:border-cyan-500 dark:focus:border-cyan-400 focus:outline-none resize-none transition duration-200"
                        />
                      </div>

                      {contactStatus === "success" && (
                        <div className="p-3 bg-green-500/10 text-green-500 text-xs md:text-sm font-semibold rounded-lg border border-green-500/20">
                          Your message has been sent successfully!
                        </div>
                      )}

                      <button
                        type="submit"
                        disabled={contactStatus === "sending"}
                        className="w-full bg-slate-950 hover:bg-slate-900 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-100 text-white rounded-xl py-3 text-xs md:text-sm font-bold shadow-sm transition duration-250 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {contactStatus === "sending" ? "Sending..." : "Send Message"}
                      </button>
                    </form>
                  </div>
                </div>
              )}

            </div>
          </section>

        </div>
      </main>

      {/* Footer Copyright */}
      <footer className="w-full border-t border-slate-200/50 dark:border-slate-800/50 py-6 text-center text-[10px] md:text-xs text-slate-400 dark:text-slate-600 bg-white/40 dark:bg-slate-950/20 backdrop-blur-sm transition-colors duration-300">
        <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
      </footer>
    </div>
  );
}
