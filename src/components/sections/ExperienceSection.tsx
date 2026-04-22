function ExperienceSection() {
  return (
    <section id="experience" className="bg-white px-6 py-16 sm:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
            Professional Journey
          </p>
          <h1 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Experience &amp; Education
          </h1>
          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
            An overview of my professional contributions, research achievements,
            and academic foundation in computer science.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.75fr_0.95fr] lg:items-start">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
              Career Timeline
            </h2>

            <div className="mt-6 space-y-6">
              <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_16px_30px_rgba(15,23,42,0.06)]">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="text-3xl font-semibold tracking-tight text-slate-900">
                      Founder &amp; Developer
                    </h3>
                    <p className="mt-1 text-sm font-medium text-blue-700">LogX</p>
                  </div>
                  <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                    2024 - Present
                  </span>
                </div>

                <p className="mt-5 text-base leading-7 text-slate-600">
                  Spearheading the development of a comprehensive trade journaling
                  platform designed for professional traders.
                </p>

                <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-700 sm:text-base">
                  <li>Integrated Kite API for real-time trade data synchronization and order management.</li>
                  <li>Engineered a proprietary emotion tracking module to help traders analyze psychological biases in decision making.</li>
                  <li>Built an automated reporting engine generating insights into profitability and risk-reward ratios.</li>
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">React</span>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">Node.js</span>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">Kite Connect</span>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">PostgreSQL</span>
                </div>
              </article>

              <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_16px_30px_rgba(15,23,42,0.06)]">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="text-3xl font-semibold tracking-tight text-slate-900">
                      Angular Developer Intern
                    </h3>
                    <p className="mt-1 text-sm font-medium text-emerald-700">Tech systems Inc.</p>
                  </div>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                    2023 - 2024
                  </span>
                </div>

                <p className="mt-5 text-base leading-7 text-slate-600">
                  Focused on building scalable enterprise-grade web applications using
                  the Angular framework.
                </p>

                <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-700 sm:text-base">
                  <li>Developed config-driven dynamic forms that reduced frontend development time by 40%.</li>
                  <li>Designed and implemented advanced report generation features with complex data visualization.</li>
                  <li>Organized and led technical KT sessions for onboarding new team members.</li>
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">Angular</span>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">TypeScript</span>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">RxJS</span>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">SCSS</span>
                </div>
              </article>

              <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_16px_30px_rgba(15,23,42,0.06)]">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="text-3xl font-semibold tracking-tight text-slate-900">
                      Research Assistant
                    </h3>
                    <p className="mt-1 text-sm font-medium text-amber-700">JeevTU Research Cell</p>
                  </div>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                    2022 - 2023
                  </span>
                </div>

                <p className="mt-5 text-base leading-7 text-slate-600">
                  Collaborated on machine learning research focused on chemical
                  informatics and data-driven discovery.
                </p>

                <div className="mt-5 rounded-2xl border border-amber-200 bg-amber-50 p-4">
                  <p className="text-sm font-semibold text-amber-800">IEEE Publication</p>
                  <p className="mt-2 text-sm leading-6 text-amber-900">
                    Chemical Compounds Recommendation Engine published at the IEEE
                    International Conference on Technical Advancements.
                  </p>
                </div>
              </article>
            </div>
          </div>

          <aside className="space-y-6">
            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_16px_30px_rgba(15,23,42,0.06)]">
              <h3 className="text-2xl font-semibold tracking-tight text-slate-900">Education</h3>
              <div className="mt-5 border-l-2 border-blue-100 pl-4">
                <p className="text-lg font-semibold text-slate-900">B.Tech in C&amp;E</p>
                <p className="mt-1 text-sm text-slate-600">JSS Science and Technology University</p>
                <p className="mt-2 text-sm text-slate-500">2022 - 2026</p>
                <p className="mt-2 inline-flex rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                  CGPA: 9.2
                </p>
              </div>

              <div className="mt-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Relevant Coursework
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-600">Data Structures</span>
                  <span className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-600">Algorithms</span>
                  <span className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-600">OS</span>
                  <span className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-600">Database Systems</span>
                </div>
              </div>
            </section>

            <section className="rounded-3xl bg-[linear-gradient(145deg,#0f172a_0%,#1e3a8a_100%)] p-6 text-slate-100 shadow-[0_20px_36px_rgba(15,23,42,0.32)]">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-200">
                Featured Publication
              </p>
              <h3 className="mt-3 text-3xl font-semibold tracking-tight text-white">
                Chemical Compounds Recommendation Engine
              </h3>
              <p className="mt-3 text-sm leading-6 text-blue-100">
                A machine learning approach to predicting molecular synergies and
                properties for chemical engineering researchers.
              </p>
              <a
                href="https://doi.org/10.22214/ijraset.2026.79381"
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-100 underline-offset-4 transition hover:text-white hover:underline"
              >
                Read Paper
              </a>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_16px_30px_rgba(15,23,42,0.06)]">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Top Skills</p>

              <div className="mt-4 space-y-4">
                <SkillBar label="Full-stack Dev" value={92} />
                <SkillBar label="Data Visualization" value={88} />
                <SkillBar label="System Architecture" value={85} />
              </div>
            </section>
          </aside>
        </div>
      </div>
    </section>
  )
}

function SkillBar({ label, value }: { label: string; value: number }) {
  return (
    <div>
      <div className="flex items-center justify-between text-sm text-slate-700">
        <span>{label}</span>
        <span className="font-semibold text-slate-500">{value}%</span>
      </div>
      <div className="mt-2 h-2 rounded-full bg-slate-200">
        <div
          className="h-2 rounded-full bg-blue-600"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  )
}

export default ExperienceSection
