import type { ReactNode } from 'react'
import FloatingNav from './FloatingNav'
import Footer from './Footer'
import Header from './Header'

function SiteShell({
  children,
  className = 'bg-[#0b0f19] pb-28 text-slate-100',
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div className={`relative isolate overflow-hidden ${className}`}>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.18),transparent_28%),radial-gradient(circle_at_top_left,rgba(15,118,110,0.12),transparent_24%),linear-gradient(180deg,rgba(15,23,42,0.06),transparent_35%)]"
      />
      <Header />
      <main className="relative z-10">{children}</main>
      <Footer />
      <FloatingNav />
    </div>
  )
}

export default SiteShell
