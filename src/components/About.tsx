import { portfolioData } from "@/data/portfolio";

export default function About() {
  const { bio, avatar, location, email, title } = portfolioData.profile;

  const stats = [
    { label: "Years Experience", value: "5+" },
    { label: "Projects Completed", value: "25+" },
    { label: "Happy Clients", value: "15+" },
  ];

  return (
    <section id="about" className="bg-slate-900 py-24 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">About Me</h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded bg-violet-500"></div>
          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            Get to know my background, my journey, and what drives my passion for development.
          </p>
        </div>

        {/* Content Grid */}
        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Avatar & Key Details Card */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative group">
              {/* Decorative background border */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-600 opacity-30 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
              {/* Image container */}
              <div className="relative overflow-hidden rounded-2xl bg-slate-950 p-2">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={avatar}
                  alt="Krizza Heart Esperas Avatar"
                  className="h-80 w-80 object-cover object-top rounded-xl transition duration-500 group-hover:scale-105"
                />
              </div>
            </div>

            {/* Quick Details Box */}
            <div className="mt-8 w-full max-w-sm rounded-xl border border-slate-800 bg-slate-950/50 p-6 backdrop-blur-sm">
              <div className="space-y-4">
                <div className="flex justify-between border-b border-slate-800/60 pb-3">
                  <span className="text-slate-400 text-sm">Role</span>
                  <span className="font-medium text-slate-200 text-sm">{title}</span>
                </div>
                <div className="flex justify-between border-b border-slate-800/60 pb-3">
                  <span className="text-slate-400 text-sm">Location</span>
                  <span className="font-medium text-slate-200 text-sm">{location}</span>
                </div>
                <div className="flex justify-between pb-1">
                  <span className="text-slate-400 text-sm">Email</span>
                  <span className="font-medium text-slate-200 text-sm">{email}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bio & Stats */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <h3 className="text-2xl font-semibold text-white mb-6">
              Engineering solutions to real-world problems
            </h3>
            <div className="space-y-6 text-slate-300">
              {bio.map((paragraph, idx) => (
                <p key={idx} className="leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Stats list */}
            <div className="mt-10 grid grid-cols-3 gap-4 border-t border-slate-800 pt-10">
              {stats.map((stat, idx) => (
                <div key={idx} className="text-center sm:text-left">
                  <div className="text-3xl font-extrabold text-white md:text-4xl bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="mt-2 text-xs font-medium uppercase tracking-wider text-slate-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
