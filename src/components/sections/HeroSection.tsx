import { techStack } from '../../data/site'

function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-slate-200 bg-white text-slate-900"
    >
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 lg:block">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_18%,rgba(59,130,246,0.32),rgba(59,130,246,0.08)_34%,transparent_62%)]" />
        <div className="absolute right-[6%] top-[14%] h-[28rem] w-[28rem] rounded-full bg-blue-500/12 blur-3xl" />
      </div>

      <div className="mx-auto grid min-h-[680px] max-w-7xl gap-12 px-6 py-14 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="relative z-10">
          <div className="mb-8 flex flex-wrap items-center gap-5">
            <div className="inline-flex items-center gap-3 rounded-full border border-slate-300 bg-slate-100 px-4 py-2 text-xs font-medium uppercase tracking-[0.16em] text-slate-600">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Available for select projects
            </div>
          </div>

          <div className="max-w-2xl">
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-[3.25rem]">
              Hi, I&apos;m Vasudev{' '}
              <span className="wave-hand inline-block origin-[70%_70%]">👋</span>
            </h1>

            <p className="mt-4 max-w-3xl text-2xl font-semibold leading-tight tracking-tight text-blue-700 sm:text-3xl lg:text-[2.35rem]">
              Full-Stack Developer specializing in Trading Platforms &amp; AI Systems
            </p>

            <p className="mt-7 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
              Building LogX - a trade journal for 10M+ Zerodha traders. Combining
              React, Spring Boot, and AI to solve real problems in fintech.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/projects"
              className="rounded-2xl border border-blue-600 bg-blue-700 px-7 py-3.5 text-sm font-semibold text-white shadow-[0_16px_35px_rgba(29,78,216,0.18)] transition hover:bg-blue-600"
            >
              View Projects
            </a>
            <a
              href="/contact"
              className="rounded-2xl border border-slate-300 bg-white px-7 py-3.5 text-sm font-semibold text-slate-800 transition hover:border-slate-400 hover:bg-slate-50"
            >
              Let&apos;s Talk
            </a>
          </div>

          <div
            id="experience"
            className="mt-14 flex items-center gap-3 text-sm text-slate-500 sm:text-base"
          >
            <EducationIcon className="h-5 w-5 text-slate-400" />
            <p>
              Computer Science &amp; Engineering{' '}
              <span className="font-medium text-slate-700">
                • JSS S&amp;T University, Mysuru
              </span>
            </p>
          </div>
        </div>

        <div className="relative z-10">
          <div className="relative mx-auto max-w-[480px]">
            <div className="absolute -inset-6 rounded-[3rem] bg-[radial-gradient(circle_at_50%_8%,rgba(59,130,246,0.22),transparent_62%)] blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-[linear-gradient(180deg,#f8fbff_0%,#edf3ff_100%)] px-10 py-12 shadow-[0_30px_70px_rgba(15,23,42,0.12)]">
              <div className="flex min-h-[500px] flex-col items-center justify-center">
                <ProfileIcon className="h-32 w-32 text-slate-300" />
                <div className="mt-16 rounded-[1.25rem] bg-white/90 px-8 py-5 text-center shadow-[0_16px_32px_rgba(15,23,42,0.08)] backdrop-blur">
                  <p className="text-xs uppercase tracking-[0.22em] text-blue-700">
                    Full-Stack Engineer
                  </p>
                  <p className="mt-2 text-2xl font-medium text-slate-800">Vasudev</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="core-stack" className="border-y border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-11 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-slate-500">
            Core Technology Stack
          </p>

          <div className="flex flex-wrap gap-4">
            {techStack.map((item) => (
              <span
                key={item}
                className="rounded-xl border border-slate-200 bg-slate-100 px-4 py-2.5 text-sm font-medium text-slate-700"
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

function ProfileIcon({ className = '' }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className={className}
    >
      <path d="M12 12a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z" />
      <path d="M4.5 19.25a7.5 7.5 0 0 1 15 0v.25h-15v-.25Z" />
    </svg>
  )
}

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
