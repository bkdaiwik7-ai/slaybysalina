'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Locations', href: '#hours' },
  { label: 'Salina Academy', href: '#story' },
  { label: 'Franchise', href: '#contact' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
        <button
          type="button"
          className="flex size-10 items-center justify-center md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>

        <Link href="#" className="whitespace-nowrap font-serif text-xl tracking-wide sm:text-2xl md:text-3xl">
          Slay <span className="italic">by</span> Salina
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-xs font-light uppercase tracking-[0.2em] text-foreground transition-colors hover:text-accent"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/book"
          className="hidden bg-primary px-5 py-3 text-xs uppercase tracking-[0.15em] text-primary-foreground transition-opacity hover:opacity-85 md:block"
        >
          Book an appointment
        </Link>

        <Link
          href="/book"
          className="flex min-h-11 items-center bg-primary px-4 py-2.5 text-[11px] uppercase tracking-[0.1em] text-primary-foreground md:hidden"
        >
          Book
        </Link>
      </div>

      {open && (
        <nav className="border-t border-border bg-background px-6 py-2 md:hidden" aria-label="Mobile navigation">
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="block py-3 text-sm uppercase tracking-[0.2em]"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
