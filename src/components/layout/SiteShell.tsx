import type { ReactNode } from 'react'
import FloatingNav from './FloatingNav'
import Footer from './Footer'
import Header from './Header'

function SiteShell({
  children,
  className = 'bg-slate-50 pb-28',
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div className={className}>
      <Header />
      {children}
      <Footer />
      <FloatingNav />
    </div>
  )
}

export default SiteShell
