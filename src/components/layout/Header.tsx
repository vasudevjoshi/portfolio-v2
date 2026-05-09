function Header() {
  return (
    <header className="border-b border-white/10 bg-[#0b0f19]/90 backdrop-blur supports-[backdrop-filter]:bg-[#0b0f19]/75">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8">
        <a href="/" className="group flex items-center gap-3 text-slate-100">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-sm font-semibold tracking-[0.18em] text-white transition group-hover:border-sky-400/40 group-hover:bg-sky-400/10">
            VJ
          </span>
          <span className="flex flex-col">
            <span className="text-base font-semibold tracking-tight text-white sm:text-lg">
              Vasudev
            </span>
            <span className="text-[11px] uppercase tracking-[0.22em] text-slate-400">
              Full-stack developer
            </span>
          </span>
        </a>

        <a
          href="/contact"
          className="rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-semibold text-slate-100 transition hover:border-sky-400/40 hover:bg-sky-400/10 hover:text-white"
        >
          Resume
        </a>
      </div>
    </header>
  )
}

export default Header
