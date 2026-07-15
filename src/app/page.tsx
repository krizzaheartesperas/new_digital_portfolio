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

  ExternalLink,
  Sparkles,
  Search,
  Globe,
  Layers, 
  GitBranch, 
  Terminal, 
  Workflow, 
  ShieldCheck, 
  Smartphone, 
  PenTool, 
  Palette, 
  Box, 
  Cloud, 
  Code2, 
  Database, 
  Server,
  // Sidebar icons
  BriefcaseBusiness,
  GraduationCap,
  Cpu,
  LayoutGrid,
  CircleUserRound,
  AtSign,
  ScrollText,
  // Carousel
  ChevronLeft,
  ChevronRight,
  Images,
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
      <svg className="h-4.5 w-4.5 text-slate-850 dark:text-white" fill="currentColor" viewBox="0 0 24 24">
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
    return <Cloud className="h-4.5 w-4.5 text-black dark:text-white" />;
  }
  if (n.includes("figma")) {
    return <PenTool className="h-4.5 w-4.5 text-[#F24E1E]" />;
  }
  if (n.includes("canva")) {
    return <Palette className="h-4.5 w-4.5 text-[#00C4CC]" />;
  }
  if (n.includes("rest api")) {
    return <Workflow className="h-4.5 w-4.5 text-[#D4A017]" />;
  }
  if (n.includes("authentication")) {
    return <ShieldCheck className="h-4.5 w-4.5 text-[#D4A017]" />;
  }
  if (n.includes("crud")) {
    return <Database className="h-4.5 w-4.5 text-[#D4A017]" />;
  }
  if (n.includes("responsive")) {
    return <Smartphone className="h-4.5 w-4.5 text-[#D4A017]" />;
  }

  return <Code2 className="h-4.5 w-4.5 text-[#D4A017]" />;
};

