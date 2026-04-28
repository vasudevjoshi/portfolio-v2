import { socialLinks } from '../../data/site'

function Footer() {
  return (
    <footer id="contact" className="border-t border-white/10 bg-[#0b0f19]">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-14 text-slate-300 sm:px-8 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">Vasudev Joshi</h2>
          <p className="mt-2 max-w-xl text-sm leading-6 text-slate-400 sm:text-base">
            &copy; 2024. Built with architectural clarity.
          </p>
        </div>

        <nav className="flex flex-wrap gap-6 text-sm font-medium text-slate-400 sm:text-base">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
              className="transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  )
}

export default Footer
