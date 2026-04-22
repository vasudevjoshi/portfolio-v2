import { socialLinks } from '../../data/site'

function Footer() {
  return (
    <footer id="contact" className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-14 text-slate-700 sm:px-8 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Vasudev Joshi</h2>
          <p className="mt-2 text-base text-slate-500 sm:text-lg">
            &copy; 2024. Built with architectural clarity.
          </p>
        </div>

        <nav className="flex flex-wrap gap-6 text-sm font-medium text-slate-500 sm:text-base">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
              className="underline-offset-4 transition hover:text-blue-700 hover:underline"
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
