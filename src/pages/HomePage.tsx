import { useEffect, useState } from 'react'
import SiteShell from '../components/layout/SiteShell'
import HeroSection from '../components/sections/HeroSection'
import Loader from '../components/ui/Loader'

function HomePage() {
  const [showLoader, setShowLoader] = useState(true)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const revealTimer = window.setTimeout(() => {
      setIsLoaded(true)
    }, 1400)

    const hideLoaderTimer = window.setTimeout(() => {
      setShowLoader(false)
    }, 2000)

    return () => {
      window.clearTimeout(revealTimer)
      window.clearTimeout(hideLoaderTimer)
    }
  }, [])

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0b0f19] text-slate-100">
      <div
        className={`transition-all duration-700 ease-out ${
          isLoaded
            ? 'translate-y-0 opacity-100'
            : 'pointer-events-none translate-y-4 opacity-0'
        }`}
      >
        <SiteShell>
          <HeroSection />
        </SiteShell>
      </div>

      {showLoader ? (
        <div
          className={`absolute inset-0 z-[100] transition-opacity duration-700 ease-out ${
            isLoaded ? 'pointer-events-none opacity-0' : 'opacity-100'
          }`}
        >
          <Loader />
        </div>
      ) : null}
    </div>
  )
}

export default HomePage
