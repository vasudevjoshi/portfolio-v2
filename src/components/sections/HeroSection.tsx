import { Link } from 'react-router'
import { techStack } from '../../data/site'

function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-white/10 bg-[#0b0f19] text-slate-100"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.22),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(34,197,94,0.08),transparent_24%)]" />
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 lg:block">
        <div className="absolute right-[6%] top-[14%] h-[28rem] w-[28rem] rounded-full bg-sky-500/10 blur-3xl" />
      </div>

      <div className="mx-auto grid min-h-[720px] max-w-7xl gap-12 px-6 py-16 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-24">
        <div className="relative z-10">
          <div className="mb-8 flex flex-wrap items-center gap-4">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-300">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Available for select projects
            </div>
            <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-slate-500">
              shipping products for fintech and AI teams
            </span>
          </div>

          <div className="max-w-2xl">
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-[4.45rem] lg:leading-[1]">
              Hi, I&apos;m Vasudev{' '}
              <span className="wave-hand inline-block origin-[70%_70%]">👋</span>
            </h1>

            <p className="mt-5 max-w-3xl text-2xl font-semibold leading-tight tracking-tight text-sky-300 sm:text-3xl lg:text-[2.8rem]">
              Full-Stack Developer building trading platforms, internal tools, and AI systems.
            </p>

            <p className="mt-7 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
              Building products with the restraint of GitHub and the clarity of Tailwind.
              Focused on interfaces that feel sharp, useful, and ready for production.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/projects"
              className="rounded-xl border border-sky-500/30 bg-sky-500/10 px-6 py-3 text-sm font-semibold text-sky-100 transition hover:border-sky-400/50 hover:bg-sky-500/20 hover:text-white"
            >
              View Projects
            </Link>
            <Link
              to="/contact"
              className="rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-white/20 hover:bg-white/10"
            >
              Let&apos;s Talk
            </Link>
          </div>

          <div className="mt-14 grid gap-3 sm:grid-cols-3">
            <StatCard label="Stack" value="React / Spring Boot" />
            <StatCard label="Focus" value="Fintech + AI" />
            <StatCard label="Base" value="JSS S&T University" />
          </div>

          <div id="experience" className="mt-8 flex items-center gap-3 text-sm text-slate-400 sm:text-base">
            <EducationIcon className="h-5 w-5 text-slate-500" />
            <p>
              Computer Science &amp; Engineering{' '}
              <span className="font-medium text-slate-200">• Mysuru, India</span>
            </p>
          </div>
        </div>

        <div className="relative z-10">
          <div className="relative mx-auto max-w-[480px]">
            <div className="absolute -inset-6 rounded-[2rem] bg-[radial-gradient(circle_at_50%_8%,rgba(96,165,250,0.18),transparent_62%)] blur-2xl" />
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0f1629]/90 px-6 py-6 shadow-[0_30px_70px_rgba(0,0,0,0.28)]">
              <div className="flex items-center justify-between border-b border-white/10 px-1 pb-4 text-xs text-slate-400">
                <span className="flex items-center gap-2 font-mono">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                </span>
                <span className="font-mono">/portfolio/v1</span>
              </div>

              <div className="grid gap-4 px-1 py-6">
                <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                  <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-slate-500">
                    currently shipping
                  </p>
                  <p className="mt-3 text-lg font-semibold text-white">
                    Fintech interfaces with clear hierarchy and low-friction flows.
                  </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-xl border border-white/10 bg-slate-950/60 p-4">
                    <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-slate-500">
                      stack
                    </p>
                    <p className="mt-2 text-sm text-slate-200">React, TypeScript, Tailwind</p>
                    <p className="text-sm text-slate-200">Spring Boot, MongoDB, AWS</p>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-slate-950/60 p-4">
                    <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-slate-500">
                      focus
                    </p>
                    <p className="mt-2 text-sm text-slate-200">Developer tools</p>
                    <p className="text-sm text-slate-200">AI-assisted workflows</p>
                  </div>
                </div>

                <div className="rounded-xl border border-sky-500/20 bg-[linear-gradient(180deg,rgba(14,20,35,0.95),rgba(9,13,22,0.95))] p-5 font-mono text-sm text-slate-300">
{`const vasudev = {
  role: "full-stack developer",
  focus: ["fintech", "ai", "dx"],
  standard: "ship clean and maintainable interfaces"
}`}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="core-stack" className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-11 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
            Core Technology Stack
          </p>

          <div className="flex flex-wrap gap-4">
            {techStack.map((item) => (
              <span
                key={item}
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-slate-200"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

type IconProps = {
  className?: string
}

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
      <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">
        {label}
      </p>
      <p className="mt-2 text-sm font-medium text-slate-100">{value}</p>
    </div>
  )
}
// I removed the ProfileIcon component as it was not used in the application.
// function ProfileIcon({ className = '' }: IconProps) {
//   return (
//     <svg
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="1.8"
//       className={className}
//     >
//       <path d="M12 12a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z" />
//       <path d="M4.5 19.25a7.5 7.5 0 0 1 15 0v.25h-15v-.25Z" />
//     </svg>
//   )
// }

function EducationIcon({ className = '' }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className={className}
    >
      <path d="m2.5 8.5 9.5-4 9.5 4-9.5 4-9.5-4Z" />
      <path d="M6 10.25v4.15c0 .8 2.37 2.6 6 2.6s6-1.8 6-2.6v-4.15" />
      <path d="M21.5 9.5v5.25" />
    </svg>
  )
}

export default HeroSection
