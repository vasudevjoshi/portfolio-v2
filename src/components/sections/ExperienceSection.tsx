function ExperienceSection() {
  return (
    <section id="experience" className="border-t border-white/10 bg-[#0b0f19] px-6 py-16 text-slate-100 sm:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center rounded-full border border-sky-500/20 bg-sky-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-sky-300">
            Professional Journey
          </p>
          <h1 className="mt-6 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Experience &amp; Education
          </h1>
          <p className="mt-4 text-base leading-7 text-slate-400 sm:text-lg">
            An overview of my professional contributions, research achievements,
            and academic foundation in computer science.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.75fr_0.95fr] lg:items-start">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-white">
              Career Timeline
            </h2>

            <div className="mt-6 space-y-6">
              <article className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-[0_16px_30px_rgba(0,0,0,0.22)]">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                    Developer
                    </h3>
                    <p className="mt-1 text-sm font-medium text-sky-300">LogX</p>
                  </div>
                  <span className="rounded-full border border-sky-500/20 bg-sky-500/10 px-3 py-1 text-xs font-semibold text-sky-300">
                    2026 - Present
                  </span>
                </div>

                <p className="mt-5 text-base leading-7 text-slate-400">
                  Spearheading the development of a comprehensive trade journaling
                  platform designed for professional traders.
                </p>

                <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-300 sm:text-base">
                  <li>Integrated Kite API for real-time trade data synchronization and order management.</li>
                  <li>Engineered a proprietary emotion tracking module to help traders analyze psychological biases in decision making.</li>
                  <li>Built an automated reporting engine generating insights into profitability and risk-reward ratios.</li>
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  <span className="rounded-xl border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-slate-200">React</span>
                  <span className="rounded-xl border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-slate-200">FastAPI</span>
                  <span className="rounded-xl border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-slate-200">Kite Connect</span>
                  <span className="rounded-xl border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-slate-200">PostgreSQL</span>
                </div>
              </article>

              <article className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-[0_16px_30px_rgba(0,0,0,0.22)]">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                    Intern
                    </h3>
                    <p className="mt-1 text-sm font-medium text-emerald-300">OpenText</p>
                  </div>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-slate-300">
                    October 2025 - April 2026
                  </span>
                </div>

                <p className="mt-5 text-base leading-7 text-slate-400">
                  Focused on building scalable enterprise-grade web applications using
                  the Angular framework along with writing the scalable backend
                </p>

                <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-300 sm:text-base">
                  <li>Worked on Install Automation of OpenText Products</li>
                  <li>Refactored the  2500+ lines of code into scalable code with design pattern</li>
                  <li>Organized and led technical KT sessions for new team members.</li>
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  <span className="rounded-xl border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-slate-200">Angular</span>
                  <span className="rounded-xl border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-slate-200">TypeScript</span>
                  <span className="rounded-xl border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-slate-200">RxJS</span>
                  <span className="rounded-xl border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-slate-200">SCSS</span>
                </div>
              </article>

              <article className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-[0_16px_30px_rgba(0,0,0,0.22)]">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                      SDE Intern
                    </h3>
                    <p className="mt-1 text-sm font-medium text-amber-300">Team DNote</p>
                  </div>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-slate-300">
                    September 2025 - October 2025
                  </span>
                </div>

                <p className="mt-5 text-base leading-7 text-slate-400">
                  Worked building the Payments Page for their Platform
                </p>
                <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-300 sm:text-base">
                  <li>Developed the frontend and backend for the handling the subscription for their Pro,Premium Plans Using Razorpay SDK</li>
                </ul>
              </article>
            </div>
          </div>

          <aside className="space-y-6">
            <section className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-[0_16px_30px_rgba(0,0,0,0.22)]">
              <h3 className="text-2xl font-semibold tracking-tight text-white">Education</h3>
              <div className="mt-5 border-l-2 border-sky-500/30 pl-4">
                <p className="text-lg font-semibold text-white">B.Tech in C&amp;E</p>
                <p className="mt-1 text-sm text-slate-400">JSS Science and Technology University</p>
                <p className="mt-2 text-sm text-slate-500">2022 - 2026</p>
                <p className="mt-2 inline-flex rounded-full border border-sky-500/20 bg-sky-500/10 px-3 py-1 text-xs font-semibold text-sky-300">
                  CGPA: 9.2
                </p>
              </div>

              <div className="mt-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Relevant Coursework
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="rounded-xl border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-semibold text-slate-200">Data Structures</span>
                  <span className="rounded-xl border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-semibold text-slate-200">Algorithms</span>
                  <span className="rounded-xl border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-semibold text-slate-200">OS</span>
                  <span className="rounded-xl border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-semibold text-slate-200">Database Systems</span>
                </div>
              </div>
            </section>

            <section className="rounded-2xl border border-sky-500/20 bg-[linear-gradient(145deg,#0f172a_0%,#111827_100%)] p-6 text-slate-100 shadow-[0_20px_36px_rgba(0,0,0,0.28)]">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-300">
                Featured Publication
              </p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                Chemical Compounds Recommendation Engine
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                A RAG based approach for recommending the chemicals and fact checking the chemicals indgredients for the concerned skin type
              </p>
              <a
                href="https://doi.org/10.22214/ijraset.2026.79381"
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-sky-200 underline-offset-4 transition hover:text-white hover:underline"
              >
                Read Paper
              </a>
            </section>
          </aside>
        </div>
      </div>
    </section>
  )
}


export default ExperienceSection
