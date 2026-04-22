function Header() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8">
        <a href="/" className="text-[1.6rem] font-bold tracking-tight text-slate-900">
          Vasudev
        </a>

        <a
          href="/contact"
          className="rounded-xl bg-blue-700 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(29,78,216,0.28)] transition hover:bg-blue-600"
        >
          Resume
        </a>
      </div>
    </header>
  )
}

export default Header
