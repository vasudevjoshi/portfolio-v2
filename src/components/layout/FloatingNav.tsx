import { floatingNavItems } from '../../data/site'

function FloatingNav() {
  return (
    <nav
      aria-label="Quick navigation"
      className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2"
    >
      <div className="flex min-w-[21rem] items-center justify-between gap-3 rounded-full border border-slate-200 bg-white/95 px-5 py-2.5 shadow-[0_20px_50px_rgba(15,23,42,0.25)] backdrop-blur sm:min-w-[26rem] sm:px-6">
        {floatingNavItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            aria-label={item.label}
            className="group flex h-10 w-10 items-center justify-center rounded-full text-slate-500 transition hover:bg-slate-100 hover:text-blue-700"
          >
            <NavIcon icon={item.icon} />
          </a>
        ))}
      </div>
    </nav>
  )
}

type IconName = (typeof floatingNavItems)[number]['icon']

function NavIcon({ icon }: { icon: IconName }) {
  const commonProps = {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '1.9',
    className: 'h-5.5 w-5.5',
  }

  if (icon === 'home') {
    return (
      <svg {...commonProps}>
        <path d="M4.75 10.25 12 4.75l7.25 5.5v8a1 1 0 0 1-1 1h-3.5v-6h-5.5v6h-3.5a1 1 0 0 1-1-1v-8Z" />
      </svg>
    )
  }

  if (icon === 'projects') {
    return (
      <svg {...commonProps}>
        <rect x="4.5" y="5" width="15" height="14" rx="2" />
        <path d="M4.5 10.5h15" />
        <path d="M10 10.5V19" />
      </svg>
    )
  }

  if (icon === 'experience') {
    return (
      <svg {...commonProps}>
        <rect x="4.5" y="7" width="15" height="11.5" rx="2" />
        <path d="M9 7V5.5h6V7" />
        <path d="M4.5 11.25h15" />
      </svg>
    )
  }

  if (icon === 'skills') {
    return (
      <svg {...commonProps}>
        <path d="m14.5 6.25 3.25-3.25 3 3-3.25 3.25" />
        <path d="m12.75 8 3.25 3.25" />
        <path d="M5 19 12 12" />
        <path d="m9.5 5-4 4 9.5 9.5 4-4Z" />
      </svg>
    )
  }

  return (
    <svg {...commonProps}>
      <path d="M5.5 7.5h13" />
      <path d="M7 4.5h10" />
      <path d="M6.5 7.5v8a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2v-8" />
      <path d="m10 11 2 2 2.5-3" />
    </svg>
  )
}

export default FloatingNav
