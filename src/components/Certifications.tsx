import { portfolioData } from "@/data/portfolio";

export default function Certifications() {
  const { certifications } = portfolioData;

  return (
    <section id="certifications" className="bg-slate-900 py-24 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Certifications</h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded bg-violet-500"></div>
          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            Professional credentials and validations of my technical expertise.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="flex items-start rounded-2xl border border-slate-800 bg-slate-950/40 p-6 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80 hover:bg-slate-950/60"
            >
              {/* Badge/Award Icon Wrapper */}
              <div className="flex-shrink-0 mr-4 mt-1 flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                </svg>
              </div>

              {/* Credential Details */}
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-bold text-white truncate">{cert.title}</h3>
                <p className="text-sm font-semibold text-slate-300 mt-1">{cert.issuer}</p>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-xs text-slate-400 font-medium">Issued {cert.date}</span>
                  {cert.credentialUrl && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-xs font-semibold text-violet-400 hover:text-violet-300"
                    >
                      Verify
                      <svg className="h-3 w-3 ml-1" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