export default function Home() {
  const { profile, experiences, skillCategories, projects, certifications } = portfolioData;

  const [activeTab, setActiveTab] = useState<string>("experience");
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [selectedProjectTag, setSelectedProjectTag] = useState<string>("All");
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  // Internship memories carousel
  const internshipImages = [
    "/moments1.png",
    "/moments2.png",
    "/moments3.png",
    "/moments4.png",
  ];
  const [carouselIndex, setCarouselIndex] = useState(0);

  // Auto-play carousel every 3.5s
  useEffect(() => {
    const timer = setInterval(() => {
      setCarouselIndex((prev) => (prev + 1) % internshipImages.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [internshipImages.length]);

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

  const applyTheme = (newTheme: "light" | "dark") => {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const toggleTheme = (e?: React.MouseEvent) => {
    const isDark = theme === "dark";
    const newTheme = isDark ? "light" : "dark";

    if (!document.startViewTransition || !e) {
      applyTheme(newTheme);
      return;
    }

    const x = e.clientX;
    const y = e.clientY;
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    const transition = document.startViewTransition(() => {
      applyTheme(newTheme);
    });

    transition.ready.then(() => {
      const clipPath = [
        `circle(0px at ${x}px ${y}px)`,
        `circle(${endRadius}px at ${x}px ${y}px)`
      ];

      document.documentElement.animate(
        {
          clipPath: clipPath,
        },
        {
          duration: 500,
          easing: "ease-in-out",
          pseudoElement: "::view-transition-new(root)",
        }
      );
    });
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setContactStatus("sending");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "YOUR_WEB3FORMS_ACCESS_KEY",
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setContactStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setContactStatus("error");
      }
    } catch (error) {
      console.error(error);
      setContactStatus("error");
    }
    
    // Hide status message after 5 seconds
    setTimeout(() => {
      setContactStatus("idle");
    }, 5000);
  };

  // Get project tags
  const projectTags = ["All", "Next.js", "React", "TypeScript", "Tailwind CSS"];
  const filteredProjects = selectedProjectTag === "All"
    ? projects
    : projects.filter(p => p.tags.includes(selectedProjectTag));

  return (
    <div className="min-h-screen flex grid-bg bg-background text-foreground transition-colors duration-300 relative overflow-hidden selection:bg-[#D4A017]/20 selection:text-[#D4A017]">
      
      {/* Decorative Radial Glowing Elements for Premium Aesthetics */}
      <div className="absolute top-0 left-0 -z-10 h-full w-full pointer-events-none opacity-50 dark:opacity-100">
        <div className="absolute top-[-10%] left-[-10%] h-[600px] w-[600px] rounded-full bg-gradient-to-br from-[#D4A017]/10 to-transparent blur-[120px] dark:from-[#D4A017]/5" />
        <div className="absolute bottom-[-10%] right-[-10%] h-[600px] w-[600px] rounded-full bg-gradient-to-tl from-[#D4A017]/10 to-transparent blur-[120px] dark:from-[#D4A017]/5" />
        <div className="absolute top-[30%] right-[15%] h-[400px] w-[400px] rounded-full bg-gradient-to-tr from-[#D4A017]/10 to-transparent blur-[100px] dark:from-[#D4A017]/5" />
      </div>

      {/* FIXED LEFT SIDEBAR (Desktop Only) */}
      <aside className="hidden lg:flex flex-col w-[280px] fixed top-0 left-0 h-screen border-r border-slate-200/80 dark:border-slate-800/60 bg-white/60 dark:bg-slate-950/60 backdrop-blur-2xl z-50">
        <div className="relative p-8 pb-6 flex items-center justify-center w-full">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">Menu</h2>
          
          {/* Theme Toggle in Sidebar */}
          <button
            onClick={toggleTheme}
            className="absolute right-8 p-2 rounded-[0.85rem] bg-white dark:bg-slate-950 border border-slate-200/80 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition duration-300 cursor-pointer shadow-sm"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun className="h-4.5 w-4.5" /> : <Moon className="h-4.5 w-4.5" />}
          </button>
        </div>

        <nav className="flex-1 px-5 space-y-1.5 overflow-y-auto pb-8">
          {[
            { id: "experience", label: "Experience", icon: <BriefcaseBusiness className="h-[18px] w-[18px]" /> },
            { id: "credentials", label: "Credentials", icon: <GraduationCap className="h-[18px] w-[18px]" /> },
            { id: "skills", label: "Skills", icon: <Cpu className="h-[18px] w-[18px]" /> },
            { id: "projects", label: "Projects", icon: <LayoutGrid className="h-[18px] w-[18px]" /> },
            { id: "about", label: "About Me", icon: <CircleUserRound className="h-[18px] w-[18px]" /> },
            { id: "contact", label: "Contact", icon: <AtSign className="h-[18px] w-[18px]" /> }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full py-3.5 px-4 rounded-[1.25rem] flex items-center justify-start gap-3.5 text-sm font-medium transition-all duration-300 cursor-pointer ${
                activeTab === tab.id
                  ? "bg-[#1a1a1a] text-white dark:bg-white dark:text-[#1a1a1a] shadow-lg shadow-black/5"
                  : "bg-transparent text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/50"
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
          
          <a
            href={profile.resumeUrl}
            className="w-full py-3.5 px-4 rounded-[1.25rem] flex items-center justify-start gap-3.5 text-sm font-medium transition-all duration-300 cursor-pointer bg-transparent text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/50"
          >
            <ScrollText className="h-[18px] w-[18px]" />
            Resume
          </a>
        </nav>
      </aside>

      {/* MAIN CONTENT WRAPPER */}
      <div className="flex-1 lg:ml-[280px] flex flex-col min-h-screen relative w-full">
        {/* Main Container Layout */}
        <main className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-8 md:py-12 flex-grow flex flex-col">
        {/* Main Layout (Completely Cardless) */}
        <div className="relative flex-1 flex flex-col mb-8 mt-4 md:mt-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start flex-1">
            
            {/* Left Column: Profile */}
            <aside className="lg:col-span-4 flex flex-col gap-6 lg:sticky lg:top-12 h-fit">
              <div className="relative w-full">

              {/* MOBILE: Compact horizontal profile card */}
              <div className="relative flex lg:hidden items-center gap-4 p-4 rounded-2xl bg-white/60 dark:bg-slate-900/40 border border-slate-200/60 dark:border-slate-800/60 backdrop-blur-sm mb-4">
                {/* Theme toggle for mobile */}
                <button
                  onClick={toggleTheme}
                  className="absolute top-4 right-4 p-2 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition cursor-pointer"
                  aria-label="Toggle theme"
                >
                  {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                </button>

                {/* Small circular avatar */}
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl overflow-hidden ring-2 ring-[#D4A017]/30">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={profile.avatar}
                    alt={profile.name}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                {/* Name & details */}
                <div className="flex-1 min-w-0 pr-10">
                  <h1 className="text-base font-black tracking-tight text-slate-950 dark:text-white leading-tight truncate">
                    {profile.name}
                  </h1>
                  <p className="text-xs font-semibold text-[#D4A017] mt-0.5">{profile.title}</p>
                  <div className="flex flex-col gap-1.5 mt-1.5">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-3 w-3 text-slate-400 flex-shrink-0" />
                      <span className="text-[10px] text-slate-500 dark:text-slate-400 truncate">{profile.location}</span>
                    </div>
                    <div className="inline-flex items-center text-[9px] font-bold text-[#D4A017] bg-[#D4A017]/10 dark:bg-[#D4A017]/5 px-1.5 py-0.5 rounded border border-[#D4A017]/15 w-fit">
                      Willing to relocate for work
                    </div>
                  </div>
                  {/* Social icons row */}
                  <div className="flex gap-2 mt-2">
                    {[
                      { icon: (<svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>), url: profile.linkedin, label: "LinkedIn" },
                      { icon: (<svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" /></svg>), url: profile.github, label: "GitHub" },
                      { icon: <Mail className="h-3.5 w-3.5" />, url: `mailto:${profile.email}`, label: "Email" }
                    ].map((soc, i) => (
                      <a key={i} href={soc.url} target="_blank" rel="noopener noreferrer"
                        className="w-7 h-7 rounded-lg flex items-center justify-center bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white transition"
                        title={soc.label}>{soc.icon}</a>
                    ))}
                  </div>
                </div>
              </div>

              {/* DESKTOP: Editorial / Magazine Style Profile Banner */}
              <div className="relative w-full aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-slate-100 dark:bg-slate-950 shadow-lg ring-1 ring-slate-200/50 dark:ring-slate-800/50 group mb-6 hidden lg:block">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={profile.avatar}
                  alt={profile.name}
                  className="h-full w-full object-cover object-center filter saturate-100 group-hover:scale-105 transition-all duration-700 ease-out"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent"></div>

                {/* Profile Name & Roles (Bottom) */}
                <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 flex flex-col items-start text-left">
                  <h1 className="text-3xl md:text-4xl font-black tracking-tighter text-white leading-[1.05] mb-2 drop-shadow-md">
                    {profile.name.split(" ")[0]}
                    <br />
                    <span className="text-slate-300">{profile.name.split(" ").slice(1).join(" ")}</span>
                  </h1>
                </div>
              </div>

              {/* Location & Socials Footer — Desktop only */}
              <div className="hidden lg:flex flex-col gap-4 mt-6 px-2 w-full">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 dark:text-slate-400">
                    <MapPin className="h-3.5 w-3.5 text-slate-400 dark:text-slate-500" />
                    {profile.location}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#D4A017] dark:text-[#D4A017] bg-[#D4A017]/10 dark:bg-[#D4A017]/5 px-2 py-0.5 rounded-md border border-[#D4A017]/15 w-fit">
                      Open to Work
                    </div>
                    <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#D4A017] dark:text-[#D4A017] bg-[#D4A017]/10 dark:bg-[#D4A017]/5 px-2 py-0.5 rounded-md border border-[#D4A017]/15 w-fit">
                      Willing to relocate for work
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 text-[10px] sm:text-[11px] font-semibold tracking-widest uppercase text-slate-500 dark:text-slate-400 mt-1">
                    <span>Developer, UI/UX Designer</span>
                  </div>
                </div>

                {/* Social Links Grid */}
                <div className="flex gap-2 pt-3 border-t border-slate-200/20 dark:border-slate-800/30">
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

              </div>
            </div>

            {/* Mobile Navigation — horizontal scrollable pill bar */}
            <nav className="flex lg:hidden overflow-x-auto gap-2 pb-1 mt-4 pt-4 border-t border-slate-200/50 dark:border-slate-800/50 scrollbar-hide [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {[
                { id: "experience", label: "Experience", icon: <BriefcaseBusiness className="h-4 w-4" /> },
                { id: "credentials", label: "Credentials", icon: <GraduationCap className="h-4 w-4" /> },
                { id: "skills", label: "Skills", icon: <Cpu className="h-4 w-4" /> },
                { id: "projects", label: "Projects", icon: <LayoutGrid className="h-4 w-4" /> },
                { id: "about", label: "About", icon: <CircleUserRound className="h-4 w-4" /> },
                { id: "contact", label: "Contact", icon: <AtSign className="h-4 w-4" /> }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-shrink-0 flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
                    activeTab === tab.id
                      ? "bg-[#1a1a1a] text-white dark:bg-white dark:text-[#1a1a1a] shadow-sm"
                      : "bg-slate-100 dark:bg-slate-800/60 text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700"
                  }`}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
              <a
                href={profile.resumeUrl}
                className="flex-shrink-0 flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer bg-slate-100 dark:bg-slate-800/60 text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700"
              >
                <ScrollText className="h-4 w-4" />
                Resume
              </a>
            </nav>
          </aside>

          {/* Right Column: Dynamic Panel Content */}
          <section className="lg:col-span-8 flex flex-col w-full lg:border-l lg:border-slate-200/50 dark:lg:border-slate-800/50 lg:pl-10">
            <div className="flex-1 flex flex-col">
              
              {/* TAB 1: WORK EXPERIENCE */}
              {activeTab === "experience" && (
                <div className="flex-1 flex flex-col">
                  {/* Tab Title */}
                  <div className="flex items-center gap-3 pb-6 border-b border-slate-200/60 dark:border-slate-800/60 mb-6">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#D4A017]/10 text-[#D4A017] border border-[#D4A017]/20">
                      <BriefcaseBusiness className="h-5 w-5" />
                    </div>
                    <h2 className="text-xl font-bold text-slate-950 dark:text-white">Experience</h2>
                  </div>

                  {/* Experience Timeline/List */}
                  <div className="space-y-8 flex-1">
                    {experiences.map((exp, idx) => (
                      <div 
                        key={exp.id} 
                        className="group relative pb-8 last:pb-0 border-b border-slate-200/50 dark:border-slate-800/30 last:border-0 overflow-hidden"
                      >
                        {/* HSI Background Logo Watermark */}
                        {exp.id === "exp-1" && (
                          <div
                            className="pointer-events-none absolute right-0 -bottom-10 w-72 h-36 opacity-[0.13] select-none pr-3"
                            aria-hidden="true"
                          >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src="/hsi-logo.png"
                              alt=""
                              className="w-full h-full object-contain object-right"
                            />
                          </div>
                        )}
                        {/* Header Row */}
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-3">
                          <div>
                            <h3 className="text-base md:text-lg font-bold text-slate-950 dark:text-white">
                              {exp.role}
                            </h3>
                            <p
                              className="font-semibold text-sm"
                              style={exp.id === "exp-1" ? { color: "#D4A017" } : undefined}
                            >
                              {exp.companyUrl ? (
                                <a
                                  href={exp.companyUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className={`hover:underline inline-flex items-center gap-1 transition-colors ${
                                    exp.id === "exp-1"
                                      ? "hover:opacity-80"
                                      : "text-[#D4A017] dark:text-[#D4A017] hover:text-[#D4A017] dark:hover:text-[#D4A017]"
                                  }`}
                                  style={exp.id === "exp-1" ? { color: "#D4A017" } : undefined}
                                >
                                  {exp.company}
                                  <ExternalLink className="h-3 w-3" />
                                </a>
                              ) : (
                                exp.company
                              )}
                            </p>
                          </div>
                          <span className="text-xs font-semibold text-slate-500 dark:text-slate-450 sm:text-right bg-slate-100 dark:bg-slate-800/60 py-1 px-2.5 rounded-lg w-max border border-slate-200/30 dark:border-slate-850">
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
                            <h4 className="text-[11px] font-bold text-slate-450 dark:text-slate-500 uppercase tracking-wider mb-2">
                              Key Achievements
                            </h4>
                            <ul className="space-y-2">
                              {exp.description.slice(1).map((point, pIdx) => (
                                <li key={pIdx} className="flex items-start gap-2.5 text-slate-650 dark:text-slate-350 text-xs md:text-sm">
                                   <div className="flex-shrink-0 mt-[5px] h-2 w-2 rounded-full bg-slate-400 dark:bg-white shadow-[0_0_6px_rgba(148,163,184,0.7)] dark:shadow-[0_0_6px_rgba(255,255,255,0.7)]" />
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

                        {/* Internship Memories Carousel — only for exp-1 */}
                        {exp.id === "exp-1" && (
                          <div className="mt-7">
                            {/* Section label */}
                            <div className="flex items-center gap-2 mb-3">
                              <Images className="h-4 w-4 text-[#D4A017]" />
                              <span className="text-[11px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">
                                Internship Memories
                              </span>
                            </div>

                            {/* Carousel container */}
                            <div className="relative w-full overflow-hidden rounded-2xl ring-1 ring-slate-200 dark:ring-slate-800 bg-slate-100 dark:bg-slate-950 aspect-[16/9] group/carousel">

                              {/* Slides */}
                              {internshipImages.map((src, i) => (
                                <div
                                  key={i}
                                  className={`absolute inset-0 transition-opacity duration-700 ${
                                    i === carouselIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                                  }`}
                                >
                                  {/* eslint-disable-next-line @next/next/no-img-element */}
                                  <img
                                    src={src}
                                    alt={`Internship memory ${i + 1}`}
                                    className="w-full h-full object-cover cursor-zoom-in"
                                    onClick={() => setLightboxImage(src)}
                                  />
                                  {/* Subtle gradient overlay */}
                                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                                </div>
                              ))}

                              {/* Prev Button */}
                              <button
                                onClick={() => setCarouselIndex((prev) => (prev - 1 + internshipImages.length) % internshipImages.length)}
                                className="absolute left-2.5 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-black/40 hover:bg-black/65 text-white flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 transition-all duration-200 backdrop-blur-sm cursor-pointer"
                                aria-label="Previous image"
                              >
                                <ChevronLeft className="h-4 w-4" />
                              </button>

                              {/* Next Button */}
                              <button
                                onClick={() => setCarouselIndex((prev) => (prev + 1) % internshipImages.length)}
                                className="absolute right-2.5 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-black/40 hover:bg-black/65 text-white flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 transition-all duration-200 backdrop-blur-sm cursor-pointer"
                                aria-label="Next image"
                              >
                                <ChevronRight className="h-4 w-4" />
                              </button>

                              {/* Dot indicators */}
                              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5">
                                {internshipImages.map((_, i) => (
                                  <button
                                    key={i}
                                    onClick={() => setCarouselIndex(i)}
                                    className={`rounded-full transition-all duration-300 cursor-pointer ${
                                      i === carouselIndex
                                        ? "w-5 h-1.5 bg-white"
                                        : "w-1.5 h-1.5 bg-white/50 hover:bg-white/80"
                                    }`}
                                    aria-label={`Go to image ${i + 1}`}
                                  />
                                ))}
                              </div>

                              {/* Image counter */}
                              <div className="absolute top-2.5 right-3 z-20 text-[10px] font-bold text-white/80 bg-black/30 backdrop-blur-sm px-2 py-0.5 rounded-full">
                                {carouselIndex + 1} / {internshipImages.length}
                              </div>
                            </div>
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
                  <div className="flex items-center gap-3 pb-6 border-b border-slate-200/60 dark:border-slate-800/60 mb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#D4A017]/10 text-[#D4A017] border border-[#D4A017]/20">
                      <GraduationCap className="h-5 w-5" />
                    </div>
                    <h2 className="text-xl font-bold text-slate-950 dark:text-white">Credentials</h2>
                  </div>

                  {/* Sub-navigation pills */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {[
                      { label: "Education", href: "#cred-education" },
                       { label: "Awards", href: "#cred-awards" },
                       { label: "Certifications", href: "#cred-certifications" }
                    ].map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        onClick={(e) => {
                          e.preventDefault();
                          const container = document.getElementById("cred-scroll-container");
                          const target = document.getElementById(item.href.slice(1));
                          if (container && target) {
                            container.scrollTo({ top: target.offsetTop, behavior: "smooth" });
                          }
                        }}
                        className="inline-flex items-center px-4 py-1.5 rounded-lg text-xs font-bold border transition-all duration-200 cursor-pointer bg-slate-100 dark:bg-slate-800/60 text-slate-600 dark:text-slate-300 border-slate-200/80 dark:border-slate-700/50 hover:bg-slate-200 dark:hover:bg-slate-700/60"
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>

                  {/* Scrollable sections container */}
                  <div id="cred-scroll-container" className="overflow-y-auto max-h-[65vh] pr-1 space-y-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">

                  {/* EDUCATION SECTION */}
                  <div id="cred-education" className="mb-10 scroll-mt-6">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#D4A017]/10 text-[#D4A017] border border-[#D4A017]/20">
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422A12.083 12.083 0 0112 21a12.083 12.083 0 01-6.16-3.422L12 14z" />
                        </svg>
                      </div>
                      <h3 className="text-xs font-bold text-slate-950 dark:text-white uppercase tracking-wider">Education</h3>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 p-5 rounded-2xl border border-slate-200/50 dark:border-slate-800/40 bg-slate-50/50 dark:bg-slate-900/20">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 h-12 w-12 rounded-xl overflow-hidden mt-0.5">
                          <img src="/cnsc-logo.png" alt="CNSC" className="w-full h-full object-contain" />
                        </div>
                        <div>
                          <h4 className="text-base font-bold text-slate-950 dark:text-white leading-snug">University of Camarines Norte</h4>
                          <p className="text-sm font-semibold text-[#D4A017] dark:text-[#D4A017] mt-0.5">Bachelor of Science in Information Technology</p>
                          <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mt-1">GWA: <span className="text-green-600 dark:text-green-500 font-bold">1.6</span></p>
                        </div>
                      </div>
                      <span className="flex-shrink-0 inline-flex items-center gap-1.5 text-[11px] font-bold text-[#D4A017] dark:text-[#D4A017] bg-[#D4A017]/10 dark:bg-[#D4A017]/5 px-2.5 py-1 rounded-md border border-[#D4A017]/15 whitespace-nowrap w-fit">
                        <svg className="h-3.5 w-3.5 text-[#D4A017]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                          <line x1="16" y1="2" x2="16" y2="6"></line>
                          <line x1="8" y1="2" x2="8" y2="6"></line>
                          <line x1="3" y1="10" x2="21" y2="10"></line>
                        </svg>
                        Graduated: June 2026
                      </span>
                    </div>
                  </div>

                  {/* AWARDS & RECOGNITION SECTION */}
                  <div id="cred-awards" className="mb-10 pt-8 border-t border-slate-200/60 dark:border-slate-800/60 scroll-mt-6">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#D4A017]/10 text-[#D4A017] border border-[#D4A017]/20">
                        <Award className="h-4 w-4" />
                      </div>
                      <h3 className="text-xs font-bold text-slate-950 dark:text-white uppercase tracking-wider">Awards & Recognition</h3>
                    </div>

                    <div className="flex flex-col gap-5">
                      {/* Award 1: Academic Distinction Awardee */}
                      <div className="p-5 rounded-2xl border border-[#D4A017]/15 dark:border-[#D4A017]/10 bg-[#D4A017]/[0.03] dark:bg-[#D4A017]/[0.02]">
                        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-4">
                          <div className="flex items-start gap-3">
                            <div className="flex-shrink-0 mt-0.5 flex h-7 w-7 items-center justify-center rounded-lg bg-[#D4A017]/10 text-[#D4A017] border border-[#D4A017]/20">
                              <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                              </svg>
                            </div>
                            <h4 className="text-sm font-bold text-slate-950 dark:text-white leading-snug">Academic Distinction Awardee</h4>
                          </div>
                          <span className="flex-shrink-0 text-[11px] font-bold text-[#D4A017] dark:text-[#D4A017] bg-[#D4A017]/10 px-2.5 py-1 rounded-md border border-[#D4A017]/15 whitespace-nowrap w-fit">
                            June 26, 2026
                          </span>
                        </div>
                        <ul className="space-y-2.5 pl-10">
                          {[
                            "Recognized for outstanding academic performance and maintaining a high General Weighted Average (GWA) throughout the Information Technology program."
                          ].map((point, i) => (
                            <li key={i} className="flex items-start gap-2.5 text-slate-650 dark:text-slate-350 text-xs md:text-sm">
                              <div className="flex-shrink-0 mt-[5px] h-2 w-2 rounded-full bg-slate-400 dark:bg-white shadow-[0_0_6px_rgba(148,163,184,0.7)] dark:shadow-[0_0_6px_rgba(255,255,255,0.7)]" />
                              <span className="leading-relaxed">{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Award 2: Best in Capstone */}
                      <div className="p-5 rounded-2xl border border-[#D4A017]/15 dark:border-[#D4A017]/10 bg-[#D4A017]/[0.03] dark:bg-[#D4A017]/[0.02]">
                        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-4">
                          <div className="flex items-start gap-3">
                            <div className="flex-shrink-0 mt-0.5 flex h-7 w-7 items-center justify-center rounded-lg bg-[#D4A017]/10 text-[#D4A017] border border-[#D4A017]/20">
                              <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                              </svg>
                            </div>
                            <h4 className="text-sm font-bold text-slate-950 dark:text-white leading-snug">Best in Capstone Project</h4>
                          </div>
                          <span className="flex-shrink-0 text-[11px] font-bold text-[#D4A017] dark:text-[#D4A017] bg-[#D4A017]/10 px-2.5 py-1 rounded-md border border-[#D4A017]/15 whitespace-nowrap w-fit">
                            June 26, 2026
                          </span>
                        </div>
                        <ul className="space-y-2.5 pl-10">
                          {[
                            `Awarded Best in Capstone Project for "TricyPay – Smart Transportation Management System."`,
                            "Contributed as Mobile & IoT Application Developer in developing a smart transportation management system integrating mobile application and IoT technologies.",
                            "The project focused on fare automation, payment processing, and operational monitoring for local transportation organizations."
                          ].map((point, i) => (
                            <li key={i} className="flex items-start gap-2.5 text-slate-650 dark:text-slate-350 text-xs md:text-sm">
                              <div className="flex-shrink-0 mt-[5px] h-2 w-2 rounded-full bg-slate-400 dark:bg-white shadow-[0_0_6px_rgba(148,163,184,0.7)] dark:shadow-[0_0_6px_rgba(255,255,255,0.7)]" />
                              <span className="leading-relaxed">{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Award 3: Special Citation */}
                      <div className="p-5 rounded-2xl border border-[#D4A017]/15 dark:border-[#D4A017]/10 bg-[#D4A017]/[0.03] dark:bg-[#D4A017]/[0.02]">
                        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-4">
                          <div className="flex items-start gap-3">
                            <div className="flex-shrink-0 mt-0.5 flex h-7 w-7 items-center justify-center rounded-lg bg-[#D4A017]/10 text-[#D4A017] border border-[#D4A017]/20">
                              <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                              </svg>
                            </div>
                            <h4 className="text-sm font-bold text-slate-950 dark:text-white leading-snug">Special Citation for Research Publication</h4>
                          </div>
                          <span className="flex-shrink-0 text-[11px] font-bold text-[#D4A017] dark:text-[#D4A017] bg-[#D4A017]/10 px-2.5 py-1 rounded-md border border-[#D4A017]/15 whitespace-nowrap w-fit">
                            June 26, 2026
                          </span>
                        </div>
                        <ul className="space-y-2.5 pl-10">
                          {[
                            "Agent-Based Simulation and GIS Mapping of Tuberculosis Transmission: A Case Study in Daet, Camarines Norte.",
                            "Published in Zenodo."
                          ].map((point, i) => (
                            <li key={i} className="flex items-start gap-2.5 text-slate-650 dark:text-slate-350 text-xs md:text-sm">
                              <div className="flex-shrink-0 mt-[5px] h-2 w-2 rounded-full bg-slate-400 dark:bg-white shadow-[0_0_6px_rgba(148,163,184,0.7)] dark:shadow-[0_0_6px_rgba(255,255,255,0.7)]" />
                              <span className="leading-relaxed">{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* CERTIFICATIONS SECTION */}
                  <div id="cred-certifications" className="pt-8 border-t border-slate-200/60 dark:border-slate-800/60 scroll-mt-6">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#D4A017]/10 text-[#D4A017] border border-[#D4A017]/20">
                        <Award className="h-4 w-4" />
                      </div>
                      <h3 className="text-xs font-bold text-slate-950 dark:text-white uppercase tracking-wider">Certifications</h3>
                    </div>
                    <div className="flex flex-col space-y-10">
                      {certifications.map((cert) => (
                        <div
                          key={cert.id}
                          className="group flex flex-col md:flex-row gap-6 pb-10 border-b border-slate-200/50 dark:border-slate-800/30 last:border-0 last:pb-0"
                        >
                          {/* Left Column: Image or Icon Placeholder */}
                          <div className="w-full md:w-2/5 flex flex-col gap-3.5 flex-shrink-0 self-start">
                            <div
                              className={`relative w-full overflow-hidden rounded-xl ring-1 ring-slate-200 dark:ring-slate-800 bg-slate-100 dark:bg-slate-900 aspect-[16/10] ${cert.image ? "cursor-zoom-in group/cert" : "flex items-center justify-center"}`}
                              onClick={() => cert.image && setLightboxImage(cert.image)}
                            >
                              {cert.image ? (
                                <>
                                  {/* eslint-disable-next-line @next/next/no-img-element */}
                                  <img
                                    src={cert.image}
                                    alt={`${cert.title} certificate`}
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover/cert:scale-105"
                                  />
                                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover/cert:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-3">
                                    <span className="text-xs font-bold text-white bg-black/50 px-3 py-1.5 rounded-full backdrop-blur-sm">
                                      Click to enlarge
                                    </span>
                                  </div>
                                </>
                              ) : (
                                <div className="flex flex-col items-center justify-center gap-2 text-[#D4A017]/50">
                                  <Award className="h-10 w-10" />
                                  <span className="text-[10px] font-semibold text-slate-400 dark:text-slate-600">No image</span>
                                </div>
                              )}
                            </div>

                            {/* Date badge below image */}
                            <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#D4A017] dark:text-[#D4A017] bg-[#D4A017]/10 dark:bg-[#D4A017]/5 px-2.5 py-0.5 rounded-md border border-[#D4A017]/15 w-fit">
                              <svg className="h-3.5 w-3.5 text-[#D4A017]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                <line x1="16" y1="2" x2="16" y2="6"></line>
                                <line x1="8" y1="2" x2="8" y2="6"></line>
                                <line x1="3" y1="10" x2="21" y2="10"></line>
                              </svg>
                              {cert.date}
                            </div>
                          </div>

                          {/* Right Column: Cert Details */}
                          <div className="flex-1 flex flex-col justify-between py-1">
                            <div>
                              <h3 className="text-lg font-bold text-slate-950 dark:text-white leading-snug mb-1 group-hover:text-[#D4A017] transition-colors">
                                {cert.title}
                              </h3>
                              <p className="text-xs font-semibold text-[#D4A017] dark:text-[#D4A017] mb-4">
                                {cert.issuer}
                              </p>

                              <div className="flex flex-wrap items-center gap-2 mt-2">
                                <span className="text-xs font-semibold text-slate-500 dark:text-slate-450 bg-slate-100 dark:bg-slate-800/60 py-1 px-2.5 rounded-lg border border-slate-200/30 dark:border-slate-850">
                                  Issued {cert.date}
                                </span>
                                {cert.credentialUrl && (
                                  <a
                                    href={cert.credentialUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xs font-bold text-[#D4A017] hover:text-[#D4A017] dark:text-[#D4A017] dark:hover:text-[#D4A017] flex items-center gap-1 transition"
                                  >
                                    Verify
                                    <ExternalLink className="h-3 w-3" />
                                  </a>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  </div>{/* end cred-scroll-container */}

                </div>
              )}


              {/* TAB 3: SKILLS & CATEGORIES */}
              {activeTab === "skills" && (
                <div className="flex-1 flex flex-col">
                  {/* Tab Title */}
                  <div className="flex items-center gap-3 pb-6 border-b border-slate-200/60 dark:border-slate-800/60 mb-6">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#D4A017]/10 text-[#D4A017] border border-[#D4A017]/20">
                      <Cpu className="h-5 w-5" />
                    </div>
                    <h2 className="text-xl font-bold text-slate-950 dark:text-white">Skills & Expertise</h2>
                  </div>

                  {/* Skills List */}
                  <div className="flex flex-col space-y-10 flex-1">
                    {skillCategories.map((cat, idx) => (
                      <div
                        key={idx}
                        className="flex flex-col"
                      >
                        <h3 className="text-sm font-bold text-slate-950 dark:text-white border-b border-slate-200/50 dark:border-slate-800/50 pb-2.5 mb-5">
                          <span className="uppercase tracking-wider text-xs">{cat.category}</span>
                        </h3>

                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5">
                          {cat.skills.map((skill) => (
                            <div 
                              key={skill.name}
                              className="flex items-center gap-3 p-3.5 rounded-xl border border-slate-200/50 dark:border-slate-800/40 bg-slate-50/50 dark:bg-slate-900/30 hover:border-[#D4A017]/30 hover:bg-[#D4A017]/[0.02] transition duration-200 group"
                            >
                              <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-lg bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-900 shadow-sm transition-colors duration-200">
                                {getSkillIcon(skill.name)}
                              </div>
                              <span className="text-xs md:text-sm font-semibold text-slate-700 dark:text-slate-350 group-hover:text-slate-950 dark:group-hover:text-white transition-colors">
                                {skill.name}
                              </span>
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
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#D4A017]/10 text-[#D4A017] border border-[#D4A017]/20">
                      <LayoutGrid className="h-5 w-5" />
                    </div>
                    <h2 className="text-xl font-bold text-slate-950 dark:text-white">Featured Projects</h2>
                  </div>



                  {/* Projects List */}
                  <div className="flex flex-col space-y-10 flex-1">
                    {filteredProjects.map((project) => (
                      <div
                        key={project.id}
                        className="group flex flex-col md:flex-row gap-6 pb-10 border-b border-slate-200/50 dark:border-slate-800/30 last:border-0 last:pb-0"
                      >
                        {/* Left Column: Image Container & Tags */}
                        <div className="w-full md:w-2/5 flex flex-col gap-3.5 flex-shrink-0 self-start">
                          {/* Image Container with Zoom hover */}
                          <div 
                            className="relative w-full aspect-[16/10] overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-950 ring-1 ring-slate-200 dark:ring-slate-800 cursor-zoom-in group/img"
                            onClick={() => setLightboxImage(project.image)}
                          >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={project.image}
                              alt={project.title}
                              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            {project.featured && (
                              <span className="absolute top-2 left-2 px-2 py-0.5 rounded bg-[#D4A017] text-slate-950 text-[9px] font-extrabold uppercase tracking-widest ring-1 ring-[#D4A017]/20">
                                Featured
                              </span>
                            )}
                          </div>

                          {/* Date Period & Tags wrapper */}
                          <div className="flex flex-col gap-2.5">
                            {project.period && (
                              <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#D4A017] dark:text-[#D4A017] bg-[#D4A017]/10 dark:bg-[#D4A017]/5 px-2.5 py-0.5 rounded-md border border-[#D4A017]/15 w-fit">
                                <svg className="h-3.5 w-3.5 text-[#D4A017]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                  <line x1="16" y1="2" x2="16" y2="6"></line>
                                  <line x1="8" y1="2" x2="8" y2="6"></line>
                                  <line x1="3" y1="10" x2="21" y2="10"></line>
                                </svg>
                                {project.period}
                              </div>
                            )}

                            {/* Tags list */}
                            <div className="flex flex-wrap gap-1.5">
                              {project.tags.map((t) => (
                                <span
                                  key={t}
                                  className="text-[10px] font-bold bg-slate-100 border border-slate-200/50 dark:bg-slate-900 dark:border-slate-800 px-2.5 py-1 rounded text-slate-600 dark:text-slate-400"
                                >
                                  {t}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Right Column: Project Info details */}
                        <div className="flex-1 flex flex-col justify-between py-1">
                          <div>
                            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-2">
                              <h3 className="text-lg font-bold text-slate-950 dark:text-white group-hover:text-[#D4A017] transition-colors">
                                {project.title}
                              </h3>
                            </div>

                            {project.role && (
                              <p className="text-xs font-semibold text-[#D4A017] dark:text-[#D4A017] mb-2">
                                {project.role} {project.location && `• ${project.location}`}
                              </p>
                            )}

                            {project.descriptionPoints ? (
                              <div className="mb-4 mt-2">
                                <ul className="space-y-2">
                                  {project.descriptionPoints.map((point, pIdx) => (
                                    <li key={pIdx} className="flex items-start gap-2.5 text-slate-650 dark:text-slate-355 text-xs md:text-sm">
                                     <div className="flex-shrink-0 mt-[5px] h-2 w-2 rounded-full bg-slate-400 dark:bg-white shadow-[0_0_6px_rgba(148,163,184,0.7)] dark:shadow-[0_0_6px_rgba(255,255,255,0.7)]" />
                                      <span className="leading-relaxed">{point}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ) : (
                              <p className="text-slate-650 dark:text-slate-350 text-sm mt-2 leading-relaxed">
                                {project.description}
                              </p>
                            )}
                          </div>

                          {/* Footer Action Links */}
                          <div className="mt-6 flex items-center gap-6">
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
                                className="inline-flex items-center text-xs font-bold text-[#D4A017] hover:text-[#D4A017] dark:text-[#D4A017] dark:hover:text-[#D4A017] transition gap-1"
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
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#D4A017]/10 text-[#D4A017] border border-[#D4A017]/20">
                      <CircleUserRound className="h-5 w-5" />
                    </div>
                    <h2 className="text-xl font-bold text-slate-950 dark:text-white">About Me</h2>
                  </div>

                  <div className="space-y-6 flex-1">
                    {/* Role Heading */}
                    <h3 className="text-base md:text-lg font-bold text-slate-950 dark:text-white flex items-center gap-2">
                      <Sparkles className="h-4 w-4 text-[#D4A017]" />
                      Turning ideas into reliable digital solutions
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
                        { label: "Professional Internship", value: "1" },
                        { label: "Projects Completed", value: "6+" },
                        { label: "Awards & Recognitions", value: "2" }
                      ].map((stat, i) => (
                        <div key={i} className="text-center md:text-left rounded-xl p-4 bg-slate-50 dark:bg-slate-950/20 border border-slate-200/50 dark:border-slate-850">
                          <span className="block text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white bg-gradient-to-r from-[#D4A017] to-[#D4A017] dark:from-[#D4A017] dark:to-[#D4A017] bg-clip-text text-transparent">
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
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#D4A017]/10 text-[#D4A017] border border-[#D4A017]/20">
                      <AtSign className="h-5 w-5" />
                    </div>
                    <h2 className="text-xl font-bold text-slate-950 dark:text-white">Get In Touch</h2>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 flex-1">
                    {/* Details Column */}
                    <div className="lg:col-span-5 space-y-4">
                      <div className="rounded-2xl border border-slate-200 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-950/20 p-5 space-y-5">
                        <h3 className="text-sm font-bold text-slate-950 dark:text-white mb-3">Contact Information</h3>
                        
                        {/* Email */}
                        <div className="flex items-start gap-3 w-full">
                          <div className="flex-shrink-0 flex h-8 w-8 items-center justify-center rounded-lg bg-[#D4A017]/10 text-[#D4A017] border border-[#D4A017]/20">
                            <Mail className="h-4.5 w-4.5" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <h4 className="text-xs font-bold text-slate-400 dark:text-slate-500">Email Me</h4>
                            <a href={`mailto:${profile.email}`} className="text-[11px] lg:text-xs text-[#D4A017] dark:text-[#D4A017] hover:underline mt-0.5 block tracking-tight font-semibold whitespace-nowrap">
                              {profile.email}
                            </a>
                          </div>
                        </div>

                        {/* Location */}
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 flex h-8 w-8 items-center justify-center rounded-lg bg-[#D4A017]/10 text-[#D4A017] border border-[#D4A017]/20">
                            <MapPin className="h-4.5 w-4.5" />
                          </div>
                          <div>
                            <h4 className="text-xs font-bold text-slate-400 dark:text-slate-500">Location</h4>
                            <p className="text-xs md:text-sm text-slate-650 dark:text-slate-350 mt-0.5 font-medium">{profile.location}</p>
                            <p className="text-[10px] md:text-[11px] font-bold text-[#D4A017] dark:text-[#D4A017] mt-1">Willing to relocate for work</p>
                          </div>
                        </div>

                        {/* Response Time */}
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 flex h-8 w-8 items-center justify-center rounded-lg bg-[#D4A017]/10 text-[#D4A017] border border-[#D4A017]/20">
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
                    <form onSubmit={handleContactSubmit} className="lg:col-span-7 space-y-4">
                      <div className="flex flex-col gap-4">
                        <div>
                          <label htmlFor="form-name" className="block text-xs font-semibold text-slate-500 dark:text-slate-455 mb-1">Your Name</label>
                          <input
                            type="text"
                            id="form-name"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="Krizza"
                            className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:border-[#D4A017] dark:focus:border-[#D4A017] focus:outline-none transition duration-200"
                          />
                        </div>
                        <div>
                          <label htmlFor="form-email" className="block text-xs font-semibold text-slate-500 dark:text-slate-455 mb-1">Email</label>
                          <input
                            type="email"
                            id="form-email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="hello@example.com"
                            className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:border-[#D4A017] dark:focus:border-[#D4A017] focus:outline-none transition duration-200"
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
                          className="w-full text-xs md:text-sm px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:border-[#D4A017] dark:focus:border-[#D4A017] focus:outline-none transition duration-200"
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
                          className="w-full text-xs md:text-sm px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:border-[#D4A017] dark:focus:border-[#D4A017] focus:outline-none resize-none transition duration-200"
                        />
                      </div>

                      {contactStatus === "success" && (
                        <div className="p-3 bg-[#D4A017]/10 text-[#D4A017] text-xs md:text-sm font-semibold rounded-lg border border-[#D4A017]/20">
                          Your message has been sent successfully!
                        </div>
                      )}
                      {contactStatus === "error" && (
                        <div className="p-3 bg-red-500/10 text-red-500 text-xs md:text-sm font-semibold rounded-lg border border-red-500/20">
                          Oops! Something went wrong. Please try again.
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
        </div>
      </main>

      {/* Footer Copyright */}
      <footer className="w-full border-t border-slate-200/50 dark:border-slate-800/50 py-6 text-center text-[10px] md:text-xs text-slate-400 dark:text-slate-600 bg-white/40 dark:bg-slate-950/20 backdrop-blur-sm transition-colors duration-300 mt-auto">
        <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
      </footer>
      </div>

      {/* Lightbox / Image Zoom Modal */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md cursor-zoom-out transition-all duration-300 animate-fadeIn"
          onClick={() => setLightboxImage(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white hover:text-slate-350 p-2.5 rounded-full bg-slate-900/50 border border-slate-800/80 transition cursor-pointer"
            onClick={(e) => { e.stopPropagation(); setLightboxImage(null); }}
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <div className="relative max-w-[90vw] max-h-[85vh] select-none rounded-xl overflow-hidden shadow-2xl border border-slate-900 ring-1 ring-slate-800" onClick={(e) => e.stopPropagation()}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={lightboxImage} 
              alt="Project Showcase Zoom" 
              className="max-w-full max-h-[85vh] object-contain rounded-xl select-none"
            />
          </div>
        </div>
      )}
    </div>
  );
}
