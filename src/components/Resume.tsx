import { portfolioData } from "@/data/portfolio";

export default function Resume() {
  const { resumeUrl, name, title } = portfolioData.profile;

  const summaryHighlights = [
    { title: "Education", details: "B.S. in Computer Science & Engineering" },
    { title: "Specialization", details: "Full-Stack Development, Cloud Architecture, DevOps" },
    { title: "Core Strengths", details: "TypeScript, React, Next.js, Node.js, SQL & NoSQL, AWS, Docker" },
  ];

  return (
    <section id="resume" className="bg-slate-950 py-24 text-white">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/40 p-8 md:p-12 backdrop-blur-sm">
          {/* Decorative mesh gradient */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 h-60 w-60 rounded-full bg-violet-600/10 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 h-60 w-60 rounded-full bg-indigo-600/10 blur-3xl"></div>

          <div className="relative z-10 grid grid-cols-1 gap-8 lg:grid-cols-12 items-center">
            {/* Left Side: Summary text */}
            <div className="lg:col-span-7">
              <span className="text-xs font-bold uppercase tracking-widest text-violet-400">Curriculum Vitae</span>
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl mt-2">Professional Resume</h2>
              <p className="mt-4 text-slate-400 leading-relaxed text-sm sm:text-base">
                Looking for a detailed breakdown of my qualifications, education, and full history? Download my comprehensive resume to read more about my experience and technical skill set.
              </p>

              <div className="mt-8 space-y-4">
                {summaryHighlights.map((item, idx) => (
                  <div key={idx} className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 border-l-2 border-violet-500/50 pl-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 w-32">{item.title}</span>
                    <span className="text-sm font-medium text-slate-200">{item.details}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side: Resume Download Button */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center bg-slate-950/60 rounded-2xl border border-slate-800/80 p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20 mb-4">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m.75 12l3 3m0 0l3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white text-center">{name}_Resume.pdf</h3>
              <p className="text-xs text-slate-400 text-center mt-1">PDF Format • 145 KB</p>

              <a
                href={resumeUrl}
                download
                className="mt-6 w-full rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 py-3.5 text-center text-sm font-semibold text-white transition-all duration-300 hover:from-violet-500 hover:to-indigo-500 hover:scale-[1.02]"
              >
                Download PDF Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
