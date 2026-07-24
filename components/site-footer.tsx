import Link from 'next/link'

const footerLinks = [
  { label: 'Home', href: '#' },
  { label: 'Services', href: '#services' },
  { label: 'Locations', href: '#hours' },
  { label: 'Salina Academy', href: '#story' },
  { label: 'Franchise', href: '#contact' },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-primary-foreground/10 bg-primary py-16 text-primary-foreground">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 px-4 md:px-6">
        <p className="font-serif text-3xl tracking-wide">
          Slay <span className="italic">by</span> Salina
        </p>

        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {footerLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-xs font-light uppercase tracking-[0.2em] text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-8">
          <Link
            href="https://www.instagram.com/slaybysalina_unisexsalon"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-light uppercase tracking-[0.2em] text-primary-foreground/70 underline-offset-4 transition-colors hover:text-primary-foreground hover:underline"
          >
            Instagram
          </Link>
        </div>

        <p className="text-xs font-light text-primary-foreground/50">
          &copy; {new Date().getFullYear()} Slay By Salina. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
