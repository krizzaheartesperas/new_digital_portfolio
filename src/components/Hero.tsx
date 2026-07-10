import { portfolioData } from "@/data/portfolio";

export default function Hero() {
  const { name, title, subTitle, github, linkedin, twitter, email } = portfolioData.profile;

  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center overflow-hidden bg-slate-950 py-20">
      {/* Background Decorative Gradients */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-violet-600/10 blur-[128px]"></div>
        <div className="absolute -bottom-40 -right-40 h-[600px] w-[600px] rounded-full bg-indigo-600/10 blur-[128px]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        {/* Intro Tag */}
        <span className="inline-flex items-center rounded-full bg-violet-500/10 px-4 py-1.5 text-xs font-semibold text-violet-400 ring-1 ring-inset ring-violet-500/20 mb-6">
          Available for Opportunities
        </span>

        {/* Headline */}
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl md:text-7xl">
          Hi, I&apos;m{" "}
          <span className="block mt-2 bg-gradient-to-r from-violet-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
            {name}
          </span>
        </h1>

        {/* Subtitle */}
        <h2 className="mx-auto mt-6 max-w-2xl text-xl font-semibold text-slate-200 sm:text-2xl">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base text-slate-400 sm:text-lg">
          {subTitle}
        </p>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="#projects"
            className="rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition-all duration-300 hover:from-violet-500 hover:to-indigo-500 hover:scale-105 hover:shadow-indigo-500/35"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="rounded-full border border-slate-700 bg-slate-900/50 px-8 py-4 text-sm font-semibold text-slate-300 backdrop-blur-sm transition-all duration-300 hover:border-slate-600 hover:bg-slate-950 hover:text-white hover:scale-105"
          >
            Get In Touch
          </a>
        </div>

        {/* Social Links */}
        <div className="mt-12 flex justify-center space-x-6 text-slate-500">
          <a href={github} target="_blank" rel="noopener noreferrer" className="transition-colors duration-200 hover:text-white">
            <span className="sr-only">GitHub</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
            </svg>
          </a>
          <a href={linkedin} target="_blank" rel="noopener noreferrer" className="transition-colors duration-200 hover:text-white">
            <span className="sr-only">LinkedIn</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
            </svg>
          </a>
          {twitter && (
            <a href={twitter} target="_blank" rel="noopener noreferrer" className="transition-colors duration-200 hover:text-white">
              <span className="sr-only">Twitter</span>
              <svg className="h-5 w-5 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
          )}
          <a href={`mailto:${email}`} className="transition-colors duration-200 hover:text-white">
            <span className="sr-only">Email</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0l-7.5-4.615a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
