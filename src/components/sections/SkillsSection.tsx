import { sideSkillGroups, skillGroups } from '../../data/site'

function SkillsSection() {
  return (
    <section id="skills" className="border-t border-white/10 bg-[#0b0f19] px-6 py-20 text-slate-100 sm:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-300">
            Technical Skills
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Technologies I work with
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-400 sm:text-lg">
            A practical stack focused on building clean interfaces, dependable
            backend systems, and applied AI products for real users.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.95fr_0.95fr]">
          <div className="space-y-6">
            {skillGroups.map((group) => (
              <article
                key={group.title}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-[0_18px_40px_rgba(0,0,0,0.22)] sm:p-7"
              >
                <div className="flex items-center gap-3">
                  <SkillIcon icon={group.icon} className="h-6 w-6 text-sky-300" />
                  <h3 className="text-xl font-semibold tracking-tight text-white">
                    {group.title}
                  </h3>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  {group.items.map((item) => {
                    const skillName = String(item)
                    const featuredItems =
                      'featured' in group && group.featured
                        ? new Set<string>(group.featured)
                        : null
                    const isFeatured = featuredItems?.has(skillName) ?? false

                    return (
                      <span
                        key={skillName}
                        className={`rounded-xl border px-4 py-2 text-sm font-medium ${
                          isFeatured
                            ? 'border-emerald-500/20 bg-emerald-500/10 text-emerald-300'
                            : 'border-white/10 bg-white/5 text-slate-200'
                        }`}
                      >
                        {skillName}
                      </span>
                    )
                  })}
                </div>
              </article>
            ))}
          </div>

          <aside className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-[0_18px_40px_rgba(0,0,0,0.22)] sm:p-7">
            <div className="space-y-10">
              {sideSkillGroups.map((group, index) => (
                <div
                  key={group.title}
                  className={index > 0 ? 'border-t border-white/10 pt-10' : ''}
                >
                  <div className="flex items-center gap-3">
                    <SkillIcon icon={group.icon} className="h-6 w-6 text-sky-300" />
                    <h3 className="text-xl font-semibold tracking-tight text-white">
                      {group.title}
                    </h3>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-200"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 rounded-xl border border-sky-500/20 bg-[#0f1629] p-5 text-slate-100 shadow-[0_16px_32px_rgba(0,0,0,0.18)]">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Code Proficiency
              </p>
              <pre className="mt-4 overflow-x-auto text-xs leading-6 text-slate-300 sm:text-sm">
{`const skills = {
  stack: "Full Stack",
  focus: ["AI", "Fintech"],
  status: "Deploying..."
};`}
              </pre>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}

type SkillIconName =
  | 'frontend'
  | 'backend'
  | 'ai'
  | 'cloud'
  | 'integrations'

function SkillIcon({
  icon,
  className = '',
}: {
  icon: SkillIconName
  className?: string
}) {
  const commonProps = {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '1.9',
    className,
  }

  if (icon === 'frontend') {
    return (
      <svg {...commonProps}>
        <rect x="4.5" y="5.5" width="15" height="13" rx="2" />
        <path d="M4.5 10.5h15" />
        <path d="M10 10.5v8" />
      </svg>
    )
  }

  if (icon === 'backend') {
    return (
      <svg {...commonProps}>
        <path d="M6 6.5h12" />
        <path d="M6 12h12" />
        <path d="M6 17.5h12" />
        <path d="M4.5 6.5h.01" />
        <path d="M4.5 12h.01" />
        <path d="M4.5 17.5h.01" />
      </svg>
    )
  }

  if (icon === 'ai') {
    return (
      <svg {...commonProps}>
        <path d="M12 3.75a6 6 0 0 1 6 6v2.1a4.9 4.9 0 0 1-1.4 3.45L14.75 17v2.25h-5.5V17L7.4 15.3A4.9 4.9 0 0 1 6 11.85v-2.1a6 6 0 0 1 6-6Z" />
        <path d="M10 21h4" />
        <path d="M9.75 9.75h.01" />
        <path d="M14.25 9.75h.01" />
        <path d="M12 9.5v3.5" />
      </svg>
    )
  }

  if (icon === 'cloud') {
    return (
      <svg {...commonProps}>
        <path d="M7.5 18.5h9a3 3 0 0 0 .4-5.97A4.75 4.75 0 0 0 7.9 9.5a3.5 3.5 0 0 0-.4 6.97Z" />
      </svg>
    )
  }

  return (
    <svg {...commonProps}>
      <path d="m7 12 5-5 5 5-5 5-5-5Z" />
      <path d="M12 7V3.5" />
      <path d="M17 12h3.5" />
      <path d="M12 17v3.5" />
      <path d="M7 12H3.5" />
    </svg>
  )
}

export default SkillsSection
