import { LocationMap } from '@/components/ui/expand-map'
import { contactCards, contactLinks, contactMeta } from '../../data/site'

function ContactSection() {
  return (
    <section id="contact" className="border-t border-white/10 bg-[#0b0f19] px-6 py-14 text-slate-100 sm:px-8 lg:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">
              Connect
            </p>
            <h1 className="mt-4 max-w-4xl text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-[3rem]">
              LET&apos;S BUILD SOMETHING
            </h1>
            <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
              I&apos;m open to opportunities and collaborations. Whether you have a
              question or just want to say hi, I&apos;ll try my best to get back to you.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {contactCards.map((card) => (
                <a
                  key={card.title}
                  href={card.href}
                  target={card.href.startsWith('http') ? '_blank' : undefined}
                  rel={card.href.startsWith('http') ? 'noreferrer' : undefined}
                  className="rounded-xl border border-white/10 bg-white/[0.04] px-5 py-5 shadow-[0_16px_40px_rgba(0,0,0,0.22)] transition hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.06]"
                >
                  <div className="flex items-center gap-3 text-slate-400">
                    <ContactIcon icon={card.icon} className="h-5 w-5 text-sky-300" />
                    <p className="text-xs font-semibold uppercase tracking-[0.14em]">
                      {card.title}
                    </p>
                  </div>
                  <p className="mt-3 text-lg font-semibold text-white sm:text-[1.45rem]">
                    {card.value}
                  </p>
                </a>
              ))}
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-4">
              <a
                href={contactMeta.resumeHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 rounded-xl border border-sky-500/30 bg-sky-500/10 px-7 py-3.5 text-sm font-semibold text-sky-100 transition hover:border-sky-400/50 hover:bg-sky-500/20 hover:text-white"
              >
                <ContactIcon icon="download" className="h-4.5 w-4.5" />
                Download Resume
              </a>

              <a
                href={contactMeta.portfolioHref}
                target="_blank"
                rel="noreferrer"
                aria-label="Visit website"
                className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition hover:border-white/20 hover:text-white"
              >
                <ContactIcon icon="link" className="h-4.5 w-4.5" />
              </a>

              <a
                href={contactMeta.codeHref}
                target="_blank"
                rel="noreferrer"
                aria-label="View code profile"
                className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition hover:border-white/20 hover:text-white"
              >
                <ContactIcon icon="code" className="h-4.5 w-4.5" />
              </a>
            </div>
          </div>

          <div className="space-y-5">
            <div className="relative z-10 flex flex-col gap-4">
              <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-slate-500">
                Current Location
              </p>
              <LocationMap
                location={contactMeta.location}
                coordinates={contactMeta.coordinates}
                latitude={contactMeta.latitude}
                longitude={contactMeta.longitude}
              />
            </div>

            <article className="rounded-2xl border border-sky-500/20 bg-[linear-gradient(145deg,#0f172a_0%,#111827_100%)] px-6 py-7 text-white shadow-[0_24px_50px_rgba(0,0,0,0.24)]">
              <div className="flex items-start gap-4">
                <div className="mt-1 flex h-12 w-12 items-center justify-center rounded-xl bg-sky-500/10 text-sky-300">
                  <ContactIcon icon="dot" className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold tracking-tight">
                    {contactMeta.availabilityTitle}
                  </h2>
                  <p className="mt-3 max-w-md text-sm leading-6 text-slate-300 sm:text-base">
                    {contactMeta.availabilityText}
                  </p>
                </div>
              </div>
            </article>

            <div className="grid gap-4 sm:grid-cols-2">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-base font-medium text-slate-200 shadow-[0_10px_24px_rgba(0,0,0,0.18)] transition hover:-translate-y-0.5 hover:border-white/20 hover:text-white"
                >
                  <ContactIcon icon={link.icon} className="h-4.5 w-4.5 text-slate-400" />
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

type ContactIconName =
  | 'mail'
  | 'phone'
  | 'globe'
  | 'download'
  | 'link'
  | 'code'
  | 'dot'
  | 'arrow'
  | 'card'

function ContactIcon({
  icon,
  className = '',
}: {
  icon: ContactIconName
  className?: string
}) {
  const commonProps = {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '1.9',
    className,
  }

  if (icon === 'mail') {
    return (
      <svg {...commonProps}>
        <rect x="3.75" y="5.5" width="16.5" height="13" rx="2" />
        <path d="m4.5 7 7.5 5.5L19.5 7" />
      </svg>
    )
  }

  if (icon === 'phone') {
    return (
      <svg {...commonProps}>
        <path d="M7.5 4.75h2l1.1 3.2-1.6 1.6a12.5 12.5 0 0 0 5.45 5.45l1.6-1.6 3.2 1.1v2a1.5 1.5 0 0 1-1.5 1.5A13.25 13.25 0 0 1 6 6.25a1.5 1.5 0 0 1 1.5-1.5Z" />
      </svg>
    )
  }

  if (icon === 'globe') {
    return (
      <svg {...commonProps}>
        <circle cx="12" cy="12" r="8.25" />
        <path d="M3.75 12h16.5" />
        <path d="M12 3.75a13 13 0 0 1 0 16.5" />
        <path d="M12 3.75a13 13 0 0 0 0 16.5" />
      </svg>
    )
  }

  if (icon === 'download') {
    return (
      <svg {...commonProps}>
        <path d="M12 4.5v10" />
        <path d="m8.5 11 3.5 3.5 3.5-3.5" />
        <path d="M5 18.5h14" />
      </svg>
    )
  }

  if (icon === 'link') {
    return (
      <svg {...commonProps}>
        <path d="M10 14 8.25 15.75a3 3 0 1 1-4.25-4.25L5.75 9.75A3 3 0 0 1 10 14Z" />
        <path d="M14 10 15.75 8.25a3 3 0 1 1 4.25 4.25l-1.75 1.75A3 3 0 0 1 14 10Z" />
        <path d="m9.5 14.5 5-5" />
      </svg>
    )
  }

  if (icon === 'code') {
    return (
      <svg {...commonProps}>
        <path d="m9 8-4 4 4 4" />
        <path d="m15 8 4 4-4 4" />
      </svg>
    )
  }

  if (icon === 'dot') {
    return (
      <svg {...commonProps}>
        <circle cx="12" cy="12" r="7.5" />
        <circle cx="12" cy="12" r="2.5" />
      </svg>
    )
  }

  if (icon === 'arrow') {
    return (
      <svg {...commonProps}>
        <path d="M5 16 16 5" />
        <path d="M9 5h7v7" />
      </svg>
    )
  }

  return (
    <svg {...commonProps}>
      <rect x="4" y="5.5" width="16" height="13" rx="2" />
      <path d="M7.5 9h3" />
      <path d="M7.5 12h9" />
    </svg>
  )
}

export default ContactSection
