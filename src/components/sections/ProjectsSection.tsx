import { featuredProjects } from '../../data/site'

function ProjectsSection() {
  const topProjects = featuredProjects.filter((project) => project.layout === 'standard')
  const featuredProject = featuredProjects.find((project) => project.layout === 'featured')

  return (
    <section id="projects" className="border-t border-white/10 bg-[#0b0f19] px-6 py-18 text-slate-100 sm:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-300">
            Featured Projects
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            What I&apos;ve been building
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-400 sm:text-lg">
            A selection of technical explorations, research implementations, and
            production-grade engineering.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {topProjects.map((project) => (
            <article
              key={project.title}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-[0_18px_40px_rgba(0,0,0,0.22)]"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-slate-950/70 text-sky-300">
                  <ProjectIcon icon={project.icon} className="h-6 w-6" />
                </div>
                <span className={statusClassName(project.statusTone)}>{project.status}</span>
              </div>

              <h3 className="mt-7 text-2xl font-semibold tracking-tight text-white">
                {project.title}
              </h3>
              <p className="mt-4 text-base leading-8 text-slate-400">{project.description}</p>

              <div className="mt-7 flex flex-wrap gap-3">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href={project.primaryHref}
                  target={project.primaryHref.startsWith('http') ? '_blank' : undefined}
                  rel={project.primaryHref.startsWith('http') ? 'noreferrer' : undefined}
                  className="inline-flex items-center gap-2 rounded-xl border border-sky-500/30 bg-sky-500/10 px-6 py-3 text-sm font-semibold text-sky-100 transition hover:border-sky-400/50 hover:bg-sky-500/20 hover:text-white"
                >
                  {project.primaryLabel}
                  <ArrowIcon className="h-4 w-4" />
                </a>

                {project.secondaryHref ? (
                  <a
                    href={project.secondaryHref}
                    target={project.secondaryHref.startsWith('http') ? '_blank' : undefined}
                    rel={project.secondaryHref.startsWith('http') ? 'noreferrer' : undefined}
                    className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 transition hover:text-white"
                  >
                    <CodeIcon className="h-4 w-4" />
                    {project.secondaryLabel}
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>

        {featuredProject ? (
          <article className="mt-6 rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-[0_18px_40px_rgba(0,0,0,0.22)]">
            <div className="grid gap-8 lg:grid-cols-[0.6fr_1fr] lg:items-center">
              <div className="overflow-hidden rounded-xl border border-white/10 bg-slate-950/70 p-3">
                <div className="relative h-[220px] rounded-[0.85rem] bg-[radial-gradient(circle_at_60%_70%,rgba(59,130,246,0.38),transparent_18%),linear-gradient(145deg,#0f172a_0%,#111827_100%)]">
                  <div className="absolute left-5 top-5 h-5 w-40 rounded-full bg-white/8" />
                  <div className="absolute left-5 top-14 h-3 w-28 rounded-full bg-white/8" />
                  <div className="absolute left-5 top-20 h-3 w-20 rounded-full bg-white/8" />
                  <div className="absolute left-5 top-28 h-24 w-[78%] rounded-xl border border-white/10 bg-white/[0.04]" />
                  <div className="absolute left-[56%] top-[52%] h-16 w-16 rounded-full border border-sky-300/40 bg-sky-400/15 shadow-[0_0_24px_rgba(96,165,250,0.25)]" />
                  <div className="absolute left-[62%] top-[67%] h-10 w-2 -rotate-45 rounded-full bg-sky-300/80" />
                </div>
              </div>

              <div>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-slate-950/70 text-sky-300">
                    <ProjectIcon icon={featuredProject.icon} className="h-6 w-6" />
                  </div>
                  <span className={statusClassName(featuredProject.statusTone)}>
                    {featuredProject.status}
                  </span>
                </div>

                <h3 className="mt-6 text-2xl font-semibold tracking-tight text-white">
                  {featuredProject.title}
                </h3>
                <p className="mt-4 max-w-3xl text-base leading-8 text-slate-400">
                  {featuredProject.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  {featuredProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-8">
                  <a
                    href={featuredProject.primaryHref}
                    target={featuredProject.primaryHref.startsWith('http') ? '_blank' : undefined}
                    rel={featuredProject.primaryHref.startsWith('http') ? 'noreferrer' : undefined}
                    className="inline-flex items-center gap-2 text-base font-medium text-sky-300 transition hover:text-white"
                  >
                    {featuredProject.primaryLabel}
                    <ArrowIcon className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </article>
        ) : null}
      </div>
    </section>
  )
}

function statusClassName(tone: 'green' | 'neutral' | 'blue') {
  if (tone === 'green') {
    return 'inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-xs font-semibold text-emerald-300'
  }

  if (tone === 'blue') {
    return 'inline-flex items-center gap-2 rounded-full border border-sky-500/20 bg-sky-500/10 px-4 py-2 text-xs font-semibold text-sky-300'
  }

  return 'inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-slate-300'
}

function ProjectIcon({
  icon,
  className = '',
}: {
  icon: 'chart' | 'lab' | 'stack'
  className?: string
}) {
  const commonProps = {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '1.9',
    className,
  }

  if (icon === 'chart') {
    return (
      <svg {...commonProps}>
        <rect x="4.5" y="4.5" width="15" height="15" rx="2" />
        <path d="M8 15v-4" />
        <path d="M12 15V9" />
        <path d="M16 15v-7" />
      </svg>
    )
  }

  if (icon === 'lab') {
    return (
      <svg {...commonProps}>
        <path d="M10 4.5h4" />
        <path d="M11 4.5v5l-5 8a1 1 0 0 0 .86 1.5h10.28A1 1 0 0 0 18 17.5l-5-8v-5" />
        <path d="M8.5 14h7" />
      </svg>
    )
  }

  return (
    <svg {...commonProps}>
      <rect x="4.5" y="5" width="15" height="5" rx="1.5" />
      <rect x="4.5" y="14" width="15" height="5" rx="1.5" />
      <path d="M8 7.5h4" />
      <path d="M8 16.5h7" />
    </svg>
  )
}

function ArrowIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      className={className}
    >
      <path d="M5 19 19 5" />
      <path d="M10 5h9v9" />
    </svg>
  )
}

function CodeIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      className={className}
    >
      <path d="m9 8-4 4 4 4" />
      <path d="m15 8 4 4-4 4" />
    </svg>
  )
}

export default ProjectsSection
