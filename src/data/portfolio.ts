export interface Profile {
  name: string;
  title: string;
  subTitle: string;
  avatar: string;
  bio: string[];
  email: string;
  location: string;
  github: string;
  linkedin: string;
  twitter?: string;
  resumeUrl: string;
}

export interface Skill {
  name: string;
  level: number; // 0 to 100
  category: string;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface Experience {
  id: string;
  company: string;
  companyUrl?: string;
  role: string;
  period: string;
  location: string;
  description: string[];
  skills: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
  period?: string;
  role?: string;
  location?: string;
  descriptionPoints?: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  image?: string;
}

export interface PortfolioData {
  profile: Profile;
  skillCategories: SkillCategory[];
  experiences: Experience[];
  projects: Project[];
  certifications: Certification[];
}

export const portfolioData: PortfolioData = {
  profile: {
    name: "Krizza Heart Esperas",
    title: "Junior Software Developer",
    subTitle: "Building High-Performance Web Applications",
    avatar: "/profile.jpg",
    bio: [
      "I am a passionate software engineer with 5+ years of experience designing and implementing scalable web applications, REST/GraphQL APIs, and cloud solutions.",
      "Dedicated to writing clean, maintainable code, optimizing application performance, and crafting pixel-perfect, responsive user interfaces with modern frontend technologies.",
      "When I'm not coding, I contribute to open-source projects, write technical articles, and mentor aspiring developers."
    ],
    email: "krizzaheart.esperas@gmail.com",
    location: "Daet, Camarines Norte",
    github: "https://github.com/krizzaheartesperas",
    linkedin: "https://www.linkedin.com/in/krizza-heart-esperas-550ab9368?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    twitter: "",
    resumeUrl: "#"
  },
  skillCategories: [
    {
      category: "Languages",
      skills: [
        { name: "JavaScript", level: 95, category: "Languages" },
        { name: "TypeScript", level: 90, category: "Languages" },
        { name: "Python", level: 80, category: "Languages" }
      ]
    },
    {
      category: "Frontend",
      skills: [
        { name: "HTML5", level: 95, category: "Frontend" },
        { name: "CSS3", level: 90, category: "Frontend" }
      ]
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", level: 90, category: "Backend" }
      ]
    },
    {
      category: "Database",
      skills: [
        { name: "Supabase", level: 90, category: "Database" },
        { name: "PostgreSQL", level: 85, category: "Database" }
      ]
    },
    {
      category: "Tools",
      skills: [
        { name: "Git", level: 95, category: "Tools" },
        { name: "GitHub", level: 95, category: "Tools" },
        { name: "VS Code", level: 95, category: "Tools" },
        { name: "Vercel", level: 90, category: "Tools" },
        { name: "Figma", level: 85, category: "Tools" },
        { name: "Canva", level: 85, category: "Tools" }
      ]
    },
    {
      category: "Concepts",
      skills: [
        { name: "REST APIs", level: 90, category: "Concepts" },
        { name: "Authentication", level: 90, category: "Concepts" },
        { name: "CRUD Operations", level: 95, category: "Concepts" },
        { name: "Responsive Design", level: 95, category: "Concepts" }
      ]
    },
    {
      category: "Core Technologies",
      skills: [
        { name: "JavaScript", level: 95, category: "Core Technologies" },
        { name: "TypeScript", level: 90, category: "Core Technologies" },
        { name: "Node.js", level: 90, category: "Core Technologies" },
        { name: "Supabase", level: 90, category: "Core Technologies" },
        { name: "PostgreSQL", level: 85, category: "Core Technologies" },
        { name: "Git", level: 95, category: "Core Technologies" },
        { name: "REST APIs", level: 90, category: "Core Technologies" }
      ]
    }
  ],
  experiences: [
    {
      id: "exp-1",
      company: "Highly Succeed Inc.",
      companyUrl: "https://highlysucceed.com/",
      role: "Web Developer Intern",
      period: "Feb 2026 - May 2026",
      location: "Mandaluyong City, Philippines",
      description: [
        "Independently designed, developed, tested, and deployed a Human Resource Information System (HRIS) as a solo project.",
        "Built the application using JavaScript, TypeScript, Node.js, and Supabase.",
        "Implemented authentication, employee management, and database-driven workflows.",
        "Managed database design, CRUD operations, and system functionality.",
        "Deployed and maintained the application on Vercel.",
        "Collaborated with supervisor, teammates, and colleagues to gather requirements and implement improvements."
      ],
      skills: ["JavaScript", "TypeScript", "Node.js", "Supabase", "Vercel"]
    },

  ],
  projects: [
    {
      id: "proj-1",
      title: "TricyPay – Smart Transportation Management System",
      description: "Assisted in developing a smart transportation management system and IoT-enabled fare collection device as part of a group project.",
      period: "January – December 2025",
      role: "Mobile & IoT Application Developer (Team Project)",
      location: "Daet, Camarines Norte",
      descriptionPoints: [
        "Assisted in developing a smart transportation management system as part of a group project.",
        "Contributed to the mobile application and IoT-enabled fare collection device.",
        "Automated fare computation, payment processing, and accurate change dispensing.",
        "Reduced manual transaction errors and improved operational monitoring for TRU and PSTMU."
      ],
      image: "/tricypay.png",
      tags: ["Mobile App", "IoT", "Automation", "Hardware Integration"],
      featured: true
    },
    {
      id: "proj-2",
      title: "Autonomous Egg Quality Sorting System Using IoT & Image Processing",
      description: "Participated in building an IoT-powered egg sorting system using Raspberry Pi and image processing for automated size, quality, and shape grading.",
      period: "February – December 2024",
      role: "IoT Developer (Team Project)",
      descriptionPoints: [
        "Participated in building an IoT-powered egg sorting system using Raspberry Pi and image processing.",
        "Classified duck eggs based on size, quality, and shape for consistent grading.",
        "Automated the sorting process to reduce manual labor and human error.",
        "Assisted in implementing real-time monitoring and data logging to support inventory management."
      ],
      image: "/eggsorting.jpg",
      tags: ["IoT", "Raspberry Pi", "Image Processing", "Automation", "Python"],
      featured: true
    },
    {
      id: "proj-3",
      title: "Cam Commute Guru – Tricycle Commuter Safety & Fare Assistance App",
      description: "Designed the user interface and user experience for a mobile application focused on safer tricycle commuting, including QR verification and fare calculation.",
      period: "November – December 2023",
      role: "UI/UX Designer (Academic Project)",
      location: "Camarines Norte",
      descriptionPoints: [
        "Designed the user interface and user experience for a mobile application focused on safer tricycle commuting.",
        "Implemented QR code scanning to verify driver and vehicle information.",
        "Designed a fare calculator to promote fair pricing and prevent overcharging.",
        "Created a secure incident reporting feature to help commuters contact proper authorities quickly."
      ],
      image: "/camcommute.png",
      tags: ["UI/UX Design", "Figma", "Mobile App Design", "Prototyping", "User Research"],
      featured: true
    }
  ],
  certifications: [
    {
      id: "cert-1",
      title: "Networking Basics",
      issuer: "Cisco Networking Academy",
      date: "December 2024",
      image: "/cert-cisco-networking.jpg"
    },
    {
      id: "cert-2",
      title: "Technical Support Fundamentals",
      issuer: "Coursera",
      date: "December 2024",
      image: "/cert-coursera-tsf.jpg",
      credentialUrl: "https://coursera.org/verify/Q8FXPRYHHD8J"
    },
    {
      id: "cert-3",
      title: "Bicol IT Students Congress (BITSCON) 2024",
      issuer: "Council of Deans for Information Technology Education, Inc.",
      date: "April 2024",
      image: "/cert-bitscon2024.jpg"
    },
    {
      id: "cert-4",
      title: "From Scroll to Skill: Empowering Students and Job Seekers Through Artificial Intelligence",
      issuer: "ICT Council of Camarines Norte, I-Konek",
      date: "March 2025",
      image: "/cert-scroll-to-skill.jpg"
    }
  ]
};
